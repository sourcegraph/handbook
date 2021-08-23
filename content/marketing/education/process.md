# Sourcegraph Learn process

_This is a living document that will continue to be expanded._

Sourcegraph Learn is currently using sprints and an internal [Jira board](https://sourcegraph.atlassian.net/jira/software/projects/DEVED/boards/9) for both content and code contributions.

There is a backlog and an active sprint at any given time.

## Sprint board

The active sprint board consists of the following columns. Tickets should consist of concrete deliverables. Each individual ticket is almost always going to result in a pull request on the Sourcegraph Learn repository.

| Column title    | Explanation                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Paused          | Work that gets out of scope or blocked in a current sprint                                                                           |
| To do           | Planned work for a given sprint                                                                                                      |
| In progress     | Work that is actively being worked on                                                                                                |
| Review          | Work that is ready for review                                                                                                        |
| Reviewing       | Work that is actively being reviewed                                                                                                 |
| Review complete | Review complete with feedback; at this point the ticket needs to be moved back to **In progress** or can be raised as a pull request |
| Done            | Work that has been merged into the repository or is otherwise complete                                                               |

## Review process for content

Learning resources on Sourcegraph Learn must go through a review process, both at the content level and at the pull request level for a final pass. The Developer Education team will assign relevant reviewers, who will almost always be trained reviewers on the team itself to ensure consistent quality across resources.

When a piece is in the "In progress" column, it is not ready for review.

Content should be written in markdown, self-reviewed, and then passed to the **Review** column when it is in a state that is virtually ready to be a pull request. Headings should be in place and all links should be added (there should be no `TODO`s). This is necessary so that there are no errors, broken links, test failures, or other surprises before publication. Currently, we are using Google Docs as a collaboration tool as it provides a level of granularity that is not possible on GitHub. Documents should be shared for **editing** access across the Sourcegraph team (preferrable) or **commenting** access.

When a piece is moved to the **Reviewing** stage, it is being reviewed. The piece should not be worked on by anyone other than the reviewer at this time. Reviewers should be in **commenting** mode, provide holistic feedback, and explain suggestions throughout.

When a piece is moved to the **Review complete** stage, it is ready to be moved back to **In progress** for continued work, or can be raised as a pull request. Please review the comments on the ticket for next steps.

Once a piece is in a pull request, it needs to be reviewed one final time to ensure that everything looks correct on the site (locally tested or reviewed via deploy preview) and that no errors were missed.

**Note**: When working on resources related to Sourcegraph products, product stakeholders should be looped in at the **Review** stage to ensure that all information is technically accurate and nothing is misrepresented.

## Review process for code

_Coming soon._
