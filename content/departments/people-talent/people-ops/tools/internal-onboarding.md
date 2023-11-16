# Internal Onboarding Process

This page outlines the steps the People Team takes to onboard a new teammate, from the time they sign their offer to the time they join us.

## Onboarding Tasks

This process occurs prior to a new teammate’s first day, as we set them up for joining Sourcegraph.

### After accepting the offer

Once someone accepts the offer and signs the contract, the Talent team marks them as hired. This creates the profile in BambooHR and sends a **Greenhouse summary email** to onboarding@sourcegraph.com

This email contains all relevant information that we need to complete the person's [BambooHR profile](bamboohr.md#how-to-create-a-profile) and fill the Teammate tracking sheet.

**Step 1: Teammate Tracking Spreadsheet**

- In order to make sure we are using the correct and most updated data we use the [Teammate tracking spreadsheet](https://docs.google.com/spreadsheets/d/1qt3rGNRVaSyi_N2uN3DaXvlg8LjfKLJb8PFfrQsmR-I/edit?ts=6007152c#gid=460686311). Even though the source of truth is _always_ BambooHR, it is an easy way to keep track on what we have and are missing. Once we receive the Greenhouse summary email, we need to add a line for the person joining with the information needed.

**Step 2: Upload signed document to the contracts folder**

**Step 3: Complete BambooHR Profile**
Make sure the person's profile exists and is complete. See the [BambooHR profile section](bamboohr.md#how-to-create-a-profile).

The two most important fields are the "Work email" and the "Timezone TZ". Via the Okta integration, the email will be created using the value written in the "Work email" field (make sure to follow preferredname.preferredsurname@sourcegraph.com convention); and Okta access will be sent to the new hire considering their timezone.

On the personal tab, complete only these fields:

- Name: Make sure the full legal name is in BambooHR
- Timezone TZ: Select the teammate’s timezone. This is one of the most important fields to complete because Okta activation for new teammates is scheduled based on this Timezone field.
- Region: Select the teammate’s region
- Work Email: Completed by People team later in the onboarding process. Leave blank for now.
- Personal email: Integrated via Greenhouse. If not, manually entered by People team

On the job tab, complete only these fields

- Hire Date: This information is automatically assigned based on the information listed in Greenhouse. Verify that it is correct.
- People Manager: Select Yes/No, then click Save Changes.
- People Partner: Select the appropriate People Partner using this as a guide.
- Employee Status:
  - Effective date: Same as start date
  - Employee Status: Each teammates should be one of either:
  - Comment: Initial data load into Bamboo
- Compensation:
  - Effective date: Same as start date
  - Pay Schedule: Monthly for Non US teammates or Twice Monthly for US teammates
  - Pay Type: This field is linked to Lattice, so it’s important to give the right type
  - Pay Rate
  - Overtime Status: Exempt for all teammates and Non-Exempt for Interns, Temporary & Part time contractors. Make sure to add the correct cost of extra hours.
  - Change reason: Initial data load into Bamboo
  - Comment: Add insight
  - Compensation Category and Level: Confirm with Talent if you don’t know.
  - Radford Job Code: This can be found in the Offer Details in Greenhouse
    Note: The offer details is the source of truth, not the job details
- Job Information:
  - Effective date: Same as start date
  - Location: Remote
  - Division: The division is listed in Greenhouse. Check with the recruiter if it’s missing. Flag to tech ops if you create a new Division
  - Department
  - Job Title
  - Reports to
  - Cost Center: we use this field to sync with our financial systems through Okta.
- Options
  - Status: Proposed, Not Yet Granted
  - Number of options
  - Vesting Date: Same as start date
  - Equity Notes: ‘New Hire Grant’
- Commission (only fill this out if applicable)
  - Commission date: same as start date
  - Commission amount: in USD
  - Paid per: Year
  - Commission Pay Type: Commission
  - Pay Schedule: Monthly
  - Overtime Status: Exempt
  - Commision Change Reason: Initial data load into Bamboo
  - Comments: Initial data load into Bamboo
- Bonus (only fill this out if applicable and complete all fields.)

If the new teammate will be a people manager, confirm with the HM who the new teammate’s direct reports will be, and update their BambooHR profiles accordingly

- Click ‘+Update Job Information’, select the new managers’ start date, enter the new managers’ name in, leave all other fields as-is, click ‘Save’.

Note: Lattice and Continu are integrated with Bamboo and will auto-create users and auto-assign surveys/reviews/trainings based on teammates' start dates, role, and location.

**Step 4: Send BambooHR Onboarding Kit**

1. Open the new teammate’s BambooHR Profile, select the ‘More’ tab, then select ‘Onboarding’.
2. Click the ‘Create New Hire Packet’ button, then select the appropriate template (based on the new teammate’s location - US or non-US). The information should auto-populate and the Location field should be the only one left blank, since we’re remote.
3. Import the onboarding kit tasks: ordering swag, submitting your new hire video and photo for avatar, completing your background check, and filling out your BambooHR profile
4. Select ‘Preview and send’, review the information and select ‘Continue’ through the packet. When ready, click ‘Send New Hire Packet’.

**Step 5: Create Avatar**

After the offer letter is signed, new hires will email a photo to people-ops@sourcegraph.com. We turn that photo into their avatar and add the original photo + avatar photo to [this avatar folder](https://drive.google.com/drive/u/0/folders/1T5qaSLjE2UbG0yt52gb3IVIGOUYm_YKA).

**Step 6: Navigate to Process Street**
Both the Universal Workflow and Department Specific Workflow need to be run.

**Step 7: Complete the Teammate's information 👤**

This must be done on both the Universal and Department Specific Workflow.
Once this section has been marked ‘Complete’, two automated slack messages will be sent

If the teammate will be located in the US, the Payroll Communication task will be visible. Under Payroll Communication, ensure the teammate’s name, start date, and work email are correct, then click Click on Complete Task.

**Step 8: Begin the _People Ops - before day 1_ section of the onboarding checklist**
Complete all tasks that are marked as ‘prior to the teammate's work email being created’ and mark them as ‘Complete’ in Process St.

**Step 9: Confirm Manager completed the Process St tasks assigned to them**

The People Ops team will check Process Street on the Thursday before each cohort start date to confirm if Hiring Managers have completed their onboarding tasks. If the information is not complete, People Ops will slack each manager directly to remind them to complete the information ASAP so their new hire will be ready for their first day.

### Once Sourcegraph email is created

The rest of the onboarding tasks can only be completed after the person's work email has been created. This happens automatically through the Okta/BambooHR integration 5 days (the Wednesday) before someone starts. The integration runs daily, so if someone is added to BambooHR after that, the user will still be created. We can also manually run the integration if needed. You should contact Tech Ops for this.

**Step 10: Notify the company**
Send a message to #announce-new-teammates letting everyone know that a new teammate is joining and that their emails are now live. The sooner we do this the better. Combine this message for any other teammates in the same onboarding cohort.

**Step 11: Add to relevant calendar meetings**
Here are the events we must manually invite the new teammate to

- 1 Month Check In - 15 min meeting with People Ops team member on each new teammate’s 1 month mark
- Meet the Founders (just once)
- Meet the People Team (just once)
- Meet & Greet (just once)

Tech Ops will add each new hire to Google Groups, which will automatically add them to other company and team specific events.

**Step 12: Schedule the First Day Prep email**
The Friday before a new hire’s start date, we send an email in the Welcome email thread started by the recruiter when they were hired. You can see the email template in the [onboarding email templates doc](https://docs.google.com/document/d/1kX_6c4WPs530pWjAx7R5MGPFGiYCgmVbh78S-K3kHfc/edit#).

**Step 13: Schedule the 3 month Onboarding Survey slack message**
Surveys are conducted at the 3-month mark to collect feedback from all new teammates to make sure that their onboarding experience is properly equipping them with the support and resources necessary for them to be successful in their new role. [Here](https://docs.google.com/forms/d/1fm46VUs2CWCABXvVxYR2n7J24BV5Nt1v9ahK_4qqjEc/edit) is the survey.

**Step 14: Update BambooHR settings**
Open the new teammate’s BambooHR profile, click Settings, hover over ‘BambooHR Access Level’, then select ‘Everyone’. If the teammate is a People Manager, select ‘Managers’

- Do not do this before the new hire’s email address has been created
- You need full admin access in BambooHR to complete this step. The People team can grant this access if needed.

**Step 16: Complete the People Ops - before day 1 section of the onboarding checklist**
Confirm ALL People Ops - before day 1 tasks are marked as complete in Process St.

**Step 17: ‘Hide rows’ in Teammate Tracking Spreadsheet**
Now that the tasks are completed, hide the teammate's row in the tracking spreadsheet, but don’t delete it in case we need to reference the data in the future.

### Once the teammate has joined Sourcegraph

**Step 18: I9 and E-verify**

#### How our teammates use Workbright - US teammates only

On US teammates' first day at Sourcegraph, they will receive an email from WorkBright that includes all instructions on how to complete the I9 via their mobile phone. Through Workbright, new hires will join a video meeting to fill out the I-9 form in-person alongside an authorized representative.

Workbright Tutorial Videos can be found [here](https://workbrightsupport.com/videos/).

Please let #ask-people-team or people-ops@sourcegraph.com know if you have any questions!

#### How the People Ops team uses Workbright

Setting Up Users

1. On each new hire’s first day at Sourcegraph, log into [Workbright](https://sourcegraph.workbright.com/) and select ‘Add Staff Member’
2. Select the Employee Type - Employee/W-2 (W-4 & I-9)
3. Fill in the employee’s personal Email and Legal Name
4. Click ‘Next’
5. Leave the custom field checkbox blank and click ‘Next’
6. Leave the groups field blank and click ‘Next’
7. Insert the teammate’s start date and click ‘Send Notifications Now’
8. Remote Verification should be toggled ON
9. Click ‘Finish’

Steps to complete E-verify can be found [here](https://docs.google.com/document/d/1BWouWHj3WAlglyt7ZunnjMlev4XnFzTuVcUoa95LNnc/edit#heading=h.f31huogsqa18)

**Step 19: Audit completion of 1 and 3 month Milestone Reviews in Lattice**

Every teammate _and their manager_ are required to complete a 1 and 3 month milestone review in Lattice. There are reminders built into Process St. for People Ops to audit this at the appropriate times. People Ops will log into Lattice as admins, navigate to Reviews, select the appropriate automated review (1 or 3 month milestone), and find the relevant teammate's name. People Ops will then audit that both the reviewee and reviewer submitted their feedback and that the review packet has been shared with the teammate. People Ops will follow up on any missing packets and can reopen packets if they've ended.

Read more about Onboarding Feedback Milestones [here](../../onboarding-feedback-milestones.md).

## Onboarding Feedback

There are two main onboarding feedback instances:

- **One Month check in**: 15 min check-in with a People Ops team member to get a pulse check, ask Teammates how they are doing and feeling, whether they are clear about expectations & ensure they are adapting well to asynchronous work, and get feedback on the onboarding process.
- **Onboarding survey**: sent out monthly on the three month mark. This survey is focused on experience, content, and format, and presentation.

### Onboarding survey

Surveys are conducted at the 3-month mark to collect feedback from all new teammates to make sure that their onboarding experience is properly equipping them with the support and resources necessary for them to be successful in their new role.

On teammates' 3 month mark, we send a Slack message asking them to complete [this survey](https://docs.google.com/forms/d/1fm46VUs2CWCABXvVxYR2n7J24BV5Nt1v9ahK_4qqjEc/edit).

[Here](https://docs.google.com/spreadsheets/d/1UVfc47SEhH_DhvqMvA9iYDVhCjnynDiJI_5GcsnwU_4/edit?usp=sharing) you can find dashboards with the onboarding survey results.

## Transition onboarding

When someone changes teams, we make sure they have access to the resources needed to be successful in their new role. We provide teammates a Process St. checklist. You can read more about internal mobility [here](../../../../company-info-and-process/working-at-sourcegraph/switching-teams.md). Once the People team is notified, we run a checklist from the Transition Onboarding workflows, share it with the manager and send it to the teammate on the day the role change is effective.

The most comment transitions are:

- [SDR to AE](../../../sales/sdrteam/index.md#sdr-promotion-process)
- [Aplication Engineer to Engineer]

## Temporary Contractor onboarding

- [Temporary Contractor onboarding process](..//process/how-we-engage-talent-outside-the-us/temporary-contractors.md)

## Start date change

#### Request

Because this is a process that involves a lot of teams, when asking for someone to start earlier, the requests must be sent at least 5 business days before the new starts date.

If someone needs to postpone their start date, we need to know as soon as possible to stop the preonboarding cycle in the backend.

If the teammate needs to change a start date, the recruiter must follow the instructions in [this handbook page](../../talent/process/after_the_offer.md#changing-a-new-hires-start-date).

If Hiring Managers need to bring forward a start date, they need to request for the change at least 5 business days before the new starts date.

If someone needs to start _outside of a cohort date_ the recruiter and Hiring Manager need to talk to Tech Ops, Payroll and Onboarding. They must provide a valid business case for it.

_It is important to always confirm these changes with the Hiring Manager before and after accepting the change_

#### Change updates

We must notify the manager and update the start date in the following places:

- BambooHR
- [Teammate tracking spreadsheet](https://docs.google.com/spreadsheets/d/1qt3rGNRVaSyi_N2uN3DaXvlg8LjfKLJb8PFfrQsmR-I/edit?ts=6007152c#gid=460686311).
- Greenhouse
- If payroll and tech ops have already started actioning onboarding activities, make sure they're aware of the start date change via the #wg-onboarding channel.

If the teammate is already in "Hired" status in Greenhouse, let the candidate know of the start date change via the Welcome to Sourcegraph email, and store record of the email exchange in Bamboo. We don't need to send an updated offer letter.

## Rescinding offer

When someone rescinds their offer, the Onboarding team needs to be informed as soon as possible. Considering onboarding involves many moving parts and teams, time is of the esense. The Onboarding team will notify Payroll, Tech Ops, the managers, and anyone else involved in the process.

We also need to deactivate the user in BambooHR. Go to [this page](bamboohr.md#rescinded-offersacceptances) to follow the steps in BambooHR.
