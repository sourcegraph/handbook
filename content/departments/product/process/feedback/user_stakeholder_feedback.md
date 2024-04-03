# Tracking & sharing user & stakeholder feedback

Our passionate users and stakeholders, both internal and external, provide a constant stream of thoughtful feedback and love engaging with us to help them and their teams solve their toughest problems. This trust and feedback is a gift, and we take it seriously and listen carefully to what users tell us.

_This page is most relevant to product team members. If you want to know how to best share feedback with the product team, please see [surfacing product feedback](surfacing_product_requests.md)._

## Sources of feedback

- [Tracking \& sharing user \& stakeholder feedback](#tracking--sharing-user--stakeholder-feedback)
  - [Sources of feedback](#sources-of-feedback)
    - [Sales feedback](#sales-feedback)
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
      - [Happiness widget](#happiness-widget)
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
- **Owner:** CE owns raising customer or prospect feedback as [product gaps](surfacing_product_requests.md). Product owns triaging those product gaps, and keeping CE updated about prioritisation decisions, if the items ends up on the roadmap.
- **Pipeline:** Each time a product gap submission is added to salesforce, it is posted in #feedback, @-mentioning the PM of the relevant product area. This is powered by a [Zap](https://zapier.com/app/editor/145738791).

Other resources (internal only) the CE team owns:

- The [product gaps dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005HH53EAG/view) tracks features that are impacting deals.
- [Account overview dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005HSnLEAW/view).
- [Account plan documents](https://drive.google.com/drive/folders/1EoKl4lFeR8VvM6LyubMocxN4Z4OHPoNl?usp=sharing) provide the business context for the accounts.
- [Technical Design Documents](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC) reflect past states of the customer's environment and technical requirements when Sourcegraph was deployed.
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
- **Owner:** The Customer Support team is [responsible for all support issues](../../../technical-success/support/process/support-workflow.md#support-workflow) and will pull in as needed engineering teams or product to help answer questions.

### GitHub issues

- **Purpose:** Anyone within or outside of Sourcegraph can file issues (like bugs or feature requests). Issues are often a developer's default place to leave feedback.
- **Owner:** For issues filed by Sourcegraph teammates, the filing teammate is responsible for making sure the issue is [labeled with the team's label](surfacing_product_requests.md). For issues filed by someone outside Sourcegraph, product managers are [responsible for labelling with the right team](product_feedback_monitoring.md#labelling-github-issues-with-no-team-label).

See [How to reference customer names in public tickets](../prioritize_and_build/prioritizing.md#how-to-reference-customer-names-in-public-tickets).

### Twitter

- **Purpose:** Anyone can tweet about @Sourcegraph for public feedback. All tweets are in #twitter on Slack.
- **Owner:** Marketing.

### Slack

- **Purpose:** Slack is a fast way for existing customers and Sourcegraph teammates to provide feedback.
- **Owner:** We [ask that teammates surface product feedback](surfacing_product_requests.md) in #feedback. Product managers own [routing and logging this feedback](product_feedback_monitoring.md).

### Support tickets

- **Purpose:** A path for existing customers to get responsive support.
- **Owner:** CS team owns support tickets in Zendesk. If product team members want more insight into the support feedback, they can review [the support dashboard](https://sourcegraph.looker.com/dashboards-next/177) or scan the [customer issues repo](https://github.com/sourcegraph/customer/issues), and cross-reference both with slack searches in support channels. Additionally, at the end of every quarter, the Head of Customer Support provides the product team with [a qualitative summary](https://drive.google.com/drive/folders/12kZOFbnXX8vfzLvso1hO-lf-t-HzJIr-?usp=sharing) and links to details of the major support trends from the prior three months.

### Hubspot forms

#### NPS Survey

- **Purpose:** We prompt customers to provide NPS ratings from within the Sourcegraph UI. On Sourcegraph version 3.41 and above, we also prompt about use cases.
- **Owner:** Product managers own [responding to or forwarding actionable NPS feedback](product_feedback_monitoring.md).
- **Pipeline:** This is powered by two Zaps: one for [Sourcegraph 3.40 and below](https://zapier.com/app/editor/64689250), and another for [Sourcegraph 3.41 and above](https://zapier.com/editor/160211136/published/160211136) that also handles use cases data submissions. Submissions that have written feedback (as opposed to only a rating), are saved as a productboard note and posted in #feedback. Submissions with only a score are posted in #feedback-nps. In addition, if the feedback contains obvious keywords (eg. 'Code Insights'), the PM of the relevant area will be automatically @-mentioned on slack. The CE and AE owners of the deal are also mentioned if they have added their handle to [this spreadhseet](https://docs.google.com/spreadsheets/d/1RPiuhuyEpqJ6MHFyzf5WOfx1DA00iW6_mEgAHbJffeQ/edit#gid=334520408). This is based on account ownership as available in this [look](https://sourcegraph.looker.com/looks/1301).

#### Happiness widget

- **Purpose:** Users can submit feedback from the `Feedback` button of the Sourcegraph UI.
- **Owner:** Product managers own [responding to or forwarding any actionable happiness widget feedback](product_feedback_monitoring.md).
- **Pipeline:** This is powered by a [Zap](https://zapier.com/app/editor/113508746). Submissions that have written feedback (as opposed to only a rating), are saved as a productboard note. In addition, if the feedback contains specific keywords, the PM of the relevant area will be automatically @-mentioned on slack.

#### Browser Extension Uninstall Feedback

- **Purpose:** We ask everyone who uninstalls the browser extension why they no longer want it.
- **Owner:** Currently, the [Code Search team](../../../engineering/teams/code-search/index.md) owns responding to this feedback.

## Productboard

We aggregate all of this feedback in [productboard](https://sourcegraph.productboard.com/). This lets us look at all of the sources of feedback to better understand which features will have the biggest impact on the product. It helps with prioritization and making sure we're building the next most important thing. It also helps us maintain a long-term source of truth for feedback: some of our sources of feedback are subject to removal over time due to retention policies, so adding specific insights to productboard captures it for the future.

In case you have longer google docs (eg. customer discovery notes) that don't fit in productboard cards:

- put the doc (or a [shortcut](https://support.google.com/drive/answer/9700156?)) in the [customer feedback notes](https://drive.google.com/drive/folders/1suKSsUTTJlEyRaiunNtzJUMwrP_ZPWYG) folder, using the following naming convention `YYYYMMDD - Customer - Subject` (e.g. `20222806 - Acme - Code security`).
- create snippets for key insights into Productboard

### Adding feedback to productboard

All of the above sources of feedback (with the exception of HubSpot forms) require the team help forward that data into productboard using an available integration:

- **Slack integration:** Hover on a message containing feedback, select the more actions menu (three vertical dots), and then choose 'Push to productboard'. This will post a message to the thread/channel that's visible, so keep that in mind if customers are in the channel.
- **[browser extension](https://chrome.google.com/webstore/detail/productboard-make-product/mlpbdkpkicfkhgagnoamdcimmhdkakni?hl=en):** Use the browser extension for quick entry from a web page, or to just simply enter information when you think of it.
- **[forwarding email address](mailto:inbox-hkpsum5melnwcauyjvztbtsq@inbound.productboard.com):** You can forward email threads, or write notes as emails to push information to productboard.

## Sharing user feedback

Whenever possible, please use productboard links to share specific user feedback with others and in documents like RFCs. If something is worth sharing and doesn't already exist in productboard, it's the perfect opportunity to add it to productboard!
