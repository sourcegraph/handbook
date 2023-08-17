## Background:

The extension team within Sourcegraph’s cloud organization was working on a feature called Browser Extension fallback to Sourcegraph.com (GitHub: link).

Our goal is to create useful extensions for Sourcegraph users, whether they are using on-prem enterprise instances or Sourcegraph.com. Recently, we launched a new version of the Chrome and Firefox extension (version 21.10.15.1603) which introduced a bug that resulted in the Chrome and Firefox extensions defaulting to Sourcegraph Cloud, rather than checking on-prem.

No other information (class names, source code, etc) was sent or logged in Sourcegraph.com databases. Cloud users had no way to access this information; the information is only available to a limited set of Sourcegraph employees with certain database and log access.

The latest version (21.10.21.1959) was released on 2021-10-21 with the bug removed. On 2021-10-21 at 21:00 UTC, we identified a bug in our code that caused us to send private repository names to our sourcegraph.com instance logs.

As of 2021-10-29, all logs on Sourcegraph systems have been purged.

We are working with our 3rd party providers (Sentry, Honeycomb, Grafana Cloud, and GCP) to have them purge logs in advance of our normal log rotation schedule. If you would like to be notified when this purge is complete, please let us know by emailing support@sourcegraph.com.

## Looking Forward

We are committed to learning in an open and transparent way from this incident. Below are steps we are committed to taking as a direct result of this incident.

#### Immediate Reaction:

- Purge all Sourcegraph Cloud logs; Completed as of 2021-10-29.
- Commit to purging logs captured by any tools that may have stored the data, including 3rd party services (Sentry, Honeycomb, Grafana Cloud). Internal logs stored in GCP buckets will also be purged. If you would like to be notified when this purge is complete, please let us know by emailing support@sourcegraph.com.

#### Engineering Processes:

- Introduce a rollout process for our extensions (browser, IDE, etc). This process is defined for [our core-sourcegraph releases](../../../../product/process/gtm/rollout_process.md), but not yet defined for extensions.
- Create a privacy working group within Sourcegraph to identify additional measures our teams can take to ensure the privacy of our customers is maintained.
- Introduce security and privacy trainings for all new and existing engineers at Sourcegraph.
- Log extension versions so an admin can easily determine which user is using what version

#### Engineering Tooling/Testing:

- Write pre-release testing to verify that outgoing network requests do not contain private repo names (or any other data as listed in [our privacy docs](https://docs.sourcegraph.com/integration/browser_extension#privacy)) from a sandbox.

## Frequently Asked Questions (FAQ)

In an effort to be open and transparent, we are publishing answers to commonly asked questions from our enterprise customers here. We will continue to update this page as additional questions arise.

**Was this just private repo names from GitHub.com or did it also include usage in GitHub Enterprise?**
It also included GitHub Enterprise.

**I've checked managed Chrome instance logs, and it would appear nobody from our team has updated their browser extension since 2021-10-15. Does that mean we're unlikely to be impacted?**
Correct, you were not impacted.

**Can we see a snippet of the logs so we have proof of what you describe as the impact?**
We can provide an example if this is helpful for you. Please email support@sourcegraph.com.

**Is there any way for an admin to tell if and who is using the browser extension?**
Yes. Your IT team can identify users with affected version and force upgrade the extension ([instructions](https://support.google.com/chrome/a/answer/7679871?hl=en&ref_topic=9023448)) to the latest (version 21.10.21.1959). If needed, here are [the instructions](https://support.cloudhq.net/how-to-manually-update-chrome-extensions/) for users to update manually.

**Can admins disable users’ ability to use the extension?**
Yes. Here are [the instructions](https://support.google.com/chrome/a/answer/9296680?hl=en&ref_topic=9023098) if you want IT to forbid using the extensions.

**Can I get a list of my repos that were exposed?**
We wish we could provide this to provide complete transparency of impact. However, due the volume of logs, we opted to sacrifice visibility of the exposed information and orient toward purging logs as quickly as possible.

**What actions would cause repository names to get logged?**
If a user had the affected version of the extension installed, any repository they visited would have been logged.
