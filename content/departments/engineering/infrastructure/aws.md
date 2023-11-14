# AWS Cloud Management

Sourcegraph AWS Organisation is managed by the Ship team. This includes:

- creating new AWS accounts
- OKTA group access assignments to AWS Accounts
- billing alerting
- deleting AWS accounts

## Access Management

| AWS Account                         | Description                                                                                                                                                                                 | Web console access                                                                                                             | cli/terraform access                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Team-dedicated dev accounts         | Team accounts used for non-production purposes. Storing production/customer data is not allowed.                                                                                            | Login via [steps](#access-to-an-aws-account-via-web-console) - no Entitle access required                                      | follow [steps](#access-to-an-aws-account-via-cliterraform) - no Entitle access required                                      |
| Team-dedicated production accounts  | Every Team accounts used for production purposes.                                                                                                                                           | Request Entitle permission `AWS SSO - Escalation`. When approved, follow [steps](#access-to-an-aws-account-via-web-console)    | Request Entitle permission `AWS SSO - Escalation`. When approved, follow [steps](#access-to-an-aws-account-via-cliterraform) |
| Cloud production accounts           | Cloud production accounts are customer-dedicated accounts for connectivity with customers' code hosts.                                                                                      | Request Entitle permission `AWS SSO - Escalation`. When approved, login via [steps](#access-to-an-aws-account-via-web-console) | Request Entitle permission `AWS SSO - Escalation`. When approved, follow [steps](#access-to-an-aws-account-via-cliterraform) |
| Management Account (Root) Read-only | Management account (read-only) is used to view OKTA integration, billing and organisation structure.                                                                                        | Request Entitle permission `AWS SSO Viewer`. When approved, login via [steps](#access-to-an-aws-account-via-web-console)       | Request Entitle permission `AWS SSO Viewer`. When approved, follow [steps](#access-to-an-aws-account-via-cliterraform)       |
| Management Account (Root) Admin     | Management account is used to manage AWS Identity Center, integrated with OKTA. Terraform access is required to create/delete AWS accounts and assign access to newly created AWS accounts. | Request Entitle permission `AWS SSO Admin`. When approved, login via [steps](#access-to-an-aws-account-via-web-console)        | Request Entitle permission `AWS SSO Admin`. When approved, follow [steps](#access-to-an-aws-account-via-cliterraform)        |

## Create AWS Account

> Note: all existing Sourcegraph AWS accounts can be found [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/variables.tf)

AWS Account are owned by team, which is responsible for requesting access and managing resources. To create a new AWS account:

1. Add new organisation unit and AWS account [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/variables.tf)

2. Open Pull Request and ask for approval in #discuss-cloud-ops channel.

> Note: default billing alert is set to 500$/m, if you require higher limit contact Finance Team and ask for approval in Pull Request.

3. [For Cloud Operations] After merging PR, follow [instructions](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/README.md#create-new-aws-account)

## Access AWS Account

AWS account access is managed via OKTA SSO.

### Access to an AWS account via cli/terraform:

> Note: requires [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

1. Add required profile to `~/.aws/config`` file:

```
[sso-session sg]
sso_start_url = https://d-92672e68f8.awsapps.com/start
sso_region = us-west-2
sso_registration_scopes = sso:account:access

[profile <YOUR_ACCOUNT_NAME>]
sso_session = sg
sso_account_id = <YOUR_ACCOUNT_ID>
sso_role_name = AdministratorAccess
region = us-east-1
output = json
```

2. Login via SSO

```sh
aws sso login --profile <YOUR_ACCOUNT_NAME>
```

Note: if login does not work, it means either your Entitle request was not approved yet or you miss required permission. Ask for help in `#wg-aws-access` channel.

### Access to an AWS account via web console:

1. Login to [OKTA](https://sourcegraph.okta.com/)

2. Choose `AWS SSO` tile.

3. Click given account tile and then `Management console` button.

Note: if given account tile is not visible, it means either your Entitle request was not approved yet or you miss required permission. Ask for help in `#wg-aws-access` channel.

## Delete AWS Account

You can only delete AWS accounts which belong to your team. To delete an AWS account:

1. Delete AWS account [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/variables.tf)

2. Open Pull Request and ask for approval in #discuss-cloud-ops channel.

3. [For Cloud Operations] After merging PR, follow [instructions](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/README.md#create-new-aws-account)

## FAQ

### How can I use AWS IAM Users credentials for automation?

We strongly recommend using AWS SSO role instead of using IAM user credentials for automation. However if you need IAM user credentials for any reason, they are only allowed in non-production accounts.

### How Terraform Cloud is accessing production accounts?

Terraform Cloud uses [dynamic credentials integration](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/aws-configuration) and does not store any credentials.
