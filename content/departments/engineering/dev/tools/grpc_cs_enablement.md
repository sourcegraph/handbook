# gRPC CS Enablement Guide

# **What is gRPC?**

[gRPC](https://grpc.io/) is a high-performance [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) framework developed by Google.

## What is changing?

In Sourcegraph `5.2.X`, we are enabling gRPC by default (with the option to disable it in case of an issue). gRPC will be the only option in the `5.3.X` release.

## **Why are we making this change?**

As opposed to [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) (the pattern we currently use for [RPCs](https://en.wikipedia.org/wiki/Remote_procedure_call)), gRPC offers the following benefits and more:

- A more efficient serialization format (via the use of Protocol Buffers)
- First-class bidirectional streaming support
- Well-defined semantics for backwards compatibility
- Well-typed APIs with code generation across a wide variety of programming languages

See the [PR-FAQ for more background](https://docs.google.com/document/d/1lf7REi_4t03tIxSPccDG4VHtNo-6SLI1-3zDcrspi6k/edit).

## What do customers need to know?

gRPC **\*\*\*\***\*\*\*\***\*\*\*\***only affects traffic **_between_** our microservices (e.x. `searcher` ↔ `gitserver`). Traffic between the Sourcegraph Web UI and the rest of the application is unaffected (e.x. `[sourcegraph.example.com](http://sourcegraph.example.com)` ↔ `frontend`’s GraphQL API).

**If you don’t have any security restrictions on Sourcegraph’s _internal_ traffic, your customer shouldn’t need to tweak anything.**

Otherwise, they might need to tweak their security settings / firewall configuration to allow this new type. The following is some general information about gRPC that can help customers change any relevant settings:

- **Protocol Description**: gRPC runs on-top of [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2). It transfers (binary-encoded, not human-readable plain-text) [Protocol Buffer](https://protobuf.dev/) payloads. Our current gRPC implementation does not use any encryption.
- **List of services**: The following services will now _speak mainly gRPC in addition_ to their previous traffic:
  - [frontend](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/base/frontend/sourcegraph-frontend.Service.yaml)
  - [gitserver](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/gitserver/gitserver.Service.yaml)
  - [zoekt-webserver](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/indexed-search/indexed-search.StatefulSet.yaml)
  - [zoekt-indexserver](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/indexed-search/indexed-search.StatefulSet.yaml)
  - [symbols](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/symbols/symbols.Deployment.yaml)
  - [repo-updater](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/repo-updater/repo-updater.Deployment.yaml)
- The following aspects about Sourcegraph’s networking configuration **aren’t changing**:
  - \***\*\*\*\*\***Ports:\***\*\*\*\*\*** all Sourcegraph services will use the same ports as they were in the **5.1.X** release.
  - **External traffic**: gRPC only affects how Sourcegraph’s microservices communicate amongst themselves - **no new external traffic is sent via gRPC**.
  - **Service dependencies:** each Sourcegraph service will communicate with the same set of services regardless of whether gRPC is enabled.
    - Example: `searcher` will still need to communicate with `gitserver` to fetch repository data. Whether or not gRPC is enabled doesn’t matter.

## enabling / disabling GRPC

gRPC will be the only means of communication used in Sourcegraph `5.3.X`. In the `5.2.x` release, you can disable the use of gRPC by:

### all services besides zoekt-indexserver

You can either:

- set the `enableGRPC` experimental feature to `false` in the site configuration file:
  ```json
  {
    "experimentalFeatures": {
      "enableGRPC": false // disabled
    }
  }
  ```
- set the environment variable `SG_FEATURE_FLAG_GRPC="false"` for every service.

### zoekt-indexserver

_(zoekt-indexserver can’t read from Sourcegraph’s site configuration, so we can only use environment variables to communicate this setting)._

Set the environment variable `GRPC_ENABLED="false"` on the zoekt-indexserver container. (See [https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/18e5f9e450878705b7a99ee7c3bcf74c3fb68514/base/indexed-search/indexed-search.StatefulSet.yaml#L105-L106](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/18e5f9e450878705b7a99ee7c3bcf74c3fb68514/base/indexed-search/indexed-search.StatefulSet.yaml#L105-L106) for an example:

```yaml
- name: zoekt-indexserver
          env:
            - name: GRPC_ENABLED
              value: "false"
          image: docker.io/sourcegraph/search-indexer:5.2.0
```

## How do you know if there might be a problem with gRPC?

_See the gRPC [monitoring guide](https://handbook.sourcegraph.com/departments/engineering/dev/tools/grpc/#grpc-monitoring-guide) for more background._

It’s important to understand that gRPC is merely the transport mechanism that our entire application logic is built on top of. Our existing monitoring, alerting, and reliance on user-submitted bug reports are our best tools for identifying issues with the underlying application.

However, we do have two tools that can help identify issues with gRPC.

### gRPC grafana dashboards

We’ve included a standard set of dashboards for every gRPC service. (Example: [gitserver](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1)’s “GRPC Server Metrics” and “GRPC “Internal Error” Metrics”. dashboards).

These dashboards include request rates and error rates (along with the failing status codes) for every method.

**However, note that these error rates dashboards don’t tell the whole story.**

- These dashboards capture errors that occur for any reason (including application logic issues) that might be unrelated to GRPC itself.
  - (For example, “cloning a repo that doesn’t exist” is a possible error that can be captured that doesn’t necessarily indicate a problem with grpc itself.)
- Some failure modes are expected and not a cause for concern. For example, `status.DeadlineExceeded` or `status.Canceled` is frequently returned when the caller intentionally cancels an operation and can be entirely intentional (e.g., there is no need to continue streaming the output of a gitserver `archive` call if the user cancels a search request)
- In many cases, we have never had an existing baseline “error rate” metrics for a given method. The error rate that you’re seeing might entirely normal for our application, it’s just being surfaced for the first time because of these new standardized dashboards.

### internal error reporter

For a **subset of errors** that we are certain originate from the underlying gRPC libraries or configuration, we do have the “internal error” reporter (mentioned in the [monitoring guide](https://handbook.sourcegraph.com/departments/engineering/dev/tools/grpc/#more-on-internal-errors)) that can capture these.

If you see

- relevant entries in the “GRPC “internal errors” metrics**”** grafana dashboards
- application logs that are prefixed with `grpc.internal.error.reporter`

That indicates a surefire issue with our gRPC implementation and should reported to us.

## Who do you contact if there is a problem?

Contact us in the #job-fair-grpc channel.
