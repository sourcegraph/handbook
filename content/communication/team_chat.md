# Slack: Team chat

We use Slack for team chat.

## Retention

Slack is not a [source of truth](index.md#sources-of-truth) which means it should only be used for ephemeral conversations. To enforce this, only 90 days of Slack activity in public channels is retained. Any important decisions or changes need to be reflected in the [source of truth](index.md#sources-of-truth).

Exceptions:

- #distributioneers retains messages indefinitely because a lot of customer context ends up in Slack threads and it is not currently practical to move that to another system of record.
- #customer-updates similarly retains messages for two years because a lot of customer context ends up in Slack threads and it is not currently practical to move that to another system of record.
- #feedback retains messages indefinitely because it provides a good source of user testimonials.
- #engaging-external-engineers retains indefinitely because team chat is the easiest way to solicit advice from our broader team, and the questions are usually one-off, so it wouldn't make sense to try to make this more organized.
- #sales-prospecting retains indefinitely to support the education of new teammates about how to communicate with customers and prospects.
- #west_sales_news_and_prospecting and #east_sales_news_and_prospecting retain messages indefinitely to serve as libraries of start-up accounts that the sales team can target as AE and SDR headcount scales.
- #sales-resources retains messages indefinitely to serve as a library of quickly evolving sales collateral and tools.
- All channels that we share with customers or prospects (typically containing the prefixes #trial- or #support-) retain messages indefinitely to preserve context for support or audit-related purposes.
- #marketintel retains messages indefinitely to keep a longterm overview of market information around the field of developer tools.

[Historical archive of Slack messages prior to 2019-11-09](https://drive.google.com/file/d/1FUbOEsMM4fWRpxymgNHZCAssOPEFDelJ/view?usp=sharing): unzip and open `sourcegraph-slack-archive-to-20191109/index.html` to view. If you consult this, please be sure to add whatever information you learn to a source of truth so we reduce our reliance on this archive.

## Avoid private messages

1. When using Slack for work-related purposes, avoid private messages. [Private messages discourage collaboration](https://blog.flowdock.com/2014/04/30/beware-of-private-conversations/). You might actually be contacting the wrong person, and they cannot easily redirect you to the right person. If the person is unavailable at the moment, it is less efficient because other people can't jump in and help. Use a public channel and mention the person or group you want to reach. This ensures it is easy for other people to chime in, involve other people if needed, and learn from whatever is discussed.
1. If someone sends you a work-related private message, it is OK to let them know you'd like to take the conversation to a public channel, linking to this section of the handbook. The process might look something like:
   - In the private message:
     > Thanks for reaching out. That's a great question/idea that I think the rest of the team could benefit from. I'm going to move this to #public-channel based on [our desire to avoid private messages](#avoid-private-messages).
   - In the appropriate public channel:
     > @person asked "question" in a DM, pulling that out here if anyone else has input.
   - Answer the question in a thread on that channel message, allowing others to benefit.
1. If you must send a work-related private message, [don't start a conversation with "Hi" or "Hey"](http://www.nohello.com/) because that interrupts their work without communicating anything. If you have a quick question, just ask the question directly, and the person will respond asynchronously. If you truly need to have a synchronous communication, then start by asking for that explicitly, while mentioning the subject. For example: "I'm having trouble understanding issue XYZ. Can we talk about it quickly?".

If you are a new member of the engineering team, you'll most likely want to join all of the channels in the engineering section below.

## Use of private channels

By default all Slack channels are public. This is inline with our [company value to be open and transparent](../company/values.md#open-and-transparent) and facilitates collaboration and [async learning](../company/asynchronous-communication.md). Any member of the Sourcegraph workspace (but not guests) can view and join a public channel, giving everyone access to the same shared information. Messages or files posted in a public channel can be searched by other team members.

However, we understand that not everything discussed between team members should be public and there is a need for private channels. Private channels are for conversations that should not be open to all members. People must be added to a private channel by someone who's already a member of the channel. Messages or files posted in a private channel can only be searched by members of that channel.

Private channels will automatically be created for the following categories of conversations:

- Recruiting: Channels used for discussing specific positions where private candidate feedback and details will be discussed.
- Management: Channels where managers can communicate about specific private or sensitive team situations.
- Legal: Channels with legally sensitive information, such as acquisition discussions or communication with outside parties where we have a legal requirement to keep information sharing limited.
- Internal: While we strongly encourage that every team keep these public by default and to use our `{$TEAMNAME}-internal` [naming convention](../communication/team_chat.md#channel-naming-convention) to help other teams understand that it is an internal chat, if a team is feeling pressured or uncomfortable they can ask to make the channel private.

If you would like a channel to be made private, and it does not fit in the categories above, please acquire pre-approval from your manager before contacting #it-tech-ops to make a channel private. The intention of this additional step to have one more conversation about why a channel should be made private - ensuring we are doing everything we can to adhere to our company values while respecting individuals' privacy.

## Send (and read) messages any time

Because Sourcegraph is a global, [all-remote company](../company/remote/index.md) with [flexible work hours](../company/remote/index.md#is-there-an-expectation-to-work-over-the-weekends), teammates should feel free to send messages to others at any time, rather than trying to guess what a convenient time would be for the other party (or parties) involved.

However, a corollary to this is that they are free to read your message whenever is convenient for them. There is no expectation that people will be responsive over the [weekend/vacation/evening/etc.](../company/remote/index.md#is-there-an-expectation-to-work-over-the-weekends).

Make sure to set up Slack to only send you notifications when you want to see them!

## Use threads instead of channel-wide responses

In public channels, we use threads to organize conversations around topics and limit the number of notifications into a channel. That being said, when a thread reaches a point where a result or update would be useful for the entire channel to be aware of, you can check the `Also send to #channel` to send it into the channel's main view.

## Name

To avoid confusion, set your Slack **display name** as `First Name (or preferred name) Last Name`.

## Channels

We have many Slack channels. You don't have to join them all, but here is a good breakdown of the most active ones by category.

### Channel naming convention

Our goal is to facilitate open and transparent communication both within teams as well as between teams. Since these are two different audiences, we recommend that each team maintains two separate channels in Slack following these naming conventions:

1. `${TEAMNAME}` is the default channel for discussing work that the team is doing and fielding questions from outside of the team. If you have a question to ask another team, ask it in their default channel.
1. `{$TEAMNAME}-internal` is a secondary channel that the team can use to communicate about topics that are not related to the work of the team and clearly only relevant to members of the team itself (for example: social chit chat, notifying team you will be late to a team meeting, scheduling a team meeting or offsite). This channel is _not_ for having internal team discussions about work the team is doing; those discussions are potentially relevant to people outside of the team and should be done in the default channel above. The team should treat this as their own channel, even if non-teammates have joined. We encourage teams to keep this channel public for transparency.

If teams require additional channels they should follow the convention of prefixing the channel name with their team name. For example: `web-onboarding`

### General

- #general - Anything about Sourcegraph in general (that doesn't fit a more specific channel below).
- #random - Cool things you're doing in life, random blog posts, jokes, vacation photos, etc.
- #pets-of-sourcegraph - Dogs, horses, cats, cows, and other floof empires.
- #progress - Share cool/interesting progress with the team
- #thanks - Appreciate someone's work? You can thank them here! :) {#thanks}
- #handbook - Updates to and discussion of [this handbook](../index.md)
- #handbook-updates - Github updates from the Handbook repo.
- #handbook-announce - Announcement of important changes to the Handbook.

### Employee Resource/Identity

- #queer - Channel for LGBTQIA2+ folks—questioning welcome! Submit your email address to [this form](https://forms.gle/JABVzFYqkFkpU21u5) to be automatically added.

### Product

- #design - How Sourcegraph looks visually
- #feedback - Feedback directly from our users & customers
- #product - Product questions, ideas and thoughts
- #prod-eng-announce - Announcements that are relevant to all of product or all of engineering (or both) belong here._You should read every message in here, and messages you post to it should have a high signal-noise ratio._

### Operations

- #business-ops - Strategy, operations and project management support
- #people-ops - Onboarding, team satisfaction, reviews and much more
- #hiring - Candidate hiring
- #it-tech-ops - IT, software, and access questions
- #finance - Dollars and cents
- #legal - Legal questions
- #marketintel - Market and industry intelligence - products, funding, competition
- #payments - Customer payment notifications
- #analytics - All things data

### Go-to-market

- #marketing - [Marketing](../marketing/index.md)
- #sales - [Sales](../sales/index.md)
- #customer-updates - Updates on the status of customers
- #ce - Helping devs use Sourcegraph effectively

### Engineering

All engineers should join the following channels (feel free to adjust your notification preferences for each as you see fit, though):

- #prod-eng-announce - Announcements that are relevant to all of product or all of engineering (or both) belong here._You should read every message in here, and messages you post to it should have a high signal-noise ratio._
- #dev-chat - Anything related to Sourcegraph development :).
- #dev-ops - Discussing incidents and any other ops-related work.
- #buildkite - Notifications about Buildkite / CI failures.
- #opsgenie - Pager notifications get sent to Slack.
- #alerts-cloud - Alertmanager alerts and warnings for our Cloud deployment.
- #alerts-dogfood-k8s - Alertmanager alerts and warnings for our Dogfood deployment.
- #bots-production - Kubernetes bot notifications.
- #alerts-external - External system notifications which might impact our deployments.

You should also join channels mentioned in [your team's documentation](../product-engineering/engineering/index.md#teams)

### Social

These are some of our social channels. Feel free to whichever calls you.

- #anime - All things related to anime
- #basketball - All things hoops (NBA, NCAA, FIBA, etc.)
- #best-timezone - Hangout channel for the European time zone. GIFs allowed!
- #books - Read books recommended by teammates and discuss them.
- #chess - For all chess lovers
- #clothing - Chit-chatting about clothes
- #coffee - For the love of coffee
- #cooking - All things cooking and food
- #fantasyfootball
- #football-soccer - General banter about the beautiful game ⚽️ (not this one 🏈)
- #gaming - For all gamers
- #golf - To all those golf fans here
- #great-bandname - “That’s a great bandname” — all the things we find that would make a great bandname
- #keyboards-of-sourcegraph - clack clack CLACK clack clack CLACK cl
- #kids-of-sourcegraph - A place to share photos of our Mini-Sourcegraphers and share advice on parenting.
- #memes-and-motivations - Sometimes a funny meme or a powerful motivational video is good for the soul!
- #mixology - To talk about the art of making drinks/drinks we enjoy
- #motorsport - For those that like the smell of fuel or burning rubber, or blissful silence of the electric motor.
- #music - Share your tunes.
- #nomad-life - For folks who use our async remote culture to travel around, whether just for a few weeks or as a lifestyle
- #pets-of-sourcegraph - Sometimes you need pictures of floof(s) to get through the day.
- #photography-chat - For photo-takey types
- #plants-of-sourcegraph - 🌲🌻
- #side-project - Working on a cool/challenging/fun side project? Tell us all about it here!
- #ted-talks - Share impactful ted talks here, with a brief description and time of the talk
- #today-i-learned - Anything you learn or think is fascinating, please share.
- #trash-tv - For discussing TV and movies, but especially the stuff that's not good.
- #virtual-coworking - 60 minute sessions to work quietly in tandem
