# Kubernetes

This section contains tips and advice for interacting with our Kubernetes deployments (most notably [sourcegraph.com](#sourcegraph-com) and [k8s.sgdev.org](#k8s-sgdev-org)).

## How to set up access to Kubernetes

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
1. Configure `kubectl` to point to the desired cluster using the appropriate `gcloud container clusters get-credentials` command listed at the [top of this document](../deployments.md#deployments).
1. Verify that you have access to kubernetes:

   ```
   kubectl get pods --all-namespaces
   ```

### Reauthenticate kubectl

If you see the following when running `kubectl` commands:

> Unable to connect to the server: x509: certificate signed by unknown authority

Just run the appropriate `gcloud container clusters get-credentials` command listed at the [top of this document](../deployments.md#deployments) again to reauthenticate.

## Scaling Kubernetes clusters

Cluster scale should be managed via terraform. Please reference `google_container_node_pool.primary_containerd_nodes.node_count` [this line](https://github.com/sourcegraph/infrastructure/blob/main/cloud/main.tf) in cloud's terraform configuration to see where the number of nodes is configured for the cluster, and `gke_num_nodes` [in the tfvars file](https://github.com/sourcegraph/infrastructure/blob/main/cloud/terraform.tfvars) to see the current number of nodes. For more details, see the [terraform provider documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/container_node_pool#node_count).

Any changes to the cluster scale made via kubectl will eventually be overwritten by the values set in terraform.

## Kubernetes backups

Snapshots of all Kubernetes resources are taken periodically and pushed to [kube-backup](https://github.com/sourcegraph/kube-backup).

These example commands are for the `dot-com` cluster where the Sourcegraph application is deployed to the `prod` namespace.

## kubectl cheatsheet

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
	<code>kubectl port-forward --namespace=prod svc/jaeger-query 16686</code>
  </td>
</tr>

<tr>
  <td>Get access to debug server locally.</td>
  <td>
	<code>kubectl port-forward $(kubectl get po --no-headers -l app=repo-updater | cut -d ' ' -f 1) 6060</code>
  </td>
</tr>

</table>
