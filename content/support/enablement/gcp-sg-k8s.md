# How to deploy Sourcegraph to GCP with Kubernetes

_This is a transcription of the [video](https://drive.google.com/file/d/10uIp-rcN3nRa0FguScHU3NRrcXxgy6C7/view) by Dax and Beatrix listed under the same title._

These instructions assume you have the gcloud sdk installed in your terminal. Use [brew install](https://formulae.brew.sh/cask/google-cloud-sdk) or consult [official documentation](https://cloud.google.com/sdk/docs/install).

This enablement doc is intended to instruct support team members with steps for creating temporary Sourcegraph kubernetes deployments for temporary testing on our google cloud platform cloud account. If you create a project **Please remember to turn it off when you're done**.

## Provision cluster on Google cloud platform

1. Navigate to the the [google cloud provider dashboard](https://console.cloud.google.com/home/dashboard) and select the engineering projects folder. Then select the cse-k8s project. _This is a divergence from the video in which a project space is created from which to provision a cluster_.
2. With the cse-k8s project space now selected, navigate to the Kubernetes Engine page, and select Clusters. We will now provision a cluster.
   1. Select create and then the GKE Standard option.
   2. In the Cluster basics options prefix the default with your name. Other fields can be left as their defaults.
   3. Select default-pool to modify the nodes of the cluster
      1. Enable autoscaling and set maximum number to 10
      2. Select Nodes, for the Machine Type field select e2-standard-16 (16 CPUs and 16 GB memory), the remaining fields may be left as default
      3. Again under Nodes ensure that Container-Optimized OS with Containerd is selected.
   4. Once your configuration is complete select Create and wait for your cluster to deploy. (again this can take some time), you can observe the progress by selecting the cluster.
3. With the cluster created and selected in the clusters dashboard. Select the Connect button and execute the listed command in your terminal (google cloud sdk must be installed for this step)

## Launch Sourcegraph

The following instructions track along with our official [configure](https://docs.sourcegraph.com/admin/install/kubernetes/configure#getting-started) and [install](https://docs.sourcegraph.com/admin/install/kubernetes#installation) Sourcegraph kubernetes documentation.

1. Follow the [configuration docs](https://docs.sourcegraph.com/admin/install/kubernetes/configure#getting-started) to set up a fork of Sourcegraph at the version you want.
2. Run the following command from our [installation docs](https://docs.sourcegraph.com/admin/install/kubernetes#direct-installation) to give your gcloud user the ability to create roles in Kubernetes `kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value account)`
3. [Configure a storage class](https://docs.sourcegraph.com/admin/install/kubernetes/configure#configure-a-storage-class) and apply it with `kubectl apply -f <filepath>`
4. With the storage class created and applied you may now create pods with the [default](https://docs.sourcegraph.com/admin/install/kubernetes#direct-installation) `./kubectl-apply-all.sh` or generate an overlay of your choice to apply, see [config docs](https://docs.sourcegraph.com/admin/install/kubernetes/configure?_ga=2.3007284.56288237.1635144050-1124571876.1631600744&_gac=1.49040980.1633124449.CjwKCAjw49qKBhAoEiwAHQVTo3uTb7R9hpZy-vL5lGihdot9E-w6YdT0ZDfBjHoQMqsxnWAMEwjZXRoC_WsQAvD_BwE#provided-overlays)
5. You can now port forward your k8s deployment to localhost with `kubectl port-forward svc/sourcegraph-frontend 3080:30080` (note you may need to add `-n ns-sourcegraph` to the command)
