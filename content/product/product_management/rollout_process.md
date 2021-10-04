# Feature rollout process

Features come in many different sizes and shapes, and the process for introducing new functionality ranges with these differences. For large or significantly impactful changes or changes that simply need a bit more time to bake, it is encouraged that the following rollout process is followed.

Some features have a [beta or experimental label](../beta_and_experimental_feature_labels.md), you can read more about how that works there.

## Launch Tiers

Product features fall into different buckets depending on how much engagement with marketing is needed. Definitions for [L1, L2, and L3 launches](../../marketing/product-marketing/marketing_launch_tiers.md) can be found in the marketing handbook.

## Communications

How we communicate about features is important, especially as it relates to feature roll-out.

### Pre-release features

We always aim to communicate clearly about pre-release features so that we do not cause confusion around customers thinking features are generally available, that they aren't going to change, or even that they couldn't be taken away if we find they aren't working.

1. Prior to the official launch of the feature, we should focus in communication on the problems we are solving, rather than that feature x will definitely include scope y and/or be delivered on z date. For example, we can talk about our ultimate goal of xMM repos indexed and the reason why we are focused on it, or how we’re working on helping teams problems around a specific batch changes use case, and that we're looking for feedback. This can (and should) include some specifics, but that doesn’t need to be the emphasis because people care more about the problems we’re solving anyway.
1. Whenever communicating publicly about pre-release features, we should use the [beta and experimental labels](../beta_and_experimental_feature_labels.md) so we don’t create confusion, and be sure we note that final capabilities of the feature might change. This includes social media, on the website, documentation, release post, changelog, handbook, in the app, or anywhere else. Documentation, as it is long-lived and not tied to a moment in time, should indicate when a feature became generally available.

Public beta testing by its nature involves sharing more detail, showing and letting people use things that are still unreleased, and which can change or even be abandoned before they go live. That’s fine to do, as long as we follow the above principles.

### L1 launches and milestones

L1 launches ([full definition in marketing handbook](../../marketing/product-marketing/marketing_launch_tiers#l1-launch)) are special: we don't do them frequently, but when we do we engage an additional layer of collaboration around them to avoid misunderstandings around how these important features will move from development to general availability.

1. Two months prior to an L1 feature’s planned release date, a collaboration document (a Google doc is fine) should be opened and shared with marketing, product, PR, and any other teams who have a role in the launch, depending on the feature.
1. At the same time, a regular sync should be created for the team. This could be a sync meeting, async Slack channel, a mix or other approach, as long as everyone agrees.

Within the document and as part of keeping in sync, you should track the following (linking to other sources of truth as necessary, rather than creating an additional source of truth here):

- What the current estimate of launch date is
- High level how the feature will work and what capabilities it will have
- How it will be priced
- Marketing plan
- Any beta/experimental phases that are planned, including which components of the beta will remain free or become paid
- What (if any) parts of the feature will have public communications minimized so that they can be used by PR/marketing around the launch

It’s expected that these points will change over the period heading towards launch; the purpose is not to get everything right from the beginning and lock it in, but to stay on the same page on the important points as they evolve. The same procedure would also be followed for milestone-type features, such as hitting a certain repository indexing milestone, but the document would be relatively simpler in that case.

## Sourcegraph Cloud

Sourcegraph Cloud is continuously deployed with all new updates to master. We maintain a [releasability contract](../../engineering/continuous_releasability.md) and require all new features to be released behind a feature flag to ensure that functionality can be turned off if a problem arises.

### Before merge

- Run hallway tests with internal users
- Complete a final [design review](../design/design_process.md#final-review)
- Review documentation
- Review analytics and ensure desired metrics have been added to the feature
- Confirm feature flag functionality

### After merge, before launch

1. **Gather internal feedback:** Enable the feature flag in the [Sourcegraph organization settings](https://sourcegraph.com/organizations/sourcegraph/settings) to enable your feature for all Sourcegraph team members. Be sure to leave enough time for folks to experience the feature in their workflows and provide feedback.
1. **Analytics:** Validate logging is working for critical flows
1. **Approvals:** Recieve approval from key stakeholders.
1. **Bug Tracking:** Keep track of all feedback.
   - Track and ensure high priority bugs in GitHub issues. Ensure they are closed before launch.
   - Track all lower priority bugs that have to be fixed soon.

### Launch

1. **Enable for all Sourcegraph Cloud users**
   - Follow the steps in this [document](../../engineering/distribution/update_sourcegraph_website.md) to enable your feature in global settings and to push it to all users on Sourcegraph.com.
   - In the PR that pushes changes live, add everyone who gave appproval for launch as reviewers.
1. **Metrics**
   - Share analytics for monitoring the feature shipped. Track metrics for regressions.

### Post-launch

1. **Marketing:** Share update with marketing.
1. **Metrics:** continue to track metrics to ensure expected outcomes are achieved.
1. **Enable by default:** Once a feature has been validated on Sourcegraph Cloud it can be enabled by default to be included in the next release. The feature flag should be left in place for at least one release cycle so that customers can disable the feature if problems arise.

## Sourcegraph Server

New versions of Sourcegraph are [released monthly](../../engineering/releases/index.md#releases-are-monthly) to bundle changes for customers running Sourcegraph Server for their organizations. It is important that any new functionality has been thoroughly tested before including a feature on by default as part of a release.

For most features, we follow the above rollout process because the experience is the same on both Sourcegraph Cloud and Sourcegraph Server.

### Features unique to Sourcegraph Server

Features that are specific to Sourcegraph Server and can't be tested on Sourcegraph Cloud still go through the same process [before merge](#before-merge). Then:

1. **Test on Sourcegraph dogfood instance:** follow the [before launch](#after-merge-before-launch) steps above on [k8s.sgdev.org](../../engineering/deployments/index.md#k8s-sgdev-org).
1. **Release feature with flag off:** for the next release, the feature flag is disabled by default.
1. **Run external user tests:** Reach out to select customers to turn on the feature flag for a specific time period, usually those with expressed interest in testing the feature.
1. **Announce to customers they can enable the feature flag:** Let customers know that they can turn on the feature.
1. **Enable the feature flag:** We turn on the flag by default.
1. **Remove the feature flag:** Follow the [post-launch](#post-launch) process.
