# Internal infrastructure development

All [internal infrastructure](./index.md) is developed and deployed with infrastructure-as-code in a number of key repositories:

- General infrastructure: [`sourcegraph/infrastructure`](https://github.com/sourcegraph/infrastructure)
- [Sourcegraph instances](../../process/deployments/instances.md): [`deploy-sourcegraph-*` repositories](https://sourcegraph.com/search?q=context:%40sourcegraph+repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-.*+-repo:deploy-sourcegraph%24+-repo:deploy-sourcegraph-docker%24&patternType=literal)

## Testing <span class="badge badge-note">SOC2/GN-105</span>

### Internal infrastructure

[Internal infrastructure](https://github.com/sourcegraph/infrastructure) is primarily deployed from Terraform definitions, though Kubernetes manifests are used for internal tools as well where relevant.

In both cases, all changes are required to go through standardized and automated set of static analysis tools that verify the validity of manifests before they can be deployed, which includes [security scanning](../../../../security/tooling/checkov.md).

### Sourcegraph instances repositories

[Sourcegraph instances](../../process/deployments/instances.md) are deployed from Kubernetes manifests that go through a standardized and automated set of static analysis tools that verify the validity of manifests before they are deployed.

The version of Sourcegraph that gets deployed is required to go through the [Sourcegraph application continuous integration pipeline](https://docs.sourcegraph.com/dev/background-information/continuous_integration) beforehand.
