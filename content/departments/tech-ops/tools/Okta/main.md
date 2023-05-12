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

All Sourcegraph team members have an Okta account set up as part of their onboarding process. Okta activation emails are valid for 7 days and are sent on the morning of a teammate's start date.

Expect the sign-up process to take around 10 minutes. You will need to create login credentials, and set up Okta Verify on your mobile and/or desktop device for MFA.

Visit [this page](okta-activation-steps.md) to follow the steps to activate your Okta account.

## Which MFA options are available?

Phishing resistant MFA options are the preferred method of authentication. These are either Okta Verify with biometrics enabled or FIDO2.

1. Okta Verify - Okta Verify is an app available through the app store on macOS, iOS, and Android devices. Using Okta Verify you can authenticate using any of the following methods:
   - Push notification
   - Okta Verify app on your device (aka FastPass)
   - App-generated passcode (aka One-time passcode)
2. FIDO2 [WebAuthn](https://help.okta.com/en-us/Content/Topics/Security/mfa-webauthn.htm?cshid=csh_FIDO2_WebAuthn)- use a security key or biometric authenticator (such as YubiKey, Google Titan, or Touch ID)
   - Instructions for setting up Touch ID and Yubikeys below
3. Google Authentication - in some rare cases you can use Google Authentication to set up your one-time passcode using 1Password.

## What are the most secure authentication methods?

- Physical tokens (YubiKeys or similar) or biometrics (TouchID or similar)
- Push notifications on a trusted device
- App-generated 2FA codes, like Google Authenticator
  - Do not Copy/Paste from your password manager. Autocompletion should work if it is the legitimate site otherwise you could be falling into a trap if the URL is malicious.

## Enrolling your account with Okta Verify and FastPass on your laptop

[**Video instructions**](https://www.loom.com/share/638bfd8b9c1d4843b632d113ef6b167d)

- Download the Okta Verify app (you can download it from the App store or go to the Self Service app on your laptop and download it from there)
- Follow the instructions
- Our url is sourcegraph.okta.com
- Link the app with your Okta account by logging into your account by following the prompts
- Enroll in Touch ID (preferred) or push notifications (required)

## Registering your account with Okta Verify and FastPass on you mobile device

This is essentially just re-enrolling your Okta Verify account with Okta. This is necessary to access certain apps from your mobile devices.

[**Video instructions**](https://www.loom.com/share/e8fc333236944a76924bcf467c813de1)

- From your laptop log into your Okta Dashboard
- Go to settings and click add new next to Okta Verify (ignore the fact that you might already have your phone or tablet listed here)
- Authenticate again
- Add Okta Verify
- A QR code will appear
- Open the Okta Verify app on your phone or tablet
- Click the + sign to add a new account
- Scan QR code and follow the directions for enabling Face ID and/or push notifications

That's it. You won't see any change to your account, however you can now use FastPass on your mobile device as an authentication method.

## Adding Apple Touch ID as a phishing resistant MFA option (WebAuthn)

Apple Touch ID is authenticated through your browser, so if you use multiple browsers you will have to go through the above steps for each one. Note: At this time, only Chrome and Safari support this method.

1. Sign in to your Okta Dashboard
2. Go to your name > Settings
3. Edit settings (you will need to log in again to edit settings)
4. Scroll to the bottom and under Extra Verification
5. Select “Set up” next to the MFA option you would like to add
6. Select “Enroll” and follow the steps prompted by your browser

<img src="https://storage.googleapis.com/sourcegraph-assets/settings14.png" alt="Okta settings page" width="250" height="300"> <img src="https://storage.googleapis.com/sourcegraph-assets/set%20up.png" alt="Okta FIDO2 setup" width="250" height="300"> <img src="https://storage.googleapis.com/sourcegraph-assets/touch%20ID.png" alt="Okta Touch ID" width="250" height="300">

## Adding a YubiKey as a phishing resistant MFA option (WebAuthn)

**Still have questions after setup? See the [Yubikey FAQ](../../../security/knowledge-base/yubikey-faq.md)**

[**Video instructions**](https://www.loom.com/share/5a78ffa19e604aeb8997bbb42d581ebd)

1. Sign in to your Okta Dashboard
2. Go to your name > Settings
3. Under 'Security Key or Biometric', click 'Set Up Another'
4. Enter password and verify with Okta Verify/Fastpass
5. Click 'Set Up' and then select USB security key when prompted:

<img width="368" alt="Screenshot 2023-02-03 at 12 34 53" src="https://user-images.githubusercontent.com/106968986/216598274-c91f1d7d-cc17-4c78-b97a-df0464f290a9.png">

6. When prompted, touch the gold part of the YubiKey to verify, and then click 'Allow':

<img width="365" alt="Screenshot 2023-02-03 at 12 36 50" src="https://user-images.githubusercontent.com/106968986/216598507-a38f72b4-3c54-422c-ab33-08bf3181b547.png">

7. Repeat these steps for your second YubiKey, if applicable. Best practice is to set up both YubiKeys at the same time.

**Optional steps:**

8. Download [YubiKey Manager](http://yubico.com/support/download/yubikey-manager/)
9. In YubiKey Manager, go to Applications > FIDO2 and configure a PIN (this will require you to input the PIN every time you use the YubiKey):

<img width="544" alt="Screenshot 2023-02-03 at 13 06 29" src="https://user-images.githubusercontent.com/106968986/216599897-c408a622-d8c9-4018-8dad-bb9274e3585f.png">

10. In YubiKey Manager, click 'Interfaces' and uncheck the 'OTP' option. This will prevent the YubiKey from randomly typing an OTP code if you accidentally touch it.

## Use a different MFA option

To change between MFA options click on the arrow next to the label when prompted for MFA

<img src="https://storage.googleapis.com/sourcegraph-assets/switch%20between.png" alt="Okta MFA options" width="300" height="350">

## Using phishing resistant MFA options on mobile devices

Using your mobile devices to access [company data](../computer-setup.md#company-data) is limited to just a few applications, such as Gmail, Calendar, Zoom, Slack, and Airbase. If you are going to be accessing any of these apps from your phone please log into the applications using phishing resistant methods.

Once you add a Yubikey to your Okta account in the steps noted above, you will be able to use that Yubikey on your computer or phone as a form of mfa. You will not need to create a new registration entry per device, it is tied directly to your Okta account.

1. Log into Okta with username and password
1. Select 'Security Key or Biometric Authenticator'
1. Select 'Verify'
1. Tap and hold your key towards the tops of the device, if NFC compatible, or insert your Yubikey and tap the gold part
1. You will be logged in

## I forgot my password/my login doesn't work, what do I do?

If you forgot your password to Okta you won't have access to your Sourcegraph google account BUT you can also use your secondary/personal email address (as it is entered in BambooHR) to reset your password.
There is a "need help signing in?" button on the login screen. If you expand this there is a link to an automated password reset process via email.

1. Go to the [Sourcegraph Okta Login page](https://www.sourcegraph.okta.com)
1. Click the "Need help signing in?" button on the login screen
1. [Forgot Password](https://sourcegraph.okta.com/signin/forgot-password)
1. Enter your personal email address
1. Reset via email
1. Go to your personal email account
1. Follow the directions from Okta for resetting you password

We recommend that you store your Okta password in 1Password as well as your Security Questions there.

## I forgot my Security Questions, how do I reset my password?

Ask #ask-it-help-ops for a temporary password to be issued. You will be given a temporary password at which point you can reset your access.

## I changed my phone and now can't do MFA, what do I do?

If you no longer have your phone: ask the #ask-it-tech-ops channel for an MFA reset.

If you still have your old phone: you can reset your own MFA code:

1. Sign in to your Okta webpage by going to <https://www.sourcegraph.okta.com> on your old phone
2. Use your email, password, and the MFA code on your old phone
3. Once you're on the Okta webpage click on your name and then click settings
4. Scroll down until you see "Extra Verification", once you're there click "remove" to disable that instance of Okta Verify
5. Configure the new MFA code on your new phone

Once your MFAs have been reset, please set up MFA again.

## My Okta account has been locked out because of failed attempts, what do I do?

Being locked out of Okta will also mean you are locked out of Google and Slack. The Tech Ops team will receive an email saying you have been locked out but please send us a confirmation email from your personal email account so we know it was you. As a precaution, you will also need to change your Okta password.

## Why isn't an application I need available in Okta?

Most likely because that system doesn't offer an SSO option or because we need to upgrade in order to enable the feature. Please feel free to ask us about it in the #ask-it-tech-ops channel.

## I'm getting asked to authenticate a lot, is that normal?

The way we have Okta set-up should require you to authenticate once with MFA every 12 hours. It's recommended that you log in via the Okta dashboard at the beginning of your day, and then use either the dashboard or the Okta plugin for applications during your workday.

For some applications, we will enforce an additional MFA step periodically because of the sensitivity of the data in them.

If you are having problems with being asked for multiple MFA authentications during the day, please contact #ask-it-tech-ops and we can look into it.

## Where do I go if I have any questions?

For Okta help, setup, and integration questions: #ask-it-tech-ops Slack channel or <techops@sourcegraph.com>

You can also try following the steps in the [Okta Verify Troubleshooting document](okta-verify-troubleshooting-steps.md) if Okta Verify isn't working properly.

## I have setup my MFA in AWS but I am still getting errors on aws cli

Please follow these instructions: [AWS CLI MFA setup](../../../security/knowledge-base/AWS-CLI-MFA.md)
