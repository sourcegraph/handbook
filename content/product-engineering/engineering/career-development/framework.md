# Sourcegraph engineering career development framework

Our career development framework is here to help you understand the expectations of your role, and to provide a common language for you and your manager to discuss and plan your career growth. It is also an important part of our larger goal of ensuring everyone is equitably recognized for the impact they have at work, and to reduce bias in promotions and hiring.

## What are the expectations of my role?

There are currently seven levels for software engineers at Sourcegraph. A level is composed of three categories, each with a summary statement and several example behaviors. These categories are:

- Proficiency
- Execution
- Teamwork

It's important to understand that what is listed in the level descriptions are example behaviors, and not checkboxes for promotion. Doing everything listed there is neither necessary nor sufficient for a promotion.
The expectation is that you demonstrate a _level of impact_ consistent with each of the category descriptions for your level.
The [magnitude of your impact](https://about.sourcegraph.com/blog/software-engineer-career-paths/) is ultimately the measure of your career growth.

In most cases, a level builds on the expectations from the preceding levels: someone at level 2 must also meet the level 1 expectations.
In addition to what is listed there, we expect engineers at all levels to exhibit [our values](../../../company/values.md).

Rather than precede each bullet point with "Consistently", we leave it as implicit.

The level descriptions correspond to the start of the level, so that if an IC has a level N impact in all categories, they should then be promoted to level N (and not before). Or to put it another way, the level descriptions state the minimum expectations.

These are the expectations for ICs _after they have completed their onboarding_. Some of these expectations (such as around communication) would start on day 1, but others (such as expertise in the codebase) would not be expected until they are fully ramped up.

In line with our _continuously grow_ company value, we expect every engineer to eventually reach at least level 3.
It is the responsibility of your manager to track this, and to ensure that you are given the support and opportunities needed for career growth.

## When do I get promoted?

When your manager can make the case that you’ve had at least one quarter of high performance at your current level, and one quarter performing at the next level, in all three of the categories. It takes time to demonstrate the “consistently” implicit in the expectations, and we don’t want to promote anyone to a level in which they will struggle.

Promotions from one level to another are considered in our quarterly [talent review](talent-review-process.md).
An in-band compensation increase (while staying at the same level) can happen at any time, in recognition of exceeding expectations in your current level without having yet met the expectations of the next level.

To learn more, see ["Considerations for promotion" in our talent review process](talent-review-process.md#considerations-for-promotion).

<style>
  .container {
    --width: 1300px;
  }
  .levels-table {
    --proficiency-color: var(--sg-vivid-violet);
    --execution-color: var(--sg-sky-blue);
    --teamwork-color: var(--sg-vermillion);

    table-layout: fixed;
  }
  .proficiency {
    --category-color: var(--proficiency-color);
  }
  .execution {
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
      <th scope="col" class="category-title execution sticky">Execution</th>
      <th scope="col" class="category-title teamwork sticky">Teamwork</th>
    </tr>
  </thead>

  <tbody>
    <!-- IC1 -->
    <tr>
      <th id="ic1" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic1"></a><abbr title="Individual Contributor">IC</abbr>1</th>
      <td colspan="3" class="level-summary">An engineer focused on learning, growth, and establishing themselves as a contributing teammate.</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Possesses and demonstrates core technical skills, while focusing on learning and improving in everything they do.
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Able to achieve positive outcomes on small well defined problems.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          An engaged member of their team.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>Contributes technical solutions to well-scoped tasks, with guidance.</li>
          <li>Demonstrates the essentials needed to do work in their domain.</li>
          <li>Reviews code for their teammates by asking questions and applying what they learned.</li>
          <li>Integrates feedback from teammates to deliver high-quality solutions.</li>
          <li>Increases their technical knowledge through reading, observing, and doing.</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Manages their own time and wellbeing, meeting commitments while finding balance and creating rest.</li>
          <li>Asks for guidance in unfamiliar areas or for underspecified tasks. Speaks up if not comfortable with the scopes or timelines.</li>
          <li>Exercises user empathy, whether their users are internal or external.</li>
          <li>Recognizes when they’re blocked and asks for support.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Actively asks teammates questions to seek feedback and clarify, including cross-functionally (e.g. Design and Product).</li>
          <li>Participates and demonstrates curiosity in team meetings.</li>
          <li>Follows documented team processes and helps keep the handbook up-to-date.</li>
          <li>Communicates empathetically.</li>
          <li>Is flexible to change.</li>
        </ul>
      </td>
    </tr>
    <!-- IC2 -->
    <tr>
      <th id="ic2" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic2"></a><abbr title="Individual Contributor">IC</abbr>2</th>
      <td colspan="3" class="level-summary">A solid and autonomous contributor, executor, and collaborator.</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          A solid technical contributor who produces high-quality code.
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Autonomously executes on the team’s short-term goals and actively contributes to project planning.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          A solid communicator and proactive collaborator.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>
            Proficient in core technical skills of their primary focus area, while
            continuing to develop proficiency in some aspects.
          </li>
          <li>Writes maintainable, well-tested code that aligns with the style and practices of the team/codebase.</li>
          <li>Can explain the reasoning and trade-offs behind their technical decisions.</li>
          <li>Provides helpful, timely code reviews.</li>
          <li>Invests in their own productivity; willingly explores new tools, skills, and areas of the codebase.</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Breaks down tasks, plans, estimates and cuts scope as appropriate to deliver reliably.</li>
          <li>Prioritizes their own work in alignment with team goals.</li>
          <li>Detects problems in requirements and actively engages to resolve them.</li>
          <li>Has understanding of how users interact with their product/infrastructure.</li>
          <li>Reliably delivers results on time.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>
            Communicates clearly (in meetings and asynchronously), escalating blockers
            quickly, clarifying requirements and sharing assumptions and context.
          </li>
          <li>
            Exemplifies team processes; participates in identifying problems, suggesting
            improvements, and helping with solutions.
          </li>
          <li>
            Proactively adds documentation to help others; is learning to present
            internally and externally.
          </li>
          <li>
            Gives timely, helpful feedback to others and trusts them to decide to what
            extent to incorporate it.
          </li>
          <li>
            Helps onboarding and orienting new team members; mentors more junior team
            members where possible.
          </li>
          <li>
            Participates in the hiring process where possible, conducting interviews
            (with training) and writing helpful feedback.
          </li>
        </ul>
      </td>
    </tr>
    <!-- IC3 -->
    <tr>
      <th id="ic3" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic3"></a><abbr title="Individual Contributor">IC</abbr>3</th>
      <td colspan="3" class="level-summary">An experienced, strong individual contributor (<q>Senior</q> equivalent).</td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          An experienced, versatile technical contributor who demonstrates foresight in technical decision making.
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Independently scopes and implements solutions to complex, loosely-defined problems.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          A strong, clear communicator, making collaboration happen where it should to move their team forward and a particularly valuable contributor to discussions.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>
            Expert in their domain: deep understanding of their team’s code, debugs
            their team’s code expertly, and has mastered their tools (Git, $EDITOR,
            profiler, etc).
          </li>
          <li>Willingly dives into unfamiliar areas of the codebase.</li>
          <li>
            Finds technical solutions to open-ended, potentially ambiguously defined
            problems.
          </li>
          <li>
            When finding solutions, identifies the core problems that need to be solved,
            as well as goals, risks, trade-offs, customer impact, technical debt,
            non-technical factors, etc.
          </li>
          <li>
            Gives feedback on higher-level aspects (architecture, scalability,
            customer-focus, etc.) in code reviews and RFCs, holding teammates to the
            same high standard they set for themselves.
          </li>
          <li>
            Maintains awareness of approaches outside of Sourcegraph that we're not
            using, and uses this to help define best practices for the team/domain.
          </li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Independently scopes and implements solutions to complex, loosely-defined problems.</li>
          <li>
            Estimates methodically, based on iterative learning. Sets realistic
            deadlines that drive effort but support healthy work habits. Cuts scope as
            needed, mitigating risk by shipping frequently.
          </li>
          <li>
            When faced with roadblocks, identifies appropriate courses of action,
            engaging others or unblocking themselves as appropriate.
          </li>
          <li>
            Accountable end-to-end, through planning, shipping, cleanup, and
            maintenance. Proactive about potential issues without overengineering.
          </li>
          <li>
            Proactively identifies areas for improvement and improves common code,
            balancing new feature development with refactoring, upgrades, cleanups, etc.
          </li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Communicates technical issues and decisions clearly, brings clarity to discussions and helps drive them forward.</li>
          <li>Routinely drives improvements in team/company processes (retros, testing, on-call, planning, etc.)</li>
          <li>Considers effects of their work and words on other teams and represents the team well in discussions with other teams, customers, and stakeholders.</li>
          <li>Shares their experience and expertise to help others grow, through mentoring and coaching more junior engineers where possible, insightful code/design/RFC reviews, etc.</li>
          <li>Proactively proposes additions and changes to the team’s roadmap.</li>
        </ul>
      </td>
    </tr>
    <!-- IC4 -->
    <tr>
      <th id="ic4" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic4"></a><abbr title="Individual Contributor">IC</abbr>4</th>
      <td colspan="3" class="level-summary">
        A particularly experienced, impactful contributor.<br>
        IC4 is the highest level that an engineer can get to based solely on their impact. Beyond IC4, both impact and business need determine the availability of those positions. 
      </td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          An engineer whose technical expertise benefits their entire team.
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Supports the EM and PM in ensuring that the team is always working on the right problems with the right scope given higher level goals, and that the team is reliably delivering on time.
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          A very strong communicator who drives cross-functional collaboration efforts and the long-term direction of their team.
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>High-quality technical decision making, leading team-sized tasks that affect one or more complex systems or mission-critical areas.</li>
          <li>Consistently incorporates non-technical factors into technical decisions and weights them appropriately.</li>
          <li>
            Proficiency beyond their domain: broad understanding of our architecture,
            debugs expertly across the broader codebase, advises on broader technical
            issues, etc.
          </li>
          <li>
            Invests in technology, tools, and processes that benefit their entire team,
            and lifts teammates through feedback, mentorship, and sharing reusable
            patterns.
          </li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Independently scopes and implements solutions to extremely complex problems, and identifies the problems to be solved.</li>
          <li>Remains composed in: ambiguous situations, challenging situations, situations involving multiple stakeholders, etc.</li>
          <li>Intentionally and proactively aligns their work around a deep understanding of how people use the products/services they build.</li>
          <li>Proactively identifies areas for improvement beyond the scope of their team, and contributes meaningfully to solutions while continuing to deliver on their team’s goals.</li>
          <li>Works closely with EM/PM to validate technical feasibility of team roadmap.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Effectively able to convince and challenge teammates and cross-functional stakeholders using valid expertise and respectful communication.</li>
          <li>Actively seeks dissenting opinions, disconfirming evidence, etc.</li>
          <li>Shares a long-term vision that influences the team’s roadmap.</li>
        </ul>
      </td>
    </tr>
    <!-- IC5 -->
    <tr>
      <th id="ic5" scope="row" rowspan="2" class="level"><a class="anchor" href="#ic5"></a><abbr title="Individual Contributor">IC</abbr>5</th>
      <td colspan="3" class="level-summary">
        IC5 is a different role from levels 1-4.<br>
        What impact looks like at this level varies between individuals.<br>
        We recommend <a href="https://drive.google.com/drive/folders/1fnw5gmlLDDZb9wDodY3KfcTaM3OOQL7G" target="_blank" rel="noopener noreferrer">our company’s copy of “Staff Engineer” by Will Larson</a> as reading material.
      </td>
    </tr>
    <tr>
      <td colspan="3" class="tbd">
        <p>
          Rather than being defined through proficiency, execution and teamwork, IC5 is differentiated from levels 1-4 by a specific <strong>business need</strong> for the role, and an associated set of <strong>expectations</strong>.
        </p>
        <ul>
          <li><strong>Business need</strong>: in some cases the business will need an IC to and solve cross-cutting technical problems at the org or company level, willing to navigate across orgs as new problems are identified. In others, it will need a deep technical expert for a specific area, capable of devising solutions to highly complex and specialized technical problems.</li>
          <li><strong>Expectations</strong>: for some IC5s, expectations might include participating in engineering calibration, because they are expected to define hiring needs for their team. For others, it might be building and owning a roadmap.</li>
        </ul>
        <p>
          The business need and associated expectations are unique to each IC5 position. IC5 engineers are publicly identified as such, and the business need and expectations associated with their role are documented in the handbook.
        </p>
        <p>
          Unlike IC4, IC5 is not a terminal level. Transition to the IC5 level is contingent on the existence of a business need for the role.
        </p>
      </td>
    </tr>
    <!-- IC6 -->
    <tr>
      <th id="ic6" scope="row" class="level"><a class="anchor" href="#ic6"></a><abbr title="Individual Contributor">IC</abbr>6</th>
      <td colspan="3" rowspan="2" class="tbd">
        <p>
          We haven't yet finalized the descriptions of these levels at Sourcegraph.
          Like <a href="#ic5">IC5</a>, these are different <strong>roles</strong> than the levels preceding it based not only on performance, but also business need, and (like <a href="#ic5">IC5</a>) what impact at this level looks like may vary more from person to person than at preceding levels.
        </p>
      </td>
    </tr>
    <tr>
      <th id="ic7" scope="row" class="level"><a class="anchor" href="#ic7"></a><abbr title="Individual Contributor">IC</abbr>7</th>
    </tr>
  </tbody>

</table>
