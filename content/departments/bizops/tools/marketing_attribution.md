# Marketing Attribution Data Sources - Overview and Comparison

#### Salesforce Attribution

We utilize enhanced touchpoint tracking fields in Hubspot and Salesforce to provide clarity on each marketing campaign (e.g., demo requests, gated content form fills, free product sign-ups, etc.) and where its members were originally sourced from.

Given that each lead can participate in an unlimited number of campaigns and all of these campaign memberships are tracked, we have elected to explicitly record data on only the first and most recent touchpoints within the lead record in Salesforce.

- First Touchpoint fields hold info about the first marketing interaction a prospect has taken
  - The only time these fields should be blank is when a lead or contact has not had any interactions with marketing content (e.g., an SDR uses LeadIQ to import leads from a target account into SFDC for outreach, etc.). We leave First Touchpoint blank for these leads to account for any future marketing site interactions taken after initial sales outreach.
- Most Recent Touchpoint fields hold info about the most recent marketing interaction a prospect has taken.
  - When a lead or contact has only had one interaction with a marketing form, Most Recent Touchpoint fields will match First Touchpoint fields.
  - Given that Most Recent Touchpoint fields reset with each incremental new marketing form interaction, we currently lose access to previous enhanced touchpoint tracking data once more than two interactions take place (i.e., First Touchpoint will always remain the same but Most Recent Touchpoint will only display the latest action taken and its associated sourcing). The Data and Analytics team is in the process of determining the best way to retain this data through Fivetran, CaliberMind, and BigQuery and this note will be updated once any change is implemented.

See below for an overview of our current First and Most Recent Touchpoint types:

<table>
  <tr>
   <td><strong>First / Most Recent Touchpoint Types</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
  </tr>
  <tr>
   <td>Batch Changes Demo Request
   </td>
   <td>A prospect <a href="https://about.sourcegraph.com/contact/request-batch-changes-demo/">submitted this form</a> that is linked on this <a href="https://about.sourcegraph.com/batch-changes">landing page</a>.
   </td>
  </tr>
  <tr>
   <td> Contact/Demo Form
   </td>
   <td>A prospect submitted any form on our site related to a “Contact us” or “Request a demo”. Look at the first or most recent content field in the marketing touchpoint section to understand exactly which form submission occurred. 
   </td>
  </tr>
  <tr>
   <td>Content Download
   </td>
   <td>A prospect downloaded a piece of content. Look at the first or most recent content field in the marketing touchpoint section to understand exactly which piece of content was downloaded.
<p>
Example: <a href="https://about.sourcegraph.com/guides/continuous-developer-onboarding/">Guide to Dev Onboarding landing page</a>
   </td>
  </tr>
  <tr>
   <td>Event
   </td>
   <td>A prospect has either signed up for a webinar, attended a Sourcegraph hosted event, or interacted with us at a conference.
   </td>
  </tr>
  <tr>
   <td>Feedback Form
   </td>
   <td>A product user has given product feedback from a form within the product. Tread lightly. When this type of lead is created the product team is likely already following up with that product user. You can search using the user’s email address within the <a href="https://about.sourcegraph.com/handbook/product/surfacing_product_feedback">#feedback</a> slack channel to see the user’s specific feedback.
   </td>
  </tr>
  <tr>
   <td>Private Instance
   </td>
   <td>A prospect has installed Sourcegraph locally via docker run instructions from this <a href="https://about.sourcegraph.com/get-started/self-hosted">landing page</a>. For more information on how this person is using product, you can check out the PQL Scoring section on a lead or contact in SFDC.
   </td>
  </tr>
  <tr>
   <td>Third-Party Vendor
   </td>
   <td>A prospect was sourced to us from a third-party vendor. To see which vendor, you can look at the first/most recent source field. 
<p>
Example: SimplyDirect Survey- These prospects filled out a survey offered by SimplyDirect. SimplyDirect will send them swag and send us the prospect. These are considered hot prospects.
   </td>
  </tr>
  <tr>
   <td>Sourcegraph.com Account
   </td>
   <td>A prospect has <a href="https://about.sourcegraph.com/get-started/cloud">signed up for a sourcegraph.com cloud account</a>. For more information on how this person is using product, you can check out the PQL Scoring section on a lead or contact in SFDC.
   </td>
  </tr>
  <tr>
   <td>Website
   </td>
   <td>A prospect has reached out to support for product help. This is not a hot lead and support is likely already in conversations with this prospect.
   </td>
  </tr>
</table>

See below for the enhanced touchpoint tracking fields we collect for each of these categories:

<table>
  <tr>
   <td><strong>First Touchpoint</strong>
   </td>
   <td><strong>Most Recent Touchpoint</strong>
   </td>
   <td><strong>Definition and Example</strong>
   </td>
  </tr>
  <tr>
   <td>First Touchpoint
   </td>
   <td>Most Recent Touchpoint
   </td>
   <td>Action the prospect took.
<p>
Example: product sign-up, contact us/demo form submission, etc. 
   </td>
  </tr>
  <tr>
   <td>HS First Marketing Source
   </td>
   <td>HS Most Recent Marketing Source
   </td>
   <td>How the prospect found our site.
<p>
Example: Google, LinkedIn, organically found our website
   </td>
  </tr>
  <tr>
   <td>HS First Marketing Medium
   </td>
   <td>HS Most Recent Marketing Medium
   </td>
   <td>The medium of the source.
<p>
Example: Paid Search, Paid Social, Website
   </td>
  </tr>
  <tr>
   <td>HS First Marketing Campaign
   </td>
   <td>HS Most Recent Marketing Campaign
   </td>
   <td>Currently, this is a naming convention marketing determines for campaign tracking. 
<p>
Example: code-insights-ddg-tofu-fy23-q1
   </td>
  </tr>
  <tr>
   <td>HS First Marketing Content
   </td>
   <td>HS Most Recent Marketing Content
   </td>
   <td>The content a prospect viewed.
<p>
Example: use_case_dev_onboarding_guide
   </td>
  </tr>
  <tr>
   <td>First Touchpoint Date
   </td>
   <td>HS Most Recent Marketing Touchpoint Date
   </td>
   <td>The date of when the prospect took the associated action/touchpoint.
   </td>
  </tr>
</table>

#### CaliberMind Attribution

While the above enhanced touchpoint tracking fields give us insight into which sources drive traffic to our owned sites, Salesforce functionality limits how extensively we can attach these insights to opportunities. For example, in Salesforce, we can only attribute a new qualified opportunity to the one contact that was converted to the opp, leading us to miss out on the many other leads and contacts that often touch an account in its lifecycle. As a result, we have historically had a materially limited view into which specific traffic sources drive new pipeline and ARR.

We have implemented CaliberMind in an effort to supplement this limited Salesforce visibility. CaliberMind is a software platform that aggregates all inbound and outbound activities into one place; comprehensive data on contacts, leads, and accounts - as well as the campaigns, channels, and sources that landed, converted, or closed them - provides a comprehensive view into exactly which activities are best performing at generating and closing new deals. If you do not currently have access to CaliberMind but would like to request it, please reach out in the #wg-attribution channel in Slack and someone on the team with follow up with you.

Key terms and concepts are defined below:

<table>
  <tr>
   <td><strong>Term</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
   <td><strong>Example</strong>
   </td>
   <td><strong>Where to find it in CaliberMind</strong>
   </td>
  </tr>
  <tr>
   <td>Attribution
   </td>
   <td>Quantifying marketing’s contribution to sales from specific campaigns or initiatives. Attribution is only designated when an inbound touch is associated to an opportunity with revenue potential assigned.
<p>
Attribution = Sourced + Influenced
   </td>
   <td>If an opportunity had $1M of touches prior to the opportunity creation (i.e., sourced) and $200k of touches after the opportunity was created (i.e., influenced), attribution assigned will be $1.2M.
   </td>
   <td>This can be found throughout the platform. You can see overall attribution on the Attribution Overview tab within CM and attribution by opportunity by clicking into a specific company and scrolling down to the Opportunities section of that page.
   </td>
  </tr>
  <tr>
   <td>Sourced
   </td>
   <td>Marketing attribution for touches occurring <em><span style="text-decoration:underline;">prior to</span></em> Opportunity creation (i.e., beginning at the point of lead creation, ending at the point of opp creation). 
<p>
For source attribution, campaign membership start must be within 365 days of opp creation date.
   </td>
   <td>If a webinar registrant watches a Sourcegraph webinar and then has a sales demo leading to a new opportunity–the Webinar Campaign and the sales demo request were each one of the sourcing touches on the opportunity.
   </td>
   <td>Revenue amount (realized and potential) sourced for all opportunities can be found in the Attribution Overview dashboard.
   </td>
  </tr>
  <tr>
   <td>Influenced
   </td>
   <td>Marketing attribution for touches occurring <span style="text-decoration:underline;">after</span> Opportunity creation.
<p>
For influence attribution, interaction needs to happen between when the opp was created and when it was closed. 
   </td>
   <td>If a sales demo occurs and then an opp is created and a lead on the same account proceeds to find an ebook on LinkedIn via a promoted post -- the eBook would have influenced the
<p>
opportunity, but not sourced it.
   </td>
   <td>Revenue amount (realized and potential) influenced for all opportunities can be found in the Attribution Overview dashboard.
   </td>
  </tr>
  <tr>
   <td>Effectiveness
   </td>
   <td>Effectiveness formula = # of accounts with touches having attribution ÷ # of accounts with touches (i.e., what % of a particular campaign’s touches are actually resulting in opportunity creation). 
   </td>
   <td>If a campaign sourced or influenced companies tied to 3 out of 11 touches, but 2 of the touches were from the same company, the campaign would have an effectiveness score of 30%.
   </td>
   <td>This data can be found for each specific campaign in the Attribution Overview dashboard, within the Campaign Performance table.
   </td>
  </tr>
</table>

<strong>CaliberMind Data</strong>

Currently, we do not have access to CaliberMind data directly in our BigQuery database. Instead, CaliberMind users can access Sourcegraph's instance of CaliberMind data in BigQuery [here](https://my.calibermind.com/settings/account/dw) and [here](https://console.cloud.google.com/bigquery?project=sourcegraph-ad8e). CaliberMind fields and their definitions can be found [here](https://docs.google.com/spreadsheets/d/1uDl-BSPXCWh118GnhjiS7POsDPO_zi6X40f6LdTWS_Y/edit#gid=2034580537). If you do not have access to any of these links, please reach out to #wg-attribution in Slack. Once accessed, this data can be transferred first into Google Sheets and later into Looker for more extensive analysis and manipulation.
