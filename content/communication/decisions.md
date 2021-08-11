# Making decisions at Sourcegraph

## Distributed decision making

Making a decision is always challenging. It can feel risky (what are we missing?), uncomfortable (am I the right person to make this call?), rude (am I overstepping my bounds?), and more.

Our pace of growth, our [all-remote](../company/remote/index.md) team, and a preference for asynchronous communication can all contribute to making decisions even harder at Sourcegraph (especially for new teammates).

But our success requires quick decision making. From high agency, to high quality, to work as a team, and continuously grow, our values all celebrate distributed decision making. Put another way: we have ambitious plans, but Quinn and Beyang’s availability to make decisions won’t scale infinitely.

Decisions should always be made by the appropriate person—no lower AND no higher.

## What makes an effective decision

There are dozens of task management and decision-making framework acronyms out there—RACI and RAPID and DACI and SPADE and RAID and CAIRO and RASCI and so on. None of these is the one correct tool for Sourcegraph. If your team prefers your own framework, that’s perfectly fine.

However, the characteristics of an effective decision at Sourcegraph are consistent:

- The urgency and importance are both clear (high importance and low urgency has a very different response mode than low importance and high urgency)
- There is exactly one decision maker (any more results in chaos or [diffusion of responsibility](https://en.wikipedia.org/wiki/Diffusion_of_responsibility); any fewer results in unowned/abandoned efforts)
- As few people as possible must “approve” (or not veto) a recommendation before the final decision can be made
- Decisions are made transparently, and input is welcome (but not necessarily requested) from all in keeping with our values
- The result of the decision is clearly communicated to the affected team members, and the decision is permanently recorded in the handbook (or another [source of truth](index.md#sources-of-truth))

## Roles in decision making (RAID framework)

Again, there are many valid decision making frameworks. The particular framework below was chosen to provide a common language for Sourcegraph teammates to use.

<a name="recommenders"></a>**Recommender(s)**: The project managers. The individuals who collect input, analyze data, and put together a specific recommendation. This person is often also the [decider](#decider).

<a name="approvers"></a>**Approver(s)**: As short a list as possible of individuals who must approve a recommendation before it can be adopted. This role is slightly different from the [decider](#decider) role—they hold the right to veto, not to choose. Having more than 1 or 2 approvers is a sign of a poorly scoped decision, or a symptom of unclear organizational ownership/responsibilities.

<a name="inputs"></a>**Input provider(s)**: Anyone who can provide input (e.g. historical context, personal experience, cross-functional points of view, etc.) into a decision making process. While this list should be kept short by default to expedite decisions, at Sourcegraph everyone is welcome to provide input.

<a name="decider"></a>**Decider**: the one individual who ultimately makes the decision. This person must be aware of and bought into their role.

### How to use these roles when making a decision

For large, complex decisions, it can be helpful to build a “RAID matrix”: a table with decision-making steps in the rows and names of the teammates that are involved in the columns. In each cell a letter or multiple letters (“R”, “A”, “I”, and “D”) can be written to indicate roles.

However, in most cases this exercise will be overkill. Simply making the [approver](#approvers) and [decider](#decider) roles clear for big decisions up-front is usually sufficient.

Our [RFCs](rfcs/index.md) encode several of these roles already, with the “authors” serving as [recommenders](#recommenders) (and sometimes [deciders](#decider)) and the “approvers” containing a mix of [approvers](#approvers) and [input providers](#inputs) (and sometimes [deciders](#decider)).

## So who decides?

One of the hardest parts of making a decision (that is rarely addressed by a framework) is how to decide who decides!

The key principle is that every decision should be made by the individual who is most directly responsible for the **execution** and **results** of the decision.

That individual’s manager may feel responsible for the results, but if they’re not owning the execution, they are likely not the right [decider](#decider).

Our high-agency culture is only successful if individuals across the organization are empowered to make decisions. If you or someone on your team is rarely making decisions, that’s a sign of organizational failure. Managers at Sourcegraph are celebrated for delegating decision-making by empowering their teams.

### Examples

While the principle above is clear, how to apply it can be murky. Examples below are helpful to illustrate it. This section is a work in progress—please add additional examples where decision rights were clear and made a decision successful!

#### Changing our team’s OKR for this quarter

- Because the team itself is responsible for the execution and results of their own OKRs, the [decider](#decider) should be clear: the team manager must make the decision to change an OKR.
- In some cases, OKRs are jointly owned by two teams, and thus both managers would have joint decision rights. As described above, [this can be a risky pattern](#what-makes-an-effective-decision), and both managers must strive to ensure that shared ownership doesn't result in unclear roles, inertia, or passivity.

#### Choosing software to use for teammates to use to submit expenses for reimbursement

- While the Tech Ops and Finance teams are responsible for the execution of the decision, the Finance team alone must deal with the repercussions of the decision as the ongoing maintainers of the process of approving expenses and reimbursing teammates. In this case, the owner of the process on the Finance team would be the [decider](#decider).
- This is a more complex situation, of course, as everyone at the company will _use_ this software. The [recommender](#recommenders) should collect input from a sample of teammates to verify the new process will be successful.

#### Building a new Growth team to focus on user growth

- While user growth is a company-wide goal, it primarily aligns with the Product and Marketing organizations (based on team-level OKRs and efforts). Other teams affected include Sales, Engineering, Business Operations, and more.
- As a result, the Product and Marketing teams are the ones who are primarily responsible for the results of such a decision. In this case, greater impact will be felt on the Product and Engineering organizations versus Marketing, as they may have to reallocate teammates to this new team full-time.
- Given the goal that would drive this decision is cross-functional, the heads of Marketing and Engineering should be consulted for input, or potentially even given [approver](#approvers) rights, but in this case, the [decider](#decider) is the head of the Product organization.

#### Making a large change to the product

- While the design of the overall product experience is a responsiblity of the product team, their work is dependant on execution by the engineering team. 
- The [recommender](#recommenders) in these cases should consist of product and engineering team members responsible for the execution of the decision. The [decider](#decider) in this situation would be the designer or a product manager most closely responsible for the results of the effort.

## Highly cross-functional decisions

There will be some situations where decisions have wide-reaching consequences for a number of teams. Changes to product pricing and packaging is a good example—it affects the sales team’s plans and drives a need for training; it affects product marketing and marketing research; it affects the finance team’s planning; it affects the product and engineering teams who have to build support for new packages; and more.

In such situations, the principles of an effective decision still apply. The group of team leaders should choose a single individual or small group to make decisions. This designation needs to be made explicit, so somebody must answer for progress being made.

It may sometimes be worthwhile to document a complete process for such decisions (e.g., a dedicated [Pricing Council](https://docs.google.com/document/d/1p-UswkBx0aGsNtg7FF0-G2OiWyr7vRidOO6xWPuXYqE/edit#heading=h.trqab8y0kufp)), but such structure should be minimized.
