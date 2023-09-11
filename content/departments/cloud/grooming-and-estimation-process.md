# Cloud Team Grooming and Estimation process

## Why we do grooming and estimation

The Cloud team operates in a Kanban process where the highest priority issues are always available to be picked up by the Cloud engineer from the `Up next` column on the team [Kanban board](https://github.com/orgs/sourcegraph/projects/264/views/9).

To ensure the team has a common understanding of the problem that needs to be solved, the expected outcomes, acceptance criteria, and the effort required to deliver each issue, we decided to introduce the grooming and estimation process.

## How do we run grooming and estimate issues

> [!NOTE] The current process in an experiment that the Cloud team will be running for at least 1 month. The team will review the results of this experiment and will decide on continuing with this process, modifying it or trying something different.

- The grooming sessions are asynchronous and are being run in a weekly cycle
- By EOD Monday, the new scope is defined and added to the [Grooming View](https://github.com/orgs/sourcegraph/projects/264/views/14)
  - The Cloud EM is responsible for defining the scope of the grooming based on current team goals and priorities
  - The Cloud engineers are encouraged to propose other issues for the grooming agenda, especially technical debt items and improvement
- Each issue in the grooming scope has the Cloud engineer assigned responsibility for preparing the issue for the team estimation
  - The Cloud engineer is being notified about this request based on the comment within the GitHub issue
- By EOD Wednesday, all issues should have their description set the state where it clearly identifies the problem that needs to be solved, the expected outcomes, and acceptance criteria
- By EOD Friday, each Cloud team engineer is expected to provide their estimates for each issue that is within the grooming scope
  - the estimates are in single developer days
  - the estimates should be added as GitHub comments
  - if the Cloud engineer is unable to provide the estimate based on a lack of clarity within the issue description, the `?` should be added to the command instead
- On following Monday, the Cloud EM reviews the estimation results and assigns the common sense average estimate to the `Estimate` field for each issue in the grooming scope
  - The issues with significant differences in estimates or with `?` estimates are brought the Monday's Cloud sync meeting discussions
