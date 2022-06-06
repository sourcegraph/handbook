# Enabling executors

Enabling executor on a managed instances is initiated by #wg-shipping-executors. There are a few logical steps to follow.

1. Update the managed instances terraform to include executor modules
1. Setup billing alert for the executor resources

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

Obtain the access token and apply this token to `executors.accessToken` in site-config.

```sh
terraform show -json | jq '.values.outputs'
```

### Confirm executors is actually working

Increase the minimal replica of executors auto scaling group to `1`

```diff
-executor_min_replicas              = 0
+executor_min_replicas              = 1
```

Apply the change

```sh
terraform apply
```

Open `https://$COMPANY.sourcegraph.com/site-admin/executors` and you shoule be able to see executors instances showing up

Don't forget to scale it down

```diff
-executor_min_replicas              = 1
+executor_min_replicas              = 0
```

Apply the change

```sh
terraform apply
```

### Wrapping up

Commit your changes and open a PR. Let #wg-shipping-executors know it is ready!

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
