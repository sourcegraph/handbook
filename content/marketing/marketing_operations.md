# Marketing operations

## Lead management

### Email-only leads from installations, signups, and NPS surveys

New leads with email-only from installations, signups, and NPS surveys will be enriched by Zoominfo.  Once a lead is enriched:

- With at least a last name, then the lead will sync to Salesforce (SFDC).
  - Company Name will be marked [not provided] by SFDC.
     Note: If Zoominfo found a last name, there's a high probability it will have the first name too.

- With company only, then the lead will sync to SFDC
  - Name (first and last) will be marked [not provided] by SFDC.
      
- With no first, last, and company names, the lead will remain in Hubspot for further nurturing (* please suggest any handling of these email-only records)

### Nurture process of new leads from installations, signups, and NPS surveys

- Signups to Sourcegraph Cloud, will be nurtured by Hubspot workflow: WF EMAIL Inbound Lead Automation 
- Server admin and NPS survey leads will go to Sales development representatives (SDRs) for initial outreach  

## Marketing attribution

### UTMs

All URLs used on external sites should contain UTM parameters for lead attribution. Any URLs built must be logged in the [UTM builder](https://docs.google.com/spreadsheets/d/1U0HRC5WVz3tsP6z9pqDLG8igTMSf2-pQGhbRoVn_iu0/edit#gid=0).

### HubSpot and UTMs

HubSpot automatically captures the parameter as long as the URL parameter name matches the HubSpot field name.

The forms that support UTM are:

- Contact us
- Request a demo or enterprise trial 
- In-product request (enterprise) trial 
- Request a PDF

The parameters that our HubSpot workflows support are `utm_campaign`, `utm_source` and `utm_medium`. Tag @ericbm in #marketing if more parameters are needed. 

[Workflows](https://app.hubspot.com/workflows/2762526/flow/9011999/edit) are set up in HubSpot to capture the latest conversion information, and copy this information to the ‘First event’ fields if they are blank and unknown.

| First event field names   | Latest event field names | Example               | Notes                                                                                                     |
|---------------------------|--------------------------|-----------------------|-----------------------------------------------------------------------------------------------------------|
| First converting campaign | utm\_campaign            | 2019ebook\_searchcode | Specific campaign within marketing channel                                                                |
| First converting medium   | utm\_medium              | paid                  | Marketing channel                                                                                         |
| First form conversion     | Form submission source   | Request a demo form   | Form submitted                                                                                            |
| First source              | utm\_source              | stackoverflow         | Referring site                                                                                            |
| First converting date     | utm\_date                | 2020\-01\-01          | Date at which the user submitted the form                                                                 |
| gclid                     | gclid                    | TeSter\-123           | Google Click ID that syncs data between Google Ads and Analytics\. Only a contact’s first gclid is stored |

## Creating email lists

There are many contacts in HubSpot that have not opted into marketing emails. For example, if an email to a prospect's procurement department is logged in HubSpot, we should not be sending Sourcegraph communications to them. All email lists need to be built from the "ground up". What does this look like in practice?

**Good**: List = Instance admins + demo requesters + NPS responders<br/>
**Bad**: List = All contacts - outbounded contacts - unsubscribed contacts - instance admins

Let BizOps know in #marketing if you'd like a second set of eyes on any email lists. 

## Maintaining data pipelines

All major lead generation-related events (demo requests, livestream registrations, created instances) are copied to a [Google Sheet](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit#gid=0) by way of Zapier. This requires all events to funnel to a [data pipeline HubSpot list](https://app.hubspot.com/contacts/2762526/lists?folderId=454) so the Zapier event can be triggered.

## CCPA/GDPR compliance

To delete a contact requesting to be deleted from our systems:

- Review our list of [data sources](https://about.sourcegraph.com/handbook/ops/bizops#data-sources) and delete the contact from each source. 
- Take and log [screenshots](https://drive.google.com/drive/folders/1d0X0y2a5W6X8Vot6n26XtAKAGrdG2_a5) in the [Data Protection Officer folder](https://drive.google.com/drive/folders/1d0X0y2a5W6X8Vot6n26XtAKAGrdG2_a5) of attempt to find contact in the system. 
- Email contact from personal Sourcegraph email with the following `We have received your [CCPA|GDPR] request to be deleted from Sourcegraph systems. Your information has been permanently wiped from all our systems (screenshot attached), and as a result you will no longer receive any communications from us. [PERSONALIZED SENTENCE based on situation]`.  

## Marketing definitions

### Contact
A person, identified by an unique email address, that is associated with a Salesforce account

### Lead
A person, identified by an unique email address, that has no known relationships with a Salesforce account

### Account
A company record which may include one or more contact records.

### [Influential developer](personas.md#influential-developer)

See the "[Influential developer](personas.md#influential-developer)" persona.

### [Personas](personas.md)

See "[Personas](personas.md)" for the full list of personas we're targeting.

### Inquiry

An inquiry is a person who has requested information from Sourcegraph for the first time and has provided Sourcegraph with at least an email address*. This may be online via a web form, or in person, for example, at a conference. 

\* [Specific email domains](https://app.hubspot.com/property-settings/2762526/properties?action=edit&property=inbound_scoring_qualification&search=inbou&type=0-1) are excluded.

### Interesting inquiry

Any inquiry that is:

- A person who works for a company with > $50M in revenue
- A person who works for company with > 250 engineers
- A person who fills out a Contact or Demo request

## Technology stack

### Demand generation

- [Hubspot](https://app.hubspot.com/reports-dashboard/2762526/view/144686)
- [Salesforce](https://sourcegraph2020.my.salesforce.com/)
- Zoominfo

### Analytics 

- Google Analytics
- Google Data Studio
- Looker

### SEM and Social advertising

- Google Ads
- LinkedIn Ads
- Microsoft Advertising

### SEO tools

- Google Optimize
- Moz Pro
- Ubersuggest
- CrazyEgg

### Design and miscellaneous web apps

- Adobe CC
- Figma
- Bit.ly
- Eventable
- Zapier

### Website infrastructure

- Github
- Gatsby
- Netlify
- Visual Studio Code
- Google Search Console
- Google Tag Manager
- Cookiebot

### Media/content storage

- Google Cloud Storage
- [YouTube](https://www.youtube.com/channel/UCOy2N25-AHqE43XupT9mwZQ)
- [Vimeo](https://vimeo.com/sourcegraph)
