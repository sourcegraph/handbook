# Managing CS-GKE Kubernetes Instance

Our Kubernetes(K8s) test instance is hosted on Google Kubernetes Engine (GKE) .
The instance was setup following the [instructions](https://docs.sourcegraph.com/admin/install/kubernetes) found on Sourcegraph.com.
To manage cloud resources and networking you must have access to Sourcegraph Google Cloud.

## URL

You can access the instance by visiting [https://cse-k8s.sgdev.org/](https://cse-k8s.sgdev.org/) (note that the URL reflects the old title we used on the team)

## Local Configuration

> [!WARNING] You are encouraged to use the GKE UI to acccess logs if you are not familiar with Kubernetes and Kubectl. Please see [here](https://sourcegraph.slack.com/archives/C01JR51JR5J/p1627511709407000?thread_ts=1627470003.341600&cid=C01JR51JR5J) for the URL to access logs.

To access the CS-GKE instance and run Kubernetes commands locally, you'll need to do the following:

1. Before you begin, please make sure you have [gcloud command-line tool](https://cloud.google.com/sdk/gcloud) and [kubectl command-line tool](https://kubernetes.io/docs/reference/kubectl/overview/) installed on your local machine.
2. Make sure you are [authenticated with the Google Cloud SDK.](https://cloud.google.com/sdk/gcloud/reference/auth/login?hl=en) One option is in your terminal run `gcloud auth login`. That should bring up a browser window to authenticate your work email.
3. Generate a kubeconfig entry by running the following command: `gcloud container clusters get-credentials beatrix-test --zone us-central1-c --project beatrix-test-overlay`
4. Make sure you can access your cluster with kubectl by running the following command: ` kubectl config view`
5. You should now have access to the CS-GKE instance and run Kubernetes commands locally via kubectl.

> [!NOTE] The CS-GKE instance is deployed to the `ns-sourcegraph` namespace. `beatrix-test` is the name of the cluster.

> [!WARNING] All your kubectl commands from now on are connected to the CS-GKE Kubernetes Instance.

## Upgrading CS-GKE Kubernetes Instance

We are currently deployed using this [deploy-sourcegraph-cse-kustomize](https://github.com/sourcegraph/deploy-sourcegraph-cse-kustomize) repository. To upgrade the instance:

### [https://github.com/sourcegraph/deploy-sourcegraph-cse-kustomize](https://github.com/sourcegraph/deploy-sourcegraph-cse-kustomize)

1. Clone the [deploy-sourcegraph-cse-kustomize repository](https://github.com/sourcegraph/deploy-sourcegraph-cse-kustomize) to your local machine.
2. `cd` into the newly cloned directory.
3. Make sure you are on the main branch: `git checkout main`
4. Get the latest version of Sourcegraph from the [upstream](https://github.com/sourcegraph/deploy-sourcegraph-k8s) by running `git fetch upstream`
   > _Note: you may need to set the upstream origin on your master branch_

```
 git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph-k8s
```

5. Merge the latest update from upstream to the release branch: `git checkout release`
6. Choose which version you want to deploy from the [Sourcegraph list of release tags](https://github.com/sourcegraph/deploy-sourcegraph-k8s/tags) then run: `git merge $NEW_VERSION`.
7. After merging, you're likely to encounter some merge conflicts. Please resolve them(most of them require clicking on `Accept Incoming Change` - if you're using MS Studio as your code editor.
8. You can then add and commit the changes by running `git add .` followed by `git commit -m "$YOUR_COMMIT_MESSAGE"`
9. Build new manifests with Kustomize
   Generate a new set of manifests locally using your current overlay instances/my-sourcegraph without applying to the cluster.
   `kubectl kustomize instances/my-sourcegraph -o cluster.yaml`
   Review the generated manifests to ensure they match your intended configuration and have the images for the $NEW_VERSION version.
   `less cluster.yaml`
10. Deploy the generated manifests
    Apply the new manifests from the ouput file cluster.yaml to your cluster:
    `kubectl -n ns-sourcegraph apply --prune -l deploy=sourcegraph -f cluster.yaml`
11. Monitor the status of the deployment to determine its success.
    `kubectl -n ns-sourcegraph get pods --watch`.
12. Confirm the new version [here](https://cse-k8s.sgdev.org/site-admin/updates)
13. Please don't forget to `git push` to our repo to give folks a head up that you made the upgrade!

Video on how upgrading the instance looks like: [https://drive.google.com/file/d/1aWsXejG2qeFKGrY5BGzpSabwGuU1gLM3/view](https://drive.google.com/file/d/1aWsXejG2qeFKGrY5BGzpSabwGuU1gLM3/view)

### Related Topics

- Basic functions and commands (e.g. how to view the names of services and get their logs) can be viewed [here](https://sourcegraph.github.io/support-generator/).
