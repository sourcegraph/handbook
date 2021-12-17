# Internal Security

One of Sourcegraph's top-level principles is to keep our customers data private and secure . In the same way, maintaining the integrity and security of our
internal data, employee information, and systems, is critical.

To do that, we need to keep some basic security best-practices in mind:

## Phishing/Spoofing

Sourcegraph uses Google Workspace (Gmail) to host and manage all incoming and outbound email.

Gmail spam filters automatically move spam email messages into users’ spam folders or Gmail’s quarantine feature. Sourcegraph employees will receive an alert when opening an email that may have suspicious attachments or triggers Google Workspace’s spam alerts.

Enabled Spam Alerting features

**Enhanced pre-delivery message scanning** - This enables improved detection of suspicious content prior to delivery

**Attachments** - Additional protection against suspicious attachments and scripts from untrusted senders. Includes protection against attachment types that are uncommon for your domain—these can be used to spread malware.

**Links and external images** - Identify links behind short URLs, scan linked images for malicious content, and display a warning when you click links to untrusted domains.

**Spoofing and Authentication** - Protection against spoofing a domain name, employee names, email pretending to be from your domain, and unauthenticated email from any domain. Unauthenticated emails display a question mark next to the sender’s name.

**Tech Ops Spam Procedures**

In addition to the settings outlined above, Sourcegraph recipients are also able to report suspected spam to their Google Workspace Admin.

If a message is reported as spam, the Sourcegraph Tech Ops team will evaluate the reported message and add the sender to the Google Workspace list of “**Blocked Senders**”. This will prevent any further messages from that account from reaching the Sourcegraph domain.

## Password Requirements

Keep in mind that the passwords we choose contribute to the security of our Sourcegraph-managed systems and data. In addition to being users, many of us are also Administrators so it is especially important to be thoughtful when selecting a password.

Here is some guidance for setting passwords to Sourcegraph-managed accounts. These are strongly recommended and will be enforced at the organizational level when available.

Do not:

- Use a password that is the same or similar to one you use on any other websites
- Use a single word, for example, **password**, or a commonly-used phrase like **Iloveyou** or a string of numbers/letters, such as **abc123**
- Use identifiable information about yourself, such as the names and birthdays of your friends and family, your favorite bands, or phrases you tend to use
- Mix personal and work-related passwords

Do:

- Create a new password for every system - the primary goal is password diversity
- Make passwords hard to guess, even by those who know a lot about you.
- Use a mix of numbers, letters (upper and lower case), and special characters but you don’t have to use them all
- Make passwords complicated enough to need the use of a password manager (we use [1Password](https://about.sourcegraph.com/handbook/people-ops/onboarding/general_onboarding#account-setup))
- Create a password that is ideally 14 characters long
- We recommend using a passphrase or sentence so it’s easier to remember and meet the above requirements! Example: HungryAnteaterAte1400Ants!

## JAMF Policy

We want all teammates who have Sourcegraph **Apple devices** to have their devices set up on Jamf Now. This way, in cases where a device is lost/stolen, we would have ability to wipe it remotely. (Jamf Now will only be used in these types of emergency circumstances.)

1. Set Jamf up on your computer: Visit https://sourcegraph.jamfcloud.com and use the following access code: 121200 to get it set up on your device

## Zoom Retention Policy

Sourcegraph will institute a 30-day Zoom cloud storage retention period. All Zoom recordings older than 30 days will be placed in the meeting host’s trash for an additional 30 days. After 30 days, the recordings will be permanently deleted. Due to issues of privacy and compliance, Zoom recordings should only be downloaded and kept beyond 30-days if there is an explicit business use for doing so. In the event that you need to download and store Zoom recordings Sourcegraph’s Google Drive should be used as the default location
