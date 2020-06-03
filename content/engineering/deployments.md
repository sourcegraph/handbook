# Deployments

We maintain multiple deployments of Sourcegraph:

- [sourcegraph.com](https://sourcegraph.com) is our production deployment for open source code.
  - [dot-com cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dot-com?project=sourcegraph-dev)
    ```
    gcloud container clusters get-credentials dot-com --zone us-central1-f --project sourcegraph-dev
    ```
  - [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
- [sourcegraph.sgdev.org](https://sourcegraph.sgdev.org) is our private deployment of Sourcegraph that contains our private code.
  - [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood?project=sourcegraph-dev)
    ```
    gcloud container clusters get-credentials dogfood --zone us-central1-a --project sourcegraph-dev
    ```
  - [Kubernetes configuration](https://github.com/sourcegraph/infrastructure/tree/master/kubernetes/dogfood)
- [k8s.sgdev.org](https://k8s.sgdev.org) is a dogfood deployment that replicates the scale of our largest customers.
  - [dogfood-full-k8s cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood-full-k8s?project=sourcegraph-dev)
    ```
    gcloud container clusters get-credentials dogfood-full-k8s --zone us-central1-a --project sourcegraph-dev
    ```
  - [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s)

## Deploying to sourcegraph.com

Every commit to `master` in [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) pushes updated Docker images for all of our services to [Docker Hub](https://hub.docker.com/u/sourcegraph/) as part of our [CI pipeline](https://buildkite.com/sourcegraph/sourcegraph) (i.e. if CI is green, then Docker images have been pushed).

Renovate checks for updated Docker images about every hour. If it finds new Docker images then it [opens and merges a PR](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Aapp%2Frenovate) to update the image tags in [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com). The [Renovate dashboard](https://app.renovatebot.com/dashboard#github/sourcegraph/deploy-sourcegraph-dot-com) shows logs for previous runs and allows you to predict when the next run will happen.

Every commit to the `release` branch (the default branch) on [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com) deploys the Kubernetes YAML in this repository to our dot-com cluster [in CI](https://buildkite.com/sourcegraph/deploy-sourcegraph-dot-com/builds?branch=release) (i.e. if CI is green then the latest config in the `release` branch is deployed).

If you want to expedite a deploy, you can manually create and merge a PR that updates the Docker image tags in [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com). You can find the desired Docker image tags by looking at the output of the Docker build step in [CI on sourcegraph/sourcegraph `master` branch](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=master) or by looking at [Docker Hub](https://hub.docker.com/u/sourcegraph/).

## Rolling back sourcegraph.com

To roll back soucegraph.com, push a new commit to the `release` branch in [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com) that reverts the image tags and configuration to the desired state.

```sh
# Ensure that you're up-to-date
git checkout release
git pull

# Rollback the release branch to $COMMIT
# See https://stackoverflow.com/a/21718540 if you want more context
git revert --no-commit $COMMIT..HEAD

# Push the revert commit back to the release branch
git commit
git push origin release
```

[Buildkite](https://buildkite.com/sourcegraph/deploy-sourcegraph-dot-com/) will deploy the working commit to sourcegraph.com.

🚨You also need to disable auto-deploys to prevent Renovate from automatically merging in image digest updates so that the site doesn't roll-forward.
  1. Go to [renovate.json](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/renovate.json) and remove the `"extends:["default:automergeDigest"]` entry for the "Sourcegraph Docker images" group ([example](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/commit/0eb16fd9e3ddfcf3a3c75ccdda0e7eddabf19c7a)).
  1. Once you have fixed the issue in the `master` branch of [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph), re-enable auto-deploys by reverting your change to [renovate.json](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/renovate.json) from step 1.

## Deploying and rolling back other clusters

The other clusters are deployed and rolled back in the same way as sourcegraph.com. Use the links at the top of this page to see where the Kubernetes configurations for each cluster is stored.

## How to setup access to Kubernetes

1. Make sure that you have been granted access to our Google Cloud project: https://console.developers.google.com/project/sourcegraph-dev?authuser=0. You may need to change `authuser` to the index of your sourcegraph.com Google account.

1. Install the `gcloud` command (CLI for interacting with the Google Cloud):

	```
	curl https://sdk.cloud.google.com | bash
	```

1. Get authorization for your `gcloud` command:

	```
	gcloud auth login
	```

1. Install the `kubectl` command (CLI for interacting with Kubernetes):

	```
	gcloud components install kubectl
	```

1. Configure `kubectl` to point to the desired cluster using the appropriate `gcloud container clusters get-credentials` command listed at the top of this document.

1. Verify that you have access to kubernetes:

	```
	kubectl get pods --all-namespaces
	```
 
## How to start a test cluster in our "Sourcegraph Auxiliary' project on GCP
 
- Go to [Sourcegraph Auxiliary](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-server)
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

Please delete your test cluster when you are done testing by going to
[Sourcegraph Auxiliary](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-server) and pressing the
appropriate delete button.

## kubectl cheatsheet

These example commands are for the `dot-com` cluster where the Sourcegraph application is deployed to the `prod` namespace.

<table>

<tr>
  <td>List all pods</td>
  <td><code>kubectl get pods --namespace=prod -o=wide</code></td>
</tr>

<tr>
  <td>Describe the properties of a pod.</td>
  <td><code>kubectl --namespace=prod describe pod $POD_NAME</code></td>
</tr>

<tr>
  <td>Pull logs</td>
  <td><code>kubectl --namespace=prod logs $POD_NAME</code></td>
</tr>

<tr>
  <td>Get an interactive shell in a running pod container</td>
  <td><code>kubectl exec --namespace=prod -ti $POD_NAME -- /bin/sh</code></td>
</tr>

<tr>
  <td>Edit a "deployment" (such as changing environment variables).</td>
  <td><code>kubectl edit deployment --namespace=prod DEPLOYMENT_NAME</code><br/>
  Note that the deployment name is not the pod name, and affects all pods running that deployment.</td>
</tr>

<tr>
  <td>SSH into the VM running a pod.</td>
  <td>Find the node ID from the NODE column of <code>kubectl get pods --namespace=prod -o=wide</code>. Go to the Google Compute Engine dashboard and click the "SSH" button in the top left to get the <code>gcloud</code> command to SSH into the node.<br /><code>kubectl -n prod exec -it POD_NAME /bin/sh</code></td>
</tr>

<tr>
  <td>Kill a pod. All of our pods are part of a deployment, so the deployment will spin up a replacement pod automatically.</td>
  <td><code>kubectl delete --namespace=prod pod $POD_NAME</code></td>
</tr>

<tr>
  <td>Get a PostgreSQL client on the prod database.</td>
  <td><code>kubectl exec --namespace=prod -ti $PSQL_POD_ID -- psql -U sg</code></td>
</tr>

<tr>
  <td>List versions in production.</td>
  <td>
	<code>kubectl -n prod get deploy -o jsonpath='{.items[*].spec.template.spec.containers[0].image} ' | tr ' ' '\n' | sort -u</code>
  </td>
</tr>

<tr>
  <td>Get access to Jaeger locally.</td>
  <td>
	<code>kubectl port-forward svc/jaeger-query 16686</code>
  </td>
</tr>

<tr>
  <td>Get access to debug server locally.</td>
  <td>
	<code>kubectl port-forward $(kubectl get po --no-headers -l app=repo-updater | cut -d ' ' -f 1) 6060</code>
  </td>
</tr>

</table>

## Backups

Snapshots of all Kubernetes resources are taken periodically and pushed to https://github.com/sourcegraph/kube-backup/.

## Building Docker images for a specific branch

If you need to build Docker images on Buildkite for testing purposes, e.g. you
have a PR with a fix and want to deploy that fix to a test instance, you can
push the branch to the special `docker-images-patch` and
`docker-images-patch-notest` branches.

Example: you want to build a new Docker image for `frontend` and `gitserver`
based on the branch `my_fix`.

```
git push origin my_fix:docker-images-patch-notest/frontend
git push origin my_fix:docker-images-patch-notest/gitserver
git push origin my_fix:docker-images-patch-notest/$(Docker_image_to_build)
```

This will trigger two builds on Buildkite for these branches:

* https://buildkite.com/sourcegraph/sourcegraph/builds?branch=docker-images-patch-notest%2Ffrontend
* https://buildkite.com/sourcegraph/sourcegraph/builds?branch=docker-images-patch-notest%2Fgitserver

And the end of the build you can find the name of the newly built Docker image.

## Merging changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) 

We have two Sourcegraph Kubernetes cluster installations that we manage ourselves:
 
* [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
* [deploy-sourcegraph-dogfood-k8s](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s)

This section describes how to merge changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) 
(referred to as upstream) into these two installations.

The process is similar to the [process](https://docs.sourcegraph.com/admin/install/kubernetes/configure#fork-this-repository) 
we recommend our customers use to merge changes from upstream. The differences in process originate from the dual purpose
of these two installations: they are genuine installations used by us and outside users (in the case of dot-com) and in addition
to that they are test installations for new changes in code and in deployment. For that reason they are not pinned down to a version
and the docker images are automatically updated to the latest builds.

> Note: What is said about `deploy-sourcegraph-dot-com` also applies to `deploy-sourcegraph-dogfood-k8s` unless otherwise specified.

### Relationship between the repositories

1. https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master strictly tracks the upstream https://github.com/sourcegraph/deploy-sourcegraph/tree/master. 

1. https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release _only_ contains the customizations required to deploy/document sourcegraph.com from the base deployment of Sourcegraph. 

1. https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release is the default branch for this repository, since all customizations to sourcegraph.com should be merged into this branch (like we tell our customers to).

These steps ensure that the diff between https://github.com/sourcegraph/deploy-sourcegraph-dot-com and https://github.com/sourcegraph/deploy-sourcegraph is as small as possible so that the changes are easy to review.  

In order to mimic the same workflow that we tell our customers to follow:

- Customizations / documentation changes that **apply to all customers (not just sourcegraph.com)** should be:
    1. Merged into https://github.com/sourcegraph/deploy-sourcegraph/tree/master
    1. Pulled into https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master:
          ```shell
          git checkout master
          git fetch upstream
          git merge upstream/master
          ```
    1. Merged into https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release by merging https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master into https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release
          ```shell
          git checkout release
          git fetch origin
          git merge origin/master
          ```

- Customizations / documentation changes that **apply to only sourcegraph.com** can be simply merged into the https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release branch. 

### Merging upstream `deploy-sourcegraph` into `deploy-sourcegraph-dot-com`

1. Clone this repository and `cd` into it.
1. If you have not already, `git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph`
1. `git checkout master && git pull upstream/master`
    - `master` of this repository strictly tracks `master` of `deploy-sourcegraph`, so there should be no merge conflicts.
    - If there are any merge conflicts in this step, you may `git checkout master && git rev-parse HEAD && git reset --hard upstream/master && git push -f origin master` which should always be 100% safe to do.
1. `git checkout release && git checkout -B merge_upstream` to create a branch where you will perform the merge.
1. `git merge upstream/master` to merge `deploy-sourcegraph@master` into `merge_upstream`
    - This will give you conflicts which you should address manually:
      - On docker image tags conflicts (`image:`), choose the `insiders` tag to allow renovate to deploy new builds.
      - On script conflicts (`create-new-cluster.sh`, `kubectl-apply-all.sh`, etc.), look for comments like `This is a custom script for dot-com` that indicate you should choose the current state over incoming changes.
    - If new services have been added (these generally show up as created files in `base/`), make sure that:
      - `namespace: prod` is applied to all new resource metadata.
    - Use `kubectl apply --dry-run --validate --recursive -f base/` to validate your work.
    - **Before you commit**, ensure the commit message indicates which files had conflicts for reviewers to look at.
      - Using the default merge commit message, you can copy or uncomment the lines following `Conflicts`.
1. Send a PR to this repository for merging `merge_upstream` into `release`.
1. Reviewers should review:
    - The conflicting files.
    - If there are any risks associated with merging that should be watched out for / addressed, 
      such as [documented manual migrations](https://docs.sourcegraph.com/admin/updates/kubernetes)
      that will need to be performed as part of merging the PR.
1. If there are any manual migrations needed, coordinate with the distribution team and apply those first. 
    - For example, new services that require elevated permissions might not be deployed by Buildkite - this must be done manually.
1. Once approved, **squash merge your PR so it can be easily reverted if needed**.
    - In general, it might be a good idea to avoid doing this at the end of a PDT workday - if something goes wrong, it is easier to get help if other people are around.
1. Watch CI, which will deploy the change automatically.
1. Check the deployment is healthy afterwards (`kubectl get pods` should show all healthy, searching should work).

