# Internal Offboarding Process

_This section walks internal stakeholders through the operational process of offboarding someone, once we know they are leaving the company._

We use Process St as our offboarding tool. There are several teams involved in this process and the tool allows us to assign and notify everyone when they need to be involved. The People team works with Finance, Tech Ops, Security, and Legal to get everything ready when someone leaves Sourcegraph.

## People Partners

### Kicking off the process

Once we are certain someone is leaving us (be it voluntarily, involuntarily, or through mutual separation) the [People Partner responsible for that department](../index.md#people-partner-alignment) will go to the Offboarding workflow in Process St and click on **_Run Workflow_**. This will create a new one using the Offboarding template. The naming convention for a workflow is: “First + Last name + Offboarding”

### Teammate information

The first task is the most important one. All the fields must be completed in order for the automations and integrations to work properly. If you have any questions, reach out to Inés.

#### Fields

The People Partner responsible for the exit needs to complete the following field:

- **First name**
  - of person leaving Sourcegraph
- **Last name**
  - of person leaving Sourcegraph
- **Sourcegraph email**
  - of person leaving Sourcegraph
- **Job title**
  - of person leaving Sourcegraph
- **Manager email**
  - of person leaving Sourcegraph
- **Manager name**
  - of person leaving Sourcegraph
- **HRBP**
  - People Partner responsible for the exit. An option will be selected from a list.
- **Employment type**
  - of person leaving Sourcegraph. An option will be selected from a list.
- **Department**
  - of person leaving Sourcegraph. An option will be selected from a list.
- **Departure date/Last day payroll/BambooHR date**
  - last official date of employment. This might be different to last day active.
- **Start date (First day employed)**
  - First day of employment at Sourcegraph. This information can be found in BambooHR.
- **System Deactivation Date/Last day**
  - last day active. This is the day we deactivate accounts and, if the person was a manager, we make the org structure changes effective.
- **Started before May 14th 2021**
  - that is the day we made changes in our type of options, so Legal needs to confirm if teammate has vested ISOs with 3 month PTEP instead of 10 years. This fields triggers notifications to the Legal team.
- **Type of exit**
  - An option will be selected from a list. You can read more about the definitions and types of departure here.
- **Regrettable or not**
  - an option will be selected from a list. You can read more about the definitions for this here.
- **Has direct reports?**
  - this triggers a task in the _People team - General Tasks_ section. If the teammate leaving has direct reports, the People Partner needs to confirm with their manager what the new reporting structure will be and update it in BambooHR, using the last day active as the effective date of the change.
- **Severance**
  - this triggers the type of actions the People team, Finance and Legal will make. If the answer is NO, the _People team - NO Severance_ task will be assigned to the People Partner, Legal will not be notified, and Finance will not be asked to process severance. If the answer is YES, the _People team - Severance_ task will be assigned to the People Partner, Legal will be notified, and Finance will be asked to process severance.
- **Months of Severance**
  - single number input. It is data that will populate in emails and information to the Finance team.
- **Severance amount**
  - include amount with two decimals. The unit will automatically be USD. This is information the Finance team needs.
- **If email forwarding is needed (y/n)**
  - this will be sent in the Slack automated message sent to the offboarding channel.
- **Hold laptop for legal review**
  - this notifies the Tech Ops team if we can wipe the laptop or not (e.g. if there is an active litigation)
- **Will get COBRA subsidy as part of severance**
  - this is information Payroll needs to know before processing last pay
- **How many months of COBRA coverage?**
  - this is information needed by Payroll and it is also used in emails sent to the person who is leaving.
- **Is this role eligible for commissions or bonuses? (Check BambooHR - Job tab)**
  - this information can be found in BambooHR and it triggers the notification to the person in Finance responsible for commissions and bonuses.

#### Slack message

It is important to click on **_Complete task_**, as it triggers a message to the Slack #offboarding-private channel with all the information needed:

- Departing Employee’s Name
- Departure Date
- System Deactivation Date
- Pay Through Date
- Manager
- Role
- Type of exit
- Regrettable or Non-Regrettable
- If email forwarding is needed (y/n)
- Severance offered?
- Type of Employment
- Hold laptop for legal review?
- People Partner/Contact

### People team - General Tasks

The People Partner responsible for this offboarding needs to complete the steps in this task:

- BambooHR - Profile termination
- Lattice - Exit interview and survey (Only if Voluntary departure)
- Send Orrick an email to suspend the user.

While the first two are done in their own platform (BambooHR and Lattice respectively), the last one can be done in Process St. When clicking on **_Send_**, the email will send automatically:

- To: hsafi@orrick.com
- CC: people-ops@sourcegraph.com
- Subject: Suspend Vesting - _First name Last name_ - _Departure date_
- Body:

        Please suspend vesting for *First name Last name* effective *Departure date*. Thanks!

Here you can read more about [Exit interview](../process/performance-coaching/exit-interview.md) & [experience exit survey](../process/teammate-sentiment/exit-survey.md).

### People team - NO Severance

This task will only appear if the teammate being offboarded is not signing a severance agreement.

The task assigned is sending the Offboarding Information email. Depending on location (US or Non US) different templates with all the specific data (departure date, name, manager, etc) will show. The People Partner needs to copy and paste the template and send the email to the pertinent people:

- To: Teammate’s personal email
- CC: Manager, People Partner

You can find a template of this email [here](https://docs.google.com/document/d/1YznrIoaI8JtKFckn-_zN1UKexyjFX9hyjuURp5a9qKY/edit).

### People team - Severance

This task will only appear if the teammate being offboarded is signing a severance agreement.

**Separation agreement**

These are the tasks that People Partners need to complete:

- Draft appropriate separation agreement (employee, 40+, consultant)
- Send separation agreement via DocuSign
- Add separation agreement to GDrive folder
- Forward signed separation agreement to Accounting (Non US: ap@sourcegraph.com; US teammates: payroll@sourcegraph.com)
- Once the separation agreement is signed, complete the "Signed severance" column as "yes" in this form: https://bit.ly/3nc1B6R

**Offboarding Information email**

Finally, they must send the Offboarding Information email. Depending on location (US or Non US) different templates with all the specific data (departure date, name, manager, etc) will show. The People Partner needs to copy and paste the template and send the email to the pertinent people:

- To: Teammate’s personal email
- CC: Manager, People Partner

You can find a template of this email [here](https://docs.google.com/document/d/1YznrIoaI8JtKFckn-_zN1UKexyjFX9hyjuURp5a9qKY/edit).

Clicking on **_Complete Task_** adds a line to the [Severance sheet](https://bit.ly/3nc1B6R). Here we keep track of everyone signing a Severance Agreement. This is also for the Legal team’s visibility.

## Managers

There are different tasks managers need to complete when a teammate is offboarding.

### Communication

Announce the departure to the team and in the different channels. Here’s the [departure announcement protocol](../../../../company-info-and-process/communication/announcements.md#departures).

### Handbook

Remove or replace teammates from all handbook pages.

### Calendar

Remove them from any team meeting and recurring 1:1.

## Working with other teams

In Process St, each task is assigned to the person responsible for it and they only get notified if the conditions apply. For example, if the person departing is a Non US teammate, Payroll will not be notified.

### Finance

Two areas of the Finance team are involved in Offboarding:

**Payroll**

This team is only involved if the teammate leaving is a US employee.

Information they need:

- Are they getting Sourcegraph paid COBRA and for how long
- Departure day and pay through date
- Are they getting severance

Tasks:

- Schedule final paycheck
- Remove from payroll
- Send severance
- Provide COBRA

**Accounting**

They always need to be involved.

Information they need:

- Type of employment
- Department

Tasks:

- Check for open expenses
- Cancel corporate card (if applicable)
- If person is Non US: Schedule final paycheck + Severance (if applicable)
- If person is in a role that receives commission: Check for and calculate commission & bonus
- If person is in a role that receives commission: Remove them from Captivate

Keep in mind that currently the tasks are completed by two different people in the team. Commissions and bonuses are handled by Sam Ulrich, the rest by Amy Johnson.

### Legal

There are two main things Legal needs to do in this process:

Information they need:

- If teammate started before May 2021
- If they are signing a severance agreement

Tasks:

- If teammate started before May 2021: confirm if teammate has vested ISOs with 3 month PTEP instead of 10 years.
- If they are signing a severance agreement: know if someone did not sign and why. They can see the information [here](https://bit.ly/3nc1B6R)

### Security

They always need to be involved.

Information they need:

- When someone is offboarded

Tasks:

- Remove teammate from sensitive tools.

### Tech Ops

They always need to be involved.

Information they need:

- When someone is offboarded
- Department
- Role
- Manager
- Email

Tasks:

- Remove teammate from tools
- Deactivate accounts
- Lock and remotely wipe the device using Workspace One
- Sending a box and label to the person’s home address to ship back their laptop
- If the computer is older than a year and the person wants to purchase it: coordinate that. Instructions can be found [here](../../../tech-ops/process/buyback.md).

## Severance agreements

## Offboarding differences per employment

- Temporary contractors
- PEO
- US employee
