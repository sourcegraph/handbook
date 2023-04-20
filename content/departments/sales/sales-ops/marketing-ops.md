# Marketing Operations

Sales Ops is currently the interim owner of all marketing operations tools and processes. The team is focused on the mechanics of how we find and track our end users and customers. Please direct all questions and requests to #ask-sales-ops.

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

### UTM Workflows in HubSpot and Salesforce

In order to categorize specific UTM parameters under broader person source umbrella categories, we utilize the following custom workflows and automations:

- [HubSpot Person Source Workflow](https://app.hubspot.com/workflows/2762526/platform/flow/234673967/edit): Checks for a `utm_source` value that aligns with pre-existing [framework](https://docs.google.com/spreadsheets/d/1xKusTq98rHWtv1N_5t4FhF-f7OAXnH3GXj9zloA7P9k/edit#gid=435040517) source values and auto-fills corresponding categories for Person Source Detail (e.g., Paid Google), Person Source (e.g., Paid Search), and Person Source Category (e.g., Inbound).
- Salesforce Automations: Categorizes Person Source Fields for visitors with no known UTM parameters. TBU - automation details TO COME

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
