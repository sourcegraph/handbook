# Enabling executors

All managed instances will have executors enabled by default. #ce is responsible for providing the ARR to help us determine the compute resources we allocate to executors, [learn more](https://github.com/sourcegraph/customer/blob/master/.github/ISSUE_TEMPLATE/new_managed_instance.md#executors).

## Deploy executors

### Update terraform config

Open `$CUSTOMER/terraform.tfvars` and uncomment the executors block

> `$COMPANY` is already substituted with actual value during instance creation time, so you only need to uncomment the tfvars block without changing anything else

```diff
-# enable_executors                   = true
-# executor_instance_tag              = "$COMPANY-executors"
-# executor_metrics_environment_label = "$COMPANY"
-# executor_min_replicas              = 0
-# executor_max_replicas              = 4
-# executor_notification_email        = "REDACTED" #wg-shipping-executors
+enable_executors                   = true
+executor_instance_tag              = "$COMPANY-executors"
+executor_metrics_environment_label = "$COMPANY"
+executor_min_replicas              = 0
+executor_max_replicas              = 4
+executor_notification_email        = "REDACTED" #wg-shipping-executors
```

Apply the terraform module

```sh
cd $CUSTOMER
terraform apply
```

**Important**: executors has to be set up on active instance, so if multiple VMs are running, use flag `--deployment red|black` in all `mg` commands below.

Add the executor token to the site configuration of the instance (note: this must be run in the `$CUSTOMER` directory)

```sh
mg executors set-token --token $(terraform output -raw executor_proxy_password)
```

### Reload deployment config

Sync configuration

```sh
mg sync artifacts
```

Reload worker to catch up with the updated configuration

```sh
mg ssh-exec "cd /deployment/docker-compose && docker-compose up -d worker"
```

### Confirm executors is actually working

Then run the command below, which will

- increase the minimal replica of executors auto scaling group to `1`
- retry until either the executors are up or a 5 minute timeout has been reached, after which you should check configuration errors if it fails
- scale auto scaling group back to `0`

```sh
mg executors check
```

### Wrapping up

Commit your changes and open a PR. Let #wg-shipping-executors know it is ready!

<!--

## Setup billing alert

As of 2022-03-08, we give customers a fixed amount (e.g. $500) of computing credits for executors usage, so we need to setup billing alerts.

At a high level, we will create a new monitoring alerting channel (via email) in the GCP project, and configure a budget alert in our organization billing account. All billing alerts will be delivered to #wg-shipping-executors

### Create slack email integration

- Customers-facing managed instances alert email can be found [here](https://sourcegraph.slack.com/services/B036VE89LQG?settings=1&utm_source=in-prod&utm_medium=inprod-link_app_settings-user_card-click)
- Dev and demo instances alert email can be found [here](https://sourcegraph.slack.com/services/B036J3BAX2M?settings=1&utm_source=in-prod&utm_medium=inprod-link_app_settings-user_card-click)

### Create budget

1. Go to our [billing dashboard - budgets & alerts](https://console.cloud.google.com/billing/017005-C370B2-0E3030/budgets?authuser=0&organizationId=244397465763)
1. Click `CREATE BUDGET`
1. Create the budget with the following information

Name: `sourcegraph-managed-$CUSTOMER-executors`
Time range: `Custom range`
From: `CURRENT DATE` (check no end date)
Projects: `sourcegraph-managed-$CUSTOMER`
Services: `All services`
Labels: `executor_tag = $CUSTOMER-executors`
Credits: ✅
Promotions and others: ✅

![create-budget-01](https://storage.googleapis.com/sourcegraph-assets/create-executor-budgets-01.png)

Budget type: `Specified amount`
Amount: `500`

![create-budget-03](https://storage.googleapis.com/sourcegraph-assets/create-executor-budgets-03.png)

Only keep the `100%` alert threshold rule

Uncheck `Email alerts to billing admins and users`

Link Monitoring email notification channels we created from the terraform module. Find the email channel by filtering the GCP project from the UI, make sure you select the right project `sourcegraph-managed-$CUSTOMER`.

![create-budget-04](https://storage.googleapis.com/sourcegraph-assets/create-executor-budgets-04.png)

![create-budget-02](https://storage.googleapis.com/sourcegraph-assets/create-executor-budgets-02.png)

-->

## Troubleshooting

Ensure instance groups are there

```sh
$ gcloud compute instance-groups list --zones=$zone --project=$PROJECT
NAME                             LOCATION       SCOPE  NETWORK                MANAGED  INSTANCES
batches--sourcegraph-executor    us-central1-a  zone   sourcegraph-executors  Yes      0
codeintel--sourcegraph-executor  us-central1-a  zone   sourcegraph-executors  Yes      0
```

Ensure there is an active instance belong to one of the instance group (notes the `batches--sourcegraph-executor-rqfs` instance). Sometimes it may take GCP longer to spawn a new instance, so be patient. If no new instance is created for an unreasonable amount of time, consult GCP documentation for next step.

```sh
$ gcloud compute instances list --project=$PROJECT
NAME                                          ZONE           MACHINE_TYPE   PREEMPTIBLE  INTERNAL_IP  EXTERNAL_IP     STATUS
batches--sourcegraph-executor-rqfs            us-central1-a  c2-standard-8  true         10.0.1.58    35.222.34.224   RUNNING
default-red-instance                          us-central1-a  n2-standard-8               10.2.0.3                     RUNNING
sourcegraph-executors-docker-registry-mirror  us-central1-a  n1-standard-2               10.0.1.2     35.239.105.148  RUNNING
```

If above all check out, visit the [Compute Engine Console](https://console.cloud.google.com/compute/instances) and check logs of the executor instance for more troubleshooting.
