# Marketing Operations

The Marketing Operations Team at Sourcegraph is focused on the mechanics of how we find and track our end users and customers. We are a subset of the Demand Generation team that oversees the MartTech stack, corporate email marketing strategy, lead management, and marketing analytics. We take on the technical work of maintaining systems across the marketing department to ensure our results are scalable and repeatable.

Our goal is to make sure the systems support the strategy! For any questions related to marketing operations, you can find us in the [#demand-gen-internal slack channel](https://sourcegraph.slack.com/archives/C020273JHJ6).

## MarTech Stack

Our most important MarTech tools are as follows:

- **Salesforce-** Hubspot passes lead and marketing touchpoint data over to Salesforce so that sales can follow up on individuals interested in Sourcegraph.
- **Hubspot-** Marketing automation tool used to run email marketing campaigns, track prospect engagement, and connects tools to our martech stack.
- **Drift (go-live date TBD)-** Chatbot that will be launched on about.sourcegraph.com. We'll be partnering with sales to drive revenue acceleration by helping folks that hit our website find what they are looking for faster via this chat tool.
- **Postal.io-** This account-based marketing tool is how we send gifts and mailings out to prospects. The integration with Hubspot allows us to automate email messaging workflows before or after gifts are sent or received. Today, we are not running any automated email messaging via this integration.
- **Triblio-** This account-based marketing tool is how we target specific accounts for digital advertising. The integration with Hubspot allows us to create target lists within Hubspot and share them with Triblio.
- **Typeform-** This marketing tool is how we create forms, surveys, and quizzes for our prospects. The integration with Hubspot allows us to send prospect answers and data into fields in Hubspot. Setting up this data flow lets us capture important information about our prospects, increase their intent scores based on responses, and surface important prospect responses to Sales when appropriate. As long as your Typeform asks for a person's email address, we can send responses to Hubspot. Reach out to us if you are interested in integrating forms, surveys, or quizzes with Hubspot.
- **Orbit-** This marketing tool is how we understand our community's interactions with Sourcegraph. The integration with Hubspot allows us to create user activities in Orbit when community members take specific actions. Today, anytime someone submits their information on our [Dev Tool Time page](https://info.sourcegraph.com/dev-tool-time), an activity is created for that person in Orbit.
- **Utm.io-** This tool is a way for us to standardize how we build, share, and sync our UTMs/URLs for marketing touchpoint tracking across our teams. By being on the same page with how we build our URLs, we're able to capture where folks are converting across our different digital platforms. If you are interested in learning more, you can check out this [demo video](https://www.loom.com/share/cb85b29198644100ac697437931beac8).
- **Demio-** This is webinar platform that will help marketing run webinar programs to drive MQLs and PQLs and increase product awareness.
- **Calibermind (go-live date TBD)-** This is a marketing tool we're implimenting that will help marketing understand the prospect journey. By connecting our ad spend platforms and Salesforce with Calibermind, we'll be able to see the full prospect through customer journey at the Account level.

As a marketing organization we’re always implementing new technologies so we can be sure we’re staying on top of the latest trends. Please see the [attached google sheet](https://docs.google.com/spreadsheets/d/1GLpfnwF6QxutxEvLtiorgfFUyHtPbMbzDFiYQ_pjU8c/edit?usp=sharing) to learn about the technologies we have in place today.

## Lead/MQL/PQL Definitions

There are a couple of different sections across BizOps and SalesOps that discuss lead/mql/pql management. In it's simplist form here are the definitions linked out to supporting documentation:

- **Leads** are individuals that have not been qualified yet which is why they are not associated with accounts or opportunities in Salesforce. It's important to note that these individuals are not surfaced to the SDR team just yet.

- **Marketing Qualified Leads (MQL)** inbound generated leads that reach a Hubspot Score of 15 points signifiying that they are ready for sales outreach. These MQLs are surfaced to the SDR team with the Lead Lifecycle Stage of MQL. For a more granular/technical view of our lead scoring set up you can view that in our working [lead scoring model here](https://docs.google.com/spreadsheets/d/1mAa2bueT8BrVjd5H5PQjKb7QMVFYObHYwg18ox02vsk/edit#gid=0).

- **Product Qualified Leads (PQL)** product generated leads that receive an A or B product usage grade that signifies strong engagement with our products. These PQLs are surfaced to the SDR team with the Lead Lifecycle stage of PQL.

### Lead Creation

Leads inbound in the following ways:

#### Contact Us Forms:

- [Sourcegraph - Contact us to learn more about Sourcegraph enterprise](https://about.sourcegraph.com/contact/request-info/?form_submission_source=pricing-enterprise)
- [Sourcegraph - Talk to a product specialist](https://about.sourcegraph.com/contact/sales)

#### Demo Forms:

- [Sourcegraph - Schedule a Batch Changes demo](https://about.sourcegraph.com/contact/request-batch-changes-demo/)
- [Sourcegraph - Schedule a Sourcegraph demo](https://about.sourcegraph.com/contact/request-demo/)
- [Sourcegraph - Request a Demo (CTA on top right of about site)](https://info.sourcegraph.com/demo-request)

#### Product (Private Install or Sourcegraph.com Account) Sign Ups\*

\*These leads are fed to Hubspot by an API key via a process set up by BizOps/CustomerOps that passes prospect email address and tracking/sourcing data

- **Sourcegraph Self-Hosted-** This lead is created when a prospect copies and pastes the code from the [“Install Sourcegraph Locally” CTA](https://about.sourcegraph.com/get-started/self-hosted) and runs it on their machine, we capture an email address and share it with sales.
- **Sourcegraph.com Account (Cloud)-** This lead is created when a prospect [creates a cloud account using GitHub, GitLab, or via an email address.](https://about.sourcegraph.com/get-started/cloud)

#### Third-party Vendors

- **SimplyDIRECT-** This vendor generates MQLs via survey based demand generation. When a prospect fills out a survey, their results are captured and sent to Salesforce via a web-to-lead form. SDRs will be notified when these MQLs enter into their queue. The survey results and other specific details will show up in the Lead Marketing Info section in Salesforce. They will also be added to the corresponding [ABX | SimplyDirect FY23Q1 Salesforce campaign](https://sourcegraph2020.lightning.force.com/lightning/r/Campaign/7015b000005hCmfAAE/view).
- **Banzai-** This vendor drives webinar attendance. Once the webinar is over, the attendees of the webinar will become MQLs.

### Lead Lifecycle

Marketing Operations is currently partnering with sales to implement a lead lifecycle program. Once the details are finalized, we will be updating this section.

## Hubspot

Hubspot is our marketing automation tool. It’s where we run all our email marketing campaigns, track engagement, score marketing qualified leads, and manage parts of the lead lifecycle from. Our goal is to keep this system aligned with Salesforce so that we’re staying current with processes to support the sales cycle.

### Hubspot Access

Most everyone at the organization has access to Hubspot. If you do not and you would like access, you can reach out to #it-tech-ops. Alternatively, if you have a user seat, but are having difficulty completing an action due to your user role/permissions you can reach out as well.

### Hubspot Roles

Hubspot Roles have been created to standardize company-wide access, as well as to ensure that all users have appropriate access to Hubspot. Below is an overview of the Roles.

- Super Admin: Unlimited access to our Hubspot instance.
- Standard Admin: Pared-down admin access to our Hubspot instance. Ability to change Hubspot settings, import data, bulk delete, and edit/delete workflows has been disabled.
- User - Edit Access: Basic access to our Hubspot instance with added ability to edit objects, export data, create forms/lists/files, read/write ads, campaigns, blogs, landing pages, and URL redirects, and create/edit reports.
- User - Read Access: Basic 'read only' access to our Hubspot instance.
- User - Sales Access: Basic 'read only' access to Hubspot, with added persmissions to view the Hubspot widget within SFDC.

As new teammates join Sourcegraph, all non-sales users will be added to our Hubspot instance with a 'User - Read Access' role (sales will be added with a 'User - Sales Access' role).

**Please read:** - All forms are to be created by a member of the MarketingOps Team. To request a form, please post in the #demand-gen-internal channel. Once a form is created and is set live by MarketingOps, the Growth & Integrations Team can make edits and create A/B tests, however the MarketingOps team must be informed of the changes.

### Request for Email Send via Hubspot

If you are interested in getting an email sent through Hubspot to existing opt-in email addresses, please be sure to fill out our [Hubspot Email Send Request Form](https://form.asana.com?k=_YtJFC_Eo-NG8iOSEdNgVA&d=7195383522959). Once we receive your request, we will assess our email send schedule to see if we can accommodate your request and provide options and recommendations if it is a request that cannot be accommodated.

### Hubspot Technical Resources

Hubspot is a fluid system, where we are always making updates to continue to improve our processes. Here are a few places you can go to review technical updates the marketing operations team is making within the system:
[Marketing/Hubspot Documentation](https://docs.google.com/document/d/1rJ9dmicBH160yQBRblsPMv0k-Hetp4O-_RQUyHrmvKA/edit?usp=sharing)

### Hubspot and UTM parameters

The parameters that [HubSpot supports out of the box](https://knowledge.hubspot.com/settings/how-do-i-create-a-tracking-url) are `utm_campaign`, `utm_source`, `utm_medium`, `utm_term`, and `utm_content`.

First Touchpoint is a custom marketing field we have created in Hubspot.. This fields help us determine the first touches marketing has with a prospect. There are supporting
[Workflows](https://app.hubspot.com/workflows/2762526/flow/9011999/edit) set up in HubSpot to capture the latest conversion information, and copy this information to the ‘First event’ fields if they are blank/ unknown.

### Dashboards and Marketing Analytics\*

Marketing dashboards that are specific to Marketing intiatives are mostly created in Tableau, to access - you will need to use this [OnePassword](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/467npo7pkmnty4gmyt5crmmmga). If you have any questions or requests please post a message in #analytics.

To check on marketing performance to OKR's and pipeline performance visit [Marketing Dashboard](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/workbooks/958874/views)

Individual Page Overview

[Marketing Dashboard](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/MarketingDashboard/MarketingDashboard) - Marketing team performance to OKRs, specifically pipeline and MQL performance - associated [loom](https://www.loom.com/share/1ae4b3725ea24097a6024a365324f9e2)

[Marketing Results](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/MarketingDashboard/Marketingresults) - A dynamic breakdown of lead funnel by relevant marketing program. You can break down the funnel by source,content,campaigns, and more. Use filters on right to change time frames and view, the metrics are cohorted based on the relevant 'date filter' you choose. For example, if wanting to see how leads have converted downstream, choose lead date. If wanting to see when MQLs became an MQL in a specific time frame choose MQL.

[Metrics over time](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/MarketingDashboard/Metricsovertime?:iid=4) - A funnel view of metrics broken out by volume per time period, this dashboard allows you to see volume of metrics compared to previous time periods. Use filters as mentioned in the marketing results page.

[Quarter Funnel](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/MarketingDashboard/Quarterfunnel) - A high level breakdown of leads, MQLs,converted opps,qualified opps, and Iarr. This dashboard shows a non - cohorted view, and bases volume off of each metric to it's own date filter. I.e. lead = 'created date', MQL = 'MQL date', converted = 'Converted date', and qualified = 'Qualified date'. You can also use the filter 'MQL or Not' to break down by type of lead.

[Dynamic Funnel](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/MarketingDashboard/Dyanmicfunnel?:iid=6) - This is a cohorted funnel conversion dashboard based on whatever date filter you choose.

[ABX dash](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/MarketingDashboard/ABXEvents?:iid=7) - A dashboard to display current year event and abx campaigns, it will highlight how many leads and contacts per campaign, as well how much open pipeline is expected to attend, or did attend.

Important notes on dashboard - Marketing Sourced pipeline and MQL goals are stretch goals that are created and agreed upon at an executive level.

Definitions:

`Marketing Sourced` - Any opportunity created in time period that have an opportunity source of 'inbound' or 'events.'

`Marketing Influenced` - Any opportunity that has some sort of marketing program touch throughout the lifecycle of an opportunities journey.

[Sign-up Flow dashboard](https://10ay.online.tableau.com/#/site/sourcegraphdemandgen/views/Sign-Upbutton/EventList?:iid=1) - A dashboard set up to track the impact of new CTA's to drive customers to conversion. Please watch associated [loom](https://www.loom.com/share/830115fa32ea4b0fabb873850f809417).

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
