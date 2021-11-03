# Feature deprecation process

Sometimes we need to deprecate features that we've already released. We follow this process to minimize the impact of that deprecation on both our customers and our internal teams.

## Choosing to deprecate a feature

You should first determine the potential impact of the feature deprecation:

- Are any users using the feature? Who are they? Is there another feature that also meets their needs?
- Are any Sourcegraph teams using the feature, or a subset of its code?
- Are any sales prospects specifically interested in the feature?

Be sure to talk to the the parties above and ensure you really understand the impact of the deprecation. If the answers to these questions confirm that deprecation is the best path forward, you should next document the deprecation.

## Documenting a feature's deprecation

You should then create a blog post to publish when we deprecate the feature. The blog post should contain:

- Why we're deprecating the feature.
- The deprecation timeline.
- Workarounds for the feature's users, if relevant.

We document this in a blog post because blog posts are publicly accessible, timestamped, and easy to send directly to customers or prospects.

## Preparing internal teams for the deprecation

Once you have the blog post, you should share it with the CE team by sharing the blog post in #CE. This gives the CE team context so they can support customers or do high touch outreach.

You should also share the blog post in #general so all teams are aware of it.

Answer any questions or concerns about the deprecation that teams may have.

## Deprecating the feature

Only after sharing this deprecation internally should you do any engineering work needed to deprecate the feature.

## Publishing the blog post

The blog post should be published when the first version that includes the deprecation is released. The release blog post changelog section should link to the deprecation post.

## Notifying customers

Beyond just publishing the blog post, and effort should be made to notify customers that the deprecation will occur (note that this should follow the [normal guidelines for communicating with customers](index.md#talking-to-customers-and-stakeholders)). How you communicate can be done in different ways, and it depends on how impactful the deprecation will be. Some possibilities include:

- Updating product documentation
- Marking the feature in-product with a warning/link to the blog post
- Proactively contacting customers invidually who we know use the feature
- Proactively contacting all customers via email
