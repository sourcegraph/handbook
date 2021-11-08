# Beta and experimental feature labels

We use a hierarchy of feature labels to set expectations with our users and internally: `Experimental` ➡️ `Beta` ➡️ GA.

[GA ("General Availability")](https://www.productplan.com/glossary/general-availability/) has no in-product label and is the default user assumption for an unlabelled feature.

## Why we use these labels:

Labelling features correctly lets us move quickly and release early in order to validate our direction. An `Experimental` or `Beta` label and its [corresponding user-facing documentation](https://docs.sourcegraph.com/admin/beta_and_prototype_features):

- Set expectations so users are more forgiving of bugs
- Make users less likely to assume the overall quality of Sourcegraph is as brittle as an early feature might be
- Communicate that we are particularly interested in user feedback
- Communicate that a user's feedback is more likely to have meaningful impact due to the early stage
- Let us release paid-tier features initially for free, to get usage feedback fast or to build our sales and marketing knowledge

## When to use each label:

There's no requirement that every feature begin as `Experimental` and pass through `Beta` before being in `GA`. This depends on the feature size, the development time, and the cost of getting a GA release wrong.

> While there is no strict required lifecycle, for the sake of our customers and our customer-facing teams, we **do** adhere to the minimum documentation, feature flag, and support requirements [defined in our docs](https://docs.sourcegraph.com/admin/beta_and_prototype_features).

> For example, you can't label a feature that's enabled by default `Experimental`, nor a feature with no documentation a `Beta`, but you can have the full necessary for `Beta` and still choose to use `Experimental`.

### Experimental features

The `Experimental` label conveys that a feature is in its earliest stage.

Usually this means we have figured out a problem we're trying to solve but aren't sure what the general solution looks like – the pre-feature-market-fit stage. If a user came across an `Experimental` feature, they might not know why or how to use it on their own.

We might also use the `Experimental` label when we're building the first version of that validated solution but haven't yet reached the fidelity level of a minimum lovable product.

Ask yourself:

- Is it likely our feature direction might change dramatically?
- Are we still trying to determine if this feature is worth a major investment?
- Will users need high-touch communication to use this feature?
- Are we hoping to collect user feedback at the "what is this" or "I _instead_ want..." level?

_If not sooner, you must move to `Beta` in order to enable the feature by default for all users._

### Beta features

We use the `Beta` label to convey a feature is still unfinished, but that its solution is fairly stable and ready for broad testing.

Usually this means we have figured out what problem we're solving _and_ have a validated, minimum-lovable solution for functionality that solves it for many users or configurations. If a user came across a `Beta` feature, they should understand both why it's valuable and be able to immediately realize some of that value a majority of the time.

Ask yourself:

- While the UX or implementation may be brittle, does the feature do "one thing well" for most users that makes them happy?
  - _If the feature does one useful thing well and is not brittle, you should likely be in `GA` instead._
- Is this feature at a quality you would be comfortable enabling it for all users by default?
- Does the feature communicate its own value without high-touch involvement?
- Are users more likely to give feedback on the "how I interact with this" or "I _also_ want" rather than the "what is this" level?
- Are we ready to collect broad usage feedback in order to build our sales, pricing, or marketing strategy?

## When we use an entirely different label

**Rarely**, sometimes we use a different label when a feature is in `Beta` in order to benefit from limiting initial rollout without invoking users' connotations with the word "Beta."

For example: a feature may be ready for GA on a security and functional level, but we want to test the UX before entering GA. We don't want users to incorrectly assume the security isn't robust by attaching a `Beta` label, but we do need to communicate limited availability and possible UX polishing. Traditionally, we use the term `Early Access` for these cases.

## Communicating about pre-release features

Whatever label above is being used, be sure to follow the [communication guidelines for pre-release features](./product_management/rollout_process.md#pre-release-features).
