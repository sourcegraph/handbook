## Architecture

### Product and Sales

![image](https://storage.googleapis.com/sourcegraph-assets/handbook/BizOps/Data_architecture_20220422)

Visit the [live Miro board](https://miro.com/app/board/uXjVO8CCnZU=/) for links.

## Data Sources

This diagram provides a high-level overview of the data sources we have:
![image](https://user-images.githubusercontent.com/16265452/122541307-11d9ff00-d05c-11eb-8799-646daeb6868a.png)

### Pings

Pings are aggregated event telemetry we receive from on-prem and cloud instances.

- [List of pings](https://docs.sourcegraph.com/admin/pings)
- [Adding, changing and debugging pings](https://docs.sourcegraph.com/dev/background-information/adding_ping_data)

### User Events

User events are event telemetry that we receive from cloud instanecs.

- [Event level data usage pipeline](https://docs.sourcegraph.com/dev/background-information/data-usage-pipeline)
- [Adding, changing and debugging user event data](https://docs.sourcegraph.com/dev/background-information/adding_event_level_data)

For more info on our data stack tools, see the [tools page](tools.md).

### Transcript Events from DotCom Users

For DotCom users we are permitted to store transcript data. To ensure safe handling of this sensitive data and restricting access. The following event pipeline has been built on top of the telemetry-v2 archetiture; and routes flagged transcript events seperately.

#### Considerations:

1. Transcript data can only be collected through v2 telemetry and stored within `privateMetadata` argument of the event
2. Transcript data should be stored as top-level fields within `privateMetadata`, using the keys `promptText` or `responseText`
3. Transcript data can only be collected for DotCom (Free) Users
4. Transcript data must include `recordsPrivateMetadataTranscript:1` in the `metadata` argument of the event

#### Internal-only links to where the backend GCP changes live:

##### Pub/Sub Topic Subscriptions

- [event-telemtry-transcript-to-gcs](https://console.cloud.google.com/cloudpubsub/subscription/detail/event-telemetry-transcript-to-gcs?project=telligentsourcegraph)
- [event-telemtry-sub-v2 for non transcript events](https://console.cloud.google.com/cloudpubsub/subscription/detail/event-telemetry-sub-v2?project=telligentsourcegraph)
- [event-telemtry-transcript-to-bq](https://console.cloud.google.com/cloudpubsub/subscription/detail/event-telemetry-transcript-to-bq?project=telligentsourcegraph)

##### DataFlow

- [DataFlow Job](<https://console.cloud.google.com/dataflow/jobs/us-central1/2024-01-18_11_35_42-11241333749608313305;graphView=0?project=telligentsourcegraph&pageState=(%22dfTime%22:(%22l%22:%22dfJobMaxTime%22))>) that runs on the topic subscription event-telemtry-transcript-to-bq to redact transcripts (responseText, PromptText)
- [DataFlow UDF](https://console.cloud.google.com/storage/browser/_details/sg-telemetry-v2-udf/udf/transcriptUDF.js;tab=live_object?project=telligentsourcegraph) that the DataFlow Job references (custom javascript function we can run on each event)

Below is a system diagram to illustrate the flow of transcript data further:
![image](https://storage.googleapis.com/sourcegraph-assets/handbook/BizOps/transcript-event-telemetry-pipeline.png)
