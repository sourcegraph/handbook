# **Workspace One (WS1)**

### **What is Workspace One?**

VMWare’s Workspace One is an Endpoint Management system that provides Tech Ops with the ability to manage Sourcegraph devices (computers) remotely. More information about Workspace One can be found [here](https://www.vmware.com/products/workspace-one.html).

**Carbon Black (CB)**

**What is Carbon Black?**

VMWare’s Carbon Black is an antivirus software that we are deploying to all eligible Sourcegraph devices (laptops). Carbon Black monitors for malicious software and adware that may present security risks.

**What you can do prior to Workspace One Enrollment**:

If you haven't done so already please configure your laptop in accordance with our [endpoint standards](../process/internal-security/computer-standards.md).

**How to Enroll in Workspace One for macOS and Windows**

1. Go to [getwsone.com](https://getwsone.com/)
1. Once that is installed, run the program and enter your Sourcegraph email address into the WS One Intelligent Hub.
1. You should then be prompted for your Okta credentials.
1. Follow along with the prompts you receive in WS One to complete the installation. Multiple profiles will be installed on your computer.
1. After it signs you in, you’ll be brought to a main app page and your work is done! Our antivirus software, Carbon Black, will then begin to download and install in the background.

**What Workspace One Hub will automatically install on the device**

The Hub app will look for a certain set of applications on your computer and push them out automatically if they are not present, they are:

- 1Password
- Google Chrome
- Carbon Black
- Slack
- Zoom

**How to Enroll in Workspace One for Linux device**

The steps for enrolling your device in WS1 & CB are more manual. Please reach out to Tech Ops for more information.

**Installing Workspace One and Carbon Black on a personal computer**
You may enroll Workspace One and Carbon Black on as many devices as necessary to ensure our company and client data is protected, including personal devices.

**Removing Workspace One and Carbon Black from a personal computer**

In order to remove Workspace One and Carbon Black from your personal device, please reach out to the Tech Ops team. The Tech Ops team can initiate what’s called an “Enterprise Only Wipe” which will remove Workspace One and all associated profiles and applications (Carbon Black) from the machine.

Workspace One and Carbon Black should never be removed from a Sourcegraph computer. If there is a circumstance where this needs would to occur please let #it-tech-ops know so that they are aware it is the owner who is performing the removal and for what reasons.

When you receive your Sourcegraph device and will no longer be working from a personal device, please reach out to the Tech Ops team and we can unenroll your personal device from Carbon Black.

### Known issues with Carbon Black

- Carbon Black affects Ethernet connections on Mac OS
- Carbon Black silently blocks connections to some public WiFi networks and personal hotspots
- Carbon Black affects the iPad Sidecar functionality on Mac OS

If you are experiencing any of these issues, some teammates have had success following [these resolution steps](https://community.carbonblack.com/t5/Knowledge-Base/Carbon-Black-Cloud-Network-is-Slow-or-Disconnects-after-Sensor/ta-p/109745).

## Related

- [Computer requirements](../tools/computer-setup.md)
- [Internal security](../process/internal-security/index.md)
