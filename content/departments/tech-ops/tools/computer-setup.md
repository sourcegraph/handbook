
## Computer requirements

- All full-time teammates must have a Sourcegraph computer
- All teammates must work from their Sourcegraph computer
- All teammates should adhear to our related usage and access policies:
  - [Device useage and privacy policy](../process/team_device_usage_privacy.md)
  - [Access control policy](../../../company-info-and-process/policies/access-control-policy)
  - [Protect company assets and use them properly - Code of conduct](../../../company-info-and-process/communication/code_of_conduct.md#respect-others-and-their-property-and-confidential-information)

## Security requirements for your Sourcegraph computer
1. Have all our [endpoint standards](../process/internal-security/computer-standards.md) setup on your computer at all times
2. Install Workspace One & Carbon Black

## Ordering a Sourcegraph computer

Please go [here](../benefits-pay-perks/benefits-perks/spending-company-money.md#computers) for more information about the recommended devices for all our teammates as well as steps for ordering a device.

Please go [here](../benefits-pay-perks/benefits-perks/spending-company-money#laptop-upgrade) to see our policy on computer upgrades.

## Use of personal devices
If you are a temporary contractor, waiting to receive a Sourcegraph computer, or if there has been some damage or circumstance where the machine in unavailable, you may use a personal device as a temporary solution provided that you either set up WS1 and Carbon Black or, at a minimum, setup our [standards](../tech-ops/process/internal-security/computer-standards.md) and have an antivirus installed on the device. Please reached out to the Tech Ops team in the #it-tech ops channel to get an invite to our antivirus software, Carbon Black.  

If you do work from your non-company device you would be acknowledging the risks associated with doing so. For example, if anything happens to the device (broken/stolen/etc) it would not be the responsibility of Sourcegraph to replace or fix it. If there were to be a breach and company data was compromised then the computer could be taken over by a forensic team and inspected.

## Requesting a loaner
Tech Ops has a number of prevoiusly used computers available to be allocated in the event you need one. Please reached out to the Tech Ops team in the #it-tech ops channel to request a device. As we are a global company not all situations can be accomodated through this process, however Tech Ops is committed to ensuring you have access to the device you need to do your job and will work with you to find the right solution.

## Damaged computers
If something has happened to your Sourcegraph device please contact #IT-Tech-Ops and we can assist you in fixing your device, getting you a loaner while your device is getting fixed, or helping you send your device to be evaluated and repaired/replaced. All Sourcegraph computers should be purchased with Apple Care or some form of warranty. For repairs under warranty a teammate can either send it to our partner, ComputerCare, to be fixed or else go to their local Apple store. For repairs not under warrenty please contact It-Tech-Ops to have it sent to ComputerCare to be evaluated and repaired/replaced.

## Used computers
If you have a device that you are having replaced, or you are leaving the company you can either:
1. participate in our [buyback program](../process/buyback.md), where we will tranfer ownership to you. 
2. return it to Sourcegraph, through ComputerCare, to be repurposed or recycled. If you would like to return it to Sourcegraph, please contact #it-tech-ops to open a ticket for you and have a shipping label and box sent to you. 

### **Workspace One**

### **What is Workspace One?**

VMWare’s Workspace One is an Endpoint Management system that provides Tech Ops with the ability to manage Sourcegraph devices (computers) remotely. More information about Workspace One can be found [here](https://www.vmware.com/products/workspace-one.html).

**Carbon Black**

**What is Carbon Black?**

VMWare’s Carbon Black is an antivirus software that we are deploying to Sourcegraph devices (laptops). Carbon Black monitors for malicious softwares and adware that may present security risks.

**What you can do prior to Workspace One Enrollment**:

If you haven't done so already please configure your laptop in accordance with our Laptop Standards [here](../process/internal-security/index.md)

**How to Enroll in Workspace One for MacOS and Windows**

You will receive an email invite from **Airwatch** with steps on how to enroll in Workspace One. Below is a short summary of what you’ll need to do. If you do not receive an invitation from Airwatch please reach out in the #it-tech-ops Slack channel.

1. Click the link to download and install the WS One client in the email invite you receive.
2. Once that is installed, run the program and enter your Sourcegraph email address into the WS One Intelligent Hub.
3. You should then be prompted for your Okta credentials.
4. Follow along with the prompts you receive in WS One to complete the installation. Multiple profiles will be installed on your computer.
5. After it signs you in, you’ll be brought to a main app page and your work is done! Our antivirus software, Carbon Black, will then begin to download and install in the background.

**What Workspace One Hub will automatically install on the device**

The Hub app will look for a certain set of applications on your computer and push them out automatically if they are not present, they are:

- 1Password
- Google Chrome
- Carbon Black
- Slack
- Zoom

**How to Enroll in Workspace One for Linux device**

Please reach out to Tech Ops for more information.

**Installing Workspace One and Carbon Black on my personal computer**
You may enroll Workspace One and Carbon Black on as many devices as necessary to ensure our company and client data is protected, including personal devices as long as they are used only as a temporary measure.

1. Go to [getwsone.com](https://getwsone.com/)
1. Once that is installed, run the program and enter your Sourcegraph email address into the WS One Intelligent Hub.
3. You should then be prompted for your Okta credentials.
4. Follow along with the prompts you receive in WS One to complete the installation. Multiple profiles will be installed on your computer.
5. After it signs you in, you’ll be brought to a main app page and your work is done! Our antivirus software, Carbon Black, will then begin to download and install in the background.

**Removing Workspace One and Carbon Black from my personal computer**

In order to remove Workspace One and Carbon Black from your personal device, please reach out to the Tech Ops team. The Tech Ops team can initiate what’s called an “Enterprise Only Wipe” which will remove Workspace One and all associated profiles and applications (Carbon Black) from the machine.

When you receive your Sourcegraph device and will no longer be working from a personal device, please reach out to the Tech Ops team and we can unenroll your personal device from Carbon Black. 
