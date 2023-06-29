# gRPC

## Introduction

This document provides an overview and documentation for Sourcegraph-Specific gRPC usage, including information about gRPC services, monitoring, common issues, and additional resources. The purpose of this document is to assist developers in understanding and working with gRPC.

## Table of Contents

1. [gRPC Services](#grpc-services)
2. [Monitoring](#monitoring)
3. [Common Issues](#common-issues)
4. [Additional Resources](#additional-resources)

## gRPC Services

### Gitserver

[gitserver](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/cmd/gitserver/README.md) has been migrated to use gRPC. The see the following for more information: [gRPC: migrate gitserver](https://github.com/sourcegraph/sourcegraph/issues/46522)

### Frontend

[frontend](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/cmd/frontend/README.md) is still in progress of being migrated to use gRPC yet. The see the following for more information: [gRPC: migrate internal frontend APIs](https://github.com/sourcegraph/sourcegraph/issues/46525)

## Monitoring

to view the gRPC metrics, go to the built-in Grafana dashboard. The goal of these metrics is to identify specific types of errors that we are aware of, which originate from the grpc/protobuf libraries we employ. Such errors often hint at potential configuration issues or bugs related to our grpc-specific application logic. By implementing these additions, we aim to gain better insights into these errors and investigate any necessary adjustments or fixes.

example dashboard:

[gitserver](https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1) for example. Within that dashboard, there are two sections with panels for gRPC metrics called `GRPC server metrics` and `GRPC "interanl errors" metrics`.

There is also a filter to only view metrics for a specific rpc method at the top of the datchboard. e.g. https://sourcegraph.com/-/debug/grafana/d/gitserver/git-server?orgId=1&var-alert_level=All&var-shard=All&var-method=Archive

## Known Issues

### gRPC 4mb message size limit

gRPC has a default message size limit of 4mb. You may encounter the following error if the payload is larger than the allowed message size:

[ gitserver-0] ERROR gitserver.gRPC.internal.error.reporter.streamingMethod.postMessageReceive internalerrs/logging.go:226 grpc: received message larger than max (1073741881 vs. 4194304) {"grpcService": "gitserver.v1.GitserverService", "grpcMethod": "Search", "grpcCode": "ResourceExhausted"}
[ frontend] ERROR gitserver.client.gRPC.internal.error.reporter.streamingMethod.postMessageReceive internalerrs/logging.go:226 grpc: received message larger than max (1073741891 vs. 4194304) {"grpcService": "gitserver.v1.GitserverService", "grpcMethod": "Search", "grpcCode": "ResourceExhausted"}

This can be changed by setting the `SRC_GRPC_CLIENT_MAX_MESSAGE_SIZE` environment variable.
