# Engineering planning

## Kinds of work

There are three different kinds of work to consider when planning work: feature work, scale work, and risk work.

A good plan achieves a healthy balance between these kinds of work. Exactly what that balance is depends on circumstances and can vary over time, but it is important to not neglect any of these categories.

To balance work across these areas, it is important to prioritize based on the outcomes and expected impact those outcomes will have on our business and customers, now and over time.

### Feature work

Feature work solves new user problems by adding capabilities and workflows.

Examples:

- New code host support
- New search syntax
- Precise code intel for new languages

### Scale work

Scale work enables and improves the quality of our product as usage increases.

Examples:

- Index more code on Sourcegraph Cloud
- Multi-zone deployments to improve the performance of our product to more users
- Developer tooling that increases the productivity of our engineering team

### Risk work

Risk work decreases the operational, security, or regulatory risk.

Examples:

- Multi-zone deployments to reduce the likelihood that our site goes down
- Security certifications like SOC 2, ISO 27001
- Regulation requirements like GDPR, CCPA

### What about tech debt?

One of the problems with using the phrase "tech debt" is that it means different things to different people, and when used in discussion, it isn't specific enough to be able to reason about and prioritize.

Engineering exists to deliver solutions to user problems, so the most meaningful definition of **tech debt is anything that slows down our ability to deliver.**

Instead of talking about tech debt generically, it is more productive to talk about specific work that needs to be done which will result in specific value to our business, now or in the future.

- ❌ "We have some tech debt that we need to pay down"
- ❌ "We should spend 30% of our time paying down tech debt"
- ✅ "Doing X will result in Y impact to our business" where X is a description of specific work that needs to be done, and Y is a description of how that work is going to result in a valuable outcome for our business.

With the correct frame ✅, addressing tech debt turns into one of the other kinds of work.

- Addressing tech debt can be feature work when doing it now is on the fastest path toward delivering a product improvement.
- Addressing tech debt can be scale work when addressing it will increase our ability to deliver more value to our customers faster over time.
- Addressing tech debt can be risk work when it helps us reduce the possibility of failure modes that would negatively impact the business.

Here are questions to ask whenever you hear the phrase "tech debt":

- How is this slowing us down?
- What is the specific work that will address this?
- How will doing this work translate into a positive impact to our customers and our business, now or in the future?

Further reading:

- https://www.bigeng.io/why-the-way-we-look-at-technical-debt-is-wrong/
