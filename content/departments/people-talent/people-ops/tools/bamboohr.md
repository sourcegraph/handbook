# Internal BambooHR use

TODO

## Vendor management

## Automation and workflow creation

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
  - Work email: Manually entered by People team. This is the first step and one of the most importatn steps. It is integrated with Okta: Once we complete this field, Okta created the email in Google Workspace. _If this field is empty, no users will be created and we won't be able to give teammates access to any of the tools they need. Please follow the following convention: preferredName.preferredSurname@sourcegraph.com_
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

![Fields that must be completed in the jobhttps://storage.googleapis.com/sourcegraph-assets/handbook/PeopleTeam/BambooInternal/Job1.png) section](

#### Employee status

All three fields need to be complete before start date:

- **Effective date**: Same as start date
- **Employee Status**: Each teammates should be one of either:
  - Contractor: Not used
  - Full-Time Contractors (Non-US Teammate)
  - Full-Time Contractors (Non-US Teammate) - Intern
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

#### Job Information

All of the following must be complete before start date:

- **Effective date**: Same as start date
- **Location**: Remote
- **Division**
- **Department**
- **Job Title**: if it doesn't exist, follow the instructions above in [Creating a Job Title](#creating-a-job-title)
- **Reports to**

#### Options

Complete before start date:

- **Status**:
  - Proposed, Not Yet Granted: before Sourcegraph's Board of Directors approves them
  - Granted: after Sourcegraph's Board of Directors approves them
    If you are not sure, contact the Legal team.
- **Number of options**
- **Vesting Date**: Same as start date
  Leave the rest blank until they are approved by the Board.

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
    - Any of these reasons [COMING SOON]

Under Employment Status, complete:

- Attrition Type:
  - No PIP
  - PIP

For managers with direct reports, confirm with terminated person's manager what the new reporting structure will be and update it in BambooHR. The report change should be effective after this person's last active day (System Deactivation Date/Last day), which may not necessarily be the same as departure date or last pay date.

## Integrations

Fields access to other tools (lattice)

## Permissions

## Approving changes

Personal information
Role/Compensation/Promotion/Spot Bonus

## Reports for Management (setup)

## Data audit and hygeine

## General reporting for partners/customers
