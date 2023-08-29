# Customer environment replicas

We maintain separate AWS accounts with Sourcegraph instances and other infrastructure that mimic various customers' environments for testing purposes. See "[Customer environment replicas and managed instances](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/003/ctqvj7zcmdiujmfh2mxzffdlym)" on 1Password for the list.

## Accessing sourcegraph internal infrastrcture

To access this AWS account:

1. Request an AWS user ID by asking in the #it-tech-ops channel in slack.
1. Once you have your credentials visit https://aws.amazon.com/console/.
1. Sign into AWS using those details and Account ID `sourcegraph`.

### Accessing customer environment replicas

To access these AWS accounts:

1. Sign into AWS using your account (which must be under Sourcegraph's main AWS account).
1. Visit https://signin.aws.amazon.com/switchrole.
1. Enter the details from the instance below that you wish to access.

Now you can switch between any added roles and your Sourcegraph AWS account using the menu in the top right of AWS.
