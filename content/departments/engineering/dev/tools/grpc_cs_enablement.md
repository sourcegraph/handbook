# gRPC CS Enablement Guide / Primer

In 5.2 we're rolling out gRPC as a new mechanism for our internal services to communicate with each other.

No customer should notice that something has changed.

This document aims to provide background information on gRPC & how we use it and provide help in case a customer _does_ notice.

## What is gRPC?

[gRPC](https://grpc.io/) is a high-performance [Remote Procedure Call (RPC)](https://en.wikipedia.org/wiki/Remote_procedure_call) framework developed by Google.

### Sidebar: What is an RPC (Remote Procedure Call)?

At its most basic level, an [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) allows one program to cause a function to execute in another program (commonly on another physical machine).

It's a way for different parts of a system, which could be located on different machines, to talk to each other and perform tasks.

Imagine being able to “press a button” in one application to perform an action in another application located somewhere else; that's the essence of an [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call).

Here is a pseudo-code example of what an [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) can look like:

```javascript
// On Server Machine
function add(a, b) {
  return a + b
}

/// ---------------

// On Client Machine
result = remoteCall('add', 5, 3) // Makes an RPC to the 'add' function on the server
print(result) // Output will be 8
```

## What is changing?

Starting in Sourcegraph `5.2.X` , we are switching to use gRPC for Sourcegraph’s **_internal communication (service to service only)_** by default.

In layman's terms: instead of JSON being sent via HTTP between `repo-updater` and `gitserver`, both services now use gRPC to talk to each other.

See the table below for more of the rollout details:

### Rollout timeline

| Sourcegraph Version                   | gRPC Feature Status                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------- |
| 5.2.X (releasing October 4th, 2023)   | On by default, can be disabled via feature flag (see “enabling/disabling GRPC below”) |
| 5.3.X (releasing December 14th, 2023) | On by default, cannot be turned off                                                   |

## Why are we making this change?

As opposed to [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) (our current pattern for [RPCs](https://en.wikipedia.org/wiki/Remote_procedure_call) which we don't use or implement consistently), gRPC offers the following benefits and more:

- A more efficient serialization format (via the use of Protocol Buffers)
- First-class bidirectional streaming support
- Well-defined semantics for backwards compatibility
- Well-typed APIs with code generation across a wide variety of programming languages
- Large 3rd party plugin ecosystem
- Better discoverability and documentation: Finding [what RPCs are available](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@f28a7fab171cacefa66553d875069b8338ee7308/-/blob/internal/gitserver/v1/gitserver_grpc.pb.go?L42-59#tab=references), [where they are implemented](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@f28a7fab171cacefa66553d875069b8338ee7308/-/blob/internal/gitserver/v1/gitserver_grpc.pb.go?L328:2-328:6#tab=implementations_go), and [who is calling them](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@f28a7fab171cacefa66553d875069b8338ee7308/-/blob/internal/gitserver/v1/gitserver_grpc.pb.go?L46:2-46:6#tab=references) is as easy as using “find references”.

See the [PR-FAQ for more background](https://docs.google.com/document/d/1lf7REi_4t03tIxSPccDG4VHtNo-6SLI1-3zDcrspi6k/edit).

## What do customers need to know?

### Most important takeaway

The most important takeaway is this:

**If you don’t have any security restrictions on Sourcegraph’s _internal_ traffic, your customer shouldn’t need to tweak anything.**

### Explanation

Our use of gRPC only affects traffic **_between_** our microservices (e.x. `searcher` ↔ `gitserver`). Traffic between the Sourcegraph Web UI and the rest of the application is unaffected (e.x. `sourcegraph.example.com` ↔ `frontend`’s GraphQL API).

If the customer doesn’t have any security restrictions or internal firewall that affects how Sourcegraph’s microservices communicate amongst themselves, then they shouldn’t need to make any configuration changes.

**Otherwise**, they might need to tweak their security settings / firewall configuration to allow this new type. The following is some general information about gRPC that can help customers change any relevant settings on their end:

- **Protocol Description**: gRPC runs on-top of [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2). It transfers (binary-encoded, not human-readable plain-text) [Protocol Buffer](https://protobuf.dev/) payloads. Our current gRPC implementation does not use any encryption.
- **List of services**: The following services will now _speak mainly gRPC in addition_ to their previous traffic:
  - [frontend](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/base/frontend/sourcegraph-frontend.Service.yaml)
  - [gitserver](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/gitserver/gitserver.Service.yaml)
  - [zoekt-webserver](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/indexed-search/indexed-search.StatefulSet.yaml)
  - [zoekt-indexserver](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/indexed-search/indexed-search.StatefulSet.yaml)
  - [symbols](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/symbols/symbols.Deployment.yaml)
  - [repo-updater](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/repo-updater/repo-updater.Deployment.yaml)
- The following aspects about Sourcegraph’s networking configuration **aren’t changing**:
  - **Ports**: all Sourcegraph services will use the same ports as they were in the **5.1.X** release.
  - **External traffic**: gRPC only affects how Sourcegraph’s microservices communicate amongst themselves - **no new external traffic is sent via gRPC**.
  - **Service dependencies:** each Sourcegraph service will communicate with the same set of services regardless of whether gRPC is enabled.
    - Example: `searcher` will still need to communicate with `gitserver` to fetch repository data. Whether or not gRPC is enabled doesn’t matter.

## Sourcegraph `5.2.X`: enabling / disabling GRPC

In the `5.2.x` release, you are able to use the following methods to enable / disable gRPC if a problem occurs.

_Note: In the `5.3.X` release, these options will be removed and gRPC will always be enabled. See “Rollout timeline” above for more details_

### All services besides `zoekt-indexserver`

Disabling gRPC on any service that is not `zoekt-indexserver` can be done by one of these options:

#### Option 1: disable via site-configuration

Set the `enableGRPC` experimental feature to `false` in the site configuration file:

```json
{
  "experimentalFeatures": {
    "enableGRPC": false // disabled
  }
}
```

#### Option 2: disable via environment variables

Set the environment variable `SG_FEATURE_FLAG_GRPC="false"` for every service.

**Note**: If you use this method, it’s important that the **environment variable is set on every service** across so that **gRPC is enabled/disabled across the board**.

- Sourcegraph is comprised of many separate binaries that all have logic to read the value of `SG_FEATURE_FLAG_GRPC` before making an RPC call. However, each binary _can only see its own set of [environment variables](https://en.wikipedia.org/wiki/Environment_variable)._
- Example: If you set `SG_FEATURE_FLAG_GRPC="false"` on `frontend` and not `searcher`, you’ll end up in a scenario where `searcher` is still using gRPC to make all of its requests - which probably isn’t your intent.

### `zoekt-indexserver` service: disable via environment variable

Set the environment variable `GRPC_ENABLED="false"` on the `zoekt-indexserver` container. (See [https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/18e5f9e450878705b7a99ee7c3bcf74c3fb68514/base/indexed-search/indexed-search.StatefulSet.yaml#L105-L106](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/18e5f9e450878705b7a99ee7c3bcf74c3fb68514/base/indexed-search/indexed-search.StatefulSet.yaml#L105-L106) for an example:

```yaml
- name: zoekt-indexserver
  env:
    - name: GRPC_ENABLED
      value: 'false'
  image: docker.io/sourcegraph/search-indexer:5.2.0
```

_zoekt-indexserver can’t read from Sourcegraph’s site configuration, so we can only use environment variables to communicate this setting._

## How do you know if there might be a problem with gRPC?

_See the gRPC [monitoring guide](./grpc.md) for more background._

It’s important to understand that gRPC is merely the transport mechanism that our entire application logic is built on top of. Our existing monitoring, alerting, and reliance on user-submitted bug reports are our best tools for finding out if there might be a problem with the underlying application.

However, we do have two tools that can help find some problems with gRPC.

### gRPC Grafana dashboards

We’ve included a standard set of dashboards for every gRPC service. (Example: sourcegraph.com’s [gitserver](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1)’s “GRPC Server Metrics” and “GRPC “Internal Error” Metrics” dashboards).

These dashboards include request rates and error rates (along with the failing status codes) for every method.

**However, note that these error rates dashboards don’t tell the whole story.**

- These dashboards capture errors that occur for any reason (including application logic issues) that might be unrelated to GRPC itself.
  - (For example, “cloning a repo that doesn’t exist” is a possible error that can be captured that doesn’t necessarily indicate a problem with grpc itself.)
- Some failure modes are expected and not a cause for concern. For example, `status.DeadlineExceeded` or `status.Canceled` is frequently returned when the caller intentionally cancels an operation and can be entirely intentional (e.g., there is no need to continue streaming the output of a gitserver `archive` call if the user cancels a search request)
- In many cases, we have never had an existing baseline “error rate” metrics for a given method. The error rate that you’re seeing might entirely normal for our application, it’s just being surfaced for the first time because of these new standardized dashboards.

### Internal error reporter

For a **subset of errors** that we are certain originate from the underlying gRPC libraries or configuration, we do have the “internal error” reporter (mentioned in the [monitoring guide](./grpc.md#more-on-internal-errors)) that can capture these.

If you see either:

- relevant entries in the “GRPC “internal errors” metrics” grafana dashboards
- **OR**: application logs that are prefixed with `grpc.internal.error.reporter`

That indicates a surefire issue with our gRPC implementation and (should be reported to us).

## Who do you contact if there is a problem?

Contact us in either the #job-fair-grpc or #discuss-apis Slack channel.
