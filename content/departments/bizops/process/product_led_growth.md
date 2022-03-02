# Product-led growth at Sourcegraph

## What is product-led growth (PLG)?

Product-led growth (PLG) is an end user-focused growth model that relies on the product itself as the primary driver of customer acquisition, conversion, and expansion.

You’ve likely been a part of many companies’ PLG strategy. This is most evident if you’ve used the free tier and then later paid for any of the following products:

- Figma
- Slack
- Dropbox
- Twilio
- Datadog
- Airtable

## How does product-led growth fit in with our focus on revenue?

With MAUs being removed as a top-level goal, nothing changes for product-led growth at Sourcegraph in the long run. We still need to build the PLG flywheel, but instead of focusing on generating the highest number of users possible we will now:

- Shift focus towards high quality users (those who are likely to convert to revenue)
- Improve our design and messaging towards properly educating users on the problems Sourcegraph solves and the value it provides to them (orient around use cases), and guide them to the deployment option that is right for them
- Continue to build out virality and monetization capabilities (Cloud SaaS team)
- Continue to improve on the complete user experience through product enhancements, onboarding, email marketing, etc on both self-hosted and cloud

## The Flywheel

![PLG flywheel ideal state](https://storage.googleapis.com/sourcegraph-assets/handbook/product-led%20growth/plg-flywheel-ideal-state.png)

To see how individual teams fit into the flywheel, please see [the full deck](https://docs.google.com/presentation/d/1q2LFxTnhneHWJitNXm57R06xhyP3bIqES0gaCQeZG24/edit#slide=id.gf5663c214b_0_17).

## The Flywheel roadmap

### Current state

![PLG flywheel current state](https://storage.googleapis.com/sourcegraph-assets/handbook/product-led%20growth/plg-flywheel-current-state.png)

### FY22 Q4

![PLG flywheel FY22 Q4](https://storage.googleapis.com/sourcegraph-assets/handbook/product-led%20growth/plg-flywheel-fy22q4.png)

### FY23 Q1

![PLG flywheel FY23 Q1](https://storage.googleapis.com/sourcegraph-assets/handbook/product-led%20growth/plg-flywheel-fy23q1.png)

# Lead Scoring at Sourcegraph

Lead scoring is a framework we have put in place across HubSpot and Salesforce to enable sales and marketing to identify which inbound prospects are potentially most valuable to the company. Through lead scoring, all inbound prospects are assigned point values corresponding to each online interaction they have with Sourcegraph (either through marketing-owned forms or our free product offering). Once a prospect surpasses a certain point threshold, they receive a lead scoring designation that signals high intent and/or engagement to sales. This designation is designed to enable sales reps to quickly and efficiently filter through top of funnel noise in order to focus their time and attention on only those inbound prospects with a high likelihood to purchase. If you have any questions or feedback on anything pertaining to lead scoring, please post them in the #lead-lifecycle channel in Slack.

Sourcegraph’s current two-pronged approach to lead scoring separately measures intent and product engagement and is described in further detail below.

## Marketing Qualified Lead (MQL)

A visitor’s interactions with our marketing content represent the foundation of our top of funnel inbound lead generation capabilities. The quantitative ranking of these behaviors by their indication of potential intent to purchase through a Marketing Qualified Lead (MQL) score enables inbound SDRs to efficiently manage and prioritize leads according to Marketing’s viewpoint on which measures of intent correlate with a higher conversion to a Sales Accepted Opportunity (SAO).

In most mature organizations, typically only those inbound leads formally meeting the intent score threshold to be classified as MQLs are handed over to SDRs to work. While we do think the amount of leads coming in through marketing content will eventually warrant this automatic gating, we are not proposing this limitation at this stage of our demand generation engine. As a result, we propose the following intent / MQL scoring system to aid in lead prioritization for inbound SDRs:

<table>
  <tr>
   <td><strong>Action</strong>
   </td>
   <td><strong>Incremental lead score points</strong>
   </td>
  </tr>
  <tr>
   <td>Form submission (any other than demo request, pricing inquiry, or feedback - includes product sign-up or install)
   </td>
   <td>10 points
   </td>
  </tr>
  <tr>
   <td>Demo request
   </td>
   <td>15 points
   </td>
  </tr>
  <tr>
   <td>Pricing inquiry (i.e., contact sales)
   </td>
   <td>15 points
   </td>
  </tr>
  <tr>
    <td>In-product trial request 
   </td>
   <td>15 points
   </td>
  </tr>
  <tr>
   <td>Private Install or Sourcegraph.com Sign up
   </td>
   <td>10 points
   </td>
  </tr>
  <tr>
   <td>Target account match  
   </td>
   <td>5 points
   </td>
  </tr>
  <tr>
   <td>Target title match
   </td>
   <td>5 points
   </td>
  </tr>
  <tr>  
    <td>Page view (pricing, use cases, case studies)
   </td>
   <td>5 points
   </td>
  </tr>
  <tr>
   <td>Page view (any other than pricing, use cases, case studies)
   </td>
   <td>1 point per view
   </td>
  </tr>
  <tr>
   <td><strong>MQL Classification</strong>
   </td>
   <td><strong>15+ points</strong>
   </td>
  </tr>
</table>

Where does MQL data live within Salesforce (relevant to leads and contacts only):

- Lead lifecycle stage: this field will have a value of "MQL" if a lead or contact has reached the 15+ MQL point accrual threshold descibed above; this value is not static and will change depending on the SDRs subsequent interactions with the prospect
- MQL date: this field displays the date at which a lead or contact reached the 15+ MQL point accrual threshold descibed above; this field will be blank if the prospect has not completed enough actions to receive MQL designation

Where / how do we track MQLs at Sourcegraph:

- Demand Gen / Marketing: tracks new MQLs generated over time across multiple dashboards
- [BizOps](https://docs.google.com/spreadsheets/d/1iV2xWABopIXRQPBw8MCeDR-HGSHneyVKHb8s07BXTUw/edit#gid=0): tracks new MQLs generated over time as well as qualified opportunity conversion rates by First Touchpoint

## Product Qualified Lead (PQL)

A product qualified lead (PQL) is a prospect who has used the product and completed pre-defined actions that signify strong engagement and resonance with our core value proposition. This will be a separate grade solely ascribed to leads that sign up for a cloud account or install a private instance. The goal of this score is to act as a relative indicator of active use / engagement for our non-paying users post-sign up, which looks very different from how we evaluate this for current enterprise customers.

Our product engagement scoring inputs, which we view as different between cloud accounts and private installs, can be found below:

### Cloud Account

<table>
  <tr>
   <td><strong>Actions completed</strong>
   </td>
   <td><strong>Product engagement grade</strong>
   </td>
   <td><strong>User classification</strong>
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Completion of ≥1 search

<li>≥5 return visits completed (# of days active)

<li>Code host added

<li>Private code added via repo
</li>
</ol>
   </td>
   <td>A
   </td>
   <td>Very active
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Completion of ≥1 search

<li>≥2 return visits completed (# of days active)

<li>Private code <em>OR</em> public code added via repo
</li>
</ol>
   </td>
   <td>B
   </td>
   <td>Moderately active
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Completion of ≥1 search
</li>
</ol>
   </td>
   <td>C
   </td>
   <td>Minimally active
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Account sign-up with no subsequent interactions
</li>
</ol>
   </td>
   <td>D
   </td>
   <td>Inactive post sign-up / install
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>No account sign-up or installation
</li>
</ol>
   </td>
   <td>N/A
   </td>
   <td>Not applicable
   </td>
  </tr>
  <tr>
   <td>
    <strong>PQL Classification</strong>
   </td>
   <td><strong>A or B</strong>
   </td>
   <td>
   </td>
  </tr>
</table>

**Private Install**

<table>
  <tr>
   <td><strong>Actions completed</strong>
   </td>
   <td><strong>Product engagement grade</strong>
   </td>
   <td><strong>User classification</strong>
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Addition of ≥1 code host

<li>Addition of ≥1 repo

<li>Completion of ≥1 search

<li>≥2 return visits completed (# of days active)
</li>
</ol>
   </td>
   <td>A
   </td>
   <td>Very active
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Addition of ≥1 code host OR ≥1 repo

<li>Completion of ≥1 search
</li>
</ol>
   </td>
   <td>B
   </td>
   <td>Moderately active
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>Private installation with no subsequent interactions
</li>
</ol>
   </td>
   <td>C
   </td>
   <td>Inactive post sign-up / install
   </td>
  </tr>
  <tr>
   <td>
<ol>

<li>No account sign-up or installation
</li>
</ol>
   </td>
   <td>N/A
   </td>
   <td>Not applicable
   </td>
  </tr>
  <tr>
   <td>
    <strong>PQL Classification</strong>
   </td>
   <td><strong>A or B</strong>
   </td>
   <td>
   </td>
  </tr>
</table>

**Note**: There will be users that actively engage with our product through both a Cloud account and a private install. To account for this, we will build three distinct workflows in Hubspot: one to evaluate engagements within Cloud, another to evaluate usage in a private install, and another to ultimately assign a product engagement grade based upon the higher of the aforementioned two scores.

Where does PQL data live within Salesforce (relevant to leads and contacts only):

- Lead lifecycle stage: this field will have a value of "PQL" once a lead or contact completes enough actions to meet the A or B PQL thresholds descibed above; this value is not static and will change depending on the SDRs subsequent interactions with the prospect
- PQL date: this field displays the date at which a lead or contact completes enough in-product actions to meet the A or B PQL thresholds descibed above; this field will be blank if the prospect has not completed enough actions to receive a PQL designation

Where / how do we track PQLs at Sourcegraph:

- [Product / Eng](https://sourcegraph.looker.com/dashboards/217): tracks new PQLs generated over time as part of their org KPIs
- [BizOps](https://docs.google.com/spreadsheets/d/1iV2xWABopIXRQPBw8MCeDR-HGSHneyVKHb8s07BXTUw/edit#gid=0): tracks new PQLs generated over time as well as qualified opportunity conversion rates

How do we track changes to PQL scoring over time:

PQL scoring is not static. BizOps conducts regular analysis to evaluate whether we have the right scoring criteria in place to inform better outreach to those users seeing the most value from our product. While the PQL scoring workflow ultimately lives in HubSpot, we track all relevant changes [here](https://docs.google.com/spreadsheets/d/1cK1EHd1nt6XvVbP52Vh_d4CYKd9oPlejKqSSfS7QyRQ/edit#gid=0).

## Additional PLG resources

### Internal resources

Growth:

- [Product-Led Growth for Cloud](https://docs.google.com/document/u/0/d/1dAqjVUV8p6I-T1epDdUjNzOsFocFg9ZJVik941ISvGw/edit)
- [If we had a growth team one pager](https://docs.google.com/document/u/0/d/1lz0qBKs753Ytt9SHl17EM0CK_VUnVMAcSZMDef5Tl00/edit)

Cloud SaaS:

- [Sourcegraph SaaS Vision](https://docs.google.com/presentation/u/0/d/1c5ByMM9dLZZF0oi6i9Hnshvo8S4xbHIqLCUOP9tjQyc/edit)

Growth and Integrations:

- [Growth and Integrations Team - Cloud Org](https://docs.google.com/document/u/0/d/16pZ2QIRW2rvYVtyxuqWR91DTgReIdrOAAa_bX5q9kR8/edit)

### External resources

- [productled.org - the flywheel](https://www.productled.org/foundations/the-product-led-growth-flywheel#Chap4)
- [OpenView partners PLG overview](https://openviewpartners.com/product-led-growth/#.YV8dU12SkTX)
