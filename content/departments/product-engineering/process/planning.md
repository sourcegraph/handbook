# Product and Engineering planning

## Philosophy

We're a rapidly growing company so our planning processes will continuously evolve. These principles and philosophy guide us as we build and evolve our processes.

### A good strategy provides focus

Our strategy documents how we plan to make decisions and tradeoffs to achieve our goals.

A good strategy has 3 components:

1. A diagnosis. This is an explanation of the nature of the challenge. A good diagnosis simplifies the often overwhelming complexity of reality by identifying certain aspects of the situation as being the critical ones.
2. A guiding policy. This is an overall approach chosen to cope with or overcome the obstacles identified in the diagnosis.
3. Coherent actions. These are the steps that are coordinated with one another to support the accomplishment of the guiding policy.

Recommended reading:

- Short article: [The perils of bad strategy](https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy)
- Book: [Good Strategy/Bad Strategy: The difference and why it matters](https://www.amazon.com/Good-Strategy-Bad-difference-matters/dp/1781256179/ref=sr_1_1?crid=1H0B1F3WWUL2S&keywords=good+strategy+bad+strategy&qid=1639180521&sprefix=good+strategy%2Caps%2C205&sr=8-1) by Richard Rumelt

### Good plans are clear and concise

A good plan contains:

- A definition of success that:
  - Is clear and succinct (so a variety of stakeholders can quickly understand what is important)
  - Is solution agnostic (so the team has ownership and space to find and pursue the best solution)
  - Is framed as a customer and/or business problem statement (so we are always working on the right things for our business)
  - Can be unambiguously measured and evaluated (so there is no disagreement about whether we have achieved success)
- A concrete set of deliverables we believe will solve the problem (so we can detect/manage dependencies and do capacity planning)

In practice, the definition of succeess is defined first and then there is additional work that needs to be done to figure out what the delivery plan is to achieve that success. The team might need to collect customer feedback, dig in to metrics, or build prototypes as a first step. This exploration is normal, healthy, and part of planning and execution!

This definition applies recursively at every layer of a plan (for example: company plan, product/eng department plan, org plan, team plan) for a given unit of time (year, quarter, week).

### Planning is iterative

Arriving at a good plan is an iterative process that is neither exclusively top-down nor exclusively bottom-up because there is a cyclical information dependency. Company level strategy is informed by what is working and not working about our business (context our teams have), and team plans are informed by what our company level strategy is (a decision ultimately owned by the CEO). Fundmentally, everyone on our team has context and insights that are valuable inputs into the planning process.

In practice, both the top-down motion and bottoms-up motion happen concurrently, but we need to bootstrap the process to iteratively work through the information dependency. It is helpful to think about planning as having a `W` shape:
![Planning shape](https://assets.proof.pub/2056/firstround/O6rbG1rNQ2emg8EPj1Xa_TKImage%200%20Leadership%20Frames.png)

Source: [The Secret to a Great Planning Process — Lessons from Airbnb and Eventbrite](https://review.firstround.com/the-secret-to-a-great-planning-process-lessons-from-airbnb-and-eventbrite)

### Plans are ambitious and feasible

We want our plans to be ambitious so that we challenge ourselves to grow. Plans should be ambitious in a focused direction, not ambitious in the number of things we want to accomplish. Doing one thing exceptionally is better than doing multiple things not exceptionally.

Plans need to be feasible. A plan is feasible only if we can achieve it accounting for realistic conditions and expectations (for example: reserve appropriate amount of time for unplanned work). If a plan requires everything to go perfectly, then it is not feasible (because that is not a realistic expectation).

The right level of capacity to plan to depends on the team (size, health, maturity of the ownership area), but a good default is to plan to 80% capacity and reserve 20% capacity for reactive work (responding to bugs, incidents, customer requests). Planned work should contain an appropriate balance of [multiple kinds of work](#plans-balance-multiple-kinds-of-work).

### Plans balance multiple kinds of work

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

## Process

What follows is our current implementation of the above philosophy.

### Annual planning

The goal of annual planning is to produce the following artifacts:

1. A [good product and engineering strategy](#a-good-strategy-provides-focus) for the year. **[Current product and engineering strategy](../strategy-goals/index.md)**.
2. A [good plan](#good-plans-are-clear-and-concise) for each team for the year.
   - A short paragraph about what success looks like for each team at the end of the year. This should include how this success contributes to important top level company needs (as defined in the overall company strategy and product/engineering strategy). This should be documented in the handbook (TBD figure out how).
   - A short list of the key deliverables the team plans to deliver throughout the year to achieve the definition of success. This should be captured in the [GitHub project tracker](reporting-progress.md#github-project-tracker).

Here are the rough steps we follow:

1. To ensure our overall plan is anchored in customer and business needs, VPs will collaborate with the exec team to align on a company wide strategy.
2. With the context of the company level strategy, the VPs will create a product/engineering strategy that will more specifically communciate what we need to accomplish as a product and engineering team. This will be done iteratively with feedback from exec team, product/eng directors, and any other teammates who have input.
3. Individual teams will write down their plan for the year (as defined above) given the overall company strategy, department strategy, and domain knowledge the team has.
4. We will iterate on all these artifacts concurrently until they reach a stable state.

Rough timeline:

1. Product/eng strategy has a polished draft by mid December.
2. Teams have a polished draft of annual plans by mid January.

Note: We do not have annual OKRs; just quarterly OKRs (see [quarterly planning](#quarterly-planning)).

### Quarterly planning

The goal of annual planning is to:

1. Review [annual planning artifacts](#annual-planning) to remind ourselves where we want to go, and to make any necessary adjustments to account for any new information we now have.
2. Produce quarterly OKRs for product and engineering as a whole, and for each deparment.

Rough timeline:

1. Start drafing OKRs 3-4 weeks before the quarter starts.
2. Finish OKRs before the new quarter starts.

Objectives and Key Results (OKRs) are how we [define success](#good-plans-are-clear-and-concise) for the quarter. The [GitHub project tracker](reporting-progress.md#github-project-tracker) is where we define our delivery plan for the quarter (and the year).
