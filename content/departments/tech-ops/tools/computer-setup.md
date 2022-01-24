# Computer setup

As we attempt for SOC2 certification we are also acknowledging that we are more susceptible to attacks, putting our IP, our client’s data, and our teammates’ personal information all at greater risk of being compromised. While having [standards](../process/internal-security/index.md) in place along with an endpoint management and an antivirus system to monitor our devices is required for SOC2, it is also proactively preventing malicious attacks and threats.

We are asking that all teammates work from their Sourcegraph computer and all Sourcegraph computers be enrolled with both Workspace One and Carbon Black in order to be compliant.

If you are waiting to receive a Sourcegraph computer or if there has been some damage or circumstance where the machine in unavailable, you may use a personal device as a temporary solution, please skip to Minimum Security Requirements for Personal Device below. Additionally, we maybe able able to allocate a loaner Sourcegraph laptop for use use during this temporary period. Please reach out to Tech Ops for additional assistance.

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

**Minimum Security Requirements for Personal Devices**

If you are waiting for the arrival of your Sourcegraph laptop, or there is an issue with your current Sourcegraph laptop, and need to use your personal machine temporarily, please reach out the #it-tech-ops Slack channel to get an additional enrollment invitation to Workspace One and Carbon Black. You may enroll this solution on as many devices as necessary to ensure our company and client data is protected.

If using your personal device **temporarily** and you **do not** wish to install Workspace One, please ensure that you are doing the following:

- You are following the [laptop setup standards](../process/internal-security/index.md)
- You have reached out to the Tech Ops team in the #it-tech ops channel to get an invite to our antivirus software, Carbon Black.

If you do work from your non-company device you would be acknowledging the risks associated with doing so. For example, if anything happens to the device (broken/stolen/etc) it would not be the responsibility of Sourcegraph to replace or fix it. If there were to be a breach and company data was compromised then the computer could be taken over by a forensic team and inspected.

**Removing Workspace One and Carbon Black from my personal computer**

In order to remove Workspace One and Carbon Black from your personal device, please reach out to the Tech Ops team. The Tech Ops team can initiate what’s called an “Enterprise Only Wipe” which will remove Workspace One and all associated profiles and applications (Carbon Black) from the machine.

When you receive your Sourcegraph device and will no longer be working from a personal device, please reach out to the Tech Ops team and we can unenroll your personal device from Carbon Black. Please note by agreeing to use a personal computer temporarily, you are agreeing to follow these requirements.
