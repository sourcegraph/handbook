# Team chat

We use Slack for team chat.

## Retention

Slack is not a [source of truth](index.md#sources-of-truth) which means it should only be used for ephemeral conversations. To enforce this, only 90 days of Slack activity in public channels is retained. Any important decisions or changes need to be reflected in the [source of truth](index.md#sources-of-truth).

Exceptions:
- #distributioneers retains messages indefinitely because a lot of customer context ends up in Slack threads and it is not currently practical to move that to another system of record.

[Historical archive of Slack messages prior to 2019-11-09](https://drive.google.com/file/d/1FUbOEsMM4fWRpxymgNHZCAssOPEFDelJ/view?usp=sharing): unzip and open `sourcegraph-slack-archive-to-20191109/index.html` to view. If you consult this, please be sure to add whatever information you learn to a source of truth so we reduce our reliance on this archive.

## Avoid private messages

1. When using Slack for work-related purposes, avoid private messages. [Private messages discourage collaboration](https://blog.flowdock.com/2014/04/30/beware-of-private-conversations/). You might actually be contacting the wrong person, and they cannot easily redirect you to the right person. If the person is unavailable at the moment, it is less efficient because other people can't jump in and help. Use a public channel and mention the person or group you want to reach. This ensures it is easy for other people to chime in, involve other people if needed, and learn from whatever is discussed.
1. If someone sends you a work-related private message, it is OK to let them know you'd like to take the conversation to a public channel, linking to this section of the handbook. The process might look something like:

- In the private message: <code>Thanks for reaching out. That's a great question/idea that I think the rest of the team could benefit from. I'm going to move this to #public-channel based on [our desire to avoid private messages](#avoid-private-messages).</code>
- In the appropriate public channel: `@person asked "question" in a DM, pulling that out here if anyone else has input.`
- Answer the question in a thread on that channel message, allowing others to benefit.

1. If you must send a work-related private message, [don't start a conversation with "Hi" or "Hey"](http://www.nohello.com/) because that interrupts their work without communicating anything. If you have a quick question, just ask the question directly, and the person will respond asynchronously. If you truly need to have a synchronous communication, then start by asking for that explicitly, while mentioning the subject. For example: "I'm having trouble understanding issue XYZ. Can we talk about it quickly?".

If you are a new member of the engineering team, you'll most likely want to join all of the channels in the engineering section below.

## Channels

We have many Slack channels. You don't have to join them all, but here is a good breakdown of the most active ones by category.

### General

- #general - Anything about Sourcegraph in general (that doesn't fit a more specific channel below).
- #random - Cool things you're doing in life, cat photos, jokes, vacation photos, etc.
- #progress - Share cool/interesting progress with the team
- #thanks - Appreciate someone's work? You can thank them here! :) {#thanks}
- #handbook - Updates to and discussion of [this handbook](../index.md)

### Product

- #design - How Sourcegraph looks visually
- #feedback - Feedback directly from our users & customers
- #product - Product questions, ideas and thoughts
- #metrics - User metrics, analytics, etc.

### Business

- #marketing - [Marketing](../marketing/index.md)
- #sales - [Sales](../sales/index.md)
- #analytics - [Analytics](../bizops/index.md#analytics)
- #marketintel - Market and industry intelligence - products, funding, competition
- #payments - Customer payment notifications
- #hiring-active - Candidate hiring
- #customer-updates - Updates on the status of customers
- #dev-rel - Developer relations, events, blog posts, tweets, etc.

### Engineering

#### Engineering teams

- #campaigns - All things related to code change management campaigns.
- #code-intel - All things code intelligence.
- #core-services - Repository management, authentication, stability -- you name it.
- #distribution - Everything from how Sourcegraph is packaged and delivered to customers, to ensuring it works well for them).
- #web - The webapp and browser extension, search UI/UX.

#### Engineering general

All engineers should join the following channels (feel free to adjust your notification preferences for each as you see fit, though):

- #dev-announce - Things that affect a majority of the dev team in some way (e.g. site or buildkite is down, we will have expected downtime, etc.). *You should read every message in here, and messages you post to it should have a high signal-noise ratio.*
- #dev-chat - anything related to Sourcegraph development :)
- #dev-ops - discussing incidents and any other ops-related work
- #buildkite - see notifications about Buildkite / CI failures.
- #opsgenie - where pager notifications get sent to Slack
