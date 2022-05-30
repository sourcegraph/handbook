# Internal BambooHR use

TODO

Vendor management
Automation and workflow creation

## How to create a profile

BambooHR proficel are created automatically when someone is marked as hired in Greenhouse via integration. However, here are the steps to create one manually.

step 1

### Creating a Job Title

This action is not always needed. We need to create a Job Title only when it is new to BambooHR.

1. Go to **Settings**
2. Click on **Employee Fields**
3. **Job Title**
4. Write the new title on the field and click **Add**

## Creating a profile

On the Home page, click on New → New Employee top right of the screen.

step 2

Complete as many of the fields possible. Look at the next section to know which fields we complete and how. Keep in minf that when creating a profile manually, the Options and Commission fields don't appear. You will need to go to the profile after it's been created to complete those missing fields.

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
Profile 1

#### Address & Mailing Address

These two sections must be completed by the teammate. Both sections have to be filled out, even if the information is repeted.

#### Address & Mailing Address

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
Profil2

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

Integrations
Fields access to other tools (lattice)
Permissions
Approving changes
Personal information
Role/Compensation/Promotion/Spot Bonus
Reports for Management (setup)
Data audit and hygeine
General reporting for partners/customers
