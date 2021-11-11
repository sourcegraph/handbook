# Run a Kubernetes instance locally

[minikube](https://minikube.sigs.k8s.io/docs/) is a tool that lets you run a single-node Kubernetes cluster on your local machine. This document will take you through how to set up a Sourcegraph Kubernetes instance locally using minikube.

## Prerequisites

You must have the following installed on your machine

- kubectl ([link](https://kubernetes.io/docs/tasks/tools/))
- minikube ([link](https://minikube.sigs.k8s.io/docs/start))
- Docker Desktop ([link](https://www.docker.com/products/docker-desktop))

## Steps:

1. Start your cluster (Docker must be running in the background)

```
minikube start
```

2. Create a clone of our Kubernetes deployment repository [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph)

```
git clone https://github.com/sourcegraph/deploy-sourcegraph.git
```

3. Check out the branch of the version you would like to deploy

```
git checkout $VERSION-NUMBER
```

4. Apply the [minikube overlay](https://github.com/sourcegraph/deploy-sourcegraph/tree/master/overlays/minikube) by running the following command in the root directory of the [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) repository
   1. This [minikube overlay](https://github.com/sourcegraph/deploy-sourcegraph/tree/master/overlays/minikube) deletes resource declarations and storage classnames to enable running Sourcegraph on minikube
   1. This is to limit the resources to run Sourcegraph locally as it takes normally a lot of resources to run Sourcegraph
   1. Read our docs on creating [custom overlays](https://docs.sourcegraph.com/admin/install/kubernetes/configure#custom-overlays) if you would like to customize the [minikube overlay](https://github.com/sourcegraph/deploy-sourcegraph/tree/master/overlays/minikube) with other overlays, like the [non-privileged overlay](https://github.com/sourcegraph/deploy-sourcegraph/tree/master/overlays/non-privileged) for example

```
./overlay-generate-cluster.sh minikube generated-cluster
```

5. Create the `ns-sourcegraph` namespace

```
kubectl create namespace ns-sourcegraph
```

6. Apply the generated manifests from the `generated-cluster` directory

```
kubectl -n ns-sourcegraph apply --prune -l deploy=sourcegraph -f generated-cluster --recursive
```

7. Make sure all the pods have been created successfully, and are up and running before you move to the next step
   ![image](https://user-images.githubusercontent.com/68532117/141348352-a38dec9e-7166-40d7-a64e-019339732248.png)

8. Create a Service object that exposes the deployment

```
kubectl -n ns-sourcegraph expose deployment sourcegraph-frontend --type=NodePort --name sourcegraph --port=3080 --target-port=3080
```

![image](https://user-images.githubusercontent.com/68532117/141348530-73d532d0-ffbf-4a52-933a-4f6e8c594ed0.png)

9. Display the service list

```
minikube service list
```

10. Access the newly deployed instance in browser (for Mac users)

```
minikube service sourcegraph -n ns-sourcegraph
```

11. If you are on Linux, an URL will then be displayed in the Service List if the instance has been deployed successfully

```
|----------------|-------------------------------|--------------|---------------------------|
|   NAMESPACE    |             NAME              | TARGET PORT  |            URL            |
|----------------|-------------------------------|--------------|---------------------------|
| default        | kubernetes                    | No node port |
| kube-system    | kube-dns                      | No node port |
| ns-sourcegraph | backend                       | No node port |
| ns-sourcegraph | codeinsights-db               | No node port |
| ns-sourcegraph | codeintel-db                  | No node port |
| ns-sourcegraph | github-proxy                  | No node port |
| ns-sourcegraph | gitserver                     | No node port |
| ns-sourcegraph | grafana                       | No node port |
| ns-sourcegraph | indexed-search                | No node port |
| ns-sourcegraph | indexed-search-indexer        | No node port |
| ns-sourcegraph | jaeger-collector              | No node port |
| ns-sourcegraph | jaeger-query                  | No node port |
| ns-sourcegraph | minio                         | No node port |
| ns-sourcegraph | pgsql                         | No node port |
| ns-sourcegraph | precise-code-intel-worker     | No node port |
| ns-sourcegraph | prometheus                    | No node port |
| ns-sourcegraph | query-runner                  | No node port |
| ns-sourcegraph | redis-cache                   | No node port |
| ns-sourcegraph | redis-store                   | No node port |
| ns-sourcegraph | repo-updater                  | No node port |
| ns-sourcegraph | searcher                      | No node port |
| ns-sourcegraph | sourcegraph                   |         3080 | http://127.0.0.1:32034 |
| ns-sourcegraph | sourcegraph-frontend          | No node port |
| ns-sourcegraph | sourcegraph-frontend-internal | No node port |
| ns-sourcegraph | symbols                       | No node port |
| ns-sourcegraph | syntect-server                | No node port |
| ns-sourcegraph | worker                        | No node port |
|----------------|-------------------------------|--------------|---------------------------|
```

![image](https://user-images.githubusercontent.com/68532117/141357183-905d0dbe-2d40-4dec-98b1-0a1cb13b0cf4.png)

## Remove the instance

1. Delete the `ns-sourcegraph` namespace

```
kubectl delete namespaces ns-sourcegraph
```

2. Stop the minikube cluster

```
minikube stop
```

## Other userful commands

#### Un-expose sourcegraph

```
kubectl delete service sourcegraph -n ns-sourcegraph
```

#### Gets a list of deployed services and cluster IP

```
kubectl get svc -n ns-sourcegraph
```

#### Deletes the minikube cluster

```
minikube delete
```

## Resources

- [Video walkthrough](https://drive.google.com/file/d/1t4lFa6PwPkkXFiGVrS3ST-NnkH99OqOL/view?usp=sharing)
- [Customizations](https://docs.sourcegraph.com/admin/install/kubernetes/configure#customizations)
- [Introduction to Kubectl and Kustomize](https://kubectl.docs.kubernetes.io/guides/introduction/)
- [List of commonly used Kubernetes commands](https://sourcegraph.github.io/support-generator/)
