# Marketing Operations

The Marketing Operations Team at Sourcegraph is focused on the mechanics of how we find and track our end users and customers. We are a subset of the Demand Generation team that oversees the MartTech stack, corporate email marketing strategy, lead management, and marketing analytics. We take on the technical work of maintaining systems across the marketing department to ensure our results are scalable and repeatable. Our goal is to make sure the systems support the strategy!

If you need to reach us regarding anything mentioned on this page, you can tag @marketing-operations on slack and someone from the team will jump in to assist you!

## MarTech Stack

As a marketing organization we’re always implementing new technologies so we can be sure we’re staying on top of the latest trends. Please see the [attached google sheet](https://docs.google.com/spreadsheets/d/1GLpfnwF6QxutxEvLtiorgfFUyHtPbMbzDFiYQ_pjU8c/edit?usp=sharing) to learn about the technologies we have in place today. Martech login details can be [found here](https://docs.google.com/spreadsheets/d/1LhvprlawDG2sNa_ozO_BBQWroOropudoyVVRiqhBNLo/edit#gid=274864472).

## Lead Management

This section encompasses how marketing qualified leads inbound as well as how we manage the lead lifecycle in partnership with Sales Operations.

### Lead Creation

Marketing leads inbound in the following ways:

#### Contact Us Forms:

- [Sourcegraph - Contact us to learn more about Sourcegraph enterprise](https://about.sourcegraph.com/contact/request-info/?form_submission_source=pricing-enterprise)
- [Sourcegraph - Talk to a product specialist](https://about.sourcegraph.com/contact/sales)

#### Demo Forms:

- [Sourcegraph - Schedule a Batch Changes demo](https://about.sourcegraph.com/contact/request-batch-changes-demo/)
- [Sourcegraph - Schedule a Sourcegraph demo](https://about.sourcegraph.com/contact/request-demo/)

#### Big Code Survey:

- [The Emergence of Big Code - download the free report](https://info.sourcegraph.com/emergence-of-big-code-2020-survey)

#### Product (Private Install or Sourcegraph.com Account Sign Ups) Email- Only Leads\*

\*(Backend web code set up by BizOps/CustomerOps passes prospect email address and tracking/sourcing data via API key from the product into Hubspot)

- Private/Local Install
  This lead is created when a prospect copies and pastes the code from the “Search Your Own Code” CTA on the “Get Started” page and runs it on their machine, we capture an email address and share it with sales.
- Sourcegraph.com Account (Cloud)
  This lead is created when a prospect clicks on our CTA that says “Try Sourcegraph Cloud now” from the about.sourcegraph site. They are then taken to our product which is sourcegraph.com/search. If they click “Sign Up” on the top right of that page and create an account, we capture an email address and share it with sales.

### Lead Qualification by Intent Score

The activities above automatically generate leads. However, we also have a scoring model that takes into account prospects who interact with landing pages and other marketing content. If a prospect interacts with Sourcegraph in multiple places, you may also see them score enough to trip the marketing qualified/intent threshold and be passed to the inbound SDR team. We also apply scoring when actions are taken within the product. When someone trips a threshold for product actions they are considered a product qualified lead.
You can see the specifics of our intent and product lead scoring in our working [lead scoring model here](https://docs.google.com/spreadsheets/d/1mAa2bueT8BrVjd5H5PQjKb7QMVFYObHYwg18ox02vsk/edit#gid=0) .

### Lead Lifecycle

Marketing Operations is currently partnering with sales to implement a lead lifecycle program. Once the details are finalized, we will be updating this section.

## Hubspot

Hubspot is our marketing automation tool. It’s where we run all our email marketing campaigns, track engagement, score marketing qualified leads, and manage parts of the lead lifecycle from. Our goal is to keep this system aligned with Salesforce so that we’re staying current with processes to support the sales cycle.

### Hubspot Access

Most everyone at the organization has access to Hubspot. If you do not and you would like access, you can reach out to [Greg Bouton](mailto:greg.bouton@sourcegraph.com). Alternatively, if you have a user seat, but are having difficulty completing an action due to your user role/permissions you can reach out as well.

### Hubspot Roles

Hubspot Roles have been created to standardize company-wide access, as well as to ensure that all users have appropriate access to Hubspot. Below is an overview of the Roles. Please reach out to [Greg Bouton](mailto:greg.bouton@sourcegraph.com) if you think your role needs to be changed.

- Super Admin: Unlimited access to our Hubspot instance.
- Standard Admin: Pared-down admin access to our Hubspot instance. Ability to change Hubspot settings, import data, bulk delete, and edit/delete workflows has been disabled.
- User - Edit Access: Basic access to our Hubspot instance with added ability to edit objects, export data, create forms/lists/files, read/write ads, campaigns, blogs, landing pages, and URL redirects, and create/edit reports.
- User - Read Access: Basic 'read only' access to our Hubspot instance.

As we continue to grow, users will also be added to our Hubspot instance. In order to keep a level of consistency, roles will be automatically assigned to teams. If a member of the team needs to have upgraded access, please reach out to [Greg Bouton](mailto:greg.bouton@sourcegraph.com).

- People Ops: User - Read Access
- Product: User - Edit Access
- Engineering: User - Edit Access
- Customer Support: User - Read Access
- Customer Engineering: User - Edit Access
- Marketing: User - Edit Access
- Sales: User - Read Access
- Talent: User - Read Access
- Operations: User - Read Access

### Request for Email Send via Hubspot

If you are interested in getting an email sent through Hubspot to existing opt-in email addresses, please be sure to fill out our [Hubspot Email Send Request Form](https://form.asana.com?k=_YtJFC_Eo-NG8iOSEdNgVA&d=7195383522959). Once we receive your request, we will assess our email send schedule to see if we can accommodate your request and provide options and recommendations if it is a request that cannot be accommodated.

### Hubspot Integrations

- Salesforce: This is how we pass lead and marketing data over to the sales organization.

- Postal.io: This account-based marketing tool is how we send gifts and mailings out to prospects. The integration with Hubspot allows us to automate email messaging workflows before or after gifts are sent or received. Today, we are not running any automated email messaging via this integration.

- Triblio: This account-based marketing tool is how we target specific accounts for digital advertising. The integration with Hubspot allows us to create target lists within Hubspot and share them with Triblio.

- Typeform: This marketing tool is how we create forms, surveys, and quizzes for our prospects. The integration with Hubspot allows us to send prospect answers and data into fields in Hubspot. Setting up this data flow lets us capture important information about our prospects, increase their intent scores based on responses, and surface important prospect responses to Sales when appropriate. As long as your Typeform asks for a person's email address, we can send responses to Hubspot. Reach out to us if you are interested in integrating forms, surveys, or quizzes with Hubspot.

- Orbit: This marketing tool is how we understand our community's interactions with Sourcegraph. The integration with Hubspot allows us to create user activities in Orbit when community members take specific actions. Today, anytime someone submits their information on our [Dev Tool Time page](https://info.sourcegraph.com/dev-tool-time), an activity is created for that person in Orbit.

### Hubspot Technical Resources

Hubspot is a fluid system, where we are always making updates to continue to improve our processes. Here are a few places you can go to review technical updates the marketing operations team is making within the system:
[Marketing/Hubspot Documentation](https://docs.google.com/document/d/1rJ9dmicBH160yQBRblsPMv0k-Hetp4O-_RQUyHrmvKA/edit?usp=sharing)

### Hubspot and UTM parameters

The parameters that [HubSpot supports out of the box](https://knowledge.hubspot.com/settings/how-do-i-create-a-tracking-url) are `utm_campaign`, `utm_source`, `utm_medium`, `utm_term`, and `utm_content`.

First Touchpoint is a custom marketing field we have created in Hubspot.. This fields help us determine the first touches marketing has with a prospect. There are supporting
[Workflows](https://app.hubspot.com/workflows/2762526/flow/9011999/edit) set up in HubSpot to capture the latest conversion information, and copy this information to the ‘First event’ fields if they are blank/ unknown.

### Hubspot User Data Deletion (GDPR requests, etc.)

Sometimes prospects and customers will ask us to delete their email address and data because they want it done, or as part of GDPR compliance. We take these requests seriously, and you can read more about how we process these requests over in [this section of the handbook](https://handbook.sourcegraph.com/support/permanently_deleting_user_data).

### Dashboards and Marketing Analytics\*

\*Of note, these are directional reports. Any organization-wide reports are done by BizOps and Finance.

We are actively working on creating reports in the following tools. As soon as these are live, we'll be providing links to the reports.

- Salesforce
- Google Analytics
- Looker

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
