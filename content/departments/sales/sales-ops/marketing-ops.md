# Marketing Operations

The Marketing team maintains marketing operations tools and processes at Sourcegraph. The team is focused on the mechanics of how we find and track our end users and customers. Please direct all questions and requests to #discuss-marketing and/or hubspot-revops-sourcegraph.

## MarTech Stack

Our most important MarTech tools are as follows:

- **Salesforce -** Hubspot passes lead and marketing touchpoint data over to Salesforce so that sales can follow up on individuals interested in Sourcegraph.
- **HubSpot -** Marketing automation tool used to run email marketing campaigns, track prospect engagement, and connect tools to our martech stack.
- - **Utm.io -** This tool is a way for us to standardize how we build, share, and sync our UTMs/URLs for marketing touchpoint tracking across our teams. By being on the same page with how we build our URLs, we're able to capture where visitors are converting across our different digital platforms. If you are interested in learning more, you can check out this [demo video](https://www.loom.com/share/cb85b29198644100ac697437931beac8).
- **Postal.io -** This account-based marketing tool is how we send gifts and mailings out to prospects. The integration with Hubspot allows us to automate email messaging workflows before or after gifts are sent or received. Today, we are not running any automated email messaging via this integration.
- **Triblio -** This account-based marketing tool is how we target specific accounts for digital advertising. The integration with Hubspot allows us to create target lists within Hubspot and share them with Triblio.
- **Typeform -** This marketing tool is how we create forms, surveys, and quizzes for our prospects. The integration with Hubspot allows us to send prospect answers and data into fields in Hubspot. Setting up this data flow lets us capture important information about our prospects, increase their intent scores based on responses, and surface important prospect responses to Sales when appropriate. As long as your Typeform asks for a person's email address, we can send responses to Hubspot. Reach out to us if you are interested in integrating forms, surveys, or quizzes with Hubspot.
- **Orbit -** This marketing tool is how we understand our community's interactions with Sourcegraph. The integration with Hubspot allows us to create user activities in Orbit when community members take specific actions. Today, anytime someone submits their information on our [Dev Tool Time page](https://info.sourcegraph.com/dev-tool-time), an activity is created for that person in Orbit.
- **Demio -** This is webinar platform that will help marketing run webinar programs to drive MQLs and PQLs and increase product awareness.

## UTM Tracking

### Overview

Sourcegraph uses UTM parameters to understand the source of online traffic to our various sites and products. This data is useful for understanding which sources are best at driving traffic / awareness and informs our marketing investment strategy. Examples of content that should include UTM parameters include links to our product in a LinkedIn feed post, and a Google paid search ad linking to our homepage, among others. All external links to Sourcegraph web properties should include UTM parameters for source and medium. Other possible parameters to include are campaign, content, and term. See definitions for these parameters below:

- **UTM Source -** Identifies which site sent the traffic (e.g., Google, Reddit, etc.)
- **UTM Medium -** Identifies what type of link was used, such as cost per click or email
- **UTM Campaign -** Identifies a specific product promotion or strategic campaign (note that this is distinct from a Salesforce campaign)
- **UTM Content -** Identifies what specifically was clicked to bring the user to the site, such as a banner ad or a text link
- **UTM Term -** Identifies search terms (e.g., code-search, developer-tools, etc.)

While UTMs can be found on multiple Salesforce objects, reports should default to analyzing campaigns with campaign members. This report type will enable the viewer to analyze which sources are driving visitors to specific campaigns and account for the fact that one visitor can be a member of multiple different campaigns, each with distinct UTM parameters.

### UTM Builder

[UTM.io](https://web.utm.io) is our internal tool for building webpage links with correct conventions for UTMs. If you do not have access to the Sourcegraph workspace, please request it on Slack. New links can be created using the Create Link button in the top left of the Links sub-page. Currently, values for UTM medium and UTM source are restricted to values aligning with this [framework](https://docs.google.com/spreadsheets/d/1xKusTq98rHWtv1N_5t4FhF-f7OAXnH3GXj9zloA7P9k/edit#gid=435040517). If there is a value for either field you feel is missing, please post your requested medium and source values in the #ask-sales-ops channel and we will add them. Multiple Hubspot workflows are dependent on these values, so this standardization ensures all dependencies continue to properly function.

### Steps to Launching New UTMs and Updating Associated Workflows

Any UTM found within our [UTM hierarchy](https://docs.google.com/spreadsheets/d/1xKusTq98rHWtv1N_5t4FhF-f7OAXnH3GXj9zloA7P9k/edit#gid=435040517) already exists within the required UTM.io and HubSpot workflows. Any new UTM parameters must be requested in #wg-utm-desk, where Marketing / Sales Ops will proceed to complete the following required steps:

1. Add the new parameters and their groupings to the [parameter builder](https://app.utm.io/team/60f987db6634b9004c28cbf1/parameters) on UTM.io
2. In Salesforce, navigate to Setup => Picklist Value Sets => Person Source Detail (or any other Person Source category picklist that needs a new value). Click “New” and in the text box add the name of the new detail category associated with the UTM (e.g., TikTok, Neuron Newsletter, etc.). The “Add the new picklist values to all Record Types that use this Global Value Set” checkbox below the text box must be checked for workflows to function properly. Hit save.
3. In HubSpot, navigate to Actions => Edit properties and search for the person source field that was updated in SFDC (e.g., if TikTok was added to Person Source Details in SFDC, it will need to be added to the property picklist in HubSpot as well).
4. Navigate to the [OP - First Touch / Last Touch Model](https://app.hubspot.com/workflows/2762526/platform/flow/234673967/edit) workflow in HubSpot, locate the last if/then branch in the workflow and in the top right of the branch, select Actions => Edit => scroll to the bottom of the edit panel and select “Add another branch”
5. Give the new branch a descriptive name (e.g., Organic Social TikTok, Tour de Source Newsletter, etc.), filter by contact properties, select the property UTM Source and use the criteria “is equal to” whichever source you are adding. Repeat this step for UTM Medium within the same branch.
6. Once the above steps are completed, you will see a new sub-branch at the end of the main If/Then branch, scroll over to that and add sub-branches for corresponding Person Source, Person Source Detail, and Person Source Category.

## HubSpot

HubSpot is our marketing automation tool. It’s where we run all automated email marketing campaigns, track engagement, determine campaign membership, score marketing qualified leads, and manage parts of the lead lifecycle.

### HubSpot Access

You can request access to HubSpot by reaching out in #ask-it-tech-ops and tagging a member of Sales Operations in your request. Alternatively, if you have a user seat, but are having difficulty completing an action due to your user role/permissions you can reach out to #ask-sales-ops.

### HubSpot Roles

HubSpot Roles have been created to standardize company-wide access, as well as to ensure that all users have appropriate access to HubSpot. Below is an overview of the Roles.

- Super Admin: Unlimited access to our HubSpot instance.
- Standard Admin: Pared-down admin access to our HubSpot instance. Ability to change HubSpot settings, import data, bulk delete, and edit/delete workflows has been disabled.
- User - Edit Access: Basic access to our HubSpot instance with added ability to edit objects, export data, create forms/lists/files, read/write ads, campaigns, blogs, landing pages, and URL redirects, and create/edit reports.
- User - Read Access: Basic 'read only' access to our HubSpot instance.
- User - Sales Access: Basic 'read only' access to HubSpot, with added persmissions to view the HubSpot widget within SFDC.

As new teammates join Sourcegraph, all non-sales users will be added to our HubSpot instance with a 'User - Read Access' role (sales will be added with a 'User - Sales Access' role).

**Please read:** All forms are to be created by a member of Marketing Ops. To request a form, please post in the #ask-sales-ops channel. Once a form is created and is set live by Marketing Ops, other teams can make edits and create A/B tests, however Marketing Ops must be informed of the changes.

### How HubSpot Works

Any time a web visitor fills out any [form](https://app.hubspot.com/forms/2762526) on a Sourcegraph domain and agrees to our T&C/privacy policy, their given information will be uploaded in the form of a new HubSpot contact (or an update to a pre-existing HubSpot contact if they've previously filled out another form or been added manually to a Salesforce campaign). Each contact will run through pre-set [automated workflows](https://app.hubspot.com/workflows/2762526/view/default?pageSize=100&sortBy=createdAt&sortOrder=descending) that check the contact's properties against workflow criteria. Key examples of this in action include:

- [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/42642517/edit) to enroll contacts into Private Install SFDC campaign
- [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/80461750/edit) to determine which contacts should receive a product engagement grade
- [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/234722911/edit) to assign Person Source attributes to contacts depending on their originating source

### HubSpot to Salesforce sync

Most HubSpot contacts are synced to Salesforce, usually within 15 minutes. The complete settings are in HubSpot [here](https://app.hubspot.com/integrations-settings/2762526/installed/salesforce/contacts), but the most important of the synced fields are:

- Basic contact info (name, email)
- Their lead source based on First Page Seen
- MQL date and checkbox
- NPS survey results attached to the contact

Select contacts are added to a suppression list and blocked from syncing from HubSpot to Salesforce. These contacts and the list's associated qualification filters can be found in our master suppression list [here](https://app.hubspot.com/contacts/2762526/lists/2452/filters).

### Salesforce to HubSpot sync

Any update on the lead/contact in Salesforce will sync back to HubSpot (name, email, MQL checkbox, etc.). Companies and opportunities will not be synced back; Salesforce is the source of truth for these objects.

### Inclusion List

We utilize an inclusion list to control which contacts can sync from HubSpot to Salesforce. The purpose of this list is to ensure that Sales is not working low intent prospects (i.e., those in regions we explicitly do not serve, illegitimate email domains, etc.) as well as those reaching out solely to provide product feedback.

Links to current inclusion lists:

- [Core list](https://app.hubspot.com/contacts/2762526/lists/1050/filters) - this list sets the criteria for which contacts are synced to Salesforce.
- [Inclusion criteria list](https://app.hubspot.com/contacts/2762526/lists/1049/filters) - contacts must either have a First Touchpoint _OR_ already be present in Salesforce to be synced over
  - This list exists for the sole purpose of not syncing over feedback form leads into Salesforce (these leads are the only ones that are not assigned a First Touchpoint, in theory). As a result of this list, every time a new form is created, we must remember to add this form to its applicable First Touchpoint workflow (described above). If this step is missed, form submissions will fail to sync from HubSpot to Salesforce.
- [Exclusion criteria list](https://app.hubspot.com/contacts/2762526/lists/540/filters) - contacts must not come from selected email domains OR must not have unsubscribed from all Sourcegraph comms

## HubSpot Forms

HubSpot forms are our preferred method of collecting contact information from interested inbound prospects. These forms are fully customizable and enable us to retain out-of-the-box tracking capabilities as well as Salesforce compatibility that is important for directing new leads to the right contacts within Sales.

If you are considering launching a survey or form using an alternative to HubSpot (e.g., Typeform, Google Forms, etc.), please reach out to #ask-sales-ops so we can determine the best path forward for your specific needs. Utilizing non-HubSpot forms requires a custom process for ingesting submissions into Salesforce and limits our ability to to track source and referral data.

### Key HubSpot Forms We Use Today

- [Contact Us / Demo Request](https://app.hubspot.com/submissions/2762526/form/e090296f-84f5-4bcb-9093-a533336841b4/performance?redirectUrl=https%3A%2F%2Fapp.hubspot.com%2Fforms%2F2762526): This form follows the “Contact sales”, “Contact us” (for more enterprise pricing info) and “Talk to an engineer” CTAs
- [Cody for Work Request](https://app.hubspot.com/submissions/2762526/form/05e46684-9fbc-4c4d-b010-f661f247c4c6/performance?redirectUrl=https%3A%2F%2Fapp.hubspot.com%2Fforms%2F2762526): Allows interested prospects to request Cody access; directs their info to SDR team to be qualified
- [Big Code in AI Era Report Request](https://app.hubspot.com/submissions/2762526/form/3612c366-2e75-4a4b-9212-6dcbd6b008fe/performance?redirectUrl=https%3A%2F%2Fapp.hubspot.com%2Fforms%2F2762526): Enables instant download of the report following email submission
- [Product Feedback Form](https://app.hubspot.com/submissions/2762526/form/a86bbac5-576d-4ca0-86c1-0c60837c3eab/performance?redirectUrl=https%3A%2F%2Fapp.hubspot.com%2Fforms%2F2762526): Enables product users to give open-ended feedback pertaining to their NPS ranking as well as request product improvements

Important note: If you would like changes to any fields in the above forms, please reach out in Slack to #discuss-marketing or #hubspot-revops-sourcegraph. Please do not make these changes directly as downstream workflows could be adversely affected.

### Steps to Creating a New HubSpot Form

If you do not have the ability to create forms in HubSpot due to your profile permissions, please reach out to #discuss-marketing in Slack with the following information:

- Purpose of the form you want to create (e.g., form for new piece of gated content, form requesting beta access to a new product or feature, etc.)
- Specific fields you want the form to include (e.g., email vs. work email, title, name, etc.)
- Fields you want to be required vs. optional
- Optional message to display after successful form submission
- Details on any requested next steps for prospects (e.g., add them to a specific campaign, have sales rep reach out, have PM send license details, etc.)

If you have access and would like to create a new form yourself, follow these steps:

1. At the top of HubSpot, navigate to Marketing => Lead Capture => Click Forms.
2. Search “Sourcegraph Form Template” or navigate directly to this [page](https://app.hubspot.com/forms/2762526/editor/6170956a-2101-4f76-a3ca-c89afb42ef32/edit/test).
3. Navigate to “Actions” in the top right of the template form builder and select “Clone”.
4. Give your form a new name that explicitly describes what info the form is collecting.
5. Add desired fields using the property search on the left-hand side of the form builder (toggle “required” on for any mandatory fields).
6. If the template contains any fields that you want to remove, navigate to edit form and select the trash symbol by the field on the right-hand side.
7. Hit “Publish” or “Update” in the top right corner of the form builder to go live with your form and/or changes.
8. Once you are satisfied with the form fields and layout you have built, reach out to #ask-marketing to embed the form on a pre-existing page or create a new landing page and CTA for the form.
9. Reach out to #ask-sales-ops in Slack with the name of the Salesforce campaign you would like form submissions to be added to in addition to your planned campaign launch date.
10. In a staging environment, test that the form submission is working properly across the three main web browsers: Chrome, Safari, and Firefox. This will require submitting forms with non-sourcegraph email addresses and working with Marketing and Sales Ops to confirm that submissions are flowing properly into both HubSpot and Salesforce.

### HubSpot Requirements Post-New Form Creation

All new HubSpot forms created must be added to a Most Recent Touchpoint automated workflow in HubSpot to ensure they sync properly to Salesforce. If this step is missed, they will not make it onto the inclusion list. There are different Touchpoint workflows depending on the form type:

- If Website: this Hubspot [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/182732689/edit)
- If Contact/Demo: this Hubspot [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/6892987/edit)
- If Private Instance: this Hubspot [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/6892996/edit)
- If Content Download: this Hubspot [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/36469088/edit)
- If Event or Third Party-Vendor: ensure Most Recent Touchpoint is included and First Touchpoint is included and First Touchpoint is set to NOT overwrite if known upon list import
- If Feedback Form, Product: this Hubspot [Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/73684068/edit)

### Analyzing HubSpot Form Submissions

While Salesforce campaigns will hold form submissions for those leads and contacts being passed into SFDC, some leads intentionally are not synced between the two systems (details of this list can be found in the “Inclusion List” section). To see all form submissions, including those not synced to Salesforce, navigate to Forms in HubSpot, search the name of the specific form you are looking for, and navigate to Form Submissions. This will enable you to see all applicable submission and contact properties for this form.

### Connecting a HubSpot Form to a Salesforce Campaign

In order to automatically add contacts submitting a HubSpot form to a Salesforce campaign, we need to first create an automated workflow in HubSpot to connect the two systems. Here are the steps to do this:

1. In HubSpot, navigate to Automation => Workflows, then hit “Create workflow” => “From scratch” in the top right corner
2. On the next screen, select “Blank workflow”
3. On the next screen, select “Set up triggers” and select the filter type “Form submissions”. This will pop up a search bar where you can search for and select the exact form you would like to connect to a Salesforce campaign.
4. Apply the filter and then hit the “+” button below the enrollment trigger and choose the action titled “Delay for a set amount of time” and set this to 10 minutes and save. The purpose of this step is to leave time for our campaign member attribution workflows to run.
5. Hit the “+” button below this step again and choose “If/then branch”. Name the branch “Exists in SFDC”, filter by contact properties => select “Salesforce contact ID” and set the filter to “is known”. Once that is saved, create an OR criteria and do the same thing for “Salesforce lead ID” and hit save.
6. Hit the “+” button below this step again and choose “If/then branch”. Name the branch “Exists in SFDC”, then select “Set Salesforce campaign”. Search for the name of the Salesforce campaign (note: this must be created directly in Salesforce first before it will be available to query) and set to “Responded”.
7. Create another branch entitled “None met”, add a delay step for 5 minutes, then clone the steps from 5 and 6 below. This can be done by going to the specific branch you want to replicate, hitting “Actions” in the top left and selecting “Clone” => “This action and all after it”.
8. Create a final failure notification step in the workflow that emails an appointed person of contact within Marketing or Sales Ops when a contact flows through but is not added to the campaign.
9. Ensure that the “Workflow is ON” toggle is selected in the top right corner of the workflow.

See the following example campaign workflows for a visual representation of the steps above:

- Contact/Demo Request campaign [workflow](https://app.hubspot.com/workflows/2762526/platform/flow/42642275/edit)
- Cody for Work campaign [workflow](https://app.hubspot.com/workflows/2762526/platform/flow/368740649/edit)

See below for our most utilized campaigns:

- [OP Lead & Contact Reporting Campaign](https://app.hubspot.com/workflows/2762526/platform/flow/265918090/edit): this is a campaign created solely for reporting purposes; members of this campaign are not set to “Responded” as no prospect action is required to be added to the campaign
- [Add to Sales Outbound](https://app.hubspot.com/workflows/2762526/platform/flow/345372726/edit): this adds a campaign membership for every prospect that has received outbound messaging through Outreach; this campaign was created for the purpose of reflecting sales outreach efforts in multi-touch attribution
- [PR Cloud Account Cloud Signup](https://sourcegraph2020.lightning.force.com/lightning/r/Campaign/7013t000001ew4lAAA/view): members of this campaign have signed up for a cloud account; new sign-ups as of May 2023 likely signed up after selecting a Cody access CTA on our website
- [Contact / Demo Request](https://app.hubspot.com/workflows/2762526/platform/flow/42642275/edit)
- [Enterprise Trial Request](https://app.hubspot.com/workflows/2762526/platform/flow/348942095/edit)

### Connecting Product Sign-Ups to a Salesforce Campaign

Some of our products are not connected to HubSpot forms but we still need to ensure these sign-ups are added to Salesforce campaigns for sales rep visibility into account activity and prospecting signals. See the following examples for how we tie behavioral events to Salesforce prospects in order to add product users to campaigns:

- Private Install campaign [workflow](https://app.hubspot.com/workflows/2762526/platform/flow/42642517/edit)
- Cloud campaign [workflow](https://app.hubspot.com/workflows/2762526/platform/flow/42642517/edit)

### Determining Whether Form Submissions are Properly Flowing to Salesforce Campaigns

Testing within a staging environment prior to form launch is critical to ensuring that we are properly collecting data for all submissions. After form, Salesforce campaign, and campaign enrollment workflow are created, Sales Ops will need to complete the following testing steps:

1. Submit a non-Sourcegraph email address to the form.
2. Navigate to the form in HubSpot and click into submissions OR search the email address submitted within HubSpot contacts and check the record’s activity to ensure the form submission is being properly recorded.
3. Search for the same email address in Salesforce and click into the associated lead or contact record.
4. Hover over “Campaign Memberships” in the top left of the record and look for the associated campaign. If it is not there, there is either an issue with the campaign enrollment workflow or the contact is not on the inclusion list. In this case, ensure that the form has been added to a First Touchpoint workflow linked above.
5. If there is a form submission record on the HubSpot contact and a campaign membership on the SFDC lead/contact, the form is approved for launch.

Note: HubSpot form submission figures often will not align with the associated Salesforce campaign’s total campaign members. This is due to the inclusion list, which ensures certain HubSpot contacts are not synced to Salesforce to be worked by Sales. This list is described in detail below.

### Adjusting for Missing Campaign Memberships Post-Launch

Sometimes we discover issues with form submissions after launch. In cases like this, we need a way to manually enroll missing contacts into the proper Salesforce campaigns. Steps for this process can be found below:

1. In HubSpot, navigate to Contacts => Lists => click “Create list” in the top right corner
2. On the next screen, name the list in the format “[Campaign Name - Manual Enrollment YY-MM-DD]”, select “Active list” and hit next
3. Add a filter for the contact property Salesforce Campaign IDs “is none of” [Campaign Name] + select the checkbox for “include records where Salesforce Campaign IDs is empty” below this filter
4. Below the above filter, select AND and add another condition for Form Submission, selecting “has filled out” [Form name] on Any page
5. Wait for the contacts in the list to populate (this may sometimes take a couple minutes)
6. Once the list is populated, select the master checkbox in the top left of the table and hit More => Enroll in Workflow
7. This will bring up a pop-up enabling you to search for the desired workflow you’d like the selected contacts to manually re-run through

### Determining which page a HubSpot form was submitted on

Often, different pages on our website utilize the same sign-up form (e.g., the [Contact Sales](https://about.sourcegraph.com/contact/request-info) CTA from our home page links to the same form as the [Enterprise Pricing Request](https://about.sourcegraph.com/contact/request-info?form_submission_source=pricing-enterprise) CTA). To see which page/CTA the form submission actually originated from, we can look at the “Website Referrer URL” field on the campaign membership record in Salesforce. To see which site initially got them to that CTA/page, look at “Most Recent Referrer URL”.

## Sending Bulk Emails to Marketing Contacts

All bulk update emails to marketing contacts are sent through HubSpot. The steps for this process can be found below:

1. In HubSpot, navigate to Marketing => Email and select “Create email” in the top right corner.
2. If sending a bulk, one-time update email to pre-existing contacts, select “Regular” on the next screen.
3. Select a pre-existing email template or navigate to “Drag and drop” to create a new one.
4. Give the email a descriptive name and ensure the proposed send date is included in the title for future reference. Select “create email”.
5. The “Edit” tab on the next screen will allow you to edit the body of the email directly. Note that any fields you’d like to be personalized (e.g., recipient name, sender name, etc.) must be added by selecting the “Personalize” button and adding a personalization token (these are sourced from HubSpot contact property fields).
6. Once the body of the email is all set, navigate to the “Settings” tab within the email builder and select responses for all mandatory fields. Note that any fields requesting sender names must align with Sourcegraph employees added as users to our HubSpot instance.
7. Next, navigate to the “Send or schedule” tab to select who should receive (or not receive) this email. When clicked, the “send to” field will reveal a dropdown of existing lists in HubSpot. If the list of contacts you’d like to send the email to does not yet exist, select “create new list” at the bottom of the dropdown and create a new active list using whatever filters correspond to your send parameters.
8. Once this is complete, you should send a test email to yourself to ensure all graphics and messaging are displayed correctly (on desktop and mobile).
9. Send a link to your draft message to #ask-sales-ops as well as when you would like to send the email out at least 3 business days in advance. Sales Ops or RevOps will then do final checks to ensure functionality is correct before sending.

Note: Contacts must already exist in HubSpot in order to send a bulk email through the system.

## Subprocessor Update Emails

Whenever we add a new third-party [subprocessor](https://about.sourcegraph.com/terms/subprocessors), legal requires a HubSpot email be sent to any contact that has requested updates (i.e., signed up [here](https://about.sourcegraph.com/terms/subprocessors#sign-up)). Legal will submit a draft of this email to Sales Ops, who will then complete the following steps:

1. Clone the latest subprocessor email sent (currently [here](https://app.hubspot.com/email/2762526/edit/108553765895/content)).
2. Hit edit. Edit the top section text to conform with legal’s messaging.
3. Select the pencil icon within the table that contains the specific subprocessors previously added and replace these with the new services.
4. Leave all text below this column the same.
5. This cloned email will default to sending this email to the contacts contained within the [Subprocessor Form Fills](https://app.hubspot.com/contacts/2762526/lists/1862/filters) list.
6. Hit “review and send” to release the requested update to interested parties.

## Getting Product Data into HubSpot

The Data & Analytics team maintains tracking on an individual level for how our prospects and customers engage with our product (free and paid) - see some examples of currently tracked metrics [here](https://docs.sourcegraph.com/admin/pings#telemetry). GTM often needs access to these data points directly in HubSpot or Salesforce to tailor outreach, score leads, launch nurture campaigns, etc. New fields can be requested by reaching out to #discuss-analytics in Slack. Once the D&A team determines that the requested data is available, the following process needs to take place:

1. Marketing creates a new contact property in HubSpot to house the data for each individual contact; Marketing informs D&A of the new field name
   1. Note that Marketing will need to work with D&A to understand how the data is labeled on the backend before creating the field types and labels
2. Marketing reached out to Sales Ops to sync this property from HS&lt;>SFDC
3. D&A will utilize Polytomic to send the data in real-time from BigQuery (our data warehouse) to HubSpot

Some example fields that we have set up to track product usage can be found [here](https://app.hubspot.com/property-settings/2762526/properties?type=0-1&eschref=%2Fcontacts%2F2762526%2Fobjects%2F0-1%2Frestore&search=search%20com&action=edit&property=search_completed___cloud) and [here](https://app.hubspot.com/property-settings/2762526/properties?type=0-1&eschref=%2Fcontacts%2F2762526%2Fobjects%2F0-1%2Frestore&search=days%20ac&action=edit&property=of_return_visits).

## Salesforce Campaigns

### How to See All SFDC Campaigns

In Salesforce, navigate to “Campaigns” on the top navigation bar and edit the view filter in the top left to “All Active Campaigns”. This will display a list of all campaigns that have not been marked “Completed” in SFDC (note that we do not currently update campaign status so all campaigns should remain active).

### Creating a New Salesforce Campaign

All new forms or upcoming events (e.g., conferences, webinars, etc.) require a corresponding Salesforce Campaign to track submissions and attendees within our CRM for Sales team insight as well as pipeline attribution.

If you do not have the ability to create campaigns in SFDC due to your profile permissions, please reach out to #ask-sales-ops in Slack with the following information:

- Purpose of the campaign you want to create (e.g., campaign tied to a HubSpot form, campaign for an event, etc.)
- Campaign type (e.g., event, product, contact/demo request, etc.)
- Date of planned campaign launch or event date

If you have access and would like to create a new campaign yourself, follow these steps:

1. At the top of Salesforce, navigate to Campaigns => click New in the top right
2. Enter campaign name, following the convention [Event Type initials - Campaign Name - YY.MM.DD]
3. Select “Active” flag
4. Change “Status” to “In Progress”
5. Select the correct campaign type from the dropdown (if a new campaign type is needed, reach out to #ask-sales-ops with your request)
6. Ignore all other fields and hit “Save”

Once a new campaign has been added to Salesforce, you should either manually add campaign members (in the case of an in-person event) or connect it to a campaign enrollment workflow in HubSpot (in the case of form submissions). If neither of these two steps are completed, this campaign will not have any pipeline attribution.

### Adding or Changing Campaign Types

While we currently have a robust set of campaign types in Salesforce, new categorizations or changes to existing categorizations are sometimes necessary. To add or edit a campaign type, navigate to the Object Manager within Salesforce => Campaign => Fields and Relationships => Type. Scroll down to “Campaign Type Picklist Values” and select “New” or navigate to the pre-existing type you would like to amend and hit “Edit”.

This field is dynamic, so any changes to a pre-existing Campaign Type will flow to all associated campaign records and campaign members, regardless of when they were created.

### Manually Adding Members to a Salesforce Campaign

Sourcegraph frequently participates in events or campaigns set up by external organizations. In these cases, we will not get access to sign-ups and attendees directly through HubSpot so will need to manually add them to Salesforce campaigns ourselves following event completion. Follow the below steps to manually add campaign members to Salesforce:

1. Ensure the associated campaign is already created in SFDC
2. When Marketing sends over a csv file of new campaign members and the associated campaign to add them to, add a copy of the campaign member data to a new tab in [this spreadsheet](https://docs.google.com/spreadsheets/d/1N9xanrOkPPHJiw75CAEmKBTzYOZtUHYyUOHg7hWlh2E/edit#gid=37655605)
3. Ensure that each column of the data aligns with the corresponding field name in HubSpot (e.g., attendee full name must be separated into “First name” and “Last name” columns, any contact notes must be in one column with the header “Sales Contact Notes”)
4. On the same contact data sheet, add new columns with the following headers:
   1. First Touchpoint
   2. Lead Source
   3. Recent Person Source Category
   4. Recent Person Source
   5. Recent Person Source Details
   6. Person Source Category
   7. Person Source
   8. Person Source Details
5. Values for these fields will be the same for each campaign member manually added and will vary by campaign type. Here are examples for a sponsored live event:
   1. First Touchpoint: Event
   2. Lead Source: Event
   3. Recent Person Source Category: Inbound
   4. Recent Person Source: Live Event
   5. Recent Person Source Details: Sponsored
   6. Person Source Category: Inbound
   7. Person Source: Live Event
   8. Person Source Details: Sponsored
6. After conforming and adding the data above, download a CSV or excel copy of the G-sheet linked above
7. Navigate to the [Contacts](https://app.hubspot.com/contacts/2762526/objects/0-1/views/all/list) landing page in HubSpot and select “Import” in the top right, then select “Start an import” => “Import file from computer” => “One file” => “One object” => “Contacts”
8. Drag the above data file into the HubSpot uploader and in the dropdown entitled “Choose how to import contacts”, select “Create and update Contacts” - this will create a new contact in HubSpot for those that we have not previously interacted with and will update records for those already in the system
9. The next screen will show HubSpot’s attempts at automatically mapping the uploaded columns to pre-existing contact properties. Some of these will need to be manually changed as follows:
   1. Recent Person Source Category maps to “Person Source Category”
   2. Recent Person Source maps to “Person Source”
   3. Recent Person Source Detail maps to “Person Source Detail”
   4. Person Source Category maps to “Original Person Source Category”
   5. Person Source maps to “Original Person Source”
   6. Person Source Detail maps to “Original Person Source Detail”
10. For any values on the mapping page with “Original” in the HubSpot contact property name, ensure the “Don’t overwrite” checkbox is selected. Do the same for Lead Source and First Touchpoint (this is to account for contacts that had other interactions prior to this campaign; we do not want to overwrite their original source details).
11. Hit next and on the next page, ensure all checkboxes are selected.
12. Hit “finish import”
13. Create a new campaign enrollment workflow (as described

Video instructions for this process can be found [here](https://www.loom.com/share/989184150be74d20b324efd1d8e24b32) (part 1), [here](https://www.loom.com/share/6c270613832242bd810ece0c2bebc6cd) (part 2), and [here](https://www.loom.com/share/ce0fb3b599ff4e92baef8c951f404c91) (part 3).

### Multi-touch Campaign Attribution

Opportunities are typically the result of multiple campaigns and sales touches. As a result, fields like Opportunity Source that attempt to allocate attribution to only one form of outreach (e.g., sales email, contact/demo form, event, etc.) fail to capture a comprehensive view into how opportunities really come about. We have created a preliminary [Weighted Campaign Attribution dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000004tP0EAI/view?queryScope=userFolders) to show a clearer picture into how we generate deals. All questions and requests for additional functionality should be directed to #hubspot-revops-sourcegraph.

<span style="text-decoration:underline;">How the dashboard works:</span>

- Each opportunity’s IARR is evenly divided by the number of campaign members associated with the deal
  - For example, if XYZ Company had a $100k opportunity and before closing, 3 employees signed up for a Cloud account and 2 were reached out to by Sales, the Cloud Account campaign would be attributed $60k and the Sales outreach campaign would be attributed $40k
- To see which specific campaigns contribute to pipeline or revenue attribution, navigate in Salesforce to Reports => New Report => Campaigns => Campaigns with opportunities; once a report is generated, filter by either Opportunity Name, Campaign Name, or Campaign Type to see specific breakdowns of which campaigns are attributed to specific deals
- To see which specific UTM sources and mediums contributed to revenue / pipeline, see the “by Source” and ‘by Source Detail” charts in the dashboard
  - These fields are informed by Person Source and Person Source Detail, which roll-up specific UTMs into broader categories [here](https://app.hubspot.com/workflows/2762526/platform/flow/234673967/edit)
- Data represents all-time; filtering for specific time periods is possible, but requires some changes to backend formulas in SFDC
- Attribution is currently assigned when a campaign was responded to within 6 months before an opportunity was created through to the opportunity close date

## Digital Ad Conversion Flows

We run advertisements on several platforms, including Google, Bing, and LinkedIn. We measure the effectiveness of our digital advertisements by tracking the number of key actions taken by users that land on our site from ads. These key actions are called conversion goals. Goals include actions like filling out a form, signing up for an account, or conducting a search on Sourcegraph.com.

At a high level, we set up Tags in Google Tag Manager that fire events when certain actions are conducted on our site. These events are then sent to the respective ad platform, where we define goals by matching on these events.

There is some assumed knowledge here about Google Tag Manager (GTM) concepts: Tags and Triggers.

### Google Ads

For Google ads, events flow from Google Tag Manager to Google Analytics to Google AdWords.

1. Google Tag Manager

In Google Tag Manager, to send events to Google Analytics, we set up Tags with the type `Google Analytics: Universal Analytics`. These events can be very broad, like 'Any HubSpot form submission', which fires whenever any HubSpot form is submitted on our site, or specific, like 'Batch Changes Demo Request Form Submission', which only fires when the Batch Changes demo request form is submitted.

Each Tag defines a Category, Action, and Label. These are used for scoping down events. For example, if the Tag is for 'Any form submission', the Category is "HubSpot Form", the Action is the Page Path variable (the URL path), and the Label is the HubSpot form ID.

If you want to add a new tag specifically for a conversion, lean towards being specific rather than broad.

2. Google Analytics

In Google Analytics, we define Goals. You can find these goals in `Admin > Goals`. Goals are defined by specifying the Event Category, Action (optional), and Label (optional) that should match for a specific goal. Using the form submission example, if we wanted to count a conversion for any HubSpot form submission, we would specify a Goal that matches on any event where the Event Category matches "HubSpot Form". If we wanted to create a conversion for form submissions only on the `/contact/sales` page, we would define a Goal that matches on any event matching Event Category "HubSpot Form" and an "Event Action" of `/contact/sales`. As a reminder, these Actions and Labels are set in Google Tag Manager in the step above.

3. Google AdWords

In AdWords, you can see the conversion goals that are synced from Google Analytics via `Tools and Settings > Measurements > Conversions`. Several charts in AdWords show the performance of our campaigns based on their conversion rates.

### Bing Ads

Bing ads are set up very similarly to Google Ads. However, you need to ensure a conversion goal is set up in Microsoft Advertising prior to creating a tag in GTM.

1. Google Tag Manager

Tags for Bing ads function the same as Google ads. However, creating Tags to send events to Microsoft Advertising requires knowing the UET tag. You can get this after you've created a goal in the Microsoft ad platform.

2. Microsoft Advertising

In the Microsoft Advertising platform, create a new goal (or ensure the goal you want to measure already exists) by going to `Tools > Conversion tracking > Conversion goals > Create a conversion goal`. Similar to Google Analytics, specify the Event Category, Action, Label to match on.

### LinkedIn Ads

LinkedIn campaigns are significantly different from Bing and Google. For LinkedIn ads, you cannot match events when specifying conversions (i.e. match on Event Category/Action/Label) on their platform. Rather, in LinkedIn Campaign Manager, you create a conversion goal and they provide you a pixel (URL) that you attach to Tags in GTM. Therefore, you need to create Tags that fire on _exactly_ the interaction you want, and you do this by listening on Triggers that match the exact interaction.

1. Google Tag Manager

In GTM, we need to create Triggers that match exactly the Conversion Goals that we want. Triggers are the events that cause Tags to run. These Triggers would need to specify the same Category/Action/Label values as Conversion Goals in Microsoft Bing Advertisements and Goals in Google AdWords.

2. LinkedIn Campaign Manager

In LinkedIn Campaign Manager, add a Conversion. Here, you just specify the name of the Conversion, a window of time (30 days and 1 day) that conversions should log after clicking an ad, and the campaigns you want included for conversion tracking. At the end of the process, you will get an event specific pixel. Copy this.

3. Google Tag Manager (part 2)

In GTM, create a Tag of type `Custom Image` that mirrors the Conversion Goals in Microsoft Bing Ads and Google AdWords, using the Triggers you created in step 1. For each Tag, copy the pixel you got from creating the Conversion from LinkedIn Campaign Manager, and input the value in the Image URL field.
