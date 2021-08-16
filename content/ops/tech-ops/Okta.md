---
ignoreDisconnectedPageCheck: true
---
#OKTA

## What is Okta?

From the Okta website:

> Okta is the foundation for secure connections between people and technology. It’s a service that gives employees, customers, and partners secure access to the tools they need to do their most important work.

Okta is an Identity and Single Sign-On (SSO) solution for applications and Cloud entities. It allows Sourcegraph to consolidate authentication and authorization to applications we use daily through a single dashboard and ensure a consistent, secure, and auditable login experience for all our Sourcegraph team members.

#### Current implementation status

Tech Ops is currently building out the integration with BambooHR as the source of truth for identity. Once this is active we will begin rolling out access to applications through Okta one by one, starting with Docusign, Google Workspace, and Slack. Because Google and Slack will impact every single Sourcegraph teammate we ask that you activate your account ASAP. 

You should have received an activation email, if you haven’t please let #it-tech-ops know and we can resend the invite.

## How is Sourcegraph using Okta?

Sourcegraph is using Okta for a few key goals:

- Secure access to SaaS systems
- Faster onboarding process
- Consolidated & automated system access

## What will be the benefits to me using Okta as a user?

- A single dashboard that is provided to all users, with all the applications you need in a single place
- The ability to request access to applications from within the dashboard
- No more long list of complicated or insecure passwords
- Managed SSO and Multi-Factor Authentication (MFA) that learns and adapts to your login patterns
- Transparent security controls with a friendly user experience

## What are the benefits to me as an application administrator to using Okta?

- Automated provisioning and group management
- Ability to transparently manage shared credentials to web applications without disclosing the credentials to users
- Centralized access for users, making it easy to add, remove and change the application profile without the need to update all users.

## How do I get my Okta account set up?

All Sourcegraph team members will have an Okta account set up as part of their onboarding process. Okta activation emails are valid for 7 days.

Expect the sign-up process to take around 10 minutes. You will need to create login credentials, and set up Okta Verify on your mobile and/or desktop device for MFA. Okta Verify is available on iOS, Android, and Windows devices. You can always use 1Password’s one-time passcode feature to host your MFA codes, if you would rather. 

Contact #it-tech-ops if you need assistance setting this up.

## I forgot my password/my login doesn't work, what do I do?

There is a "need help signing in?" button on the login screen. If you expand this there is a link to an automated password reset process via email. 
We recommend that you store your Okta password in 1Password as well as your Security Questions there. 

## I forgot my Security Questions, how do I reset my password?

Ask #it-help-ops for a temporary password to be issued. You will be given a temporary password at which point you can reset your access.

## I changed my phone and now can't do MFA, what do I do?

No worries! You can easily reset your own MFA code for Okta if you did not wipe/return your old phone yet.

1. Sign in to your Okta webpage by going to <https://www.sourcegraph.okta.com)> on your old phone
2. Use your email, password, and the MFA code on your old phone
3. Once you're on the Okta webpage click on your name and then click settings
4. Scroll down until you see "Extra Verification", once you're there click "remove" to disable that instance of Okta Verify 
5. Configure the new MFA code on your new phone

Lost all your MFA Factors? Ask #it-tech-ops for an MFA Reset. Once your Factors have been reset, please set up Okta Verify again.

## My Okta account has been locked out because of failed attempts, what do I do?

Contact to #it-tech-ops and ask to have your account unlocked. As a precaution, you will also need to change your Okta Password.

## Why isn't an application I need available in Okta?

Currently we don’t have any configured! But we will and we will also have an option for you to request access for an application from within Okta.

## I have an application that uses a shared password for my team, can I move this to Okta?

Yes you can! More on this later...

## I'm getting asked to MFA authenticate a lot, is that normal?

The way we have Okta set-up should require you to authenticate once with MFA every 12 hours. It's recommended that you log in via the Okta dashboard at the beginning of your day, and then use either the dashboard or the Okta plugin for applications during your workday.

For some applications, we will enforce an additional MFA step periodically because of the sensitivity of the data in them. 

If you are having problems with being asked for multiple MFA authentications during the day, please contact #it-tech-ops and we can look into it.

## Where do I go if I have any questions?

For Okta help, setup, and integration questions: #it-tech-ops Slack channel or <tech-ops-admin@sourcegraph.com>

### Who are the Okta Super Admins?

[Nate Tang](https://about.sourcegraph.com/handbook/company/team#nate-tang-he-him), Tech Ops, nate@sourcegraph.com

[Nicky Van Maanen](https://about.sourcegraph.com/handbook/company/team#nicky-van-maanen-she-her), Tech Ops, nicky@sourcegraph.com
