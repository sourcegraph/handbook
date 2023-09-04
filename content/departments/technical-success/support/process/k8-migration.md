# How to Migrate Sourcegraph from one cluster to another.

The instructions in this document will guide you on the steps you need to take to migrate your Sourcegraph deployment from one Cluster to another. This is a process that involves the backing up of the Sourcegraph database by generating dumps and restoring the dumps in the newly deployed Sourcegraph instance on another cluster.

> [!WARNING] **Only core data will be backed up**.
>
> These instructions will only back up core data including user accounts, configuration, repository-metadata, etc. Other data will be regenerated automatically:
>
> - Repositories will be re-cloned
> - Search indexes will be rebuilt from scratch
>
> The above may take a while if you have a lot of repositories. In the meantime, searches may be slow or return incomplete results. This process rarely takes longer than 6 hours and is usually **much** faster.

> [!NOTE] In some places you will see `$NAMESPACE` used. Add `-n $NAMESPACE` to commands if you are not using the default namespace
> More kubectl configuration options can be found here: [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## Overview

1. Backup Sourcegraph databases in the old cluster by generating dumps
2. Restore the Dumps in the freshly deployed instance on another cluster.

### Steps to backup Sourcegraph Databases

In this section of the tutorial, you would learn how to back up the primary `sourcegraph` database and the `codeintel` database.

- Verify that the deployment is running.

  `kubectl get pods -A`

- Stop all connections to the database by removing the frontend deployment.

  `kubectl scale --replicas=0 deployment/sourcegraph-frontend`

- Generate the database dumps.

  - Dumps for the primary **sourcegraph** DB
    `kubectl exec -it $pgsql_POD_NAME -- bash -c 'pg_dump -C --username sg sg' > sourcegraph_db.out`

  - Dumps for the **codeintel** DB
    `kubectl exec -it $codeintel-db_POD_NAME -- bash -c 'pg_dump -C --username sg sg' > codeintel_db.out`

- Ensure you copy/move the `sourcegraph_db.out` and `codeintel_db.out` files to the root of the `deploy-sourcegraph` directory of the new Sourcegraph deployment.
  > These files are sensitive and should be stored/transported securely.

### Steps to restore Sourcegraph Databases into a new environment

In this section of the tutorial, you would learn how to restore the primary `sourcegraph` database and the `codeintel` database from the generated dumps in the previous section.

- Before restoring on the new deployment, It is very important you stop all connections to the Database from the frontend.

  -     Scale down all the pods in the deployment
    `kubectl scale deployment ---all --replicas=0 `
  -     Scale down all the statefulset
    `kubectl scale sts ---all --replicas=0 `

- Then restart ONLY the `pgsql` and `codeintel` pods

  -     Start the pgsql:
    `kubectl scale pgsql --replicas=1 `
  -     Start the codeintel-db:
    `kubectl scale codeintel-db --replicas=1 `

- Copy the database files into the pods by running the following command from the root of the deploy-sourcegraph directory

  ` kubectl cp sourcegraph_db.out $pgsql_POD_NAME:/tmp/sourcegraph_db.out`

  `kubectl cp codeintel_db.out $codeintel-db_POD_NAME:/tmp/codeintel_db.out`

- Exec into the pgsql pod and then the template1 database:

  ```
  kubectl exec -it <pgsql-pod-name> -- sh
  $ psql -U sg template1
  ```

- Drop the sg database, recreate it, then exit the psql session (but still in the pod exec):

      ```
      # DROP DATABASE sg;
      # CREATE DATABASE sg;
      # \q
      ```

  > **Note**: This is a process that we have to do to work around how Sourcegraph sets up the databases as at the time of writing this documentation. Our database pods automatically create the `sg` database on startup if it isn't present. Our liveness probes also check for it which means it not being present can cause `k8s` to kill the pod.

- Restore the database dump:

  ```
  $ psql -U sg -f /tmp/sourcegraph_db.out sg
  $ psql -U sg -f /tmp/codeintel_db.out sg

  ```

- Exec into the pgsql and run ` SELECT * FROM REPO LIMIT 5;` to be sure the restoration was complete.

- Run `kubectl apply --recursive -f base/` to apply the changes.
- Run `kubectl get pods -o wide` to make sure your pods are running again.
- Start the remaining Sourcegraph services by following the steps in [applying manifests](https://docs.sourcegraph.com/admin/install/kubernetes/operations#applying-manifests).

*     Scale down all the pods in the deployment
  `kubectl scale deployment ---all --reliplicas=0 `
*     Scale down all the statefulset

  `kubectl scale sts ---all --reliplicas=0 `

* Then restart ONLY the `pgsql` and `codeintel` pods

  -     Start the pgsql:
    `kubectl scale pgsql --replicas=1 `
  -     Start the codeintel-db:
    `kubectl scale codeintel-db --replicas=1 `

* Copy the database files into the pods by running the following command from the root of the deploy-sourcegraph directory

  ` kubectl cp sourcegraph_db.out $pgsql_POD_NAME:/tmp/sourcegraph_db.out`

  `kubectl cp codeintel_db.out $codeintel-db_POD_NAME:/tmp/codeintel_db.out`

* Exec into the pgsql pod and then the template1 database:

  ```
  kubectl exec -it <pgsql-pod-name> -- sh
  $ psql -U sg template1
  ```

* Drop the sg database, recreate it, then exit the psql session (but still in the pod exec):

      ```
      # DROP DATABASE sg;
      # CREATE DATABASE sg;
      # \q
      ```

  > **Note**: This is a process that we have to do to work around how Sourcegraph sets up the databases as at the time of writing this documentation. Our database pods automatically create the `sg` database on startup if it isn't present. Our liveness probes also check for it which means it not being present can cause `k8s` to kill the pod.

* Restore the database dump:

  ```
  $ psql -U sg -f /tmp/sourcegraph_db.out sg
  $ psql -U sg -f /tmp/codeintel_db.out sg

  ```

* Exec into the pgsql and run ` SELECT * FROM REPO LIMIT 5;` to be sure the restoration was complete.

* Run `kubectl apply --recursive -f base/` to apply the changes.
* Run `kubectl get pods -o wide` to make sure your pods are running again.
* Start the remaining Sourcegraph services by following the steps in [applying manifests](https://docs.sourcegraph.com/admin/install/kubernetes/operations#applying-manifests).

### Additional Information

- Since your new deployment was running on a port before the restore, there is a probability that you might lose connection. Run `sudo lsof -i -P | grep LISTEN` to see the services using the port and kill the `PID` with `kill -9 <PID_number>`.

- You can now port forward your k8s deployment to localhost or wherever your deployment is hosted. For example, `kubectl port-forward svc/sourcegraph-frontend 3080:30080` (note you may need to add `-n $NAMESPACE` to the command).
