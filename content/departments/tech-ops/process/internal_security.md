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

## Laptop Setup Standards

Below is a list of steps to ensure security and compliance for Sourcegraph devices. When setting up your Sourcegraph device please ensure the following steps have been completed.

1. Create a complex laptop password that meets our password requirements below.

2. Encryption is enabled on your device. Below are links to steps on how you can turn on device encryption for MacOS and Windows.

- [Enabling Filevault Encryption on Mac](https://support.apple.com/en-us/HT204837)
- [Enabling Bitlocker Encryption on Windows](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838)

3. Your laptop screen is set to lock after **5 Minutes** of inactivity. Steps on how to set screen lock/screensaver times for MacOS and Windows are below.

- [Editing Screen lock Settings for MacOS](https://support.apple.com/guide/mac-help/change-screen-saver-preferences-mchlp1227/mac)
- [Editing Screen Lock settings for Windows](https://support.microsoft.com/en-us/windows/change-your-screen-saver-settings-a9dc2a0c-dc8e-9161-d270-aaccc252082a)

4. Firewall is enabled on your device. Steps on how to enable firewall for MacOS and Windows are below.

- [Enabling Firewall on MacOS](https://support.apple.com/guide/mac-help/block-connections-to-your-mac-with-a-firewall-mh34041/mac#:~:text=services%20and%20apps-,On%20your%20Mac%2C%20choose%20Apple%20menu%20%3E%20System%20Preferences%2C%20click,%26%20Privacy%20%2C%20then%20click%20Firewall.&text=pane%20for%20me-,If%20the%20lock%20at%20the%20bottom%20left%20is%20locked%20%2C%20click,the%20firewall%20for%20your%20Mac.)
- [Enabling Firewall for Windows](https://support.microsoft.com/en-us/windows/turn-microsoft-defender-firewall-on-or-off-ec0844f7-aebd-0583-67fe-601ecf5d774f)

If you run into any issues or have any questions about the above please reach out to the #it-tech-ops Slack Channel!

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
- Make passwords complicated enough to need the use of a password manager (we use [1Password](https://1password.com/))
- Create a password that is ideally 10 characters long
- We recommend using a passphrase or sentence so it’s easier to remember and meet the above requirements! Example: HungryAnteaterAte1400Ants!

## Using A Personal Computer

If using your personal device, please ensure that you are doing the following: 

* You are following the laptop setup standards above.
* You have reached out to the Tech Ops team in the #it-tech-ops Slack channel to get an invite to our antivirus software, Carbon Black. 

If you receive a Sourcegraph device and will no longer be working from a personal device please reach out to the Tech Ops team, and we can unenroll your personal device from Carbon Black. 

## Zoom Retention Policy

Sourcegraph will institute a 30-day Zoom cloud storage retention period. All Zoom recordings older than 30 days will be placed in the meeting host’s trash for an additional 30 days. After 30 days, the recordings will be permanently deleted. Due to issues of privacy and compliance, Zoom recordings should only be downloaded and kept beyond 30-days if there is an explicit business use for doing so. In the event that you need to download and store Zoom recordings Sourcegraph’s Google Drive should be used as the default location
