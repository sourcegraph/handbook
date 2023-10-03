# Cloud launch process

> [!NOTE] go/cloud-launch is the canonical link to this page

Starting with Sourcegraph 4.0, we're asking authors of non-trivial features launched on Sourcegraph Cloud to fill-out a [questionnaire](#questionnaire) providing Cloud team with information about:

- infrastructure / resource allocation changes that need to be made by the Cloud team
- privacy / security / legal / cost implications of enabling the feature for a specific customer
- planned launch timeline
- troubleshooting and escalation steps

## Non-trivial feature

For the purpose of this process, a non-trivial feature is a code / infrastructure change that fulfills one of the criteria below:

- Introduces a new component to be deployed as a container / Cloud service
- Requires changes of credentials / permissions / resources provisioned for existing workloads
- Changes Sourcegraph UI / API in a way that requires a configuration (experiment flag / environment variable / site config) change

## Rationale

Two main goals of introducing this process are:

- make sure feature authors & Cloud team understand the scope of features being launched and can work together to make the feature available on time
- provide Cloud team (as default on-call responders) with sufficient context about new functionality available on cloud

Non-goals:

- adding process where it provides no value - most "features" do not require a questionnaire and can follow standard Sourcegraph launch process
- Cloud team becoming a gatekeeper of launches

Further discussion in [RFC 739](https://docs.google.com/document/d/1Pe1n8VHfDvpYJZm2CVOfokW49EhqyfI6cueVOMDFkJI/edit#heading=h.aai9y6ehm647).

## Questionnaire

Please use [this as a template](https://docs.google.com/document/d/1oE2PJSdgqcX3ZRApWXwabgDtzFK4-0PZ3js5PTxsavw/edit).

If you think it should be improved make suggestions in the doc, if you have questions, please let us know in #ask-cloud.

## How does it work?

- Copy and complete the [questionnaire](#questionnaire)
- Create a [GitHub Issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,cloud/feature-launch&projects=&template=cloud-feature-launch.yml&title=Cloud+feature+launch:+%5BFEATURE+NAME+NAME%5D)
- Please drop the link in #discuss-cloud-ops and tag @cloud-team

Please do reach out if you have any question even before start working on the questionnaire in #discuss-cloud-ops, we are happy to chat.

### Past launches

- Launched [Server-side Batch Changes](https://docs.google.com/document/d/1P_dqAS2YEe_NDqf0x8W74sHhy3nYXKOhdqId5uAdirI/edit)
- Launched gRPC go/grpc-cloud-launch
- To be launched Search Jobs go/cloud-launch-search-jobs
- ~To be launched [RockSkip](https://docs.google.com/document/d/1k6P71TJTerfkg72Vwz99JUM685wnRI-BKED6YbUGOY8/edit)~
