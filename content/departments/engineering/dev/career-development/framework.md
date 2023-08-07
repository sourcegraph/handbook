# Sourcegraph engineering career development framework

Our career development framework is here to help you understand the expectations of your role, and to provide a common language for you and your manager to discuss and plan your career growth. It is also an important part of our larger goal of ensuring everyone is equitably recognized for the impact they have at work, and to reduce bias in promotions and hiring.

## What are the expectations of my role?

There are currently six levels for software engineers at Sourcegraph. A level is composed of three categories, each with a summary statement and several example behaviors. These categories are:

- Proficiency: This is your demonstrated expertise on the skills relevant to your role and level. Proficiency changes in two ways as you progress in your career. You will increase your technical skills in both depth and breadth — often more heavily leaning on one or the other, but still growing both over time. Technical skills include, but are not limited to, quality of code and code reviews; knowledge of relevant technologies, code bases and tools; technical design skills. You will also add and grow other skills that make you a more effective contributor such as providing directional feedback within a relevant scope, giving feedback to others, and over time, setting scope by mapping between business goals, user needs, and technical solutions.
- Execution: This is knowing how and acting on what it takes to be productive and achieve the right outcomes for Sourcegraph. Effective execution is generally accompanied by achieving impactful outcomes, but the key element is the skills and consistency you demonstrate to achieve the outcomes, not the specifics of an individual outcome. As you grow in your career, your focus will move from personal productivity and impact within your team to helping broader groups productively reach broader goals.
- Teamwork: This is how you collaborate with others to make both them and yourself more effective. Teamwork includes how we interact with both teammates at Sourcegraph and external stakeholders such as our clients. At all levels we expect a professional and collaborative approach to teamwork. As you grow in your career, the span of people you regularly interact with will increase from your working group to multiple groups to stakeholders across and outside of the company. Your influence on our culture will grow from practitioner to champion to shaper.

It's important to understand that what is listed in the level descriptions are example behaviors, and not checkboxes for promotion. Doing everything listed there is neither necessary nor sufficient for a promotion.
The expectation is that you demonstrate a _level of impact_ consistent with each of the category descriptions for your level.
The [magnitude of your impact](https://about.sourcegraph.com/blog/software-engineer-career-paths/) is ultimately the measure of your career growth.

In most cases, a level builds on the expectations from the preceding levels: someone at level 2 must also meet the level 1 expectations.
In addition to what is listed there, we expect engineers at all levels to exhibit [our values](../../../../company-info-and-process/values/index.md).

Rather than precede each bullet point with "Consistently", we leave it as implicit.

The level descriptions correspond to the start of the level, so that if an IC has a level N impact in all categories, they should then be promoted to level N (and not before). Or to put it another way, the level descriptions state the minimum expectations.

These are the expectations for ICs _after they have completed their onboarding_. Some of these expectations (such as around communication) would start on day 1, but others (such as expertise in the codebase) would not be expected until they are fully ramped up.

We expect every engineer to eventually reach at least level 3.
It is the responsibility of your manager to track this, and to ensure that you are given the support and opportunities needed for career growth.

## When do I get promoted?

When your manager can make the case that you’ve had at least one quarter of high performance at your current level, and one quarter performing at the next level, in all three of the categories. It takes time to demonstrate the “consistently” implicit in the expectations, and we don’t want to promote anyone to a level in which they will struggle.

Promotions from one level to another are considered in our twice-yearly talent review.
An in-band compensation increase (while staying at the same level) can happen at any time, in recognition of exceeding expectations in your current level without having yet met the expectations of the next level.

## IC1 - IC6 Framework

<style>
.ic-arrows {
  display: flex;
  gap: 1rem;
}

.ic-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 85px;
  position: relative;
  background: black;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}

.ic-arrow:not(:first-child) {
  margin-left: -2rem;
}

.ic-arrow:before {
  content: "";
  background: var(--sg-sky-blue);
  height: calc(100% - 2px);
  width: calc(100% - 3px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}

.ic-arrow span {
  z-index: 2;
  color: white;
  position: relative;
}
</style>

<div class="ic-arrows" aria-label="Levels axis from IC1 to IC6">
  <div class="ic-arrow">
    <span>IC1</span>
  </div>
  <div class="ic-arrow">
    <span>IC2</span>
  </div>
  <div class="ic-arrow">
    <span>IC3</span>
  </div>
  <div class="ic-arrow">
    <span>IC4</span>
  </div>
  <div class="ic-arrow">
    <span>IC5</span>
  </div>
  <div class="ic-arrow">
    <span>IC6*</span>
  </div>
</div>

<small>_\* Coming soon_</small>

As an IC you'll progress on several axis:

- From individual contributions to team contributions to departments to company
- From tactical thinking to strategic thinking
- From "Can work alone for X days" to "can work along with 3 others for X months"
- From "Solves small problems" to "solves big problems" to "finds problems we need to solve"
- From "has a hard time dealing with ambiguity" to god-like-world-building-powers
- From practitioner to champion to shaper in regards to the influence on our culture

## IC Levels

<style>
  .container {
    --width: var(--container-width);
  }
</style>

<table class="levels-table">

  <thead>
    <tr>
      <th scope="col">Level</th>
      <th scope="col" class="category-title">Proficiency</th>
      <th scope="col" class="category-title">Execution</th>
      <th scope="col" class="category-title">Teamwork</th>
      <th scope="col" class="category-title">Additional Notes/Key Points/Examples</th>
    </tr>
  </thead>

  <tbody>
    <!-- IC1 -->
    <tr>
      <th id="ic1" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic1"></a><abbr title="Individual Contributor">IC</abbr>1</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
          <p>An engineer focused on learning, growth, and establishing themselves as a contributing teammate. Entry level.</p>
          <ul>
            <li><strong>Prerequisites:</strong> Minimum relevant bachelor degree, or equivalent related experience.</li>
            <li><strong>Years of experience:</strong> Typically 0-2</li>
          </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
          <li>Contributes technical solutions to well-scoped tasks, with guidance.</li>
          <li>Demonstrates the essentials needed to do work in their domain.</li>
          <li>Reviews code for their teammates by asking questions and applying what they learned.</li>
          <li>Integrates feedback from teammates to deliver high-quality solutions.</li>
          <li>Increases their technical knowledge through reading, observing, and doing.</li>
          <li>Familiar with our docs and knows how to efficiently acquire knowledge.</li>
          <li>Understands how Sourcegraph works @ the highest level.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Manages their own time and wellbeing, meeting commitments while finding balance and creating rest.</li>
          <li>Asks for guidance in unfamiliar areas or for underspecified tasks. Speaks up if not comfortable with the scopes or timelines.</li>
          <li>Exercises user empathy, whether their users are internal or external.</li>
          <li>Recognizes when they’re blocked and asks for support.</li>
          <li>Eager to learn and solve problems.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Actively asks teammates questions to seek feedback and clarify, including cross-functionally (e.g. Design and Product).</li>
          <li>Participates and demonstrates curiosity in team meetings.</li>
          <li>Follows documented team processes and helps keep the handbook up-to-date.</li>
          <li>Communicates empathetically.</li>
          <li>Is flexible to change.</li>
          <li>Reacts well to feedback and is able to quickly learn from it.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Entry level for professional careers. Still learning the role.</li>
          <li>Core skills limited; requires detailed direction.</li>
          <li>Focused on learning, growth, and establishing themselves as a contributing teammate.</li>
          <li>Analogy: rode in a boat once; knows what sailing is.</li>
        </ul>
      </td>
    </tr>
    <!-- IC2 -->
    <tr>
      <th id="ic2" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic2"></a><abbr title="Individual Contributor">IC</abbr>2</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
          <p>A solid and autonomous contributor, executor, and collaborator. Completes assignments which have clear, near-term objectives. Operates independently to perform routine tasks.</p>
          <ul>
            <li><strong>Prerequisites:</strong> Knows the organization and understands the group’s basic terminology and techniques.</li>
            <li><strong>Years of experience:</strong> Typically 2-5</li>
          </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
          <li>
            Proficient in core technical skills of their primary focus area, while
            continuing to develop proficiency in some aspects.
          </li>
          <li>Writes maintainable, well-tested code that aligns with the style and practices of the team/codebase.</li>
          <li>Can explain the reasoning and trade-offs behind their technical decisions.</li>
          <li>Provides helpful, timely code reviews.</li>
          <li>Invests in their own productivity; willingly explores new tools, skills, and areas of the codebase.</li>
          <li>Not scared of foreign code and embraces it as a learning moment.</li>
          <li>Able to manage their time appropriately to encourage efficiency.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Breaks down tasks, plans, estimates and cuts scope as appropriate to deliver reliably.</li>
          <li>Prioritizes their own work in alignment with team goals.</li>
          <li>Detects problems in requirements and actively engages to resolve them.</li>
          <li>Has understanding of how users interact with their product/infrastructure.</li>
          <li>Reliably delivers results on time.</li>
          <li>Ability to unblock themselves even if that means asking for help.</li>
          <li>Self-sufficient and able to deliver without much guidance including being able to seek and lead smaller projects.</li>
        </ul>
      </td>
      <td class="behaviors">
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
          <li>Upholds team culture and levels the technical proficiency on the team up.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Task oriented, but gaining/demonstrating independence.Core skills functional.</li>
          <li>Requires some direction.</li>
          <li>Effectively delivers work without complaint; communicates being blocked; seeks help and communicates outcome.</li>
          <li>Analogy: learns about sailing; takes orders on specific tasks (grab that rope).</li>
        </ul>
      </td>
    </tr>
    <!-- IC3 -->
    <tr>
      <th id="ic3" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic3"></a><abbr title="Individual Contributor">IC</abbr>3</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
        <p>An experienced, strong individual contributor (Senior equivalent). Represents an area of specialization within the organization. Independently resolves complex problems. Contributes to cross-functional projects. Trains others.</p>
        <ul>
          <li><strong>Prerequisites:</strong> Key differentiator from IC2 is the ability to prioritize and work under broad direction. Can resolve new and complex problems within an area of specialization.</li>
          <li><strong>Years of experience:</strong> Typically 5-8</li>
        </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
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
          <li>Exposed and comfortable in leading larger projects.</li>
        </ul>
      </td>
      <td class="behaviors">
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
          <li>Communicates progress and status updates to stakeholders.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Communicates technical issues and decisions clearly, brings clarity to discussions and helps drive them forward.</li>
          <li>Routinely drives improvements in team/company processes (retros, testing, on-call, planning, etc.)</li>
          <li>Considers effects of their work and words on other teams and represents the team well in discussions with other teams, customers, and stakeholders.</li>
          <li>Shares their experience and expertise to help others grow, through mentoring and coaching more junior engineers where possible, insightful code/design/RFC reviews, etc.</li>
          <li>Proactively proposes additions and changes to the team’s roadmap.</li>
          <li> Mentors junior engineers and uplevels team culture.</li>
          <li>Actively unblocks teammates.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Problem solver. Operates autonomously.</li>
          <li>Strong core skills, requires minimal direction.</li>
          <li>Analogy: helps sail the boat; knows basic roping techniques, does basic tasks without help.</li>
        </ul>
      </td>
    </tr>
    <!-- IC4 -->
    <tr>
      <th id="ic4" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic4"></a><abbr title="Individual Contributor">IC</abbr>4</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
        <p>A particularly experienced, impactful contributor. Brings domain expertise to complex projects. Role requires contribution outside the direct area of responsibility. Leads interdepartmental projects.</p>
        <ul>
          <li><strong>Prerequisites:</strong> Has domain-specific knowledge and expertise. Key differentiator from IC3 is the established track record of resolving complex problems and the demonstrated ability to lead cross-functional projects.</li>
          <li><strong>Years of experience:</strong> Typically 8+</li>
        </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
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
          <li>Owns a project from the start including running it by a customer.</li>
          <li>Able to make trade-offs knowing the impact that it will have.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Supports the EM and PM in ensuring that the team is always working on the right problems with the right scope given higher level goals, and that the team is reliably delivering on time.</li>
          <li>Accountable for the team's work quality and professionalism to ensure the team delivers high quality and work diligently to limit the problems for our customers or other teams.</li>
          <li>Independently scopes and implements solutions to extremely complex problems, and identifies the problems to be solved.</li>
          <li>Confident in: ambiguous situations, challenging situations, situations involving multiple stakeholders, etc.</li>
          <li>Intentionally and proactively aligns their work around a deep understanding of how people use the products/services they build.</li>
          <li>Proactively identifies areas for improvement beyond the scope of their team, and contributes meaningfully to solutions while continuing to deliver on their team’s goals.</li>
          <li>Works closely with EM/PM to validate technical feasibility of team roadmap.</li>
          <li>Identifies problems that need to be solved and executes on them.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Effectively able to convince and challenge teammates and cross-functional stakeholders using valid expertise and respectful communication.</li>
          <li>Actively seeks dissenting opinions, disconfirming evidence, etc.</li>
          <li>Shares a long-term vision that influences the team’s roadmap.</li>
          <li>Helps retain customer relationships and incorporates solutions/suggestions from them.</li>
          <li>Ability to delegate and clearly communicate capacity needed to work on those areas.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>“Go-to” expert. Usually project leader.</li>
          <li>Contributes outside direct area of responsibility.</li>
          <li>Can hand off projects to other team members successfully</li>
          <li>Analogy: sails smaller sailboats solo; knows advanced rigging techniques, confident sailor in most weather.</li>
        </ul>
      </td>
    </tr>
    <!-- IC5 -->
    <tr>
      <th id="ic5" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic5"></a><abbr title="Individual Contributor">IC</abbr>5</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
          <p>A Staff Engineer, responsible for identifying impactful problems aligned with business objectives that need to be solved and then driving the solution to those problems. Provides innovative breakthroughs to toughest challenges. Influences management on strategic direction. Will have an impact on multiple organizations, countries/regions and disciplines as well as outside companies. Not all career paths include level 5.</p>
          <ul>
            <li><strong>Prerequisites:</strong> Has unique knowledge and the ability to apply that knowledge to a broader context.</li>
            <li><strong>Years of experience:</strong> Not essential</li>
          </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
          <li>Sets the technical vision for their team, and influences the broader technical vision.</li>
          <li>Initiates and drives projects with broad/deep impact that enable higher quality work.</li>
          <li>Provides oversight, coaching, and guidance through code and design reviews, both on and off the team.</li>
          <li>Acts as a trusted advisor, drawing on functional expertise to inform customer-driven strategy.</li>
          <li>Demonstrates deep domain knowledge where teammates seek their advice on domain/code.</li>
          <li>Responsible for working on the right thing.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Proactively identifies areas for improvement across engineering. Suggests process and methodology improvements.</li>
          <li>Works closely with Engineering/Product leadership to validate alignment of team roadmaps within their org.</li>
          <li>Independently scopes, designs, and delivers solutions for large, complex challenges.</li>
          <li>Operates with calm and grace in ambiguous/uncertain situations. Does not shy away from taking calculated risks.</li>
          <li>Identifies company wide trends and acts on risks.</li>
          <li>Accountable for business outcomes.</li>
          <li>Accountable for the team's work quality and professionalism to ensure the team delivers high quality and work diligently to limit the problems for our customers or other teams.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Provides technical expertise internally and externally, informing what can be achieved.</li>
          <li>Regularly shares knowledge to influence and up-level large and/or senior audiences.</li>
          <li>Persuades and challenges clients and internal stakeholders, using valid expertise and respectful communication.</li>
          <li>Responsive to a variety of unexpected requests for advice or consultation; gracefully handles more frequent context-switching.</li>
          <li>Enables those around them to be successful.</li>
          <li>Proactively provides feedback and flags concerns that are going on within the org.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
          <li>Deep expertise/unique knowledge.Broad impact, broad context.</li>
          <li>Provides breakthroughs & requires no direction.</li>
          <li>Partners regularly with the exec team.</li>
          <li>Analogy: occasionally takes the helm; navigates rough waters; knows how to sail different types of boats.</li>
        </ul>
      </td>
    </tr>
    <!-- IC6 -->
    <tr>
      <th id="ic6" scope="row" class="level"><a class="anchor" href="#ic6"></a><abbr title="Individual Contributor">IC</abbr>6</th>
      <td colspan="4" class="tbd">
        <p>
          Senior Staff Engineer. We haven't yet finalized the description of this level at Sourcegraph.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Management Levels

<style>
  .container {
    --width: var(--container-width);
  }
</style>

<table class="levels-table">

  <thead>
    <tr>
      <th scope="col">Level</th>
      <th scope="col" class="category-title">Proficiency</th>
      <th scope="col" class="category-title">Execution</th>
      <th scope="col" class="category-title">Teamwork</th>
      <th scope="col" class="category-title">Additional Notes/Key Points/Examples</th>
    </tr>
  </thead>

  <tbody>
    <!-- M3 -->
    <tr>
      <th id="m3" scope="row" rowspan="3" class="level"><a class="anchor" href="#m3"></a><abbr title="Manager">M</abbr>3</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
          <p>Accountable for the performance and results of a small team of professional individual contributors..</p>
          <ul>
            <li><strong>Years of experience:</strong> Typically 0-2</li>
          </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
<li>Has IC4 equivalent technical knowledge.</li>
<li>Understands the technical aspects of the team they manage.</li>
<li>Provides technical guidance to the team.</li>
<li>Still writes some code.</li>
<li>Ensures work is done to a high technical standard.</li>
<li>Follows management best practices including regular 1:1s, team meetings, planning and retrospectives.</li>
<li>Delivers feedback on career growth and impact review results.</li>
<li>Assists reports in setting goals for both impact and personal growth.</li>
<li>Builds their team through effective hiring and onboarding.</li>
<li>Proactively manages reports who do not meet our high performance standards.</li>
<li>Establishes a culture and processes that promote good decision-making.</li>
<li>Delegates work effectively and sets clear expectations for ownership and execution.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
     <li>Operates a single area or a couple of smaller areas of our services, with one or two teams with several individual contributors who report to you.</li>
<li>Responsible for the operational, people, and roadmap aspects of your area.</li>
<li>Focused on the operational details of your area, understanding the needs of your customers, and ensuring your team is performing effectively to serve those needs.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Has IC4 equivalent teamwork expectations.</li>
<li>Proactively builds teams by implementing team processes and creating opportunities for teammates to connect.</li>
<li>Ensures team members are happy and engaged, as measured by impact reviews.
<li>Proactively resolves interpersonal conflicts.</li>
<li>Collaborates with cross-functional partners to balance product needs with technical feasibility.</li>
<li>Effectively able to convince and challenge teammates and cross-functional stakeholders using valid expertise and respectful communication.</li>
<li>Actively seeks dissenting opinions, disconfirming evidence, etc.</li>
<li>Shares a long-term vision that influences the team’s roadmap.</li>
<li>Helps retain customer relationships and incorporates solutions/suggestions from them.</li>
<li>Ability to delegate and clearly communicate capacity needed to work on those areas.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
   <li>Manages a one or two teams team of individual contributor professionals.Greater than 50% of time spent on manager duties vs. individual contribution.</li>
<li>Responsible for managing teammates performance and annual impact reviews.</li>
<li>Analogy: captain of a smaller crew; takes people on day trips.</li>
        </ul>
      </td>
    </tr>
    <!-- M4 -->
    <tr>
      <th id="m4" scope="row" rowspan="3" class="level"><a class="anchor" href="#m4"></a><abbr title="Management">M</abbr>4</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
          <p>Accountable for performance and results of a medium sized team or multiple small teams.</p>
          <ul>
            <li><strong>Years of experience:</strong> Typically 2+</li>
          </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
<li>Has IC5 equivalent technical knowledge.</li>
<li>Possesses a strong technical understanding of their team's systems and a high-level understanding of our technical systems.</li>
<li>Provides technical guidance to their teams and other teams.</li>
<li>Ensures work is done to a high technical standard and helps define those standards.</li>
<li>Still writes code (per the Sourcegraph expectation that everyone writes code) but not necessarily on the critical path for projects.</li>
<li>Establishes high standards for development and architecture.</li>
<li>Develops team capabilities through training and strategic hiring goals.</li>
<li>Proactively cultivates leadership skills in team members.</li>
<li>Defines team goals and strategies that align with broader organizational goals.</li>
<li>Translates those goals and strategies into effective roadmaps for the team.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Operates a single complex area or a couple of medium sized areas of our services, with one or two teams with several individual contributors who report to you.</li>
<li>Continually improve and expand the operational footprint of your area as complexity/scope increases.</li>
<li>Effective at driving debate and goal setting with the manager team.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Has IC5 equivalent teamwork expectations.</li>
<li>Set the bar for operational, people, and roadmap aspects of your area and advise/coach other managers effectively on the process.</li>
<li>Coordinates priorities and commitments between teams to ensure the successful delivery of goals.</li>
<li>Develops strong technical leads to oversee the day-to-day of their teams.</li>
<li>Provides technical expertise internally and externally, informing what can be achieved.</li>
<li>Regularly shares knowledge to influence and up-level large and/or senior audiences.</li>
<li>Persuades and challenges clients and internal stakeholders, using valid expertise and respectful communication.</li>
<li>Responsive to a variety of unexpected requests for advice or consultation; gracefully handles more frequent context-switching.</li>
<li>Enables those around them to be successful.</li>
<li>Proactively provides feedback and flags concerns that are going on within the org.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Leads a medium-to-large sized team.</li>
<li>Responsible for managing teammates performance and annual impact reviews.</li>
<li>Individuals are more seasoned and have broader influence than M3.</li>
<li>Analogy: captain of a ship; takes mid-sized vessels on longer voyages through bumpy water (strong tactical decision-maker, handles unforeseen issues).</li>
        </ul>
      </td>
    </tr>
    <!-- M5 -->
    <tr>
      <th id="M5" scope="row" rowspan="3" class="level"><a class="anchor" href="#m5"></a><abbr title="Manager">M</abbr>5</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
        <p>Accountable for the performance, results and strategic direction of a department.</p>
        <ul>
          <li><strong>Years of experience:</strong> Typically 4+</li>
        </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
        <li>Technical expectations in line with M4.</li>
<li>Stays up-to-date on industry trends and their impact on the business.</li>
<li>Generally manages managers.</li>
<li>Define goals and strategies for achieving those goals in a thoughtful and persuasive way.</li>
<li>Translates goals and strategies into effective roadmaps that coordinate efforts across teams, including those outside of their direct management.</li>
<li>Analyzes and communicates engineering and business tradeoffs.</li>
<li>Occasionally represents the company externally.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Accountable for the performance and results of a large organization, such as a regional function, a large product line, large sales areas or a global job family.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Provides leadership and mentoring to expert level individual contributors.</li>
<li>Hire and develop your teammates effectively.</li>
<li>Primarily focuses on cross-functional and cross-team collaboration.</li>
<li>Accountable for team building within teams, but effectively delegates most of it to managers or TLs.</li>
<li>Coaches managers and technical leads in team-building skills.</li>
<li>Adapts organizational structures to make teams most effective at meeting goals
<li>Proactively minimizes organizational friction.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Typically reports to M6 or VP-level. Usually will be a “manager of other managers.</li>
<li>Sets priorities and the strategic direction of the department.</li>
<li>Role may have complexity such as multi-site/ country/ regions, or large team size.</li>
<li>Responsible for managing teammates performance and annual impact reviews.</li>
<li>Sizable financial responsibility relative to other roles within the function.</li>
<li>Requires very little direction.</li>
<li>Analogy: captain of a large ship; takes large vessels on long voyages through treacherous waters (strategic battle-tested leader, directs operational units).</li>
        </ul>
      </td>
    </tr>
    <!-- M6 -->
    <tr>
      <th id="m6" scope="row" rowspan="3" class="level"><a class="anchor" href="#m6"></a><abbr title="Manager">M</abbr>6</th>
    </tr>
    <tr>
      <td class="level-summary" colspan="4">
        <p>Accountable for the performance and results of a large organization, such as a regional function, a large product line, large sales areas or a global job family.</p>
        <ul>
          <li><strong>Years of experience:</strong> Typically 6+</li>
        </ul>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors">
        <ul>
<li>Technical expectations in line with M4.</li>
<li>Embraces and drives change; stays up-to-date on industry trends and their impact on the business.</li>
<li>Understands the current landscape of our business; plans with business needs in mind.</li>
<li>Establishes processes and structures that promote effective execution and accountability.</li>
<li>Develops a high-level technical vision aligned with business needs and secures buy-in.</li>
<li>Represents the company externally on a regular basis.</li>
<li>Defines growth and hiring goals.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Own a significant business area - entire service or multiple services.</li>
<li>Set the goals for and own the operational responsibility for the entire business area.</li> <li>Focus is on driving outcomes with significant impact through others.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Develop leaders in your area and you raise the bar on quality across the company.</li>
<li>Drive significant org changes across the company to improve throughput, retention and customer outcomes.</li>
<li>Collaborates with peers across the company to align goals across departments and disciplines.</li>
<li>Uses their visibility to set a strong example of our culture and values.</li>
        </ul>
      </td>
      <td class="behaviors">
        <ul>
<li>Likely reports to head of a major org (SVP or VP level).Often has very large team relative to the function.</li>
<li>Usually has global responsibility.</li>
<li>Likely has major financial oversight or influence on operational expenses.</li>
<li>Role is very strategic in nature with long-term impact.</li>
<li>Analogy: oversees several boat captains; capable of directing a fleet of large ships safely through a tropical storm (inspires action, coordinates simultaneous initiatives). Directs efforts of both air and ground search parties (Inspires action, coordinates simultaneous initiatives).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
