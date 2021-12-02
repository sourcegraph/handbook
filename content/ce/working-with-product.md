# Working with Product

This page has some basic info on how CEs work with the product team. For more info, see [Tracking and Sharing User/Stakeholder Feedback](../product-engineering/product/product_management/user_stakeholder_feedback.md) and [Surfacing Feedback to the Product Team](../product-engineering/product/surfacing_product_feedback.md).

## Adding GitHub Issues to Boards

While CE may primarily work in the per-repo Issues view in GitHub, the Product and Engineering teams plan their work using the kanban project/board view in GitHub projects. Issues are added to Projects in order to be triaged and to have the work tracked. (Or to be closed, if they will not be worked on.) Because GitHub Projects has a many-to-one relationship between Projects and Issues (one Issue can belong to many projects or to no projects), it is possible to file an issue that is missed by the team who would triage it.

To avoid this, add the GitHub issue to the Triage/Incoming column of the Backlog board associated with the team whose area the issue belongs to.

For example:

1. A user requests a new feature or reports a bug with an existing feature.
1. You open a GitHub Issue describing the feature request or bug, and tag it with a team label, `feature-request` or `bug`, and any other relevant labels.
1. Scroll to the `Projects` menu on the right side of the issue: https://share.getcloudapp.com/7KuoZ2p5
1. Click the gear icon: https://share.getcloudapp.com/E0uAelYe
1. Search for the team you need. If there are multiple Projects, find the one with Backlog in its name.
1. Click the Project.
1. You should see the status show as `triage`, `awaiting triage`, or something similar. If you do not, alert the appropriate PM.

This process ensures that CE Issues are looked at in GitHub.
