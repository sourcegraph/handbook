# Testing deployments

This section documents testing clusters and deployments.

## Create a project in the "Engineering Projects" folder

Create a folder with your name [here](https://console.cloud.google.com/projectselector2/home/dashboard?orgonly=true&supportedpurview=project&project=&folder=795981974432) following our [naming conventions](../environments.md#Engineering-Projects)

## How to manually start a test cluster in our "Sourcegraph Auxiliary' project on GCP

- Go to your project
- Click create a cluster.
- Give it a name (a good convention is to prefix with your username).
- Keep the defaults zonal and us-central1.
- Set the default pool to 3 nodes.
- Change machine type to n1-standard-16.
- Click "Create Cluster".
- When cluster is ready, click connect and copy/paste the command and execute it (it looks something
  like `gcloud container clusters get-credentials ....`). Now kubectl is acting on this cluster.
- Give yourself admin superpowers by executing:

```shell
kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value account)
```

- Add a storage class by saving these contents

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: sourcegraph
  labels:
    deploy: sourcegraph-storage
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd # This configures SSDs (recommended).
```

into a file 'sourcegraph.Storageclass.yaml' and executing

```shell
kubectl apply -f sourcegraph.Storageclass.yaml
```

- cd to your clone of [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) and follow the remaining
  steps of the [installation](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/install.md).

```shell
./kubectl-apply-all.sh
```

> Recommendation: [k9s](https://github.com/derailed/k9s) is a nice command-line GUI tool for common kubectl operations.
> It shows the state of your cluster and offers keyboard short-cuts for all the common kubectl commands.

- Once all the pods are running you can port-forward the frontend (or any other services you are interested in)

```shell
kubectl port-forward svc/sourcegraph-frontend 3080:30080
```

Please delete your test cluster when you are done testing. You may also consider deleting your project to ensure all resources tied to your account are cleaned up.

## How to start a test cluster in your project on GCP with a script

The following script executes the same steps that were described in the previous section. Place the script in the root
directory of your [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) clone
(also add it to your `.git/info/exclude`).
Execute it from the repo root directory. It will spin up a test cluster in the namespace `ns-sourcegraph`.

```
export PROJECT=$(whoami)-testing
export PARENT_FOLDER=795981974432
gcloud projects create --folder=${PARENT_FOLDER} ${PROJECT}
```

```shell script
#!/usr/bin/env bash

set -ex

if [  -d "generated-cluster" ]
then
    echo "Directory generated-cluster already exists. This script would override its contents. Please move it away."
    exit 1
fi

USER=$(whoami)

mkdir generated-cluster

./overlay-generate-cluster.sh namespaced generated-cluster

gcloud container clusters create "${USER}"-testing --zone us-central1-a --num-nodes 3 --machine-type n1-standard-16 --disk-type pd-ssd --project $PROJECT
gcloud container clusters get-credentials "${USER}"-testing --zone us-central1-a --project $PROJECT

kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value account)

kubectl apply -f base/sourcegraph.StorageClass.yaml

kubectl create namespace ns-sourcegraph

kubectl apply -n ns-sourcegraph --prune -l deploy=sourcegraph -f generated-cluster --recursive

timeout 5m kubectl -n ns-sourcegraph rollout status -w statefulset/indexed-search
timeout 5m kubectl -n ns-sourcegraph rollout status -w deployment/precise-code-intel-bundle-manager
timeout 5m kubectl -n ns-sourcegraph rollout status -w deployment/prometheus
timeout 5m kubectl -n ns-sourcegraph rollout status -w deployment/redis-cache
timeout 5m kubectl -n ns-sourcegraph rollout status -w deployment/redis-store
timeout 5m kubectl -n ns-sourcegraph rollout status -w statefulset/gitserver
timeout 5m kubectl -n ns-sourcegraph rollout status -w deployment/sourcegraph-frontend

kubectl -n ns-sourcegraph expose deployment sourcegraph-frontend --type=NodePort --name sourcegraph --type=LoadBalancer --port=3080 --target-port=3080

kubectl -n ns-sourcegraph describe service/sourcegraph
```

This script creates a load balancer and describes the exposed service. Look for the `LoadBalancer Ingress` IP and copy
its value (if the IP hasn't been assigned yet, wait a little and execute
`kubectl -n ns-sourcegraph describe service/sourcegraph` until it appears).

You can paste the IP value into the following Caddyfile to have your new test cluster available at `https://sourcegraph.test:3443`

```text
sourcegraph.test:3443
tls internal
reverse_proxy http://<INSERT LOAD BALANCER IP HERE>:3080
```

Again, please delete your test cluster when you are done testing by going to
[Sourcegraph Auxiliary](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-server) and pressing the
appropriate delete button.

> Recommendation: [infra.app](https://infra.app/) is a nice Kubernetes management app.
> It has some overlap with `k9s` but also complements it in some areas.

## Building Docker images for a specific branch

If you need to build Docker images on Buildkite for testing purposes, e.g. you
have a PR with a fix and want to deploy that fix to a test instance, you can
push the branch to the special `docker-images-patch` and
`docker-images-patch-notest` branches. You shouldn't need to resolve merge conflicts, instead you can simply force-push.

Example: you want to build a new Docker image for `frontend` and `gitserver`
based on the branch `my_fix`.

```
git push -f origin my_fix:docker-images-patch-notest/frontend
git push -f origin my_fix:docker-images-patch-notest/gitserver
git push -f origin my_fix:docker-images-patch-notest/$(Docker_image_to_build)
```

This will trigger two builds on Buildkite for these branches:

- https://buildkite.com/sourcegraph/sourcegraph/builds?branch=docker-images-patch-notest%2Ffrontend
- https://buildkite.com/sourcegraph/sourcegraph/builds?branch=docker-images-patch-notest%2Fgitserver

And the end of the build you can find the name of the newly built Docker image.
