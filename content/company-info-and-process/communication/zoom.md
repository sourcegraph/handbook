# Zoom

Zoom tips and tricks.

## Add Zoom to Google Calendar

You can see [how to add the Zoom Add On for Google Calendar here](../../departments/people-talent/resources-for-new-hires/new-teammate-setup.md#google-calendar).

## Recording a Zoom meeting when you don't have permissions

If you need to record a Zoom meeting when you don't have permission to, create a _new_ Zoom meeting where you are the host and have everyone use that one instead.

## Configuring Zoom to send recordings to Slack automatically

Zoom can be set up to automatically post recordings of meetings to Slack after the meeting is held:

![image](https://user-images.githubusercontent.com/3173176/86101192-c3100f80-ba6e-11ea-984c-2955860113e3.png)

This is most useful for remote teammates who wish to participate in a team sync after the fact.

### Set the meeting to auto-record

Find the meeting in the Zoom web UI at https://zoom.us/meeting, then click **Edit** and check **Record meeting automatically in the cloud**:

![image](https://user-images.githubusercontent.com/3173176/86101390-09fe0500-ba6f-11ea-8e03-d06f1af6e059.png)

### Set up a Slack channel email relay

Follow the steps [here](https://slack.com/help/articles/206819278-Send-emails-to-Slack#set-up-a-forwarding-address) to set up an email address that will post to a Slack channel. We'll use this to send Zoom recordings to Slack.

### Automatically forward Zoom recording emails to Slack

In your Gmail account settings, under **Forwarding and POP/IMAP** add the Slack email relay as a forwarding address:

![image](https://user-images.githubusercontent.com/3173176/86101627-62350700-ba6f-11ea-9451-c02f04787543.png)

Then in the search bar search for:

```
from:(no-reply@zoom.us) Cloud Recording Distribution weekly sync is now available
```

And click the search bar dropdown menu:

![image](https://user-images.githubusercontent.com/3173176/86101949-c9eb5200-ba6f-11ea-8816-63249f9b4d86.png)

Choose **Create filter** and set it to forward to the Slack channel email relay address you created:

![image](https://user-images.githubusercontent.com/3173176/86102039-e5eef380-ba6f-11ea-8ce2-e952670ba039.png)

### Test it out

Simply join the Zoom meeting URL and it should begin recording automatically. Say hi, and then leave the meeting. Zoom will send you an email with the recording and Gmail will forward it to Slack automatically:

![image](https://user-images.githubusercontent.com/3173176/86101192-c3100f80-ba6e-11ea-984c-2955860113e3.png)

## Automated Captions in Zoom meetings

Zoom has an auto-generated closed captioning feature, which has been enabled for all users by default. This feature is handy for many Sourcegraphers and makes our communication more accessible.

### Activating Live Closed Captions on Zoom

By default, the “CC” button is visible in your Zoom meetings. You can activate it on every meeting that you’re the host of.

<img width="445" alt="Cc Button" src="https://user-images.githubusercontent.com/64257673/173246442-3847141f-071d-4dbf-81e7-d075e4a2c9ed.png">

If you want to disable this option, you can change it in the advanced meeting settings:

- Access https://sourcegraph.zoom.us/profile/setting
- Click on “In Meeting (Advanced)”
- Scroll to “Automated captions”
- Disable “Automated captions”, “Full Transcipt” and “Save Captions”

<img width="918" alt="Settings" src="https://user-images.githubusercontent.com/64257673/173246420-9594bf2a-9dd4-4f75-b383-349cc0e9aca2.png">

### Q&A feature in Zoom meetings

**Users**
When you join a scheduled meeting, you should see Q&A as an option in your Zoom menu bar. You can use this rather than the chat to submit questions. This feature allows hosts to organize questions, mark which questions have been answered, and you can up-vote other team members' questions to avoid duplicative questions.

**Meeting Hosts**
As the meeting host, you can modify several settings for Q&A. Because we’re a direct and open company, we recommend defaulting to non-anonymous Q&A and that all questions are visible to participants.

- [Schedule and manage a meeting with Q&A](https://support.zoom.us/hc/en-us/articles/11400566807693-Using-Q-and-A-in-Zoom-Meetings)
