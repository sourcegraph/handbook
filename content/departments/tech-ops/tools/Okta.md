---
ignoreDisconnectedPageCheck: true
---

# OKTA

## What is Okta?

From the Okta website:

> Okta is the foundation for secure connections between people and technology. It’s a service that gives employees, customers, and partners secure access to the tools they need to do their most important work.

Okta is an Identity and Single Sign-On (SSO) solution for applications and Cloud entities. It allows Sourcegraph to consolidate authentication and authorization to applications we use daily through a single dashboard and ensure a consistent, secure, and auditable login experience for all our Sourcegraph team members.

## How is Sourcegraph using Okta?

Sourcegraph is using Okta for a few key goals:

- Secure access to SaaS systems
- Faster onboarding process
- Consolidated & automated system access
- Automating processes through the use of Okta workflows

## What are the benefits of using Okta?

- A dashboard with all the applications you need in a single place
- No more long list of complicated or insecure passwords
- Managed SSO and Multi-Factor Authentication (MFA) that learns and adapts to your login patterns
- Transparent security controls with a friendly user experience

## What are the benefits to me as an application administrator to using Okta?

- Automated provisioning and group management
- Ability to transparently manage shared credentials to web applications without disclosing the credentials to users
- Centralized access for users, making it easy to add, remove and change the application profile without the need to update all users

## How do I get my Okta account set up?

All Sourcegraph team members have an Okta account set up as part of their onboarding process. Okta activation emails are valid for 7 days.

Expect the sign-up process to take around 10 minutes. You will need to create login credentials, and set up Okta Verify on your mobile and/or desktop device for MFA.

## Which MFA options are available?

- Okta Verify is available on iOS, Android, and Windows devices.
- You can always use 1Password’s one-time passcode feature to host your MFA codes
- YubiKeys

For YubiKey set up:

1. Follow [these instructions](https://support.yubico.com/hc/en-us/articles/360016614960-Programming-YubiKeys-for-Okta-Adaptive-Multi-Factor-Authentication)
2. Send #it-tech-ops the generated CSV

## I forgot my password/my login doesn't work, what do I do?

If you forgot your password to Okta you won't have access to your Sourcegraph google account BUT you can also use your secondary/personal email address (as it is entered in BambooHR) to reset your password.
There is a "need help signing in?" button on the login screen. If you expand this there is a link to an automated password reset process via email.

1. Go to the our [Sourcegraph Okta Login page](https://www.sourcegraph.okta.com)
1. Click the "Need help signing in?" button on the login screen
1. [Forgot Password](https://sourcegraph.okta.com/signin/forgot-password)
1. Enter your personal email address
1. Reset via email
1. Go to your personal email account
1. Follow the directions from Okta for resetting you password

We recommend that you store your Okta password in 1Password as well as your Security Questions there.

## I forgot my Security Questions, how do I reset my password?

Ask #it-help-ops for a temporary password to be issued. You will be given a temporary password at which point you can reset your access.

## I changed my phone and now can't do MFA, what do I do?

If you no longer have your phone: ask the it-tech-ops channel for an MFA reset.

If you still have your old phone: you can reset your own MFA code:

1. Sign in to your Okta webpage by going to <https://www.sourcegraph.okta.com> on your old phone
2. Use your email, password, and the MFA code on your old phone
3. Once you're on the Okta webpage click on your name and then click settings
4. Scroll down until you see "Extra Verification", once you're there click "remove" to disable that instance of Okta Verify
5. Configure the new MFA code on your new phone

Once your MFAs have been reset, please set up MFA again.

## My Okta account has been locked out because of failed attempts, what do I do?

Being locked out of Okta will also mean you are locked out of Google and Slack. Tech-Ops-Admin@sourcegraph.com will receive an email saying you have been lock out but please send us a confirmation email from your personal email account so we know it was you. As a precaution, you will also need to change your Okta Password.

## Why isn't an application I need available in Okta?

Most likely because that system doesn't offer an SSO option or because we need to upgrade in order to enable the feature. Please feel free to ask us about it in the #it-tech-ops channel.

## I have an application that uses a shared password for my team, can I move this to Okta?

Yes you can! More on this later...

## I'm getting asked to MFA authenticate a lot, is that normal?

The way we have Okta set-up should require you to authenticate once with MFA every 12 hours. It's recommended that you log in via the Okta dashboard at the beginning of your day, and then use either the dashboard or the Okta plugin for applications during your workday.

For some applications, we will enforce an additional MFA step periodically because of the sensitivity of the data in them.

If you are having problems with being asked for multiple MFA authentications during the day, please contact #it-tech-ops and we can look into it.

## Where do I go if I have any questions?

For Okta help, setup, and integration questions: #it-tech-ops Slack channel or <tech-ops-admin@sourcegraph.com>
