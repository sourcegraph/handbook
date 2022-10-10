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
