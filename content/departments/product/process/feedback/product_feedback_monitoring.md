# Product feedback monitoring

Sourcegraph collects user and stakeholder feedback from [several sources](user_stakeholder_feedback.md), each with an owner. Product managers are ultimately responsible for feedback in their areas. The product team as a whole is responsible as the first responder for replying and triaging feedback from some sources. Other teams are responsible for support issues (Customer Support) and product gaps (Customer Engineering).

As a PM, your are responsible for:

- [Triaging and answering feedback channels](#triaging-and-answering-feedback-channels)
  - [NPS feedback submission and happyness widget](#nps-feedback-submission-and-happyness-widget)
  - [Triaging submissions from teammates](#triaging-submissions-from-teammates)
- [Labelling GitHub issues with no team label](#labelling-github-issues-with-no-team-label)
- [Triaging producboard feedback](#triaging-producboard-feedback)

### Triaging and answering feedback channels

All PMs are responsible for monitoring feedback channels (#feedback and #feedback-dogfood). There are two things you need to do there:

- answering some NPS submissions
- routing feedback submitted directly by teammates to the right team

#### NPS feedback submission and happiness widget

The in-product NPS feedback widget and happiness feedback widget post directly to the #feedback and #feedback-nps channels. They are powered by [Zapier](https://zapier.com/app/zaps/folder/828861).

As a PM, you own reviewing and triaging submissions in #feedback **that contain actionable feedback** related to your product areas. In a few cases, you might need to reply yourself. This excludes submissions that only contain a NPS score or rating and no written feedback which are posted directly in the #feedback-nps channel.

- **If the submission is customer feedback**, the CE that owns the account should be automatically tagged by Zapier. PMs should sync with the CE account owner if they want to follow-up directly, which is easily done in slack ("Hey, @<ce-owner> can I follow-up directly here?").
- **If the submission is a support request**, “I’m having trouble figuring something out”, start an email and cc `support@sourcegraph.com`, they will handle it from there. After you send that email, reply to the slack message explicitly so that others know it's been dealt with (eg. "Forwarded to support").
- Lastly, if the submission is feedback **not** from a customer (eg. a free tier self-hosted instance), you need to reply yourself if the user added their email, and **if there is a comment that calls for an answer** (not just an NPS rating with an empty message). When you reply, cc `feedback@sourcegraph.com` and bcc [your salesforce email](https://www.google.com/url?q=https://sourcegraph2020.lightning.force.com/lightning/settings/personal/EmailToSalesforceUserSetup/home&sa=D&source=docs&ust=1644257326395356&usg=AOvVaw0KQKoT-nlb8dZb8xk7iyPa) so that if the user replies all, we can all see that feedback. Also, it will automatically get sent to Productboard. There are some useful email templates [here](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls).

Note: We don't reply to feedback not from customers that do not have a comment (that are just an NPS rating). This is not because we don't care: we used to reply and investigate those in the past, but we hardly ever got an answer, and realized our time was better spent replying to users that provide actionable feedback and usually expect an answer.

#### Triaging submissions from teammates

Often, teammates will post feedback directly to the #feedback and #feedback-dogfood channels. As a PM, you should review and triage those messages.

If the person that submitted the feedback item is a CE and the item looks like a [product gap](surfacing_product_requests.md#what-is-a-product-gap), ask them to file a product gap instead as we want ARR-impacting items to be tracked as product gap submissions. Product gap submissions are automatically posted to the #feedback channel, and automatically tag the right PM.

### Labelling GitHub issues with no team label

Sometimes, someone outside Sourcegraph will submit a GitHub issue. At Sourcegraph, issues are labelled with team labels, that look like `team/batchers` so that they show up on the dashboard of the right team. All issues labeled with a team's name are [automatically added](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) to the team's board for triage. Issues without labels tend to get lost. External contributors cannot add labels, so PMs are responsible of re-routing these issues to the relevant team. As a PM you'll get unlabelled issues randomly assigned to you, your job here is to re-assign them to the owning team by adding the relevant team label.

In practice:

- If unsure about what team label to use, take a look at [list of team labels](https://github.com/sourcegraph/sourcegraph/labels?q=team+%2F). The slack channel associated with the team is in the label description. You can refer to the [product teams page](../../team/product_teams.md) and to the more detailed [engineering ownership](../../../engineering/dev/process/engineering_ownership.md).
- If you really don't know what team to assign it to, take a shot at assigning to the closest team with a nice message, asking them to re-route it to a more relevant team if necessary. "Hey, this issue has no team label and this _seems_ like it's in your scope. Adding your team label, but feel free to re-route this to another team".

There is no SLA for this, just make sure that all issues are labelled periodically.

### Answering feedback inbox emails

We have a `feedback@sourcegraph.com` email list that is used by users to reach our product team with their feedback directly. The relevant PM will respond if a reply is needed. Once again remember to cc `feedback@sourcegraph.com` and bcc [your salesforce email](https://www.google.com/url?q=https://sourcegraph2020.lightning.force.com/lightning/settings/personal/EmailToSalesforceUserSetup/home&sa=D&source=docs&ust=1644257326395356&usg=AOvVaw0KQKoT-nlb8dZb8xk7iyPa) so that if the user replies all, we can all see that feedback.
