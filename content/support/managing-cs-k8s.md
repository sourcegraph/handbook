# Managing CS-GKE Kubernetes Instance

Our Kubernetes(K8s) test instance is hosted on Google Kubernetes Engine (GKE) .
The instance was setup following the [instructions](https://docs.sourcegraph.com/admin/install/kubernetes) found on Sourcegraph.com.
To manage cloud resources and networking you must have access to Sourcegraph Google Cloud.

## URL

You can access the instance by visiting [https://cse-k8s.sgdev.org/](https://cse-k8s.sgdev.org/) (note that the URL reflects the old title we used on the team)

## Local Configuration

> WARNING: You are encouraged to use the GKE UI to acccess logs if you are not familiar with Kubernetes and Kubectl. Please see [here](https://sourcegraph.slack.com/archives/C01JR51JR5J/p1627511709407000?thread_ts=1627470003.341600&cid=C01JR51JR5J) for the URL to access logs.

To access the CS-GKE instance and run Kubernetes commands locally, you'll need to do the following:

1. Before you begin, please make sure you have [gcloud command-line tool](https://cloud.google.com/sdk/gcloud) and [kubectl command-line tool](https://kubernetes.io/docs/reference/kubectl/overview/) installed on your local machine.
2. Generate a kubeconfig entry by running the following command: `gcloud container clusters get-credentials beatrix-test --zone us-central1-c --project beatrix-test-overlay`
3. Make sure you can access your cluster with kubectl by running the following command: ` kubectl config view`
4. You should now have access to the CS-GKE instance and run Kubernetes commands locally via kubectl.

> NOTE: The CS-GKE instance is deployed to the `ns-sourcegraph` namespace. `beatrix-test` is the name of the cluster.

> WARNING: All your kubectl commands from now on are connected to the CS-GKE Kubernetes Instance.

## Upgrading CS-GKE Kubernetes Instance

We are currently deployed using this [deploy-sourcegraph-cse-k8s repository](https://github.com/sourcegraph/deploy-sourcegraph-cse-k8s). To upgrade the instance:

1. Clone the [deploy-sourcegraph-cse-k8s repository](https://github.com/sourcegraph/deploy-sourcegraph-cse-k8s) to your local machine.
2. `cd` into the newly cloned directory.
3. Make sure you are on the main branch: `git checkout master`
4. Get the latest version of Sourcegraph from the [upstream](https://github.com/sourcegraph/deploy-sourcegraph/) by running `git fetch upstream`
5. Merge the latest update from upstream to the release branch: `git checkout release`
6. Choose which version you want to deploy from the [Sourcegraph release page](https://github.com/sourcegraph/deploy-sourcegraph/releases) then run: `git merge $NEW_VERSION`
7. Video on how upgrading the instance looks like: [https://drive.google.com/file/d/1aWsXejG2qeFKGrY5BGzpSabwGuU1gLM3/view](https://drive.google.com/file/d/1aWsXejG2qeFKGrY5BGzpSabwGuU1gLM3/view)
