# Pricing features

This is a guide for product managers on how to think about pricing and tiering your features. [Deprecation of features](deprecation_process.md) is a separate topic with its own page.

## Strategy

Our top-level strategy for pricing can be found on the [company strategy page](../../company/strategy/index.md#pricing).

## Pricing tiers

We have three pricing tiers, Free, Team, and Enterprise. Our Free tier allows users to try the product in a self-service way before they buy, and our Team and Enterprise tiers allow us to charge our users in a fair, understandable way once they see the value.

## Add-on features

We also sell add-on features that are at additional cost to the enterprise tier, such as Batch Changes. These are higher tier features that can be optionally added.

## Philosophy

### Role of the free tier

This is changing soon and will be updated.

### Difference between Cloud, Enterprise, and OSS

See the [try it now section](https://github.com/sourcegraph/sourcegraph#try-it-now) in the Sourcegraph repository for information on the difference between these offerings.

For non-Cloud Enterprise, we offer two deployment models for the product: self-managed or managed. As a default practice we provide consistency in feature-based availability and cost across all enterprise versions. Operational costs may be passed on to the customer depending on the deployment model, but that does not play a factor in per-feature pricing.

### Maintaining a clear upgrade path

Our upgrade path from free -> enterprise -> add-ons should be logical and make sense for the user. For example, having features that only large enterprises use in the free tier doesn't make a lot of sense; the people in that tier aren't benefiting from it, and we miss the chance to add clear value to our enterprise tier for enterprise customers.

Conversely, gating a lot of important daily use cases out of free (or even enterprise) can make it feel like these features don't provide real value.

To avoid these scenarios we should be mindful of the user experience at each step in the upgrade path, and ensure there is a flow that makes sense for each product area.

### Avoid moving features from free to paid

We try to avoid moving features from free to paid as this can be difficult to explain to customers. At that point, you're taking something away from people which is something that we don't want to do. It creates a bad feeling and also can be complex when dealing with an open core product (a feature may have been contributed to the free version and making it paid can feel like unfair monetization of something that was donated.)

It is much better to move a feature from paid to free, so if unsure you can start a feature as paid and move it down to free later if it ends up not being an actual driver of revenue.

If you do decide to move a feature from free to paid, please confirm with Product Leadership first.

## Choosing between free and enterprise

This section is to be determined; in the meantime please work with Product Marketing and Product Leadership to determine which tier a new major feature should go into.

## Choosing the price for add-on features

This section is to be determined; in the meantime please work with Product Marketing and Product Leadership to determine the price for new features that will be charged as add-ons.
