# Research

As a design team, we carry out research in a variety of forms depending on our research goals. Sometimes this research takes place at the beginning of a project, during the discovery phase. Other times, it takes place at the end of a project after shipping a design outcome.

# Research methods

Some specific methods we use:

### Hallway testing

When we want to test our ideas using interactive prototypes or even in the product itself, our own team members make great participants. (However, we need to remember that our own team members are generally very experienced in the area of code search, which results in implicit bias that we must account for in synthesis.)

There is a #hallway-testing Slack channel to share information and scout participants for hallway tests.

### Unmoderated user testing

When unmoderated user testing is valuable we use [usertesting.com](../software_systems/index.md#product-design-and-research) to conduct unmoderated user research with a pool of participants sourced by usertesting.com.

- Read the guide for [conducting research with usertesting.com](./user-testing-com.md)
- Learn about our [Sourcegraph Cloud instance for user research](./user-research-instance.md)

### Moderated user testing

When moderated user testing is valuable, we use [LookBack](../software_systems/index.md#product-design-and-research) to conduct sessions. With LookBack, other team members can observe and take notes in real time without appearing to the participant, which makes for a more positive participation experience.

### Competitive and analogous research

It can be beneficial to see how other tools and platforms are solving parallel problems. We usually collect and store screenshots and references in artifacts like RFCs and the Research layer in Figma projects. We also have [Styleboards in Figma](https://www.figma.com/files/project/10712517/Styleboards?fuid=1011662758768504201) for collecting inspiration for product areas.

### Existing user feedback

Our users are passionate and provide excellent, regular feedback that we keep in tools like [Productboard](https://sourcegraph.productboard.com/).

### Surveys

Surveys allow researchers to ask questions at a scale that isn't possible with other research methods. Surveys are very useful in validating qualitative findings at much larger scales.

# Scripts and proven activities

- [One-page research plan template](https://docs.google.com/document/d/1frKMZIT3rPjsvT5w5rkUahR7KiZA8KWTOjAlqIWKnP0/edit#)
- [Useful, proven test activities for re-use](./useful-testing-activities.md)

# Synthesizing and documenting insights in Dovetail

The design team uses [Dovetail](https://dovetailapp.com/) to store raw research data, analyze that data, and generate insights. Learn more about [how we use Dovetail here at Sourcegraph](./synthesizing-and-documenting-insights-in-dovetail.md).

We are currently migrating research findings in the [user research library](../../../product/process/user_research/index.md#user-research-library) to Dovetail.

Research findings are valuable for future reference, so it's worth making sure they're [well-crafted asynchronous design artifacts](../artifacts/index.md).

# User Research Participants

## Internal users

As our users are primarily developers, our own Sourcegraph developers are great interview participants. (However, we need to remember that our own developers are generally very experienced in the area of code search, which results in implicit bias that we must account for in synthesis.)

Use the following methods to identify internal research subjects:

- Post a request in #dev-chat, #ce, #community-chat or #customer support with information about the area you are researching
- Often, developers have little bandwith for new requests. Making direct requests of specific developers tends to yield a higher response rate

## External users

_The product team keeps a list of [upcoming external research calls here](https://docs.google.com/spreadsheets/d/1JkTrLyPLPqBx7Vjkaweosq-GauPxaVSDRb0dh56VLVw/edit#gid=0), so other teammates can add quick additional topics if something is already scheduled and there is additional time. You should still take agency to schedule your own research calls, but this helps us multiply our scheduling efforts to benefit multiple teams._

Relying on internal users can lead to introducing bias into your research, yet sourcing external users for feedback is one of the most difficult parts of the research process. The following are methods product and design use to source research candidates:

- Outreach on social media, either through our platform (ask for a post in #social-media-action) or via active and influential accounts such as the CTO, CEO, or members of your team.
- The #feedback Slack channel can be a source of participants for specific issues
  - Use Productboard to identify multiple feedback entries related to a single issue
- Consult customer engineering or support to identify customers who may be interested or have feedback on the area of research. Additionally, the following methods are helpful when locating customers to interview:
  - Searching Slack support channels (#support-{customer-name}) for users interested in the product space
  - Posting a request in the support channels of customers who are users of or interested in using the feature
  - Searching Productboard or Chorus.ai for mentions of the feature in question
- Reach out to members of the Sourcegraph Research Panel (currently a work in progress)
  - [Learn more about the Sourcegraph Research Panel and how to join](./sourcegraph-research-panel.md)
- Consider running the test on usertesting.com

## Helpful links to share with user research participants and observers

We've found that moderated user research goes more smoothly, and is more approachable, when both participants and observers know what to expect. We've created two resources you can share ahead of time to make your research more successful:

- [So you’re about to participate in user testing](../../../product/process/user_research/user_research_participant.md)
- [So you’re about to help us with user testing](../../../product/process/user_research/user_research_observer.md)

## Compensation for user research participants

When it's the right choice to provide compensation for user research participants, we have an [established process you can bring into your research activity](../../../product/process/user_research/user_research_compensation.md).
