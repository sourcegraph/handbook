# Managed instances operations

Operations guides for [managed instances](./index.md).

- To upgrade a managed instance, see [managed instances upgrade process](upgrade_process.md).
- To create a managed instance, see [managed instances creation process](creation_process.md).
- To delete a managed instance, see [managed instances deletion process](delete_process.md).
- To suspend a managed instance, see [managed instances suspense process](suspend_process.md).
- To resume a managed instance, see [managed instances resume process](resume_process.md).
- To enable executors on a managed instance, see [enable executors process](./enable_executors_process.md)
- To restore a managed instance in the event of accidental deletion, follow [restore process](./restore_process.md).

## Prereq

To perform any MI operations, you need to meet the following requirement

```sh
git clone git@github.com:sourcegraph/deploy-sourcegraph-managed.git
cd deploy-sourcegraph-managed
echo "export MG_DEPLOY_SOURCEGRAPH_MANAGED_PATH=$(pwd)" >> ~/.bashrc
```

Below we will install `mg` CLI. `mg` simlifies operation on MI and releases the burden of remembering various common `gcloud` commands.

> you can just run `make install` if you already have `$GOBIN` configured somewhere

```sh
mkdir -p ~/.bin
export GOBIN=$HOME/.bin

# ZSH users: echo "export \$PATH=\$HOME/.bin:\$PATH" >> ~/.zshrc
# you need ensure our `mg` binary has the highest priority in $PATH
# otherwise if will conflict with the `mg` emacs editor 😢
echo "export PATH=\$HOME/.bin:\$PATH" >> ~/.bashrc

# ZSH users: source ~/.zshrc
source ~/.bashrc
make install
```

`mg` should be either run under a specific `$CUSTOMER` directory or you need to provide the `--customer $CUSTOMER` flag explictly

```sh
cd $CUSTOMER
mg ssh
```

or

```sh
mg --customer $CUSTOMER ssh
```

Below docs will only cover the essential `mg` commands, and you should consult the `mg` cli usage on your own.

## Red/black deployment model

> red/black deployment model is only used during machine upgrade process
> all regular version upgrade is done in an in-place fashion

At any point in time only one deployment is the active production instance, this is noted in `deploy-sourcegraph-managed/$CUSTOMER/terraform.tfvars`, and except during upgrades only one is running. You can see this via:

```sh
$ gcloud compute instances list --project=sourcegraph-managed-$CUSTOMER
NAME                  ZONE           MACHINE_TYPE   PREEMPTIBLE  INTERNAL_IP  EXTERNAL_IP  STATUS
default-red-instance  us-central1-f  n1-standard-8               10.2.0.2                  RUNNING
```

The `NAME` value indicates the currently active instance (`red` or `black`). During an upgrade, both `default-red-instance` and `default-black-instance` will be present. One being production, the other being the "new" upgraded production instance. When the upgrade is complete, the old one is turned off (red/black swap). Learn more about [managed instances upgrades here](upgrade_process.md).

## Accessing the instance

For CSE's, also refer to [Accessing Managed Instances](../../ce-support/support/process/support-managed-instances.md).

### SSH access

```sh
mg --customer $CUSTOMER ssh
```

### Accessing the Docker containers

[SSH into the relevant instance](#ssh-access) and then:

```sh
docker ps
```

You can then use regular Docker commands (e.g. `docker exec -it $CONTAINER sh`) to interact with the containers.

### Accessing the Cloud SQL

```sh
mg --customer $CUSTOMER db proxy
```

or

```sh
mg --customer $CUSTOMER db cli
```

If you find that the command hangs on the following error:

```
Waiting for cloud_sql_proxy to be ready...
```

It's likely that you need to install [`cloud_sql_proxy`](https://github.com/GoogleCloudPlatform/cloudsql-proxy).

### Restarting for configuration updates

```sh
mg --customer $CUSTOMER reload-config
```

### Port-forwarding

```sh
mg forward <remote_port> <local_port>
```

Expose frontend at `8080`

```sh
mg forward 80 4444
```

This will port-forward `localhost:4444` to port `80` on the VM instance. Some common ports:

- `80`: Frontend (also see [accessing through the GCP load balancer](#access-through-the-gcp-load-balancer-as-a-user-would))
- `3370`: Grafana
- `16886`: Jaeger

Note that other ports are prevented by the `allow-iap-tcp-ingress` firewall rule.

### Backup

Everything

```sh
mg backup
```

Just the Cloud SQL

```sh
mg backup --types sql
```

Just the VM

```sh
mg backup --types vm
```

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

1. Follow the [GCP instructions](https://cloud.google.com/compute/docs/disks/resize-persistent-disk) to resize the block storage. In most cases, the commands will look like:

   ```sh
   ../util/ssh-exec.sh "sudo resize2fs /dev/sdb"
   ```

   Then confirm the new size is visible:

   ```sh
   ../util/ssh-exec.sh "df -h /dev/sdb"
   ```

Running these commands will have no impact on a running deployment and can be safely performed without interruption to the customer.

### Capturing network traffic for analysis on the instance

In some cases, you may need to capture network traffic for debugging issues on the instance. We use Wireshark and tcpdump to do this.
First, find the service you are interested in, for example, to capture traffic to/from the `sourcegraph-frontend` service:

```sh
  sudo tcpdump -i any -s 65535 'port 3080' -w /tmp/sourcegraph-frontend.pcap
```

Next you need to `scp` this from the instance:

```sh
   # after eval $(mg workon)
   gcloud compute scp root@default-$DEPLOYMENT-instance:/tmp/sourcegraph-frontend.pcap . # copy from instance
```

Open the pcap file in Wireshark (installable with `brew install --cask wireshark`)

### Deploy new images across all instances

Use case: you would like to roll out a new images to all instances

- Open a PR to update the golden file and merge it
- Visit [GitHub Actions - reload instances](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/reload_instance.yml)
- Click `Run workflow` (omit customer slug unless you only want to target a specific customer) and it will run `mg sync artifacts` then reload deployment on each instance

### Update application config across all instances

Use case: you would like to update site-config for all instances

- Open a PR to update `mg` codes with the right configuration
- Visit [GitHub Actions - sync instances config](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/sync_instance_config.yml)
- Click `Run workflow` and it will run `mg sync` on each instance

> This action also runs every 24h to ensure all instances config are correct

## Changing the instance

<span class="badge badge-note">SOC2/CI-98</span>

The state of managed instances infrastructure and deployment artifact are stored in the following repositories

- [sourcegraph/infrastructure](https://github.com/sourcegraph/infrastructure)
- [sourcegraph/deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed)

We are aligned with the [company-wide testing philosophy](https://docs.sourcegraph.com/dev/background-information/testing_principles#policy). All changes to above repositories have to be done via a Pull Request, and the Pull Request requires a [test plan](https://docs.sourcegraph.com/dev/background-information/testing_principles#test-plans) in the description to detail how to validate the change. Additionally, the Pull Request will require at least one approval prior to merging. This ensure we establish a proper audit trail of what's changed and the reason behind it.

## Availability of the instance

### Uptime Checks

<span class="badge badge-note">SOC2/CI-87</span>

We are aligned with the [company-wide incident response playbook](../../engineering/dev/process/incidents/index.md) to handle managed instances downtime.

We utilize GCP [Uptime Checks](https://cloud.google.com/monitoring/uptime-checks) to perform uptime checks against the [managed instance frontend url](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/f2d46b67f31bfcd2d74f79e46641a701215afb56/modules/terraform-managed-instance/infrastructure.tf#L508-L553). When such alert is fired, it usually means the service is completely not accessible to customers. In the event of downtime, GCP will notify [On-Call DevOps engineers](../index.md#on-call) via Opsgenie and the On-Call engineers will proceed with our incident playbook to ensure we reach to a resolution.

### Performance Checks

<span class="badge badge-note">SOC2/CI-25</span>

We utilize the Sourcegraph built-in [alerting](https://docs.sourcegraph.com/admin/observability/alerting) to monitor application-level metrics. We identify a list of critical metrics that are representation on the overall system performance, and the alert is delivered to Opsgenie. Opsgenie will notify On-Call DevOps engineers](../index.md#on-call) and the On-Call engineers will proceed to investigate and ensure we reach to a resolution.

A list of critial metrics that will be routed to Opsgenie:

- [postgres: usage_connections_percentage](https://docs.sourcegraph.com/admin/observability/alert_solutions#postgres-usage-connections-percentage)
- [gitserver: disk_space_remaining](https://docs.sourcegraph.com/admin/observability/alert_solutions#gitserver-disk-space-remaining)
- [repo-updater: perms_syncer_perms](https://docs.sourcegraph.com/admin/observability/alert_solutions#repo-updater-perms-syncer-perms)
- [repo-updater: perms_syncer_stale_perms](https://docs.sourcegraph.com/admin/observability/alert_solutions#repo-updater-perms-syncer-stale-perms)
- [frontend: 99th_percentile_search_request_duration](https://docs.sourcegraph.com/admin/observability/alert_solutions#frontend-99th-percentile-search-request-duration)
- [frontend: 99th_percentile_search_codeintel_request_duration](https://docs.sourcegraph.com/admin/observability/alert_solutions#frontend-99th-percentile-search-codeintel-request-duration)

## Confirm instance health

<span class="badge badge-note">SOC2/CI-109</span>

The primary tool that monitors releases post-deployment are through a variety of uptime monitors and system performance metrics. These metrics are covered in documentation related to `SOC/CI-87`.

Following a release upgrade, in addition to automated instance health checks, we will perform additional manul check to confirm instance health.

Run command below and inspect the output to ensure that all containers are healthy (in particular, look for anything that says Restarting):

```sh
mg --customer $CUSTOMER check
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
jsonPayload.container.name : sourcegraph-frontend-0
```

> Learn more about the [query language syntax](https://cloud.google.com/logging/docs/view/building-queries)

### Fix corrupted repo on `gitserver`

Context of why this exists:

- https://github.com/sourcegraph/sourcegraph/issues/25264
- https://github.com/sourcegraph/customer/issues/887
- https://github.com/sourcegraph/customer/issues/1014#issuecomment-1151489754

A broken repo can be identified by

- Checking https://sourcegraph.example.com/site-admin/repositories?status=failed-fetch
- `repo-updater` alerts - [syncer_synced_repos](https://docs.sourcegraph.com/admin/observability/alert_solutions#repo-updater-syncer-synced-repos)
- `git prune` and `git fetch` operations failing when run inside gitserver on the repo directly

Once you have identified a repo is constantly failing to be updated/fetched, execute the following steps:

1. Set up env vars

   ```sh
   export PROJECT_PREFIX=sourcegraph-managed
   export CUSTOMER=<customer_or_instance_name>
   export DEPLOYMENT=$(gcloud compute instances list --project "$PROJECT_PREFIX-$CUSTOMER" | grep -v "executors" | awk 'NR>1 { if ($1 ~ "-red-") print "red"; else print "black"; }')
   ```

1. Determine if `git prune` or `git fetch` is failing by exec'ing into the gitserver-0 container

```sh
mg ssh
docker exec -it gitserver-0 sh
cd /data/repos/<repo_name>/.git
cat sgm.log
cat gc.log
# look for errors and numbers of failures
# Also run
git prune && git fetch # check for errors
```

1. Run the following [script](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/util/fix-dirty-repo.sh), from within a clone of `sourcegraph/deploy-sourcegraph-managed`, to have repo-updater queue an update

   ```sh
   ./util/fix-dirty-repo.sh github.com/org/repo
   ```

1. Possibly add YAML below per https://github.com/sourcegraph/customer/issues/1128#issuecomment-1187299283. This depends
   on if SRC_ENABLE_SG_MAINTENANCE is thought to be part of the issue.

   ```yaml
   gitserver-0:
     environment:
       - SRC_ENABLE_SG_MAINTENANCE=false
       - SRC_ENABLE_GC_AUTO=true
   ```

### Investigate VM platform logs

Navigate to GCP Logging in the right project, use the following query. This is helpful to figure out automated operation against our VM instances.

```
resource.type="gce_instance"
protoPayload.authenticationInfo.principalEmail="system@google.com"
```

## Disaster Recovery and Business Continuity Plan

<span class="badge badge-note">SOC2/CI-110</span>

Follow [restore process](./restore_process.md)

<!-- https://github.com/sourcegraph/security-issues/issues/246 -->

## Troubleshooting

### FAQ: "googleapi: Error 400: The network_endpoint_group resource ... is already being used"

If `terraform apply` is giving you:

```
Error: Error when reading or editing NetworkEndpointGroup: googleapi: Error 400: The network_endpoint_group resource 'projects/sourcegraph-managed-$COMPANY/zones/us-central1-f/networkEndpointGroups/default-neg' is already being used by 'projects/sourcegraph-managed-$COMPANY/global/backendServices/default-backend-service', resourceInUseByAnotherResource
```

Or similar—this indicates a bug in Terraform where GCP requires an associated resource to be deleted first and Terraform is trying to delete (or create) that resource in the wrong order.

To workaround the issue, locate the resource in GCP yourself and delete it manually and then `terraform apply` again.
