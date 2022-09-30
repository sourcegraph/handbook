# Silencing Alerts on Sourcegraph.com

You may need to silence alerts on Sourcegraph.com when they are not working as expected.

To do this you need to:

1. Create a PR to `deploy-sourcegraph-cloud`.
1. Edit the [observability.silenceAlerts](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-cloud%24+observability.silenceAlerts&patternType=literal) of the non-sensitive site config.
1. Merge the PR.
1. If the configuration change is needed immediately, you need to rollout the frotend pods to pick up the configuration change.
   1. Run `kubectl rollout restart deployment/sourcegraph-frontend deploy/sourcegraph-frontend-internal --namespace=prod` or ask in the #dev-ops channel.
1. Create a tracking issue with the `silenced-alert` [label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+sort%3Aupdated-desc+label%3Asilenced-alert).
