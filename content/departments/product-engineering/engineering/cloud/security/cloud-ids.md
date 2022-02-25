# Google Cloud IDS

## What is it?

Cloud Intrusion Detection System ([Cloud IDS](https://cloud.google.com/intrusion-detection-system)) is a built-in Google tool to identify network layer threats within our cloud infrastructure. This will help the Security Team to passively monitor our application networks for active threats, signs of compromise, and assist in threat investigation. 

## How does this impact other engineering teams?

This shouldn't impact other teams at all. As it's currently configured the IDS does not block any traffic it only observes, so application networks shouldn't be affected. If you suspect the IDS is impacting your team please reach out to us via the `#security` channel.

## Setting up Cloud IDS for a new GCP Project

*Note: Google recommends only setting up Cloud IDS endpoints in projects that are outside perimeters. Cloud IDS is not supported by [VPC Service Controls](https://cloud.google.com/vpc-service-controls/)*

1. Git clone a local copy of the [infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/main/security).
1. Copy the ids.tf file from another project directory in the repository (projects with IDS enabled will have it).
1. Make the proper resource naming modifications to the terraform file and update the `google_compute_network` data resource to the network you wish to monitor.
1. Run a `terraform init` to initalize terraform and then run a `terraform plan` (you should see 6 new resources being created).
1. If everything looks as expected you can run `terraform apply`. Please note this may need to be executed twice if the Service Networking API is being enabled for the first time (there is a delay which can cause part of the terraform to fail). If this happens wait 5 minutes and run another apply.
1. When the terraform finishes you will need to wait approximently 15-20 minutes for the IDS endpoint to be created. This can be confirmed by searching for `cloud ids` in GCP under your project and selecting the `endpoint tab`.

*Note: Due to lack of support creating the IDS endpoint directly in terraform isn't possible so we used a work around. The remaining steps must be done outside of terraform.*  

1. Modify the following command to use your IDS endpoint, project, and zone `gcloud alpha ids endpoints describe <IDS_ENDPOINT_NAME> --project=<PROJECT_ID> --zone=<us-central1-b> | grep 'endpointForwardingRule' | cut -d ' ' -f 2`. Run the command and copy the exported endpoint forwarding rule.
1. The final step is to setup packet mirroring from the network being monitored to the IDS endpoint using the above forward rule. Modify and run the following command `gcloud compute packet-mirrorings create <POLICY_NAME>-mirror --region=<us-central1> --collector-ilb=<ENDPOINT_FORWARDING_RULE> --network=<NETWORK> --mirrored-subnets=SUBNET`