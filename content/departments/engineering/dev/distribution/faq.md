# FAQ

Frequently (and less frequently) asked questions.

## How do we add new work to an ongoing iteration?

> Iteration tasks can change, iteration goals should not.

Adding new tasks to an ongoing iteration can compromise our ability to complete the targets we have set for that period, and is best to be avoided until we have completed all tasks we initially planned for.
If we need to change or add some of the tasks on the iteration, follow the next guidelines:

- Make sure that the objectives that we have set for ourselves are still achievable.
- Consider removing another task to avoid overloading the iteration.
- Consider adding it to the next iteration instead.

## Why is there not a "stable" or "latest" Docker image tag?

Occasionally users ask if there is a `stable` or `latest` Docker image tag they can use instead of e.g. `3.19.1`, `insiders` (nightly builds), etc. There are a few reasons we do not introduce such a tag:

1. There are occasionally (although very rare) manual migrations that need to be performed on upgrade, even for `sourcegraph/server` instances, which are usually called out in our blog post or https://docs.sourcegraph.com/admin/updates and having a `stable` tag means one might more easily miss these.
2. Our production deployment types (Docker Compose, Kubernetes, etc.) are not able to utilize a `stable` tag due to the fact that they require external YAML which must be the appropriate version as well.

To ensure there is no confusion when updating from a `sourcegraph/server` deployment to a more stable Docker Compose or Kubernetes deployment, we've decided not to introduce a `stable` or `latest` tag which would then not be present after upgrading to those better deployment methods.

In the medium to long-term, we also plan on eliminating `sourcegraph/server` usage in production deployments which will further eliminate the possibility that we could just handle this for that deployment type. With that said, our plans here are not yet clearly defined so we do not advise suggesting this to users/customers to avoid confusion.

Although we would advise against automatically updating the image tags currently due to potential for missing manual migrations as mentioned, there are some other options here including using an external service like [Renovate](https://docs.renovatebot.com/docker/) to automatically update Docker image tags to latest, or using the `insiders` tag (nightly builds of Sourcegraph, which we aim to have as stable as our monthly releases, but in practice may sometimes be a bit less stable.)

Requests for this should be documented in https://github.com/sourcegraph/sourcegraph/issues/12524
