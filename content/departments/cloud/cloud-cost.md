# Cloud Cost Policy

When designing features that will exist on Sourcegraph-managed instances we should consider if there will be an increase in cost. This document is primarily focused on infrastructure costs but you should also provide justification that costs will not increase with regards to:

- Setup time (will this feature make Sourcegraph harder to setup?)
- Support costs (has the customer support team been engaged and have they signed off on supporting this new feature?)
- Complexity (is this feature still being tested and requires additional steps)

If any of the above is true, this shouldn’t prevent you from launching on Cloud as long as your team will work closely with ours and this feature is clearly flagged as experimental.

See also our [Cloud Launch Policy](./cloud-launch.md)

# Requirements

Utilize **feature flags** (ie through site-config or experimental flags) such that a feature can be enabled or disabled as needed. This also allows for the Cloud team to roll out the changes using “canary” methodologies to limit the blast radius for managed instances.

Monitor and test features on S2. S2 has continous deployment so changes that are pushed to the `main` branch will be deployed to S2. Its not always possible to determine how a change may affect the overall cost. It is the feature team’s responsibility to check the billing page to ensure that their feature is not causing any large spikes in cost. The billing view is saved [here](https://console.cloud.google.com/billing/017005-C370B2-0E3030/reports;savedView=8549f3e5-8bfa-4a88-9b41-42a72eeb93f5?organizationId=244397465763&project=sourcegraph-dev).

File a “Cloud Launch” ticket on our customer repository
Post in the #cloud channel when the issue has been created
Label the issue `cloud-feature`
The Cloud team has an SLA of 7 days to respond to the ticket with questions.

## Infrastructure costs

One of the original goals of Cloud is to keep infrastructure costs capped to no more than 10% of a given customer’s ARR (private in handbook). This expresses the relationship between increased customer usage and infrastructure cost.

## Best practices

Balance cheap storage options. Storing large amounts of data in Cloud SQL has a significantly more cost than GCS. Does the storage need to be high performance?

Cloud Launch ticket template (also pull from: Cloud launch questionnaire)

Feature issue:
Team owner:

Possible cost increase: Yes/No
If yes, estimated cost increase per month (we have billing calc here):
If yes, what components do you expect to have increased cost:
Has this been rolled out on S2 yet?:

Any additional information we should know?

## “Business” size

<!--
Our standard size estimate is here (this is dynamic calculator). These are fixed costs.
With networking and executors (which can vary in cost) we attempt to keep the overall cost around $500 (private in handbook) per month. Any changes that represent an additional fixed cost must obtain approval from the Cloud team (ie an additional database or storage solution). This is needed to ensure that new features do not endanger our standard pricing model. This pricing is also used for trial instances which is why it's imperative that it does not change without approval. -->
