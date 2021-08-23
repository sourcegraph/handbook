# Configuring Zoom to send recordings to Slack automatically

Zoom can be set up to automatically post recordings of meetings to Slack after the meeting is held:

![image](https://user-images.githubusercontent.com/3173176/86101192-c3100f80-ba6e-11ea-984c-2955860113e3.png)

This is most useful for remote teammates whom wish to participate in a team sync after the fact.

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
