# **Jamf**

## Jamf Pro

Jamf Pro is a mobile endpoint management (MDM) system that provides Tech Ops with the ability to manage Sourcegraph devices (computers) remotely. More information about Jamf Pro can be found [here](https://www.jamf.com/products/jamf-pro/?v=3)

## Jamf Protect

Jamf Protect is an antivirus software that we deploy to all our managed devices. Protect monitors for malicious software and adware that may present security risks and notifies Tech Ops and Security in the event any suspicious activity is found.

## How to Enroll in Jamf

- If your device was purchased by Sourcegraph your computer will be prompted to enroll in Jamf on the Remote Management screen during your new laptop's setup process. Jamf Pro and Jamf Protect will automatically install during this step and you won't need to do anything else at this time.
- If you have purchased your Sourcegraph device from an Apple Certified Reseller, please reach out to the #ask-it-tech-ops Slack Channel to receive an enrollment invitation via email.

After installing Jamf (or turning on your computer for the first time) we recommend first checking for software updates, downloading them if needed, and then restarting your laptop immediately. Restarting is required to finish the disk encryption process, which is one of the device standards required.

## What Jamf will automatically install on new devices

Jamf will install several profiles: Jamf Protect, Firevault and Firewall enforcement, a screen lock requirement, as well as a complex password for the device.

## What you can do prior to Jamf Enrollment:

If you haven't done so already please configure your laptop in accordance with our [endpoint standards](../process/internal-security/computer-standards.md).

## Installing Jamf Pro and Jamf Protect on a personal computer

You may install Jamf Pro and Jamf Protect on as many devices as necessary to ensure our company and client data is protected, including personal devices if you are still waiting for your Sourcegraph device to arrive. Jamf Pro and Protect only support MacOS devices at this time.

## Removing Jamf

**Removing Jamf Pro and Jamf Protect from your Sourcegraph computer**

Jamf Pro and Jamf Protect should never be removed from a Sourcegraph computer. If there is a circumstance where this needs would to occur please let #ask-it-tech-ops know so that they are aware it is the owner who is performing the removal and for what reasons.

\*\*Removing Jamf Pro and Jamf Protect from a personal computer

When you receive your Sourcegraph device and will no longer be working from a personal device, please reach out to the Tech Ops team and we can unenroll your personal device from our system.

## Related

- [Computer requirements](../tools/computer-setup.md)
- [Internal security](../process/internal-security/index.md)
