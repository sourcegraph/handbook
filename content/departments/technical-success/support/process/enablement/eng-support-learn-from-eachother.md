# How engineering and support learn from each other

When set up for it, engineering and support teams have so much to offer each other. This is how we have set-up our teams to realize the benefits of learning from each other and the discrete workflows and work focuses of each team. And, of course, everything here aligns with support’s desire to be as self-sustaining as possible, where our success is felt most when we are able to understand common troubleshooting patterns, diagnostic steps, and tools, etc with less reliance on engineering in order to solve issues faster for our customers.

## Data sharing

CS categorizes all customer inquiries so that we can get better insight into trends and identify opportunities for improvement. CS support engineers also share qualitative data about customer context and/or issues to ensure we fully consider what is best for the customer in our decision making.

## Office hours

Some folks in engineering offer office hours and those can be useful for an support engineer to join to learn, ask questions, collaborate.

## Team rotations

- **Support engineers rotate on other engineering teams.** Depending on interest and timing with all involved, support engineer may also do rotations in other teams. These will be carefully coordinated to make sure that we always have enough help available to our customers. If an support engineer is interested, they can start the process by talking with their manager to determine next steps.
- **Members of engineering rotate on support.** There is tons of value in working directly with customers and seeing the variety of questions and issues that come up across our entire customer base. Any member of engineering who is interested in working in support for a day or even a week, just needs to let the support team in #customer-support-internal and we will make it happen.

## Pairings

Pairings are different from rotations in that they are usually ad-hoc in nature and there is an event that results in a pairing being useful. This is very much a “I have something useful for you” or “I have a question for you” and the best step for all involved is to work closely together on it, pairing style. A pairing could also happen while support follows the protocol to [engage other teams](../engaging-other-teams.md). While that protocol is designed to foster our remote-first culture and allow for folks to work across timezone and asynchronously, the CS or engineering team member can always initiate the idea of pairing on an issue if the situation/issue seems like it would benefit from it.

## Team to team retros

We are not quite a big enough team to have folks pair long term with one team. From time to time, however, we may want to retro with a team. We can do this in a few ways, depending on the preference of those involved:

- An support engineer can join the existing engineering team’s retro session and participate (great for casual collaboration, when there isn’t anything specific, and if the engineering team agrees)
- The CS team and X engineering team can schedule a time to do a dedicated retro together on a topic, how they are working together, etc
- An support engineer and one rep from each engineering team can join in an org wide session

## Root cause focus

It can be hard to focus on the root cause. It can be far too easy to focus on solving for a symptom instead. Support engineers know to keep this focus and how to divide the work so that we offer a quick solution and are able to plan for the deeper work to address the underlying issue.

## Support rotation donut pairing

The software engineer doing support rotation for their team can join the #customer-support-weekly-pairing Slack channel and be paired with an support engineer for a focused coffee-style chat with the following agenda:

- If the support engineer and software engineer haven’t met before: intros, otherwise, casual catch-up
- Software engineer: what’s going on on my team? What’s being built? What am I (personally) building?
- Support engineer: what’s going on in support, in general? What’s going on with supporting (search|code-intel|$TEAM)? What have been my pain points (personally)?
- (Optional): support engineer or software engineer: bring any topics you’d like to learn about

If the donut app pairs two engineers, we can do some swapping to ensure CS and engineering pairings.

## On-demand training materials

Whenever a software engineer or an support engineer has the desire/time to create training materials they feel will help CS and that can be available on-demand (written or video), it’s as easy as:

1. Create it
2. Upload it to [the enablement folder](https://drive.google.com/drive/folders/1SSOwnsX_yNFadod88AQOxmFiINDgYoRr) in the CS shared drive and/or on the handbook CS [enablement page](index.md)

## Documentation

We have a shared responsibility to maintain and improve docs.sourcegraph.com. Whenever an support engineer identifies a gap or something that needs to be updated, we will either:

- Make the edit on (or create) the actual docs page (in GitHub) and seek review from the appropriate engineering team
- File a docs issue in GitHub for the appropriate engineering team explaining what is missing, and tag it as `docs` as well as tagging the appropriate engineering team to fill in the gaps/needs we have identified

When we work on documentation, we…

- ...remind ourselves that the vision set forth by our product team for our docs is to align with the the organizational approach outlined in https://documentation.divio.com/, especially [the how-to section](https://documentation.divio.com/how-to-guides/) and [their examples](https://docs.divio.com/en/latest/how-to/) (how-to is the doc type we create/improve the most)
- ...remind ourselves of [the guidelines for contributing to product documentation](../../../../marketing/process/product_documentation.md), as well as [the content creation guidelines](../../../../../company-info-and-process/communication/content_guidelines/index.md)
- ...note that troubleshooting documentation falls into the category of how-to documentation as outlined in the vision above
- ...ensure that every page in our docs to have a single purpose (it may take us awhile to redo what is there, but keep this in mind for creating/revising)
- ...ensure that if we move a page, we add a redirect for the old URL [here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/_resources/assets/redirects)
- ...default to explaining in text so it’s searchable (avoid screenshots)

## Projects

Some engineering teams have a way for an support engineer to take on a scope-bound project (like taking responsibility for a small GitHub issue). This isn’t easy for all teams and it’s better if we start with a conversation than jumping in. Also consider the following…

### If you are interested in frontend development...

Our [Frontend Crew](../../../../engineering/guilds/frontend-crew.md) welcomes you to:

1. Learn [Typescript](https://www.typescriptlang.org/) and [React](https://reactjs.org/)
2. Learn how to write unit tests with [Jest](https://jestjs.io/docs/getting-started)
3. Read [Developing Sourcegraph ](https://docs.sourcegraph.com/dev)
4. Read [Web Client Development ](https://docs.sourcegraph.com/dev/background-information/web)
5. Read [Sourcegraph’s testing principles](https://docs.sourcegraph.com/dev/background-information/testing_principles)
6. Read [how Sourcegraph tests web code](https://docs.sourcegraph.com/dev/background-information/testing_web_code)
7. Explore [the frontend codebase ](https://github.com/sourcegraph/sourcegraph/tree/main/client)
8. Explore [Frontend Platform GitHub issues](https://github.com/sourcegraph/sourcegraph/labels/team%2Ffrontend-platform)
9. Start with issues with the `good first issue` label
10. Chat with your manager about your plan
