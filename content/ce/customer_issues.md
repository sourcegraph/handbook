# Filing customer issues

Read [the support overview](index.md) before filing an issue.

## Create a customer issue

Customer support tickets should be translated to GitHub issues when they require an engineering team to be involved. In such cases, [create a
new issue for the request](https://github.com/sourcegraph/customer/issues/new).

Provide the appropriate context and add a label with the affected customer as `customer/$name`. Once its created, sharing it with the required [team](routing_questions.md).
If necessary, link to the appropriate JIRA Service Desk ticket or [HubSpot](#find-the-unique-company-url) notes.

### General issues

General issues are those that affect more users than those of a particular deployment. In such cases, create a [new issue for the request](https://github.com/sourcegraph/sourcegraph/issues/new/choose) describing it. If there was a previous [customer issue](##create-a-customer-issue), please link the issue in its description.

Remove any potentially private information from this new issue (e.g. individual people's names, company names, self-hosted Sourcegraph URLs, repo names, screenshots, etc.)

## Find the unique company URL

Find the unique company URL by [searching for the company in HubSpot](https://app.hubspot.com/contacts/2762526/companies/list/view/all/?query=).

When you filter down and find the company, click on its name to see the company's page, and copy the URL (it should contain `/company/`).

It is encouraged to add a browser search shortcut for this to make it quick and easy to find the appropriate company URL in the future. For Chrome:

1. Visit chrome://settings/searchEngines
1. Click **Add**
1. Enter:
  - **Search Engine**: HubSpot search
  - **Keyword**: `hs`
  - **URL**: https://app.hubspot.com/contacts/2762526/companies/list/view/all/?query=%s
