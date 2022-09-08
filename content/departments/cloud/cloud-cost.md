# Cloud Cost Policy

When designing features that will exist on Sourcegraph-managed instances we should consider if there will be an increase in cost. This document is primarily focused on infrastructure costs but you should also provide justification that costs will not increase with regards to:

- Setup time (will this feature make Sourcegraph harder to setup?)
- Support costs (has the customer support team been engaged and have they signed off on supporting this new feature?)
- Complexity (is this feature still being tested and requires additional steps)

If any of the above is true, this shouldn’t prevent you from launching on Cloud as long as your team will work closely with ours and this feature is clearly flagged as experimental.

# Requirements

Utilize **feature flags** (ie through site-config or experimental flags) such that a feature can be enabled or disabled as needed. This also allows for the Cloud team to roll out the changes using “canary” methodologies to limit the blast radius for managed instances.

Monitor and test features on [S2](https://sourcegraph.sourcegraph.com/). You can view the grafana dashboard for S2 [here](https://sourcegraph.sourcegraph.com/-/debug/grafana/) and the tracing dashboard [here](https://console.cloud.google.com/traces/overview?project=sourcegraph-managed-sg).
S2 has continous deployment so changes that are pushed to the `main` branch will be deployed to S2. Its not always possible to determine how a change may affect the overall cost. It is the feature team’s responsibility to check the billing page to ensure that their feature is not causing any large spikes in cost. The billing view is saved [here](https://console.cloud.google.com/billing/017005-C370B2-0E3030/reports;savedView=8549f3e5-8bfa-4a88-9b41-42a72eeb93f5?organizationId=244397465763&project=sourcegraph-dev).

File a “Cloud Launch” ticket on our customer repository using the
[Cloud Launch template](https://docs.google.com/document/d/1oE2PJSdgqcX3ZRApWXwabgDtzFK4-0PZ3js5PTxsavw/edit?usp=sharing)

Post in the #cloud channel when the issue has been created
Label the issue `cloud-feature`
The Cloud team has an [SLA of 24 hours](./index.md#SLAs-for-managed-instances) to respond to the ticket with questions.

## Infrastructure costs

One of the original goals of Cloud is to keep infrastructure costs capped to no more than [private doc](https://docs.google.com/document/d/1IBbnjPWvpYp7pWE6chSDUNQIBB0fUYOxn47o1oSiKok/edit?usp=sharing). This expresses the relationship between increased customer usage and infrastructure cost.

## Best practices

Balance cheap storage options. Storing large amounts of data in Cloud SQL has a significantly more cost than GCS. Does the storage need to be high performance?

Use the [Cloud Launch template](https://docs.google.com/document/d/1oE2PJSdgqcX3ZRApWXwabgDtzFK4-0PZ3js5PTxsavw/edit?usp=sharing) to notify the cloud team of your feature launch.

Inform the team of your proposed instance size (small, medium, large,etc ) based
on the [sizing guidance](https://docs.google.com/document/d/1WXfmyBsGlIoJvSdxaEhV0iYTD4ylm9ykLyJItDE53eE/edit#bookmark=id.hmlsv2azmjja)
