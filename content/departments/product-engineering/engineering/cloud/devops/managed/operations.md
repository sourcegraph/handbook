# Managed instances operations

Operations guides for [managed instances](./index.md).

- To upgrade a managed instance, see [managed instances upgrade process](upgrade_process.md).
- To create a managed instance, see [managed instances creation process](creation_process.md).
- To delete a managed instance, see [managed instances deletion process](delete_process.md).
- To suspend a managed instance, see [managed instances suspense process](suspend_process.md).
- To resume a managed instance, see [managed instances resume process](resume_process.md).
- To enable executors on a managed instance, see [enable executors process](./enable_executors_process.md)

* [Managed instances operations](#managed-instances-operations)
  - [Red/black deployment model](#redblack-deployment-model)
  - [Accessing the instance](#accessing-the-instance)
    - [SSH access](#ssh-access)
      - [Accessing the Docker containers](#accessing-the-docker-containers)
      - [Restarting for configuration updates](#restarting-for-configuration-updates)
    - [Port-forwarding](#port-forwarding)
    - [Access through the GCP load balancer as a user would](#access-through-the-gcp-load-balancer-as-a-user-would)
    - [Finding the external IPs](#finding-the-external-ips)
    - [Resizing Disks](#resizing-disks)
  - [Instance technicalities](#instance-technicalities)
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

## Accessing the instance

For CSE's, also refer to [Accessing Managed Instances](../../../../../support/process/support-managed-instances.md).

### SSH access

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

This may be indicating that the VM is currently not running—check:

```sh
$ gcloud beta compute instances list --project=sourcegraph-managed-$CUSTOMER
```

And start the instance if needed (e.g. through the web UI.)

#### Accessing the Docker containers

[SSH into the relevant instance](#ssh-access) and then:

```sh
sudo su
docker ps
```

You can then use regular Docker commands (e.g. `docker exec -it $CONTAINER sh`) to interact with the containers.

#### Restarting for configuration updates

1. [SSH into the relevant instance](#ssh-access)
2. `cd` to the `/deployment/docker-compose` folder and run:
3. `docker compose restart sourcegraph-frontend-0 sourcegraph-frontend-internal`

### Port-forwarding

Locate the GCP instance you'd like to access (usually either `default-red-instance` or `default-black-instance`), and then:

```sh
export PORT=80 # or one of the below ports
gcloud compute start-iap-tunnel default-$DEPLOYMENT-instance $PORT --local-host-port=localhost:4444 --zone "us-central1-f" --project "sourcegraph-managed-$CUSTOMER"
```

This will port-forward `localhost:4444` to port `80` on the VM instance. Some common ports:

- `80`: Frontend (also see [accessing through the GCP load balancer](#access-through-the-gcp-load-balancer-as-a-user-would))
- `3370`: Grafana
- `16886`: Jaeger

Note that other ports are prevented by the `allow-iap-tcp-ingress` firewall rule.

### Access through the GCP load balancer as a user would

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

- Windows: Follow the “using the SOCKS proxy” section in [this article](https://www.ocf.berkeley.edu/~xuanluo/sshproxywin.html) [[mirror]](https://web.archive.org/web/20160609073255/https://www.ocf.berkeley.edu/~xuanluo/sshproxywin.html) to enable it on Internet Explorer, Edge and Firefox.
- macOS: System Preferences → Network → Advanced → Proxies → check “SOCKS proxy” and enter the host and the port.
- Linux: Most browsers have proxy settings in their Settings/Preferences.
- Command-line apps: Many CLIs accept http_proxy or https_proxy environment variables or arguments you can set the proxy. Consult the help or the manpage of the program.

**IMPORTANT**: Once you are finished, terminate the original `gcloud beta compute ssh` command so your machine's traffic is no longer going over the instance. The command above will automatically terminate after 10 minutes, to prevent this.

### Finding the external IPs

```sh
$ gcloud compute addresses list --project=sourcegraph-managed-$CUSTOMER
NAME                     ADDRESS/RANGE   TYPE      PURPOSE  NETWORK  REGION       SUBNET  STATUS
default-global-address   $GLOBAL_IP      EXTERNAL                                         IN_USE
default-nat-manual-ip-0  $NAT_IP_ONE     EXTERNAL                    us-central1          IN_USE
default-nat-manual-ip-1  $NAT_IP_TWO     EXTERNAL                    us-central1          IN_USE
```

- `$GLOBAL_IP` is the IP address that `$CUSTOMER.sourcegraph.com` should point to, it is the address of the GCP Load Balancer.
- `$NAT_IP_ONE` and `$NAT_IP_TWO` are the external IPs from which egress traffic from the deployment will originate from. These are the addresses from which Sourcegraph will access the customer's code host, and as such the customer will need to allow them access to e.g. their internal code host.

### Resizing Disks

Disk storage can be safely **increased** on managed instances at any time. Do not try to decrease the disk size - Terraform will destroy and recreate the disk causing data loss.

To increase the disk size:

1. Set up your [variables](upgrade_process.md#general-setup) as usual.
1. Increase the value of `data_disk_size` in `terraform.tfvars` and run terraform apply
1. Commit and push your changes:

   ```sh
   git add terraform.tfvars && git commit -m "$CUSTOMER: increase disk size"
   git push origin HEAD
   ```

1. Follow the [GCP instructions](https://cloud.google.com/compute/docs/disks/working-with-persistent-disks#resize_pd) to resize the block storage. In most cases, the commands will look like:

   ```sh
   ../util/ssh-exec.sh "sudo resize2fs /dev/sdb"
   ```

   Then confirm the new size is visible:

   ```sh
   ../util/ssh-exec.sh "df -h /dev/sdb"
   ```

Running these commands will have no impact on a running deployment and can be safely performed without interruption to the customer.

## Changing the instance

<span class="badge badge-note">SOC2/CI-98</span>

The state of managed instances infrastructure and deployment artifact are stored in the following repositories

- [sourcegraph/infrastructure](https://github.com/sourcegraph/infrastructure)
- [sourcegraph/deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed)

We are aligned with the [company-wide testing philosophy](https://docs.sourcegraph.com/dev/background-information/testing_principles#policy). All changes to above repositories have to be done via a Pull Request, and the Pull Request requires a [test plan](https://docs.sourcegraph.com/dev/background-information/testing_principles#test-plans) in the description to detail how to validate the change. Additionally, the Pull Request will require at least one approval prior to merging. This ensure we establish a proper audit trail of what's changed and the reason behind it.

## Instance environments

<span class="badge badge-note">SOC2/CI-100</span>

We have two types of managed instances, internal and customers. The list of currently maintained instances can be found [here](../../../process/releases/upgrade_managed_issue_template.md).

### Internal instances

Internal instances are created for various testing purposes:

- testing changes prior to the montly upgrade on customer instances, e.g <https://devmanaged.sourcegraph.com>
- testing siginificant opertional changes prior applying to customer instances
- short-lived instances for product teams to test important product changes. Notes: any teammate may request a managed instance through our [request process](./index.md#managed-instance-requests)

### Customer instances

All customer instances are considered production enviornment and all changes applied to these customers should be well-tested in internal environment.

## Avaiability of the instance

<span class="badge badge-note">SOC2/CI-87</span>

We are aligned with the [company-wide incident response playbook](../../../process/incidents/index.md) to handle managed instances downtime.

### Uptime Checks

We utilize GCP [Uptime Checks](https://cloud.google.com/monitoring/uptime-checks) to perform uptime checks against the [managed instance frontend url](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/f2d46b67f31bfcd2d74f79e46641a701215afb56/modules/terraform-managed-instance/infrastructure.tf#L508-L553). When such alert is fired, it usually means the service is completely not accessible to customers. In the event of downtime, GCP will notify [On-Call DevOps engineers](../index.md#on-call) via Opsgenie and the On-Call engineers will proceed with our incident playbook to ensure we reach to a resolution.

## Confirm instance health

<span class="badge badge-note">SOC2/CI-109</span>

The primary tool that monitors releases post-deployment are through a variety of uptime monitors and system performance metrics. These metrics are covered in documentation related to `SOC/CI-87`.

There is no automatic deployment of Sourcegraph in managed instances. Following a release upgrade, we will perform additional manul check to confirm instance health.

Run command below and inspect the output to ensure that all containers are healthy (in particular, look for anything that says Restarting):

```sh
mg check
```

Access Grafana and confirm the instance is healthy by verifying no critical alerts are firing, and there has been no large increase in warning alerts:

```sh
mg forward grafana
```

Check frontend logs and there are no recent errors

```sh
mg ssh-exec docker logs sourcegraph-frontend-0
```

## Instance technicalities

### Impact of recreating the instance via Terraform

All configuration about the instance itself is stored in Terraform, so recreating the instance is a non-destructive action. A brand new VM will be provisioned by Terraform, the startup script will initialize it and mount the existing data disk back into the VM, and the Sourcegraph Docker containers will start up.

This typically involves around 8m40s of downtime: 6m destroying the network endpoint group, and 2m creating the new instance / installing software / launching Docker services.

### Instance is recreated when startup script changes

Any time a startup script is changed, Terraform will plan to delete the old VM instance and recreate it such that the script runs again.

This is a non-destructive action, aside from the fact that it involves downtime for the deployment.

### Debugging startup scripts

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

### Viewing container logs

Containers logs are persisted in [GCP Logging](https://cloud.google.com/logging) by utilizing the [GCP Logging Driver](https://docs.docker.com/config/containers/logging/gcplogs/).

Let's say you want to check the logs of `sourcegraph-frontend-0`.

Visit https://console.cloud.google.com/logs and ensure you're in the right GCP project. Then you may write the following query:

> There's a `Show query` toggle at the top right corner, turn it on

```
resource.type="gce_instance"
log_name="projects/sourcegraph-managed-dev/logs/gcplogs-docker-driver"
jsonPayload.container.name : sourcegraph-frontend-0
```

> Learn more about the [query language syntax](https://cloud.google.com/logging/docs/view/building-queries)

### Fix corrupted repo on `gitserver`

Context of why this exists:

- https://github.com/sourcegraph/sourcegraph/issues/25264
- https://github.com/sourcegraph/customer/issues/887

A broken repo can be identified by

- Checking https://sourcegraph.example.com/site-admin/repositories?status=failed-fetch
- `repo-updater` alerts - [syncer_synced_repos](https://docs.sourcegraph.com/admin/observability/alert_solutions#repo-updater-syncer-synced-repos)

Once you have identified a repo is constantly failing to be updated/fetched, execute the following steps:

1. Set up env vars

   ```sh
   export PROJECT_PREFIX=sourcegraph-managed
   export DEPLOYMENT=$(gcloud compute instances list --project "$PROJECT_PREFIX-$CUSTOMER" | grep -v "executors" | awk 'NR>1 { if ($1 ~ "-red-") print "red"; else print "black"; }')
   export CUSTOMER=<customer_or_instance_name>
   ```

2. Run the following script

   ```sh
   ./util/fix-dirty-repo.sh github.com/org/repo
   ```

## Disaster Recovery and Business Continuity Plan

<span class="badge badge-note">SOC2/CI-110</span>

**TODO**

<!-- https://github.com/sourcegraph/security-issues/issues/246 -->

## Troubleshooting

### FAQ: "googleapi: Error 400: The network_endpoint_group resource ... is already being used"

If `terraform apply` is giving you:

```
Error: Error when reading or editing NetworkEndpointGroup: googleapi: Error 400: The network_endpoint_group resource 'projects/sourcegraph-managed-$COMPANY/zones/us-central1-f/networkEndpointGroups/default-neg' is already being used by 'projects/sourcegraph-managed-$COMPANY/global/backendServices/default-backend-service', resourceInUseByAnotherResource
```

Or similar—this indicates a bug in Terraform where GCP requires an associated resource to be deleted first and Terraform is trying to delete (or create) that resource in the wrong order.

To workaround the issue, locate the resource in GCP yourself and delete it manually and then `terraform apply` again.
