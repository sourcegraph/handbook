# Customer support career levels

Our career level framework is meant to help you understand the expectations of your role and provide a common vocabulary for you and your manager to discuss and plan your career development on the CS team (in addition to where you might want to take your career in the future as outlined in our career roadmap practice). Having shared and visible expectations (as well as a common vocabulary) gives us an accountability framework to reduce bias in promotions/hiring and ensures that we are equitably recognizing everyone for their impact.

## What are the expectations of my role?

There are currently seven levels for support at Sourcegraph. A level is composed of three categories, each with a summary statement and several example behaviors. These categories are:

- Proficiency
- Delivery
- Teamwork

It’s important to understand that what is listed in the level descriptions are example behaviors, and not checkboxes for promotion. Doing everything listed there is neither necessary nor sufficient for a promotion. The expectation is that you demonstrate a level of impact consistently over a span of months within each of the category descriptions for your level. The [magnitude of your impact](https://about.sourcegraph.com/blog/software-engineer-career-paths/) is ultimately the measure of your career growth.

In most cases, a level builds on the expectations from the preceding levels: someone at level 2 must also meet the level 1 expectations. In addition to what is listed there, we expect support engineers at all levels to exhibit our Sourcegraph company values.

Rather than precede each bullet point with “consistently,” we leave it as implicit and we define this as _X happening consistently over a period of at least ~6 months_. It’s great to do something once, but the real measure of impact is if you are able to do that again and again over a substantial enough period of time.

The level descriptions state the minimum expectations _after you have completed your onboarding_. For example, if you were hired at a level 2, we would expect that you are having the impact outlined for both levels 1 and 2 once your onboarding is complete. This also means that before being promoted to level 3, for example, you would be expected to be already doing what is listed in level 3 before a promotion is possible.

In line with our _continuously grow_ company value, we expect you to understand where you are at in the framework and always have something clearly defined that is pushing you to outgrow yourself to reach the next level. The process and timeline will vary person to person and should be captured in your career roadmap.

## When do I get promoted?

Promotion discussions occur when your manager can make the case that you’ve had at least 6 months of consistent high performance at your current level, and at least 3 months performing consistently at the next level, in all three of the categories. Again, it takes time to demonstrate the “consistently” implicit in the expectations and we want to ensure that you are set up for success to perform at your current level.

Promotions from one level to another are considered in impact reviews conducted by CS leadership in collaboration with you individually. An in-band compensation increase (while staying at the same level) can happen at any time, in recognition of exceeding expectations in your current level without having yet met the expectations of the next level.

<style>
  .container {
    --width: 1300px;
  }
  .levels-table {
    --proficiency-color: var(--sg-vivid-violet);
    --delivery-color: var(--sg-sky-blue);
    --teamwork-color: var(--sg-vermillion);

    table-layout: fixed;
  }
  .proficiency {
    --category-color: var(--proficiency-color);
  }
  .delivery {
    --category-color: var(--delivery-color);
  }
  .teamwork {
    --category-color: var(--teamwork-color);
  }
  .levels-table :is(td, th) {
    vertical-align: top;
    background: white;
  }
  .levels-table [id] {
    /* Account for sticky table header */
    scroll-margin-top: calc(var(--header-height) + 2.25rem);
  }
  thead th:first-child {
    width: 8ch;
  }
  thead th.category-title {
    text-align: center;
    border-color: white;
    background: var(--category-color);
  }
  thead th:is(.proficiency, .teamwork) {
    color: white;
  }
  /*
  Repeat the category color as a border color after each category summary.
  Safari doesn't respect different border colors below a cell spanning multiple columns,
  so we need to draw borders on wrapper elements instead.
  */
  .levels-table .category-summaries-row {
    border-top: none;
  }
  .levels-table .category-summary {
    border-top: none;
    padding: 0;
  }
  .category-summary > .wrapper {
    /* Note that absolute positioning wouldn't work here because <td>s can't be position: relative in Firefox. */
    width: 100%;
    height: 100%;
    padding: 6px 13px;
    display: block;
    border-top: 1px solid var(--category-color);
  }
  .level {
    white-space: nowrap;
  }
  .levels-table td[colspan] {
    text-align: center;
  }
  .level-summary, .category-summaries-row {
    font-style: italic;
  }
  .level-summary {
    border-bottom: none !important;
  }
  .levels-table td.tbd {
    vertical-align: middle;
    text-align: left;
    padding: 2.5rem;
  }
  /*
  Safari doesn't make the two IC6/IC7 rows equal size automatically, so give them explicit heights
  Note that min-height also doesn't work.
  */
  th#ic6, th#ic7 {
    height: 11rem;
  }
</style>

## Levels

<table>
  <tr>
   <td>
   </td>
   <td><strong>IC 1: An individual new to the field with no prior industry experience; focused on learning, growth, and establishing themselves as a contributing member of the team (Entry Level)</strong>
   </td>
   <td><strong>IC 2: An individual beginning to autonomously contribute, execute, and collaborate on routine customer issues while developing their skills (Associate)</strong>
   </td>
   <td><strong>IC 3: A mid-level individual contributor beginning to independently solve for more complex customer issues (Specialist)</strong>
   </td>
   <td><strong>IC 4: A senior-level individual contributor that has demonstrated capabilities to consistently resolve more complex customer issues independently (Senior)</strong>
   </td>
   <td><strong>IC 5: A particularly experienced individual who excels in their capabilities with a focus on leadership and growth; possesses unique knowledge and ability to navigate the most complex customer issues and inquiries; takes on an active role in mentoring IC1s-IC4s (Lead)</strong>
   </td>
   <td><strong>IC 6: A subject matter expert with a visible external brand/presence; equivalent in impact to a Manager, and acts as a mentor to preceding IC level team members (Principal)</strong>
   </td>
  </tr>
  <tr>
   <td>Proficiency
   </td>
   <td><strong>Non-Technical</strong>:
<p>
• You troubleshoot and resolve common customer issues with guidance.
<p>
• You demonstrate the essentials needed to do work in our domain (as outlined in our<a href="https://handbook.sourcegraph.com/departments/ce-support/support/#our-guiding-principles"> guiding principle</a><span style="text-decoration:underline;">s</span>).
<p>
• You willingly receive feedback from teammates to deliver positive outcomes for customers and the team.
<p>
• You increase your knowledge of Sourcegraph, our customers, team, general processes and workflows through reading, observing, and doing.
<p>
<strong>Technical</strong>:
<p>
• You have a basic understanding of Linux.
<p>
• You have a basic understanding of Git.
<p>
• You have a basic understanding of databases.
<p>
• You have limited working proficiency with codehosts.
<p>
• You are familiar with containerized runtimes like Docker and Kubernetes.
<p>
• You have a basic understanding of Sourcegraph main product areas.
   </td>
   <td><strong>Non-Technical:</strong>
<p>
• You solve customer issues, sometimes with guidance, and are able to collaborate with your teammates to help them troubleshoot problems.
<p>
• You consistently embody our<a href="https://handbook.sourcegraph.com/departments/ce-support/support/#our-guiding-principles"> guiding principles</a> in the cases that you take responsibility for.
<p>
• Externally, you are able to effectively and proactively communicate with customers, facilitating collaboratively as appropriate.
<p>
• You integrate feedback from teammates to deliver high-quality solutions.
<p>
• You increase your communication, product, technical (dev or ops), collaboration, and facilitation knowledge/skills through reading, observing, and doing.
<p>
<strong>Technical:</strong>
<p>
• You are proficient in the primary elements of deployment types (Docker and Kubernetes).
<p>
• You have professional working proficiency of Git.
<p>
• You have professional working proficiency of all codehosts - GitHub (Cloud or Self-hosted), GitLab (Cloud or Self-hosted), Bitbucket Server, Bitbucket Data Center, or Perforce.
<p>
• You have a strong understanding of Sourcegraph main product areas (Search, Batch Changes, Insights, Monitoring, etc)
<p>
• You have a strong understanding of databases.
<p>
• You have a strong understanding of containerized runtimes like Docker and Kubernetes.
<p>
• You have a strong understanding of cloud technologies.
   </td>
   <td><strong>Non-Technical:</strong>
<p>
• You are able to effectively facilitate troubleshooting calls with customers independently.
<p>
• At any point in time, anyone can review your cases alongside our guiding principles and definitions of success and you meet these at least 95% of the time.
<p>
• Externally, you lead all plans for issue resolution, maintaining clear and transparent communications with customers throughout; you identify next steps and followthrough to completion.
<p>
• You are skilled at diffusing customer frustrations/escalations.
<p>
• You write validated customer-facing documentation updates related to the dev ops aspects of our product.
<p>
• You can explain the reasoning and trade-offs behind your decisions, including technical decisions.
<p>
• You provide helpful, timely case documentation and/or code reviews.
<p>
• You invest in your own growth; willingly exploring new tools, skills, areas of the codebase, etc.
<p>
<strong>Technical:</strong>
<p>
• You are an expert in all deployment types.
<p>
• You have advanced knowledge of Sourcegraph main product areas and are a subject matter expert in at least one product area (Search, Batch Changes, Insights, Monitoring, etc)
<p>
• You have advanced knowledge of cloud technologies.
<p>
• You have full professional proficiency of Git.
<p>
• You have a working understanding of 1 or more of Sourcegraph's codebase languages (Go, Javascript, Python, Typescript) while developing proficiency in the rest.
   </td>
   <td><strong>Non-Technical</strong>:
<p>
• You are an expert in your domain: you have a deep understanding of our product and codebase/dev ops practices, and are a skilled communicator, collaborator and facilitator.
<p>
• You have in depth knowledge of the existing codebase and stay abreast of new refactors, omissions, etc.
<p>
• You find technical solutions to open-ended, ambiguously defined problems (in our product or centered on the support team/workflow).
<p>
• When finding solutions, you identify the core problems that need to be solved, as well as goals, risks, trade-offs, customer impact, technical debt, non-technical factors, etc.
<p>
• You give insightful feedback on higher-level aspects (architecture, scalability, customer-focus, etc.) in case/code reviews and RFCs, holding teammates to the same high standard you set for yourself.
<p>
• You maintain awareness of approaches outside of Sourcegraph that we’re not using, and use this to help define best practices for the team/domain.
<p>
<strong>Technical</strong>:
<p>
• You are a subject matter expert in all deployment types, and act as a mentor to IC1s and IC2s.
<p>
• You are an expert in cloud technologies.
<p>
• You are well-versed in all Sourcegraph features and contextual concepts.
<p>
• You are an expert in Git.
<p>
• You have full proficiency in all codehosts and have working knowledge of, at least, one other codehost apart from GitHub, GitLab, BitBucket or Perforce.
<p>
• You are proficient in writing code in Go, Javascript, Python or any of our core programming languages.
<p>
• You write maintainable, well-tested code (for our product or for team tooling) that aligns with the style and practices of the team/codebase.
   </td>
   <td><strong>Non-Technical</strong>:
<p>
• You make high-quality technical, and non-technical, decisions leading team-sized tasks that affect one or more complex systems or mission-critical areas.
<p>
• You consistently incorporate non-technical factors into technical decisions and weigh them appropriately.
<p>
• You have proficiency beyond your domain areas, understanding more about business operations and/or engineering scope/efforts.
<p>
• You invest in technology, tools, and processes that benefit your entire team.
<p>
• You lift your teammates through feedback, mentorship, and sharing reusable patterns.
<p>
<strong>Technical</strong>:
<p>
• You are a subject matter expert in all Sourcegraph features and contextual concepts and regularly help unblock and enable your teammates.
<p>
• You have full proficiency in all codehosts and have working knowledge of multiple other codehosts apart from GitHub, GitLab, BitBucket or Perforce.
<p>
• You are an expert in writing code in Go, Javascript, Python or any of our core programming languages.
   </td>
   <td><strong>Non-Technical</strong>:
<p>
• You help set the vision for the team and influence the broader vision beyond the team.
<p>
• You lead cross functional projects that impact aspects of the business both within, and outside, your primary domain.
<p>
• You provide oversight, coaching, and guidance through case/code reviews and other activities, both on or off the team.
<p>
<strong>Technical</strong>:
<p>
• You contribute at least 10 PRs per quarter in support of Product and Engineering defined needs.
   </td>
  </tr>
  <tr>
   <td>Delivery
   </td>
   <td>• Under the guidance of your manager, you create a plan to consistently deliver on your commitments, while creating space to allow for learning, growth and rest.
<p>
• You exercise profound compassion, with colleagues and customers.
<p>
• You recognize when you are blocked and ask for support.
   </td>
   <td>• You manage your day-to-day workflow appropriately to reliably deliver on your commitments, adhering to all defined team processes and workflows.
<p>
• You ask for guidance in unfamiliar areas or for underspecified tasks and speak up if you are not at ease with what you understand you need to do.
<p>
• You have a general understanding of how users interact with our product/infrastructure.
<p>
• You are able to establish rapport with customers and colleagues to achieve meaningful and productive conversation.
<p>
• Your tickets are maintained and kept up-to-date to allow for accurate team-level reporting.
   </td>
   <td>• You prioritize your work in alignment with team/company goals and objectives.
<p>
• You scope and implement solutions to pre-defined problems, with guidance.
<p>
• You detect problems (in the product or our processes) that could erode the customer experience and actively engage to resolve them.
<p>
• You firmly grasp how users interact with our product/infrastructure.
<p>
• You are skilled in establishing rapport with customers and colleagues, and consistently deliver results on time.
   </td>
   <td>• You independently scope and implement solutions to complex, loosely-defined problems.
<p>
• You estimate methodically, based on iterative learning and set realistic expectations/timelines that drive effort and support healthy work habits.
<p>
• When faced with roadblocks, you identify appropriate courses of action, engaging others or unblocking yourself as appropriate.
<p>
• You are accountable end-to-end on everything for which you take responsibility.
<p>
• You proactively identify areas for improvement and balance new work with the necessary day-to-day tasks needed to keep the team operating well to provide a positive customer experience.
   </td>
   <td>• You independently scope and implement solutions to extremely complex and/or vague customer issues, and identify the problems to be solved.
<p>
• You remain composed in: ambiguous situations, challenging situations, situations involving multiple stakeholders, etc.
<p>
• You intentionally and proactively align your work around a deep understanding of how people use the products/customer experience.
<p>
• You proactively identify areas for improvement beyond the scope of our team and contribute meaningfully to solutions while continuing to deliver on our team’s goals.
   </td>
   <td>• You proactively identify areas for improvement at the org/company level.
<p>
• You suggest process and methodology improvements.
<p>
• You work closely with engineering and CE leadership to validate alignment between teams.
<p>
• You are highly skilled at scoping, designing, and delivering solutions for large, complex challenges.
   </td>
  </tr>
  <tr>
   <td>Teamwork
   </td>
   <td>• You actively ask teammates, including cross-functional (e.g. engineering), questions to seek feedback and clarity.
<p>
• You participate and demonstrate curiosity in team meetings.
<p>
• You follow documented team processes and seek clarification when in doubt.
<p>
• You communicate with candor and transparency.
   </td>
   <td>• You actively participate and are able to initiate conversation in team and cross-functional meetings.
<p>
• You suggest improvements to team processes and help keep the handbook up-to-date.
<p>
• You communicate thoughtfully and intentionally, both synchronously and asynchronously.
<p>
• You are flexible to change.
<p>
• You resist group think and help the team maintain productive, healthy dialogues.
   </td>
   <td>• You communicate clearly, both synchronously and asynchronously, escalating blockers quickly, clarifying requirements and sharing assumptions and context.
<p>
• You set the example on defining/modifying team processes; participating in identifying problems, suggesting improvements, and helping with solutions.
<p>
• You proactively add and edit handbook documentation to help others.
<p>
• You offer timely, helpful feedback to others and trust them to decide to what extent to incorporate it.
<p>
• You help onboarding and orienting new team members.
<p>
• You participate in the hiring process where possible, conducting interviews (with training) and writing helpful feedback.
   </td>
   <td>• You communicate technical and non-technical issues and decisions clearly, bringing clarity to discussions, and help to drive the process forward.
<p>
• You routinely drive improvements in team/company processes (retros, planning, etc).
<p>
• You consider the effects of your work and words on other teams and represent the Support team well in discussions with cross-functional teammates, customers, and stakeholders.
<p>
• You share your experience and expertise to help others grow, through mentoring and coaching where possible.
<p>
• You proactively propose additions and changes to the team’s forward plans.
   </td>
   <td>• You are thoughtfully (and with empathy) able to convince and challenge teammates and cross-functional stakeholders using valid expertise and respectful communication.
<p>
• You actively seek dissenting opinions, disconfirming evidence, etc.
<p>
• You share a long-term vision that influences the team’s go forward plans.
<p>
• You operate in a way that demonstrates self-awareness (you often identify feedback before anyone has to give it to you) and active intentionality (you have a plan before you communicate/act).
   </td>
   <td>• You provide domain/technical expertise internally and externally, informing what can be achieved.
<p>
• You actively coach others on effective communication, collaboration and conflict resolution skills.
<p>
• You regularly share knowledge and mentor teammates
<p>
• You possess a visible external presence and willingly present to large and/or senior audiences to represent the Support team.
<p>
• You persuade and challenge customers and internal stakeholders, using valid expertise and respectful communication.
   </td>
  </tr>
</table>
