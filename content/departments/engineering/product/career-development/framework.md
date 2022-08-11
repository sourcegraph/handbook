# Sourcegraph product career development framework

<style>
  .container {
    --width: 1300px;
  }
  .levels-table {
    --ic1-color: var(--sg-sky-blue);
    --ic2-color: var(--sg-vivid-violet);
    --ic3-color: var(--sg-mint);
    --ic4-color: var(--sg-vermillion);
    --ic5-color: var(--sg-lemon);

    table-layout: fixed;
  }
  .ic1 {
    --level-color: var(--ic1-color);
  }
  .ic2 {
    --level-color: var(--ic2-color);
  }
  .ic3 {
    --level-color: var(--ic3-color);
  }
  .ic4 {
    --level-color: var(--ic4-color);
  }
  .ic5 {
    --level-color: var(--ic5-color);
  }
  .levels-table :is(td, th) {
    vertical-align: top;
    background: white;
  }
  .levels-table [id] {
    /* Account for sticky table header */
    scroll-margin-top: calc(var(--header-height) + 2.25rem);
  }
  thead th.level-title {
    text-align: center;
    border-color: white;
    background: var(--level-color);
  }
   th.category{
    background: var(--sg-light-gray);
    text-align: center;
  }
  thead th:is(.ic2, .ic4) {
    color: white;
  }
  /*
  Repeat the level color as a border color for each category deatil.
  Safari doesn't respect different border colors below a cell spanning multiple columns,
  so we need to draw borders on wrapper elements instead.
  */
  .levels-table .category-detail {
    border-top: none;
    padding: 0;
  }
  .category-detail > .wrapper {
    /* Note that absolute positioning wouldn't work here because <td>s can't be position: relative in Firefox. */
    width: 100%;
    height: 100%;
    padding: 6px 13px;
    display: block;
    border-top: 1px solid var(--level-color);
  }
  .levels-table td[colspan] {
    text-align: center;
  }
  .category-summary {
    font-style: italic;
    border-bottom: none !important;
  }
</style>

## Levels

<table class="levels-table">

  <thead>
    <tr>
      <!-- <th scope="col" class="sticky"></th> -->
      <th scope="col" class="level-title ic1 sticky">IC1: Associate PM</th>
      <th scope="col" class="level-title ic2 sticky">IC2: PM</th>
      <th scope="col" class="level-title ic3 sticky">IC3: PM</th>
      <th scope="col" class="level-title ic4 sticky">IC4: Senior PM</th>
      <th scope="col" class="level-title ic5 sticky">IC5: Staff PM</th>
    </tr>
  </thead>

  <tbody>
    <!-- General Overview -->
    <tr>
      <th class="category" colspan="5">General Overview</th>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
          An entry level PM who can execute on a highly scoped problem with strong support from engineering counterparts.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
          A junior PM capable of owning a small piece of a highly ambiguous project that impacts a specific feature within Sourcegraph.
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
          A mid-career PM who is confident driving an established feature or product from beginning to end.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
          A PM capable of executing an ambiguous, cross-functional project to completion that shapes the future of Sourcegraph's business.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
          A very experienced PM, capable of efficiently driving multiple cross-functional projects in a highly autonomous way while understanding the impact of their work to Sourcegraph and the broad market as a whole.
        </div>
      </td>
    </tr>
    <!-- Strategy/Proficiency -->
    <th class="category" colspan="5">Strategy/Proficiency</th>
    <tr>
      <td colspan="5" class="category-summary">Business/GTM Strategy</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
          I understand how Sourcegraph makes money and how our business KPIs measure the long-term success of the business.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
          I understand how the company's GTM strategy impacts the product experience.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
          I partner with the GTM team to support GTM growth within existing features.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
          I leverage new product opportunities to expand Sourcegraph into new GTM channels/markets and kickstart new levers of growth.
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="5" class="category-summary">Industry/Market Knowledge</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
        I understand the category that our product operates in and the key customer segments we target.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
        I understand the category our product operates in and our key direct competitors. I understand the high-level problems our customers have and how Sourcegraph solves them.
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
        I understand the direct key competitors in our category and how we compare against them. I understand specific challenges our customers face and how our product(s) address these.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
        I understand direct and indirect competitors in our category, how we can compare and where we could invest to win. I have built relationships with key customers, understand their specific needs and work collaboratively with them to build solutions.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
        I understand and identify where there are opportunities in adjacent product categories, or creating new product categories that would benefit our business.
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="5" class="category-summary">Product Strategy</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
        I understand the role my product plays in the platform's vision and strategy.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
        I can derive my product's strategy based on the overall strategy and communicate in the open why we will or won't deliver on certain items.
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
        I drive the creation of my product's strategy based on the early and continuous feedback of and collaboration with stakeholders.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
        I drive the long term vision of my product(s) and influence the overarching product vision. I create a strategy that identifies the key challenges we may face and how we overcome them to maximise the impact we have. I continue to iterate and adapt the strategy based on new input and communicate this transparently.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
        I efficiently seek net-new product opportunities that expand Sourcegraph into new markets by exploring strategic opportunities to buy or partner with external companies.
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="5" class="category-summary">Developer/Technical Intuition</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
        I understand the technical constraints related to my product, and I use that knowledge to correctly plan and scope my roadmap.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
        I consider how influential devs and dev communities will perceive my product and take that into account when planning my roadmap. I understand the technical aspects of my product and use that knowledge to create a better product.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
        I understand how influential devs and dev communities will perceive my product, and I effectively communicate with them directly in a way that gains us new knowledge and/or respect. I deeply understand the technical aspects of my product and use that knowledge to create a better product that meets particularly complex technical requirements.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
        I am known and respected by influential devs and dev communities in my product area, and I use that to increase the odds of success for my product. I use my technical intuition to create a better product in ways that rely on brand new approaches and/or my nuanced understanding of the evolving technical landscape of product area.
        </div>
      </td>
    </tr>
    <!-- Execution -->
    <th class="category" colspan="5">Execution</th>
    <tr>
      <td colspan="5" class="category-summary">Maximizing Impact</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
          I define goals, lead my team in prioritizing our work, and work with my team to execute tactically.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
          I incorporate user research, market/industry knowledge, and business goals in my prioritization of discovery and delivery efforts.
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
          With a scoped problem, I am able to drive the creation and launch of an experience by working cross-team (i.e. product marketing) to create shared outcomes.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
          Given a rough direction based on critical business needs, I will create the right outcome, based on an understanding of the market and customer.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
          I am able to efficiently execute cross-Sourcegraph efforts in highly ambiguous and often risky projects for Sourcegraph.
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="5" class="category-summary">Data-Driven</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
          I understand the problem we are trying to solve based on existing research and can articulate this to others.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
          I understand the problem we are trying to solve and what information we'd need to validate it. I know how to measure the success of an initiative.
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
          I understand the pros/cons of different research techniques and know what to use to solve a particular question.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
          I am able to clearly define research questions and leverage multiple research methods to gather sufficient data to answer my question.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
          I am able to clearly define research questions, leverage multiple research methods and define net-new methods when required.
        </div>
      </td>
    </tr>
    <!-- Teamwork -->
    <th class="category" colspan="5">Teamwork</th>
    <tr>
      <td colspan="5" class="category-summary">Collaboration</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
          I conduct team meetings in a way that fosters effective team collaboration.
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
          I frequently share work in progress and present updates on my product to everyone in the company.
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
          I'm familiar with other teams' work and how it relates to my team's work. I work collaboratively with other teams when responsibilities overlap.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
          I lead cross-functional collaboration to deliver outcomes that improve user experience. Teams recognize how I create and communicate my strategy and apply it with their teams.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
          The business depends on me to successfully manage cross-functional initiatives.
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="5" class="category-summary">Mentorship and Coaching</td>
    </tr>
    <tr>
      <td class="category-detail ic1">
        <div class="wrapper">
        </div>
      </td>
      <td class="category-detail ic2">
        <div class="wrapper">
        </div>
      </td>
      <td class="category-detail ic3">
        <div class="wrapper">
          I recognize my skill/knowledge gaps and seek out mentors who can help me grow.
        </div>
      </td>
      <td class="category-detail ic4">
        <div class="wrapper">
          I actively serve as a mentor to a team member working on a project related to my own.
        </div>
      </td>
      <td class="category-detail ic5">
        <div class="wrapper">
          I actively serve as mentors to junior team members and other less experienced PMs.
        </div>
      </td>
    </tr>
  </tbody>
</table>
