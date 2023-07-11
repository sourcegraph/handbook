# gRPC

This document provides an overview and documentation for Sourcegraph-Specific gRPC usage, including information about gRPC services, monitoring, common issues, and additional resources. The purpose of this document is to assist developers in understanding and working with gRPC.

## GRPC Monitoring Guide

To view the gRPC metrics, go to the built-in Grafana dashboard. These metrics aim to identify specific types of errors that we are aware of that originate from the GRPC/protobuf libraries we employ. Such errors often hint at potential configuration issues or bugs related to our GRPC-specific application logic. By implementing these additions, we aim to gain better insights into these errors and investigate any necessary adjustments or fixes.

Example dashboard:

[gitserver](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1) for example. Within that dashboard are two sections with panels for gRPC metrics called `GRPC server metrics` and `GRPC "internal errors" metrics.`

There is also a filter to only view metrics for a specific RPC method at the top of the dashboard. e.g., https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1&var-alert_level=All&var-shard=All&var-method=Archive

### Metrics

#### GRPC server metrics

- [`Request rate per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100701&orgId=1&var-alert_level=All&var-shard=All) - This is a good indicator of whether or not the RPC method is being used if at all.
- [`Error percentage per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100711&orgId=1&var-alert_level=All&var-shard=All) - Captures server-side errors that include normal application logic errors and errors that could be related to the gRPC implementation of the method. There are several reasons a method could fail that are unrelated to the GRPC/ transport mechanism. For example, cloning a repo that doesn't exist is a possible error being captured that doesn't necessarily indicate a problem with grpc itself. Some failure modes are expected and not a cause for concern. For example, status.DeadlineExceeded or status. Canceled is frequently returned when the caller intentionally cancels an operation and could be entirely intentional (e.g., there is no need to continue streaming the output of a git archive call if the user cancels a search request)

The following helps you track the 99th, 90th, and 75th percentile response time for each RPC method over a 2-minute interval. By monitoring this metric, you can identify any performance issues or outliers that may affect user experience or indicate areas for optimization.

- [`99th percentile response time per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100720&orgId=1&var-alert_level=All&var-shard=All)
- [`90th percentile response time per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100721&orgId=1&var-alert_level=All&var-shard=All)
- [`75th percentile response time per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100722&orgId=1&var-alert_level=All&var-shard=All)

#### GRPC "internal errors" metrics

- [`Client baseline error percentage per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100801&orgId=1&var-alert_level=All&var-shard=All) - Captures client-side errors that include normal application logic errors and errors that could be related to the gRPC implementation of the method. Similar to the server-side errors percentage metric, There are several reasons a method could fail that are unrelated to the GRPC/ transport mechanism itself. some failure modes are expected and not a cause for concern. For example, status.DeadlineExceeded or status.Canceled is frequently returned when the caller intentionally cancels an operation and could be entirely intentional (e.g., there is no need to continue streaming the output of a git archive call if the user cancels a search request)

- [`Client baseline response codes rate per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100802&orgId=1&var-alert_level=All&var-shard=All) - This gives you a general idea of how often a status code is returned. For example, if you see a high percentage of `InvalidArgument` status codes, then it is likely there is something wrong with the request being sent to the grpc server.

- [`Client-observed gRPC internal error percentage per-method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100811&orgId=1&var-alert_level=All&var-shard=All) - This capture the percentage of errors that we know originate from the GRPC/protobuf libraries we use
- [`Client-observed gRPC internal error response code rate per method over 2m`](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?viewPanel=100812&orgId=1&var-alert_level=All&var-shard=All) - This gives you a general idea of how often a specific GRPC status code is returned.

These are possible [grpc status codes](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) that can be returned by a RPC method.

#### More on internal errors

The GRPC "internal errors" metrics flag specific errors that we can attribute to the GRPC/protobuf libraries we use. Usually, these errors hint at configuration or application logic issues specific to GRPC that may need further investigation.

How can we determine if an error is coming from grpc-go?

The go-grpc library has a tendency to prefix most gRPC client/server errors with "grpc: ...". Our new interceptors are designed to detect this string pattern.

##### logs

These errors are also logged with the special log scope `grpc.internal.error.reporter`, we can be used to specifically highlight only these kinds errors in the GCP logs.

Here's the GCP log filter that you would use:

```
jsonPayload.InstrumentationScope=~"gRPC.internal.error.reporter"
```

Here's an example log in the GCP log viewer for sourcegraph.com with the above filter applied (accessible via [go/prod-logs-grpc-errors](https://app.golinks.io/prod-logs-grpc-errors))

```jsonc
// https://console.cloud.google.com/logs/query;cursorTimestamp=2023-07-11T15:54:55.508217567Z;duration=P7D;query=resource.type%3D%22k8s_container%22%0Aresource.labels.project_id%3D%22sourcegraph-dev%22%0Aresource.labels.location%3D%22us-central1-f%22%0Aresource.labels.cluster_name%3D%22cloud%22%0Aresource.labels.namespace_name%3D%22prod%22%0AjsonPayload.InstrumentationScope%3D~%22gRPC.internal.error.reporter%22%0Atimestamp%3D%222023-07-11T15:54:55.508217567Z%22%0AinsertId%3D%22l9sph96a3klqpmah%22?project=sourcegraph-dev
{
  "jsonPayload": {
    "Function": "github.com/sourcegraph/sourcegraph/internal/grpc/internalerrs.doLog",
    "Attributes": {
      "initialRequestJSON": "{\"repo\":\"github.com/apxxxxxxe/Bouyomi\",\"revisions\":[{\"rev_spec\":\"61437390bd6aa21dc660ad55260750e38456fcf1\"}],\"limit\":500,\"include_diff\":true,\"query\":{\"Value\":{\"DiffMatches\":{\"expr\":\"xxx\",\"ignore_case\":true}}}}",
      "grpcService": "gitserver.v1.GitserverService",
      "grpcCode": "Internal",
      "nonUTF8StringFields": ["match.diff.content"],
      "grpcMethod": "Search",
      "messageJSON": "{\"Message\":{\"Match\":{\"oid\":\"858432d4219bb57582255dd4806026b294d00df2\",\"author\":{\"name\":\"apxxxxxxe\",\"email\":\"calcium629@gmail.com\",\"date\":{\"seconds\":1653432698}},\"committer\":{\"name\":\"apxxxxxxe\",\"email\":\"calcium629@gmail.com\",\"date\":{\"seconds\":1653432747}},\"parents\":[\"cc2a177f8483eb0320a3ea6fa7ba2563158c8b1a\"],\"refs\":[\"\"],\"source_refs\":[\"61437390bd6aa21dc660ad55260750e38456fcf1\"],\"message\":{\"content\":\"add: delete.txt\"},\"diff\":{\"content\":\"descript.txt descript.txt\\n@@ -28,2 +1,1 @@ \\n-//\\ufffdX\\ufffdVURL\\n-homeurl,https://raw.githubusercontent.com/apxxxxxxe/Bouyomi/main/\\n+//文字コード\\n@@ -30,0 +28,3 @@ \\n+//更新URL\\n+homeurl,https://raw.githubusercontent.com/apxxxxxxe/Bouyomi/main/\\n+\\n\",\"ranges\":[{\"start\":{\"offset\":100,\"line\":3,\"column\":45},\"end\":{\"offset\":103,\"line\":3,\"column\":48}},{\"start\":{\"offset\":103,\"line\":3,\"column\":48},\"end\":{\"offset\":106,\"line\":3,\"column\":51}},{\"start\":{\"offset\":218,\"line\":7,\"column\":45},\"end\":{\"offset\":221,\"line\":7,\"column\":48}},{\"start\":{\"offset\":221,\"line\":7,\"column\":48},\"e...(truncated 45 bytes)"
    },
    "SeverityText": "ERROR",
    "InstrumentationScope": "gitserver.gRPC.internal.error.reporter.streamingMethod.postMessageSend",
    "Resource": {
      "service.instance.id": "gitserver-1",
      "service.version": "233748_2023-07-11_5.1-f4a4232130c6",
      "service.name": "gitserver"
    },
    "Caller": "internalerrs/logging.go:228",
    "Body": "grpc: error while marshaling: string field contains invalid UTF-8",
    "Timestamp": 1689090895508038100
  }
}
```

##### limitations

The go-grpc library tends to prefix most gRPC client/server errors with "grpc: ...". Our new interceptors are designed to detect this string pattern. These errors are also logged with the special log scope `grpc.internal.error.reporter`, which can be used to filter out these errors in the GCP logs.

Some of the limitations of this approach are:

- The error strings used by https://github.com/grpc/grpc-go could be modified in the future.
- Not all errors from https://github.com/grpc/grpc-go are necessarily transmitted over the network.
- It's possible for someone to inadvertently create an application-level error that starts with "grpc: ...".
- Errors originating from the library may not always be the library's fault, such as when encountering an application bug like sending a 5GB symbols response (see [gRPC 4 MB message size limit](#grpc-4mb-message-size-limit)).

See this [sourcegraph search](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@7d573eeef696d3f5422e49ad9b64584c3c972c18/-/blob/internal/grpc/internalerrs/common.go?L160-166) to see the current list of errors that are being captured as "internal errors"

Despite these limitations, implementing such checks (which may need to be modified or removed later) enhance our monitoring capabilities as we further develop the gRPC implementation.

## Known Issues

### gRPC message size limit

gRPC isn't optimized for sending large messages. Quoting from [Microsoft's "Performance Best Practices with gRPC" page](https://learn.microsoft.com/en-us/aspnet/core/grpc/performance)

> gRPC is a message-based RPC framework, which means:
>
> - The entire message is loaded into memory before gRPC can send it.
> - When the message is received, the entire message is deserialized into memory.

As such, large messages can cause a lot of memory allocations for both the client and server. For this reason, the Go GRPC implementation has the following default limits

- [sending](https://pkg.go.dev/google.golang.org/grpc#MaxSendMsgSize): maximum ~2.1 GB (2^32-1 bytes) message
- [receiving](https://pkg.go.dev/google.golang.org/grpc#MaxRecvMsgSize): maximum 4 MB message

If these limits are ever tripped in the application, the internal error logger (described [above](#logs)) will emit logs similar to the following:

```
[ gitserver-0] ERROR gitserver.gRPC.internal.error.reporter.streamingMethod.postMessageReceive internalerrs/logging.go:226 grpc: received message larger than max (1073741881 vs. 4194304) {"grpcService": "gitserver.v1.GitserverService", "grpcMethod": "Search", "grpcCode": "ResourceExhausted"}
[ frontend] ERROR gitserver.client.gRPC.internal.error.reporter.streamingMethod.postMessageReceive internalerrs/logging.go:226 grpc: received message larger than max (1073741891 vs. 4194304) {"grpcService": "gitserver.v1.GitserverService", "grpcMethod": "Search", "grpcCode": "ResourceExhausted"}
```

[Here is an example of such a log on sourcegraph.com](https://console.cloud.google.com/logs/query;cursorTimestamp=2023-07-10T03:49:36.647758779Z;duration=P7D;query=resource.type%3D%22k8s_container%22%0Aresource.labels.project_id%3D%22sourcegraph-dev%22%0Aresource.labels.location%3D%22us-central1-f%22%0Aresource.labels.cluster_name%3D%22cloud%22%0Aresource.labels.namespace_name%3D%22prod%22%0AjsonPayload.InstrumentationScope:%22gRPC.internal.error.reporter%22%0A-jsonPayload.Body%3D%22grpc:%20error%20while%20marshaling:%20string%20field%20contains%20invalid%20UTF-8%22%0Atimestamp%3D%222023-07-10T03:49:36.647758779Z%22%0AinsertId%3D%22015qxg2kh29wmy5b%22?project=sourcegraph-dev).

If you see this issue pop up, you should:

1. "work around" this by setting the following environment variables on **each** deployment:

- `SRC_GRPC_CLIENT_MAX_MESSAGE_SIZE` - example: `SRC_GRPC_CLIENT_MAX_MESSAGE_SIZE=400MB`
- `SRC_GRPC_SERVER_MAX_MESSAGE_SIZE` - example: `SRC_GRPC_SERVER_MAX_MESSAGE_SIZE=1GB`

1. Open an issue and contact the gRPC team so that we can investigate it and can see what the proper resolution should be:

- Manually increase the default message limits (see [this custom value for the gitserver gRPC server](https://github.com/sourcegraph/sourcegraph/blob/d131c8d1570d822912bfead51da996e9c2c389a5/internal/gitserver/addrs.go#L298))
- Fix the underlying application logic to prevent large responses in the first place (Example: Should it be possible for the symbols service to return .5GB responses?)
- Change the underlying implementation of the RPC method in question to "chunk" its response into smaller messages.

Setting these environment variables allows the instance to continue operating and using gRPC _before_ we can cut a new patch release that provides a more-permanent fix.

## Services currently not using gRPC

### Frontend

[frontend](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/cmd/frontend/README.md) is still in progress of being migrated to use gRPC yet. See the following for more information: [gRPC: migrate internal frontend APIs](https://github.com/sourcegraph/sourcegraph/issues/46525)
