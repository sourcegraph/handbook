# How to make updates to sourcegraph.com

## 1. Why can't I edit the page through the site-admin page anymore

The configuration has been moved to a git repository to ensure all changes are tracked in version control. This ensures visibility of all changes to the configuration, as well as allowing easier management across multiple teams.

## 2. Make changes to the website configuration

### Access the deployment repo for sourcegraph.com

THe first step is to navigate to the deployment [repository](https://github.com/sourcegraph/deploy-sourcegraph-dot-com) for sourcegraph.com. This repo can be edited on github or cloned for local development. *If developing locally create a feature branch before making your edits.*

The json config can be found in the `sourcegraph-frontend.ConfigMap.yaml` located in `base/frontend/sourcegraph-frontend.ConfigMap.yaml`.

### Edit the json content

There are three sections pertaining to configuration of sourcegraph.com

    - global-settings.json
    - site.json
    - extsvc.json

If you have edited the file directly on github.com, select **Create a new branch for this commit and start a pull request.** and click the **commit changes** button. This will automtically create a pull request to merge to the `release` branch, where you can review any changes and seek approval.

If working locally, save your changes and push to your feature branch upstream. You can then create a pull request to merge to the `release` branch, review your changes and seek approval.

### Note: 

Changes to the notices section can be merged by the author without explicit approval from the Distribution team. 

## 3. Deployment to sourcegraph.com

When your pull request is approved, your changes will be automatically deployed to sourcegraph.com via the CI process.

Verify your changes have been deployed successfully by browsing to [soucegraph.com](https://sourcegraph.com/)
