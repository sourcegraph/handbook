## How to Create and Transfer Tickets for Support Engineering

We currently offer Support via Slack Channels for Enterprise customers through a Support Agent integration that must be integrated into the Slack Channel. This integration is a requirement to ensure we can provide a consistent support experience to our customers in accordance with our Service Level Agreements (SLAs).

There are two methods for the Support Agent integration:

1. Embedding a Create Request option at the bottom of the channel (preferred option)
2. By adding a 🎟️ emoji on the message

Below are the steps required to enable either option.

### Embedding the Create Request option to the Channel

**Step 1**: Once the customer slack channel has been created, please reach out to support in #ask-customer-support. This will allow CS leadership to integrate the Support Agent to the customer channel.

**Step 2**: Once the integration is completed the customer will be able to submit request using the box labeled <Create Request>

**Step 3**: Send a message in the channel explaining how the customer can utilize the Support Agent: Hi team, we wanted to share the best way to reach our support team if you run into any questions. There will be a message and a button at the bottom of the channel that reads “Question for Support? Create Request.” The Create Request button will open a form where you can fill out information for a Question or Issue. Let us know if you have any questions, Thank you!”

### Utilizing the Ticket Emoji to generate a request

The emoji reaction will only create a ticket if the emoji is added to the message. This allows customers to post their question in the slack and following up with a 🎟️ reaction. Doing so will trigger the post to create a ticket and fill out a support form for our support engineering team.

### If an email with a customer needs to be transfered to a Support Engineer

If a customer sends an email and it requires support engineering to take over there are a few steps to take.
**Step 1**: Add support@sourcegraph.com in cc (keeping the customer in copy, too) and share that you have copied in our support team to help out.

**Step 2**: Go into Zendesk, select the ticket that was just created by your email that was forwarded or CC'd support.

**Step 3**: `Apply Macro` select `Customer Ticket Request` , fill out the request details and <Submit as `New`
