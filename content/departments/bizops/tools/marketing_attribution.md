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
