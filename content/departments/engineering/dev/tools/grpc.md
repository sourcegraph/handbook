# gRPC

This document provides an overview and documentation for Sourcegraph-Specific gRPC usage, including information about gRPC services, monitoring, common issues, and additional resources. The purpose of this document is to assist developers in understanding and working with gRPC.

## GRPC Monitoring Guide

to view the gRPC metrics, go to the built-in Grafana dashboard. The goal of these metrics is to identify specific types of errors that we are aware of, which originate from the grpc/protobuf libraries we employ. Such errors often hint at potential configuration issues or bugs related to our grpc-specific application logic. By implementing these additions, we aim to gain better insights into these errors and investigate any necessary adjustments or fixes.

example dashboard:

[gitserver](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1) for example. Within that dashboard, there are two sections with panels for gRPC metrics called `GRPC server metrics` and `GRPC "interanl errors" metrics`.

There is also a filter to only view metrics for a specific rpc method at the top of the datchboard. e.g. https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1&var-alert_level=All&var-shard=All&var-method=Archive

### Metrics

#### GRPC server metrics

- [`Request rate per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100701&orgId=1&var-alert_level=All&var-shard=All) - This is a good indicator of wether or not the rpc method is being used if at all.
- [`Error percentage per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100711&orgId=1&var-alert_level=All&var-shard=All) - Captures server side errors that include normal application logic errors and errors that could be related to the gRPC implementation of the method. There are several reason a method could fail that are unrelated to grpc/ transport mechanism itself. For example, cloning a repo that doesn't exist is possible error being capture that doesn't necessarily indicate a problem with grpc itself. Their are also some failure modes that are expected and not a cause for concern. For example status.DeadlineExceeded or status.Canceled is frequently returned when the caller intentionally cancels a operation and could be entirely intentional (e.g. there is no need to continue streaming the output of a git archive call if user cancels a search request)

the following helps you track the 99th, 90th, 75th percentile response time for each rpc method over a 2-minute interval. By monitoring this metric, you can identify any performance issues or outliers that may affect user experience or indicate areas for optimization.

- [`99th percentile response time per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100720&orgId=1&var-alert_level=All&var-shard=All)
- [`90th percentile response time per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100721&orgId=1&var-alert_level=All&var-shard=All)
- [`75th percentile response time per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100722&orgId=1&var-alert_level=All&var-shard=All)

#### GRPC "internal errors" metrics

- [`Client baseline error percentage per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100801&orgId=1&var-alert_level=All&var-shard=All) - Captures client side errors that include normal application logic errors and errors that could be related to the gRPC implementation of the method. similarily to the server side errors percentage metric,There are several reason a method could fail that are unrelated to grpc/ transport mechanism itself. there are also some failure modes that are expected and not a cause for concern. For example status.DeadlineExceeded or status.Canceled is frequently returned when the caller intentionally cancels a operation and could be entirely intentional (e.g. there is no need to continue streaming the output of a git archive call if user cancels a search request)

- [`Client baseline response codes rate per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100802&orgId=1&var-alert_level=All&var-shard=All) - This gives you a generally idea of how often a status code is returned. For example, if you see a high percentage of `InvalidArgument` status codes, then it is likely there is something wrong with the request being sent to the grpc server.

- [`Client-observed gRPC internal error percentage per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100811&orgId=1&var-alert_level=All&var-shard=All) - This capture the percentage of errors that we know originate from the grpc / protobuf libraries we use
- [`Client-observed gRPC internal error response code rate per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100812&orgId=1&var-alert_level=All&var-shard=All) - This gives you a generally idea of how often a specific grpc status code is returned.

Here are the posssible [grpc status codes](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) that can be returned by a rpc method.

#### More on internal errors

The GRPC "internal errors" metrics flags specific types of errors that we can attribute to the grpc/protobuf libraries we use. Usually, these errors might hint at some configuration or application logic issues specific to grpc that may need further investigation.

How can we determine if an error is coming from grpc-go?

The go-grpc library has a tendency to prefix most gRPC client/server errors with "grpc: ...". Our new interceptors are designed to detect this string pattern. This errors are also logged with the special log scope `grpc.internal.error.reporter` which can be used to filter out these errors in the GCP logs.

Some of the limitations of this approach are:

- The error strings used by https://github.com/grpc/grpc-go could be modified in the future.
- Not all errors from https://github.com/grpc/grpc-go are necessarily transmitted over the network.
- It's possible for someone to inadvertently create an application-level error that starts with "grpc: ...".
- Errors originating from the library may not always be the library's fault, such as when encountering an application bug like sending a 5GB symbols response (see [gRPC 4mb message size limit](#grpc-4mb-message-size-limit)).

See the this [sourcegraph search](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@7d573eeef696d3f5422e49ad9b64584c3c972c18/-/blob/internal/grpc/internalerrs/common.go?L160-166) to see the current list of errors that are being captured as "internal errors"

Despite these limitations, implementing such checks (which may need to be modified or removed later) enhance our monitoring capabilities as we further develop the gRPC implementation.

## Known Issues

### gRPC 4mb message size limit

gRPC has a default message size limit of 4mb. You may encounter the following error if the payload is larger than the allowed message size:

```
[ gitserver-0] ERROR gitserver.gRPC.internal.error.reporter.streamingMethod.postMessageReceive internalerrs/logging.go:226 grpc: received message larger than max (1073741881 vs. 4194304) {"grpcService": "gitserver.v1.GitserverService", "grpcMethod": "Search", "grpcCode": "ResourceExhausted"}
[ frontend] ERROR gitserver.client.gRPC.internal.error.reporter.streamingMethod.postMessageReceive internalerrs/logging.go:226 grpc: received message larger than max (1073741891 vs. 4194304) {"grpcService": "gitserver.v1.GitserverService", "grpcMethod": "Search", "grpcCode": "ResourceExhausted"}
```

This can be changed by setting the `SRC_GRPC_CLIENT_MAX_MESSAGE_SIZE` environment variable.

## Services currently not using gRPC

### Frontend

[frontend](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/cmd/frontend/README.md) is still in progress of being migrated to use gRPC yet. The see the following for more information: [gRPC: migrate internal frontend APIs](https://github.com/sourcegraph/sourcegraph/issues/46525)
