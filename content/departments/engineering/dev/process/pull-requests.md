# Pull requests

This guide will walk you through the process of creating, reviewing, and approving pull requests (PRs). It covers the following topics:

1. How to create a PR
2. How to make the PR easy to review
3. How to review PRs
4. What "quick stamp"s mean

## 1. How to create a PR

This section is designed to help early career engineers or outside contributors when creating their first couple of PRs while developing for your project.

- Suggested branch naming convention: initials/description<br>
  Example: "aa/replace-button-title"

- As an engineering convention, name the PR with the team the change is associated with and a short but precise description of the change because once merged, this is typically how the commit gets its message, making it easier for anyone to broadly understand what area of impact a commit has when scanning commit history.<br>
  Example: "batches: create batch change form"

- Apply applicable team label to the PR so that the associated team can easily find and identify PRs at a glance.<br>
  Example: "team/batchers"

- If the PR is a result of a related GitHub issue, include “Closes #12345” in the PR’s description in order to [auto-close the related issue once the PR is merged](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). This will also link the ticket and the PR together so that if anyone looks at either in the future, they won’t have any issue trying to find the corresponding ticket/PR as it will be noted in the sidebar.

- Defer merging a PR until at least one person has approved of the changes.

Suggested but not required:

- If the PR makes a visual change to the UI (ex: changing the text of a button) you can include a screenshot or a video of it in the PR so that a reviewer knows exactly where to focus when looking at the change.

- Also assign the PR to yourself so it is easier to find from search and also easy to switch assignee if need be.

Further reading:

- [Atlassian's PR guide](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)

## 2. How to make the PR easy to review

To create a PR that is easy to review and fosters a positive collaboration with your code reviewer, follow these guidelines:

1. **Review your own code before requesting a review**: Double-check your work and ensure it is ready for review.
1. **Provide a clear PR description**: In the PR description, explain _what_ you did and _why_ on a high level.
1. **Document your code**: Answer questions within the code itself so that it's documented for future reference.
1. **Stay focused on the goal**: Keep the changes in your PR focused on the specific goal and avoid unrelated changes.
1. **Break up large PRs**: Divide PRs longer than 400 lines into smaller, more manageable chunks.
1. **Communicate proactively**: Be proactive in your communication with the reviewer, providing necessary context and updates.
1. **Clarify your code when needed**: If the reviewer misunderstands something, consider improving the code to make it clearer and more obvious.
1. **Seek clarification on terse feedback**: If you receive brief or unclear feedback, ask the reviewer for more information, e.g., "What changes would be helpful?"
1. **Be open to alternate solutions**: When presented with an equally good solution, be open to implementing it the reviewer's way, as they may have valuable insights.
1. **Minimize lag between review rounds**: Respond to feedback promptly to minimize the time the reviewer spends restoring context.
1. **Express gratitude for feedback**: Thank your reviewer for their feedback and suggestions.

By following these guidelines, you'll create a PR that is easy to review, fostering a collaborative and efficient code review process.

## 3. How to review PRs

### Checklist of things to look for

1. **High-level design and functionality**: Assess if the design fits within the architecture. Evaluate the functionality and ensure it works as expected, handling edge cases. Request a demo from the developer if needed (e.g., for UI changes).
1. **Code examination**: Check for readable and maintainable code, avoiding overengineering or "future-proofing".
1. **Review tests**: Ensure tests are adequate and appropriate.
1. **Naming, style, and comments**: Verify naming and style against common code standards and conventions. Review comments for clarity and relevance.
1. **Documentation**: Confirm related docs are updated if they are affected by the code changes.
1. **Code understanding**: Comprehend what each line of code does and ask the developer for clarification if needed.
1. **Code style**: Most code style checking is automated, but not everything can be. Ensure the code adheres to proper style guidelines, including idiomatic code organization and [writing style](../../../../company-info-and-process/communication/content_guidelines/style_and_mechanics.md).
1. **Customer-facing labels and messages**: Verify new or modified labels or messages are appropriate, consistent, and follow our style guide.
1. **Dependencies**: Review any new dependencies and ensure they are appropriate.
1. **Security**: Check for potential security issues.
1. **Performance**: Consider potential performance issues and their impact.

### Soft skills around code reviews

Reviewing PRs is not only a technical process but also a social one. When reviewing PRs, keep in mind the following guidelines to ensure a thorough, efficient, but also friendly review process.

1. Prioritize code reviews
   - Treat code reviews as a **high priority** task and aim to complete them within one day. It makes for a great culture and is a nice experience for everyone when PRs are reviewed quickly.
1. Be mindful of your communication
   - Use "**we**" instead of "you" when discussing code changes.
   - Make **polite requests** instead of commands, e.g., "Could we...?"
   - **Explain** the reasoning behind your suggestions, ideally tying them to objective principles.
1. Focus on improvement and learning
   - Aim to bring the code up **a letter grade or two**, helping your colleagues improve over time, rather than giving a list of twenty things to improve. Even if each of your points are valid, it can be overwhelming to receive a long list of suggestions.
   - If you notice **repeated mistakes**, point out one instance and encourage the developer to look for more occurrences.
1. Handle bugs and large PRs appropriately
   - Avoid asking the author to fix bugs unrelated to their changes, even if they are nearby. Address significant bugs **separately** or in a different PR.
   - Encourage **breaking up** large PRs into smaller, more manageable chunks, ideally fewer than 400 lines.
1. Offer sincere praise and positive feedback
   - Recognize and highlight good work, rather than only pointing out mistakes. It feels good to be appreciated, and it encourages people to keep doing good work.
1. Resolve conflicts and stalemates
   - Accept the PR if only minor or optional changes remain.
   - Address disagreements by talking, retreating, or escalating, and then resolve any interpersonal conflict.

Following these guidelines will help you create a friendly, efficient, and effective code review process that benefits both you and your team.

## 4. What "quick stamp"s mean

"Quick stamp" is a term used when requesting a review for a pull request that is likely to be trivial and easy to approve. However, it is essential to understand that it is not a request for a blind approval. A "quick stamp" should never mean bypassing your review standards or blindly approving a PR without understanding the changes.

### Expectations and responsibilities of a stamper

As a stamper, you should:

1. Review the PR to your usual standards, even if it's a request for a "quick stamp."
2. Feel free to approve trivial changes, like fixing typos, documentation updates, or reverts.
3. Use your judgment to determine if you have enough context and confidence to approve the PR. If you lack context or do not feel confident, practice caution and either:
   - a.) Wait for someone more knowledgeable in the specific area to review the PR, or
   - b.) Inform the requester that you cannot stamp the PR right away and that you can review it thoroughly when there's time.

Remember, no one should ever blindly approve a PR. It is always up to the reviewer to maintain their review standards and ensure the changes are appropriate.

### The GitHub "stampers" team

The GitHub "stampers" team is a group of reviewers who can be reached for reviewing PRs across multiple time zones. This team is particularly helpful when you need a review urgently, for example, when fixing the main branch early in the morning. By being part of the "stampers" team, you are not only helping to ensure smooth and efficient PR approvals but also fostering a culture of thorough and responsible reviewing.

To join the stampers, drop a message on #ask-engineering or #dev-chat, and someone will add you.

## 5. Cody-related PRs

Cody-related PRs are a bit special because we want to release Cody often, without breaking our Search product. For a near-term solution, we’ve decided to tag each Cody-related PR with either `backport 5.0` or `confirm-no-backport`.

What you as an engineer need to do:

- Remember that it may not always be clear-cut what “Cody-related” means. Use your best judgment.
- For the same reason, this process can’t be easily automated. → There is unfortunately no reminder to add the label.
- When creating a PR, **assign one of the labels**. (Forgot it? You can do it even after merging. Unsure which one to add? Ask around for opinions.)
- If your PR is labeled for backporting, **backport soon** after merging, to catch the next patch.
- If you see a Cody-related PR without a label, **send a friendly ping** to the author. If it’s an OSS contribution, add the label yourself.
- **Think QA:** We switched from a monthly release cadence to quarterly + biweekly patches to improve the quality of our search product. With the above-suggested process, Cody kind of abuses patch releases. Be mindful of this, and in your PRs, be conservative if you see that your changes could interfere with the main product.
