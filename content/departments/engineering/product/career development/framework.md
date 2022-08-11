# Sourcegraph product career development framework

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
  Safari doesn't make the IC6 row equal size automatically, so give it explicit height.
  Note that min-height also doesn't work.
  */
  th#ic6 {
    height: 11rem;
  }
</style>

## Levels

<table class="levels-table">

  <thead>
    <tr>
      <th scope="col" class="sticky">Level</th>
      <th scope="col" class="category-title proficiency sticky">IC1: Associate PM</th>
      <th scope="col" class="category-title execution sticky">IC2: PM</th>
      <th scope="col" class="category-title teamwork sticky">IC3: PM</th>
      <th scope="col" class="category-title teamwork sticky">IC4: Senior PM</th>
      <th scope="col" class="category-title teamwork sticky">IC5: Staff PM</th>
    </tr>
  </thead>

  <tbody>
    <!-- General Overview -->
    <tr>
      <th id="gen-overview" scope="row" rowspan="5" class="level"><a class="anchor" href="#ic1"></a>General Overview</th>
      <!-- <td colspan="3" class="level-summary">An engineer focused on learning, growth, and establishing themselves as a contributing teammate.</td> -->
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary ic1">
        <div class="wrapper">
          An entry level PM who can execute on a highly scoped problem with strong support from engineering counterparts.
        </div>
      </td>
      <td class="category-summary ic2">
        <div class="wrapper">
          A junior PM capable of owning a small piece of a highly ambiguous project that impacts a specific feature within Sourcegraph.
        </div>
      </td>
      <td class="category-summary ic3">
        <div class="wrapper">
          A mid-career PM who is confident driving an established feature or product from beginning to end.
        </div>
      </td>
      <td class="category-summary ic4">
        <div class="wrapper">
          A PM capable of executing an ambiguous, cross-functional project to completion that shapes the future of Sourcegraph's business.
        </div>
      </td>
      <td class="category-summary ic5">
        <div class="wrapper">
          A very experienced PM, capable of efficiently driving multiple cross-functional projects in a highly autonomous way while understanding the impact of their work to Sourcegraph and the broad market as a whole.
        </div>
      </td>
    </tr>
    <!-- <tr class="behaviors-row">
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
    </tr> -->
    <!-- Strategy/Proficiency -->
    <tr>
      <th id="ic2" scope="row" rowspan="1" class="level"><a class="anchor" href="#ic2"></a>Strategy/Proficiency</th>
      <td colspan="5" class="level-summary">Business/GTM Strategy</td>
    </tr>
    <tr class="business-gtm-row">
      <td class="business-gtm ic1">
        <div class="wrapper">
          I understand how Sourcegraph makes money and how our business KPIs measure the long-term success of the business.
        </div>
      </td>
      <td class="business-gtm ic2">
        <div class="wrapper">
        </div>
      </td>
      <td class="business-gtm ic3">
        <div class="wrapper">
          I understand how the company's GTM strategy impacts the product experience.
        </div>
      </td>
      <td class="business-gtm ic4">
        <div class="wrapper">
          I partner with the GTM team to support GTM growth within existing features.
        </div>
      </td>
      <td class="business-gtm ic5">
        <div class="wrapper">
          I leverage new product opportunities to expand Sourcegraph into new GTM channels/markets and kickstart new levers of growth.
        </div>
      </td>
    </tr>
    <tr>
      <!-- <th id="ic2" scope="row" rowspan="5" class="level"><a class="anchor" href="#ic2"></a>Strategy/Proficiency</th> -->
      <td colspan="5" class="level-summary">Industry/Market Knowledge</td>
    </tr>
    <tr class="industry-market-row">
      <td class="ic1">
        <div class="wrapper">
        I understand the category that our product operates in and the key customer segments we target.
        </div>
      </td>
      <td class="ic2">
        <div class="wrapper">
        I understand the category our product operates in and our key direct competitors. I understand the high-level problems our customers have and how Sourcegraph solves them.
        </div>
      </td>
      <td class="ic3">
        <div class="wrapper">
        I understand the direct key competitors in our category and how we compare against them. I understand specific challenges our customers face and how our product(s) address these.
        </div>
      </td>
      <td class="ic4">
        <div class="wrapper">
        I understand direct and indirect competitors in our category, how we can compare and where we could invest to win. I have built relationships with key customers, understand their specific needs and work collaboratively with them to build solutions.
        </div>
      </td>
      <td class="ic5">
        <div class="wrapper">
        I understand and identify where there are opportunities in adjacent product categories, or creating new product categories that would benefit our business.
        </div>
      </td>
    </tr>
    <!-- IC3 -->
    <!-- <tr>
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
        IC4 is the highest level that an engineer can get to based solely on their performance. The availability of positions beyond IC4 is based on both impact and business need.
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
        IC5 is a different role from levels 1–4.<br>
        What impact looks like at this level varies between individuals.<br>
      </td>
    </tr>
    <tr>
      <td colspan="3" class="tbd">
      </td>
    </tr>
    <!-- IC6 -->
    <tr>
      <th id="ic6" scope="row" class="level"><a class="anchor" href="#ic6"></a><abbr title="Individual Contributor">IC</abbr>6</th>
      <td colspan="3" class="tbd">
        <p>
          We haven't yet finalized the description of this level at Sourcegraph.
          Like <a href="#ic5">IC5</a>, this is a different <strong>role</strong> than the levels preceding it based not only on performance, but also business need, and (like <a href="#ic5">IC5</a>) what impact at this level looks like may vary more from person to person than at preceding levels.
        </p>
      </td>
    </tr> -->
  </tbody>

</table>