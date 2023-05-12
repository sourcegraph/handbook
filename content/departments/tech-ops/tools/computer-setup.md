# Computer requirements

- All full-time teammates must have a Sourcegraph computer
- All teammates must work from their Sourcegraph computer
- All Sourcegraph computers must be [managed](../tools/endpoint-antivirus.md) and be in compliance with our [endpoint standards](../process/internal-security/computer-standards.md)
- All teammates must only use their Sourcegraph computer for accessing [company data](#company-data)
- Sourcegraph primarily supports the use of Apple MacOS for work involving internal, private, or confidential company data. (Windows and Linux devices can be used for work that does not involve such sensitive data, like open source coding, please note that we do have partial Linux support. Exceptions can be made on a case-by-case basis, subject to approval by the security team.)
- All teammates should adhere to our related usage and access policies:
  - [Device usage and privacy policy](../process/team_device_usage_privacy.md)
  - [Access control policy](../../../company-info-and-process/policies/access-control-policy.md)
  - [Protect company assets and use them properly - Code of conduct](../../../company-info-and-process/communication/code_of_conduct.md#respect-others-and-their-property-and-confidential-information)

## Company data

Company data is any personal, confidential, or sensitive teammate or client information. This would include (but is not limited to): customer data and metadata, Sourcegraph IP, audit logs, security incidents, contracts, personal information about clients or teammates, and internal communications, such as email and Slack. You can more about this in our [Data management policy](../../../company-info-and-process/policies/index.md).

We are currently improving our Acceptable Use Policy, which will give further details on data handling expectations and device usage, such as use of mobile phones/tablets. Access is limited to Gmail, Calendar, Zoom, Slack, and Airbase on your mobile device, which must be password protected, screen lock enabled, updated with the latest software, and not jailbroken.

## Setting up your computer

1. Install [Jamf Pro and Protect](../tools/endpoint-antivirus.md). All laptops are required to be managed through Jamf.
2. Set up Sourcegraph's [endpoint standards](../process/internal-security/computer-standards.md). All standards are mandatory.
3. Check that your warrenty information is reflected on your [Apple device](https://support.apple.com/en-us/HT202741).

Note: All devices purchased through our partners will have been purchased with a warranty. If it is not reflected please reach out to Tech Ops. If you purchased the device yourself and forgot to include a warranty please do so within 30 days.

## Ordering a Sourcegraph computer

Please go [here](../../../benefits-pay-perks/benefits-perks/spending-company-money.md#computers) for more information about the recommended devices for all our teammates as well as steps for ordering a device.

Please go [here](../../../benefits-pay-perks/benefits-perks/spending-company-money.md#laptop-upgrade) to see our policy on computer upgrades.

## Requesting a loaner

Tech Ops has a number of computers available to be allocated in the event you need one. Please reached out to the Tech Ops team in the #it-tech ops channel to request a device. As we are a global company not all situations can be accommodated through this process, however, Tech Ops is committed to ensuring you have access to the device you need to do your job and will work with you to find the right solution.

## Use of personal devices

If you are a temporary contractor or if there has been some damage or circumstance where the machine is unavailable, you may use a personal device as a temporary solution provided that you set up Jamf or, at a minimum, set up our [standards](../process/internal-security/computer-standards.md) and have an antivirus installed on the device.

If you do work from your non-company device you would be acknowledging the risks associated with doing so. For example, if anything happens to the device (broken/stolen/etc) it would not be the responsibility of Sourcegraph to replace or fix it. If there were to be a breach and company data was compromised then the computer could be taken over by a forensic team and inspected.

Please reached out to the Tech Ops team in the #ask-it-tech ops channel if you will be using a personal device for any reason.

## Damaged computers

If something has happened to your Sourcegraph device please contact #ask-it-tech-ops and we can assist you in fixing your device, getting you a loaner while your device is getting fixed, or helping you send your device to be evaluated and repaired/replaced. All Sourcegraph computers should be purchased with Apple Care.

For repairs under warranty in the US, a teammate can either send it to our partner, ComputerCare, to be fixed or else go to their local Apple store. For repairs not under warranty please contact #it-tech-ops to have it sent to ComputerCare to be evaluated and repaired/replaced.

For repairs outside of the US, a teammate should only go to an Apple store directly or a certified Apple repair center.

All devices being sent for repair need to be wiped of all data, this should be done by Tech Ops through Jamf prior to dropping the device off.

## Used computers

If you have a device that you are having [upgraded](../../../benefits-pay-perks/benefits-perks/spending-company-money.md#laptop-upgrade) you can either:

1. Participate in our [buyback program](../process/buyback.md), where we will transfer ownership to you
2. Return it to Sourcegraph

## Returning computers

To return a Sourcegraph device that is no longer needed, please contact Tech Ops with the following information to assess the best method of returning the device:

- Serial number of the device and specs of the device
- Are there any issues with the laptop?
- Would you like a box and a label shipped to you or just the label (this will be emailed)?
- Address and phone number for shipping

## What if I have a business need for Windows or Linux

- For those devices where a business need is required for a Windows environment (i.e. to run certain applications), we will create a virtual environment through the use of [Amazon Workspaces](https://aws.amazon.com/workspaces/) and show each user how they can use this on the Apple device.
- We can create a similar Linux environment for those wishing to have this capability on their Apple devices.
- We can manage and monitor these environments remotely hence we can make sure they are compliant with our policies.

## Why did we standardize to macOS

- We are all-remote: our teammates work all over the world, from the office of their choosing, and this has inherent risks for device management (such as unauthorized access, an increased likelihood that a device is lost/stolen, and wireless network attacks). We feel that Macs, and the tools we can install on Macs, can provide us with the greatest ability to protect these devices and the data accessed while continuing to support our global teammates.
- We are customer-first: we have an obligation to protect our clients' and teammates' data and privacy. Standardizing to Mac and restricting our access policy is part of adhering to this promise.
- We are growing: as we grow we have begun standardizing across all areas of our business. Having a standardized device that all teammates use will provide a platform on which we can all build and deploy more efficiently across Sourcegraph.

## Linux device exceptions

Sourcegraph primarily supports the use of Apple MacOS. However, we understand that certain circumstances and business needs may necessitate the use of Linux for product development and other tasks. In recognition of this, we extend partial support to Ubuntu-based Linux. This support involves a set of mandatory security measures to protect sensitive data. These include full disk encryption, the use of a managed Chrome browser, and endpoint security. Our security team will oversee the installation of the endpoint security, which incorporates a Mobile Device Management (MDM) solution to verify device compliance. These safeguards are essential to uphold our commitment to data security and integrity. Contact the security team to apply for an exception. Keep in mind that each request will be evaluated individually and approval will be at the discretion of the head of security.
