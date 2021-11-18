# Code walkthrough

The following page details how we approach technical hiring within the Code Intelligence team instead of take home projects.

### What is the day to day engineering experience at Sourcegraph?

- We're often reading code we haven't written.
- We're functioning in an asynchronous environment where clear communication is key.
- We need to help our team understand areas where we are the domain expert.

### What do we want to be true about this interview?

- Allow you as the candidate to focus on an area that you are comfortable in.
- Allow a dialogue that simulates a technical discussion between your potential future peers.
- Use the discussion as a proxy for technical aptitude and programming skills.
- Have a time-efficient process for yourself and Sourcegraph.

### We want to find engineers who are:

- Good communicators.
- Can tailor the technical depth and scope of a conversation dependent on the audience.
- Can effectively teach and share their knowledge.

---

### Overview

For this interview you'll drive a walkthrough of either a personal project or library of your choice.

The following are sample ideas, the most important thing is you choose something that you are comfortable and familiar with. Walkthroughs can be done in
any language, we do have a preference if possible that they are close to the domain you'd be working in. If you're choosing a library, feel free
to show us it's usage contextually within other projects (these may be your personal projects too) and what problems you've solved with it historically.

- For a full-stack position you may choose a library that you've used heavily, for example [DateJs](https://github.com/datejs/Datejs)
  or [Redux](https://github.com/reduxjs/redux). With a smaller library like DateJs you can walk us through it's usage in other projects, what problems you've solved, how you'd approach testing it. With Redux perhaps you want to dive into the internals and compare it's technical proposition
  versus other solutions.
- For a backend position you may choose a library that you've used heavily, for example [Mux](https://github.com/gorilla/mux) or [Ristretto](https://github.com/dgraph-io/ristretto). As an example, with Mux you could compare what problems it solves or introduces versus the Go standard library.
  As an example for Ristretto perhaps you'd highlight it's usage in other projects and some of the underlying caching mechanisms.

With whatever you choose to walk us through, if you're stuck where to start, choose a test case or how the project/library is initialized. We'll take it from there!

---

- Interview length: 45 minutes

  - 5 minutes of introductions.
  - 30 minute walkthrough.
  - 10 minutes of questions that you have for our engineers about working at Sourcegraph.

- Be ready to screenshare the library in question via your IDE or editor of choice.

During the interview we will guide you to areas of the code that seem ripe for discussion. We may ask you to zoom in or out of layers of abstraction (into/out of functions, classes, and packages) in order to help us build a shared understanding of the code under review.
You will be asked to explain how particular parts of the code under review work.

The level of explanation will vary (but will not be a mystery):
we may ask how high-level components interact, or we may ask how an individual function works in detail.
We will try to ask both!

We will ask follow-up questions about performance, usage ergonomics, code complexity, and ideas for improvements.
We’ll also ask clarifying questions about how the code under review reacts to certain input or usage conditions.
You will be asked to explain potential trade-offs given different hypothetical design constraints (what in the code would need to change).
