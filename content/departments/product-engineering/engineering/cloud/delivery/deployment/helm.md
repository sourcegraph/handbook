# Helm

This page documents resources and troubleshooting tips related to the [Helm chart](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-helm) prototype.

As the project moves out of beta, some of these resources may move to the official docs.

## Resources

- [Helm Installation docs](https://helm.sh/docs/intro/install/)
- [Sourcegraph Helm Repository](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-helm/-/tree/charts/sourcegraph)
  - The README has information about installation and customization
- [Sourcegraph Helm Repository: Examples](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-helm/-/tree/charts/sourcegraph/examples)
- [Helm PD](https://docs.google.com/document/d/1J6jKunfDkO0VsHjezC9vWCdMCVo2Xp33vs8OR8TnrTQ)
- [High-level informational videos](https://www.loom.com/team-videos/Helm) introducing Helm and how the Sourcegraph chart works
- [Comparisons between kustomize and helm implementations](https://github.com/sourcegraph/customer-helm-demo)

## Troubleshooting guide for CSE

We [deliberately introduced (breaking) changes](https://sourcegraph.slack.com/archives/C02VDNKBWDU/p1647287427523769) to our Helm deployment as a chance to demostrate the right way to run Sourcegraph on Kubernetes. The changes were made against all three of our bundled PostgreSQL deployment, and we converted all of them from [Deployments] to [StatefulSets]. As a result, some of the troubleshooting commands our CSE friends have been using may not work for Helm deployment method. Below is a list of noticable changes you many need to account for.

### For customers using Helm Chart version `<= 0.4.0`

No change is required, you can apply the same troubleshooting process for the Kustomize deployment method.

### For customers using Helm Chart version `> 0.4.0`

> This is also applicable to `codeinsights-db` and `codeintel-db`.

As a rule of thumnb, change all references to `deployment` resource type to `statefulset`.

You may used to run `kubectl get pods -l app=pgsql` to get the exact `pgsql` pod name, this is still applicable. However, this is no longer neccessary, because the pod name will always be `pgsql-0`.

You may used to run `kubectl get deployment pgsql -o yaml` to inspect the manifest of the `pgsql` deployment, run `kubectl get statefulset pgsql -o yaml` instead.

You may used to run `kubectl describe deployment pgsql`, run `kubectl describe statefulset pgsql` instead.

You may used to run `kubectl exec -ti <pgsql-random-name> -- bash -c ''` to exec into the pgsql container, now you can always run `kubectl exec -ti pgsql-0 -- bash -c ''` instead.

You may used to run `kubectl rollout restart deployment pgsql` to restart the database, run `kubectl rollout restart statefulset pgsql` instead.

## Additional required information for Delivery support

In the event you need assistance from Delivery, please gather the following information from the customers

- Installed chart version: If the customer already had our chart installed, include the output of `helm list`. If the customer is having trouble doing a fresh install, include the output of `helm show chart sourcegraph/sourcegraph`
- Content of override files: The customer can redact sensitive information if there's any
- Any other logs or helpful information you think it's helpful

[deployments]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
[statefulsets]: https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/
