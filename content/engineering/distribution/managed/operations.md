# Managed instances operations

- [Red/black deployment model](#redblack-deployment-model)
- [SSH access](#ssh-access)
- [Port-forwarding (direct access to Caddy, Jaeger, and Grafana)](#port-forwarding-direct-access-to-caddy-jaeger-and-grafana)
- [Access through the GCP load balancer as a user would](#access-through-the-gcp-load-balancer-as-a-user-would)
- [Accessing the Docker containers](#accessing-the-docker-containers)
- [Finding the external IPs](#finding-the-external-ips)
- [Impact of recreating the instance via Terraform](#impact-of-recreating-the-instance-via-terraform)
- [Instance is recreated when startup script changes](#instance-is-recreated-when-startup-script-changes)
- [Debugging startup scripts](#debugging-startup-scripts)

## Red/black deployment model

At any point in time only one deployment is the active production instance, this is noted in `deploy-sourcegraph-managed/$CUSTOMER/terraform.tfvars`, and except during upgrades only one is running. You can see this via:

```sh
$ gcloud compute instances list --project=sourcegraph-managed-$CUSTOMER
NAME                  ZONE           MACHINE_TYPE   PREEMPTIBLE  INTERNAL_IP  EXTERNAL_IP  STATUS
default-red-instance  us-central1-f  n1-standard-8               10.2.0.2                  RUNNING
```

The `NAME` value indicates the currently active instance (`red` or `black`). During an upgrade, both `default-red-instance` and `default-black-instance` will be present. One being production, the other being the "new" upgraded production instance. When the upgrade is complete, the old one is turned off (red/black swap). Learn more about [managed instances upgrades here](upgrade_process.md).

## SSH access

Locate the GCP instance you'd like to access (usually either `default-red-instance` or `default-black-instance`), and then:

```sh
$ gcloud beta compute ssh --zone "us-central1-f" --tunnel-through-iap --project "sourcegraph-managed-$CUSTOMER" default-$DEPLOYMENT-instance
```

If you get an error:

```sh
ERROR: (gcloud.beta.compute.start-iap-tunnel) Error while connecting [4003: u'failed to connect to backend'].
ssh_exchange_identification: Connection closed by remote host
ERROR: (gcloud.beta.compute.ssh) [/usr/bin/ssh] exited with return code [255].
```

This may be indicating that the VM is currently not running - check:

```sh
$ gcloud beta compute instances list --project=sourcegraph-managed-$CUSTOMER
```

And start the instance if needed (e.g. through the web UI.)

## Port-forwarding

Locate the GCP instance you'd like to access (usually either `default-red-instance` or `default-black-instance`), and then:

```sh
export PORT=80 # or one of the below ports
gcloud compute start-iap-tunnel default-$DEPLOYMENT-instance $PORT --local-host-port=localhost:4444 --zone "us-central1-f" --project "sourcegraph-managed-$CUSTOMER"
```

This will port-forward `localhost:4444` to port `80` on the VM instance. Some common ports:

* `80`: Frontend (also see [accessing through the GCP load balancer](#access-through-the-gcp-load-balancer-as-a-user-would))
* `3370`: Grafana
* `16886`: Jaeger

Note that other ports are prevented by the `allow-iap-tcp-ingress` firewall rule.

## Access through the GCP load balancer as a user would

Users access Sourcegraph through GCP Load Balancer/HTTPS -> the Caddy load balancer/HTTP -> the actual sourcegraph-frontend/HTTP. If you suspect that an issue is being introduced by the GCP load balancer itself, e.g. perhaps a request is timing out there due to some misconfiguration, then you will need to access through the GCP load balancer itself. If the managed instance is protected by the load balancer firewall / not publicly accessible on the internet, then it is not possible for you to access `$CUSTOMER.sourcegraph.com` as a normal user would.

You can workaround this by proxying your internet traffic through the instance itself - which is allowed to reach and go through the public internet -> the GCP load balancer -> back to the instance itself. To do this, create a SOCKS5 proxy tunnel over SSH (replace `default-red-instance`, if needed):

```sh
bash -c '(gcloud beta compute ssh --zone "us-central1-f" --tunnel-through-iap --project "sourcegraph-managed-$CUSTOMER" default-$DEPLOYMENT-instance -- -N -p 22 -D localhost:5000) & sleep 600; kill $!'
```

Then test you can access it using `curl`:

```
$ curl --proxy socks5://localhost:5000 https://$CUSTOMER.sourcegraph.com
<a href="/sign-in?returnTo=%2F">Found</a>.
```

You can now reproduce the request using `curl`, or configure your OS or browser to use `socks5://localhost:5000`:

* Windows: Follow the “using the SOCKS proxy” section in [this article](https://www.ocf.berkeley.edu/~xuanluo/sshproxywin.html) [[mirror]](https://web.archive.org/web/20160609073255/https://www.ocf.berkeley.edu/~xuanluo/sshproxywin.html) to enable it on Internet Explorer, Edge and Firefox.
* macOS: System Preferences → Network → Advanced → Proxies → check “SOCKS proxy” and enter the host and the port.
* Linux: Most browsers have proxy settings in their Settings/Preferences.
* Command-line apps: Many CLIs accept http_proxy or https_proxy environment variables or arguments you can set the proxy. Consult the help or the manpage of the program.

**IMPORTANT**: Once you are finished, terminate the original `gcloud beta compute ssh` command so your machine's traffic is no longer going over the instance. The command above will automatically terminate after 10 minutes, to prevent this.

## Accessing the Docker containers

Access the deployment over SSH (instructions above) and then:

```sh
sudo su
docker ps
```

You can then use regular Docker commands (e.g. `docker exec -it $CONTAINER sh`) to interact with the containers.

## Finding the external IPs

```sh
$ gcloud compute addresses list --project=sourcegraph-managed-$CUSTOMER
NAME                     ADDRESS/RANGE   TYPE      PURPOSE  NETWORK  REGION       SUBNET  STATUS
default-global-address   $GLOBAL_IP      EXTERNAL                                         IN_USE
default-nat-manual-ip-0  $NAT_IP_ONE     EXTERNAL                    us-central1          IN_USE
default-nat-manual-ip-1  $NAT_IP_TWO     EXTERNAL                    us-central1          IN_USE
```

- `$GLOBAL_IP` is the IP address that `$CUSTOMER.sourcegraph.com` should point to, it is the address of the GCP Load Balancer.
- `$NAT_IP_ONE` and `$NAT_IP_TWO` are the external IPs from which egress traffic from the deployment will originate from. These are the addresses from which Sourcegraph will access the customer's code host, and as such the customer will need to allow them access to e.g. their internal code host.

## Impact of recreating the instance via Terraform

All configuration about the instance itself is stored in Terraform, so recreating the instance is a non-destructive action. A brand new VM will be provisioned by Terraform, the startup script will initialize it and mount the existing data disk back into the VM, and the Sourcegraph Docker containers will start up.

This typically involves around 8m40s of downtime: 6m destroying the network endpoint group, and 2m creating the new instance / installing software / launching Docker services.

## Instance is recreated when startup script changes

Any time a startup script is changed, Terraform will plan to delete the old VM instance and recreate it such that the script runs again.

This is a non-destructive action, aside from the fact that it involves downtime for the deployment.

## Debugging startup scripts

View startup script logs

```
cat /var/log/syslog | grep startup-script
```

Run startup script and debug:

```
sudo google_metadata_script_runner --script-type startup --debug
```

WARNING: Running our startup script twice is a potentially harmful action, as it is usually only ran once.

More details: https://cloud.google.com/compute/docs/startupscript
