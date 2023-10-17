# Enabling IAP for TCP Forwarding

To set up a compute instance with SSH access, you must use Google's Identity-Aware Proxy (IAP). This method introduces an authentication layer that requires your Google Workspace credentials before establishing a connection through the TCP port. This strategy ensures that no unwanted SSH services are exposed on our external perimeter.

Our security team has implemented detections that will alert us to any exposed SSH services.

## Requirements

- Compute instance
- Firewall rules that enable IAP server access to the instance

## Setting Up Firewall Rules

After setting up the instance, you must configure it to accept connections from Google's edge servers to your SSH service. Your project might already have a firewall rule that allows IAP access. If there's no rule, or the current one does not meet your requirements, use this [guide](https://cloud.google.com/iap/docs/using-tcp-forwarding#create-firewall-rule) to create a new firewall rule. While the guide suggests targeting "All instances in the network," you have the option to be more selective by using a network tag.

If your rule targets "All instances in the network," you should now be able to access the instance you created. However, if you've opted for a tag-based approach, ensure you add the corresponding network tag to the instance you wish to connect to.

You can now connect to your instance with the following command:

```
$ gcloud compute ssh --zone "us-central1-a (CHANGE TO YOUR INSTANCE ZONE)" "my-instance" \
  --tunnel-through-iap --project "sourcegraph-dogfood (CHANGE TO YOUR PROJECT OR OMIT)"
```

Should you encounter any IAM issues while executing this command, please reach out to the security team in #discuss-security. You may need additional IAP roles to establish a tunnel to the instance.

You can tunnel any type of TCP connection through IAP, if your firewall rules allow this, using the `gcloud compute start-iap-tunnel` command. Find more details on how this works [here](https://cloud.google.com/iap/docs/using-tcp-forwarding#tunneling_other_tcp_connections).
