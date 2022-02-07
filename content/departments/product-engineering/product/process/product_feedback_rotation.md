# Product feedback rotation

Sourcegraph has a number of [user & stakeholder feedback sources](user_stakeholder_feedback.md), each with an owner. The product team is responsible for replying and triaging feedback from some sources. To make sure this gets done, the PM team takes two-week long rotations.

If you are the PM on rotation, your are responsible for:

- replying to relevant feedback channel items
- labelling GitHub issues with no team label
- triaging productboard feedback

Other teams are responsible for bugs, support issues, product gaps. Read on to know what you need to do!

## Current rotation

The current PM on rotation is TODO.

## End of a rotation

At the end of a rotation, the PM on rotation is responsible for handing off the rotation to the next PM.

## Feedback rotation guide

### Triaging and answering the feedback channel

When you're on support rotation, you will spend more time monitoring the #feedback channel, which is a good thing to stay on top of customer needs in general. There are two things you need to do in the feedback channel: answering some NPS submissions, and routing feedback submitted directly by teammates to the right team.

There is a 24h SLA for this.

#### NPS feedback submission and happyness widget

The in-product NPS feedback widget and happyness feedback widget post directly to the feedback channel. They are powered by [Zapier](https://zapier.com/app/zaps/folder/828861).

As the PM on feedback on rotation, you need to review each submission and identify the right owner, then tag them. In a few cases, you need to reply yourself.

- If the submission is customer feedback, tag the CE that owns the account, and the product manager that owns the relevant product area. The CE is the DRI for answering the customer, the PM for extracting insights from the feedback. PMs should sync with the CE account owner if they want to follow-up directly, which is easily done in slack ("Hey, @<ce-owner> can I follow-up directly here?").
- If the submission is a support request, “I’m having trouble figuring something out”, start an email and cc `support@sourcegraph.com`, they will handle it from there. After you sent that email, reply to the slack message with an explicit message so that others know it's been dealth with (eg. "Forwarded to support").
- Lastly, if it's feedback from a customer (eg. a free tier self-hosted instance), you need to reply yourself if the user added their email, and **if there is a comment that calls for an answer** (not just an NPS rating with an empty message). When you reply, cc `feedback@sourcegraph.com` and bcc [your salesforce email](https://www.google.com/url?q=https://sourcegraph2020.lightning.force.com/lightning/settings/personal/EmailToSalesforceUserSetup/home&sa=D&source=docs&ust=1644257326395356&usg=AOvVaw0KQKoT-nlb8dZb8xk7iyPa) so that if the user replies all, we can all see that feedback. Also, it will automatically get sent to Productboard. There are someuseful email templates [here](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls/edit#).

Note: We don't reply to feedback not from customers that do not have a comment (that are just an NPS rating). This is not because we don't care: we used to reply and investigate those in the past, but we hardly ever got an answer, and realized our time was better spent replying to users that provide actionable feedback.

#### Triaging submissions from teammates

Often, teammates will post feedback directly to the #feedback channel. As the PM on rotation, you should reply to those messages, tagging the PM responsible for this area, and if it's a customer, the CE on this account. 
  
If the person that sumitted the feedback item is a CE and the item looks like a [product gap](surfacing_product_feedback.md#what-is-a-product-gap), ask them to file a product gap instead as we want ARR-impacting items to be trracked as product gaps submissions.

You don't need to do anything for other items posted to #feedback. Product gap submissions in particular automatically tag the right PM.

### Labelling GitHub issues with no team label

Sometimes, someone outside Sourcegraph will submit a GitHub issue. At Sourcegraph, issues are labelled with team labels, that look like `team/code-insights` so that they show up on the dashboard of the right team. External contributors cannot add labels, so the PM on feedback rotation has to label those issues. To keep the backlog clean, this means you may also have to add a team label to issues created by Sourcegraph teammates that forgot to do it. View it as an opportunity to peak into what other teams are doing!

You can refer to the [product teams page](../team/product_teams.md) and to the more detailed (internal only, working document) [team areas of ownership](../../engineering/process/engineering_ownership.md). We plan to merge the product team areas of ownership into the handbook page when finalized.

- list of [new issues to triage](https://github.com/sourcegraph/sourcegraph/issues?page=2&q=is%3Aissue+no%3Alabel+is%3Aopen)
- [list of team labels](https://github.com/sourcegraph/sourcegraph/labels?q=team+%2F), the slack channel associated with the team is in the label description

All issues labeled with a team's name are [automatically added](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) to the team's board for triage.

There is no SLA for this, just make sure that all issues are labelled at the end of your rotation.

### Triaging producboard feedback

Feedback from various sources are submitted into productboard, and need to be assigned to the right owner. As the PM on feedback om rotation, your are responsible for this.

- Go to the Feedback replies triage section. This filters by Owners being Unassigned, Christina Forney (as most feedback gets automatically assigned to her) or Eric Brody-Moore (Happiness widget feedback).
- Steps for all insights:
  - Owner assignment: Unassign the Owner, assign whoever should own the insight (PM or EM).
  - User assignment: Assign User as the Company or create a new user if it hasn’t been assigned by default.
  - Tags: Add any relevant team tags.
  - Features: Highlight content and assign any relevant features you find. When in doubt, leave it to the new Owner to triage (PM or EM).
  - If there is no feedback in the item, it can be archived.
  - When you are complete with a note that isn’t getting “archived” – please mark it as “processed.”

For SourcegraphWeb insights, there are additional routing rules:

- Browser uninstalls: Assign to Joel Kwartler
- Has contact email: Assign to Ryan Phillips (interested in contacting open source users for the Sourcegraph Cloud effort)
- Has feedback but no contact email: Tag any relevant feedback and assign PM/EM owner. If the feedback is generic and has no clear owner, process it yourself.
- No feedback: Archive

There is no SLA for this, just make sure that all notes are labelled at the end of your rotation.
