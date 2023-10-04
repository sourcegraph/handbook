# Usertesting.com

## About

Usertesting.com is _“a video-first platform where you can see and hear the experiences of real people as they engage with your products, designs, apps, processes, concepts, or brands.”_

We use this platform to test prototypes, existing product features, and perform surveys with users who are typically unfamiliar with Sourcegraph.

## Test participants

The service curates a pool of participants who are paid to conduct testing sessions. The participants chosen for your test must meet demographics and screening questions determined by the test administrator.

Generally, our tests will use the pre-configured panel titled ‘General Audience’. Administers may also further refine this panel based on their unique requirements.

> For instance, a test administrator testing concepts related to precise code intelligence may wish to exclude users who do not use typed languages to ensure results are relevant to the users of the feature.

The platform also allows test administrators to provide participants, though we generally use [Lookback](https://lookback.io/) for this purpose, because usertesting.com requires a software download many of our users do not wish to install.

Note: the maximum number of participants in a test is 10. Consider running multiple tests and combining the results to reduce uncertainty.

## Tips for creating tests

There are generally two types of unmoderated user tests: broad discovery oriented and task-oriented user tests. Often, discovery-oriented user tests allow designers to zero in on areas where they should conduct more specific, task-based tests.

### Discovery oriented tests

Creating a freeform discovery user test before you create more structured tests helps remove bias and broader patterns in user behavior. To create a discovery-oriented user test, start with the most simple prompt possible. Example:

> A developer friend told you about Sourcegraph and suggested you install the browser extension which provides go to definition and find reference capabilities on GitHub PRs. Visit the site and install the extension and try it out.

As you review these sessions, you will begin to discover common pain points and problems. Categorizing these problems will help you create task-oriented user tests. See [analyzing results](#analyzing-results) for more information on how to categorize findings.

### Task-oriented tests

Specific goals, such as helping users find the signup page, or search in specific repositories may require more direct task-based guides. For example:

You may wish to understand the problems users have in selecting a specific repository to search. A task-based prompt in this user test may be: "Find uses of the useState function in the Facebook React repository."

_*Tip*: Avoid biasing the user to specific inputs. A mistake one designer made in their testing of this prompt was to list the repository as facebook/react. The designer assumed all developers think about repositories in the org/repository-name pattern that heavy users of GitHub.com often use. When the repository was instead listed as Facebook React in the prompt, the designer discovered that users were generally not aware of the org/repository-name pattern and expected to be able to search for the repository semantically._

In both cases, new users often need an introduction to Sourcegraph to get started. We can’t expect a user to create a code monitor, without them first understanding some basic rules about Sourcegraph search. To set these users up for success, a designer testing monitor tasks may require the user to first conduct a few searches that relate to the insights test.

### Useful, proven test activities for re-use

See [useful testing activities](./useful-testing-activities.md) to save time in the future by re-using proven test activities when it makes sense.

## Ask quantitative questions

Wherever possible, ask quantitative questions of your audience, including after a task you will analyze qualitatively. For example, if your task requires a user to find a specific term in code, the second task may be a multiple-choice question that asks the user if they were able to complete the task successfully. You might also consider asking the user to rate the relative ease of the task. The output of these two questions will be quantitative data which can augment your qualitative research. The usertesting.com platform will provide metrics from these types of questions that save designers time in generating reports.

_*Tip*: validate the answers users provide as to successful completion of tasks when you review each session. It is not uncommon for multiple participants in a test answer to incorrectly answer that they were successful when completing a task._

## Analyzing results

How you analyze results will impact the conclusions you draw from your tests. For example, if you fail to properly note occurrences of a specific event across each user session, you may not have a clear picture of how often these interactions are occurring.

Additionally, properly using the tools provided by the platform will help generate research that is more impactful to your colleagues.

Tips for efficiently analyzing sessions:

- Create video clips of important moments while reviewing results
- Use the positive and negative buttons to label interactions with the product.
  - This will help you segment clips and feedback by ‘wins’ and areas that need addressing.
- Star clips and notes that you want to refer to later
- Tags are very important to:
  - You can create a tag in a note by typing ‘#’.
  - By using tags, you can consistently and easily correlate issues across
  - Use tags to group observations. For example, if you want to note that users clicked the homepage video use the tag: #homepage-video-clicked
  - This organization will help you spot trends
- Save time by watching on 1.5x
- Summarize each session on the screen that lists the sessions
- When you return looking for a session, it’s helpful to have a summary to help you find sessions you wish to refer back to

Ensure the user is taking the test as required and that they have the required knowledge to perform the task. At times you will find a user who is attempting to game the system. These users can skew your test results, so grade these participants with a1star review with the rating tool in the top right of the individual session. This will trigger a replacement session.

## Sharing results

It is important to share your findings with your teammates. A well-formatted presentation of your analysis can help drive momentum for your project and may help other users discover problems and solutions you may not have noticed.

For complex findings, consider using a slide deck containing screenshots, charts, and highlight reels.

You also the search product team using a slide deck with custom charts delivered by loom.

Example slide deck: [Google Slides - create and edit presentations online, for free.](https://docs.google.com/presentation/d/1b1sa88dqmXIKB3_1stHYuj14ts4qptb5Gyym1goO2wQ/edit#slide=id.g7a4352b37a_0_102)

Example loom: [Loom | Free Screen & Video Recording Software](https://www.loom.com/share/f775af94c06a4446a31fcc600332f2f5)
