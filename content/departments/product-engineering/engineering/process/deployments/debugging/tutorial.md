# Gain access to a cluster

We use GCP to provide cluster access. Install the `gcloud` cli tool from here: <https://cloud.google.com/sdk/gcloud>. Ensure that the cli install folder is on your path. It installs other tools like `kubectl` that we use.

## Cloud cluster

Next, open a new terminal and set two environment variables for ergonomics for this tutorial.

```
export CLOUDSDK_CORE_PROJECT=sourcegraph-dogfood
export CLOUDSDK_COMPUTE_REGION=us-central1-f
```

Now, use `gcloud container clusters get-credentials dogfood` to gain cluster access for `kubectl`.

Some basic commands to ensure everything is working (these commands assume an admin context which may not always be the case)

```
$ kubectl get pods
No resources found in default namespace.
```

```
$ kubectl get pods -A
NAMESPACE        NAME                                                        READY   STATUS             RESTARTS   AGE
dogfood-k8s      cadvisor-26gh8                                              1/1     Running            0          4m31s
dogfood-k8s      codeintel-db-6f98c86f69-6xzdm                               2/2     Running            0          35h
...
```

```
$ kubectl get namespaces
NAME              STATUS   AGE
cert-manager      Active   86d
cors-anywhere     Active   29d
default           Active   93d
dogfood-k8s       Active   88d
dogfood-server    Active   77d
...
```

## CI cluster

If you want to access the CI cluster instead of Dogfood, you can run the following commands instead:

```
export CLOUDSDK_CORE_PROJECT=sourcegraph-ci
export CLOUDSDK_COMPUTE_REGION=us-central1-c
```

Now, use `gcloud container clusters get-credentials default-buildkite` to gain cluster access for `kubectl`.

Some basic commands to ensure everything is working (these commands assume an admin context which may not always be the case)

```
$ kubectl get pods -A
NAMESPACE     NAME                                                   READY   STATUS    RESTARTS   AGE
buildkite     athens-athens-proxy-66b89589bd-9297x                   1/1     Running   0          34d
buildkite     buildkite-agent-69d759c9b7-2dqhg                       3/3     Running   0          149m
buildkite     buildkite-agent-69d759c9b7-4629q                       3/3     Running   0          117m
buildkite     buildkite-agent-69d759c9b7-49zs7                       3/3     Running   0          2d1h
...
```

```
$ kubectl get namespaces
NAME              STATUS   AGE
buildkite         Active   407d
cluster-ci-5686   Active   39d
cluster-ci-5687   Active   38d
cluster-ci-5963   Active   28d
cluster-ci-5967   Active   28d
default           Active   407d
kube-node-lease   Active   407d
kube-public       Active   407d
kube-system       Active   407d
...
```

Now, change to the `buildkite` namespace via `kubectl config set-context --current --namespace=buildkite` to work with workloads in that namespace.
Note: You do not need to switch the namespace to access workloads in other namespaces, you can use `-n ${NAMESPACE}` with your command to access other namespaces.

The relevant Buildkite CI infrastructure is in [`sourcegraph/infrastructure`](https://sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/buildkite/README.md).

## Describe a pod

First, describe one of the running pods to see some basic information about the workload

```
$ kubectl describe pod sourcegraph-frontend-XXX-XXXX
```

(Note: to the exact name of the pod you can either use tab autocomplete with kubectl, assuming it has been enabled, or do a kubectl get pods to get the name of any frontend pod)

<!-- TODO: add back screenshot. This file was automatically removed during the handbook migration because it was very large. -->
<!-- ![output](carbon.svg 'Describe output') -->

This contains information on the current state of all containers currently running on the pod.

## Get the logs of one of the containers

Next, lets get the `frontend` container logs

```
$ kubectl logs sourcegraph-frontend-XXXX -c frontend
```

This can also help in determining the state of a running pod.
Also, all our our pods fall back to logs on error so you should be able to see the last few log lines in the describe output as well.

## Exec into a running pod

Finally, you may need to exec into a pod to debug some problems. You can use

```
$ kubectl exec -it sourcegraph-frontend-XXX -c frontend -- sh
```

See if you can use the describe output to find where the default service account token can be found inside the container.

<details>
  <summary>Location</summary>
  You can find the token in at `/run/secrets/kubernetes.io/serviceaccount`
</details>
