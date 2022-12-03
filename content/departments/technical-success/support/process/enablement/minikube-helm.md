# Run a Kubernetes instance locally with minikube and Helm

[minikube](https://minikube.sigs.k8s.io/docs/) is a tool that lets you run a single-node Kubernetes cluster on your local machine. This document will take you through how to set up a Sourcegraph Kubernetes instance locally using minikube and Helm.

## Prerequisites

You must have the following installed on your machine

- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [minikube](https://minikube.sigs.k8s.io/docs/start)
- [Helm](https://helm.sh/docs/intro/install/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Steps:

1. Start your minikube cluster (Docker must be running in the background)

```
minikube start
```

2. Add the Sourcegraph Helm repository to the machine used to interact with your cluster:

```
helm repo add sourcegraph https://helm.sourcegraph.com/release
```

To update the repo:

```
helm repo update sourcegraph
```

3. Create the following `override.yaml` file to customize configuration settings. This override deletes resource declarations and uses the standard storageClass.

```
redisCache:
  resources: null
redisStore:
  resources: null
storageClass:
  create: false
  name: standard
cadvisor:
  resources: null
codeInsightsDB:
  resources: null
codeIntelDB:
  resources: null
frontend:
  resources: null
migrator:
  resources: null
githubProxy:
  resources: null
gitserver:
  resources: null
grafana:
  resources: null
indexedSearch:
  resources: null
indexedSearchIndexer:
  resources: null
minio:
  resources: null
pgsql:
  resources: null
postgresExporter:
  resources: null
preciseCodeIntel:
  resources: null
prometheus:
  resources: null
redisExporter:
  resources: null
repoUpdater:
  resources: null
searcher:
  resources: null
symbols:
  resources: null
syntectServer:
  resources: null
tracing:
  resources: null
tracingAgent:
  resources: null
worker:
  resources: null
```

4. Install the Sourcegraph chart, using the `override.yaml` file to include your customizations:

```
helm upgrade --install --values ./override.yaml --version 4.2.0 sourcegraph sourcegraph/sourcegraph
```

5. Make sure all the pods have been created successfully and are up and running before you move to the next step. (It might take a while for the pods to spin up but there shouldn't be any errors. Monitor the pod STATUS and troubleshoot unexpected Events.)

```
➜ kubectl get po
NAME                                        READY   STATUS    RESTARTS   AGE
cadvisor-mlpsh                              1/1     Running   0          5m37s
codeinsights-db-0                           2/2     Running   0          5m37s
codeintel-db-0                              2/2     Running   0          5m37s
github-proxy-7578df54cb-99z9f               1/1     Running   0          5m37s
gitserver-0                                 1/1     Running   3          5m37s
grafana-0                                   1/1     Running   0          5m37s
indexed-search-0                            2/2     Running   0          5m37s
minio-759ddf9b54-kh8fz                      1/1     Running   0          5m37s
node-exporter-474kl                         1/1     Running   0          5m37s
otel-agent-vj58x                            1/1     Running   0          5m37s
otel-collector-84594c5c48-dz2wq             1/1     Running   0          5m37s
pgsql-0                                     2/2     Running   0          5m37s
precise-code-intel-worker-cb9848c7b-rqxsb   1/1     Running   0          5m36s
precise-code-intel-worker-cb9848c7b-z7sq5   1/1     Running   0          5m36s
prometheus-5c777c695c-vzn5j                 1/1     Running   0          5m37s
redis-cache-6dc6fbbb8d-r6c2p                2/2     Running   0          5m37s
redis-store-558844bbcd-4wqdx                2/2     Running   0          5m37s
repo-updater-7797858bd8-tttqp               1/1     Running   0          5m37s
searcher-799b954db8-dl7s4                   1/1     Running   0          5m37s
searcher-799b954db8-wv7hg                   1/1     Running   0          5m36s
sourcegraph-frontend-64d7fb9b88-fj54q       1/1     Running   0          5m36s
sourcegraph-frontend-64d7fb9b88-w8t24       1/1     Running   0          5m36s
symbols-cf5c6786c-vft8h                     1/1     Running   1          5m37s
syntect-server-57d4f66f97-g4l55             1/1     Running   0          5m37s
worker-66649b6686-zhkvj                     1/1     Running   2          5m37s
```

6. Create a Service object that exposes the deployment

```
kubectl expose deployment sourcegraph-frontend --type=NodePort --name sourcegraph --port=3080 --target-port=3080
```

7. Connect to the `sourcegraph` service.

```
minikube service sourcegraph
```

## Remove the instance

1. Uninstall the sourcegraph release

```
helm uninstall sourcegraph
```

2. Stop the minikube cluster

```
minikube stop
```

3. Delete the minikube cluster

```
minikube delete
```

## Resources

- [Sourcegraph Helm docs](https://docs.sourcegraph.com/admin/deploy/kubernetes/helm)
