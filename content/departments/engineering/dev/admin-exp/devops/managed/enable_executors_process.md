# Enabling executors

**For MI 1.1, see the new process [here](v1.1/mi1-1_enable_executors_process.md).**

Enabling executor on a managed instances is initiated by "?". There are a few logical steps to follow.

1. Update the managed instances terraform to include executor modules
1. Setup billing alert for the executor resources

## Update the managed instances terraform

The change to terraform will be done by Batch Change team. Batch Change team will ping Delivery on the Pull Request for the changes and Delivery team will apply the change.

For Delivery team, you should learn more from this [thread](https://github.com/sourcegraph/deploy-sourcegraph-managed/pull/311#issuecomment-1049794731) before running `terraform apply`.

## Setup billing alert

As of 2022-03-08, we give customers a fixed amount (e.g. $500) of computing credits for executors usage, so we need to setup billing alerts.

At a high level, we will create a new monitoring alerting channel (via email) in the GCP project, and configure a budget alert in our organization billing account. All billing alerts will be delivered to [#wg-shipping-executors](https://sourcegraph.slack.com/archives/C02MR5PPMKJ).

### Create slack email integration

- Customers-facing managed instances alert email can be found [here](https://sourcegraph.slack.com/services/B036VE89LQG?settings=1&utm_source=in-prod&utm_medium=inprod-link_app_settings-user_card-click)
- Dev and demo instances alert email can be found [here](https://sourcegraph.slack.com/services/B036J3BAX2M?settings=1&utm_source=in-prod&utm_medium=inprod-link_app_settings-user_card-click)

### Create alerting channel

This is done by modifying the terraform module

Add the following changes

`$CUSTOMER/infrastructure.tf`

```terraform
variable "executor_notification_email" {
  type        = string
  description = "Email to receive billing alerts for executor budgets"
}

resource "google_monitoring_notification_channel" "billing-alerts-managed-instances" {
  display_name = "billing-alerts-managed-instances"
  type         = "email"

  labels = {
    email_address = var.executor_notification_email
  }
}
```

> The email can be found from [Create slack email integration](#create-slack-email-integration) section

`$CUSTOMER/terraform.tfvars`

```terraform
executor_notification_email = "REPLACE ME with an actual email" #wg-shipping-executors
```

Apply the change before creating the budget

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
