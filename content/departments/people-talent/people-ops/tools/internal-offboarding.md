# Internal Offboarding Process


_This section walks internal stakeholders through the operational process of offboarding someone, once we know they are leaving the company._

We use Process St as our offboarding tool. There are several teams involved in this process and the tool allows us to assign and notify everyone when they need to be involved. The People team works with Finance, Tech Ops, Security, and Legal to get everything ready when someone leaves Sourcegraph.


## People Partners


### Kicking off the process

Once we are certain someone is leaving us (be it voluntarily, involuntarily, or through mutual separation) the People Partner responsible for that department will go to the Offboarding workflow in Process St and click on **_Run Workflow_**. This will create a new one using the Offboarding template. The naming convention for a workflow is: “First + Last name + Offboarding”


### Teammate information

The first task is the most important one. All the fields must be completed in order for the automations and integrations to work properly. If you have any questions, reach out to Inés.

It is important to click on **_Complete task_**, as it triggers a message to the Slack #offboarding-private channel with all the information needed:

* Departing Employee’s Name
* Departure Date
* System Deactivation Date
* Pay Through Date 
* Manager
* Role
* Type of exit
* Regrettable or Non-Regrettable
* If email forwarding is needed (y/n)
* Severance offered? 
* Type of Employment
* Hold laptop for legal review?
* People Partner/Contact


### People team - General Tasks

The People Partner responsible for this offboarding needs to complete the steps in this task:

* BambooHR - Profile termination
* Lattice - Exit interview and survey (Only if Voluntary departure)
* Send Orrick an email to suspend the user.

While the first two are done in their own platform (BambooHR and Lattice respectively), the last one can be done in Process St. When clicking on **_Send_**, the email will send automatically:

* To: hsafi@orrick.com
* CC: people-ops@sourcegraph.com
* Subject: Suspend Vesting - _First name Last name_ - _Departure date_
* Body:

        Please suspend vesting for *First name Last name* effective *Departure date*. Thanks!


Here you can read more about [Exit interview](../process/performance-coaching/exit-interview.md) & [experience exit survey](../process/teammate-sentiment/exit-survey.md).


### People team - NO Severance

This task will only appear if the teammate being offboarded is not signing a severance agreement.

The task assigned is sending the Offboarding Information email. Depending on location (US or Non US) different templates with all the specific data (departure date, name, manager, etc) will show. The People Partner needs to copy and paste the template and send the email to the pertinent people:

* To: Teammate’s personal email
* CC: Manager, People Partner

You can find a template of this email [here](https://docs.google.com/document/d/1YznrIoaI8JtKFckn-_zN1UKexyjFX9hyjuURp5a9qKY/edit).


### People team - Severance

This task will only appear if the teammate being offboarded is signing a severance agreement.

**Separation agreement**

These are the tasks that People Partners need to complete:

* Draft appropriate separation agreement (employee, 40+, consultant)
* Send separation agreement via DocuSign
* Add separation agreement to GDrive folder
* Forward signed separation agreement to Accounting (Non US: ap@sourcegraph.com; US teammates: payroll@sourcegraph.com)
* Once the separation agreement is signed, complete the "Signed severance" column as "yes" in this form: https://bit.ly/3nc1B6R

**Offboarding Information email**

Finally, they must send the Offboarding Information email. Depending on location (US or Non US) different templates with all the specific data (departure date, name, manager, etc) will show. The People Partner needs to copy and paste the template and send the email to the pertinent people:

* To: Teammate’s personal email
* CC: Manager, People Partner

You can find a template of this email [here](https://docs.google.com/document/d/1YznrIoaI8JtKFckn-_zN1UKexyjFX9hyjuURp5a9qKY/edit).

Clicking on **_Complete Task_** adds a line to the [Severance sheet](https://bit.ly/3nc1B6R). Here we keep track of everyone signing a Severance Agreement. This is also for the Legal team’s visibility.


## Managers

There are different tasks managers need to complete when a teammate is offboarding.


### Communication

Announce the departure to the team and in the different channels. Here’s the [departure announcement protocol](https://handbook.sourcegraph.com/company-info-and-process/communication/announcements/#departures).


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

* Are they getting COBRA coverage and for how long
* Departure day and pay through date
* Are they getting severance

Tasks:

* Schedule final paycheck
* Remove from payroll
* Send severance
* Provide COBRA

**Accounting**

They always need to be involved.

Information they need:

* Type of employment
* Department

Tasks:

* Check for open expenses
* Cancel corporate card (if applicable)
* If person is Non US: Schedule final paycheck + Severance (if applicable)
* If person is in a role that receives commission: Check for and calculate commission & bonus
* If person is in a role that receives commission: Remove them from Captivate

Keep in mind that currently the tasks are completed by two different people in the team. Commissions and bonuses are handled by Sam Ulrich, the rest by Amy Johnson.


### Legal

There are two main things Legal needs to do in this process:

Information they need:

* If teammate started before May 2021
* If they are signing a severance agreement

Tasks:

* If teammate started before May 2021: confirm if teammate has vested ISOs with 3 month PTEP instead of 10 years.
* If they are signing a severance agreement: know if someone did not sign and why. They can see the information [here](https://bit.ly/3nc1B6R)


### Security

They always need to be involved.

Information they need:

* When someone is offboarded

Tasks:

* Remove teammate from sensitive tools.


### Tech Ops

They always need to be involved.

Information they need:

* When someone is offboarded
* Department
* Role
* Manager
* Email

Tasks:

* Remove teammate from tools
* Deactivate accounts
* Lock and remotely wipe the device using Workspace One
* Sending a box and label to the person’s home address to ship back their laptop
* If the computer is older than a year and the person wants to purchase it: coordinate that. Instructions can be found [here](https://handbook.sourcegraph.com/departments/tech-ops/process/buyback/).




## Severance agreements

## Offboarding differences per employment

- Temporary contractors
- PEO
- US employee
