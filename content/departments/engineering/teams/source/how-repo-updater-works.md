# How [repo-updater](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/tree/cmd/repo-updater) works

- [Purpose](#purpose)
  - [Overview](#overview)
- [Miscellaneous](#miscellaneous)
  - [Production instances](#production-instances)
  - [General dependencies](#general-dependencies)
  - [Cloud-specific dependencies](#cloud-specific-dependencies)
  - [Useful metrics](#useful-metrics)

## Purpose

Sourcegraph mirrors repositories from code hosts. Code hosts may be SaaS products, such as GitHub or AWS CodeCommit, or local installations that are private to a customer's environment. The `repo-updater` service schedules repository synchronization activities using gitserver and any configured code hosts.

### Overview

A `repo-updater` instance exposes an [HTTP server](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/repoupdater/server.go?L70-80) as its primary interface. This interface allows clients to schedule synchronization requests for the following:

- Code host
- Repository
- Repository permission

Although the majority of Git operations are issued directly to `gitserver`, clones and fetches are routed through `repo-updater` to ensure that code host limits and other concerns are respected.

As noted earlier, there are a variety of code hosts that Sourcegraph can integrate with. The [Source interface](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/sources.go?L82-90) abstracts these code host communication details. For example, [listing GitHub repositories](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/github.go?L204-224) is handled differently than [listing GitLab repositories](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/gitlab.go?L229-340).

The service's key data structure is a [priority queue](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/scheduler.go?L509-551) of repository updates. It implements the `heap.Interface` and the `sort.Interface` and functions in the following ways:

- Updates are sorted using [simple heuristics](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/scheduler.go?L609-622) based on repository metadata
- Queue positions can be modified in response to [explicit requests](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/scheduler.go?L368-377)
- Priority levels can be set for [permissions and authorization updates](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/enterprise/cmd/repo-updater/internal/authz/request_queue.go?L9-12)
- Updates are handled via [background worker jobs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/sync_worker.go?L32-94)
- The [external_service_sync_jobs_with_next_sync_at view](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/sync_worker.go?L67) provides insights into the priority queue's activities and current depth

## Miscellaneous

### Production instances

There is [exactly one instance](https://sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-cloud@ec7effbc9491e3ee0c77c3d70ac3f2eb8cb34837/-/blob/base/repo-updater/repo-updater.Deployment.yaml?L17) of `repo-updater` running, by design. This allows us to:

- Avoid expensive coordination issues
- Respecting the aforementioned code host limits

### General dependencies

Before `repo-updater` can begin accepting work, it needs to check that the following services are running and responsive to pings:

1. [frontend](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/shared/main.go?L111-114) - implemented by the [internal API client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/api/internal_client.go?L39-81)
2. [gitserver instances](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/shared/main.go?L116-119) - implemented by the [gitserver client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/gitserver/client.go?L445-458)

> See ["How gitserver works: Production instances"](how-gitserver-works.md#production-instances) for more information.

### Cloud-specific dependencies

If `repo-updater` is running in [sourcegraph.com mode](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/repo-updater/shared/main.go?L188-231), it will verify that certain [code hosts](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/types/types.go?L452-466) (specifically GitHub and GitLab) are properly configured. This is a requirement for us to be able to [automatically add](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/frontend/backend/repos.go?L63-97) repositories from those code hosts when users browse to them.

### Useful metrics

We track a variety of metrics in `repo-updater` that you'll want to familiarize yourself with. For example:

- [Repositories queued for update](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/metrics.go?L88-91)
- [Errors encountered while updating](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/metrics.go?L63-66)
- [Total number of code host calls](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/repos/observability.go?L211-214)
