# Reporting a vulnerability

We at Sourcegraph value the security community and believe that responsible disclosure of security vulnerabilities in our product and tools helps us ensure the security and privacy of our users.

If you think that you have found a security or privacy vulnerability, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. We will reply to reports within 5 US business days to acknowledge that we received them, and will strive to send you regular updates on our progress until the issue is resolved. You may request an update by replying to the existing email thread. We will read, but may not respond to low quality or spammy reports (e.g. those produced by automated tooling). We welcome reports from everyone, including security researchers, developers, and customers.

### Bug bounty

We provide monetary rewards, from $50 to $10,000 USD, for security vulnerability reports. The actual reward amount is determined based on the number of customers impacted, the difficulty of exploiting the vulnerability, the severity of the consequences (e.g. service disruption, data leakage, reputational damage to Sourcegraph) of a successful exploit, and the quality of the security report.

When a monetary bounty is presented, eligible reports will be based on the severity, as determined by [CVSS v3.1](https://www.first.org/cvss/calculator/3.1). We will send payment to a valid PayPal account. We will ask you for the name and country associated with your PayPal account.

**Safe Harbor**

Sourcegraph commits to not pursuing legal action against researchers for actions conducted according to our policies and within the declared scope.

**Scope**

The following products and deployments are within scope for our Bug Bounty program:

- Sourcegraph Cloud deployment: sourcegraph.com
- Sourcegraph source code: https://github.com/sourcegraph/sourcegraph
- Sourcegraph CLI: https://github.com/sourcegraph/src-cli
- Sourcegraph browser extension: https://github.com/sourcegraph/sourcegraph/tree/main/client/browser
- Sourcegraph extensions developed by Sourcegraph: https://sourcegraph.com/extensions?category=All&query=Sourcegraph

The following targets and actions are out-of-scope:

- Sourcegraph domains not listed in the in-scope section
- Social engineering against Sourcegraph users and employees
- Denial of Service
- Credential Stuffing
- SPF/DMARC reports
- Spamming

**Categories**

| Attack Outcome                                            | Maximum Payout |
| :-------------------------------------------------------- | :------------: |
| You read or write to another user's code                  |    $10,000     |
| You take over another user's account                      |     $5,000     |
| You gain access to the internal Sourcegraph cloud network |     $2,500     |
| You gain access to another user's configurations          |     $2,000     |
| You find a misconfiguration that can lead to an exploit   |      $500      |

**Timelines**

All timelines below reflect US business days.

| Type of response                             |                                  Time to response                                  |
| :------------------------------------------- | :--------------------------------------------------------------------------------: |
| First response                               |                                       5 days                                       |
| Time to initial investigation and assessment |                                      10 days                                       |
| Time to bounty determination                 |                                      20 days                                       |
| Time to resolution                           |                         depends on severity and complexity                         |
| Time to payment                              | 90 days from the original report, or after confirmation of fix, whichever is first |

### Eligibility

We may choose to not issue a reward if any of the following apply:

1. You engage in disruptive behavior on sourcegraph.com itself (e.g. spamming our system with requests, fake accounts, denial of service). Sourcegraph is [open source software](https://github.com/sourcegraph/sourcegraph), so you can [install a copy yourself](https://docs.sourcegraph.com/#quickstart-guide) and test against that instead.
1. You report an already reported bounty, or one already in our roadmap.
1. You publicly disclose a vulnerability before we confirm that it is OK to do so. We want to give our customers time to upgrade to a patched version before public disclosure.
1. You report a vulnerability on an archived project. If a project is archived, that means it's unmaintained, and will not be updated.
1. You spam us with duplicate and/or low quality vulnerability reports (e.g. copy/pasting generic issues from automatic scanning tools).
1. You are a current or former teammate at Sourcegraph (e.g. employee, contractor, intern).
1. You are friends or family with a current or former teammate at Sourcegraph.
1. You are a resident of, or make your Submission from, a country against which the United States has issued export sanctions or other trade restrictions (e.g., Cuba, Iran, North Korea, Sudan and Syria);
1. You are in violation of any national, state, or local law or regulation;
1. You are less than 14 years of age. If you are at least 14 years old, but are considered a minor in your place of residence, you must get your parent’s or legal guardian’s permission prior to participating in the program.

### Submission requirements

For all submissions, please include:

1. A full description of the vulnerability being reported. This includes the exploitability and impact.
1. An explanation of all steps required to reproduce the vulnerability. This may include any or all of the following:
   1. Exploit code
   1. Screenshots
   1. Videos
   1. Traffic logs
   1. Complete web and API requests and responses
   1. Email address, or IP address used during testing

## How we respond to security vulnerability reports

When we receive [a report of a security vulnerability](#submission-requirements), a member of our security team determines if a reported vulnerability should be investigated by an engineer.

- If so, a member of our security team will [file a vulnerability report in sourcegraph/security-issues](https://github.com/sourcegraph/security-issues/issues/new/choose) and follow the checklist in the issue template.

- If not, a member of our security team will respond to the report to notify the reporter why we are not acting on the report.

## How we disclose security vulnerabilities

_*This policy is currently under review and will be updated by 31/10/2021*_

For every confirmed vulnerability in Sourcegraph or its products, regardless of severity, the Security team will:

- Create a security advisory describing the vulnerability, impact to users and remediation. We currently publish GitHub Security Advisories in our GitHub repositories.
- Request a CVE ID for each vulnerability.
- Update the CHANGELOG with a reference to the CVE and advisory.
- Inform the security updates mailing list.
- Coordinate upgrades with customers for HIGH/CRITICAL issues.

If you find any past Sourcegraph vulnerabilities that were not disclosed this way please let us know.

### Using the security updates mailing list

When a new security update is published on Github, a notification email will be sent out to our [Subscription- Sourcegraph Security Notifications list](https://app.hubspot.com/contacts/2762526/lists/1091?query=subscription). To send new emails to the mailing list:

1. Log into [Hubspot](https://app.hubspot.com/reports-dashboard/2762526/view/276356), head over to the Marketing tab and select `Email` from the dropdown.
2. Once on the [Email section of Hubspot](https://app.hubspot.com/email/2762526/manage/state/all?search=security), search for “security” and it should pull up a previously sent security update.
3. Hover over the email and click on `Clone`:
<div style="text-align: center; margin-bottom: 1rem">
  <img src="https://storage.googleapis.com/sourcegraph-assets/security-hubspot-instructions-1.png" width="150%" alt="Hubspot instructions for the security mailing list">
</div>
4. On the Edit tab:

- Update the internal name of the email so that it has the name of the update included in the name (highlighted below), including the CVE-ID
<div style="text-align: center; margin-bottom: 1rem">
  <img src="https://storage.googleapis.com/sourcegraph-assets/security-hubspot-instructions-2.png" width="150%" alt="Hubspot instructions for the security mailing list">
</div>
- Update the email copy to include the message you’d like to send. If you want to add a link, click on the insert link button in the editing tools section.
<div style="text-align: center; margin-bottom: 1rem">
  <img src="https://storage.googleapis.com/sourcegraph-assets/security-hubspot-instructions-2.png" width="150%" alt="Hubspot instructions for the security mailing list">
</div>

5. On the Setting tab:

- From name: `Sourcegraph Security Team`
- From address: `security@sourcegraph.com`
- Subject Line: `Sourcegraph Security Update - CVE-{CVE-ID}`
- Preview text: Optional
- Internal name: same as step 4.
- Language: `English`
- Subscription type: `Sourcegraph Security Notifications`
- Office location: `Sourcegraph (default)`
- Campaign: `Security Team Update`

6. On the Send or schedule tab:

- Send to\*: `Subscription- Sourcegraph Security Notifications`
- Don’t send to: `Subscription- Marketing Email | Champions Communications`, `and `LST EML | Staff, non-core, opted out`
- Select if you want to send the email out now, or if you want to schedule it for another time
