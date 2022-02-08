# Tracking & sharing user & stakeholder feedback

Our passionate users and stakeholders, both internal and external, provide a constant stream of thoughtful feedback and love engaging with us to help them and their teams solve their toughest problems. This trust and feedback is a gift, and we take it seriously and listen carefully to what users tell us.

_This page is most relevant to product team members. If you want to know how to best share feedback with the product team, please see [surfacing product feedback](surfacing_product_feedback.md)._

## Sources of feedback

- [Tracking & sharing user & stakeholder feedback](#tracking--sharing-user--stakeholder-feedback)
  - [Sources of feedback](#sources-of-feedback)
    - [Sales feedback](#salesce-feedback)
    - [CE feedback](#ce-feedback)
    - [Email lists](#email-lists)
      - [hi@sourcegraph.com](#hisourcegraphcom)
      - [feedback@sourcegraph.com](#feedbacksourcegraphcom)
      - [support@sourcegraph.com](#supportsourcegraphcom)
    - [GitHub issues](#github-issues)
    - [Twitter](#twitter)
    - [Slack](#slack)
    - [Support tickets](#support-tickets)
    - [Hubspot forms](#hubspot-forms)
      - [NPS Survey](#nps-survey)
      - [Browser Extension Uninstall Feedback](#browser-extension-uninstall-feedback)
  - [Productboard](#productboard)
    - [Adding feedback to productboard](#adding-feedback-to-productboard)
  - [Sharing user feedback](#sharing-user-feedback)

### Sales feedback

- **Purpose:** Customers and prospects often give product feedback on calls with sales members.
- **Owner:** The Sales team owns feedback from sales calls.

The product team can access recordings using [Chorus AI](https://chorus.ai/). You can find relevant calls using Chorus's search and [tracker](https://docs.chorus.ai/hc/en-us/articles/360036206813-How-to-Create-Trackers) features, which allow you to use keywords to explore call transcripts.

### CE feedback

- **Purpose:** CE teammates work closely with customers and often collect explicit customer feedback, general patterns of feedback they notice with a customer(s), and feedback from using the product themselves.
- **Owner:** CE owns raising customer or prospect feedback as [product gaps](surfacing_product_feedback). Product owns triaging those product gaps, and keeping CE updated about prioritisation decisions, if the items ends up on the roadmap.

Other resources (internal only) the CE team owns:

- The [product gaps dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005HH53EAG/view) tracks features that are impacting deals.
- [Account overview dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005HSnLEAW/view).
- [Account plan documents](https://drive.google.com/drive/folders/1EoKl4lFeR8VvM6LyubMocxN4Z4OHPoNl?usp=sharing) provide the business context for the accounts.
- [Technical Design Documents](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC?usp=sharing) reflect what the latest state of the customers’ environment.
- [Customer notes](https://drive.google.com/drive/folders/1gjXWQ1l0Fnt2pVS2ohx3w0cw-gaJ_Ez0?usp=sharing) are running notes from customer Chorus calls.

### Email lists

We have a few different email lists that are used to send us feedback.

#### hi@sourcegraph.com

- **Purpose:** This email list is used as the reply-to for our release emails, and is a general way for people to reach out and get in touch.
- **Owner:** The product team owns replying to all incoming emails, and routing them as appropriate to Support, Sales, Hiring, etc.

#### feedback@sourcegraph.com

- **Purpose:** This email list is used to request feedback from inside of Sourcegraph, and to give to customers to reach our product team with their feedback directly.
- **Owner:** The product team owns replying to all emails, and triaging all feedback delivered.

#### support@sourcegraph.com

- **Purpose:** This email list is for customers to request help and connects to Zendesk.
- **Owner:** The Customer Support team is [responsible for all support issues](../../../support/process/support-workflow.md#support-workflow) and will pull in as needed engineering teams or product to help answer questions.

### GitHub issues

- **Purpose:** Anyone within or outside of Sourcegraph can file issues (like bugs or feature requests). Issues are often a developer's default place to leave feedback.
- **Owner:** For issues filed by Sourcegraph teammates, the filing teammate is responsible for making sure the issue is [labeled with the team's label](surfacing_product_feedback.md). For issues filed by someone outside Sourcegraph, the product manager on [feedback rotation](product_feedback_rotation.md) is responsible for labelling with the right team.

See [How to reference customer names in public tickets](prioritizing.md#how-to-reference-customer-names-in-public-tickets).

### Twitter

- **Purpose:** Anyone can tweet about @Sourcegraph for public feedback. All tweets are in #twitter on Slack.
- **Owner:** Marketing.

### Slack

- **Purpose:** Slack is a fast way for existing customers and Sourcegraph teammates to provide feedback.
- **Owner:** We [ask that teammates surface product feedback](surfacing_product_feedback.md) in #feedback. The product manager on [feedback rotation](product_feedback_rotation.md) owns routing and logging this feedback.

### Support tickets

- **Purpose:** A path for existing customers to get responsive support.
- **Owner:** CS team owns support tickets in Zendesk. If product team members want more insight into the support feedback, they can review [the support dashboard](https://sourcegraph.looker.com/dashboards-next/177) or scan the [customer issues repo](https://github.com/sourcegraph/customer/issues), and cross-reference both with slack searches in support channels. Additionally, at the end of every quarter, the Head of Customer Support provides the product team with [a qualitative summary](https://drive.google.com/drive/folders/12kZOFbnXX8vfzLvso1hO-lf-t-HzJIr-?usp=sharing) and links to details of the major support trends from the prior three months.

### Hubspot forms

#### NPS Survey

- **Purpose:** We prompt customers to provide NPS ratings from within the Sourcegraph UI.
- **Owner:** The product manager on [feedback rotation](responding_to_user_feedback.md#feedback-rotation) owns responding to or forwarding NPS feedback.

#### Browser Extension Uninstall Feedback

- **Purpose:** We ask everyone who uninstalls the browser extension why they no longer want it.
- **Owner:** The browser extension product manager (currently the [Growth and Integrations team product manager](../../engineering/cloud/growth-and-integrations/index.md#members)) owns responding to this feedback.

## Productboard

We aggregate all of this feedback in [productboard](https://sourcegraph.productboard.com/). This lets us look at all of the sources of feedback to better understand which features will have the biggest impact on the product. It helps with prioritization and making sure we're building the next most important thing. It also helps us maintain a long-term source of truth for feedback: some of our sources of feedback are subject to removal over time due to retention policies, so adding specific insights to productboard captures it for the future.

### Adding feedback to productboard

All of the above sources of feedback (with the exception of HubSpot forms) require the team help forward that data into productboard using an available integration:

- **Slack integration:** Hover on a message containing feedback, select the more actions menu (three vertical dots), and then choose 'Push to productboard'. This will post a message to the thread/channel that's visible, so keep that in mind if customers are in the channel.
- **[browser extension](https://chrome.google.com/webstore/detail/productboard-make-product/mlpbdkpkicfkhgagnoamdcimmhdkakni?hl=en):** Use the browser extension for quick entry from a web page, or to just simply enter information when you think of it.
- **[forwarding email address](mailto:inbox-hkpsum5melnwcauyjvztbtsq@inbound.productboard.com):** You can forward email threads, or write notes as emails to push information to productboard.

## Sharing user feedback

Whenever possible, please use productboard links to share specific user feedback with others and in documents like RFCs. If something is worth sharing and doesn't already exist in productboard, it's the perfect opportunity to add it to productboard!
