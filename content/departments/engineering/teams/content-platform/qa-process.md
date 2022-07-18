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

After CPT review, the PR and deploy preview are shared with stakeholders to provide feedback in a QA doc. To do this:

1. CPT product manager shares PR and deploy preview link with stakeholders. In most marketing request cases this means sharing with the marketing project manager.
2. Marketing project manager creates a QA doc to collect feedback and shares this, the PR link, and the deploy preview link with the appropriate stakeholders on the marketing side. This includes a deadline for feedback.
3. Once the QA doc has closed, CPT product manager works with the PR author to make changes.
4. After changes are made, stakeholders are asked to perform a final review.

## Approval and release

After final stakeholder approval, we can merge the PR and push the changes live.

1. Marketing project manager informs CPT product manager once we have stakeholder approval.
2. CPT product manager approves the PR with a comment stating that we have stakeholder approval to merge.
3. PR Author merges PR.
