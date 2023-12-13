# Internal BambooHR use

## How to create a profile

BambooHR profiles are created automatically when someone is marked as hired in Greenhouse via integration. However, here are the steps to create one manually:

### Creating a Job Title

This action is not always needed. We need to create a Job Title only when it is new to BambooHR.

1. Go to **Settings**
2. Click on **Employee Fields**
3. **Job Title**
4. Write the new title on the field and click **Add**

![Steps to creating a Job Title](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/BambooStep1.png)

## Creating a profile

On the Home page, click on New → New Employee top right of the screen.

![Steps to creating a profile](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/BambooStep2.png)

Complete as many of the fields possible. Look at the next section to know which fields we complete and how. Keep in mind that when creating a profile manually, the Options and Commission fields don't appear. You will need to go to the profile after it's been created to complete those missing fields.

## Profile Fields and how to complete them

Here are all the fields in a profile and how we must complete them:

### Personal Tab

#### Basic Information

| **Field**         | **Options**                                        | **Completed by**        | **Comment**                                                                                                                                              |
| :---------------- | :------------------------------------------------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Employee #        | Free text                                          | Automatically assigned  |
| Status            | Active; Inactive                                   | People team/Integration |
| Name              | Free text                                          | People team/Integration | Legal full Name                                                                                                                                          |
| Preferred Name    | Free text                                          | People team/Integration | Displayed name in all integrated tools (e.x: Slack, Gmail, Lattice)                                                                                      |
| Preferred Surname | Free text                                          | People team/Integration | Displayed surname in all integrated tools (e.x: Slack, Gmail, Lattice)                                                                                   |
| Birthdate         | Date selector                                      | Teammate                |
| SSN               | Free text                                          |                         | Leave blank                                                                                                                                              |
| Gender            | Decline; Female; Male; Non-Binary                  | Teammate                |
| Marital Status    | Single; Married; Common Law;Domestic Partnership   | Teammate                |
| Shirt Size        | XSmall-XXLarge                                     | Teammate                |
| Pronouns          | He;She;They;Ze                                     | Teammate                |
| **TimezoneTZ**    | Multi select: Timezones                            | People team/Integration | **This is one of the most important fields to complete. It is integrated with Okta; Okta activation for new teammates is scheduled based on this field** |
| Time Zone         | Free text                                          |                         | Leave blank                                                                                                                                              |
| Region            | Europe; North America - East; North America - West | People team/Integration | Teammates are grouped in these three regions. North america includes USA and Canada. All other countries fall under Europe.                              |

In the image below, you can see in red the fields the People Team must complete before someone starts:

![Fields that must be completed in the basic information section](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/Profile1.png)

#### Address & Mailing Address

These two sections must be completed by the teammate. Both sections have to be filled out, even if the information is repeted.

#### Contact

- **Phone**: Completed by teammate
- **Email**: Completed by People
  - Work email: Manually entered by People team. This is the first step and one of the most important steps. It is integrated with Okta: Once we complete this field, Okta created the email in Google Workspace. _If this field is empty, no users will be created and we won't be able to give teammates access to any of the tools they need. Please follow the following convention: preferredName.preferredSurname@sourcegraph.com_
  - Personal email: Integrated via Greenhouse. If not, manually entered by People team

#### Social Links

- **GitHub**: Completed by People. If this hasn't been provided by the teammate before their start date, they must complete this field on their first week as part of their onboarding checklist.

#### Education

Leave blank

#### Assets

- **Computer Serial Number**: Completed by teammate

In the image below, you can see in red the fields the People Team must complete before someone starts:

![Fields that must be completed in the contact and social links section](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/Profile2.png)

### Job Tab

| **Field**          | **Completed by**       | **Comment**                                               |
| :----------------- | :--------------------- | :-------------------------------------------------------- |
| **Hire Date**      | Automatically assigned | **This is one of the most important fields to complete.** |
| Ethnicity          | Teammate               |
| EEO Job Category   |                        | Leave blank                                               |
| Veteran status     | Teammate               |
| Direct Reports     | Automatically assigned |
| Sexual Orientation | Teammate               |
| Disability status  | Teammate               |
| People Manager     | People team            | Complete before start date                                |

In the image below, you can see in red the fields the People Team must complete before someone starts:

![Fields that must be completed in the job section](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/Job1.png)

#### Employee status

All three fields need to be complete before start date:

- **Effective date**: Same as start date
- **Employee Status**: Each teammates should be one of either:
  - Contractor: Not used
  - Full-Time (Non-US Teammate)
  - Full-Time (Non-US Teammate) - Intern
  - Full-Time Employee (US Teammate)
  - Full-Time Employee (US Teammate) - Intern
  - Full-Time PEO Employee (Non-US Teammate)
  - Furloughed: Not used
  - Part-Time Contractor: Part time contractor (external people we contract their services for a defined amount of time)
  - Temporaty Contractor: Full time contractor (external people we contract their services for a defined amount of time)
- **Comment**

#### Compensation

Complete before start date:

- **Effective date**: Same as start date
- **Pay Schedule**:
  - Monthly: Non US teammates
  - Twice Monthly: US teammates
- **Pay Type**: This field is linked to Lattice, so it's important to give the right type
  - Salary (gets Lattice access)
  - Hourly (for Interns, Temporary & Part time contractors - they don't get access to Lattice)
  - Commission Only (not used)
- **Pay Rate**: Compensation. Make sure it is in USD. Cadance will be per Year for all teammates and hourly for Interns, Temporary & Part time contractors.
- **Overtime Status**: Exempt for all teammates and Non-Exempt for Interns, Temporary & Part time contractors. Make sure to add the correct cost of extra hours.
- **Change reason**: Complete
- **Comment**: Add insight
- **Compensation Category and Level**: Confirm with Talent if you don't know.
- **Radford Job Code**: Listed in Assemble, confirm with People Ops if unsure.

#### Job Information

All of the following must be complete before start date:

- **Effective date**: Same as start date
- **Location**: Remote
- **Division**
- **Department**
- **Job Title**: if it doesn't exist, follow the instructions above in [Creating a Job Title](#creating-a-job-title)
- **Reports to**
- **Cost Center**: we use this field to sync with our financial systems through Okta.

#### Options

Options are entered only by the People Ops and Talent Teams.
New hires should have the following completed before their start date. Number of shares must match their offer letter.

New grants are entered into BambooHR as follows:

**Status:** Proposed, Not Yet Granted

**No. of Options:** Granted options amount in number of shares

**Vesting Start Date:** Date of hire or refresh letter

**Grant Date:** Leave blank

**Exercise Price:** Leave blank

**Certificate Number:** Leave blank

**Equity Notes:** Include Grant Type (see below)

Always include a Grant Type in the Equity Notes in BambooHR option section.

- New Hire Grant
- Promotion
- Equity Refresh

The board approves equity grants on a quarterly basis. The People Team is responsible for updating status to "Granted," adding a Grant Date, and updating the Exercise Price field within one week of approval.

#### Commission

Not all roles have commissions. For those who do, all of these must be completed before start date:

- **Commission date**: same as start date
- **Commission amount**: in USD
- **Paid per**: Year
- **Commission Pay Type**: Commission
- **Pay Schedule**: Monthly
- **Overtime Status**: Exempt
- **Commision Change Reason**
- **Comments**

#### Bonus

This is rarely used. When needed, complete all field.

## Editing a profile

There are different ways of editing a profile.

### Personal tab

All of these fields can be updated or edited by typing the new/correct information.

Once the changes are made, click on **Save changes** to make them effective.

Some of these fields can be edited by teammates. When they do, the People team receives a notification and have to approve the changes before they show in BambooHR.

### Job tab

Just like in the Personal tab, all free style and drop down fields can be updated/edited and we'll have to click on **Save changes** for them to be effective.

For Employment Status, Compensation, Job Information, Options, and Commission, there are two ways of changing the information:

**Editing**
To edit the information, put the cursor on the line you want to edit and click on the pencil. Make the changes and the line will be edited. The same applies for removing the line.

This _only_ applies for mistakes. We do not edit lines if something in the teammate's employment changes. When that's the case, we update by adding a new line.

![How to edit a field](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/editing.png)

**Updating**
We update information by clicking on **+ Update XXX**. This will add a new line on top of the excisting ones. A good example of when we do this is when a teammate has a new manager o a change in compensation.

Keep in mind Effective Date refers to the day the change will be effective, not the date we are doing the update.

![How to edit a field](https://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/updating.png)

## How to terminate someone

Go to the person's profile, and update Employment Status in the Job tab.

Complete the following fields:

- Effective Date (departure date/paythrough date)
- Employment Status: Terminated
- Termination Type: Voluntary/Involuntary/Mutal Separation
- Termination Reason
- Eligible for Rehire:
  - Yes:
    - No PIP
  - No
    - PIP
    - Any of these reasons: Misconduct, Gross misconduct, PIP-related Opt Out, Performance (Coaching/Unsuccessful PIP)

Under Employment Status, complete:

- Attrition Type:
  - Regrettable
  - Non-Regrettable

For managers with direct reports, confirm with terminated person's manager what the new reporting structure will be and update it in BambooHR. The report change should be effective after this person's last active day (System Deactivation Date/Last day), which may not necessarily be the same as departure date or last pay date.

### Rescinded offers/acceptances

If someone has signed their contract but will not be starting after all, we need to terminate them in BambooHR. The process is the same as explained above, however, we must add a note in the Employment Status comment section. This is what we state:

- If we rescinded the offer: "Offer rescinded"
- If the person decided not to join: "Withdrew acceptance before onboarding"

Keep in mind that the start date will be after the rescinding of the offer, therefore the start date will override the rescinding date. We will need to delete the start date entry.

## Approving changes

There are many types of change requests that can be made in Bamboo

- Personal information
- Role/Compensation/Cost Center
- Promotion/Spot Bonus
- Department/Division
- Manager
- etc

The standard approval process:

1. Head of Department
2. Finance
3. People Team

The People Ops team monitors the approval chain and sends Slack reminders to approvers if they are a blocker and have not submitted approval.

Tech Ops needs to be included when Departments or Divisions change, so they can ensure teammates don’t lose access to any systems/historical data at the wrong time. Here is how we process this:

**Step 1:** People Ops sees a department and/or division change request come through Bamboo

**Step 2:** People Ops triggers the Department/Division change workflow in Process St

**Step 3:** People Ops fills out the necessary Teammate information

**Step 4:** Tech Ops completes all necessary tasks on their end and marks their Process St task as complete. This triggers a slack message to the #wg-bamboo-org-updates channel.

**Step 5:** People Ops gives final approval in Bamboo and closes out the Process St checklist.

Payroll must be included when cost centers change. We ensure this by sending a slack message in #wg-benefits-payroll. Payroll is also included in the Bamboo approval chain when a change request is submitted.
