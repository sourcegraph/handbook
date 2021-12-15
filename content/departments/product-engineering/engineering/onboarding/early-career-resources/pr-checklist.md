# Pull Request Guidelines Checklist

### This page is to serve as a guideline checklist early career engineers or outside contributors can refer to when creating their first couple of PRs while developing for Sourcegraph.

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

[Further reading here](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)
