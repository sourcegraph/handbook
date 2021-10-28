# How to deploy Sourcegraph to GCP with Kubernetes

_This is a transcription of the [video](https://drive.google.com/file/d/10uIp-rcN3nRa0FguScHU3NRrcXxgy6C7/view) by Dax and Beatrix listed under the same title._

These instructions assume you have the gcloud sdk installed in your terminal.

This enablement doc is intended to instruct support team members with steps for creating temporary Sourcegraph kubernetes deployments for temporary testing on our google cloud platform cloud account. If you create a project **Please remember to turn it off when you're done**.

1. Navigate to the the [google cloud provider dashboard](https://console.cloud.google.com/home/dashboard) and select the engineering projects folder. Select create a project.
2. In the create projects field: 1. For the project name field select a title for your project, **ensure the project name starts with your name for tracking purposes.** 2. The Billing account field should remain as default, as should Organization 3. The Location field should be set to Engineering Projects 4. Select create the project (it can take a little bit to launch)
<!--TODO insert picture here -->
3. With the project now enabled (and selected) navigate to the Kubernetes Engine page, and select clusters. We will now provision a cluster.
   1. Enable the Kubernetes Engine API (this can take a second)
