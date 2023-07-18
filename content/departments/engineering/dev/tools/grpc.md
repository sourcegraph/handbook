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

gRPC wasn't optimized for sending large messages. Quoting from [Microsoft's "Performance Best Practices with gRPC" page](https://learn.microsoft.com/en-us/aspnet/core/grpc/performance)

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

1. "workaround" this by setting the following environment variables on **each** deployment:

- `SRC_GRPC_CLIENT_MAX_MESSAGE_SIZE` - example: `SRC_GRPC_CLIENT_MAX_MESSAGE_SIZE=400MB`
- `SRC_GRPC_SERVER_MAX_MESSAGE_SIZE` - example: `SRC_GRPC_SERVER_MAX_MESSAGE_SIZE=1GB`

1. Open an issue and contact the gRPC team so that we can investigate it and can see what the proper resolution should be:

- Manually increase the default message limits (see [this custom value for the gitserver gRPC server](https://github.com/sourcegraph/sourcegraph/blob/d131c8d1570d822912bfead51da996e9c2c389a5/internal/gitserver/addrs.go#L298))
- Fix the underlying application logic to prevent large responses in the first place (Example: Should it be possible for the symbols service to return .5GB responses?)
- Change the underlying implementation of the RPC method to "chunk" its response into smaller messages.

Setting these environment variables allows the instance to continue operating and using gRPC _before_ we can cut a new patch release that provides a more permanent fix.

### Non-utf8 string fields

According to [protobuf docs](https://developers.google.com/protocol-buffers/docs/proto3#scalar), protobuf's `string` type only allows UTF-8 encoded strings.

However, Go’s string type does not enforce any particular string encoding](https://go.dev/blog/strings). In Go, the string type can hold a completely arbitrary byte sequence. (However, note that Go's `strings` package is designed to only operate on UTF-8 encoded strings - operations aren't well defined for non-UTF-8 strings.)

On sourcegraph.com, we've observed many logs from the [internal error reporter](#logs) that look like:

```jsonc
// https://console.cloud.google.com/logs/query;cursorTimestamp=2023-07-11T15:54:55.517714691Z;duration=P7D;query=resource.type%3D%22k8s_container%22%0Aresource.labels.project_id%3D%22sourcegraph-dev%22%0Aresource.labels.location%3D%22us-central1-f%22%0Aresource.labels.cluster_name%3D%22cloud%22%0Aresource.labels.namespace_name%3D%22prod%22%0AjsonPayload.InstrumentationScope%3D~%22gRPC.internal.error.reporter%22%0Atimestamp%3D%222023-07-11T15:54:55.508217567Z%22%0AinsertId%3D%22l9sph96a3klqpmah%22?project=sourcegraph-dev
{
  "jsonPayload": {
    "Function": "github.com/sourcegraph/sourcegraph/internal/grpc/internalerrs.doLog",
    "Attributes": {
      "grpcService": "gitserver.v1.GitserverService",
      "grpcCode": "Internal",
      "nonUTF8StringFields": ["match.diff.content"],
      "grpcMethod": "Search"
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

These logs tell us that we have utf-8 strings leaking throughout our application, and we aren't consistent about normalizing them. Note: This isn't a new issue caused by gRPC; it just was the change that surfaced these problems - things have likely been silently breaking all the while. See [this Github Issue for more context](https://github.com/sourcegraph/sourcegraph/issues/52181).

@ggilmore believes that's unlikely we'll encounter this issue on managed instances to any significant degree. sourcegraph.com is uniquely exposed since it's a public service, managed instances should be less likely to have non-utf8 repositories, etc. .

When encountering this issue on a managed instance, please file an issue and ping the gRPC team so that we can investigate. We'll likely need to pull in the general engineering team to determine the best course of action.

#### logging the request/response message

If the `SRC_GRPC_INTERNAL_ERROR_LOGGING_LOG_NON_UTF8_PROTOBUF_MESSAGES_ENABLED` environment variable is set, the internal error logs for non-utf8 strings will include snippets of the request and response messages for easier debugging purposes. Here is an example of what the logs will look like:

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

This feature is **off by default** for privacy purposes. (logging the exact request and response messages might contain PII / /other sensitive information). Sourcegraph.com is the only internal environment that we have that has `SRC_GRPC_INTERNAL_ERROR_LOGGING_LOG_NON_UTF8_PROTOBUF_MESSAGES_ENABLED` permanently enabled since it doesn't contain any private code. See [deploy-sourcegraph-cloud/grpc: enable utf-8 full protobuf message logging#17936](https://github.com/sourcegraph/deploy-sourcegraph-cloud/pull/17936) for the PR that enabled this.

###### controlling the truncation threshold for messages

When printing the debug non-uft8 messages, the message text in the log will be truncated to 1 KB (default). [You can tune this value by adjusting the `SRC_GRPC_INTERNAL_ERROR_LOGGING_LOG_NON_UTF8_PROTOBUF_MESSAGES_MAX_SIZE_BYTES` environment variable](https://github.com/sourcegraph/sourcegraph/blob/7d573eeef696d3f5422e49ad9b64584c3c972c18/internal/grpc/internalerrs/logging.go#L30).

## Enabling / disabling gRPC

gRPC is off by default for all customers.

You can enable gRPC by:

- **All non-Zoekt services**: You have two ways (https://github.com/sourcegraph/sourcegraph/blob/main/internal/grpc/grpc.go#L42 ) to enable gRPC.
  - Setting the `"experimentalFeatures.enableGRPC"` site configuration setting to "true": https://github.com/sourcegraph/sourcegraph/blob/dd478a2cc99c4ddb17bbd85cfb835b79db8cad2d/schema/site.schema.json#L360-L363
  - Setting the `"SG_FEATURE_FLAG_GRPC"` environment variable
    - Note: The environment variable takes precedence over the site configuration setting
- **Zoekt**: You can only enable gRPC by setting the `GRPC_ENABLED` environment variable to "true": https://github.com/sourcegraph/zoekt/blob/f818d968ddad0bb708b958cfb66ab08ee6ec4aa5/cmd/zoekt-sourcegraph-indexserver/main.go#L1189 .
  You can see an example of this getting set here: https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/b56c35e51191e9ebdde9c607b80b991e30d2c1ce/base/indexed-search/indexed-search.StatefulSet.yaml#L108-L109
  - Note: Zoekt does not read from Sourcegraph's site configuration, so communicating gRPC's enablement status through that mechanism wouldn't work here.

## Services currently not using gRPC

### Frontend

[frontend](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/cmd/frontend/README.md) is still in the process of being migrated to use gRPC. See the following for more information: [gRPC: migrate internal frontend APIs](https://github.com/sourcegraph/sourcegraph/issues/46525)

### zoekt-webserver

[zoekt-webserver](https://github.com/sourcegraph/sourcegraph/issues/53356) is the service that sourcegraph-frontend uses to fetch results from Zoekt (indexed-search engine). See the following for more information: [ grpc: re-enable zoekt-webserver grpc support](https://github.com/sourcegraph/sourcegraph/issues/53356)
