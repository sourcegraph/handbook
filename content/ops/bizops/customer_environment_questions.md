# Customer Environment Questions

As part of the Distributions team's Goal to be more customer-data driven we have
developed a questionnaire for teams that interact with customers (CE, CS & Distribution).

The questionnaire resides in Google Drive [here](https://docs.google.com/forms/d/1GXDrbVTnKf9rbaY-0tYSy3BsufKXfQZJf7GbxLl1KKA/edit?usp=sharing).


## Processes

### Data collection

The [form](https://docs.google.com/forms/d/1GXDrbVTnKf9rbaY-0tYSy3BsufKXfQZJf7GbxLl1KKA/edit?usp=sharing)
is for internal use only. A Sourcegraph employee must fill it out. It is not
required that the entire form be completed everytime we have a customer interaction
but rather to provide a baseline knowledge of any considerations that need to be
made when interacting with a customer. To make this form more discoverable, a 
link to it is included in the [customer issue template](https://github.com/sourcegraph/customer/blob/master/.github/ISSUE_TEMPLATE/customer-issue.md).

### Data Pipeline

The pipeline for customer data is below

![Image of customer data pipeline](https://sourcegraphstatic.com/customer_env_pipeline.png)


###  Looker 

We use BigQuery to [transform](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/615bc536-0000-2e57-bbd9-f40304364c86/runs?project=telligentsourcegraph) the results and Looker to [view them](https://sourcegraph.looker.com/dashboards-next/170). This allows teams that use this data. 
to view trends over time and see what the majority of customers use.

### Salesforce

This is used to display the _latest_ information we have on a customer to aid 
CE / CS teams in quickly understanding customer requirements.

## Updating questions

This form relies on Google App Script for some automation, and the backing Google
Sheet utilizes some automations. This means that schema changes need to be coordinated
in order to prevent breaking the above pipeline. 

A preliminary process for doing this is to [create an issue](https://github.com/sourcegraph/customer/issues/new/choose) 
in the customer repo and tag @sourcegraph/bizops , @sourcegraph/customer-engineering 
& @sourcegraph/distribution.

If this change is approved, then we can use the issue to coordinate the necessary 
schema changes.



