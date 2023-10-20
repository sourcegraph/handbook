### Why do I need two Yubikeys?

Having two Yubikeys means you have a spare in case you lose one, and you'll still be able to access all your accounts while we ship you a new one.

We provide two different types of Yubikey for convenience - a 5C Nano which can be left in your laptop, and a larger NFC key that can be used with your phone.

### Where should I keep my Yubikeys?

We recommend leaving the Nano in your MacBook's USB C port, and attaching the NFC to your keyring or keeping it in a safe place.

### How are Yubikeys more secure than Okta notifications or the six-digit OTP codes?

Using notifications on your phone or one-time codes does help improve security, but they can both be phished. For example, if you visited a fake Sourcegraph login page and entered your username, password, and one-time code, an attacker could quickly enter these details into a real login page.

Yubikeys, Touch ID, and Face ID are all **phishing resistant** forms of authentication - even if an attacker obtains your username and password and gets you to tap a Yubikey on a phishing site, they still won't be able to log in as you (but still please let us know in #security if this happens!).

More technically, Yubikeys and Touch/Face ID use [FIDO U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor). This uses a signed challenge/response that's tied to the domain you're on, so a phishing site will have a different domain and so any response will not be valid on the real login site.

### Are Touch ID and Face ID as secure as Yubikeys?

Yep! We suggest you set up both Yubikeys and Touch/Face ID on Okta and Github, as biometrics can provide a very convenient way of signing in - especially on mobile.

Both Touch/Face ID and Yubikeys use [FIDO U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor), so are equivalent in terms of the security they provide.

### If Touch/Face ID is just as good, why do we need Yubikeys?

Touch ID isn't convenient for everyone's setup; for example, if you use your laptop while closed then you can't use Touch ID. A Yubikey can be attached to a USB port or USB hub so should always be easily accessible.

Touch/Face ID is also tied to a single device. If you get a new laptop, you won't be able to sign into Okta using Touch ID until you log in. Currently, you can perform the initial login using a mobile notification, but we plan to enforce only Yubikeys and Touch/Face ID later this year. Having a Yubikey will allow you to perform the initial login and set up Touch ID.

### Can I use my Yubikey for personal accounts?

Yes! In addition to adding your Yubikeys to Okta, we encourage you to add them to any personal accounts that support them. This not only makes you more secure online but will mean you’re more familiar with how Yubikeys work.

Yubico maintains a [list of supported services](https://www.yubico.com/works-with-yubikey/catalog/?sort=popular). Some common ones include:

- GitHub
- Google
- 1Password
- Facebook

Note that providers all implement Yubikey support slightly differently.

To encourage everyone to use strong multi-factor authentication in as many places as possible, you will be able to keep your Yubikeys in the event that you leave Sourcegraph (😢).

### I already have a personal Yubikey. Do I need new ones?

You can absolutely use personal Yubikeys with your Sourcegraph Okta account! You can add them to your Okta and Github accounts now even if you weren't in the first wave of rollouts.

When you receive a message about receiving Yubikeys, you can let us know and only request the keys you need. You should ensure you meet the following criteria though:

- Your Yubikeys will need to support FIDO U2F (Yubikey 4 and newer)
- You have at least two Yubikeys
- You have at least one Yubikey with NFC support

### Which browsers are supported?

We've tested and confirmed Yubikey support in the following browsers on Mac:

- Chrome
- Firefox
- Safari
- Chromium-based browsers (Brave, Arc, ...)
- Qutebrowser
  - Qutebrowser has a UI bug and won't show a prompt to tap the Yubikey. When logging in, tap the Yubikey when it flashes.
  - Due to this bug, we recommend you add the Yubikeys to Okta in a different browser, after which you can sign in with them in Qutebrowser.

### How is signing into Okta going to change?

Currently, we support several forms of multi-factor authentication when signing into Okta. This could be a notification on your phone, a six-digit one-time code, or Touch ID.

We plan to require a strong, phishing-resistant multi-factor method to log into Okta later this year. Methods that meet this requirement are Yubikey, Touch ID, and Face ID. The old notification and one-time code based methods will no longer be supported as they can be bypassed in sophisticated phishing campaigns.

There isn’t yet a firm timeline for this change. This policy will first be enforced for the Security team to test usability, and we may decide to roll it out to high-risk teams ahead of a company-wide rollout.

### When can I get a Yubikey?

All teammates should have received Yubikeys, either as part of their onboarding or as part of our rollout. If for some reason you did not receive a Yubikey, please reach out #ask-it-tech-ops so they can ensure you receive one as soon as possible.

You should have received two Yubikeys - a 5C NFC that can be used with your phone, and a 5C Nano that can be left connected to your laptop.

## Troubleshooting

### I’ve set up my Yubikeys but I still receive a notification on my phone when I sign in to Okta

At the point where you receive the notification, click "
Verify with something else" on the login page and select "Security Key or Biometric Authenticator". It should remember this in the future.

### I’ve set up my Yubikeys but Github never prompts me for it when logging in

Go to Settings > Password and authentication > and select "Set as preferred method" next to Security keys.

## Yubikey Setup

### How do I set up Yubikeys with Okta?

- [Okta setup instructions](../../../departments/tech-ops/tools/Okta/main.md#adding-touch-id-as-a-phishing-resistant-mfa-option)

<!-- <div style="position: relative; padding-bottom: 54.7112462006079%; height: 0;"><iframe src="https://www.loom.com/embed/5a78ffa19e604aeb8997bbb42d581ebd" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> -->

### How do I set up Yubikeys with Google

Follow this link [Google Account Security](https://myaccount.google.com/two-step-verification/security-keys) to start the setup process.

- Click the button to add a security key
- Click proceed/yes on prompts that pop up in browser to proceed (these are different per browser, I'll cover the most common 3)
  - Firefox - lets you know the key will register as anonymous, Google asks you to nickname the key after registering
  - Chrome - sees the key type, Google website asks you to nickname the key after registering
  - Safari - security key pop up window opens in middle of the screen
- Tap the gold connector/disk on the key to register it to your account
- Nickname the key as necessary - usually the key type to help differentiate between the two

### How do I set up Yubikeys with GitHub?

Follow this link [Github User Security Settings](https://github.com/settings/security) to setup your yubikey.

- Scroll down to the two-factor authentication section
- Click the add button Security Keys line
- Register your keys as desired
- Change your default preferred 2FA method to Security Keys foe easy of access
  - At future logins, when prompted, you'll tap the metal nub on your yubikey and it will authenticate through the 2FA step
  <!-- <div style="position: relative; padding-bottom: 54.7112462006079%; height: 0;"><iframe src="https://www.loom.com/embed/08d3a45016dd433e9e3377cf48db05da" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> -->
