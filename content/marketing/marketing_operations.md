# Marketing operations

## UTMs

All URLs used on external sites should contain UTM parameters for lead attribution. Any URLs built must be logged in the [UTM builder](https://docs.google.com/spreadsheets/d/1U0HRC5WVz3tsP6z9pqDLG8igTMSf2-pQGhbRoVn_iu0/edit#gid=0).

### HubSpot and UTMs

HubSpot automatically captures the parameter as long as the URL parameter name matches the HubSpot field name.

The forms that support UTM are:
- Request a demo form
- Request code change management demo
- Contact us form
- In-product request (enterprise) trial 

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

## Maintaining data pipelines

All major lead generation-related events (demo requests, webinars attended, created instances) are copied to a [Google Sheet](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit#gid=0) by way of Zapier. This requires all events to funnel to a [data pipeline HubSpot list](https://app.hubspot.com/contacts/2762526/lists?folderId=454) so the Zapier event can be triggered.

## CCPA/GDPR compliance

To delete a contact requesting to be deleted from our systems:

- Review our list of [data sources](https://about.sourcegraph.com/handbook/bizops#data-sources) and delete the contact from each source. 
- Take and log [screenshots](https://drive.google.com/drive/folders/1974oAceBuVXt-3a1ULI2LgBHk6gID-3V) in the [Data Protection Officer folder](https://drive.google.com/drive/folders/1974oAceBuVXt-3a1ULI2LgBHk6gID-3V) of attempt to find contact in the system. 
- Email contact from personal Sourcegraph email with the following `We have received your [CCPA|GDPR] request to be deleted from Sourcegraph systems. Your information has been permanently wiped from all our systems (screenshot attached), and as a result you will no longer receive any communications from us. [PERSONALIZED SENTENCE based on situation]`.  
