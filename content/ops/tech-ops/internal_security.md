# Internal Security 

One of Sourcegraph's top-level principles is to keep our customers data private and secure . In the same way, maintaining the integrity and security of our 
internal data, employee information, and systems, is critical.

To do that, we need to keep some basic security best-practices in mind: 

## Phishing/Spoofing

One common attack vector that bad actors use is phishing. Phishing is the act of pretending to be someone you're not in order to get information like passwords, 
login info, sensitive data, etc. 

This is commonly done via email and can look like it's coming from a person you know and trust. As a general rule, Sourcegrapher's should *never* ask for personal 
information, passwords, or sensitive information via email. If you do recieve an email or communication purporting to be from a coworker or someone you trust, 
always verify via Slack or other non-email communication method - never give that information via email. If you have encountered or suspect a phishing attempt, 
please immediately report it to @security-team. An example phishing attempt can be found [here](https://photos.app.goo.gl/LEzDYiQjCYzfmw2a8).

## JAMF Policy

We want all teammates who have Sourcegraph **Apple devices** to have their devices set up on Jamf Now. This way, in cases where a device is lost/stolen, we would have ability to wipe it remotely. (Jamf Now will only be used in these types of emergency circumstances.)

1. Set Jamf up on your computer: Visit https://sourcegraph.jamfcloud.com and use the following access code: 121200 to get it set up on your device
2. Turn on FileVault: https://support.apple.com/en-us/HT204837
