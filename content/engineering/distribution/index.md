# Distribution team

[Roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#heading=h.mi8zg2ql2uc6)

## Vision Statement

Make Sourcegraph accessible to every developer and development team. Identify and satisfy long-term and short-term needs of critical customers. ([Google Doc with more info](https://docs.google.com/document/d/1-RQTq1HnhvxiLWrHUssmSW3aSUqlIOfTtTg1wvKGtzc/edit?ts=5da61097#heading=h.frjbo9inynne))

## Contact

- #distributioneers channel or @distribution in Slack.
- [team/distribution](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/distribution) label in GitHub.

## Ownership areas

The following is a breakdown of the areas of Sourcegraph that the Distribution team owns. It aims to be 100% comprehensive, but the owners are merely aspirational goal posts, not mandates. At the end of the day, whoever has most context will own the area.

Distribution team members may also be involved in other areas of Sourcegraph not mentioned here (i.e., you're not restricted just to the distribution team or working on just the areas of ownership assigned below.)

- **Infrastructure**
  - Sourcegraph.com
  - Dogfood instances (k8s.sgdev.org, sourcegraph.sgdev.org)
  - 3rd-party services (ghe.sgdev.org)
  - Buildkite, CI pipeline / infrastructure.
  - **Primary owners:** @geoffrey, @dave
  - **Related code**: [infrastructure repository](https://github.com/sourcegraph/infrastructure), [CI pipeline code](https://sourcegraph.com/search?q=repo%3A%5Egithub%5C.com%2Fsourcegraph%2Fsourcegraph%24+file%3Abuild.sh%7C%2Fci%2F+count%3A1000&patternType=literal)
- **Release pipeline**
  - End-to-end release process infrastructure
  - Creating monthly releases
  - Testing environments when applicable
  - Releasing security updates when asked to
  - **Primary owners:** @uwe
  - **Related code**: [release captain experience](https://about.sourcegraph.com/handbook/engineering/releases#release-captain), [release tooling](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/dev/release)
- **Deployment modes**
  - **Kubernetes cluster installation & upgrade experience**
    - Kubernetes YAML & associated tooling
    - Cloud-specific setup docs (AWS/Google Cloud)
    - Deployment setup & upgrade docs
    - **Primary owners:** @uwe, @geoffrey
    - **Related code**: [deploy-sourcegraph repository](https://github.com/sourcegraph/deploy-sourcegraph), [cluster installation docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/admin/install/cluster.md) 
  - **Docker Compose & pure-docker installation & upgrade experience**
    - Docker-compose YAML & associated tooling
    - Pure-docker shell scripts & upgrade docs
    - Cloud-specific setup docs (AWS/Google Cloud)
    - Deployment setup & upgrade docs
    - **Primary owners**: @stephen, @geoffrey
    - **Related code**: [deploy-sourcegraph-docker repository](https://github.com/sourcegraph/deploy-sourcegraph-docker), [docker-compose installation docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/doc/admin/install/docker-compose), [docker-compose upgrade docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/admin/updates/docker_compose.md) [pure-docker upgrade docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/admin/updates/pure_docker.md).
  - **Single-container installation & upgrade experience**
    - Primarily in maintenance mode
    - Pushing admins to upgrade to Docker Compose
    - Communicating the limitations of single-container deployments
    - **Primary owners**: @dax (any @distribution team member in the interim)
    - **Related code**: [cmd/server in main repo](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:cmd/server/&patternType=regexp)
  - **Scalability**
    - Documenting when to upgrade from one deploy type to another
    - Resource estimation for new deployments
    - Scaling advice for existing deployments
    - **Primary owners**: @stephen
    - **Related code**: [resource estimator docs](https://docs.sourcegraph.com/admin/install/resource_estimator), [resource estimator repository](https://github.com/sourcegraph/resource-estimator), [Kubernetes scaling docs](https://docs.sourcegraph.com/admin/install/kubernetes/scale)
- **Observability: Monitoring** ("site admins should easily know the health of Sourcegraph")
  - Monitoring & alerting infrastructure
  - Educating site admins about how to monitor Sourcegraph
  - Working with & ensuring engineering @ Sourcegraph adds needed monitoring
  - **Primary owners**: @stephen, @uwe
  - **Related code**: [monitoring generator (dashboards/alerts)](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring), [Grafana docker image](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/docker-images/grafana), [Prometheus docker image](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/docker-images/prometheus)
- **Observability: Debugging** ("site admins should be able to collect the information needed to debug issues easily")
  - Logging & Tracing infrastructure
  - Working with & ensuring engineering @ Sourcegraph adds needed logging/tracing to debug issues
  - Making the debugging process for common problems seamless and straightforward
  - Making reporting issues with all needed information easy
  - Ensuring logs/tracing are not overly verbose, identify most useful information for solving problems
  - **Primary owners**: @dax (@beyang and @stephen in the interim)
  - **Related code**: [Jaeger Docker images and code](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:jaeger&patternType=literal), [opentracing code (broadly)](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+opentracing&patternType=literal), Jaeger [k8s](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph%24+jaeger&patternType=literal), [docker-compose/pure-docker](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-docker%24+jaeger&patternType=literal), and [single-container](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:cmd/server+jaeger&patternType=literal) deployments & [associated docs](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:doc/admin/observability+jaeger%7Ctracing&patternType=regexp)

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
- [How to make updates to global settings and configuration on sourcegraph.com](update_sourcegraph_website.md)
