# Livestream events (Webinars)

The following information describes the planning and execution of a Sourcegraph livestream event.

## Livestream information

All livestream events will require the following details for planning:

- Title
- Date/Time
- Short Description
- Speaker Name
- Speaker Bio
- Speaker Headshot
- Livestream Link from Zoom or GotoWebinar
- Audience

Sourcegraph uses these web applications for running a livestream event:

- GotoWebinar or Zoom:
  * Manage registration and attendance
  * Invitation email and reminders with livestram link and details
  * Run and record the livestream
- Hubspot
  * Set up landing page for registration
  * Manage invitation lists and store registration/attendance activities

## Sourcegraph code of conduct for livestream events

Sourcegraph livestream events are open to the public. We are committed to providing a friendly, safe, and welcoming environment for all.  Please read our [Sourcegraph Community Code of Conduct](https://about.sourcegraph.com/handbook/community/code_of_conduct).

## Livestream planning tasks

 time to livestream | activity
 ------------------ | ---------------
 1 - 2 months out   | Identify livestream information
 1 month out        | Send out invitations
 2 weeks out        | Send out invitation #2
 1 day - 1 week out | Send out email reminders
 1-2 weeks out      | Perform a rehearsal
 1 day out          | Test livestream link
 30 minutes         | Final soundcheck
 Post livestream    | Send out thank you emails with link to recorded livestream


### Creating and configuring a livestream

> IMPORTANT: It's vitally important that only those authorized to contribute during the webinar are given the ability to share audio, video, and their screen, while participants can ask questions via chat only at this stage. These restrictions could be relaxed for events such as internal customer training.

Create the livestream with the following configuration:

- Set the schedule, host and details
- Registration landing page form
- Thanks for registering email which includes the livestream link

Zoom required meeting configuration

- Require meeting password, use US formated date i.e. 032620
- Enable Video for Host, disable on Participant
- Allow audio on both telephone and computer
- Disable "Enable join before host"
- Enable "Mute participants upon entry"
- Add Alternative Hosts

Zoom advanced configuration during broadcast, under 'Advanced Sharing Options'

- Enable "One participant can share at a time"
- Enable "Only Host" under "Who can share?"

Zoom account management > account settings

- Disable "File Transfer"
- Disable "Allow Removed Participants to Rejoin"

### Announcement on customer's Sourcegraph instance

Ask the customer:

> Could you add the following configuration to your Sourcegraph instance's global user settings found at https://sourcegraph.example.com/site-admin/global-settings? This will let all the users visiting Sourcegraph know that they can join the livestream via a dismissible notice:
>
> ![image](https://user-images.githubusercontent.com/3173176/75200913-423db180-5724-11ea-9ee9-fbea5be2129b.png)
>
> ```json
>  "notices": [
>    {
>      "dismissible": true,
>      "location": "top",
>      "message": "Join us and the Sourcegraph team for the live Zoom livestream on [Tuesday, Feb 25, 2020 @ 3pm Central](<LIVESTREAM LINK>) to learn about Universal Code Search and improving your workflow!"
>      }
>  ],
> ```

**IMPORTANT**: Before sending the above email, make sure you update the livestream date and URL!

### Hubspot setup

The following Hubspot emails will be created to promote the livestream:

- Invitation which includes the link to the Zoom registration landing page
- Reminder email T-3 day which includes the Zoom livestream link
- Reminder email T-1 day which includes the Zoom livestream link
- Reminder email T-1 hour which includes the Zoom livestream link

Since this is a [lead-generation activity](marketing_operations.md#maintaining-data-pipelines), we need to track it in our [HubSpot event log](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit?usp=drive_web&ouid=117507720010549543900). Add the HubSpot registration list to the `Livestream Registration` list and the attendees list to the `Livestream Attendee` list. Contact BizOps in the #marketing or #analytics channels. NOTE: This has not been implemented yet in HubSpot and Zapier yet.

## Post livestream

- A member of the marketing team will download, edit, and upload the livestream to YouTube as an **unlisted** video
- Attendee thank you email with link to rewatch
- Registered, but non-attendee email with link to watch

### Hubspot livestream nomenclature

**Hubspot folder structure**
*folder format*:
WBR YYQ# \| Title \| Mon DD
*example*:
WBR 20Q1 \| GitLab Commit 2020 \| Feb 05

**Hubspot marketing email titles**
*email format*:
EM-type WBR YYQ# \| Title \| Mon DD
*examples*:
EM-invite WBR 20Q1 \| GitLab Commit 2020 \| Feb 05
EM-remind-1day WBR 20Q1 \| GitLab Commit 2020 \| Feb 05
EM-remind-1hour WBR 20Q1 \| GitLab Commit 2020 \| Feb 05
EM-thanks WBR 20Q1 \| GitLab Commit 2020 \| Feb 05
