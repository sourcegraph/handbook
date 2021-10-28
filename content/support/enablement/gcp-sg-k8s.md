# How to deploy Sourcegraph to GCP with Kubernetes

_This is a transcription of the [video](https://drive.google.com/file/d/10uIp-rcN3nRa0FguScHU3NRrcXxgy6C7/view) by Dax and Beatrix listed under the same title._

These instructions assume you have the gcloud sdk installed in your terminal. Use [brew install](https://formulae.brew.sh/cask/google-cloud-sdk) or consult [official documentation](https://cloud.google.com/sdk/docs/install).

This enablement doc is intended to instruct support team members with steps for creating temporary Sourcegraph kubernetes deployments for temporary testing on our google cloud platform cloud account. If you create a project **Please remember to turn it off when you're done**.

1. Navigate to the the [google cloud provider dashboard](https://console.cloud.google.com/home/dashboard) and select the engineering projects folder. Select create a project.
2. In the create projects field: 1. For the project name field select a title for your project, **ensure the project name starts with your name for tracking purposes.** 2. The Billing account field should remain as default, as should Organization 3. The Location field should be set to Engineering Projects 4. Select create the project (it can take a little bit to launch)
<!--TODO insert picture here -->
3. With the project now enabled (and selected) navigate to the Kubernetes Engine page, and select clusters. We will now provision a cluster.
<<<<<<< HEAD
   1. Enable the Kubernetes Engine API (this can take a second), when this finishes select create and then the GKE Standard option.
   2. In the Cluster basics options prefix the default with your name. Other fields can be left as their defaults.
   3. Select default-pool to modify the nodes of the cluster
      1. Enable autoscaling and set maximum number to 10
      2. Select Nodes, for the Machine Type field select e2-standard-16 (16 CPUs and 16 GB memory), the remaining fields may be left as default
      3. Again under Nodes ensure that Container-Optimized OS with Containerd is selected.
   4. Once your configuration is complete select Create and wait for your cluster to deploy. (again this can take some time), you can observe the progress by selecting the cluster.
4. With the cluster created and selected in the clusters dashboard. Select the Connect button and execute the listed command in your terminal (google cloud sdk must be installed for this step)
=======
   1. Enable the Kubernetes Engine API (this can take a second)
>>>>>>> c1c23acc4a0187fab2d14cdbc9dd3d3568e1fa74
