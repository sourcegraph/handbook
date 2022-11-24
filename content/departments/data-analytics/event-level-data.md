# Event-level data

Understanding how individuals and organizations use Sourcegraph is key to our future growth and success. By expanding and improving the product usage data we collect, we can provide the highest level of support to our customers.

This will also help teams:

- Gain deeper customer and user insights.
- Drive customer value.
- Predict user outcomes.
- Tell the Sourcegraph story.

Our current data collection (pings) provides us with some high level insight into how our customers are using Sourcegraph, but it doesn’t allow us to find usage patterns or truly understand product and feature adoption due to the limited nature of the data pings sends back to Sourcegraph. Further, we depend on our customers' upgrade schedule in order to collect new or updated pings, oftentimes the time to insight is very long.

The new data will introduce event-level aggregation of customer data by sending customer event_logs back to Sourcegraph. This data will allow us to answer questions like:

- How many regex searches and literal searches did user X conduct this month?
- How many users are considered power users?
- How many users use multiple features in a session?
- Is there a point in time we should intervene with enablement or communication to ensure customer happiness?
- What feature or set of features are stickiest?

This data will meaningfully help each department do their job more effectively, not just product managers and designers. More information about this decision and the value to each role can be found [here](https://docs.google.com/document/d/10xyTkaxPvhCIXWyAzkvMkY_JNPJwSnPd2U_rTnrzqOQ/edit).

## What data have we historically collected?

We currently collect aggregated and anonymized usage data (called [pings](https://docs.sourcegraph.com/admin/pings#pings)). These data points, like version, code host, active users, are necessary for Sourcegraph to support our customers’ use of our product. Right now, we are in a position where we are collecting only some of the data we need. It’s important for us to collect critical telemetry and the event stream data (further discussed below) in order to provide the highest level of support to our customers.

## What data are we starting to collect as a part of this initiative?

In order to really get into helpful insights, we need to go a level deeper from our aggregated data to the event stream. The event stream is data that is collected at the time the user does something in the product. That means, what did they do, when did they do it, what was the outcome. Examples of events data that we will collect:

- goToDefinition
- SearchSubmitted
- SearchNotebookPageViewed

We will continue to add event tracking as we release new features and expand the insights we want to capture.

## Are we collecting data from both managed instances and on-prem customers?

Because managed instances are our preferred deployment method, we will be only collecting data from managed instances first. We will assess this decision in the future and may decide to collect data from our on-prem customers.

## When can we enable the collection on a managed instance?

One or more of the following must be true to enable event-level data collection:

- The lead requested a trial through [signup.sourcegraph.com](https://signup.sourcegraph.com/) and therefore agreeing to our [Cloud Terms of Service](https://about.sourcegraph.com/terms/cloud)
- An existing customer signs an order form with an updated Cloud ToS--provided no redlines or carveouts that remove event-level collection rights
- A new customer signs a new contract with the updated Cloud ToS--provided no redlines or carveouts that remove event-level collection rights
- A CE-led trial on a managed instance is initiated through a workflow (TBD - CE is owning a new page that they'll direct prospects to with the Cloud ToS))

The `User Level Event Usage Data Analytics` field in account object in Salesforce should be set to `Yes` if the opportunity allows this. A report of all accounts set to `Yes` is [here](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b0000051EOrEAM/view).

## What data will we not collect?

According to our data classification policy, we will not collect:

- Restricted data (ex: private code, account passwords)
- Private data (ex: personal data beyond a randomized user id, production secrets, other customer non-personal data)
- Any personal information (user’s name, address, email, etc.) of a user beyond a randomized user id.
- Any other confidential data or intellectual property which includes but not limited to code, passwords.

## What is the benefit to the customer?

Because Sourcegraph will know more about how users are interacting with our platform, we can be a better partner to our customers.

We will be able to offer the highest level of support to our customers through:

- Support teams will be able to better troubleshoot/answer questions that arise specific to a customer
- CEs can have data driven conversations around customer and user value - adoption, feature usage, power users
- Admins will benefit by having a better experience with more insight and analytics to help them configure and optimize Sourcegraph, onboard new users/teams, and roll out new features

## What is the benefit to Sourcegraph?

Everyone at Sourcegraph will benefit from having better insight into how our users are interacting with Sourcegraph. Here are some examples:

- Product managers will be able to use this data to look at behaviors on the platform, use data for roadmap prioritization, and increase velocity in the product lifecycle.
- Customer facing teams will be able to drive customer value and adoption with their customers, troubleshoot support issues and inquiries quicker, and use better data in expansion conversations.
- Marketing can use insights for storytelling to better connect with developers and raise awareness about our product.
- Operation teams will be able to use more granular data in their planning processes

## Can customers opt out?

Yes, the customer will be able to send us user level event data, critical telemetry only (aggregated and anonymized data), or completely turn off sending any data (air gapped). This opt out is at the instance level and will be available to the admin by contacting us. More documentation to come on how to do this.

## Who has access to the data?

The raw data will be owned by the Data & Analytics Team and accessible by a subset of internal employees only. Access will be granted by role and on a case by case basis. Aggregated and normalized data will be available in our reporting tools for ad hoc analysis and standard reporting — currently Amplitude and Looker.

## How is the data stored/protected?

Data will be encrypted while in motion from each managed instance to Sourcegraph. Refer to [this RFC](https://docs.google.com/document/d/1N9aO0uTlvwXI7FzdPjIUCn_d1tRkJUfsc0urWigRf6s/edit#) for the most up to date architecture.
