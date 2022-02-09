# Metrics

## In product metrics

The locations and interaction moments where events will be collected for use in Sourcegraph's product analytics tools often must be defined within design artifacts.

To define a metric, designers should use a [metric card](https://www.figma.com/file/8qNcDzOXLj1hcOM76WDPN9/%F0%9F%9B%A0Project-Tools?node-id=2597%3A6172) from the project tools library. These cards help standardize the names and description of metrics across the product.

Follow the [guidelines for naming events](../../../../bizops/tools/amplitude.md#adding-events-to-amplitude) when defining an event.

- If a large number of events are being collected, consider creating a Metrics page in Figma ([example](https://www.figma.com/file/LfQUGTLvfYWxyuFoyQsptB/?node-id=251%3A7408)) to identify the locations and interactions where events will be collected.
- Metrics review: consider requesting a review of your metrics definitions from the analytics team before the project goes to development.

## Tracking events across domains or products

Often we need to understand how our designs perform when they send traffic to Sourcegraph websites outside of the product we are working on. When these events occur and they end in a visit to a publicly facing Sourcegraph website, we can use Google Analytics [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) to track the source of the event.

Examples of scenarios you may need to track:

- Sign-up links from an IDE extension to Sourcegraph.com
- Links from Sourcegraph.com to a lead generation form on about.sourcegraph.com
- Links from Server to Sourcegraph.com

Examples of events you cannot track with UTM parameters:

- Links from an IDE extension to a Server installation of Sourcegraph (use Pings to track this)
- Links from Sourcegraph.com to external properties like Youtube videos (use event logs to track the outbound click)

How Sourcegraph uses UTM parameters:

- utm_campaign={STRING} A string describing a series of content you are using to promote the link
- utm_medium={STRING} Typically 'in-product', potentially with a product designator, such as in-product-vscide
- utm_source={STRING} Which property sent the traffic. E.g. Sourcegraph.com, VSCIDE, etc.
- utm_content={STRING} A descriptor for the content used in the link

UTM parameters work on the following websites:

- docs.sourcegraph.com
- about.sourcegraph.com
- sourcegraph.com
- learn.sourcegraph.com

To develop reporting for these links, log into Google Analytics and use the [Campaigns > All campaigns](https://analytics.google.com/analytics/web/?utm_source=GA_Monthly_Snapshot&utm_medium=email&utm_campaign=GA_Monthly_Snapshot_January&utm_content=See_My_Full_Report#/report/trafficsources-campaigns/a40540747w150533180p155508056/_u.date00=20220129&_u.date01=20220207/) feature of the application.
