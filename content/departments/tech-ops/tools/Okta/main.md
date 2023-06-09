---
ignoreDisconnectedPageCheck: true
---

# OKTA

## What is Okta?

Okta is an Identity and Single Sign-On (SSO) solution for applications and Cloud entities. It allows Sourcegraph to consolidate and secure applications, tier authentication requirements, and provision access based on individual needs or role-based requirements.

Through your dashboard, you can see all the applications you currently have access to via Okta.

## How do I get my Okta account set up?

All Sourcegraph team members have an Okta account set up as part of their onboarding process. Okta activation emails are valid for 7 days and are sent on the morning of a teammate's start date.

Expect the sign-up process to take around 10 minutes. You must create login credentials and set up Okta Verify on your devices.

Visit [this page](okta-activation-steps.md) to follow the steps to activate your Okta account.

## Which verification methods are available?

Depending on the classification of data, Okta has different requirements for access. We recommend that you always use a phishing-resistant method for authentication; these are either Okta Verify with biometrics or WebAuthn (TouchID or Security Key).

1. Okta Verify - Okta Verify is an app available through the app store on macOS, iOS, and Android devices. Registration of Okta Verify is required on all devices (mobile AND laptop). Once registered, you can use Okta Verify in the following ways:
   - Okta Verify FastPass - phishing-resistant
   - Receive a Push notification - non-phishing resistant/roaming authenticator
   - App-generated one-time passcode - non-phishing resistant/roaming authenticator
2. [WebAuthn](https://help.okta.com/en-us/Content/Topics/Security/mfa-webauthn.htm?cshid=csh_FIDO2_WebAuthn)- using webauthn you can register a security key or browser-based biometrics with your account
3. Google Authentication - in some rare cases, you can use Google Authentication to set up your one-time passcode using 1Password.

**Note** If you use an OTP (one-time passcode): Do not Copy/Paste from your password manager. Autocompletion should work if it is a legitimate site. Otherwise, you could fall into a trap if the URL is malicious.

## Enrolling your account with Okta Verify and FastPass on your laptop

You will need your Yubikey to enroll a new laptop. If you do not have a Yubikey, you will need to have OTP or Push Notifications set up on your mobile device in order to authenticate into your account and set up Okta Verify on your laptop.

[**Video instructions**](https://www.loom.com/share/638bfd8b9c1d4843b632d113ef6b167d)

- Download the Okta Verify app (you can download it from the App Store or go to the Self Service app on your laptop and download it from there)
- Follow the instructions
- Our url is sourcegraph.okta.com
- Link the app with your Okta account by logging into your account by following the prompts
- Enroll in Touch ID (preferred) or push notifications (required)

## Registering your account with Okta Verify and FastPass on your mobile device

Using your mobile devices to access [company data](../computer-setup.md#company-data) is limited to a few applications, such as Gmail, Calendar, Zoom, Slack, and Airbase.

[**Video instructions**](https://www.loom.com/share/e8fc333236944a76924bcf467c813de1)

- From your laptop, log into your Okta Dashboard
- Go to settings and click add new next to Okta Verify (ignore the fact that you might already have your phone or tablet listed here)
- Authenticate again
- Add Okta Verify
- A QR code will appear
- Open the Okta Verify app on your phone or tablet
- Click the + sign to add a new account
- Scan QR code and follow the directions for enabling Face ID and/or push notifications.

After you enroll with Okta Verify, the mobile app will also be set up for Push Notifications and one-time passwords (OTP).

For those teammates who were enrolled before April 1, 2023, this is essentially just re-enrolling in Okta Verify to register the device with Okta. This is necessary to access certain apps from your mobile devices. You won't see any change to your account. However, you can now use FastPass on your mobile device as an authentication method.

## WebAuthn: Adding Apple Touch ID as a phishing-resistant MFA option

Apple Touch ID is authenticated through your browser, so if you use multiple browsers, you must go through the above steps for each one. Note: At this time, only Chrome and Safari support this method.

1. Sign in to your Okta Dashboard
2. Go to your name > Settings
3. Edit settings (you will need to log in again to edit settings)
4. Scroll to the bottom and under Extra Verification
5. Select “Set up” next to the MFA option you would like to add
6. Select “Enroll” and follow the steps prompted by your browser

<img src="https://storage.googleapis.com/sourcegraph-assets/settings14.png" alt="Okta settings page" width="250" height="300"> <img src="https://storage.googleapis.com/sourcegraph-assets/set%20up.png" alt="Okta FIDO2 setup" width="250" height="300"> <img src="https://storage.googleapis.com/sourcegraph-assets/touch%20ID.png" alt="Okta Touch ID" width="250" height="300">

## WebAuthn: Adding a YubiKey as a phishing-resistant MFA option

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

Once you add a Yubikey to your Okta account in the steps noted above, you will be able to use that Yubikey on your computer or phone as a form of MFA. You will not need to create a new registration entry per device, it is tied directly to your Okta account.

**Optional steps:**

8. Download [YubiKey Manager](http://yubico.com/support/download/yubikey-manager/)
9. In YubiKey Manager, go to Applications > FIDO2 and configure a PIN (this will require you to input the PIN every time you use the YubiKey):

<img width="544" alt="Screenshot 2023-02-03 at 13 06 29" src="https://user-images.githubusercontent.com/106968986/216599897-c408a622-d8c9-4018-8dad-bb9274e3585f.png">

10. In YubiKey Manager, click 'Interfaces' and uncheck the 'OTP' option. This will prevent the YubiKey from randomly typing an OTP code if you accidentally touch it.

## Use a different MFA option

To change between MFA options, click on the arrow next to the label when prompted for MFA

<img src="https://storage.googleapis.com/sourcegraph-assets/switch%20between.png" alt="Okta MFA options" width="300" height="350">

## I forgot my password/my login doesn't work. What do I do?

You can use your secondary/personal email address (as it is entered in BambooHR) to reset your password.

The login screen has a "need help signing in?" button. If you expand this, there is a link to an automated password reset process via email.

1. Go to the [Sourcegraph Okta Login page](https://www.sourcegraph.okta.com)
1. Click the "Need help signing in?" button on the login screen
1. [Forgot Password](https://sourcegraph.okta.com/signin/forgot-password)
1. Enter your personal email address
1. Reset via email
1. Go to your personal email account
1. Follow the directions from Okta for resetting your password

We recommend that you store your Okta password and your Security Questions in 1Password.

## I forgot my Security Questions. How do I reset my password?

Ask #ask-it-help-ops for a temporary password, to be issued. You will be given a temporary password at which point you can reset your access.

## My Okta account has been locked out because of failed attempts. What do I do?

Being locked out of Okta means you are locked out of Google and Slack. The Tech Ops team will receive an email saying you have been locked out, but please send us a confirmation email from your personal email account so we know it was you. You will also need to change your Okta password.

## Why isn't an application I need available in Okta?

Most likely because that system doesn't offer an SSO option or because we need to upgrade to enable the feature. Please feel free to ask us about it in the #ask-it-tech-ops channel.

## I'm getting asked to authenticate a lot, is that normal?

The way we have Okta set up should require you to authenticate once with MFA every 12 hours, typically. You should log in via the Okta dashboard at the beginning of your day and then use either the dashboard or the Okta plugin for applications during your workday.

For some applications, we will enforce an additional MFA step periodically because of the sensitivity of the data in them.

If you are having problems with being asked for multiple MFA authentications during the day, please get in touch with #ask-it-tech-ops and we can look into it.

## Where do I go if I have any questions?

For Okta help, setup, and integration questions: #ask-it-tech-ops Slack channel or <techops@sourcegraph.com>

You can also follow the steps in the [Okta Verify Troubleshooting document](okta-verify-troubleshooting-steps.md) if Okta Verify isn't working properly.

## I have set up my MFA in AWS, but I am still getting errors on aws cli

Please follow these instructions: [AWS CLI MFA setup](../../../security/knowledge-base/AWS-CLI-MFA.md)
