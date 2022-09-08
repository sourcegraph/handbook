# QA process for marketing requests

All marketing requests should go through the same quality assurance (QA) process to ensure consistency and quality across our properties. This page describes the current QA process followed by the Content Platform Team (CPT) and Marketing.

## CPT review

CPT performs the first round of QA, providing feedback in the PR. To do this:

1. Review the PR description and comments to see if there were any adjustments that needed to be made from the original design (example in the "Notes" section of the description [here](https://github.com/sourcegraph/about/pull/5204)).
2. Open the deploy preview. You can find this by scrolling down to the checks section of the PR and clicking `Details` on the `deploy/netlify` check:
   ![Deploy preview link in PR checks](https://storage.googleapis.com/sourcegraph-assets/handbook/deploy-preview.png)
3. Open the Figma file. This can usually be found in the description of the issue linked to the PR (example [here](https://github.com/sourcegraph/about/issues/5172)).
4. Compare the Figma file and the preview. Figma is the source of truth for copy and design.
   - To also review the code changes, go to the "Files Changed" tab in the PR.
5. Add any questions or requested changes to the PR via comment. The CPT product manager should _not_ approve the PR until they have stakeholder approval. If we are still awaiting stakeholder approval, leave a comment with your feedback and include that we still need to go through a round of stakeholder feedback.

After comments are submitted, the PR author can make changes before sharing more broadly with stakeholders.

## Stakeholder review

After CPT review, the PR and deploy preview are shared with stakeholders to provide feedback. To do this:

1. CPT project manager creates a Slack channel to collect feedback and shares this, the Asana task, the PR link, and the deploy preview link with the appropriate stakeholders and the PR Author. This includes a deadline for feedback.
   - The naming convention for the channel is: #review-[issue title]
   - Where applicable, feedback can also be captured in a markup.io file.
2. Once feedback cycle is closed, the PR Author works through the necessary changes and where applicable, can leave non-blocking feedback for a later stage.
3. After changes are made, stakeholders are asked to perform a final review.

## Approval and release

After final stakeholder approval, we can merge the PR and push the changes live.

1. Marketing project manager informs the channel once we have stakeholder approval.
2. PR Author approves and merges PR and informs the channel once it's released.
3. CPT project manager archives the Slack channel.
