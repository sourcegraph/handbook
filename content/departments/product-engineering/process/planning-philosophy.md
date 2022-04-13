# Product and Engineering planning philosophy

We're a rapidly growing company so [our planning processes](planning-process.md) will continuously evolve. These principles and philosophy guide us as we build and evolve our processes. Some of the foundational elements that we believe enable good planning are:

- Perform incremental planning throughout the year, rather than "big bang" quarterly or yearly planning sprints
- Provide clear timelines and deliverables for teams around OKR setting and roadmap changes
- Involve the right people at the right time in key planning decisions
- Create more time and space to focus on our strategic business objectives

## A good strategy provides focus

[Our strategy](../strategy-goals/index.md) documents how we plan to make decisions and tradeoffs to achieve our goals.

A good strategy has 3 components:

1. A diagnosis. This is an explanation of the nature of the challenge. A good diagnosis simplifies the often overwhelming complexity of reality by identifying certain aspects of the situation as being the critical ones.
2. A guiding policy. This is an overall approach chosen to cope with or overcome the obstacles identified in the diagnosis.
3. Coherent actions. These are the steps that are coordinated with one another to support the accomplishment of the guiding policy.

Recommended reading:

- Short article: [The perils of bad strategy](https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy)
- Book: [Good Strategy/Bad Strategy: The difference and why it matters](https://www.amazon.com/Good-Strategy-Bad-difference-matters/dp/1781256179/ref=sr_1_1?crid=1H0B1F3WWUL2S&keywords=good+strategy+bad+strategy&qid=1639180521&sprefix=good+strategy%2Caps%2C205&sr=8-1) by Richard Rumelt

## Good plans are clear and concise

In theory, a good plan contains:

- A definition of success that:
  - Is clear and succinct (so a variety of stakeholders can quickly understand what is important)
  - Is solution agnostic (so the team has ownership and space to find and pursue the best solution)
  - Is framed as a customer and/or business problem statement (so we are always working on the right things for our business)
  - Can be unambiguously measured and evaluated (so there is no disagreement about whether we have achieved success)
- A concrete set of deliverables we believe will solve the problem (so we can detect/manage dependencies and do capacity planning)

In practice...

- The definition of success is defined first and then there is additional work that needs to be done to figure out what the delivery plan is to achieve that success. The team might need to collect customer feedback, dig in to metrics, or build prototypes as a first step. This exploration is normal, healthy, and part of planning and execution!
- We sometimes aren't at a level of maturity where we can define the perfect definition of success, so we find the best approximation and give context to communicate intent.

This definition applies recursively at every layer of a plan (for example: company plan, product/eng department plan, org plan, team plan) for a given unit of time (year, quarter, week).

## Planning is iterative

Arriving at a good plan is an iterative process that is neither exclusively top-down nor exclusively bottom-up because there is a cyclical information dependency. Company level strategy is informed by what is working and not working about our business (context our teams have), and team plans are informed by what our company level strategy is (a decision ultimately owned by the CEO). Fundmentally, everyone on our team has context and insights that are valuable inputs into the planning process.

In practice, both the top-down motion and bottoms-up motion happen concurrently, but we need to bootstrap the process to iteratively work through the information dependency. It is helpful to think about planning as having a `W` shape:
![Planning shape](https://assets.proof.pub/2056/firstround/O6rbG1rNQ2emg8EPj1Xa_TKImage%200%20Leadership%20Frames.png)

Source: [The Secret to a Great Planning Process — Lessons from Airbnb and Eventbrite](https://review.firstround.com/the-secret-to-a-great-planning-process-lessons-from-airbnb-and-eventbrite)

## Planning is continuous and never done

At any given point in time we should have an idea of where we want to go in the absence of any new information, but we are always discovering new information and we should be open to adjusting our plan accordingly as we learn.

Done well, this feels like an organic continuous process where we periodically review the existing plan (as opposed to a discrete planning process that starts and stops).

## Plans are ambitious and feasible

We want our plans to be ambitious so that we challenge ourselves to grow. Plans should be ambitious in a focused direction, not ambitious in the number of things we want to accomplish. Doing one thing exceptionally is better than doing multiple things not exceptionally.

Plans need to be feasible. A plan is feasible only if we can achieve it accounting for realistic conditions and expectations (for example: reserve appropriate amount of time for unplanned work). If a plan requires everything to go perfectly, then it is not feasible (because that is not a realistic expectation).

The right level of capacity to plan to depends on the team (size, health, maturity of the ownership area), but a good default is to plan to 80% capacity and reserve 20% capacity for reactive work (responding to bugs, incidents, customer requests). Planned work should contain an appropriate balance of [multiple kinds of work](#plans-balance-multiple-kinds-of-work).

## Everyone can contribute to planning

Good ideas and code can come from anywhere; other teams, other orgs, even other departments or from open-source contributors. Be sure you're [welcoming to contributions from outside of your team](cross-org-team-collab.md).

## Plans balance multiple kinds of work

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
