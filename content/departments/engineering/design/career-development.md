# Sourcegraph design career development framework

Our career development framework is here to help you understand the expectations of your role, and to provide a common language for you and your manager to discuss and plan your career growth. It is also an important part of our larger goal of ensuring everyone is equitably recognized for the impact they have at work, and to reduce bias in promotions and hiring.

## What are the expectations of my role?

There are currently six levels for designers at Sourcegraph. A level is composed of three categories, each with a summary statement and several example behaviors. These categories are:

<ul>
  <li>Strategy</li>
  <li>Execution</li>
  <li>Teamwork and behaviors</li>
</ul>
It’s important to understand that what is listed in the level descriptions are examples, and not checkboxes for promotion. The expectation is that you demonstrate a level of impact consistent with each of the category descriptions for your level.

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
  .levels-table td ul {
     text-align: left;
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
      <th scope="col" class="category-title proficiency sticky">Strategy</th>
      <th scope="col" class="category-title execution sticky">Execution</th>
      <th scope="col" class="category-title teamwork sticky">Teamwork and behaviors</th>
    </tr>
  </thead>

  <tbody>
    <!-- IC1 -->
    <tr>
      <th id="ic1" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic1"></a><abbr title="Individual Contributor">IC</abbr>1</th>
      <td colspan="3" class="level-summary"><p>Entry level. Starting out in their career and needs guidance is most areas.</p>
        <ul>
          <li>Delivers assigned designs to solve known problems</li>
          <li>Gets considerable amount of hands-on support</li>
          <li>Learning to collaborate with their team triad</li>
          <li>Actively learning across all areas</li>
          <li>Focused on execution</li>
          <li>Learning from their team triad</li>
        </ul>
      </td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Learning what strategy is
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Should be able to execute on essential design skills
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          Learning how to be on a team
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>Understand your product</li>
          <li>Know our competitors, their solutions, and gaps</li>
          <li>Know Sourcegraph’s target customers and buyer personas</li>
          <li>Know who’s using your product, their jobs, tasks, use cases, and goals</li>
          <li>Know the strategy and vision for our company, product, your program, your group, and your team</li>
          <li>Work toward the vision for your product area</li>
          <li>Know the metrics and outcomes we aim for in your product area</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Learn from team how to understand customer and business problems</li>
          <li>Ask for and use existing research to inform your solutions</li>
          <li>Learning about the fundamentals of system design</li>
          <li>Talk to colleagues inside of your team affected by your work</li>
          <li>Explore different ways to solve problems</li>
          <li>Identify pros & cons, questions, implications</li>
          <li>Use our design system</li>
          <li>Follow fundamentals of good UI design</li>
          <li>Seek support to conceptualize a hypothesis that will be tested through a prototype</li>
          <li>Work closely with engineers to understand and work around constraints</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Know and learn to apply our Design principles</li>
          <li>Understand and apply our company values</li>
          <li>Actively look for opportunities to learn and develop</li>
          <li>Build your self-awareness</li>
          <li>Be optimistic and positive about growth opportunities</li>
          <li>Build strong relationships within your team</li>
          <li>Regularly communicate your work and status clearly and coherently</li>
          <li>Provide rationale for your decisions</li>
          <li>Actively seek feedback</li>
          <li>Appreciate and consider all feedback with an open mind</li>
          <li>Make every day count. Have a bias for effective action.</li>
          <li>Learn to prioritize what’s important</li>
          <li>Be part of representing design in your team</li>
        </ul>
      </td>
    </tr>
    <!-- IC2 -->
    <tr>
      <th id="ic2" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic2"></a><abbr title="Individual Contributor">IC</abbr>2</th>
      <td colspan="3" class="level-summary"><p>Developing: Completes assignments which have clear, near-term objectives. Operates independently to perform routine tasks.</p>
        <ul>
          <li>Delivers end-to-end designs to solve known problems</li>
          <li>Gets some hands-on guidance and direction</li>
          <li>Collaborates closely with their team triad</li>
          <li>May have growth areas in some competencies, but actively learning</li>
          <li>Primarily focused on execution</li>
          <li>Contributes to their team triad</li>
        </ul>
      </td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Understand the importance of strategy and delivering on it
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Autonomously deliver on assigned work
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          Functioning as a valued team member
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>Understand your product</li>
          <li>Know our competitors, their solutions, and gaps</li>
          <li>Know Sourcegraph’s target customers and buyer personas</li>
          <li>Know who’s using your product, their jobs, tasks, use cases, and goals</li>
          <li>Know the strategy and vision for our company, product, your program, your group, and your team</li>
          <li>Work toward the vision for your product area</li>
          <li>Know the metrics and outcomes we aim for in your product area</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Consistently leverage knowledge of your product area and competition to make decisions</li>
          <li>Actively seek out new and deeper insights about customers to deeply understand their needs, make decisions, and increase confidence</li>
          <li>Leverage knowledge from Sales and Support to better understand and serve customers</li>
          <li>Actively contribute to your team’s strategy and roadmaps</li>
          <li>Frame your work to relate back to the long-term goals of the product</li>
          <li>Consistently focus on driving outcomes, not just outputs</li>
          <li>Influence how your team defines success metrics</li>
          <li>Drive adoption for your product</li>
          <li>Understands the value of makring decisions with data over opinions.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Know and learn to apply our Design principles</li>
          <li>Understand and apply our company values</li>
          <li>Actively look for opportunities to learn and develop</li>
          <li>Build your self-awareness</li>
          <li>Be optimistic and positive about growth opportunities</li>
          <li>Build strong relationships within your team</li>
          <li>Regularly communicate your work and status clearly and coherently</li>
          <li>Provide rationale for your decisions</li>
          <li>Actively seek feedback</li>
          <li>Appreciate and consider all feedback with an open mind</li>
          <li>Make every day count. Have a bias for effective action.</li>
          <li>Know and prioritize what’s most important</li>
          <li>Own your work</li>
          <li>Represent design in your team triad</li>
        </ul>
      </td>
    </tr>
    <!-- IC3 -->
    <tr>
      <th id="ic3" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic3"></a><abbr title="Individual Contributor">IC</abbr>3</th>
      <td colspan="3" class="level-summary"><p>Mid-level: Represents an area of specialization within the organization. Independently resolves complex problems. Contributes to cross-functional projects. Trains others.</p>
        <ul>
          <li>Delivers impactful solutions that solve customer problems and move business metrics</li>
          <li>Growing autonomy, guided as needed</li>
          <li>Proficient across most competencies for their level</li>
          <li>Contributor to team roadmap</li>
          <li>Co-leading their team with their PM and EM</li>
        </ul>
      </td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Starting to contribute to strategy work within team
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Independently driving key work with team
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          Part of the connective tissue within the team
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>Consistently leverage knowledge of your product area and competition to make decisions</li>
          <li>Actively seek new and deeper insights about customers to deeply understand their needs, make decisions, and increase confidence</li>
          <li>Leverage knowledge from Sales and Support to better understand and serve customers</li>
          <li>Actively contribute to your team’s strategy and roadmaps</li>
          <li>Frame your work to relate back to the long-term goals of the product</li>
          <li>Consistently focus on driving outcomes, not just outputs</li>
          <li>Influence how your team defines success metrics</li>
          <li>Drive adoption for your product through measurable design decisions</li>
          <li>Begins to utilizes metrics to analyze the results of their projects and discover where they can be improved</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Understand the underlying motivations for our customers</li>
          <li>Challenge and influence your team's understanding of the problem</li>
          <li>Pair with your researcher, analyst, or PM to do research</li>
          <li>Talk to your customers regularly</li>
          <li>Design coherent systems, not just interfaces</li>
          <li>Integrate your system with our broader product</li>
          <li>Understand the technical system, work around constraints with engineers</li>
          <li>Explore a broad range of solutions in Interconcepts and detailed designs</li>
          <li>Involve cross-functional partners in explorations</li>
          <li>Narrow down to the best solution using strong rationale</li>
          <li>Reflect our design principles in your designs</li>
          <li>Design holistic flows, not individual screens</li>
          <li>Choose design patterns based on strong rationale</li>
          <li>Reflect our content design principles in your UX writing</li>
          <li>Contribute to our design system</li>
          <li>Use layout, hierarchy, typography, color, and motion based on a strong rationale</li>
          <li>When appropriate, align your designs with our brand guidelines</li>
          <li>Create detailed prototypes to test microinteractions</li>
          <li>Know which prototyping method best suits your situation</li>
          <li>Evaluate your work by what's shipped, not what's in the design file</li>
          <li>Work closely with your PM to decide on best way to scope your project</li>
          <li>Make smart trade-offs that balance quality, speed of delivery, and learning—shipping is only the beginning</li>
          <li>Works with the team to define the metrics which can be used to evaluate the success of their efforts</li>
          <li>Analyzes project analytics post release and advocates for iterations which will improve outcomes</li>
          <li>Consistently move projects forward with data over opinions.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Consistently use the Design principles to make decisions</li>
          <li>Proficiently run projects with the R&D toolkit</li>
          <li>Live our values in your work and interactions</li>
          <li>Consistently seek out opportunities to improve</li>
          <li>Be resilient when you face setbacks</li>
          <li>Set learning and personal development goals</li>
          <li>Improve the health of your product team</li>
          <li>Proactively share feedback with partners to help them develop</li>
          <li>Help your team be more inclusive</li>
          <li>Support recruiting or interviewing efforts where possible</li>
          <li>Make the complex clear and concise in writing and speaking</li>
          <li>Persuade and influence others with strong opinions, weakly held</li>
          <li>Consistently give feedback in a way people can hear and apply</li>
          <li>Be adaptive to how other people work and communicate</li>
          <li>Work autonomously but know when to ask for help</li>
          <li>Be proactive without waiting for direction from others</li>
          <li>Plan your work, focusing on goals, not tasks</li>
          <li>Balance effort versus reward</li>
          <li>Make smart trade-offs</li>
          <li>Co-lead your product team with your triad</li>
          <li>Be generous with your time and feedback</li>
          <li>Manage up</li>
        </ul>
      </td>
    </tr>
    <!-- IC4 -->
    <tr>
      <th id="ic4" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic4"></a><abbr title="Individual Contributor">IC</abbr>4</th>
      <td colspan="3" class="level-summary">
        <p>Senior: Brings domain expertise to complex projects. Role requires contribution outside the direct area of responsibility. Leads interdepartmental projects.</p>
        <ul>
          <li>Works directly with a team(s) within engineering (Product)</li>
          <li>Delivers impactful solutions that solve customer problems and move business metrics</li>
          <li>Manages complex projects mostly autonomously</li>
          <li>Comfortable in solving complex problems</li>
          <li>Major contributor to team roadmap</li>
          <li>Co-leading their team with their PM and EM</li>
          <li>Eligible for entry to the manager track</li>
        </ul>
      </td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Drives strategy with triad
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Drive execution for business within team
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          Leading team culture within triad
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>Show deep understanding of your team’s products and competitors in your solution design</li>
          <li>Actively seek new and deeper insights about customers to deeply understand their needs, make decisions, and increase confidence</li>
          <li>Leverage knowledge from Sales and Support to better understand and serve customers</li>
          <li>Grow your influence on the future vision for your product area</li>
          <li>Actively plan for how your designs will help us surpass our competitors</li>
          <li>Take ownership of your team reaching business outcomes</li>
          <li>Pair with your Product Marketing Manager to influence how you bring your product to market</li>
          <li>Effectively uses product analytics to identify how products can be altered to deliver better outcomes for the business</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Understand the underlying motivations for our customers</li>
          <li>Challenge and influence your team's understanding of the problem</li>
          <li>Lead quantitative and qualitative research</li>
          <li>Solve complex system design challenges</li>
          <li>Diverge and converge quickly and effectively</li>
          <li>Practice first principles thinking for larger projects or when innovation is a requirement</li>
          <li>Design clear and elegant interfaces for complex systems</li>
          <li>Refine the details of interaction design to achieve a high level of polish</li>
          <li>Acting as a steward for our design system</li>
          <li>Design interfaces that are functional, beautiful, and delightful</li>
          <li>Raise the visual design bar in a way that it creates business value</li>
          <li>Pair with an engineer to find design solutions through functional prototypes</li>
          <li>Improve the way your team ships product</li>
          <li>Proficient in defining and evaluating metrics which can be used to analyze the effectiveness of their solutions</li>
          <li>Models moving projects forward with data over opinions.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Role model our principles and values within your team</li>
          <li>Is a person who other design team members proactively reach out to for feedback and mentorship</li>
          <li>Identify opportunities to refine our principles and values</li>
          <li>Consistently seek out opportunities to improve your team or group</li>
          <li>Know and manage your triggers for fixed mindset</li>
          <li>Actively seek out and apply lessons and inspiration from the success of others</li>
          <li>Proactively motivate partners by sharing insightful and relevant feedback</li>
          <li>Co-own the health and inclusivity of your product team</li>
          <li>Share your ideas with the industry by writing or talking publicly</li>
          <li>Support Sourcegraph events</li>
          <li>Use storytelling to communicate your work in an engaging way</li>
          <li>Anticipate feedback to address it proactively</li>
          <li>Communicate effectively with group and org leaders to influence their thinking and decisions</li>
          <li>Actively help your triad and team align</li>
          <li>Be decisive to make progress, not just take action</li>
          <li>Drive resolving dependencies with others</li>
          <li>Maximize opportunities: when needed, go beyond the project and the role</li>
          <li>Raise problems when you see them</li>
          <li>Own your team’s work, consistently seeking to provide more value</li>
          <li>Work beyond design, within and across teams, peers, and partners to ensure your team delivers high-quality, impactful results</li>
          <li>Identify and anticipate risks, proactively develop solutions</li>
          <li>Promotes accountability for design efforts by helping other designers define and use metrics to analyze results of their projects</li>
          <li>Shares a long-term vision that influences the team’s roadmap.</li>
        </ul>
      </td>
    </tr>
    <!-- IC5 -->
    <tr>
      <th id="ic5" scope="row" rowspan="3" class="level"><a class="anchor" href="#ic5"></a><abbr title="Individual Contributor">IC</abbr>5</th>
      <td colspan="3" class="level-summary">
        <p>Expert: Provides innovative breakthroughs to toughest challenges and acts as a force multiplier for product teams while also increasing design quality and speed of execution. Influences management on strategic direction. Will have an impact on multiple organizations, countries/regions and disciplines as well as outside companies. Not all career paths include level 5.</p>
        <ul>
          <li>Spanning the engineering team (group level)</li>
          <li>Leads design delivery across the group</li>
          <li>Helps drive group's product vision in collaboration with group leads</li>
          <li>Leads design within a product team if it's short-staffed</li>
          <li>Manages ambiguous projects autonomously</li>
          <li>Acts a force multiplier</li>
          <li>Excels at concept design, system design, and interaction design</li>
          <li>Highly efficient, excellent at balancing effort vs reward</li>
          <li>Contributor to group strategy and driver for the group vision</li>
          <li>Coaches and guides designers in their group to help them grow and deliver impactful and high quality work</li>
          <li>Eligible for transfer to manager track</li>
        </ul>
      </td>
    </tr>
    <tr class="category-summaries-row">
      <td class="category-summary proficiency">
        <div class="wrapper">
          Drive strategy across group (engineering)
        </div>
      </td>
      <td class="category-summary execution">
        <div class="wrapper">
          Leading standards and key business initiatives across group
        </div>
      </td>
      <td class="category-summary teamwork">
        <div class="wrapper">
          Helps to establish and model team behaviors across the group
        </div>
      </td>
    </tr>
    <tr class="behaviors-row">
      <td class="behaviors proficiency">
        <ul>
          <li>Deeply understand your group’s products and competition</li>
          <li>Identify gaps and opportunities in customer understanding for your group</li>
          <li>Contribute to the group strategy</li>
          <li>Collaborate with group leads to turn the group strategy into a product vision</li>
          <li>Steer the group’s design execution toward reaching business outcomes</li>
          <li>Actively influence how your group brings products to market</li>
          <li>Promotes accountability for design efforts via advocating and mentoring designers in the use of product metrics. Data over opinions.</li>
        </ul>
      </td>
      <td class="behaviors execution">
        <ul>
          <li>Identify new problems and opportunities for your group to solve</li>
          <li>Question and fill knowledge gaps for our strategic projects</li>
          <li>Design connected, modular systems that help us move faster in the future</li>
          <li>Solve complex system design debt</li>
          <li>Drive divergence and converge for strategic work at the group level</li>
          <li>Drive improvements to our design system and tooling</li>
          <li>Drive improvements to our product's overall visual design</li>
          <li>Create or advocate for tools and resources to help the entire design team become better at prototyping</li>
          <li>Improve the way your team ships product</li>
          <li>Prioritize and help drive discussions on analytics solutions and systems with the goal of improving the utilization of data based decision making in the design process</li>
          <li>Models how to move complex work forward with data over opinions.</li>
        </ul>
      </td>
      <td class="behaviors teamwork">
        <ul>
          <li>Role model our principles and values for other designers</li>
          <li>Contribute to refining our values, principles, and how we interpret them</li>
          <li>Role model growth mindset for others, contributing to their - development</li>
          <li>Co-own the health and inclusivity of the design team in your group</li>
          <li>Mentor designers in your group and support their growth</li>
          <li>Highly effective communication skills. Writes and presents concisely and clearly.</li>
          <li>Help teams in your group to get the right things done, fast</li>
          <li>Resolve deadlock situations</li>
          <li>Coordinate design work across multiple teams</li>
          <li>Prioritize the most impactful initiatives to take on</li>
          <li>Drive excellence in the group’s design execution</li>
          <li>When necessary, lead design work across multiple teams and projects</li>
          <li>Shares a long-term vision that influences the group’s roadmap</li>
        </ul>
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
    </tr>
  </tbody>

</table>
