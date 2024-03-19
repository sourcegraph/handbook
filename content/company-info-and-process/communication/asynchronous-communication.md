# Asynchronous communication

Sourcegraph is an [**all-remote**](../remote/index.md) company which means we work from home or office spaces, but do not have a physical office we all go to together. Moreover, we are also a **global company**, which means we are spread all over [the world](../../team/locations.md). So not only do we not share an office, most of the time, we don’t even share time zones. For this reason, we use **asynchronous (async)** forms of communication as much as possible and conduct synchronous meetings only when it’s really necessary.

Async simply means that work doesn’t happen at the same time for everyone. Asynchronous communication allows us to move forward and make decisions without having to meet to talk with everyone involved. In this page you will read about why we are async, the tools we use at Sourcegraph, and how we use them. We also explain how we communicate, tips on how to work asynchronously, and how we decide to be or not to be async.

## Videos

<!--
Note for editors: All videos embedded on this page (and their captions) are uploaded to (and can be updated at):
https://console.cloud.google.com/storage/browser/sourcegraph-assets/handbook/async-communication;tab=objects?project=sourcegraph-dev
-->

### Why do we use async?

<video width="1920" height="1080" controls crossorigin>
  <source src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/async-communication/why_async.mp4">
  <track kind="captions" label="Captions" src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/async-communication/why_async.vtt" default>
</video>

### How we work async

<video width="1280" height="720" controls crossorigin>
  <source src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/async-communication/how_to_async.mp4">
  <track kind="captions" label="Captions" src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/async-communication/how_to_async.vtt" default>
</video>

### Tips for working async

<video width="1280" height="720" controls crossorigin>
  <source src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/async-communication/async_tips.mp4">
  <track kind="captions" label="Captions" src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/async-communication/async_tips.vtt" default>
</video>

## Why async?

**We are respectful of people’s time and responsibilities.** All of us have different working styles and strategies of being productive. We also have our personal responsibilities and timelines. We need to be conscious that our teammate might be a caregiver and scheduling a meeting might mean they have to choose between work and their loved ones.

**We are inclusive.** We want everyone to feel they are part of the conversation and give room for them to participate. By scheduling a meeting in which people share an idea and end up making a decision when a team member cannot be there, we risk leaving people feeling excluded and uninformed and we lose out on the valuable input they might have contributed.

**We value context**. When people default to synchronous communication, decisions are made in meetings with little documentation, relying on tribal knowledge to brief people on why things were done a certain way. This is inefficient and unscalable. Asynchronous communication values documentation, and although this might take more time upfront, it pays off in the long run. Documentation removes ambiguity and blank spots in communication.

**We encourage thoughtful decision-making.** A great benefit of async work is the time people get to reflect instead of responding in the moment. We often have a better response or contribution to a discussion when we take a step back and think about things.

**We care about [mental health](../../departments/people-talent/total-rewards/mental-health.md)** Working from home with teammates all across different time zones can set the expectation of being responsive most of the day, making it difficult to maintain boundaries, leaving little time for deep, focused work, and becoming a source of stress and burnout for many people. Async work helps everyone understand that team members could be offline at any time meaning instant replies are not expected. One benefit of asynchronous work can be larger amounts of uninterrupted time, enabling teammates to gain more breathing room to do their jobs well without the constant stress of pivoting and being “on” for others, leading to a more balanced workday and mindset.

**We value [high agency](../values/index.md#high-agency).** Teammates have the power and the responsibility to improve Sourcegraph as a company and as a product. We don’t want people to wait for a meeting to have a conversation that would define their work or depend on someone else’s schedule to be productive. Teammates are encouraged to achieve results when it best suits them without waiting for others’ permission to do so.

**We need to.** We are a growing all remote, global company. Adopting an asynchronous way of working and communicating is the only way for us to be successful. It is hard and it takes time adjusting, but it is worth it.

## How we work asynchronously

The basic flow for decisions is that we use an **artifact** as a temporary place to have a discussion, and then we update our **sources of truth** with the outcome.

### Artifacts

Async is most effective when there’s a place for communication to occur over time. We use [RFCs](../communication/rfcs/index.md), Google Docs, Pull Requests, GitHub issues, and Asana tasks as artifacts.

While decisions can be initiated or discussed in synchronous sessions when it makes sense, **making** the decision in an artifact helps others to understand the context around the decision and provide feedback or ask questions in a self-contained space. It also avoids requiring people to be in the meetings themselves to participate in decision-making. Decisions discussed in synchronous meetings should be consciously shared with all interested parties, giving them the opportunity to share opinions and objections in the relevant artifact.

### Single sources of truth

Even though we use artifacts to communicate over time, it is important to note that they are not sources of truth. They are used during the creation and production process and are extremely rich in context, however, the final conclusion and what we share with everyone else must live in one of our [sources of truth](../communication/index.md#sources-of-truth) and nobody should be expected to read everything in Slack or every RFC to know what's going on. The information in these places is expected to be accurate and up-to-date, and not be repeated in multiple sources of truth (when they need to reference each other, they do so through links).

### General tips

One of the hardest things about async work is to be sure everyone who’s affected by your work can see it and knows it exists. Socializing decisions and information with other teams is hard. While artifacts like RFCs are wonderful for the directly involved or affected team members, they’re more things that folks have to pay attention to—or choose _not_ to pay attention to, which still takes time and mental energy. Unfortunately, we can’t always predict what information other team members may need. Think about how you might help other teams find the information they need.

Use multimodal communication: Slack is busy and sometimes people miss meetings. If there’s something important to share, it’s better to default to over-communicating across multiple channels and platforms so that the message doesn’t slip through the cracks. For example, our new [PTO](../../benefits-pay-perks/benefits-perks/time-off/submitting-time-off.md) policy was added to the handbook, announced in the company meeting, the handbook page was shared in #general and #ask-people-team and managers were encouraged to share in team meetings or 1:1s to ensure everyone gets the message.

Get creative:

- Experiment with different ways for async communication more often. It doesn't always have to be an RFC Google Doc. Sometimes, when you want to share high-level context, pitch an idea, etc, talking on video or giving a presentation can be the best, but that doesn't have to mean a synchronous meeting.
- Record short videos with face cams (and captions) that don't need hours of production effort, we can create a little slide deck for such a video.
- Replace synchronous presentations with a recording, including slides and written context and provide a place where teammates can ask questions asynchronously. You can even include a time period for questions (for example: questions will be received and answered until Friday 4pm UTC)

You can read [Thorsten Ball](../../team/index.md#thorsten-ball)’s [Communication tips for remote work](https://thorstenball.com/remote-communication/).

Additionally, here are some other tips we've found work well:

- **Remove bias toward one time zone.** Use UTC to indicate time. Don’t expect everyone to know your timezone or convert theirs to yours. We use UTC to be as inclusive as possible.
- **Provide context**. This takes time, but documentation is key. Hand off everything with as much context as possible so that your colleagues don’t need any more input for the next ~12+ hours. Are you working collaboratively with someone who wakes up in ~9 hours? Make it clear to them what you're missing, what you’ve done, what you haven’t and why. It doesn’t have to be extensive and detailed, it just needs to have the information the other person will need for them to collaborate with you and continue with their work. You can add a note that says for example: “I like your work! I added this section and suggested some changes here. I didn’t include xxx because of what we talked about in this thread _[link to thread]_ last week.”
- **Over communicate**. Be detailed in how you explain your work to others. Also consider these:
  - Don’t use acronyms: not everyone knows what they mean and not everyone speaks English as a first language
  - Include images and screenshots to complement your explanations
  - Always use exact days of the week (YYYY-MM-DD), times, and UTC timezone when mentioning dates
  - Make reference and link to related discussions as much as possible
- **Share things while they’re still in work-in-progress**. Aim for progress, not perfection. We all want to get things done first and then share, but so much feedback can be collected and comments can be made while you are offline. You can make notes on your work stating something is going to change or you are waiting for X to go on with a certain section to notify reviewers of the state of your work.
- **Never assume.** It is best to include more context than to give room to misinterpretation.
- **Share**. Don’t make others hunt for information.
- **Communicate your work preferences.** We all work differently and have preferred ways of communication. Let your teammates know, this will help everyone be more empathetic and conscious about collaboration. Create a rudimentary README that clarifies how you work. [The support team has some great examples](../../departments/technical-success/support/index.md).
- **Consider which tool to use**. Think about what you are working on and which is the best tool to discuss it, iterate and communicate.
- **Know when _not_ to meet**. Ask yourself: is this meeting necessary or could we work on it asynchronously?
- **Don’t be afraid to cancel or reject meetings**. Hopping on to meetings is easy and we tend to find it easy, however, they are also very disrupting and demanding. It’s completely okay to ask someone to cancel a meeting and use that time to communicate asynchronously what they wanted to share with you. You’ll find some time to come back to them with your opinion and ideas.
- **Meetings must start and end on time**. We must be conscious of our and other people’s time.
- **Innovate**. Try out new things. Talk to your team and let them know you’ll conduct an asynchronous pilot. You won’t assist all or some of your weekly meetings and come back to them at the end of the week with your discoveries. Share them with the team and think of ways to make that experience better in the future.
- **Invest in your writing**. It takes more time, but it gives people time to read/think about what you said versus react immediately and it is scalable.
- **Set timing expectations**. Add parameters like response time and due dates to ensure progress.
- **Give yourself time**. Give yourself time to adjust to this new way of working—and to do this type of work. Thoughtfully crafting, reading, and responding to async communication takes longer (in the upfront) than the rapid back-and-forth of real-time conversation.
- Sometimes, an initial team-building sync at the start of a project can be extremely helpful and be the starting point for an iteration of asynchronous activities and interactions. The goal of this synchronous meeting should be clear and recorded for teammates who cannot join.
- **Not getting much feedback is ok**. It's important that you solicit feedback in the appropriate places, but sometimes you don't hear much back in return. This can be because you hit the nail on the head the first time, or maybe even just that people are busy and didn't get a chance to review it. You shouldn't block on this, or everything will grind to a halt. An exception to this is when making a [one way door decision](https://www.inc.com/jeff-haden/amazon-founder-jeff-bezos-this-is-how-successful-people-make-such-smart-decisions.html), which are big decisions that are hard to reverse—in that case you should be sure to get confirmation from the right people to go ahead.
- **Share what changed**. If a decision was made async, it's important to get the word out. Although it can feel like oversharing, especially for a remote company it's important to repeat yourself and hit the important communication channels with the news. Otherwise, it's easy to miss.
- **Rely on the handbook as the source of truth**. A lot of decisions we make (perhaps nearly all of them) should end up with updating the handbook. If all of us maintain the handbook, it will remain a wonderful resource to find out the latest thinking on any topic. If we let it go, people will lose trust, and it will no longer be an effective way to document decisions. If you see something out of date or that we no longer practice in the handbook, prioritize updating it.

Each team should also have a section to explain how they do x, y and z asynchronously. Define processes and communication channels. For example, how does the design team work? What is the decision making process?

#### Working with Slack

Slack is our [team chat](../communication/team_chat.md) and a big part of our day-to-day workflow, however, it is not one of our sources of truth. Because most of our channels are public and open to everyone to see, supporting our value of being [open and transparent](../values/index.md#open-and-transparent), Slack tends to be our default method of communication. All of the above principles around communication apply, but there are also some more:

- You don’t have to join every open channel available, but if you do, be mindful of what to pay attention to and how much time you spend reading threads that might not be helpful to you or your work. This takes some time and we recommend talking to teammates to understand what works best for you.
- Slack can feel like a synchronous way of communication and people might feel they need to respond right away, but remember we are remote and async. Teammates should feel free to send messages to others at any time, rather than trying to guess what a convenient time would be for them, and they are also free to read messages whenever is convenient for them. There is no expectation that people will be immediately responsive.
- A good practice is to send one message with your request directly, instead of sending “[Hey, how’s it going](https://www.nohello.com/)?” and waiting for the other person to reply to send the actual message. That interrupts their work without communicating anything. If you have a quick question, just ask the question directly, and the person will respond asynchronously.
- Slack can be a black hole where it feels like messages go out, but it is unclear if anyone saw or engaged with it. Not everything needs a thread, but when nobody replies does that mean everyone saw it and agrees? Does it mean that nobody saw it? Or that people saw it and are choosing not to engage? You can help mitigate this lack of clarity by leaving reaction emojis even if you don't plan to reply. A checkmark, thank you, heart, thumbs up/down, or one of the values emojis (`:value-*:`) are good ways to indicate you saw the message and what you thought about it without having to reply.

Be mindful:

- Use [threads](../communication/team_chat.md#use-threads-instead-of-channel-wide-responses) to respond to a message or continue a conversation about the same topic. This prevents everyone in the channel from getting notifications every time you post something. It makes it easier to share a thread for context when the conversation starts somewhere else too. It’s also more inclusive, allowing teammates to contribute to the discussion later. A best practice in any channel is titling your thread with: “Thread: [insert topic here]” and replying below in your thread what the context is.
- If a conversation takes place in a thread that will most likely end in a decision, be sure to notify those people who are affected, but not participating in it. They might have missed it or might be out at the moment. Be sure to share it with everyone and give some prudent time for them to read it. Remember we don’t expect everyone to be responsive right away.
- A Slack thread is not an artifact. As soon as you realize that there's folks who could contribute to the discussion who aren't around or don't have visibility into it, it should move out of Slack.
- Handles are a great way to notify people and teams. To avoid mass-notifying folks, it's best to tag the specific individuals who would be interested/affected by the conversation. And if you're not sure who to tag from a specific group, just ask. i.e. 'Should someone from Marketing Ops weigh in here?’ Avoid using the @channel and @here functions in Slack as little as possible, as there’s a strong possibility that teammates in the channel may be in time zones where they are asleep.
- [Default to using public channels for work-related discussion](../communication/team_chat.md#avoid-private-messages). Even if you intend a message for someone specific, other team members may benefit from reading the discussion or may be able to contribute to it. If you have a question, you may get an answer more quickly from someone in your own time zone than if you DM someone outside of their working hours.

Finally, remember Slack is _not_ a source of truth. Something said or mentioned in Slack, does not automatically make it true. It should follow the process of being discussed as an artifact and merged to a source of truth like any other decision.

### When to use sync meetings

We've talked above about how to do things async, but sometimes you might need (or think you need) a sync meeting. This section can help.

<center>
<object role="document" width="1133" height="1889" title="One pager: Async versus sync communication" data="onepager-async.svg" style="width: 80%"></object>
</center>

#### Deciding between sync and async

Now the biggest question: how do we know if this meeting should be done synchronously or asynchronously? Ask yourself:

- What do we want to achieve?
- Can the desired outcome be broken down into smaller tasks? If yes, maybe this could be an iteration of async interactions.
- Can the desired outcome be achieved by teammates working independently using one of the artifacts, like an RFC? Then maybe the best path here is to create an RFC, communicate to all the stakeholders, and set a due date for them to provide feedback.
- Is this meeting to gather feedback or green light? Would sending an email to all the stakeholders or creating a GitHub issue provide everyone with enough information for them to approve it?
- Is this meeting to gather feedback and make a decision together because it is time-sensitive?

If you think your meeting could be replaced by async work, talk to your teammates and explain clearly what you need, what you don’t know and what your expected outcome is.

#### Sync meetings for bonding

Synchronous meetings are best for bonding and feeling connected to your teammates (even beyond your immediate team), sensitive discussions that are more likely to be emotionally sensitive, and fast decision making when speed necessarily outweighs the benefit of having marginal time/thoughtfulness. Our teammates generally simply enjoy synchronous meetings because they get to spend some quality time with the people they work with.

Synchronous activities are great for building good relationships, which in turn create better async communication, as we get to put a person behind the words we are reading and understand where they are coming from.

This is why we have different synchronous social activities that help us build connections with our teammates:

- Donut: the tool we use to schedule 1:1s between random teammates each week. It is a great tool for teammates to meet other people they might not interact with on a regular basis.
- [Onboarding buddy program](../../departments/people-talent/buddy-program.md)
- Meet & Greet: for new teammates to get to know their new teammate cohort.
- New teammate happy hour: with all other teammates. Once a month, new and existing teammates meet and talk. It’s a way for new teammates to get to know other people in the company and for teammates to get to know new people better.
- Monthly team bonding activities
- [Off site team meetings](../../benefits-pay-perks/benefits-perks/travel/index.md)
- [Team gatherings and celebrations](../../benefits-pay-perks/benefits-perks/celebrate.md)
- [Social channels on Slack](../communication/team_chat.md#social)

#### How to run sync meetings

We also can have synchronous meetings for non-bonding reasons when needed; they are not the enemy and can provide a ton of value. Make sure to be inclusive and respectful of other people's time when you schedule them. When creating intentional synchronous meetings make sure they have a clear purpose and outcome, as well as an _agenda_. By writing down the purpose and agenda, we might also discover if it’d be more effective done asynchronously, or we might reinforce the value of the synchronous format. Furthermore, the agenda is where we should write down the topics and minutes: what was discussed, what did we conclude and what the next steps are.

If you conclude that a synchronous meeting is the best solution, then remember to **_always_** record it, and share the recording promptly afterwards. It should be a shared responsibility of all attendees to take notes of discussion in the agenda so that people who didn’t or couldn’t attend can catch up and participate. Share the results with everyone who’s affected by or interested in this and finally record it in the proper [source of truth](../communication/index.md#sources-of-truth). See [this guide for how to configure recordings in Zoom](../communication/zoom.md).

Once the meeting is done, take a moment to consider the synchronous value of it and if it really could have been done asynchronously after all.
