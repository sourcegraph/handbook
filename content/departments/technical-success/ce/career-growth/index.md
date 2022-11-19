# CE Career Development Framework

Our career development framework is here to help you understand the expectations of your role, and to provide a common language for you and your manager to discuss and plan your career growth. It is also an important part of our larger goal of ensuring everyone is equitably recognized for the impact they have at work, and to reduce bias in promotions and hiring.

## What are the expectations of my role?

The CE team is a single globally distributed team. There are currently six levels for customers engineers at Sourcegraph. A level is composed of three categories (or core competencies), each with a summary statement and several example behaviors. These core competencies are:

- Leadership
- Business
- Technology

We think of these three core competencies that every CE must demonstrate in order to serve our customers and our business: leadership, business, and technology. Within each pillared competency are defined core behaviors that CEs perform. In most cases, a level builds on the expectations from the preceding levels, eg someone at level 2 must also meet the level 1 expectations. In addition to what is listed in our ladders (stored in Lattice, as well as shown below), we expect every customer engineer, at all levels, to exhibit our values. Also, rather than precede each bullet point with "consistently", we leave it as implicit. These are the expectations for ICs after they have completed their onboarding.

### Leadership

The leadership pillar embodies both the external and internal interpersonal relationships we build and nurture, the way in which we lead customers to value, and how we drive more value and better ways of doing business.

Within the leadership pillar there exists three core responsibility areas:

- Customer Interactions: The ability to uncover, understand, and influence our customers needs; the application of interpersonal skills required to appropriately manage and nurture relationships; navigating business and / or political considerations.
- Achieve the Technical Win: The activities that CEs perform to lead prospective customers to achieving the Technical Win during the sales cycle.
- Technical Customer Success: The activities that you perform, and the mentorship and influence you use, to ensure your customers' technical health and technical success as measured by business outcomes.

### Business

The business pillar embodies the way in which we come to know and understand our customers’ business and their needs. It also includes how our business serves these needs.

Within the business pillar there exists two core responsibility areas:

- Contextual Understanding: The ability to learn various internal and external roles & responsibilities and nurture them uniquely.
- Operational Excellence: The ability to perform job responsibilities and abide by all team and company processes and procedures.

### Technology

The technology pillar embodies the skills necessary to solve customer problems.

Within the technology pillar there exists two core responsibility areas:

- Sourcegraph Product: The ability to learn about our product capabilities and limitations; apply that knowledge to help customers; extend the boundaries of our capabilities; serve as a voice of the customer back to internal teams.
- Domain Subject Matter Expertise: Understanding our prospective customer personas, competitors, and the developer ecosystem as a whole.

## When do I get promoted?

When you have demonstrated consistently achieving at least 4 consecutive quarters (1 year min) of high performance at your current level, and one quarter performing at the next level, in all three of the core competencies. It takes time to demonstrate the “consistently” implicit in the expectations, and we don’t want to promote anyone to a level in which they will struggle.

Promotions from one level to another are considered in our bi-annual impact review process.

## CE Regional Team Leads

Team Leads are specially designated senior ICs that are elevated within the team to take on additional responsibilities in support of the overall success of the team and individuals. These individuals are not full-time managers but are intentionally given less IC scope than their peers so that they can contribute to higher level initiatives within the team and organization.

As a Team Lead, their scope and responsibility, in addition to the expectations of their defined IC level, includes:

- Ownership: responsible for team member adherence to team processes; facilitates and leads inspection of such processes for their team. Participates in intra- and inter-team projects as a leader. Represents the organization in select cross-functional initiatives. Represents technical needs and risks of teams’ book of business in forecast calls.
- Coordination: coordinates with team members and leadership on ad-hoc requests, process changes, and needs. Coordinates with adjacent teams and leaders on behalf of team needs.
- Support: directly supports team members day-to-day providing active coaching and mentorship on technical delivery.
- Adjusts: listens to feedback from team members and adjacent teams getting to root cause of issues and identifies solutions and go-forward plans; guides the team through change.

## CEs Transitioning to CE Management

We want to support the career progession of CEs on the Customer Engineering team based on their individual career goals and aspirations. For those that desire to move from an individual contributor (IC) role to a management role, the CE Manager Interview Process for Internal CE Candidates outlines how teammates would go about assessing their readiness for and applying for new CE Manager roles that open up. The goal of this process is provide clear visibility into what expectations should be for career advancement into management within the CE team.

Learn more about CEs transitioning to CE management [here](cemgr-candidates-internal.md).

<style>
  .container {
    --width: 1300px;
  }
  .levels-table {
    --leadership-color: var(--sg-vivid-violet);
    --business-color: var(--sg-sky-blue);
    --technology-color: var(--sg-vermillion);
    --values-color: var(--sg-blurple);
    --levels-color: var(--sg-mint);

    table-layout: fixed;
  }
  .leadership {
    --category-color: var(--leadership-color);
  }
  .business {
    --category-color: var(--business-color);
  }
  .technology {
    --category-color: var(--technology-color);
  }
  .values{
    --category-color: var(--values-color);
  }
  .levels{
    --category-color: var(--levels-color);
  }
  .levels-table :is(td, th) {
    vertical-align: top;
    background: white;
  }
  .levels-table [id] {
    /* Account for sticky table header */
    scroll-margin-top: calc(var(--header-height) + 2.25rem);
  }
  thead th.levels{
    text-align: center;
    border-color: var(--category-color);
    background: var(--category-color);
  }
  tbody td.category-title {
    text-align: center;
    border-color: var(--category-color);
    background: var(--category-color);
  }
  td:is(.leadership, .technology, .values) {
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
    border-bottom: 1px solid var(--category-color);
    color: var(--category-color)
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
</style>

## Levels

<table class="levels-table">

  <thead>
    <tr>
      <th scope="col" class="levels sticky">IC 1</th>
      <th scope="col" class="levels sticky">IC 2</th>
      <th scope="col" class="levels sticky">IC 3</th>
      <th scope="col" class="levels sticky">IC 4</th>
      <th scope="col" class="levels sticky">IC 5</th>
      <th scope="col" class="levels sticky">IC 6</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td class="level-summary">A Customer Engineer focused on learning, growth, and establishing themselves as a contributing teammate</td>
      <td class="level-summary">A Customer Engineer that can autonomously contribute, execute, and collaborate while developing their skills</td>
      <td class="level-summary">An individual contributor that demonstrates required and desired capabilities (Senior CE)</td>
      <td class="level-summary">A particularly experienced individual contributor that has mastered capabilities especially in complex circumstances (Senior CE)</td>
      <td class="level-summary">An individual who excels in their capabilities and emphasizes leadership and growth (Principal CE)</td>
      <td class="level-summary">A subject matter expert with a visible external brand / presence in the developer ecosystem (Sr Principal CE / Field CTO)</td>
    </tr>
    <tr><td colspan="6" class="category-title leadership">Leadership</td></tr>
    <tr>
      <td colspan="6" class="category-summary leadership">
        <div class="wrapper">Customer Interactions</div>
      </td>
    <tr>
    <tr>
      <td>
        <ul>
          <li>Can identify high-level customer business and technical needs, mapping their needs to defined use cases.</li>
          <li>Ability to select the correct communication medium and profile for each communication type and purpose. When communicating with customers, does not over-promise or avoid questions or topics. Provides clear timelines and follows through on commitments.</li>
          <li>Identify the need for help navigating customers political situations.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Can ask open-ended questions that validate use cases and uncover new opportunities.</li>
          <li>Maintains clear communication to internal and external stakeholders. In customer interactions, seeks additional context to confirm understanding where appropriate. Shows an ability to influence customer (scope, use cases) towards best practices.</li>
          <li>Demonstrated ability to navigate customers political situations in partnership and with guidance from Leadership.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Can ask strategic questions that both articulate customer pain and quantify the impact of it.</li>
          <li>Handles customer objections, diffuses situations, and serves as a steady and calm representative of Sourcegraph to the customer especially in complex and political situations. Communicate and negotiate to drive successful client interactions. Escalates properly and in a timely manner.</li>
          <li>Demonstrated ability to navigate political situations with customers to achieve desired outcomes with no guidance needed.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Masters asking strategic questions that uncover new use cases, validate existing use cases, uncovers latent customer pain and educates the customer on their needs.</li>
          <li>Can appropriately push back with clients and negotiate mutually agreed outcomes in contentious situations with the customer. Communicates and negotiates to drive successful and repeatable client interactions.</li>
          <li>Reliably and consistently delivers in the midst of political situations with customers to achieve desired outcomes.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Uses broad and deep technical knowledge along with proven ability to ask strategic questions that uncover new use cases, validate existing use cases and uncovers latent customer pain, but can tie impact of Sourcegraph to customer's business outcomes.</li>
          <li>Capable of selecting the appropriate engagement style (light touch, consultative, deep technical handholding, ..) and changing it based on context.</li>
          <li>Situational awareness and capability to involve the right resources based on cultural/personality aspects that match client expectations / fit context.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Can reference examples of where we have uncovered new opportunities to make Sourcegraph stickier and more widely used.</li>
          <li>Strong interpersonal skills and influence interfacing directly with Director, VP, C-level audiences and also at DevOps, architect and dev team levels, too</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary leadership">
        <div class="wrapper">Achieve the Technical Win</div>
      </td>
    <tr>
    <tr>
      <td>With assistance, builds plans for achieving technical win and can capture technical design.</td>
      <td>With limited direction or assistance, can build a clear technical win and define the technical design for customer solution. Able to identify non-standard or high-risk requirements.</td>
      <td>Entirely self-directed, can build a clear technical win plan and technical design for customers. Able to raise requests to internal teams on behalf of customer needs.</td>
      <td>Designs solutions and phased roll out plans / technical design plans against customer needs. Negotiates and influences customer needs and design according to best practices, owning the technical design for customer solutions.</td>
      <td>Turns gaps into opportunities by formulating a plan for success and driving activity against that plan on behalf of customers.</td>
      <td>Recognized as an industry influencer and thought leader around code search.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary leadership">
        <div class="wrapper">Technical Customer Success</div>
      </td>
    <tr>
    <tr>
      <td>
        <ul>
          <li>Plays an assisting role in producing deliverables that benefit customer needs (eg onboarding plans, collateral, QBR decks, etc). Follows playbooks and templates to guide the customer.</li>
          <li>Learns how to enable customers against their use cases and business value.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>With assistance defines customers' business outcomes. Performs activities (demos, trials, webinars) that center around customer stated needs.</li>
          <li>Participates in internal projects that help fill gaps, mature processes, and deliver more value to our business and our customers.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Responsible for defining and subsequently orienting activities against customers' business outcomes. Leads the readout via QBRs. Influences and adapts plans to changing conditions while driving execution to deliver value. Appropriately adapts workflows to the customers' needs; displays the appropriate sense of urgency on behalf of the customers' needs.</li>
          <li>Demonstrated ability to connect Sourcegraph capabilities to client's use cases.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Proactively manages customer activities and constantly aligns clients expectations to schedule and deliverables. Creates playbooks, processes that improve the consistency and level of customer success. Mentors CE's on how to effectively apply playbooks and templates. Possess both technical acumen, but also ability to mentor on soft skills in leading by example.</li>
          <li>Demonstrated ability to understand the client's value measurement and overarching objectives, and articulate and highlight Sourcegraph business value accordingly.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Builds playbooks, processes, and templates for customers.</li>
          <li>Influences and actively contributes to team decisions and actively champions change, setting a positive example for others to emulate.</li>
          <li>Scales outcomes by improving current, and helping define new, standards for driving customer outcomes for the team through the development and communication of best practices, improved processes, etc.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Plays reference role on the team and leads initiatives.</li>
          <li>Secures team buy-in and organizational readiness on new initiatives.</li>
        </ul>
      </td>
    </tr>
    <tr><td colspan="6" class="category-title business">Business</td></tr>
    <tr>
      <td colspan="6" class="category-summary business">
        <div class="wrapper">Contextual Understanding</div>
      </td>
    <tr>
    <tr>
      <td>Learn different functions and roles internally and externally and appropriately manages relationships and seeks advice and support as appropriate.</td>
      <td>Uses different functions and roles internally and externally to drive success with accounts and internal projects. Can identify a Champion by understanding ways to test if someone is a Champion. Identifies new and potential advocates - builds relationships with them.</td>
      <td>Ability to properly and timely identify stakeholders and roles and to address them appropriately. Ensures necessary roles are proactively involved on accounts and projects. Nurtures Champion relationship by building plans to strengthen rapport, enable their ability to effectively sell Sourcegraph internally, and align Sourcegraph's success against their personal win.</td>
      <td>Leverages existing Champions to gain wider access into an account. Uses champions to mitigate detractors, gain access to Economic Buyers (EBs), and find new teams and use-cases to drive expansion.</td>
      <td>Mentors junior ICs on how to best engage various functions and roles. Able to go into an account and find new advocates; able to identify potential champions for AE to lead the effort to establish a relationship.</td>
      <td>Ability to build executive champions and get their buy-in on Sourcegraph providing a significant impact on their development organizations, and their company as a whole.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary business">
        <div class="wrapper">Operational Excellence</div>
      </td>
    <tr>
    <tr>
      <td>
        <ul>
          <li>Learns Sourcegraph processes, templates, and tools. As instructed, with guidance and support, able to complete required activities.</li>
          <li>Ability to manage own time, providing feedback and asking for guidance as appropriate.</li>
          <li>Learns Sourcegraph value prop is able to pitch to customers.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Adopts Sourcegraph processes, templates, and tools; completes deliverables and activities according to process.</li>
          <li>Ability to manage own time and prioritize across multiple accounts, providing feedback and asking for guidance as appropriate.</li>
          <li>Understands and applies Sourcegraph value prop and is able to tailor customer pitch and match value prop to stakeholders' unique needs.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>While adhering to process, able to identify and provide timely feedback and updates on identified blockers, delays, and risks identified or raised.</li>
          <li>When creating trial / deployment plans, able to identify interruptions and identify potential paths to keep activities on schedule.</li>
          <li>Applies Sourcegraph value prop throughout the sale and entire customer journey.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Proactively raises blockers, delays, and risks and also establishes proposed solutions or workarounds. Looks for abilities to modify scope / use cases to ensure forward progress against defined process.</li>
          <li>Creates complex trial and deployment plans and executes against schedule.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Documents setups and customizations to enable other teams. Identifies and mitigate or escalates risks prior to becoming issues.</li>
          <li>Acts as role model for more junior/new team members for managing time. Makes proposals to improve operating model and tools.</li>
          <li>Applies Sourcegraph's Value Framework to such an extent that deals have closed for larger amounts, higher close rates are seen (with unsuccessful ops qualified out earlier), and greater ongoing success and expansion of accounts as a result of application.</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr><td colspan="6" class="category-title technology">Technology</td></tr>
    <tr>
      <td colspan="6" class="category-summary technology">
        <div class="wrapper">Sourcegraph Product</div>
      </td>
    <tr>
    <tr>
      <td>
        <ul>
          <li>Learn core out-of-the-box features: what they are, how they work, how to demo and explain them to customers.</li>
          <li>Ability to assist customers with questions that they have on Sourcegraph.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Understands how core out-of-the-box features provide value and is able to explain them to customers against their needs.</li>
          <li>Ability to assist customers with questions that they have on Sourcegraph.</li>
          <li>Identifies potential issues/limitations of our product or features against the customer's need / stack, and raises them as product gaps when they impact the customer.</li>
          <li>Voice of the customer: Provides timely and accurate feedback to Product to drive improvements to Sourcegraph.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Understands how core out-of-the-box features are used by other customers in a similar team / vertical / space.</li>
          <li>Can guide the customer on how to configure parts of the product based on known best practices.</li>
          <li>Identifies potential issues/limitations of our product or features against the customer's need / stack, and raises them as product gaps when they impact the customer.</li>
          <li>Voice of the customer: Provide insights and input into feature development and other RFCs that may impact team or customer experience.</li>
          <li>Understands the various technical concepts that go into deciding to build or buy something like Sourcegraph.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Understands advanced features to deliver customer value through extensibility and customization</li>
          <li>Leads the customer on best practices for configuring and using the product, steering clear of less ideal designs in complex customer environments.</li>
          <li>Can consistently technically advise a path forward when an issue/limitation has been identified.</li>
          <li>Voice of the customer: Speaks directly to the impact / benefit of gaps, features, and needs to internal teams.</li>
          <li>Can articulate technical concepts that go into deciding to build or buy something like Sourcegraph and influences accordingly.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Understands advanced features to deliver customer value through extensibility and customization</li>
          <li>Ability to guide a technical audience towards good engineering disciplines and demonstrated experience in what it takes to incorporate Sourcegraph into a customer architecture.</li>
          <li>Voice of the customer: Demonstrated ability to manage project and product changes by re-aligning internal and external teams to customer needs and business value.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Understands advanced features to deliver customer value through extensibility and customization</li>
          <li>As a thought leader, creates architectural best practices on development ecosystems that leverage Sourcegraph. These best practices are recognized by customers and used to drive competitive advantage for organizations.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary technology">
        <div class="wrapper">Domain Subject Matter Expertise</div>
      </td>
    <tr>
    <tr>
      <td>
        <ul>
          <li>Learn about our core buying personas, core use cases and value drivers.</li>
          <li>Can name our primary competitors.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Demonstrated understanding of our core buying personas, core use cases and value drivers.</li>
          <li>Basic up-to-date understanding of competitors' high-level capabilities on Sourcegraph's competitive landscape.</li>
          <li>Knows the developer ecosystem enough to be able to speak to tools companies use and how they use them.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Can correlate core uses cases and value drivers per persona (IC Eng, IC Dev Ops, IC Security Analyst, EM, VP, etc).</li>
          <li>Firm understanding of competitors' high-level capabilities on Sourcegraph's competitive landscape and weaves this knowledge into objection handling and solution positioning.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Correlate complex uses cases and value drivers per persona (IC Eng, IC Dev Ops, IC Security Analyst, EM, VP, etc).</li>
          <li>Advanced up-to-date knowledge of competitors' high-level capabilities on Sourcegraph's competitive landscape and their key value propositions, strengths and weaknesses.</li>
          <li>Drawing from own experience, and knowledge of the developer ecosystem speaks to tools companies use, how they use them, limitations of them, and how Sourcegraph fits in.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Correlate complex uses cases and value drivers per persona (IC Eng, IC Dev Ops, IC Security Analyst, EM, VP, etc).</li>
          <li>Advanced up-to-date knowledge of competitors' high-level capabilities on Sourcegraph's competitive landscape and their key value propositions, strengths and weaknesses.</li>
          <li>Enables and excites advocates (both customer and external/industry) on Sourcegraph technologies and solutions.</li>
          <li>Able to articulate industry trends including use cases and challenges, and how they relate to Sourcegraph.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Correlate complex uses cases and value drivers per persona (IC Eng, IC Dev Ops, IC Security Analyst, EM, VP, etc).</li>
          <li>Advanced up-to-date knowledge of competitors' high-level capabilities on Sourcegraph's competitive landscape and their**** key value propositions, strengths and weaknesses.</li>
          <li>Can advise customers on how to build a developer ecosystem with Sourcegraph.</li>
        </ul>
      </td>
    </tr>
    <tr><td colspan="6" class="category-title values">Company Values</td></tr>
    <tr>
      <td colspan="6" class="category-summary values">
        <div class="wrapper">Customer Drive</div>
      </td>
    <tr>
    <tr>
      <td>Curious about how our customers work and how we can deliver value to them.</td>
      <td>Understands how our customers work and how we can deliver value to them, enjoys commercial and strategic discussions and shares insights with others.</td>
      <td>Thinks beyond day-to-day tasks and contributes insights of strategic and commercial value, that help us deliver value to customers.</td>
      <td>Challenges whether goals are customer-oriented.</td>
      <td>Acts as a trusted advisor, drawing on functional expertise to inform customer-driven strategy, OKRs and commercial thinking.</td>
      <td>Showcases influence over customers through trust.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary values">
        <div class="wrapper">High Agency</div>
      </td>
    <tr>
    <tr>
      <td></td>
      <td>Applies agency over their work by looking for solutions to challenges, applying good thinking and seeking clarity and direction when needed. Applies agency over their wellbeing by managing their own time against OKRs while finding balance and creating rest.</td>
      <td>Proactively analyses challenges and consults to get relevant input, before generating a variety of solutions, and selecting the right one with confidence. Applies agency over their wellbeing by managing their own time against OKRs while finding balance and rest. Guides and mentors junior less experienced teammates accordingly.</td>
      <td>Pre-empts challenges to manage risk, and steps in early to ensure they are resolved quickly and avoid escalation. Consults to get relevant input, before generating a variety of solutions, and selecting the right one with confidence. Applies agency over their wellbeing by managing their own time against OKRs while finding balance and rest. Guides and mentors junior less experienced teammates accordingly.</td>
      <td>Applies agency over their own workload but also the expertise and scalability of the team. Plans ahead to anticipate and act on the needs of own team, internal and external stakeholders. Applies technical expertise to proactively analyze challenges and is consulted to find the right decisions for complex problems.</td>
      <td>Applies agency over their own workload but balances against the most pressing needs of the business and our customers.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary values">
        <div class="wrapper">High Quality</div>
      </td>
    <tr>
    <tr>
      <td>Receives guidance and support to create high-quality outcomes. Takes ownership of tasks - internal and / or external.</td>
      <td>Gets clarity to understand what’s required to deliver high-quality outcomes: what good looks like and what the timelines are. Owns their own delivery, managing expectations and owning setbacks effectively.</td>
      <td>May mentor junior employees and each other.</td>
      <td>Leads by example in producing quality work and is a trusted and reliable source on the team for guidance on what good work looks like. Leans in to help managers keep work on track.</td>
      <td>Leads quality by providing technical expertise internally and externally, informing what can be achieved and providing structured educational leadership for the team.</td>
      <td>Sets the standard for what high quality looks like by providing technical expertise internally and externally, informing what can be achieved and providing structured educational leadership for the team.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary values">
        <div class="wrapper">Open & Transparent</div>
      </td>
    <tr>
    <tr>
      <td>Communicates openly where support / assistance is desired. Proactively communicates timelines and status on tasks.</td>
      <td>Communicates the right information at the right time by effectively using synchronous and asynchronous channels, so everyone is involved and informed.</td>
      <td>Communicates effectively and is learning to present internally and externally. Viewed as approachable and builds trust easily with internal and external teams.</td>
      <td>Thinks on their feet and can articulate and communicate a point of view while building trust and rapport. Learning to persuade and challenge clients and internal stakeholders, using valid expertise and respectful communication.</td>
      <td>Effectively able to persuade and challenge clients and internal stakeholders, using valid expertise and respectful communication. Regularly shares knowledge and is effective at presenting to large and/or senior audiences.</td>
      <td>Regularly shares knowledge, coordinates cross-sharing internal and across teams.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary values">
        <div class="wrapper">Continuously Grow</div>
      </td>
    <tr>
    <tr>
      <td>Open and receptive to feedback and new / different ways of accomplishing a task. Looks for opportunities to improve own processes and workflows.</td>
      <td>Owns their own development: asks for feedback and direction on developmental priorities, and resources to learn from. Is composed under pressure and flexible to change, able to unlearn/relearn with ease, and asks the necessary questions to clarify ambiguity.</td>
      <td>Owns their own development and is receptive to challenges and feedback.</td>
      <td>Is a role model for personal development and two-way feedback. Challenges the status quo and highlights potential opportunities in change. Is a beacon of composure through change and ambiguity, taking things in their stride but challenging where appropriate.</td>
      <td>Advocates personal development and two-way feedback for the entire team. Challenges the status quo and highlights potential opportunities in change. Is a beacon of composure through change and ambiguity, taking things in their stride but challenging where appropriate.</td>
      <td>Advocates means for creating growth opportunities across the team. As an individual, seeks out feedback from others and showcases leadership.</td>
    </tr>
    <tr>
      <td colspan="6" class="category-summary values">
        <div class="wrapper">Work as a Team / Be Welcoming & Inclusive</div>
      </td>
    <tr>
    <tr>
      <td>Treats everyone with respect and empathy, and consistently works well with others to get work done well. Learning to appreciate and different perspectives, and ask for those perspectives when developing solutions.</td>
      <td>Seeks out different perspectives, and consistently calls for those perspectives when developing solutions. Volunteers to support teams or groups outside of their own team.</td>
      <td>Works and interacts effectively with people from diverse backgrounds, preferences and perspectives, and understands how to weave these to create better solutions. Rarely encounters someone they can't work with, and proactively initiates contact with others to solve conflict.</td>
      <td>Guides others on effective collaboration, conflict resolution and improved communication.</td>
      <td>Welcomes and works effectively with people from diverse backgrounds, preferences and perspectives, and understands how to weave these to create better solutions. Advocates for others, recognizes and creates space for less vocal members.</td>
      <td></td>
    </tr>
  </tbody>
</table>
