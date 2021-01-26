# Distribution ownership areas

The following is a breakdown of the areas of Sourcegraph that the [Distribution team](./index.md) owns, as well as relevant documentation and resources.
Distribution team members may also be involved in other areas of Sourcegraph not mentioned here (i.e., you're not restricted just to the distribution team or working on just the areas of ownership assigned below).

To see what Distribution is currently prioritizing, see the [Distribution Goals](./goals.md).

## Infrastucture

- Infrastructure for Sourcegraph.com and other Sourcegraph instances operated by Sourcegraph
- 3rd-party services (ghe.sgdev.org)
- Buildkite, CI pipeline / infrastructure.

**Related**

- [Internal infrastructure](./internal_infrastructure.md)
- [Instances](../deployments/instances.md)
- [Managed instances](./managed/index.md)
- [Infrastructure repository](https://github.com/sourcegraph/infrastructure): all sorts of Terraform stuff
- [CI build scripts](https://sourcegraph.com/search?q=repo%3A%5Egithub%5C.com%2Fsourcegraph%2Fsourcegraph%24+file%3Abuild.sh%7C%2Fci%2F+count%3A1000&patternType=literal)
- [CI pipeline generator](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:%5Eenterprise/dev/ci/ci+count:1000&patternType=literal)
- [CI tests (QA, E2E, etc.)](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/dev/ci/test)
- [Tools](./tools/index.md)

## Release pipeline

- End-to-end release process infrastructure
- Creating monthly releases
- Testing environments when applicable
- Releasing security updates when asked to

**Related**

- [release process](https://about.sourcegraph.com/handbook/engineering/releases)
- [release tooling](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/dev/release)

## Deployment

### Kubernetes cluster installation & upgrade experience

- Kubernetes YAML & associated tooling
- Cloud-specific setup docs (AWS/Google Cloud)
- Deployment setup & upgrade docs

**Related**

- [deploy-sourcegraph repository](https://github.com/sourcegraph/deploy-sourcegraph)
- [cluster installation docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/admin/install/cluster.md)
- [Improving upgrades process](https://github.com/orgs/sourcegraph/projects/71)

### Docker Compose & pure-docker installation & upgrade experience 

- Docker-compose YAML & associated tooling
- Pure-docker shell scripts & upgrade docs
- Cloud-specific setup docs (AWS/Google Cloud)
- Deployment setup & upgrade docs

**Related**

- [deploy-sourcegraph-docker repository](https://github.com/sourcegraph/deploy-sourcegraph-docker)
- [docker-compose installation docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/doc/admin/install/docker-compose)
- [docker-compose upgrade docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/admin/updates/docker_compose.md)
- [pure-docker upgrade docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/admin/updates/pure_docker.md)

### Single-container installation & upgrade experience

- Primarily in maintenance mode
- Pushing admins to upgrade to Docker Compose
- Communicating the limitations of single-container deployments

**Related**

- [`cmd/server` in main repo](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:cmd/server/&patternType=regexp)
- [RFC 263: Single-container deployments are for demos only](https://docs.google.com/document/d/1GPypas4ZUZIw346EcNDM1up2OOQFyPpEzA3-0glPEMY)

### Scalability

- Documenting when to upgrade from one deploy type to another
- Resource estimation for new deployments
- Scaling advice for existing deployments

**Related**

- [resource estimator docs](https://docs.sourcegraph.com/admin/install/resource_estimator)
- [resource estimator repository](https://github.com/sourcegraph/resource-estimator)
- [Kubernetes scaling docs](https://docs.sourcegraph.com/admin/install/kubernetes/scale)

## Observability

- Sourcegraph [monitoring](#monitoring) and [debugging](#debugging) for site administrators and Sourcegraph engineers

**Related**

- [Observability developer guide](https://docs.sourcegraph.com/dev/background-information/observability)
- [Observability for site admins](https://docs.sourcegraph.com/admin/observability)

### Monitoring

- Metrics & alerting infrastructure
- Educating site admins about how to monitor Sourcegraph
- Supporting engineers at Sourcegraph to help them add monitoring to Sourcegraph services
- Ensuring our monitoring tooling:
  - is compelling for engineers at Sourcegraph to interact with and build on top of.
  - supports use cases specific to the needs of engineers at Sourcegraph and Sourcegraph Cloud.

**Related**

- [Monitoring at Sourcegraph](../observability/monitoring.md)
- [Metrics and dashboards for site admins](https://docs.sourcegraph.com/admin/observability/metrics)
- [Alerting for site admins](https://docs.sourcegraph.com/admin/observability/alerting)
- How to [find monitoring](https://docs.sourcegraph.com/dev/how-to/find_monitoring), [add monitoring](https://docs.sourcegraph.com/dev/how-to/add_monitoring), [develop monitoring](https://docs.sourcegraph.com/dev/how-to/monitoring_local_dev).
- Monitoring components:
  - [Monitoring generator (dashboards/alerts)](https://docs.sourcegraph.com/dev/background-information/observability/monitoring-generator)
  - [Grafana docker image](https://docs.sourcegraph.com/dev/background-information/observability/grafana)
  - [Prometheus docker image](https://docs.sourcegraph.com/dev/background-information/observability/prometheus)

Also see [observability](#observability).

### Debugging

- Logging & Tracing infrastructure
- Working with & ensuring engineering @ Sourcegraph adds needed logging/tracing to debug issues
- Making the debugging process for common problems seamless and straightforward
- Making reporting issues with all needed information easy
- Ensuring logs/tracing are not overly verbose, identify most useful information for solving problems

**Related**

- [Jaeger Docker images and code](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:jaeger&patternType=literal)
- [opentracing code (broadly)](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+opentracing&patternType=literal)
- [Jaeger in Kubernetes](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph%24+jaeger&patternType=literal)
- [Jaeger in docker-compose/pure-docker](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-docker%24+jaeger&patternType=literal)
- [Jaeger in single-container](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:cmd/server+jaeger&patternType=literal) deployments

Also see [observability](#observability).
