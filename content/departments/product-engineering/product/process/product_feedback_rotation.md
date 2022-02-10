# Product feedback rotation

Sourcegraph collects user and stakeholder feedback from [several sources](user_stakeholder_feedback.md), each with an owner. Product managers are ultimately responsible for feedback in their areas. The product team as a whole is responsible as the first responder for replying and triaging feedback from some sources. To make sure this gets done, a given PM is the dedicated PM on product feedback rotation for rotations of two weeks.

If you are the PM on rotation, your are responsible for:

- [replying to relevant #feedback channel items](#triaging-and-answering-the-feedback-channel)
- [labelling GitHub issues with no team label](#labelling-github-issues-with-no-team-label)
- [triaging productboard feedback](#triaging-producboard-feedback)

Other teams are responsible for support issues (customer support) and product gaps (CEs).

## Current rotation

The current PM on rotation is listed [here](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls/edit#bookmark=id.cqrgoc1hvygc).

## End of a rotation

At the end of a rotation, the PM on rotation is responsible for handing off the rotation to the next PM.

## Feedback rotation guide

[Intro video](https://www.loom.com/share/7a304e8b44b141bb92fee8976f15427f)

### Triaging and answering the feedback channel

When you're on support rotation, you are explicitly responsible for monitoring the #feedback channel. There are two things you need to do there:

- answering some NPS submissions
- routing feedback submitted directly by teammates to the right team

There is a 24h SLA for this on business days.

#### NPS feedback submission and happyness widget

The in-product NPS feedback widget and happiness feedback widget post directly to the feedback channel. They are powered by [Zapier](https://zapier.com/app/zaps/folder/828861).

As the PM on feedback on rotation, you need to review submissions **that contain actionable feedback** and identify the right owner, then tag them. In a few cases, you need to reply yourself. This excludes submissions that only contain a NPS score or rating and no written feedback.

- **If the submission is customer feedback**, tag the CE that owns the account, and the product manager that owns the relevant product area. The CE is the DRI for answering the customer. PMs should sync with the CE account owner if they want to follow-up directly, which is easily done in slack ("Hey, @<ce-owner> can I follow-up directly here?").
- **If the submission is a support request**, “I’m having trouble figuring something out”, start an email and cc `support@sourcegraph.com`, they will handle it from there. After you send that email, reply to the slack message explicitly so that others know it's been dealt with (eg. "Forwarded to support").
- Lastly, if the submission is feedback **not** from a customer (eg. a free tier self-hosted instance), you need to reply yourself if the user added their email, and **if there is a comment that calls for an answer** (not just an NPS rating with an empty message). When you reply, cc `feedback@sourcegraph.com` and bcc [your salesforce email](https://www.google.com/url?q=https://sourcegraph2020.lightning.force.com/lightning/settings/personal/EmailToSalesforceUserSetup/home&sa=D&source=docs&ust=1644257326395356&usg=AOvVaw0KQKoT-nlb8dZb8xk7iyPa) so that if the user replies all, we can all see that feedback. Also, it will automatically get sent to Productboard. There are some useful email templates [here](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls).

Note: We don't reply to feedback not from customers that do not have a comment (that are just an NPS rating). This is not because we don't care: we used to reply and investigate those in the past, but we hardly ever got an answer, and realized our time was better spent replying to users that provide actionable feedback and usually expect an answer.

#### Triaging submissions from teammates

Often, teammates will post feedback directly to the #feedback channel. As the PM on rotation, you should reply to those messages, tagging the PM responsible for this area, and if it's a customer, the CE on this account.

If the person that submitted the feedback item is a CE and the item looks like a [product gap](surfacing_product_feedback.md#what-is-a-product-gap), ask them to file a product gap instead as we want ARR-impacting items to be tracked as product gap submissions.

You don't need to do anything for other items posted to #feedback. In particular, product gap submissions are automatically posted to the #feedback channel, and automatically tag the right PM.

### Labelling GitHub issues with no team label

This is the second thing you need to do as the PM on feedback rotation. Have you ever submitted an issue to a GitHub repository, and never gotten an answer? This is very frustrating, adn we don't want that to happen at Sourcegraph.

Sometimes, someone outside Sourcegraph will submit a GitHub issue. At Sourcegraph, issues are labelled with team labels, that look like `team/batchers` so that they show up on the dashboard of the right team. All issues labeled with a team's name are [automatically added](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) to the team's board for triage. Issues without labels tend to get lost. External contributors cannot add labels, so the PM on feedback rotation has to label those issues. To keep the backlog clean, this means you may also have to add a team label to issues created by Sourcegraph teammates that forgot to do it. View it as an opportunity to peak into what other teams are doing!

In practice:

- Monitor the list of [new issues to triage](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+no%3Alabel+is%3Aopen)
- If unsure about what team label to use, take a look at [list of team labels](https://github.com/sourcegraph/sourcegraph/labels?q=team+%2F). The slack channel associated with the team is in the label description. You can refer to the [product teams page](../team/product_teams.md) and to the more detailed [engineering ownership](../../engineering/process/engineering_ownership.md).
- If you really don't know what team to assign it to, take a shot at assigning to the closest team with a nice message, asking them to re-route it to a more relevant team if necessary. "Hey, this issue has no team label and this _seems_ like it's in your scope. Adding your team label, but feel free to re-route this to another team".

There is no SLA for this, just make sure that all issues are labelled at the end of your rotation.

### Triaging producboard feedback

This is the third and last thing you need to do as the PM on feedback rotation. Feedback from various sources are submitted into productboard, and need to be assigned to the right owner. Feedback items in productboard are called "noted". Some notes are auto-assigned using various automation. You need to take care of [unassigned notes](https://sourcegraph.productboard.com/insights/notes/unassigned), and make sure they get assigned to the right PM.

- Go to [Unassigned notes](https://sourcegraph.productboard.com/insights/notes/unassigned/)
- Steps **for all notes**:
  - Owner assignment: Unassign the Owner, assign whoever should own the insight (PM or EM). Note that in some cases, this happens automatically.
  - User assignment: Assign User as the Company or create a new user if it hasn’t been assigned by default.
  - Tags: Add any relevant team tags.
  - Features: Highlight content and assign any relevant features you find. When in doubt, leave it to the new Owner to triage (PM or EM).
  - If there is no feedback in the item, it can be archived.
  - When you are complete with a note that isn’t getting “archived” – please mark it as “processed.”

For SourcegraphWeb notes, there are additional routing rules:

- Browser uninstalls: Assign to Ryan Scott
- Has contact email: Assign to Ryan Phillips (interested in contacting open source users for the Sourcegraph Cloud effort)
- Has feedback but no contact email: Tag any relevant feedback and assign PM/EM owner. If the feedback is generic and has no clear owner, process it yourself.
- No feedback: Archive

There is no SLA for this, just make sure that all notes are labelled at the end of your rotation.
