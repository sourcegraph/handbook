# Distribution team

The distribution team is responsible for making Sourcegraph easy to deploy, scale, monitor, and debug. We solve challenging problems that our customers face when they deploy and scale Sourcegraph on-premise in a variety of environments, and that we face when we deploy and scale [Sourcegraph.com](https://sourcegraph.com/search) (the largest Sourcegraph installation in the world).

## Team API

- Slack: #distributioneers channel or @distribution
- File issues: [team/distribution](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/distribution) label
- What we're currently working on: [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fdistribution+label%3Atracking+distribution), [roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#heading=h.mi8zg2ql2uc6)

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
- **Deployment**
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
        - **Primary owners**: @stephen
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
    - **Primary owners**: @stephen
    - **Related code**: [Jaeger Docker images and code](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:jaeger&patternType=literal), [opentracing code (broadly)](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+opentracing&patternType=literal), Jaeger [k8s](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph%24+jaeger&patternType=literal), [docker-compose/pure-docker](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-docker%24+jaeger&patternType=literal), and [single-container](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:cmd/server+jaeger&patternType=literal) deployments & [associated docs](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:doc/admin/observability+jaeger%7Ctracing&patternType=regexp)

## Tech stack

Go, Docker, Kubernetes

## Details

* [Recurring processes](./recurring_processes.md)
* [Internal infrastructure](./internal_infrastructure.md)
* [Tools](./tools/index.md)
* Tutorials
  * [Observability developer guide](observability/index.md)
  * [Managed instances](managed-instances/index.md)
  * [Collecting and inspecting metrics dumps](metrics_dumps.md)
  * [How to set up a separate website maintained by Sourcegraph](separate_website.md)
  * [How to simulate k8s admin security restrictions](k8s_admin_custom_policy.md)
  * [How to test the Gitlab native integration locally](gitlab_native_local.md)
  * [How to make updates to global settings and configuration on sourcegraph.com](update_sourcegraph_website.md)

## Members

- [Gonzalo Peci](../../../company/team/index.md#gonzalo-peci-hehim) ([engineering manager](../roles.md#engineering-manager)).
- [Stephen Gutekanst](../../../company/team/index.md#stephen-gutekanst) ([project lead](../roles.md#project-lead))
- [Geoffrey Gilmore](../../../company/team/index.md#geoffrey-gilmore)
- [Uwe Hoffmann](../../../company/team/index.md#uwe-hoffmann)
- [Dave Try](../../../company/team/index.md#dave-try)
- [Robert Lin](../../../company/team/index.md#robert-lin) (2020 intern)

## Hiring status

_Updated 2020-06-02_

The team has doubled in size recently so it isn't a high priority to grow this team further, but we are always open to hiring exceptional people. [Apply here](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-distribution.md).
