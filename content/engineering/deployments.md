# Deployments

We maintain multiple deployments of Sourcegraph:

- sourcegraph.com is our production deployment for open source code.
  - [dot-com cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dot-com?project=sourcegraph-dev)
    ```
    gcloud container clusters get-credentials dot-com --zone us-central1-f --project sourcegraph-dev
    ```
  - [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
- sourcegraph.sgdev.org is our private deployment of Sourcegraph that contains our private code.
  - [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/dogfood?project=sourcegraph-dev)
    ```
    gcloud container clusters get-credentials dogfood --zone us-central1-a --project sourcegraph-dev
    ```
  - [Kubernetes configuration](https://github.com/sourcegraph/infrastructure/tree/master/kubernetes/dogfood)
- k8s.sgdev.org is a dogfood deployment that replicates the scale of our largest customers.
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

</table>

## Backups

Snapshots of all Kubernetes resources are taken periodically and pushed to https://github.com/sourcegraph/kube-backup/.
