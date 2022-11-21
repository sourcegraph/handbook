# Demo Instances

Currently (as of March 2021) we have 3 different Sourcegraph instances that we use to demo the product to prospects and customers. The team should default to demoing on demo.sourcegraph.com, as Monitoring, Batch Changes, Search, and Insights are all available there. Demoing on sourcegraph.com should be avoided unless absolutely necessary; it can undergo maintenance during a demo period and trigger an alert that looks bad to the prospect.

| Instance             | Owner                                                                                                             | Feature Set                              | When to use                                    |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| sourcegraph.com      | n/a                                                                                                               | search, intel, monitoring                | General Demos (avoid unless necessary)         |
| demo.sourcegraph.com | [DevOps team (eng)](../../../engineering/teams/devops/index.md) for instance admin; [CE](../index.md) for content | search, intel, batch changes, monitoring | General Demos, Batch Changes demos             |
| k8s.sgdev.org        | [DevOps team (eng)](../../../engineering/teams/devops/index.md)                                                   | search, intel, insights                  | Advanced/experimental features, do not modify. |

## Demo Instance Language Examples

| Language   | LSIF Enabled | Example Repo                                                                                | Demo 101 Flow                  | Repo Setup |
| ---------- | ------------ | ------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| Go         | Yes          | [Sourcegraph](https://demo.sourcegraph.com/github.com/sourcegraph/sourcegraph)              | [TBD](https://sourcegraph.com) |            |
| Python     | No           | [Flask](https://demo.sourcegraph.com/github.com/mcmillennick/flask)                         | [TBD](https://sourcegraph.com) |            |
| TypeScript | Yes          | [Incubator eCharts](https://demo.sourcegraph.com/github.com/mcmillennick/incubator-echarts) | [TBD](https://sourcegraph.com) |            |

- **Language**: The name of the language
- **LSIF Enabled**: Whether or not the repo has LSIF data uploaded for [Precise Code Intelligence](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence).
- **Example Repo**: Link to the example repo.
- **Demo 101 Flow**: Link to the associated demo flow for the language.
- **Repo Setup**: Link to a guide on setting up a repo on this instance.

## Future Plans:

We will get demo.sourcegraph.com up to full feature parity with the other instances in order to allow CEs to use that sole instance for all product demos.

The next step is to get example repos for each of the demos and demo flows written for each one. WIP demo repo instructions [here](../process/demo-repo-contribution.md).
