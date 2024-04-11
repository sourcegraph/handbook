# How we use Slack at Sourcegraph

We use Slack for team chat and real-time announcements.

### Slack retention policy

Slack is not a [source of truth](https://sourcegraph.com/github.com/sourcegraph/handbook@2f4a8affc57038a0bf149f296581cb8cacde57d1/-/blob/content/company-info-and-process/communication/index.md#sources-of-truth). Important updates shared in Slack must be reflected in a [source of truth](https://sourcegraph.com/github.com/sourcegraph/handbook@2f4a8affc57038a0bf149f296581cb8cacde57d1/-/blob/content/company-info-and-process/communication/index.md#sources-of-truth). To enforce this, we have the following default data retention set:

- **DMs:** 18 months retention
- **Private channels:** 18 months retention
- **Public channels:** 18 months retention
- **Support & Trial channels:** 5 years retention

#### Retention exceptions

Channel retention exceptions can be requested in #ask-it-tech-ops and will be reviewed/approved on a case-by-case basis by VP of Talent & People and VP of Operations. Exception requests must satisfy **at least one** of the below requirements:

- **Strategic Importance:** When a Slack channel serves a strategic purpose, such as for key customers or strategic accounts.
- **Business Necessity:** When extended retention is required to meet critical business needs.
- **Low Data Sensitivity:** If the data in a channel is not highly sensitive and doesn't require strict retention periods but is static data (long lived) and valuable to operational efficiency and success.
- **Completed Channels:** For channels that have completed their primary function but hold valuable historical information.
- **Legal or Compliance Requirements:** When there are specific legal or compliance requirements that necessitate an exception.

<sub>**Important:** You must notify Tech Ops (in #Tech-Ops) when you create a new channel requiring an exception to the default 18 months rule (even if it falls into an existing exception). **We have no way to know when new channels requiring an exception are created.** </sub>

### Channel naming conventions

Follow these naming conventions to help with discoverability. Channels can be re-named by submitting a request in #ask-it-tech-ops.

<table>
  <tr>
   <td><strong>Prefix</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
   <td><strong>Examples</strong>
   </td>
  </tr>
  <tr>
   <td>#announce-
   </td>
   <td>For important announcements your team needs to know. Note these channels have limited posting permissions, reach out to the channel manager to request access to post.
   </td>
   <td>#announce-company, #announce-sales, #announce-eng
   </td>
  </tr>
  <tr>
   <td>#team-
   </td>
   <td>For teams to coordinate work and activities among themselves. Strict channel membership for only people on that team.
   </td>
   <td>#team-design, #team-support-engineering, #team-sales
   </td>
  </tr>
  <tr>
   <td>#discuss-
   </td>
   <td>To discuss topics related to that department or team. Open to any teammate interested in that topic.
   </td>
   <td>#discuss-sales, #discuss-marketing
   </td>
  </tr>
  <tr>
   <td>#wg-
   </td>
   <td>Stands for “working group” For cross-functional teams working together.
   </td>
   <td>#wg-swag, #wg-impact-reviews
   </td>
  </tr>
  <tr>
   <td>#location-
   </td>
   <td>For teammates in the same location to connect.
   </td>
   <td>#location-bayarea, #location-london, #location-nyc
   </td>
  </tr>
  <tr>
   <td>#customer-
   </td>
   <td>For sourcegraph teammates to discuss important issues related to that customer.
   </td>
   <td>#customer-ibm, #customer-databricks, #customer-salesforce
   </td>
  </tr>
  <tr>
   <td>#prospect-
   </td>
   <td>For conversations about prospective customers.
   </td>
   <td>#prospect-bofa, #prospect-cruise
   </td>
  </tr>
  <tr>
   <td>#ext-
   </td>
   <td>To connect with EXTERNAL customers, consultants, etc.
   </td>
   <td>#ext-splunk-sourcegraph, #ext-indeed-management, #ext-video-prod
   </td>
  </tr>
  <tr>
   <td>#trial-
   </td>
   <td>EXTERNAL communication with companies considering Sourcegraph
   </td>
   <td>#trial-pandora, #trial-tmobile, #trial-nvidia
   </td>
  </tr>
  <tr>
   <td>#event-
   </td>
   <td>To plan and execute events, large and small.
   </td>
   <td>#event-aws, #event-slush, #event-rubyconf
   </td>
  </tr>
  <tr>
   <td>#chat-
   </td>
   <td>Chatter about a specific topic (typically not related to Sourcegraph work)
   </td>
   <td>#chat-book, #chat-chess, #chat-cars, #chat-clothes
   </td>
  </tr>
</table>

### Mandatory channels for all teammates

_All teammates are automatically added to these channels when they join Sourcegraph, and they should check them regularly._

<table>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/general">#announce-company </a>
   </td>
   <td>Critical information that all Sourcegraph teammates need to stay on top of.
<p>
Messages here are applicable to 75% of the company and posting permissions are limited.
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/C0379USFD7E">#ask-exec-team</a>
   </td>
   <td>Ask Sourcegraph leadership any question and get an answer.
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/C04MDQ4A63Y">#announce-people-talent-team</a>
   </td>
   <td>Important announcements from the People & Talent team.
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/C04MEMRH35Y">#announce-it-tech-ops</a>
   </td>
   <td> Important announcements from the Tech Ops team
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/progress">#progress</a>
   </td>
   <td>Celebrations for milestone moments and progress that impact our company strategy.
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/C01UPDNPGP4">#announce-teammate-hires</a>
   </td>
   <td>Welcome newly hired teammates and celebrate promotions and new roles.
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/C043N11GD7S">#announce-teammate-departures</a>
   </td>
   <td>Stay informed about teammates who are leaving Sourcegraph.
   </td>
  </tr>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/thanks">#thanks</a>
   </td>
   <td>Say thank you to teammates for big moments and small ones.
   </td>
  </tr>
</table>

### Mandatory for people managers

<table>
  <tr>
   <td><a href="https://sourcegraph.slack.com/archives/C01B6F2F1G8">#team-people-managers</a>
   </td>
   <td>Private channel - Discussion among people managers.
   </td>
  </tr>
</table>

## Slack guidelines

### Keep your profile up to date

All teammates should add the following to their profile:

- Full name: First and Last Name
- Display name: First and Last Name
- Title: Your role at Sourcegraph
- Time zone: Keep this up to date so teammates know when to reach you
- Pronouns
- Name recording/pronunciation (optional)

### Set a channel description

When you create a Slack channel (regardless of if it's public or private) you should add a description for the channel to let people know what kind of information they can expect to find there.

### Set a channel manager

Every channel should name a channel manager so there is a clear owner responsible for keeping the channel organized. You can view channel managers by clicking on the channel name, then "about".

### Send short messages

As a general rule of thumb, Slack messages should be **kept short and to the point**, with additional details shared in the message thread. We've put additional processes in place to make sure only short, direct messages are sent in announce channels because those channels need to maintain a high signal to noise ratio. See [announce channel guidelines](#announce-channel-guidelines)

### Use emoji reactions

An emoji reaction can sometimes replace the need for a follow-up message and emojis show the poster that you saw their message.

#### Note on custom emoji

Teammates can upload their own custom emoji to our Slack Workspace. Please keep in mind that rapidly changing or flashing emojis may not be friendly for teammates who are [impacted by photosensitivity or susceptible to seizures](https://www.reddit.com/r/Epilepsy/comments/jzmjdx/seizure_inducing_emojis/).

If you spot a custom emoji that may be a bit too animated, report it to #ask-it-tech-ops so it can be removed.

### Use threads to organize discussions and reduce noise

Threads help you create organized discussions around specific messages. They let you discuss a topic in more detail without adding clutter to a channel or direct message (DM) conversation.

When a thread reaches a point where a decision is made, communicate that decision back to the channel by using the “also send to #channel” button.

If you need to start a new topic of conversation, post directly in the channel to start a new thread.

### Default to public channels

Sourcegraph is an all remote and asynchronous-first company, and we work out in the open via public channels to help teammates stay informed. Default to using public channels and if you know who will likely have the answer, mention that person directly. This ensures it is easy for other people to chime in if they have the answer, and helps other people observe and learn. If you receive a DM that should be shared in a public channel, ask that person to re-send the message with a broader audience. The [forward message](https://slack.com/help/articles/203274767-Forward-messages-in-Slack#:~:text=Tap%20Send.-,Tap%20and%20hold%20the%20message%20you'd%20like%20to%20share,icon%20to%20send%20your%20message.) feature allows you to share private DMs in a public channel.

#### Private channels will automatically be created for the following categories of conversations:

- Recruiting: Channels used for discussing specific positions where private candidate feedback and details will be discussed.
- Management: Channels where managers can communicate about specific private or sensitive team situations.
- Legal: Channels with legally sensitive information, such as acquisition discussions or communication with outside parties where we have a legal requirement to keep information sharing limited.
- Affinity groups: Channels for affinity groups that prefer a private space.

If you would like a channel to be made private, and it does not fit in the categories above, please acquire pre-approval from your manager before contacting #ask-it-tech-ops to make a channel private.

### Organize Slack for your workflow

To help you keep track of important conversations, you can star a channel or direct message (DM). Starred conversations appear in the Starred section of your sidebar. You can also organize your channels,DMs, and apps into custom sections within your sidebar. Your custom sections are only visible to you. [Watch this video for a few examples.](https://slack.com/help/articles/4411352432275-Video--Organize-your-conversations-in-Slack)

### Send (and read) messages any time

Because Sourcegraph is a global, [all-remote company](../remote/index.md) with [flexible work hours](../remote/index.md#is-there-an-expectation-to-work-over-the-weekends), teammates should feel free to send messages to others at any time, rather than trying to guess what a convenient time would be for the other party (or parties) involved.

In turn, you are free to read your message whenever it is convenient for you. There is no expectation that people will be responsive over the [weekend/vacation/evening/etc.](../remote/index.md#is-there-an-expectation-to-work-over-the-weekends).

### Archive old and unused channels

To keep the Sourcegraph Slack workspace up to date, archive channels when they are no longer needed. First, send a final message in the channel notifying its members that you are going to archive the channel, then archive the channel. Archived channels can always be undone and the information in them remains discoverable.

## Announce channel guidelines

Announce channels uplevel the _most important information_ for your intended audience.

- Send short messages that get to the point quickly.
- Share relevant follow-up details in the thread of your announcement.
- As a general rule of thumb, the information shared in department-specific announce channels should be relevant to the _teammates in that department_.
- If your announcement is relevant to another team (aka it impacts their work) share the announcement with the leader of that team so they can forward the information to the right people.
- If an announcement impacts the majority of the company (3 or more teams) it probably belongs in [#announce-company](https://sourcegraph.slack.com/archives/C02FSM7DU).

#### If you do _not_ have access to post in an announce channel, follow these steps:

- Draft a short message that quickly gets to the point.
  - This should be no more than a few lines of text. If you have additional details that don't fit into the top-line announcement include those in a threaded reply. [Here's a great example of what an effective announcement looks like](https://sourcegraph.slack.com/archives/C04MZPE4JKD/p1706903107950019).
- Click on the channel name to pull up the "about" info.
- Identify who the channel manager is and share your announcement draft with them via a DM.
  - Most channels should have more than one channel manager listed. If you cannot reach either manager, a request for posting access can be shared in [#ask-it-tech-ops](https://sourcegraph.slack.com/archives/C01CSS3TC75)
- Be clear about whether you would like to request access to post, or if you are OK with the channel manager posting on your behalf.
- The channel manager will share any revisions with you to make the message as effective as possible and ensure the message is shared (either by granting you access or sharing for you).

#### FAQs

**Q: What qualifies as an announcement**
Announcements should be relevant to all or most members of the channel and generally convey information that is either urgent (requires attention/action) or important (has an impact on the audience). If it doesn’t meet these criteria, it may be better suited for a smaller audience or a different channel (like a #discuss channel). When in doubt, ask the channel manager!

**Q: What does an effective announcement message look like?**
Messages sent in announce channels should be clear, concise, and to the point. Avoid lengthy descriptions and get straight to the key message. You can (and should) share more in-depth info in the thread.

**Q: How often should announcements be shared?**
There’s no one-size-fits-all approach here. Just be mindful of the frequency of announcements because too many messages can lead to information overload, causing important updates to be missed or ignored.

## Channel lists by department

### Sales

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#discuss-sales
   </td>
   <td>All Sales
   </td>
  </tr>
  <tr>
   <td>#announce-sales
   </td>
   <td>All Sales, Marketing
   </td>
  </tr>
  <tr>
   <td>#discuss-sales-ops
   </td>
   <td>All Sales
   </td>
  </tr>
  <tr>
   <td>#discuss-field-gtm-and-operations
   </td>
   <td>All Sales
   </td>
  </tr>
  <tr>
   <td>#wg-sales-prospecting
   </td>
   <td>All Sales
   </td>
  </tr>
  <tr>
   <td>#team-superare
   </td>
   <td>SDR
   </td>
  </tr>
  <tr>
   <td>#team-west-ae
   </td>
   <td>AE West
   </td>
  </tr>
  <tr>
   <td>#team-east-ae
   </td>
   <td>AE East
   </td>
  </tr>
  <tr>
   <td>#team-emea-ae
   </td>
   <td>AE EMEA
   </td>
  </tr>
  <tr>
   <td>#team-sales-leadership
   </td>
   <td>Sales Leadership
   </td>
  </tr>
  <tr>
   <td>#gtm-operations-review
   </td>
   <td>Sales Leadership
   </td>
  </tr>
  <tr>
   <td>#discuss-commissions
   </td>
   <td>Accounting and Sales Team
   </td>
  </tr>
  <tr>
   <td>#discuss-eoq-closing
   </td>
   <td>Deal Desk, Sales, Legal Teams
   </td>
  </tr>
  <tr>
   <td>#discuss-deal-desk
   </td>
   <td>Deal Desk, Legal, Sales
   </td>
  </tr>
</table>

### Technical Success

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#team-technical-success
   </td>
   <td>All TS
   </td>
  </tr>
  <tr>
   <td>#announce-technical-success
   </td>
   <td>All TS
   </td>
  </tr>
  <tr>
   <td>#discuss-technical-success
   </td>
   <td>All TS
   </td>
  </tr>
  <tr>
   <td>#team-ce
   </td>
   <td>CE
   </td>
  </tr>
  <tr>
   <td>#discuss-ce
   </td>
   <td>CE and cross functional partners
   </td>
  </tr>
  <tr>
   <td>#team-implementation
   </td>
   <td>Implementation
   </td>
  </tr>
  <tr>
   <td>#discuss-implementation
   </td>
   <td>Implementation
   </td>
  </tr>
  <tr>
   <td>#discuss-professional-services
   </td>
   <td>Sales, CE, TA, IE, Support Engineering
   </td>
  </tr>
  <tr>
   <td>#team-technical-advisors
   </td>
   <td>TA
   </td>
  </tr>
  <tr>
   <td>#discuss-technical-advisors
   </td>
   <td>TA
   </td>
  </tr>
  <tr>
    <td>#team-scaled-succcess
   </td>
   <td>Scaled TA
   </td>
  </tr>
  <tr>
   <td>#discuss-scaled-succcess
   </td>
   <td>Scaled TA
   </td>
  </tr>
  <tr>
   <td>#team-support-engineering
   </td>
   <td>Support
   </td>
  </tr>
  <tr>
   <td>#discuss-support-engineering
   </td>
   <td>Support
   </td>
  </tr>
  <tr>
   <td>#discuss-commissions
   </td>
   <td>Accounting and Sales Team
   </td>
  </tr>
  <tr>
   <td>#discuss-deal-desk
   </td>
   <td>Deal Desk, Legal, Sales
   </td>
  </tr>
</table>

### Engineering, Product, Design

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#announce-engineering
   </td>
   <td>All engineering, cross functional partners
   </td>
  </tr>
  <tr>
   <td>#discuss-engineering
   </td>
   <td>All eng, cross functional partners
   </td>
  </tr>
  <tr>
   <td>#team-engineering
   </td>
   <td>All engineering
   </td>
  </tr>
  <tr>
   <td>#discuss-dev-ops
   </td>
   <td>Anyone having question about deployments
   </td>
  </tr>
  <tr>
   <td>#discuss-releases
   </td>
   <td>People who have questions and updates about releases
   </td>
  </tr>
  <tr>
   <td>#announce-incidents
   </td>
   <td>Anyone who needs to be aware of incidents
   </td>
  </tr>
  <tr>
   <td>#chat-dev-backend
   </td>
   <td>All engineers working on Backend code
   </td>
  </tr>
  <tr>
   <td>#team-dev-frontend
   </td>
   <td>All engineers working on frontend code
   </td>
  </tr>
  <tr>
   <td>#chat-dev-learn
   </td>
   <td>Anybody wanting to chart about dev related topics and learn new things
   </td>
  </tr>
  <tr>
   <td>#discuss-product
   </td>
   <td>All Product teammates, cross functional partners
   </td>
  </tr>
  <tr>
   <td>#team-product
   </td>
   <td>All Product teammates
   </td>
  </tr>
  <tr>
   <td>#announce-product-research
   </td>
   <td>All Product teammates, Design team
   </td>
  </tr>
  <tr>
   <td>#feedback-dogfood
   </td>
   <td>All Product teammates
   </td>
  </tr>
  <tr>
   <td>#team-design
   </td>
   <td>Design team
   </td>
  </tr>
  <tr>
   <td>#discuss-design
   </td>
   <td>Design team
   </td>
  </tr>
</table>

### People & Talent

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#announce-people-team
   </td>
   <td>Whole company
   </td>
  </tr>
  <tr>
   <td>#team-people-and-talent
   </td>
   <td>All People & Talent teammates
   </td>
  </tr>
  <tr>
   <td>#ask-people-team
   </td>
   <td>People & Talent, teammates w/ HR questions
   </td>
  </tr>
  <tr>
   <td>#wg-talent-scheduling-and-offers
   </td>
   <td>Talent teammates
   </td>
  </tr>
  <tr>
   <td>#ask-hiring
   </td>
   <td>People & Talent, anybody with hiring questions
   </td>
  </tr>
</table>

### Marketing

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#team-marketing
   </td>
   <td>All Marketing teammates
   </td>
  </tr>
  <tr>
   <td>#announce-marketing
   </td>
   <td>All Marketing teammates + cross functional partners
   </td>
  </tr>
  <tr>
   <td>#discuss-marketing
   </td>
   <td>All Marketing teammates + cross functional partners
   </td>
  </tr>
  <tr>
   <td>#team-comms
   </td>
   <td>Comms team
   </td>
  </tr>
  <tr>
   <td>#discuss-internal-comms
   </td>
   <td>Internal comms + people looking for support on internal comms
   </td>
  </tr>
  <tr>
   <td>#team-social
   </td>
   <td>Social media team
   </td>
  </tr>
  <tr>
   <td>#wg-events
   </td>
   <td>Events team + cross functional partners
   </td>
  </tr>
  <tr>
   <td>#team-pmm
   </td>
   <td>Product Marketing team
   </td>
  </tr>
</table>

### Operations

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#team-operations
   </td>
   <td>All Operations
   </td>
  </tr>
  <tr>
   <td>#team-operations-leadership
   </td>
   <td>Ops Managers
   </td>
  </tr>
  <tr>
   <td>#benefits-payroll-private
   </td>
   <td>Payroll and People Team
   </td>
  </tr>
  <tr>
   <td>#bamboo-org-updates
   </td>
   <td>Payroll and People Team
   </td>
  </tr>
  <tr>
   <td>#team-finance
   </td>
   <td>Finance and Accounting team
   </td>
  </tr>
  <tr>
   <td>#team-accounting
   </td>
   <td>Accounting and Sales Team
   </td>
  </tr>
  <tr>
   <td>#team-deal-desk
   </td>
   <td>Deal Desk and Legal Teams
   </td>
  </tr>
  <tr>
   <td>#discuss-deal-desk
   </td>
   <td>Deal Desk, Legal, Sales
   </td>
  </tr>
  <tr>
   <td>#team-deal-desk
   </td>
   <td>Deal Desk and Legal Teams
   </td>
  </tr>
  <tr>
   <td>#team-data-analytics
   </td>
   <td>Data & Analytics
   </td>
  </tr>
  <tr>
   <td>#discuss-analytics
   </td>
   <td>Data + cross functional partners
   </td>
  </tr>
  <tr>
   <td>#announce-analytics
   </td>
   <td>Data + cross functional partners
   </td>
  </tr>
  <tr>
   <td>#alerts-dataops
   </td>
   <td>Data & Analytics
   </td>
  </tr>
  <tr>
   <td>#team-data-eng
   </td>
   <td>Data & Analytics
   </td>
  </tr>
</table>

### Legal

<table>
  <tr>
   <td><strong>New Channel Name</strong>
   </td>
   <td><strong>Members/Audience</strong>
   </td>
  </tr>
  <tr>
   <td>#team-legal
   </td>
   <td>All legal teammates
   </td>
  </tr>
  <tr>
   <td>#discuss-legal
   </td>
   <td>Legal + people with legal questions
   </td>
  </tr>
</table>

### Cody channels

<table>
  <tr>
 <td><strong>Channel Name</strong>
   </td>
   <td><strong>Purpose</strong>
 </td>
  </tr>
  <tr>
   <td>#announce-cody
   </td>
   <td>Very high signal announcements about Cody releases, product roadmap, improvements, and usage that everyone in the company should be aware of.
   </td>
  </tr>
  <tr>
   <td>#discuss-cody
   </td>
   <td>General questions and discussions about Cody; prefer to use more focused channels when possible (eg, #wg-cody-agent for questions or discussion around Cody Agent).
   </td>
  </tr>
  <tr>
   <td>#feedback-cody
   </td>
   <td>General dogfooding and external feedback from Cody users. Feedback that’s specific to a particular client should go in the relevant #wg- channel.
   </td>
  </tr>
  <tr>
   <td>#discuss-context
   </td>
   <td>Discussion of Cody context
   </td>
  </tr>
  <tr>
   <td>#discuss-cody-strat
   </td>
   <td>Questions, bug reports, and feedback specific to the Cody strategic work
   </td>
  </tr>
  <tr>
   <td>#team-cody-strat
   </td>
   <td>Internal channel for members of the Cody strategic team
   </td>
  </tr>
  <tr>
   <td>#wg-cody-gateway
   </td>
   <td>Discussion space for Cody Gateway development
   </td>
  </tr>
  <tr>
   <td>#wg-cody-agent
   </td>
   <td>Discussion space for Cody Agent development
   </td>
  </tr>
  <tr>
   <td>#discuss-cody-clients
   </td>
   <td>Discussion space for Cody product teams to coordinate and collaborate on cross-team work
   </td>
  </tr>
  <tr>
   <td>#team-cody-clients
   </td>
   <td>Discussion, questions, bug reports, and feedback about Cody clients.
   </td>
  </tr>
  <tr>
   <td>#wg-cody-neovim
   </td>
   <td>Discussion, questions, bug reports, and feedback specific to the Neovim plugin. Neovim team collaboration and weekly progress updates.
   </td>
  </tr>
  <tr>
   <td>#wg-cody-jetbrains
   </td>
   <td>Discussion, questions, bug reports, and feedback specific to the JetBrains plugins (eg, IntelliJ). JetBrains team collaboration and weekly progress updates.
   </td>
  </tr>
  <tr>
   <td>#wg-cody-web
   </td>
   <td>Discussion, questions, bug reports, and feedback specific to Cody in the web (dotcom or enterprise). Cody Web team collaboration and weekly progress updates.
   </td>
  </tr>
  <tr>
   <td>#wg-cody-emacs
   </td>
   <td>Discussion, questions, bug reports, and feedback specific to Emacs plugin
   </td>
  </tr>
  <tr>
   <td>#discuss-cody-app
   </td>
   <td>Questions, bug reports, and feedback specific to Cody App (not part of GA, but we need a place to continue trying to support existing users).
   </td>
  </tr>
  <tr>
   <td>#cody-mentions
   </td>
   <td>Alerts delivered when Cody is mentioned in our community.
   </td>
  </tr>
  <tr>
   <td>#cody-mentions-east
   </td>
   <td>Alerts delivered when Cody is mentioned by a customer/user in the east sales region.
   </td>
  </tr>
  <tr>
   <td>#cody-mentions-west
   </td>
   <td>Alerts delivered when Cody is mentioned by a customer/user in the west sales region.
   </td>
  </tr>
  <tr>
   <td>#cody-mentions-emea
   </td>
   <td>Alerts delivered when Cody is mentioned by a customer/user in the emea sales region.
   </td>
  </tr>
  <tr>
   <td>#cody-usage-notifications
   </td>
   <td>Informational notifications for customers/users whose Cody Usage has exceeded thresholds of 90%, 95%, and 100% of their rate limit quota in the current window.
 </td>
  </tr>
</table>
