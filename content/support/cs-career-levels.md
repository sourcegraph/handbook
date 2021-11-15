# Customer support career levels

Our career level framework is meant to help you understand the expectations of your role and provide a common vocabulary for you and your manager to discuss and plan your career development on the CS team (in addition to where you might want to take your career in the future as outlined in our [career roadmap practice](enablement/career-roadmap.md)). Having shared and visible expectations (as well as a common vocabulary) gives us an accountability framework to reduce bias in promotions/hiring and ensures that we are equitably recognizing everyone for their impact.

## What are the expectations of my role?
There are currently seven levels for support at Sourcegraph. A level is composed of three categories, each with a summary statement and several example behaviors. These categories are:

* Proficiency
* Delivery
* Teamwork

It’s important to understand that what is listed in the level descriptions are example behaviors, and not checkboxes for promotion. Doing everything listed there is neither necessary nor sufficient for a promotion. The expectation is that you demonstrate a level of impact consistently over a span of months within each of the category descriptions for your level. The [magnitude of your impact](https://about.sourcegraph.com/blog/software-engineer-career-paths/) is ultimately the measure of your career growth.

In most cases, a level builds on the expectations from the preceding levels: someone at level 2 must also meet the level 1 expectations. In addition to what is listed there, we expect support engineers at all levels to exhibit [our Sourcegraph values](../../company/values.md).

Rather than precede each bullet point with “consistently,” we leave it as implicit and we define this as *X happening consistently over a period of at least 3-6 months*. It’s great to do something once, but the real measure of impact is if you are able to do that again and again over a substantial enough period of time.

The level descriptions state the minimum expectations *after you have completed your onboarding*. For example, if you were hired at a level 2, we would expect that you are having the impact outlined for both levels 1 and 2 once your onboarding is complete. This also means that before being promoted to level 3, for example, you would be expected to be already doing what is listed in level 3 before a promotion is possible.

In line with our *continuously grow* company value, we expect you to understand where you are at in the framework and always have something clearly defined that is pushing you to outgrow yourself to reach the next level. The process and timeline will vary person to person and should be captured in your career roadmap. 

## When do I get promoted?
Promotion discussions occur when your manager can make the case that you’ve had at least 3-6 months of high performance at your current level, and at least 3 months performing at the next level, in all three of the categories. Again, it takes time to demonstrate the “consistently” implicit in the expectations and we want to ensure that you are set up for success to perform at your current level.

Promotions from one level to another are considered in our quarterly talent review conducted by CS leadership in collaboration with you individually. An in-band compensation increase (while staying at the same level) can happen at any time, in recognition of exceeding expectations in your current level without having yet met the expectations of the next level.

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
    --category-color: var(--execution-color);
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

<table class="levels-table">

  <thead>
    <tr>
      <th scope="col" class="sticky">Level</th>
      <th scope="col" class="category-title proficiency sticky">Proficiency</th>
      <th scope="col" class="category-title delivery sticky">Delivery</th>
      <th scope="col" class="category-title teamwork sticky">Teamwork</th>
    </tr>
  </thead>

  <tbody>
    <!-- IC1 -->
    <tr>
      <th id="ic1" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic1"></a><abbr title="Individual Contributor">IC</abbr>1</th>
      <td colspan="3" class="level-summary">You are focused on learning, growth, and establishing yourself as a contributing member of the support team.</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          You possess and demonstrate core communication, product, technical, collaboration, and facilitation skills; while also focusing on learning and improving in everything you do.
        </div>
      </td>
      <td class="category-summary delivery">
        <div class="wrapper">
          You achieve positive outcomes on the work for which you take responsibility.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          You are an engaged member of the support team.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>You solve customer issues with guidance.</li>
          <li>You demonstrate the essentials needed to do work in our domain (as outlined our guiding principles).</li>
          <li>You review cases for your teammates by asking questions and applying what you learn.</li>
          <li>You integrate feedback from teammates to deliver high-quality solutions.</li>
          <li>You increase your communication, product, technical (dev or ops), collaboration, and facilitation knowledge/skills through reading, observing, and doing.</li>
        </ul>
      </td>
      <td class="behaviors delivery">
        <ul>
          <li>You manage your own time and well-being, meeting commitments while finding balance and creating rest.
</li>
          <li>You ask for guidance in unfamiliar areas or for underspecified tasks and speak up if you are not at ease with what you understand you need to do.</li>
          <li>You exercise profound compassion, with colleagues and customers.</li>
          <li>You recognize when you are blocked and ask for support.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>You actively ask teammates questions to seek feedback and clarify, including cross-functionally (e.g. engineering).
</li>
          <li>You participate and demonstrate curiosity in team meetings.</li>
          <li>You follow documented team processes and help keep the handbook up-to-date.</li>
          <li>You communicate thoughtfully.</li>
          <li>You are flexible to change.</li>
          <li>You resist group think and help the team maintain productive, healthy dialogues.</li>
        </ul>
      </td>
    </tr>
    <!-- IC2 -->
    <tr>
      <th id="ic2" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic2"></a><abbr title="Individual Contributor">IC</abbr>2</th>
      <td colspan="3" class="level-summary">You are a reliable and autonomous contributor, practitioner, and collaborator.</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          You reliably meet the definitions of success for an individual support engineer.
        </div>
      </td>
      <td class="category-summary delivery">
        <div class="wrapper">
          You autonomously bring tickets to resolution and contribute to team OKRs.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          You communicate clearly and proactively collaborate with others.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>
            You are proficient in 3 of our 5 core areas (communication, product knowledge, technical skills (dev or ops), collaboration, and facilitation), while continuing to develop proficiency in the other 2.
          </li>
          <li>You are able to effectively facilitate troubleshooting calls with customers.</li>
          <li>At any point in time, anyone can review your cases alongside our guiding principles and definitions of success and you meet these at least 95% of the time.</li>
          <li>You diffuse customer frustrations/escalations.</li>
          <li>You write maintainable, well-tested code (for our product or for team tooling) that aligns with the style and practices of the team/codebase and/or write validated customer-facing documentation updates related to the dev ops aspects of our product.</li>
          <li>You can explain the reasoning and trade-offs behind your decisions, including technical decisions.</li>
          <li>You provide helpful, timely case and/or code reviews.</li>
          <li>You invest in your own growth; willingly exploring new tools, skills, areas of the codebase, etc.</li>
        </ul>
      </td>
      <td class="behaviors delivery">
        <ul>
          <li>You manage your day-to-day workflow appropriately  to deliver reliably.</li>
          <li>You prioritize your work in alignment with team/company goals.</li>
          <li>You detect problems (in the product or our processes) that could erode the customer experience and actively engage to resolve them.</li>
          <li>You understand  how users interact with our product/infrastructure.</li>
          <li>You reliably deliver results on time.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>
            You communicate clearly (in meetings and asynchronously), escalating blockers quickly, clarifying requirements and sharing assumptions and context.
          </li>
          <li>
            You exemplify team processes; participate in identifying problems, suggesting improvements, and helping with solutions.
          </li>
          <li>
            You proactively add handbook documentation to help others.
          </li>
          <li>
            You offer timely, helpful feedback to others and trust them to decide to what extent to incorporate it.
          </li>
          <li>
            You help onboarding and orienting new team members; mentoring where possible.
          </li>
          <li>
            You participate in the hiring process where possible, conducting interviews (with training) and writing helpful feedback.
          </li>
        </ul>
      </td>
    </tr>
    <!-- IC3 -->
    <tr>
      <th id="ic3" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic3"></a><abbr title="Individual Contributor">IC</abbr>3</th>
      <td colspan="3" class="level-summary">You are an experienced and exemplary  individual contributor (<q>senior</q> equivalent).</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          You are an experienced, versatile contributor who demonstrates foresight in decision making.
        </div>
      </td>
      <td class="category-summary delivery">
        <div class="wrapper">
          You independently scope and implement solutions to complex, loosely-defined problems.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          You independently facilitate your peers on the team working together toward a common goal and use your influence to keep group discussions productive and healthy.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>
            You are an expert in your domain: you have a deep understanding of successful communication, our product, our codebase/dev ops practices, effective collaboration, and effective facilitation.
          </li>
          <li>You willingly dive into unfamiliar areas of the codebase.</li>
          <li>
            You find technical solutions to open-ended, potentially ambiguously defined problems (in our product or centered on the support team/workflow).
          </li>
          <li>
            When finding solutions, you identify the core problems that need to be solved, as well as goals, risks, trade-offs, customer impact, technical debt, non-technical factors, etc.
          </li>
          <li>
            You give insightful feedback on higher-level aspects (architecture, scalability, customer-focus, etc.) in case/code reviews and RFCs, holding teammates to the same high standard you set for yourself.
          </li>
          <li>
            You maintain awareness of approaches outside of Sourcegraph that we’re not using, and use this to help define best practices for the team/domain.
          </li>
        </ul>
      </td>
      <td class="behaviors delivery">
        <ul>
          <li>You independently scope and implement solutions to complex, loosely-defined problems.</li>
          <li>
            You estimate methodically, based on iterative learning and set realistic expectations/timelines that drive effort and support healthy work habits.
          </li>
          <li>
            When faced with roadblocks, you identify appropriate courses of action, engaging others or unblocking yourself as appropriate.
          </li>
          <li>
            You are accountable end-to-end on everything for which you take responsibility.
          </li>
          <li>
            You proactively identify areas for improvement and balance new work with the necessary mundane work needed to keep the team operating well to provide a good customer experience.
          </li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>You communicate technical issues and decisions clearly, bring clarity to discussions, and help drive things forward.</li>
          <li>You routinely drive improvements in team/company processes (retros, planning, etc).</li>
          <li>You consider the effects of your work and words on other teams and represent the team well in discussions with other teams, customers, and stakeholders.</li>
          <li>You share your experience and expertise to help others grow, through mentoring and coaching where possible.</li>
          <li>You proactively propose additions and changes to the team’s forward plans.</li>
        </ul>
      </td>
    </tr>
    <!-- IC4 -->
    <tr>
      <th id="ic4" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic4"></a><abbr title="Individual Contributor">IC</abbr>4</th>
      <td colspan="3" class="level-summary">You are a particularly experienced, intentional, and  impactful contributor.</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Your communication, product, technical, collaboration, and facilitation expertise benefits others on the support team.
        </div>
      </td>
      <td class="category-summary delivery">
        <div class="wrapper">
          You support the managers in ensuring that the team is always working on the right problems with the right scope given higher level goals, and that the team is reliably delivering on time.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          You are an exemplary communicator who drives cross-functional collaboration efforts and the long-term direction of the support team.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>You make high-quality decisions (including technical), leading team-sized tasks that affect one or more complex systems or mission-critical areas.</li>
          <li>You consistently incorporate non-technical factors into technical decisions and weigh them appropriately.</li>
          <li>
            You have proficiency beyond your domain areas, understanding more about business operations and/or engineering scope/efforts.
          </li>
          <li>
            You invest in technology, tools, and processes that benefit your entire team.
          </li>
          <li>
            You lift your teammates through feedback, mentorship, and sharing reusable patterns.
          </li>
        </ul>
      </td>
      <td class="behaviors delivery">
        <ul>
          <li>You independently scope and implement solutions to extremely complex problems, and identify the problems to be solved.</li>
          <li>You remain composed in: ambiguous situations, challenging situations, situations involving multiple stakeholders, etc.</li>
          <li>You intentionally and proactively align your work around a deep understanding of how people use the products/customer experience.</li>
          <li>You proactively identify areas for improvement beyond the scope of our team and contribute meaningfully to solutions while continuing to deliver on our team’s goals.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>You are thoughtfully (and with empathy) able to convince and challenge teammates and cross-functional stakeholders using valid expertise and respectful communication.</li>
          <li>You actively seek dissenting opinions, disconfirming evidence, etc.</li>
          <li>You share a long-term vision that influences the team’s go forward plans.</li>
          <li>You operate in a way that demonstrates self-awareness (you often identify feedback before anyone has to give it to you) and active intentionality (you have a plan before you communicate/act).</li>
        </ul>
      </td>
    </tr>
    <!-- IC5 -->
    <tr>
       <th id="ic5" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic5"></a><abbr title="Individual Contributor">IC</abbr>5</th>
      <td colspan="3" class="level-summary">A different IC role from levels 1-4, with a focus on leadership without formal authority. This level is equivalent in impact to a manager, though what impact at this level looks like may vary more between individuals than at preceding levels.</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          You are a respected leader (even without authority) on the support team and beyond.
        </div>
      </td>
      <td class="category-summary delivery">
        <div class="wrapper">
          You define cross-team goals that align with top level company goals and ensure delivery to meet business needs.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          You are an exemplary collaborator and facilitator, within the team, cross-functionally, and with stakeholders regardless of their level in the organization.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>You help set the vision for the team and influence the broader  vision beyond the team.</li>
          <li>You initiate and drive cross-team projects that enable higher quality work.</li>
          <li>You provide oversight, coaching, and guidance through case/code reviews and other activities, both on or off the team.</li>
          <li>You act as a trusted advisor, drawing on functional expertise to inform customer-driven strategy.</li>
        </ul>
      </td>
      <td class="behaviors delivery">
        <ul>
          <li>You proactively identify areas for improvement at the org/company level.</li>
          <li>You suggest process and methodology improvements.</li>
          <li>You work closely with engineering and CE leadership to validate alignment between teams.</li>
          <li>scope, design, and deliver solutions for large, complex challenges.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>You provide domain/technical expertise internally and externally, informing what can be achieved.</li>
          <li>You guide others on effective collaboration, conflict resolution and improved communication.</li>
          <li>You regularly share knowledge and willingly present to large and/or senior audiences.</li>
          <li>You persuade and challenge customers and internal stakeholders, using valid expertise and respectful communication.</li>
        </ul>
      </td>
    </tr>
    <!-- IC6 -->
    <tr>
      <th id="ic6" scope="row" class="level"><a class="anchor" href="#ic6"></a><abbr title="Individual Contributor">IC</abbr>6</th>
      <td colspan="3" rowspan="2" class="tbd">
        <p>
          While we haven’t yet finalized the descriptions of these levels at Sourcegraph, they would be equivalent in impact to a Support Director/Head of Support and Support VP, respectively. Like IC5, these are different roles than the levels preceding them based not only on performance, but also company need, and (like IC5) what impact at this level looks like may vary more from person to person than at preceding levels.
        </p>
      </td>
    </tr>
    <tr>
      <th id="ic7" scope="row" class="level"><a class="anchor" href="#ic7"></a><abbr title="Individual Contributor">IC</abbr>7</th>
    </tr>
  </tbody>

</table>
