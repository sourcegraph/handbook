# Maintenance and handoff resources

These are resources useful to someone who needs to understand prior context or prior work done by the code insights team.

## Usage data

There's an [all-instances looker dashboard](https://sourcegraph.looker.com/dashboards/199?Unique+Server+ID=) and [its explainer video](https://drive.google.com/file/d/1Lmbw-nxTVxX1W5tVFuP73LovMWKEG0vK/view?usp=sharing), and this [instance-specific looker dashboard and its explainer video (handbook link)](go_to_market.md#individual-instance-usage-dashboards).

This amplitude dashboard which just tracks interactions on [https://sourcegraph.com/insights](https://sourcegraph.com/insights).

There is also a number of qualitative feedback points customers shared with us that answer "how are customers using code insights: what are their specific queries and use cases" in this [productboard note](https://sourcegraph.productboard.com/feature-board/1793095-code-insights/features/7752920/insights) – see the images.

### Automated data reports

It's useful to [send weekly Looker reports to Slack](https://cloud.google.com/looker/docs/scheduling-and-sending-dashboards) to keep an eye on usage data patterns and catch any data or product issues.

We recommend maintaining 1 report to the #code-insights channel that sends the [all-instances looker dashboard](https://sourcegraph.looker.com/dashboards/199?Unique+Server+ID=), and 1 report to the #code-insights-internal or other channel to send the Sourcegraph.sourcegraph.com data ([this dashboard](https://sourcegraph.looker.com/dashboards/208?Instance=Sourcegraph+%28S2%29)), as a canary report to see if any data pipelines or pings objects are broken.

## Customer calls

We use Chorus to track customer calls. Not sure what happens when a user is deleted, but currently there's a code insights [tracker](https://chorus.ai/settings/trackers) targeting `code insights`, `insights` that runs for all calls. Then, you can get emails or use the Chorus UI to review just calls mentioning code insights. This is extremely valubale, and it's worth spending even 15-20 minutes a week just hearing how demos and customer conversations are going.

TODO LOOM THIS
