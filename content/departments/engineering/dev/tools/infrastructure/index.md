# Internal infrastructure

Also see [internal infrastructure development](./dev.md).

## Sourcegraph deployments

Internal deployments are documented in the [deployments](../../process/deployments/instances.md).

## Google Cloud Platform

See [Google Cloud Platform](./gcp.md).

## Continuous integration infrastructure

See [Continuous integration infrastructure](./ci/index.md).

## Code host testing instances

We maintain a collection of code hosts for testing purposes defined in our [infrastructure/dogfood](https://github.com/sourcegraph/infrastructure/tree/main/dogfood/kubernetes/tooling) cluster.

### GitHub Enterprise

- URL: https://ghe.sgdev.org
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/bw4nttlfqve3rc6xqzbqq7l7pm)
- [Additional information](./ghe.md)

### Bitbucket Server

- URL: https://bitbucket.sgdev.org
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/6owvzrgxfva3hn5jxe2253qbwi)

### Phabricator

- URL: https://phabricator.sgdev.org/
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/bmanarlwknhl5p635wkgxfyd2i)

### Gitolite

- Git URL: git@gitolite.sgdev.org
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/i5bm6syw45w2c33cvfrrlt4fhu)

### Gerrit

- URL: https://gerrit.sgdev.org
- Git URL: gerrit-ssh.sgdev.org
- Credentials: Google Auth

### GitLab

- URL: https://gitlab.sgdev.org
- Credentials: [learn more](./gitlab.md#access)
- [Additional information](./gitlab.md)
