# Usability metrics

All teams define their own success metrics in their work plans as part of [Product Focused Planning](../../../engineering/product-planning.md). The design team also considers usability metrics when evaluating the success of work completed on their individual teams.

Our usability metrics are a way for us to identify and score the usability of an experience so that we can measure, maintain, and analyze our usability standards consistently across the product. This also helps the teams track how usable our design solutions get over time as we iterate on solutions.

At Sourcegraph, we use the following definition of usability to define our usability metrics:

> To be usable, an interactive system should be effective, efficient, satisfying, and useful.

- **Effectiveness** is how accurately the user is able to accomplish their goal using our solution.

- **Efficiency** is how easy it is for a user to accomplish a goal using an acceptable amount of resources (like time and effort).

- **Satisfaction** is the user’s own perceptions, feelings, and opinions of the solution.

- **Usefulness** is the degree to which our solution can help the user achieve their goal.

Note: _This definition is based on information from the [International Usability and UX Qualification Board curriculum](https://uxqb.org/public/documents/CPUX-F_EN_Curriculum.pdf) and the [ISO 9241 definition of usability](https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html)._

## Measuring UX success metrics

In order to standardize how we measure usability, we’ve developed the following questions to include in our usability tests to measure each aspect of usability.

### Effectiveness

This metric measures how accurately the user is able to accomplish their goal using our solution.

#### How to measure effectiveness

For each task you ask the user to complete, divide the total number of users who were able to successfully complete the task by the total number of users. We define success and failure below:
Success means that the user was able to complete all aspects of the task as defined in your usability test plan.
Failure means that the user was unable to accomplish the task and/or did not complete all parts of the task.

Tip: Clearly define what task success looks like in your usability testing research plan (example: user ends on XYZ screen with ABC features selected) so that the team is aligned on what successful task completion is like ahead of time.

Be sure to note all moments of confusion and failure and why those moments happened. Doing so well will help the team understand how to better design a solution, especially if multiple users have the same problems.

### Efficiency

This metric measures how easy it is for a user to accomplish a goal using an acceptable amount of resources (like time and effort).

#### How to measure efficiency

After each task, use the [native “Difficulty” task metric on UserTesting.com](https://help.usertesting.com/hc/en-us/articles/11880303491869). This question is based on the [Single Ease Question](https://measuringu.com/single-question/):

_Overall, this task was_:

- Very difficult (1)
- Difficult (2)
- Neither easy nor difficult (3)
- Easy (4)
- Very easy (5)

Make sure to have users explain why they gave the rating they did after completing this question. This will often require a separate question as the native “Difficulty” task metric does not prompt users to explain their choice. Doing so will help the team understand how to better design a solution, especially if multiple users have the same reasons.

### Satisfaction

This metric measures the user’s own perceptions, feelings, and opinions of the solution.

#### How to measure satisfaction

After the user completes the entire usability test, ask the user about the overall experience of using the solution:

_How would you rate the quality of the user experience?_

- Very bad (1)
- Bad (2)
- Neither good nor bad (3)
- Good (4)
- Very good (5)

Make sure to have users explain why they gave the rating they did. Doing so will help the team understand how to better design a solution, especially if multiple users have the same reasons.

### Usefulness

This metric measures the degree to which our solution can help the user achieve their goal.

#### How to measure usefulness

After the user completes the entire usability test, ask the [UMUX Lite question](https://measuringu.com/umux-lite/):

“You just experienced SOLUTION. How would you agree or disagree with the following statement: SOLUTION has the capabilities I need for what I need to do in my own work.”

- Strongly disagree (1)
- Disagree (2)
- Neither agree nor disagree (3)
- Agree (4)
- Strongly agree (5)

Make sure to have users explain why they gave the rating they did. Doing so will help the team understand how to better design a solution, especially if multiple users have the same reasons.

## Defining success

| Grade/Level | Task completion average % | Efficiency/Satisfaction/Usefulness average score |
| ----------- | ------------------------- | ------------------------------------------------ |
| 💜 Lovable  | > 90%                     | 3.95 - 5.00                                      |
| 👍 Good     | > 80%                     | 3.63 - 3.94                                      |
| 😐 Neutral  | > 70%                     | 3.14 - 3.62                                      |
| 😭 Poor     | > 60%                     | 2.59 - 3.13                                      |
| 🚨 Terrible | > 50%                     | 1.00 - 2.58                                      |

These success metrics are based on those used by GitLab’s team to calculate their [CM Scorecard score](https://about.gitlab.com/handbook/product/ux/category-maturity/category-maturity-scorecards/#calculating-the-cm-scorecard-score) and Jeff Sauro’s [task completion research](https://measuringu.com/task-completion/).
