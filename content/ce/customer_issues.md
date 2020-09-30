# Filing customer issues

Read [the support overview](support.md) before filing an issue.

## Create a customer issue

We maintain two issue trackers:

1. [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/issues) for public issues (where any private prospect or customer information must be redacted)
1. [sourcegraph/customer](https://github.com/sourcegraph/customer/issues) for private issues that only Sourcegraph teammates can see

Support tickets should be translated to GitHub issues when they require an Engineering team to be involved. See the [CE to engineering issue handover documentation](ce_to_eng_handover.md) for more.

File a new issue in the [private issue tracker](https://github.com/sourcegraph/customer/issues/new) if you need to post private information (such as screenshots, logs, or conversation transcripts) or in the [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues/new/choose) if the issue can be generalized. 

Post in the public tracker by default, but be sure to remove company names and any private information!

Link to the appropriate Jira Service Desk ticket and link to the reporting company's profile in [HubSpot](#find-the-unique-company-url).

## Find a company's HubSpot URL

We use links to company profiles on HubSpot (which only Sourcegraph teammates have access to) to anonymously link issues filed on our public GitHub issue tracker to our prospects and customers. [See all issues currently filed that are associated with a company by searching for our HubSpot account URL prefix](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+https%3A%2F%2Fapp.hubspot.com%2Fcontacts%2F2762526%2F+).

Find a company's HubSpot URL by [searching for the company in HubSpot](https://app.hubspot.com/contacts/2762526/companies/list/view/all/?query=).

When you filter down and find the company, click on its name to see the company's page, and copy the URL (it should contain `/company/`).

It is encouraged to add a browser search shortcut for this to make it quick and easy to find the appropriate company URL in the future. For Chrome:

1. Visit chrome://settings/searchEngines
1. Click **Add**
1. Enter:
  - **Search Engine**: HubSpot search
  - **Keyword**: `hs`
  - **URL**: https://app.hubspot.com/contacts/2762526/companies/list/view/all/?query=%s
