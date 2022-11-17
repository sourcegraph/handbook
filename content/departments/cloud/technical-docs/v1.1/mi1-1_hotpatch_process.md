# MI 1.1 Hotpatch process

A "hotpatch" describes a patch made to a release that is _not_ a tagged patch release.
It can be used to temporarily ship a specific commit for a small number of services to a particular Cloud instance.

This process should only be used if waiting for a tagged release or requesting a tagged patch release is not viable.

## Creating a hotpatch

The team requesting that a hotpatch be shipped to a Cloud customer should create patched images for the relevant services:

1. Create a branch from the latest `$MAJOR.$MINOR` release branch
2. Cherry-pick the relevant changes into your branch
3. Run `sg ci build docker-images-patch $SERVICE` for the relevant services
4. Find the built image tags in the build results

They should then create an issue in `sourcegraph/customer`, labelled `team/cloud`, describing:

1. Reason for the hotpatch
2. The target customer instance
3. The hotpatched image tag(s) to deploy
4. Link to the branch from which the hotpatched images are built

## Deploying a hotpatch

Create an override in `$CUSTOMER/overrides` if it exists, or directly in `$CUSTOMER/$DEPLOYMENT/docker-compose/docker-compose.override.yaml`:

```yaml
version: '2.4'
services:
  frontend:
    image: $IMAGE
```

Then:

1. `mi sync artifacts`
2. `mi restart-containers`
3. `mi check`

When a hotpatch is deployed, it must be removed as part of the next [release upgrade](./mi1-1_upgrade_process.md).
