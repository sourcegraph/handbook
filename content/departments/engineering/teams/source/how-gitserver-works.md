# How [gitserver](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/tree/cmd/gitserver) works

- [Purpose](#purpose)
  - [Overview](#overview)
    - [Scheduling repository updates](#scheduling-repository-updates)
- [Miscellaneous](#miscellaneous)
  - [Production instances](#production-instances)
  - [Command timeouts](#command-timeouts)
  - [Concurrency control](#concurrency-control)
  - [Cleanup tasks](#cleanup-tasks)
  - [Useful metrics](#useful-metrics)

## Purpose

Sourcegraph mirrors repositories from code hosts. Code hosts may be SaaS products, such as GitHub or AWS CodeCommit, or local installations that are private to a customer's environment. The gitserver service is responsible for providing HTTP-based access to (and management of) all repositories that are made accessible via configured code hosts.

### Overview

Each gitserver instance exposes an [HTTP server](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L276-297) as its primary interface. This interface allows clients to clone a repository onto a particular instance, and then direct subsequent Git commands to that repository on that instance.

Generic Git commands are processed using an [exec endpoint](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L769-979), which avoids having to implement every possible Git operation in the HTTP server. Sourcegraph-specific commands and queries, such as [whether a repository is cloneable](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L579-623), are routed through purpose-built HTTP handlers.

The service supports different version control systems, or VCS, that are compatible with Git. The implementation details of these systems are abstracted by a [VCSSyncer interface](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/vcs_syncer.go?L20-34). For example, the steps to clone a [Git repository](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/vcs_syncer.go?L70-85) differ from those of a [Perforce repository](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/vcs_syncer.go?L227-254).

#### Scheduling repository updates

One repository-related responsibility _not_ handled by gitserver is the scheduling of syncs and updates. To clone repositories, clients interact with repo-updater; that service provides a priority queue and schedulers that determine when clones and fetches will take place. Other Git commands are sent directly from clients to gitserver.

> See ["How repo-updater works: Overview"](how-repo-updater-works.md#overview) for more information.

## Miscellaneous

### Production instances

There are currently [10 gitserver instances](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-cloud@HEAD/-/blob/base/gitserver/gitserver.StatefulSet.yaml?L14) in production on sourcegraph.com.

At the moment, we shard repositories across gitserver instances using a [modular hashing strategy](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/gitserver/client.go?L118-124) based on the repository name. This is the responsibility of the [gitserver client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/internal/gitserver/client.go).

A modular hashing strategy has two important implications: repositories can only reside on exactly one gitserver, and a substantial number of repositories need to be relocated to another gitserver if the membership list changes.

In the future, we will shift to a [consistent hashing strategy](https://en.wikipedia.org/wiki/Consistent_hashing) that will provide high availability to repositories and minimize expensive moves. That will also allow us to have a more dynamic set of gitserver instances at any time.

### Command timeouts

There are two different command timeout checks in gitserver: the [short timeout](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L177-200) and the [long timeout](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L221-224). Note that some commands are expected to take a considerable amount of time, especially when executed against large monorepos (some of which can be multiple TB in size).

### Concurrency control

[Repositories can be locked](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/lock.go?L7-24) during sensitive operations to prevent concurrent activities from taking place, such as [two clones of the same repository](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L1279-1287) on the same instance. Locks operate at the directory level on a single instance, since repositories are not replicated across instances today.

### Cleanup tasks

Each gitserver instance will perform various [background cleanup tasks](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L76-85) to ensure that repositories remain healthy, or are removed if they are found to be corrupt.

Additionally, gitserver may remove repositories if the instance's disk is under heavy pressure. The [least recently used](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L436-442) repositories will be removed first, until a [sufficient amount of space](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L370-434) has been reclaimed. This will **only** trigger if the free disk space available is [lower than the threshold](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@98ddc7c6c4c0ff757d3c0430abcc8770eba5c6b7/-/blob/cmd/gitserver/server/cleanup.go?L354-358&subtree=true) set in the environment variable `SRC_REPOS_DESIRED_PERCENT_FREE`, set to `10%` by [default](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@98ddc7c6c4c0ff757d3c0430abcc8770eba5c6b7/-/blob/cmd/gitserver/main.go?L51&subtree=true).

### Useful metrics

We track a variety of metrics in gitserver that you'll want to familiarize yourself with. For example:

- [Command execution](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/server.go?L1526-1546)
- [Repository management](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98f/-/blob/cmd/gitserver/server/server.go?L347-358)
- [Cleanup tasks](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@737e98fe5a1c329fd2b8f1366f931941042b5671/-/blob/cmd/gitserver/server/cleanup.go?L52-72)
