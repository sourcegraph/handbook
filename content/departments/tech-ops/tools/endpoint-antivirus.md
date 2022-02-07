### **Workspace One**

### **What is Workspace One?**

VMWare’s Workspace One is an Endpoint Management system that provides Tech Ops with the ability to manage Sourcegraph devices (computers) remotely. More information about Workspace One can be found [here](https://www.vmware.com/products/workspace-one.html).

**Carbon Black**

**What is Carbon Black?**

VMWare’s Carbon Black is an antivirus software that we are deploying to Sourcegraph devices (laptops). Carbon Black monitors for malicious softwares and adware that may present security risks.

**What you can do prior to Workspace One Enrollment**:

If you haven't done so already please configure your laptop in accordance with our [endpoint standards](../process/internal-security/computer-standards.md)

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

The steps for enrolling your device in WS1 are more manual. Please reach out to Tech Ops for more information.

## Related
- [Computer requirements](tools/computer-setup.md)
- [Internal security](../process/internal-security/index.md)
