# Feature rollout process

Features come in many different sizes and shapes, and the process for introducing new functionality ranges with these differences. For large or significantly impactful changes or changes that simply need a bit more time to bake, it is encouraged that the following rollout process is followed.

## Sourcegraph Cloud

Sourcegraph Cloud is continuously deployed with all new updates to master. We maintain a [releasability contract](../engineering/continuous_releasability.md) and require all new features to be released behind a feature flag to ensure that functionality can be turned off if a problem arises.

### Before merge

- Run hallway tests with internal users
- Complete a final [design review](design/design_process.md#final-review)
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
   - Follow the steps in this [document](https://about.sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website) to enable your feature in global settings and to push it to all users on Sourcegraph.com.
   - In the PR that pushes changes live, add everyone who gave appproval for launch as reviewers.
1. **Metrics**
   - Share analytics for monitoring the feature shipped. Track metrics for regressions.

### Post-launch

1. **Marketing:** Share update with marketing.
1. **Metrics:** continue to track metrics to ensure expected outcomes are achieved.
1. **Enable by default:** Once a feature has been validated on Sourcegraph Cloud it can be enabled by default to be included in the next release. The feature flag should be left in place for at least one release cycle so that customers can disable the feature if problems arise.

## Sourcegraph Server

New versions of Sourcegraph are [released monthly](../engineering/releases.md#releases-are-monthly) to bundle changes for customers running Sourcegraph Server for their organizations. It is important that any new functionality has been thoroughly tested before including a feature on by default as part of a release.

For most features, we follow the above rollout process because the experience is the same on both Sourcegraph Cloud and Sourcegraph Server.

### Features unique to Sourcegraph Server

Features that are specific to Sourcegraph Server and can't be tested on Sourcegraph Cloud still go through the same process [before merge](#before-merge). Then:

1. **Test on Sourcegraph dogfood instance:** follow the [before launch](#after-merge-before-launch) steps above on [k8s.sgdev.org](../engineering/deployments.md#k8s-sgdev-org).
1. **Release feature with flag off:** for the next release, the feature flag is disabled by default.
1. **Run external user tests:** Reach out to select customers to turn on the feature flag for a specific time period, usually those with expressed interest in testing the feature.
1. **Announce to customers they can enable the feature flag:** Let customers know that they can turn on the feature.
1. **Enable the feature flag:** We turn on the flag by default.
1. **Remove the feature flag:** Follow the [post-launch](#post-launch) process.
