# How to be a Tech Lead

_A guide for Sourcegraph engineers_

## What’s a Tech Lead?

Tech lead (TL) is a role a Sourcegraph engineer can fulfil on a [Product Planning Project](https://docs.google.com/spreadsheets/d/1jP5atmrBSJKubvk3rFuwXiXKLwfyxCGFDE4fqbpVmvU/edit#gid=283720203). So what does that mean?

The TL of a project is the Directly Responsible Individual (DRI) and as such [owns the engineering success](./dev/process/principles-and-practices.md#ownership).

Here is a subset of the things a TL does:

- **Engineering vision:** set the engineering vision & scope of the project.
- **Plan:** define a plan for how to deliver the project, ensuring that the correct tradeoffs are made in terms of scope, resources, delivery time.
- **Ship:** this might be the most important tasks of a TL: they make sure the code gets merged, is feature-flagged, goes into a release, lands in the hands of customers, turns into feedback, and then takes care of post-release feedback/bugs/praise.
- **Communication:** communicate progress of the project to stakeholders, EMs, VP of Engineering as much as needed and as clearly as possible.
- **Feedback:** get feedback and input from Product and Design as much as needed for the project and as early as possible.
- **Lead by example:** set a high standard for quality and work ethic. Help other engineers on the team to do their work by planning & scoping their work, reviewing their contributions, suggesting improvements, and holding them accountable.
- **Track:** Keep track of the progress and team members’ work.

But: **_how exactly_ a TL does these things depends on the project, the team, and the TL.**

Here are some ideas and guidelines for how to do these things as a TL at Sourcegraph.

## Set the engineering vision

Anything goes here, really. You can write a Google Doc, a [tracking issue](./dev/process/tracking_issues.md), an [RFC](../../company-info-and-process/communication/rfcs/), or a normal GitHub issue.

What’s important is that you have something you can share with your team members, your EM, Product, Design, and other stakeholders to communicate

1.  What are the **goals** and the customer impact of this project  (“build an admin dashboard to show all foo widgets to help expansion at strategic customers”)
2.  What is the **timeline** (“~8 weeks of work for 2 engineers”)
3.  **Who** is involved - who are the team members, what are the dependencies on Design?
    a. _💡TIP: Try to avoid cross-projects dependencies. They have a high cost, and are always harder to keep track of than inside a small group of teammates sharing all the context. See if you can implement the part that depends on another project internally instead._
4.  What are the **important technical decisions, trade offs, and alternatives considered** (“we use this API, don’t change backend, use tool X, also remove legacy Y, build instead of adding a dependency” …)
    a. _💡TIP: Accept that not everything is predictable, nor try to pretend it is. Risks are part of a project. It's better to make them explicit and to talk about them. (“we don't know if x is feasible, but in a week from now, we will because we'll run some POC”)_

It’s important to be as clear & concise as possible.

### Alignment on the technical vision

Once the vision is defined or drafted: **share it with your team!** Ideally you already had their input when writing it. In any case: share the vision with your team, get their feedback, make sure everybody is on the same page. Share it multiple times.

**Alignment is important.** Aligning the team on a technical direction is the #1 priority and if there’s misalignment it should be treated as an emergency.

This might require a Zoom call or two. Don’t avoid meetings when it comes to aligning engineers on a team: a 20 min call often helps more than 3 days of asynchronous reading and discussion in a Google Doc. Synchronous calls can be a great way to, well, synchronize. But do attempt to retain async culture when dropping into synchronous meetings by, for example, writing summaries in a Google Doc or the Slack channel of the project. That still eases communication between timezones, is more resilient to PTO and life events, and is a good reference for decisions over time.

**What if you can’t align? And you and your team disagree?**

Bias for quick action on reversible decisions.

While input is valued and should be seriously considered (we're all super smart here), the actual decision is down to the DRI of that project, as they are the one responsible for success. This means that it’s ultimately up to the TL to make a final call on decisions for which multiple opinions have been expressed. After you, as a TL, make a call you then must clearly communicate it, ensuring that everyone understands what was communicated.

It should be expected that ICs may disagree when discussion is prudent, but will commit to aligning with the DRI once a decision has been made (unless, of course, it is irreversible and threatens the success of the project or affects orthogonal efforts in an outsized way).

Do not expect to always achieve consensus on all decisions. ICs should ensure that their actions are always contributing to the shared goal on which your team is aligned. If there is any ambiguity on vision, the DRI should be able to clarify.

**Healthy escalation**

When you cannot achieve consensus, escalate quickly. Escalation, done properly, can help unblock you fast. Sometimes someone just needs to make a decision, so you kick it up the chain.

_When to escalate:_

- When you cannot reach a conclusion on a cross-domain issue, such as a design or ownership issue.
- When your own project starts to slip. Let someone know!
- It’s better for everyone to know early so we can adjust schedules, add people, change marketing messages, etc.
- When one of your dependencies starts to slip and it will affect you. Make sure someone knows as soon as you do.

Escalate only when you have tried going to the person directly at least twice. Sometimes you need to ping someone again when they are busy.

_How long to wait:_

- Make a sensible decision about how long to give someone to respond async
- If it’s urgent (need in same day), a couple hours is often enough
- If it’s not urgent, 24-48 hours is a polite amount of time to wait
- You usually should not have to wait more than 3 business days on a decision

_How to escalate gently:_

- Never use email for escalation.
- Use Zoom or in-person if possible because it’s the least confrontational
  - However, don’t wait too long to get a meeting - switch to async/Slack if it’s not super convenient to meet
- As a general rule, ask your TPM to help you escalate, but you can also do it yourself if you prefer (or if a TPM is unavailable)
- Default to Slack
- First ping the individual or team and let them know that you would like an answer on X by Y date
- If they are unresponsive, or you cannot get the answer, or it fits any other escalation criteria including common sense, then wait an appropriate amount of time, and escalate
  - You do this by sending a follow-up saying you’d like to escalate this to ensure that it gets the right attention from project planning
- Wait an appropriate amount of time again (based on balancing urgency and politeness), and then do the escalation
  - Escalating means sharing the issue thread with the person or team’s direct manager, or if they were already involved, that manager’s manager, as well as with the TPM
- Lather, rinse, repeat, until someone in the exec-team winds up breaking the tie

Gentle escalation is a powerful technique to ensure that potential cross-functional blockers are addressed very quickly. Use your best judgment and use escalation to keep yourself from being blocked for too long.

**Document decisions made & get approvals**

You can use different ways to reach **alignment** (or decide to disagree-and-commit), but once you do that, you should get a written approval from your stakeholders (EM/PM/IC5/engineers that disagreed with you or are affected by what you are proposing). This can be as simple as a Name: LGTM comment on a Google Doc / Github issue - what’s important is that future readers know that a certain decision was understood and acknowledged by people affected by it.

As a rule-of-thumb, think about who could say “no” to what you are proposing and ask them to review & approve what you propose.

## Plan & Track

This goes hand in hand with setting the vision, but also involves handling the practicalities of software engineering: you need to plan with your team **who**’s going to work on **what** and **when** and in **which** order.

That means: meet with your team, define tickets, define what those tickets entail, define who’s going to work on a ticket, when you all think it should be done, how to go about implementing it, how to ask for help.

You can use a [GitHub project board](https://github.com/orgs/sourcegraph/projects/) for this to track the issues you create.

Some teams meet weekly to look at their board, some meet daily, some meet biweekly.

What you need to ensure is:

- your team members work on the right things
- at the right time
- and with all the help they need
- and that surprises are uncovered as soon as possible

Or, put another way, you need to be able to answer at all times

- **who** is doing **what**
- until **when**
- what are the current threats to the project completion (know your unknowns)

## Communication

Create a Slack channel for your project. Invite the team members, invite the IC5s that might be involved, invite your EMs.

Provide regular updates on the status of the project.

When and how much status should you report? It depends:

- if everything’s going according to plan, communicate that on a weekly basis
- if there are surprises that affect the timeline: communicate as soon as possible to all involved stakeholders
- if there are unforeseen requirements from other teams or Design/Product: communicate as soon as possible to let them know what the requirements are and what the expected timeline is
- if you think the success of the project is in danger: communicate to everyone involved as soon as possible

Here’s the communication that’s expected for Tech Leads:

- Provide an update once a week…
- … in the [PR-FAQ issue](https://github.com/orgs/sourcegraph/projects/302/views/18) tracking your project
- … and x-post the update in the slack channel for your project
- … tagging the EM, TPM, involved PMs, designers, team members
- … stakeholders (could be the Head of Eng, customer support, PM, Kalan…)
- to say
  1.  what is the overall status of your project:
      - 🟢 (on track)
      - 🟡 (delayed, identified risks or blockers etc.)
      - 🔴 (serious risks, great delay, project of fire!)
  2.  what you got done this week (3-4 bullet points, keep it high level)
  3.  what you plan to do next week (3-4 bullet points, keep it high level)
  4.  any unforeseen surprises, risks, events
      - this is where you mention things like: “we realized we can’t do this on the frontend alone, we need backend, this pushes timeline out by 6 weeks and we need a backend engineer” or “X is being moved to a different project, velocity will drop”
- [Kalan Chan](mailto:kalan.chan@sourcegraph.com) will aggregate all updates to provide a consolidated view of progress and reach out to TLs to schedule sync time if needed

Think about your audience when communicating. Will my audience understand what I'm sharing if they don't have the technical context? What do I really want to convey?

## Feedback

Feedback is critical. Get feedback as soon as possible.

Don’t think of feedback as “users testing this and filling out a form”. That’s too short sighted. Feedback means:

- tagging design in PRs for reviews
- asking other ICs and other teams for code reviews
- sharing progress in #dogfood-feedback and in #progress to get colleagues to try out your project
- asking involved EMs

Most importantly: talk to customers. Yes, you. Get on a call with a customer. Before you do anything you need to ensure you know what customer pain you’re solving. [You own this project.](./dev/process/principles-and-practices.md#ownership)

## Lead by example

You are the technical leader on this project. You need to lead by example and show other engineers on the team what good looks like.

That means, as a TL, you **review code** to make sure your team member’s work meets the high bar of quality that you set and matches the conventions of the codebase. Your job is to ensure a great review culture on your team:

- You ask for reviews and make expectations for reviewers clear: are there specific parts you want them to take a closer look at? Do you expect a review until X? Communicate your expectations.
- You review code and make your expectations clear. If you have several comments and some are blocking and some are not, be clear about the priority of each. Try not to add to scope creep by adding additional features if they can be added in a subsequent PR.
- You define with your team when to ask whom for a review. Sometimes the whole team needs to see a PR, sometimes only a single person, sometimes Design and PM too.

You are the **voice of the customer**. Constantly ask yourself: are we solving the right problem? Are we helping a customer here? It’s your job to look at the technical plan and to ensure that it actually solves the problem. It’s your job to push back against requirements that you don’t think solve a customer’s issue.

**You write code.**

**You think about releases.** You think about how to fit what you’re building into a release, how to feature-flag it, how to follow it up in the next release, how to test it, how to ensure it’s properly deployed to all environments.

**You push for testing.**

**You set the bar for what “high quality” means.**

**You build down tech debt.** You keep track of it, you suggest ways to remove it, you allocate time if necessary to remove it, you point your team members to the preferred way. You constantly have “how do we handle tech debt?” on your mind.

**You identify who needs help on your team and help them get what they need.** You pay attention in updates, in code reviews in Slack to see whether someone on your team is blocked, or confused, or needs help. Help debug, help write code, suggest better ways to do things, suggest how to improve as an engineer. "Take an afternoon to read those docs" often goes a long way, it's easy to be hesitant to sharpen the axe, because you think that chopping wood now will get more done.

**You ask others for feedback on your own code.**

**You pair with your team members.** You hop on a call, if time zones allow, to debug issues together, to review code, to write code. Pairing is perfect for high-bandwidth knowledge transfer. Things you wouldn’t necessarily send in Slack get mentioned on a Zoom call (“we should really clean this up”, “we could use this lib for that…”). Make use of that.
