# Foqal

We use Foqal.io as the glue between Zendesk and individual Slack channels that are shared between customers and Sourcegraph.
This allows us to have an automated way to create tickets on Slack but keep our SLAs, processes and other tools on Zendesk.

## Setting up a new customer with Foqal for pre-sales engagement

**For AEs/CEs/TAs:**

Please post in #ask-customer-support and tell us what channel Support Agent needs to be added in and that this is for trial support.
We will then confirm once its setup.

> NOTE: The Slack admin on their end will need to accept the Support Agent app on their workspace in order for this to work. They do not have to pay for this just ensure it is allowed on their end.

**For Support:**

1. Join the channel that needs Support Agent enabled (ex. #customer-acme-sourcegraph)
1. Go to the channel settings (top right) and under Integrations click `Add App`
   You will want to add the one named `Agent`
1. Once that is done we can tweak the channel settings. This can be done by typing:
   ```
   /agent
   ```
   A pop-up will appear with the settings you need to set for this channel
1. Enter the following into the pop-up

- Introduction Message - leave blank
- Channel Mode - Manual
- Tags - `trial` and if customer is using managed instance add `managed-instance`
- Ignore Internal Messages - leave blank
- Chat integration - Inherit from global settings
- Request Types - leave blank
- Channel Menu (click the button)
  - Action - Disabled
  - The rest can be left as-is

Once this is done customers will be able to create ticket by reacting to a message with the :admission_tickets: emoji.

## Setting up a new customer with Foqal for post-sales engagement

> NOTE: Make sure the customer has paid for the Slack Support package that will include access to this. If you're not sure please ask Support leadership.

**For AEs/CEs/TAs:**

Please post in #ask-customer-support and tell us what channel Support Agent needs to be added in.
We will then confirm once its setup.

> NOTE: The Slack admin on their end will need to accept the Support Agent app on their workspace in order for this to work. They do not have to pay for this just ensure it is allowed on their end.

**For Support:**

> NOTE: You need to be an admin to do this if you don't have access reach out to your Manager or Lead and they will be able to assist.

1. Join the channel that needs Support Agent enabled (ex. #customer-acme-sourcegraph)
1. Go to the channel settings (top right) and under Integrations click `Add App`
   You will want to add the one named `Agent`
1. Once that is done we can tweak the channel settings. This can be done by typing:
   ```
   /agent
   ```
   A pop-up will appear with the settings you need to set for this channel
1. Enter the following into the pop-up

- Introduction Message - leave blank
- Channel Mode - Manual
- Tags - `all` and if customer is using managed instance add `managed-instance`
- Ignore Internal Messages - leave blank
- Chat integration - Inherit from global settings
- Request Types - Support Question
- Channel Menu (click the button)
  - Action - Create ticket and thread
  - Channel Text
  ```
  Question for Support?
  ```
  - After Click Text - leave blank
  - Welcome Message
  ```
  Thanks for reaching out! One of our team members will get back to you shortly! Please add any additional information to this thread, Thanks!
  ```

Once all of this is done an pop-up should show up at the bottom of the channel that allows customers to create requests.

They are also able to create ticket by reacting to a message with the :admission_tickets: emoji.
