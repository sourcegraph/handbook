## Google Analytics (GA)

We use Google Analytics on our marketing site to capture high-level aggregated usage data and traffic. We can measure things like overall traffic, [traffic by country](https://analytics.google.com/analytics/web/#/report/visitors-geo/a40540747w150533180p155508056/), [referral sources](https://analytics.google.com/analytics/web/#/report/trafficsources-overview/a40540747w150533180p155508056/) etc. We also have [Goals](https://analytics.google.com/analytics/web/#/a40540747w150533180p155508056/admin/goals/table) set up so that we can measure basic [website conversion performance](https://analytics.google.com/analytics/web/#/report/conversions-goals-overview/a40540747w150533180p155508056/_u.date00=20210101&_u.date01=20210309/). We sync basic traffic data to BigQuery.

GA integrates closely with Google Ads/AdWords. Google Ad performance is determined by the number of users who click an ad and convert via a goal we define in GA.

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

This list of account is automatically populated from salesforce by Zapier [automation](https://zapier.com/app/zaps/folder/1166872). @malomarrec maintains this, please reach out if you notice an issue.

### How to find all tickets related to a customer

A benefit of using GitHub issues for referencing customers is that all GitHub issues linked to an account will automatically appear in the account issue:

<img width="1187" alt="account_issue" src="https://user-images.githubusercontent.com/25070988/133835706-8dbb1497-e94a-4e63-acab-40be36b2fdde.png">

## Addendum

See [here](index.md) for info on other tools.
