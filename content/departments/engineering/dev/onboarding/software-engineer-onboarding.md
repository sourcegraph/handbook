# Software engineer onboarding

## Weeks 1–3

### Learn about our culture and values

Before you dive in to engineering tasks like reading and writing code, it is important to give yourself the time and space to set the context for the work you will be doing here at Sourcegraph.

1. Read our [company values](../../../../company-info-and-process/values/index.md).
2. Read our [engineering principles and practices](../process/principles-and-practices.md).
3. Start reading [Turn the Ship Around](https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404/) and [Orbiting the Giant Hairball](https://www.amazon.com/Orbiting-Giant-Hairball-Corporate-Surviving/dp/0670879835/) in any order (you can expense these books). As you are reading, share and discuss your thoughts with your team.
   - [Turn the Ship Around](https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404/) - An inspiring story of how Navy captain David Marquet turned the lowest performing submarine in the Navy into the top performing one with his bottom's up leadership style.
   - [Orbiting the Giant Hairball](https://www.amazon.com/Orbiting-Giant-Hairball-Corporate-Surviving/dp/0670879835/) - An entertaining self-account of Gordon MacKenzie's experience fostering creativity on his team at Hallmark Cards. Buy the hard copy. There are lots of fun illustrations and short stories. It is a quick read and probably unlike any other book you have read.

### Starter tasks

Your manager will assign to you three starter tasks that you should aim to complete in your first three weeks. These tasks are small, atomic, and intended to expose you to different parts of our codebase and product: it's important that you build the flexibility to fix any problem you'll be faced with at Sourcegraph, and don't narrow down your comfort zone to a certain part of our codebase or product.

As you're working on these tasks:

- Optimize for learning: your priority is to soak up as much context as possible, not to ship something as fast as possible.
- Aim to be as incremental as possible:
  - Open a pull request as soon as you feel like you're ready for feedback or input on your code—you can make it a draft pull request if your code is still a work in progress.
  - Favour splitting up your work in multiple pull requests every time it makes sense—shipping frequently is important.
  - Ask yourself what tests are appropriate for the change you're tackling, and add them!
- If you need help, remember everyone is here to answer any question — ask for help in your team's channel (or any appropriate channel), and add the answer to our docs or the handbook if you feel like it can help future teammates.

As you complete these tasks, share your accomplishments in #progress 🙂

### Pairing sessions

Reach out to every member of your direct team, and set up a two-hour pairing session with them. These sessions will be an opportunity to get to know your teammates, understand what they're working on and why, and learn more about our codebase and development flows!

Take the first 20–30 minutes of the session to have an unstructured, introductory chat. Then, start hacking! Your teammate will set up a [live share](https://visualstudio.microsoft.com/services/live-share/) and walk you through what they're currently working on. Ask as many questions as possible, to try to understand:

- What problem is your teammate trying to solve?
- Why is that problem important? What team goal does it fit under?
- What are relevant [RFCs](../../../../company-info-and-process/communication/rfcs/index.md),GitHub issues or documentation pages?
- What parts of our codebase need to be changed to solve this problem?
- How will we test the code being changed?
- Will there be future work needed after solving this problem? How could you contribute?

**Teammates** should prepare these pairing sessions so that they bring you the most value, and allow you to quickly ramp up on what the team is working on and why.

### Other resources

We have many resources available to help you onboard and gain context:

- Read through our [architecture overview](https://docs.sourcegraph.com/dev/background-information/architecture).
- To complement the architecture overview docs, watch the [architecture video (10 minutes)](https://www.youtube.com/watch?v=LiBtt1IeqFY).
- Read through the rest of the engineering handbook to learn more about how we operate.
- Read how we collaborate with design to [request or implement design work](../../../product/design/index.md#working-with-design-requesting-design-work).
- Watch this [high-level overview of the Sourcegraph codebase and repositories on GitHub (13 minutes)](https://www.youtube.com/watch?v=3OewJAaX4KI).
- Read our [Testing Principles](https://docs.sourcegraph.com/dev/background-information/testing_principles) to learn how we think about testing. Reading this makes sure you know what others on the team are referring to when we refer to certain types of tests.
  - More concrete documentation and troubleshooting help for when you're running, writing or debugging your first tests can be found in the dev docs page [Testing the Sourcegraph main repo](https://docs.sourcegraph.com/dev/how-to/testing). This is mainly as reference (you don't need to read this all now) but useful information to have in hand.
- For Frontend Engineers:
  - Watch [Figma for Sourcegraphers part 1](https://drive.google.com/file/d/1zzUKDJN5XUwvKF8LfKZqQb7gK9NpK1Wx/view?usp=sharing) to learn about how design and engineering work together.
    - [Part 2, working with the Wildcard design system](https://drive.google.com/file/d/1kfT3PVvTag_e0RXLAt6nndf6fS2n1Slv/view?usp=sharing) shows how to work with our design system and may be interesting for anyone who wants to submit designs.
  - Read [Testing web code](https://docs.sourcegraph.com/dev/background-information/testing_web_code) to understand our preferred patterns and approaches for writing tests in the frontend. We recommend reading this before you write your first test in the frontend.
  - Read our [Styling UI](https://docs.sourcegraph.com/dev/background-information/web/styling) documentation to understand our CSS stack and the constraints we work within when styling UI. We highly recommend reading this before you start working on a frontend task, as it will make you more effective.
  - Read our [TypeScript programming patterns](https://docs.sourcegraph.com/dev/background-information/languages/typescript#typescript-programming-patterns) to understand what TypeScript patterns we follow that are not easily detected with lint rules.

## Weeks 4–6

### Reading

Keep reading and discussing [Turn the Ship Around](https://www.amazon.com/Turn-Ship-Around-Turning-Followers/dp/1591846404/) and [Orbiting the Giant Hairball](https://www.amazon.com/Orbiting-Giant-Hairball-Corporate-Surviving/dp/0670879835/).

### Start contributing to your team's goals

By now, you'll have shipped multiple improvements, paired with all members of your immediate team to understand what they were working on, and learned a lot about Sourcegraph. It'll be time for you to start contributing to your team's goals! It'll be up to you to define how you'll accomplish this:

- Pick a current iteration goal you'd like to start contributing to (or work with your team to define these iteration goals if the team is in planning phase).
- Chat with the teammates currently working on that goal, and relevant stakeholders (product, design, CE) to understand the problem being solved.
- Prepare a proposal for how you'll work with the team solving that problem in the following three weeks. Your work may include:
  - Working on previously identified GitHub issues
  - Doing spikes to solve unknowns and learn more about the problem
  - Writing RFCs to propose solutions, and planning resulting development work
- Discuss your plan with the team and your manager.
- Get hacking!

At Sourcegraph, you'll be expected to own the problems your team is solving, and work with the team to define solutions and plan your work—we think it's important that you start doing this early on!

## Give feedback on your onboarding

You should be discussing your onboarding progress every week with your manager. At the end of week 6 at Sourcegraph, spend one hour summarizing your onboarding experience (what has gone well, what was challenging, what would help you moving forward). Write down your thoughts and discuss them in your next 1-1 with your manager. Take your time to answer thoughtfully—your answers will be very important to make sure our onboarding process is even better for future hires!
