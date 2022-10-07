# Internal Onboarding Process

## Pre onboarding

### After accepting the offer

Once someone accepts the offer and signs the contract, the Talent team marks them as hired. This creates the profile in BambooHR and sends a **Greenhouse summary email** to onboarding@sourcegraph.com

This email contains all relevant information that we need to complete the person's [BambooHR profile](bamboohr.md#how-to-create-a-profile) and fill the Teammate tracking sheet.

**Teammate Tracking Spreadsheet**

In order to make sure we are using the correct and most updated data we use the [Teammate tracking spreadsheet](https://docs.google.com/spreadsheets/d/1qt3rGNRVaSyi_N2uN3DaXvlg8LjfKLJb8PFfrQsmR-I/edit?ts=6007152c#gid=460686311). Even though the source of truth is _always_ BambooHR, it is an easy way to keep track on what we have and are missing. Once we receive the Greenhouse summary email, we need to addd a line for the person joining with the information needed.

The second tab in the [Teammate tracking spreadsheet](https://docs.google.com/spreadsheets/d/1qt3rGNRVaSyi_N2uN3DaXvlg8LjfKLJb8PFfrQsmR-I/edit?ts=6007152c#gid=460686311) contains the responses to the [pre onboarding form](https://forms.gle/V7HyGf2WUdQNvzXd9) sent to teammates on the **Welcome email**. We use the information in that form for Payroll purposes, tool setup and more.

**Welcome email**

After marking someone as hired, the Talent team sends a Welcome email to the new teammate with onboarding@sourcegraph and the manager in CC.

The Onboarding team responds to that thread, see the [onboarding email templates doc](https://docs.google.com/document/d/1kX_6c4WPs530pWjAx7R5MGPFGiYCgmVbh78S-K3kHfc/edit#). These two emails ask teammates to complete certain tasks that they have to do before their start date. You can see the [Before start date handbook page](../../../../company-info-and-process/working-at-sourcegraph/before-start.md).

### Setting everything on the backend

- [Working with other teams](working-with-other-teams.md)

There are some tasks we cannot complete until the person's email has been created. This happens automatically through the Okta/BambooHR integration 5 days (the Wednesday) before someone starts. The integration runs daily, so if someone is added to BambooHR after that, the user will still be created. We can also manually run the integration if needed. You should contact Tech Ops for this.

#### Before email creation

**BambooHR**

Make sure the person's profile exists and is complete. See the [BambooHR profile section](bamboohr.md#how-to-create-a-profile).

The two most important fields are the "Work email" and the "Timezone TZ". Via the Okta integration, the email will be created using the value written in the "Work email" field (make sure to follow preferredname.preferredsurname@sourcegraph.com convention); and Okta access will be sent to the new hire considering their timezone.

**Onboarding Checklist**

A week before someones start date, make sure to run their checklist. We use Process St as our onboarding tool. Go to our [Internal Process St hanbook page](process-st.md) to see how to run a checklist and complete them.

The checklist is integrated with Slack and it notifies the Tech Ops team in the #onboarding-internal channel when a checklist is run. The main reason we create them the week before someone starts is because it is enough time for all internal teams to set everything up.

Keep in mind that the person's email won't exist yet, but we can add it to the checklist all the same, as we already know the format.

**Payroll**

As a next step, a week before their start date, we send Payroll an email with all US teammates starting, see the [onboarding email templates doc](https://docs.google.com/document/d/1kX_6c4WPs530pWjAx7R5MGPFGiYCgmVbh78S-K3kHfc/edit#).

All other teammates get access to Deel (if applicable) and Airbase via Okta.

**Hiring Managers**

Managers should work with Tech Ops so that new hires have the necessary tools by day one. Once we assign them the onboarding checklist, they should inform the Onboarding team of any changes they'd like to make. Note that the week prior to start date we can only make minor tweaks, big changes should be asked for in advance.

**Onboarding Buddy and Mentor**

Hiring managers should tell the onboarding team who the teammate's [buddy](../../../../company-info-and-process/onboarding/buddy-program.md) and [mentor](../../../../company-info-and-process/onboarding/onboarding-mentor.md) (for relevant teams) are. We must complete the onboarding checklist with the correct names so they populate for the new teammate.

**Avatar**

Before someone starts, we use the image provided by them [here](https://docs.google.com/spreadsheets/d/1qt3rGNRVaSyi_N2uN3DaXvlg8LjfKLJb8PFfrQsmR-I/edit#gid=1270378260) to create an avatar. For each person, we create a folder in the [Automated Avatars folder](https://drive.google.com/drive/u/0/folders/1T5qaSLjE2UbG0yt52gb3IVIGOUYm_YKA) called "YYYY-MM _Preferred Name+Surname_ Avatar" that contains the original image and three versions of the avatar. You can follow the instructions [here to create an avatar](https://docs.google.com/document/d/1AMAGHqhzPvLxdqTgHws3NY4uQGz6-7B5RVcLhiprEYg/edit).

Teammates are encouraged to create a new one or change the background color themselves if they want to.

**Swag**

We use Printfection for onboarding swag. You can read more about how we order [swag here](internal-swag.md).

We send a link to teammates in the Welcome email thread, that allows them to order the type of swag they want (unisex or form-fitted) and put the address they want for shipping. You can see the email in the [onboarding email templates doc](https://docs.google.com/document/d/1kX_6c4WPs530pWjAx7R5MGPFGiYCgmVbh78S-K3kHfc/edit#).

#### After email creation

Once the email is created, there are several things we need to do.

**Notify the company**

We send a message to #teammate-announce letting everyone know that new teammate are joining and that their emails are now live. The sooner we do this the better. Here is a template message:

        Hello everyone! :tada:
        New teammates are starting next week and their emails are now live:

        Role/Title
        - Teammate's preferred name + surname - teammate's email

        Tag the manager

**Hiring Manager**

Hiring managers should:

- Create recurring 1:1 with new teammate
- Add new teammate to any team/role specific meetings and calls

**Calendar**

Because they will be added to Google Groups by Tech Ops, they will be automatically added to company events and team specific ones. We should schedule some events in the new teammate's calendar:

- Schedule 15min meeting on 1 month mark (with Inés)

  - Invite description:

    Hi! I've created this meeting to catch up and talk about how your first month at Sourcegraph went. Feel free to change the time of the meeting.

    Feedback is super important for us. Please take some time before the meeting to think of the highlights and lowlights of your onboarding process.
    Have a great day!

- Add all new teammates in cohort to:
  - the next "Meet the Founders" event - in the Events calendar (just once)
  - the next "Meet the People Team" event - in the Events calendar (just once)
  - the next "Meet & Greet" event - in the Events calendar (just once). This event should happen the day after start date (Tuesday)
- Schedule a 15min i-9 meeting for US teammates on their first or second day.

**Welcome email**

The Friday before someone starts, we send the Friday email in the Welcome email thread started by the recruiter when they were hired. You can see the email in the [onboarding email templates doc](https://docs.google.com/document/d/1kX_6c4WPs530pWjAx7R5MGPFGiYCgmVbh78S-K3kHfc/edit#). A good practise is to schedule send this email for Friday 6am UTC.

**Slack channel**

We create a channel for the cohort. We add all new teammates, the onboarding team and payroll.

- Channel name: new-teammate-cohort-monthday (example: new-teammate-cohort-may12)
- Channel description: A channel for teammates joining MONTH DAY to get to know each other, ask questions and share experiences :tada:
- Welcome message: Schedule send the message for Monday morning (7am UTC). - Message: Hi @here! Welcome! :blob-dancer:
  Please use this channel to connect with other teammates starting today, ask any question you have and even share information.
  I will be here all week, and then leave this channel for you

## Onboarding

**i-9s**

US teammates need to get their i9 verification done by their third day with us. Someone in the People Team will schedule a meeting with them on their first or second day.

Teammates must have the elegible documents available for us to corroborate their identity. [Here are the acceptable documents](https://www.uscis.gov/i-9-central/form-i-9-acceptable-documents)

## Onboarding Feedback

There are two main onboarding feedback instances:

- **One Month check in**: 15 min check-in with Inés (or someone else in the team in her absence) to get a pulse check, ask Teammates how they are doing and feeling, whether they are clear about expectations & ensure they are adapting well to asynchronous work, and get feedback on the onboarding process.
- **Onboarding survey**: sent out monthly on the three month mark. Based on the [standards of success](../../../../company-info-and-process/onboarding/index.md#onboarding-standards-and-success) the teammate’s survey is focused on experience, content, and format, and presentation.

### Onboarding survey

Surveys are conducted at the 3-month mark to collect feedback from all new teammates to make sure that their onboarding experience is properly equipping them with the support and resources necessary for them to be successful in their new role.

[Here](https://docs.google.com/forms/d/1fm46VUs2CWCABXvVxYR2n7J24BV5Nt1v9ahK_4qqjEc/edit) is the survey.

On the last Monday of each month, we send a Slack message to each person asking them to complete the survey. Here is an example of the message:

_Hey! Hope you are doing great!_

_One of my biggest projects at the moment is making the onboarding process as rich and structured as possible, so as to build every new teammate up for success. To do this, I constantly meet with new hires, managers, and teammates to listen to their feedback and experience._
_This time, I wanted to listen to your input in this. I’ve created a **[survey](https://docs.google.com/forms/d/1fm46VUs2CWCABXvVxYR2n7J24BV5Nt1v9ahK_4qqjEc/edit)** to collect feedback from all teammates that have been with us since [MONTH] to ask if their onboarding experience has properly equipping you with the support and resources necessary for you to be successful in your new role._
_It is a simple survey, most of the questions are multiple choice and some require some input. Would you mind taking 10 minutes to complete it? :pray:_
_Could you please submit it by XXX?_
_Thank you! Have a great day :)_

[Here](https://docs.google.com/spreadsheets/d/1UVfc47SEhH_DhvqMvA9iYDVhCjnynDiJI_5GcsnwU_4/edit?usp=sharing) you can find dashboards with the onboarding survey results.

## Transition onboarding

When someone changes teams, we make sure they have access to the resources needed to be successful in their new role. We provide teammates a Process St. checklist. You can read more about internal mobility [here](../../../../company-info-and-process/working-at-sourcegraph/switching-teams.md). Once the People team is notified, we run a checklist from the Transition Onboarding workflows, share it with the manager and send it to the teammate on the day the role change is effective.

The most comment transitions are:

- [SDR to AE](../../../sales/sdrteam/index.md#sdr-promotion-process)
- [Aplication Engineer to Engineer]

## Temporary Contractor onboarding

## Start date change

#### Request

Because this is a process that involves a lot of teams, when asking for someone to start earlier, the requests must be sent at least 5 business days before the new starts date.

If someone needs to postpone their start date, we need to know as soon as possible to stop the preonboarding cycle in the backend.

If the teammate needs to change a start date, the recruiter must follow the instructions in [this handbook page](../../talent/process/after_the_offer.md#changing-a-new-hires-start-date).

If Hiring Managers need to bring forward a start date, they need to request for the change at least 5 business days before the new starts date.

If someone needs to start _outside of a cohort date_ the recruiter and Hiring Manager need to talk to Tech Ops, Payroll and Onboarding. They must provide a valid business case for it.

_It is important to always confirm these changes with the Hiring Manager before and after accepting the change_

#### Change updates

We must notify the manager and update the start date in BambooHR. This is critical.

Once that's done, change the start date in the [Teammate tracking spreadsheet](https://docs.google.com/spreadsheets/d/1qt3rGNRVaSyi_N2uN3DaXvlg8LjfKLJb8PFfrQsmR-I/edit?ts=6007152c#gid=460686311).

## Rescinding offer

When someone rescinds their offer, the Onboarding team needs to be informed as soon as possible. Considering onboarding involves many moving parts and teams, time is of the esense. The Onboarding team will notify Payroll, Tech Ops, the managers, and anyone else involved in the process.

We also need to deactivate the user in BambooHR. Go to [this page](bamboohr.md#rescinded-offersacceptances) to follow the steps in BambooHR.
