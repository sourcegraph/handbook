# Telemetry Gateway

The Telemetry Gateway service is the service that ingests [telemetry v2 events](https://sourcegraph.com/doc/dev/background-information/telemetry) from all Sourcegraph instances, and is available at `telemetry-gateway.sourcegraph.com`.

- As of 5.2.0, [certain flags can be configured](https://docs.sourcegraph.com/dev/background-information/telemetry#enabling-telemetry-export) to export events that have been instrumented with the new APIs to Telemetry Gateway.
- For Sourcegraph instances that prior to 5.2.0, no events are exported.
  A [custom mechanism did exist for exporting events specifically from Cloud instances](https://docs.sourcegraph.com/dev/background-information/data-usage-pipeline) based on individual service agreements with customers - the new telemetry events will supersede this mechanism.

For discussion around telemetry V2 adoption, please reach out to #wg-v2-telemetry.
For discussion around the Telemetry Gateway service, please reach out to #discuss-core-services.

## Service images

Source code for Telemetry Gateway service is in [sourcegraph/sourcegraph/cmd/telemetry-gateway](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/telemetry-gateway).
The image gets built the same way as any other Sourcegraph service, i.e. with `insiders`, the standard `main`-branch and `main-dry-run` tags.

## Local development

For local development, please refer to its [How to set up Telemetry Gateway locally](https://docs.sourcegraph.com/dev/how-to/telemetry_gateway).

## Operations

Refer to [Telemetry Gateway infrastructure (go/msp-ops/telemetry-gateway)](../../../managed-services/telemetry-gateway.md).
