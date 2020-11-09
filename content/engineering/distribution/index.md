# Distribution team

<img align="right" src="https://user-images.githubusercontent.com/3173176/92966535-955f2380-f42c-11ea-8723-2aa60c55b2db.png" height="500px"></img>

The distribution team is responsible for making Sourcegraph easy to deploy, scale, monitor, and debug. We solve the most challenging problems our customers face deploying Sourcegraph on-premise in a variety of environments, and on [Sourcegraph.com](https://sourcegraph.com/search) - the largest Sourcegraph instance in the world.

## Contact

- Slack: #distributioneers channel or @distribution
- File issues: [team/distribution](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/distribution) label

## Team communication

Our team has two Slack channels, one public (#distributioneers) and one private (#distribution-team). **Our default is to use the public channel**. The #distribution-team channel will only be used for discussing internal team topics, like scheduling, retrospectives, how we do updates, etc.

## [Goals](goals.md)

See [Goals](goals.md)

## Details

- [Ownership areas](ownership_areas.md)
- [Recurring processes](recurring_processes.md)
- [Internal infrastructure](internal_infrastructure.md)
- [Product & personas](product.md)
- [Tools](tools/index.md)
- Tutorials
  - [Observability developer guide](../observability/index.md)
  - [Managed instances](managed/index.md)
  - [Collecting and inspecting metrics dumps](metrics_dumps.md)
  - [How to set up a separate website maintained by Sourcegraph](separate_website.md)
  - [How to simulate k8s admin security restrictions](k8s_admin_custom_policy.md)
  - [How to test the Gitlab native integration locally](gitlab_native_local.md)
  - [How to make updates to global settings and configuration on sourcegraph.com](update_sourcegraph_website.md)
  - [Create GCP commitments](gcp.md#committed-use-discounts)
  - [Update various service tokens for sourcegraph.com](tokens.md)
- FAQ
  - [Why is there not a "stable" or "latest" Docker image tag?](faq.md#why-is-there-not-a-stable-or-latest-docker-image-tag)

## Members

- We're hiring a [Product Manager](../../product/roles/product_manager.md) for this role. The engineering team is owning PM responsibilities in the meantime.
- [Gonzalo Peci](../../../company/team/index.md#gonzalo-peci-hehim) ([Engineering Manager](../roles.md#engineering-manager))
  - [Geoffrey Gilmore](../../../company/team/index.md#geoffrey-gilmore)
  - [Uwe Hoffmann](../../../company/team/index.md#uwe-hoffmann)
  - [Dave Try](../../../company/team/index.md#dave-try)
  - [Robert Lin](../../../company/team/index.md#robert-lin) (2020 intern)
  - [Dax McDonald](../../../company/team/index.md#dax-mcdonald-he-him)

Other:

- [Stephen Gutekanst](../../../company/team/index.md#stephen-gutekanst) is in an experimental role acting as [an internal contributor, focused on high-value low-cost wins across the board.](https://docs.google.com/document/d/18c9dVjw5MuvOMHahCFQQPAVsp1vRdFDDI_7hmo5MWyQ/edit) His work is not isolated to the Distribution team, it will tracked in [a project board](https://github.com/orgs/sourcegraph/projects/106), with status updates to his manager and any other relevant teams regularly. He will work closely with (and sometimes embedded in) other teams, and get alignment with the product team (and any other team) on his work. This is an experiment between 2020-11-23 and 2021-01-23 and we will evaluate the outcome around that time. [Gonzalo Peci](../../../company/team/index.md#gonzalo-peci-hehim) will continue to be his manager during this experiment.

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:monitoring/.*+%7B:%5B_%5D%2C+Owner:+ObservableOwnerDistribution%2C+:%5B_%5D%7D+OR+%28:%5B_%5D%2C+ObservableOwnerDistribution%29+count:1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/aa59eba4-9b34-45ea-9515-c4dab4cbdac9/main)

## Hiring status

_Updated 2020-06-02_

The team has doubled in size recently so it isn't a high priority to grow this team further, but we are always open to hiring exceptional people. [Apply here](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-distribution.md).
