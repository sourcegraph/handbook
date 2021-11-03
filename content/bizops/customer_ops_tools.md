# CustomerOps tools overview

An overview of the tools we use for CustomerOps, with some useful links.

## HubSpot

Hubspot is a customer relationship management (CRM) software. We use HubSpot primarily for marketing operations. Any marketing activity that generates leads will funnel leads into HubSpot. In order to capture these leads, we embed HubSpot forms onto our marketing websites (about.sourcegraph.com, info.sourcegraph.com), and use HubSpot landing pages.

**[Contacts](https://app.hubspot.com/contacts/2762526/contacts/list/view/all/)**: all generated leads are turned into HubSpot Contacts.

- Built-in fields ([full list](https://knowledge.hubspot.com/contacts/hubspots-default-contact-properties)):

  - Basic contact info: Name, Email, Company, etc.
  - Original Source
  - First page seen

- Custom fields (some notable ones listed below):

  - First Touchpoint
  - First Source URL
  - Anonymous User ID
  - Is Server Admin
  - NPS score

- Contacts are created when users sign up on Cloud, install an instance, fill out one of our forms, or speak to a sales rep.

**[Forms](https://app.hubspot.com/forms/2762526)**: all forms you see on our marketing websites are HubSpot forms. Whenever a user fills out a form, a Contact record is created in HubSpot.

- [Demo request form](https://app.hubspot.com/forms/2762526/310000a0-2b6b-4da2-89e9-2be930a8a298/performance)

- There are some in-product forms, like the [Happiness survey](https://app.hubspot.com/forms/2762526/417ec50b-39b4-41fa-a267-75da6f56a7cf/performance)

**[Landing pages](https://app.hubspot.com/website/2762526/pages/landing)**: we use landing pages for some marketing campaigns. Landing pages usually include a form.

- eBook landing page ([HubSpot config](https://app.hubspot.com/content/2762526/edit/25681347967/content)): [https://info.sourcegraph.com/universal-code-search-ebook-req](https://info.sourcegraph.com/universal-code-search-ebook-req)

**[Emails](https://app.hubspot.com/email/2762526/manage/state/all)**: automated emails and email campaigns are run via HubSpot. We can create "Smart lists" of contacts to send emails to.

**[Integrations](https://app.hubspot.com/integrations-settings/2762526/installed)**: connect HubSpot with other tools. For example, we have a ZoomInfo integration that will enrich Contact fields with ZoomInfo data if available. The most critical integration is the Salesforce integration, which sends contact data between HubSpot and Salesforce.

**[Workflows](https://app.hubspot.com/workflows/2762526)**: a way to automate tasks. We use workflows heavily to update custom fields in Contact records. They’re also able to update customer records (e.g. ZoomInfo) or update data in other tools (e.g. Salesforce campaigns) via our integrations.

- [Update a Contact’s Original Source based on the First Source URL](https://app.hubspot.com/workflows/2762526/platform/flow/53778208/edit)
- [ZoomInfo field enrichment workflow](https://app.hubspot.com/workflows/2762526/platform/flow/37549333/edit)
- [Adding a Contact to a Salesforce campaign](https://app.hubspot.com/workflows/2762526/platform/flow/42642275/edit)

## HubSpot Data in Looker

We funnel some HubSpot data into Looker to analyze and visualize useful data. Currently, we only pull in NPS score data and contacts data. Since we’ve added some new fields (anonymous user ID, in particular), we have done and will do more analysis that combines HubSpot data with user data from Sourcegraph Cloud.

How to get data into Looker:

- Update relevant scripts in the [sourcegraph/analytics](https://github.com/sourcegraph/analytics) repository:

  - You may need to update or create a script to pull data from HubSpot. For example, the [Contacts script](https://github.com/sourcegraph/analytics/blob/master/HubSpot%20ETL/get_contacts.py) pulls Contact data.
  - Make sure the script to pull data is added to the [ETL script](https://github.com/sourcegraph/analytics/tree/master/HubSpot%20ETL)

- ETL script is run every 24 hours via this [Buildkite pipeline](https://buildkite.com/sourcegraph/analytics)
- Tables under hubspot in BigQuery database are updated: [HubSpot contacts table](https://console.cloud.google.com/bigquery?project=telligentsourcegraph&p=telligentsourcegraph&page=table&d=hubspot&t=contacts)
- Create a scheduled query that creates a table with the data you want: [first search by HubSpot Original Source](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/60fef56b-0000-21c2-996c-089e0826838c/runs?project=telligentsourcegraph)
- [Create a view in Looker from the BigQuery table](https://sourcegraph.looker.com/projects/sourcegraph_events/files/first_search_by_contact.view.lkml)

## Salesforce (SFDC)

Salesforce is also a CRM. This is what our sales team uses and relies on heavily, and is the source of truth for our customer interactions and data. Our marketing team uses this as well, in a limited capacity. The best people to speak to about Salesforce are Joe Kirsher (Sales Ops) and Seth Hoover (Salesforce Admin).

**Customer ops reporting in SFDC**

Given that go-to-market focused teams at Sourcegraph consider Salesforce to be the source of truth for all data pertaining to prospects and customers, we use this tool for virtually all customer ops reporting. Below, we elaborate on the key terms, definitions, and workflows pertaining to current lead, contact, opportunity, and customer reporting efforts that are not documented elsewhere in the handbook.

For additional color on how we use Salesforce at Sourcegraph, see this [page](../sales/salesforce.md).

**_Key Salesforce Objects_**

<table>
<tr>
<th>Salesforce Object</th>
<th>Description</th>
</tr>
<tr>
<td>Lead</td>
<td>

Leads are single individuals that have not been qualified, and therefore are not associated with an account or opportunity. In order for a lead to be converted into a contact, it must be associated with a specific account. A lead can only be converted into a contact, it cannot be both a lead and a contact.

It is important to note that Salesforce functionality limits connecting lead data to accounts. The only way to transfer data associated with a lead to a specific account is to first convert the lead to an account and contact (with or without an opportunity).

</td>
</tr>
<tr>
  <td>Contact</td>
  <td>Contacts are individuals associated with a particular account and, where possible, opportunity. Contacts can be added manually or converted from pre-existing leads. Contacts from each individual opportunity are aggregated at the account level.</td>
</tr>
<tr>
  <td>Account</td>
  <td>Accounts represent the ultimate parent organization of any set of related companies input into Salesforce. Accounts are created before opportunities and all opportunities must be associated with an account. By default, in Salesforce, lead objects are not associated with accounts. We utilize a custom automation which attempts to associate leads to the accounts they likely represent, but this automation does sometimes have errors.</td>
</tr>
<tr>
  <td>Opportunity</td>
  <td>When a lead has revenue potential, it is converted into an opportunity. Opportunities can also be created manually, without first requiring the conversion of a lead by navigating to the contact and creating a new opportunity from the related opportunities list.</td>
</tr>
</table>

**Attribution Reporting**

**_Lead Source_**

The Lead Source value in Salesforce is set based upon where the lead originated (and is not necessarily indicative of that lead being a marketing qualified lead or product qualified lead):

1. Inbound: lead source is set automatically based on the origination of the lead within the source system; this includes any inbound lead generated from a contact form, demo request, trial request, sourcegraph.com account setup, private install, etc. These leads are created in Salesforce through a Hubspot sync, where all newly added contacts in Hubspot become leads in Salesforce.
2. Outbound: lead source is set automatically when the SDR/AE creates the lead
3. Other sources (e.g., referrals, LeadIQ, etc.): lead source is set automatically based on the origination of the lead

**_First Touchpoint_**

First Touchpoint is a slightly more granular version of inbound Lead Source and is set automatically in Hubspot. It is used to reflect an individual’s first interaction with either Sourcegraph’s gated (i.e., email submission required) marketing content _or_ initial sign-up for the free product offering. While we also use cookies to track user behavior prior to email submission, First Touchpoint only reflects the original source of contact info collection by marketing.

Given that First Touchpoint is a marketing-owned field, it intentionally excludes attribution for any leads created through outbound efforts--in other words, if a lead is not inbound, First Touchpoint will remain uncategorized in both Hubspot and Salesforce unless this individual proceeds to submit their contact information through a Sourcegraph form following initial outreach.

While this ultimately manifests itself in lead reporting with material missing information when filtered by First Touchpoint, this is by design and can be supplemented by viewing First Touchpoint in conjunction with Lead Source. For example, a new lead in Salesforce originally reached through outbound prospecting with no subsequent interactions outside of back and forth emails would have an uncategorized First Touchpoint but “Outbound” for Lead Source, making it clear both where this prospect originated and their level of engagement with our site’s content.

**_Opportunity Source_**

Opportunities in Salesforce can be created either manually from scratch or from converting a lead. In the latter case, Opportunity Source is then populated in Salesforce based upon the following workflow:

1. An AE navigates to a lead in Salesforce and selects “convert”
2. They will then be asked to assign this lead to an account (which can be newly created or selected from pre-existing accounts)
3. This lead will then be automatically converted into a contact
4. The newly created opportunity will populate Opportunity Source to match the converted lead’s Lead Source with one important exception:
   1. If within 60 or fewer days prior to creation of the converted lead any pre-existing contact on the account selected to carry the new opportunity had a Lead Source reflecting outbound efforts (i.e., AE created or SDR created), the Opportunity Source will revert to taking that Lead Source in place of the source of the converted lead. This is to reflect a scenario that we frequently encounter where an SDR or AE will outbound prospect into a specific individual within a company, have no follow-up correspondence with that particular lead, but then receive an inbound inquiry (typically through completion of a marketing form or product sign-up) from a separate individual at the same company that heard about Sourcegraph from the lead originally contacted. Without this rule in Salesforce, we would materially undercount the impact of our outbound prospecting efforts while overstating the influence of marketing content on pipeline generation.
   2. Even with the above, we still retain data on the converted lead and where it was originally sourced - see the "Lead Source" field within an opportunities report.

**_Campaign Influence_**

While First Touchpoint offers a useful view into a lead’s first interaction with a marketing-owned contact form, it is inherently limited and does not show the full picture of any subsequent forms submitted by an individual (e.g., the First Touchpoint of someone that signs up for a cloud account and later submits a demo request would only reflect their account sign-up). To get around this, we can look at campaign influence in Salesforce, which lists out all marketing-owned form submissions to-date.

Campaign influence is relatively straightforward for individuals in Salesforce (simply pull a Campaigns with Campaign Members report in SFDC to see all form submissions) but becomes more complex for opportunities. In the above example where previous outbound SDR efforts drive an inbound lead, upon lead conversion, the contact form is credited as the primary marketing campaign, even though we credit the effort of the SDR driving that lead by marking the Opportunity Source as SDR Outbound. In a scenario where multiple individuals from the contact roles on an opportunity have been part of campaigns leading up to the opportunity, this becomes even more nuanced. Currently, any campaign which is associated with a contact in the 30 days preceding the date the opportunity is created will be referenced in the campaign influence for the opportunity.

Some useful marketing-related Salesforce links:

- [Marketing dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z3t000001BU2XEAW/view?queryScope=userFolders): the marketing team uses this as their source of truth for tracking marketing campaign success.
- [Salesforce campaigns](https://sourcegraph2020.lightning.force.com/lightning/o/Campaign/list?filterName=00B3t000008NLSaEAO): HubSpot leads get added to campaigns based on how they converted.

### Reporting & Dashboards:

- Understanding of Salesforce Objects
- Salesforce reporting is a great, functional tool but is only as powerful as the quality of data built into the platform
- This makes our goals of clear definitions and alignment around those definitions an incredibly important step 1

## Google Analytics (GA)

We use Google Analytics on our marketing site to capture high-level aggregated usage data and traffic. We can measure things like overall traffic, [traffic by country](https://analytics.google.com/analytics/web/#/report/visitors-geo/a40540747w150533180p155508056/), [referral sources](https://analytics.google.com/analytics/web/#/report/trafficsources-overview/a40540747w150533180p155508056/) etc. We also have [Goals](https://analytics.google.com/analytics/web/#/a40540747w150533180p155508056/admin/goals/table) set up so that we can measure basic [website conversion performance](https://analytics.google.com/analytics/web/#/report/conversions-goals-overview/a40540747w150533180p155508056/_u.date00=20210101&_u.date01=20210309/). We sync basic traffic data to BigQuery.

GA integrates closely with Google Ads/AdWords. Google Ad performance is determined by the number of users who click an ad and convert via a goal we define in GA. Talk to Lori (Digital Marketing) to find out more about Ads.

## Google Tag Manager (GTM)

[Google Tag Manager](https://support.google.com/tagmanager#topic=3441647) is a Tag Management System (TMS). A TMS lets you quickly add and update code snippets on your website for event measurement and analytics. It’s basically a way to add tracking + analytics without adding snippets of code directly to your website code, and do it all through the GTM user interface. For example, if you wanted to measure LinkedIn Ad conversions on your website, you’d need to add a code snippet directly into your website. Now, you can just do this through GTM’s interface without making code changes.

GTM lets us also run code snippets across all our marketing entities (info.sourcegraph.com, about.sourcegraph.com, etc.) and sourcegraph.com, which makes it useful for easily adding tracking code across all our sites.

Key concepts:

- **[Tags](https://tagmanager.google.com/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Ftag-manager%2F#/container/accounts/6000399571/containers/30433084/workspaces/66/tags)**: pieces of code that send info to different systems.

- **[Triggers](https://tagmanager.google.com/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Ftag-manager%2F#/container/accounts/6000399571/containers/30433084/workspaces/66/triggers)**: actions on our website that cause Tags to execute. You can easily define things like "when a URL containing ‘contact’ is visited", or “when a button that says ‘Sign Up’ is clicked”

We use Google Tag Manager to:

- track events on our marketing website and send them to Google Analytics, like all button clicks (the tag called "GA Event - about - buttons") and marketing content downloads (“GA Event - about - pdf download”).
- track actions on Sourcegraph Cloud like searches ("GA Event - sourcegraph.com - search")
- run small scripts to populate cookie variables on info.sourcegraph.com ("Populate info forms with anonymousUid and sourceURL)
- add conversion actions (i.e. actions that we want to measure as a conversion/success) for non-Google ads (e.g. LinkedIn and Bing)

## Linking to customer or prospect names in public places

It's often useful to include a customer or prospect name in a public RFC, GitHub issue, or other publicly-viewable place. In order to do so without leaking this information to the public, we use a [private GitHub repository](https://github.com/sourcegraph/accounts/issues) with issues representing customers. We don't use links to the salesforce account page because not all Sourcegraph team members have access to salesforce, whereas everybody has access to GitHub.

To use it, copy a link to the issue that represents the customer you want to reference. For example, if the customer was "Sourcegraph", you might write: "We heard from [this customer](https://github.com/sourcegraph/accounts/issues/8194) that...".

For now, the list of accounts is maintained manually by @malomarrec. In the near future it will be automatically populated from Salesforce.

### How to find all tickets related to a customer

A benefit of using GitHub issues for referencing customers is that all GitHub issues linked to an account will automatically appear in the account issue:

<img width="1187" alt="account_issue" src="https://user-images.githubusercontent.com/25070988/133835706-8dbb1497-e94a-4e63-acab-40be36b2fdde.png">

## Addendum

More useful links for the HubSpot to Salesforce integration:

- [HubSpot to Salesforce data flow spreadsheet](https://docs.google.com/spreadsheets/d/1Jw-t7y0Rmni-vR9gy28Ewy6IVzwu9JyJjW2pwDQOPJk/edit#gid=0)
- [Sync settings](https://app.hubspot.com/integrations-settings/2762526/installed/salesforce/syncsettings)
- [Marketing conversion actions spreadsheet](https://docs.google.com/spreadsheets/d/1tKRToLb2WRhVKJojTMQIj28TaLQfB58F57QQh5IICbU/edit#gid=0)
