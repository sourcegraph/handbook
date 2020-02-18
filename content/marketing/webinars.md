# Webinars
## Overview
The following information describes the planning and execution of a Sourcegraph webinar. 

## Webinar information
All webinars will require the following details for planning:
- Title
- Date/Time
- Short Description
- Speaker Name
- Speaker Bio
- Speaker Headshot
- Webinar Link from Zoom
- Audience

Sourcegraph uses these web applications for running a webinar:
- Zoom 
  *  Manage registration landing page and attendance
  * Run and record the webinar
- Hubspot
  * Send out email invitations and reminders
  * Manage invitation lists and store registration/attendance activities

## Webinar planning tasks

 time to webinar | activity  
 --------------- | ---------------    
 1 - 2 months out | Identify webinar information 
 1 month out | Send out invitations 
 2 weeks out | Send out invitation #2 
 1 day - 1 week out | Send out email reminders 
 1-2 weeks out | Perform a rehearsal 
 1 day out | Test webinar link 
 30 minutes | Final soundcheck 
 Post webinar | Send out thank you emails with link to recorded webinar 

### Zoom setup
Create the webinar, configuring the following:
- Set the schedule, host and details
- Registration landing page form
- Thanks for registering email which includes the webinar link

### Hubspot setup
The following Hubspot emails will be created to promote the webinar:
- Invitation which include the link to the Zoom registration landing page 
- Reminder email T-3 day which includes the Zoom webinar link
- Reminder email T-1 day which includes the Zoom webinar link
- Reminder email T-1 hour which includes the Zoom webinar link

Since this is a [lead-generation activity](marketing_operations.md#maintaining-data-pipelines), we need to track it in our [HubSpot event log](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit?usp=drive_web&ouid=117507720010549543900). Add the HubSpot registration list to the `Webinar Registration` list and the attendees list to the `Webinar Attendee` list. Contact BizOps in the #marketing or #analytics channels. NOTE: This has not been implemented yet in HubSpot and Zapier yet.

Post webinar, Sourcegraph will send followup emails:
- Attendee thank you email with link to rewatch
- Registered but an attendee email with link to watch

### Hubspot webinar nomenclature

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
