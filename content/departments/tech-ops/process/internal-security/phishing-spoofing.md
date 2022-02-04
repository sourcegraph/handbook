## Phishing/spoofing

Sourcegraph uses Google Workspace (Gmail) to host and manage all incoming and outbound email.

Gmail spam filters automatically move spam email messages into users’ spam folders or Gmail’s quarantine feature. Sourcegraph employees will receive an alert when opening an email that may have suspicious attachments or triggers Google Workspace’s spam alerts.

# Enabled Spam Alerting features

- **Enhanced pre-delivery message scanning** - This enables improved detection of suspicious content prior to delivery

- **Attachments** - Additional protection against suspicious attachments and scripts from untrusted senders. Includes protection against attachment types that are uncommon for your domain—these can be used to spread malware.

- **Links and external images** - Identify links behind short URLs, scan linked images for malicious content, and display a warning when you click links to untrusted domains.

- **Spoofing and authentication** - Protection against spoofing a domain name, employee names, email pretending to be from your domain, and unauthenticated email from any domain. Unauthenticated emails display a question mark next to the sender’s name.

# Tech Ops spam procedures

In addition to the settings outlined above, Sourcegraph recipients are also able to report suspected spam to their Google Workspace Admin.

If a message is reported as spam, the Sourcegraph Tech Ops team will evaluate the reported message and add the sender to the Google Workspace list of “**Blocked Senders**”. This will prevent any further messages from that account from reaching the Sourcegraph domain.

See additional security measures Tech Ops is undertaking here.
