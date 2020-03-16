# Distribution team

[Roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#heading=h.mi8zg2ql2uc6)

## Vision Statement

Make Sourcegraph accessible to every developer and development team. Identify and satisfy long-term and short-term needs of critical customers. ([Google Doc with more info](https://docs.google.com/document/d/1-RQTq1HnhvxiLWrHUssmSW3aSUqlIOfTtTg1wvKGtzc/edit?ts=5da61097#heading=h.frjbo9inynne))

## Tech stack

Go, Docker, Kubernetes.

## Code host testing instances

We maintain a collection of code hosts for testing purposes.

- GitHub Enterprise: https://ghe.sgdev.org ([credentials on 1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/bw4nttlfqve3rc6xqzbqq7l7pm))
  - [Notes about ghe.sgdev.org](github_enterprise_testing_instance.md)
- Bitbucket Server: https://bitbucket.sgdev.org ([credentials on 1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/6owvzrgxfva3hn5jxe2253qbwi))

## Getting access to our Kubernetes clusters

See [kubernetes/README.md in the infrastructure repository](https://github.com/sourcegraph/infrastructure/blob/master/kubernetes/README.md).

## Customer environment replicas

We maintain separate AWS accounts with Sourcegraph instances and other infrastructure that mimic various customers' environments for testing purposes. See "[Customer environment replicas and managed instances](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/003/ctqvj7zcmdiujmfh2mxzffdlym)" on 1Password for the list.

### Accessing customer environment replicas

To access these AWS accounts:

1. Sign into AWS using your account (which must be under Sourcegraph's main AWS account).
1. Visit https://signin.aws.amazon.com/switchrole.
1. Enter the details from the instance below that you wish to access.

Now you can switch between any added roles and your Sourcegraph AWS account using the menu in the top right of AWS.

### Creating a new customer environment replica

1. Visit our [organization accounts on AWS](https://console.aws.amazon.com/organizations/home?#/accounts).
1. Create an account that will act as the access role shared by everyone on the team.
   - Name: `<NAME><TYPE>SharedAccessRole`, where `<NAME>` is the customer name and `<TYPE>` is `Replica` or `Managed`. (Examples: `AcmeCorpReplicaSharedAccessRole` or `AcmeCorpManagedSharedAccessRole`.)
   - Email: use any unused email address. (Example: `alice+acme-corp-replica-shared@sourcegraph.com`.)
1. Move the account under the organization that you wish to allow this user to access https://console.aws.amazon.com/organizations/home?#/browse/ou-48vq-waaj46mo

## Misc

- [How to set up a separate website maintained by Sourcegraph](separate_website.md)
- [How to replay a metrics dump from a customer](use_metrics_dump.md)
- [How to simulate k8s admin security restrictions](k8s_admin_custom_policy.md)
- [How to test the Gitlab native integration locally](gitlab_native_local.md)
