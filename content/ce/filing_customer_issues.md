# Filing customer issues

Read [the support overview](index.md) before filing an issue.

## 1. Begin to create an issue

Customer support tickets should be translated to issues when they require a non-SWAT engineering team to own resolution. In such cases, create a new tracking issue for the request, and link to the company's anonymous HubSpot URL at the top:

>Requested by $COMPANY_URL

Do not use a custom markdown link for this. Link destinations are not searchable in GitHub issues—only the rendered text. Leaving the full URL visible in the text makes it possible to search a given company's HubSpot ID to find all issues related to them.

Or, if multiple companies have requested the same thing:

>Requested by:
> - $COMPANY_URL
> - $COMPANY_URL

## 2. Find the unique company URL

Find the unique company URL by [searching for the company in HubSpot](https://app.hubspot.com/contacts/2762526/companies/list/view/all/?query=). 

When you filter down and find the company, click on its name to see the company's page, and copy the URL (it should contain `/company/`).

It is encouraged to add a browser search shortcut for this to make it quick and easy to find the appropriate company URL in the future. For Chrome:

1. Visit chrome://settings/searchEngines
1. Click **Add**
1. Enter:
  - **Search Engine**: HubSpot search
  - **Keyword**: `hs`
  - **URL**: https://app.hubspot.com/contacts/2762526/companies/list/view/all/?query=%s

## 3. Post the issue

Finalize the issue by providing the appropriate context. Remove any potentially private information (e.g. individual people's names, company names, self-hosted Sourcegraph URLs, repo names, screenshots, etc.). If necessary, link to the appropriate JIRA Service Desk ticket or HubSpot notes.
