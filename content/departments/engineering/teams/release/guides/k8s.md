# Helm

## Resources

- [Our customer Helm documentation](https://docs.sourcegraph.com/admin/install/kubernetes/helm)
- [Helm Installation docs](https://helm.sh/docs/intro/install/)
- [Sourcegraph Helm Repository](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-helm/-/tree/charts/sourcegraph)
- [Sourcegraph Helm Repository: Examples](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-helm/-/tree/charts/sourcegraph/examples)
- [Helm PD (Product Doc)](https://docs.google.com/document/d/1J6jKunfDkO0VsHjezC9vWCdMCVo2Xp33vs8OR8TnrTQ)
- [High-level informational videos](https://www.loom.com/team-videos/Helm) introducing Helm and how the Sourcegraph chart works
- [Comparisons between kustomize and helm implementations](https://github.com/sourcegraph/customer-helm-demo)
- [Internal Helm how-to videos](https://www.loom.com/looms/folders/Helm-d543b6f887ed438ab1b3836ab3a3422e)

## Troubleshooting guide for CSE

### For customers using Helm Chart version `<= 0.4.0`

No change is required, you can apply the same troubleshooting process for the Kustomize deployment method.

### For customers using Helm Chart version `> 0.4.0`

> This is also applicable to `codeinsights-db` and `codeintel-db`.

As a rule of thumb, change all references to `deployment` resource type to `statefulset`.

You may used to run `kubectl get pods -l app=pgsql` to get the exact `pgsql` pod name, this is still applicable. However, this is no longer neccessary, because the pod name will always be `pgsql-0`.

You may used to run `kubectl get deployment pgsql -o yaml` to inspect the manifest of the `pgsql` deployment, run `kubectl get statefulset pgsql -o yaml` instead.

You may used to run `kubectl describe deployment pgsql`, run `kubectl describe statefulset pgsql` instead.

You may used to run `kubectl exec -ti <pgsql-random-name> -- bash -c ''` to exec into the pgsql container, now you can always run `kubectl exec -ti pgsql-0 -- bash -c ''` instead.

You may used to run `kubectl rollout restart deployment pgsql` to restart the database, run `kubectl rollout restart statefulset pgsql` instead.

## Additional required information for Release support

In the event you need assistance from Release, please gather the following information from the customers

- Installed chart version: If the customer already had our chart installed, include the output of `helm list`. If the customer is having trouble doing a fresh install, include the output of `helm show chart sourcegraph/sourcegraph`
- Content of override files: The customer can redact sensitive information if there's any
- Any other logs or helpful information you think it's helpful

### k8s Debug Pod

Since k8s tries very hard to be immutable getting debug information can be a little tricky. One way to gather information you may require is to start up a "debug pod". [Busybox](https://hub.docker.com/_/busybox/) is a swiss army knife tool for software. The container image linked above can be run with:

```
kubectl run -i --tty busybox --image=busybox --restart=Never -- sh
```

Assuming your `kubectl` context is set to the correct cluster. From there you can run many common shell commands and functions to help you debug the cluster. The container will end on exit, so there's no extra clean up required

## Development

### Helm Chart Repositories

The helm charts are published to a GCS bucket managed in the [infrastructure repo](https://github.com/sourcegraph/infrastructure/tree/main/helm).

There are two chart repositories:

### release

Monthly and patch releases are published here. This is the official repo and should be used for most deployments.

To access these charts, run:

```
helm repo add sourcegraph https://helm.sourcegraph.com/release
helm repo update
helm search repo sourcegraph
```

### insiders

Charts are published to the insiders chart repository on every commit to the main branch in the deploy-sourcegraph-helm git repo. These changes are often unstable and should only be used for internal testing.

Charts are tagged with `<chart version>-insiders-{short sha}`. This doesn't strictly follow semver according to helm so versions won't show up in a search unless you add the `--devel` flag.

To access these charts, run:

```
helm repo add insiders https://helm.sourcegraph.com/insiders
helm repo update
helm search repo insiders --devel
```

## Helm GA Q&A

#### What does GA mean here?

GA (General Availability) here means that we’re offering it as a supported deployment option.

But more than that, on the date of the GA, we’re going to be updating the various places that talk about Kubernetes in the docs to recommend Helm as the method for using Kubernetes.

#### What is Helm?

[Helm](https://helm.sh/) is a deployment and packaging tool for Kubernetes applications. It uses Go templating to allow end-users to customize their deployments with a config (“values”) file.

#### Where can you find the customer Helm docs?

[Here!](https://docs.sourcegraph.com/admin/install/kubernetes/helm)

#### Why is Helm a better option for running Sourcegraph?

Our Helm chart has a lot of sensible defaults baked into the [values.yaml](https://github.com/sourcegraph/deploy-sourcegraph-helm/blob/main/charts/sourcegraph/values.yaml). For changes to these defaults, we recommend using an override file that always lives outside the chart repo to make changes.

Not only is this much better for deployment as it’s much simpler than forking the repo and maintaining the changes yourself, it also ensures that you never have to deal with merge conflicts during upgrades.

#### How should we position Helm to customers?

We recommend Helm as _**the**_ best method for deploying Sourcegraph. However, if a customer is unfamiliar with Helm and more comfortable with our other deployment/configuration methods, we suggest not pushing hard for them to use Helm.

There is the possibility that customers will find that the [values.yaml](https://github.com/sourcegraph/deploy-sourcegraph-helm/blob/main/charts/sourcegraph/values.yaml) file lacks the customizations they need (though worth reiterating that editing that file is not the method for customizing - [see here](https://docs.sourcegraph.com/admin/install/kubernetes/helm#configuration)). So it's strongly recommended that CE familiarize themselves with what _is_ currently covered, and try to identify anything outside of it (and let Release know) as early as possible in the scoping process.

See the next question for how to log a request for new supported customizations.

In the event we can't add the required customization to the chart, we do support two methods of configuration that offer an alternative to forking the repo – these are using Kustomize on top of Helm, or creating a sub chart. [Read more about both here](https://docs.sourcegraph.com/admin/install/kubernetes/helm#advanced-configuration)

If a customer is willing and able to use Helm, the configuration, deployment and upgrade processes are all easier and more straightforward than with either Kustomize, plain Kubernetes, or Docker Compose.

The upgrade process especially (namely the lack of conflicts and simplicity ([see more here](https://docs.sourcegraph.com/admin/install/kubernetes/helm#upgrading-sourcegraph)) means that a customer's burden of maintaining Sourcegraph and keeping it up to date is greatly reduced. (Though it should still be noted that upgrades are still one minor version at a time.)

Read below for lots more information on how it compares.

#### How should we log a request for changes to the Helm chart?

Bugs (things that should work but don't) should be raised in the same way as normal - rasie an issue, document recreation steps and impact, add the "team/release" label, then message us in [#team-release](https://sourcegraph.slack.com/archives/C05EH3JP15Z).

For changes to the Helm chart (for example, a customer wants to customize something currently missing from the [values.yaml](https://github.com/sourcegraph/deploy-sourcegraph-helm/blob/main/charts/sourcegraph/values.yaml) and/or the docs) please log a product gap with the following details:

- Gap name: "Helm Customization - <short description>"
- Product category: Cloud
- Subcategory: Release - Customer Deployments

We do want a separare gap for each customization/change, as that allows us to prioritize each individually. Please do search and see if there's already a gap aligned with the customers needs.

It's also worth pinging us in [#team-release](https://sourcegraph.slack.com/archives/C05EH3JP15Z) if a product gap is time-sensitive - but please tag our PM (we're getting a new one on May 9th - so check [here](..) for who that is if unsure) and not the team (they don't have Salesforce access).

#### Why will customers like Helm?

- They’re likely to already be using helm for other application deployments, it should be a familiar experience to customize and deploy. They may even already have CI or other infrastructure in place to handle helm charts.
- It’s easier to maintain - no need to create a fork of the deploy-sourcegraph repository, all your customizations can be kept as separate files that are untouched during upgrades and so won’t conflict with the chart.
- They can take advantage of features we’ve built into the chart such as auto-updating references to namespaces, disabling deployment of an in-cluster database with a single configuration flag, and pulling images from a private docker registry.

#### How does it compare with Kustomize?

- Kustomize offers more control over making customizations, but at the expense of greater complexity. It offers complete freedom to write overlays that modify any aspect of the base Kubernetes manifests, but it is non-trivial to write an overlay that doesn’t cause a maintenance burden.
- By default, Helm is more restrictive because you are limited to customizations already built into the chart. This limitation is offset by the ease of use, widespread adoption of Helm, and the fact that all changes built into the provided Helm chart have been tested and verified by Sourcegraph. If a customer encounters a feature that is missing in the Sourcegraph Helm chart, it can be requested and logged as a product gap for the team to incorporate.
- Easier to make multiple customizations - with Kustomize, you have to create a custom overlay in order to use multiple Sourcegraph-provided overlays. With Helm, all configuration is done in a single YAML file and features can be toggled independently.
- It’s easier for Sourcegraph to make changes that can be adopted by all customers - we can add features that are opt-in and disabled by default, or that auto-calculate based on other configured settings.
- Automated calculations within Helm can be used to provide errors or advice to safeguard deployments of Sourcegraph - such as flagging up when one service is underprovisioned in comparison to another service that depends on it. (This is not yet added but can be far more easily than without Helm)

#### How does it compare with manually edited and deployed Kubernetes files?

- Some customers choose to directly edit the base files provided by Sourcegraph and deploy those, rather than adopting kustomize and creating custom overlays. This is a quick way to get started and the changes are easy to understand, but this creates a large maintenance burden for future upgrades. Merge conflicts are much more common in this scenario, and customizations are difficult to keep track of.
- With Helm, the customizations are managed in a separate file created by the customer. As a result, there are no merge conflicts to resolve, and auditing the customizations can be done more easily.
- Using helm to deploy Sourcegraph offers several nice features including version tracking, an uninstall command and a full revision history.
- Deploying via helm is optional - if desired, customers can use helm template to render Kubernetes manifests from the chart, and apply those using kubectl. In that case, there is no difference between the helm-generated, manually-deployed files and manually-deployed files. But the process to maintain them is still much simpler, and less prone to issues during upgrades.

#### Will upgrading be easier?

Yes - installing a new version of Sourcegraph can be as simple as a single command (helm upgrade --version, though in most cases, customers will also have a override file, see [the upgrade instructions for more info](https://docs.sourcegraph.com/admin/install/kubernetes/helm#upgrading-sourcegraph)).

Some upgrades may include a new deployment, and you would want to review any configuration related to that and customize it as necessary.

In contrast, upgrading Sourcegraph using kustomize meant first merging the release changes from the upstream Sourcegraph repository and resolving any merge conflicts that occurred.

#### Can our Helm chart be forked?

Yes, although we strongly recommend against it. If a customer does fork the chart and make their own customizations, they’ll be responsible for keeping the fork in sync with the official chart and managing any merge conflicts.

Instead, we do support two methods of configuration that offer an alternative to forking the repo, using Kustomize on top of Helm, or creating a sub chart. [Read more about both here](https://docs.sourcegraph.com/admin/install/kubernetes/helm#advanced-configuration).

If you learn that the Sourcegraph chart is missing functionality a customer needs, please tell us about it (or submit a PR) so their feature can be added and they won’t need to maintain a separate chart yourself. (Even if they’re comfortable with one of the two approaches covered in the link above.

#### Can you output the manifest files from the Helm chart?

The helm template command can be used to render Kubernetes manifests from the chart. This output can then be inspected, checked into source control, or applied to the cluster via kubectl.

More about this in the [Reviewing changes](https://docs.sourcegraph.com/admin/install/kubernetes/helm#reviewing-changes) section of our Helm docs.

#### What are the limitations of using Helm?

Without opting to either use Kustomize on top of Helm, or create a sub chart ([read more about both here](https://docs.sourcegraph.com/admin/install/kubernetes/helm#advanced-configuration)), customers are limited to the configuration options built into the chart by Sourcegraph.

If a customer needs additional features not included in the chart, it needs to be requested to be added.

#### Can a customer who’s written their own Helm chart migrate to ours?

In theory, yes, and if they have the knowledge to write their own, migrating to ours should be simple enough. But the Release team are happy to consult on this process, with reasonable notice!

#### Will we be deprecating Kustomize/Docker Compose?

There are no current plans to deprecate either deployment option. If that changes, there will be a generous deprecation timeline and support for the migration.

#### Have any of the Sourcegraph deployment defaults changed as part of the move to Helm?

Yes - with the helm deployment, the Sourcegraph cluster defaults to running as non-root users with a read-only root filesystem. This is similar to running with the non-privileged kustomize overlay. This default was changed to provide a smoother setup experience in Kubernetes clusters with restricted access and to follow best practices for security. The security context for each deployment can be customized to match any unique requirements for your cluster - see [this example](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-helm/-/tree/charts/sourcegraph/examples/custom-security-context) in the deploy-sourcegraph-helm repo.

#### What additional customization options are planned for the future?

That’s dependent on customer requests, but the ones we have in mind include:

No specific customizations are currently planned—customer feedback here is going to direct most of our efforts—though we are considering some general improvements to the usability of the chart - i.e., automatically setting environment variables based on different settings. For example, automating the configuration in https://docs.sourcegraph.com/admin/external_services/object_storage.

Please let us know **_any and all_** feedback you get!

[deployments]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
[statefulsets]: https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/
