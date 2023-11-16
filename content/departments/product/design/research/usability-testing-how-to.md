# Usability testing

At Sourcegraph, we use the following definition of usability when we conduct user research and design our product:

> To be usable, an interactive system should be effective, efficient, satisfying, and useful.

- **Effectiveness** is how accurately the user is able to accomplish their goal using our solution.

- **Efficiency** is how easy it is for a user to accomplish a goal using an acceptable amount of resources (like time and effort).

- **Satisfaction** is the user’s own perceptions, feelings, and opinions of the solution.

- **Usefulness** is the degree to which our solution can help the user achieve their goal.

Note: _This definition is based on information from the [International Usability and UX Qualification Board curriculum](https://uxqb.org/public/documents/CPUX-F_EN_Curriculum.pdf) and the [ISO 9241 definition of usability](https://www.w3.org/2002/Talks/0104-usabilityprocess/slide3-0.html)._

Learn more about how to add and measure the usability of our product during your usability tests using our [Usability metrics](./usability-metrics.md).

Here at Sourcegraph, product designers are generally DRI (directly responsible individuals) for usability tests. If you don’t have a designer on your team, reach out in #discuss-ux-research for help or use this handbook page to set up your own usability test.

## Types of usability tests

There are two different ways to conduct usability tests: moderated and unmoderated usability tests. Depending on your research goals or test length, one type of test may be more useful than the other.

Let’s compare:
| Considerations | Unmoderated usability tests | Moderated usability tests |
| --- | ----------------- | ----------------- |
| Research questions | Direct questions, such as: <ul><li>"Do users find the entry point to complete their task?"</li><li>"Do users recognize the new UI element?"</li><li>"Which design option do users prefer?"</li></ul> | Complex questions / Why? questions, such as: <ul><li>"Why do users experience a problem when using a feature?"</li><li>"Why are users not successful in using a feature?"</li><li>"How do users go about using a feature?"</li></ul> |
| Number of tasks | 2 - 3 tasks | 3 - 5 tasks |
| Length of study | 15 - 20 minutes | 30 - 60 minutes |
| Pros | <ul><li>Very fast turnaround time (1 - 2 days)</li><li>No coordination needed for scheduling or payments</li><li>Large, diverse participant panel</li></ul> | <ul><li>Able to have discussions with participants and go deep into an observed behavior</li><li>Can course correct if needed</li></ul> |
| Cons | <ul><li>Can't talk to participants to get them back on track or to confirm if they understand the task</li><li>Requires a clear set of tasks/instructions/questions</li><li>Some coordination needed in reviewing unmoderated tests to ensure participants are a good fit; replacing some tests may take time</li></ul> | <ul><li>Time consuming (1 - 2 weeks)</li><li>Requires scheduling and payment coordination</li></ul> |

## Finding participants

At this time, you should use UserTesting.com for all usability testing recruitment, both unmoderated and moderated.

If you begin to see problems with the quality of participants or repetitive participants, please reach out in #discuss-ux-research.

If you have specific recruitment requirements for your usability test that aren’t adequately covered by the UserTesting.com participant pool, reach out to #discuss-ux-research to help with your specific recruitment needs. Note that recruitment outside of UserTesting.com can take 1 - 2 weeks.

We currently have the following screener templates set up in UserTesting.com that you can use to recruit for your unmoderated and moderated studies:

- General Devs
- JetBrains Devs
- VSCode Devs

Feel free to add additional screening questions to these templates for your own tests but be mindful that our current UserTesting plan only allows a maximum of 4 screener questions per test.

Generally, [the UX community recommends conducting evaluative usability tests with between 5 - 7 users to adequately capture most usability issues](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/).

## How to conduct a usability test

All usability testing is currently conducted in UserTesting.com by default. All usability testing is planned and analyzed in Dovetail, our research repository tool.

### Step 1: Write your usability test plan

We have created this [usability test project template](https://sourcegraph.dovetailapp.com/projects/3VnfTGMdL33acqZZ4zLwAM/readme) in Dovetail to help you write your research questions and define screening requirements outside of those already covered in our UserTesting screener templates. Key steps here are defining:

- your research questions
- your recruitment criteria
- specific tasks that you want the user to accomplish during your test
- how task success is defined

If there are any other metrics you want to track outside of built in usability metrics, make sure to note those in your plan as well.

Defining your research plan ahead of time will help you reduce scope creep and streamline analysis.

### Step 2: Choose and launch a usability test type

Based on your research questions, number of tasks, and time needed to complete this study, choose whether an unmoderated or moderated usability test best meets your research goal’s needs.

#### Unmoderated tests

If you run an unmoderated usability test on UserTesting, create a test from the [Usability metrics template](https://app.usertesting.com/share/f5f2ba6e-6275-4db7-bbfe-5afa21f764fd), located in the “Account templates” section. Make sure to move this test to your team’s folder once created.

Choose an audience using one of our Audience templates:

- General Devs
- JetBrains Devs
- VSCode Devs

Update task language in the template to match the tasks in your usability test plan in Dovetail. Delete any parts of the template that you don’t need (for example, extra templated tasks).

If you run an unmoderated usability test that will run under 5 minutes, toggle the Short test option on when building your test plan.

#### Moderated tests

If you run an unmoderated usability test on UserTesting, use the “Schedule live conversation” option and use the “Build audience” recruitment option.

Choose an audience using one of our Audience templates:

- General Devs
- JetBrains Devs
- VSCode Devs

Provide availability that best works with you and your team’s schedule.

## Analyzing a usability test

All tests should be analyzed using our research repository tool, Dovetail. The project you created in "Step 1: Write your usability test plan" includes analysis and tagging tools.

Upload UserTesting videos to your usability test project in Dovetail. Do this by creating a copy of the “Analysis template” Note and adding the testing video to it.

Track the following per test, based on our [usability metrics](./usability-metrics.md):

- For each task, synthesize how many users succeeded or failed, and why they failed. Indicate task success in the appropriate field.
- For each task, calculate the average ease of use score. Look for patterns on why they gave a score. Add the score to the appropriate field as a number.
- Calculate the average score for the satisfaction and usefulness questions. Look for patterns on why they gave a score. Add the score to the appropriate field as a number.
- For any other observations, feel free to create and use tags.

Sometimes during usability testing, we notice findings or patterns that are interesting or can be applicable to other teams as well but weren’t necessarily represented by our usability metrics. We usually surface these through patterns identified while tagging raw qualitative data points. For example, maybe 3 / 5 usability testing participants noted that they preferred to log in using GitHub because it felt like the safest option.

For findings like these, you should [create an Insight in Dovetail](https://dovetail.com/help/summarize-and-present-insights/) and make sure to note them in the “Interesting insights” part of your major findings share out.

[Learn more about using Dovetail to document insights.](./using-dovetail-to-document-insights.md)

## What to do with findings

### Prioritizing findings

With usability testing, there’s often a lot of things we notice that could be better. However, we have limited time and resources.

[According to NNGroup](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/), the severity of a usability problem is a combination of three factors:

- The **frequency** with which the problem occurs: Is it common or rare?
- The **impact** of the problem if it occurs: Will it be easy or difficult for the users to overcome?
- The **persistence** of the problem: Is it a one-time problem that users can overcome once they know about it or will users repeatedly be bothered by the problem?

For each usability problem identified during the test, rank each on a scale of 1 - 5 (1 being lowest severity, 5 being highest) and order all identified problems based on their combined score.

### Sharing findings with the team

Once you have synthesized findings, share out results to your individual team’s channel as well as cross-posting to #announce-ux-research. You can use the following template:

Task 1: <Name of task>

- Task success rate:
- Ease of use:
- Suggested fixes:

Task 2: <Name of task>

- Task success rate:
- Ease of use:
- Suggested fixes:

Overall experience:

- Satisfaction with experience:
- Usefulness:
- Interesting insights:

A share out template is also provided as part of the usability test plan project in Dovetail but feel free to personalize it yourself.

For actionable insights identified during your analysis, create a GitHub issue [see this issue for an example](https://github.com/sourcegraph/cody/issues/1275) in your team’s planning process.

For insights that are not necessarily actionable but interesting user behavior, [create an Insight using Dovetail](https://dovetail.com/help/summarize-and-present-insights/).
