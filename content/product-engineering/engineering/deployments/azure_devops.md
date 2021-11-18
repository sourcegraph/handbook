# Azure DevOps

We need to use Azure DevOps to [create an access token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token) to publish our [sourcegraph-vscode](https://github.com/sourcegraph/sourcegraph-vscode) VS Code extension to the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=sourcegraph.sourcegraph).

## Adding a user to our Azure DevOps organization

1. Go to https://sourcegraph.visualstudio.com/_settings/users.
1. Click **Add users**.
1. In the new user form:
   - Enter their email address `@sourcegraph.com`. If they don't have an account yet, it will still send them an email invite.
   - Access level: Basic
   - Add to projects: `sourcegraph`
   - Azure DevOps Groups: `Project Administrators`
1. Click **Add**.
