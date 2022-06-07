# Product manager + engineering manager: partnership responsibilities

An effective partnership between the EM and PM is fundamental to the success of any product engineering team. At the core of having an effective partnership is having a clear understanding of the responsibilities in the team, who is accountable for it, and the expectation of what each party will contribute towards that responsibility. If both parties fulfill their role’s expectations, trust develops – not only between each other, but in the team as a whole.

## Definitions

**Accountable**: The accountability for the responsibility stops with this person. Being accountable doesn’t mean you have to do all the tasks yourself; however, you should ensure it gets done.

**Expectations**: This outlines the expectation that the EM/PM agrees to _proactively_ fulfill in relation to the responsibility in the team. The EM/PM is encouraged to delegate and/or share these tasks with other teammates for the following reasons:

- Share the load
- Encourage collective ownership of the success of the team
- Reduce the bus factor risk
- Facilitate career development growth of teammates

**Stakeholders**: These are the teammates that either have domain accountability, knowledge or insight related to the responsibility and who should be consulted and informed on the efforts of the team.

## Summary

**Product managers**: you are doing well if you have clearly defined the goal of your team, the incremental milestones toward that goal, the timeline for achieving those milestones, and the progress so far (all likely in the handbook).

**Engineering managers**: you are doing well if your team is doing well.

<!-- some styling to make the tables a bit more readable -->
<style>
th:first-of-type {
    width: 50%;
}
td {
    vertical-align: top;
}
</style>

## Product managers (PMs) are accountable for:

<!--
The tables below use HTML instead of markdown, because markdown doesn't support bullet lists within table cells and
the content per cell is quite large (markdown only has one line per cell).

A quick crash course for anyone unfamiliar:

<table>...</table>: self-explanatory
<tr>...</tr>: table row
<th>...</th>: table header (cell)
<td>...</td>: table data (cell)
<ul>...</ul>: unsorted (bullet) list
<li>...</li>: list item
-->

### Product marketing

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Speak to customers about upcoming features</li>
        <li>Promote new features internally in the company</li>
        <li>Communicate with marketing + sales around upcoming or recent feature releases</li>
        <li>Reach out to customers when heavily requested features are released</li>
        <li>Make sure the CE + Sales team understands and is excited to sell new features</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Look out for instances of gaps in product trust and understanding</li>
        <li>Encourage engineers to provide demos of newly delivered features</li>
      </ul>
    </td>
  </tr>
</table>

### Product research

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Keep relevant customer feedback up to date</li>
        <li>Identify what customers are asking for most / prioritization based on customer needs</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Ensure that capturing usage events and the data capture integrity is top of mind when implementing/maintaining features</li>
      </ul>
    </td>
  </tr>
</table>

### Team goals

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Keep the team’s goals page up-to-date in the handbook, which included progress updates at the end of iterations</li>
        <li>Communicating team goals internally and externally</li>
        <li>Continually validate that team goals are right and that we are making progress on those goals at a metrics level</li>
        <li>Make sure we have data and feedback to prioritize our roadmap</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Ensure that engineers are engaged in setting and stay connected with the team goals</li>
      </ul>
    </td>
  </tr>
</table>

### Iteration planning

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Make sure iteration goals align with team goals</li>
        <li>Set the iteration goals in consultation with the team</li>
        <li>Prioritize the work for the iteration</li>
        <li>Make sure features are built in an iterative manner where possible</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Refine issues to the point where an engineer can pick it up and have all the information needed to get started</li>
        <li>Balance iteration goals with available capacity</li>
        <li>Balance iteration goals with passive goals (backlog, technical debt)</li>
        <li>Keep the team’s handbook page up-to-date with the process for planning iterations</li>
      </ul>
    </td>
  </tr>
</table>

### Technical partnerships

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Communicate with technical partners (like GitLab) around bugs or version updates</li>
        <li>Handle communication with Firefox/Chrome/Safari around extensions approvals if issues arise</li>
        <li>Correspond with customers when having issues requiring direct contact (which will come from a CE “first point of contact” but then becomes a separate task)</li>
        <li>Ensure customer delivery plans are set when relevant</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Look out for technical releases from partners that will cause potential issues with our integrations (e.g., a new version of Chrome affecting an extension)</li>
      </ul>
    </td>
  </tr>
</table>

### Sales + customer engineering collaboration

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Answer questions from the sales and CE teams</li>
        <li>Analyze the needs of the sales and CE teams as they relate to our goals</li>
        <li>First point of contact for customer issues</li>
        <li>First “team point of contact” for customers unless otherwise specified</li>
      </ul>
    </td>
    <td>
      <ul>
        <li><i>no proactive responsibilities</i></li>
      </ul>
    </td>
  </tr>
</table>

### Design

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Prioritize design requirements for future iterations</li>
        <li>Collaborate on user research requirements</li>
        <li>Working alongside designers to prototype new features</li>
        <li>Work alongside designers in team-related design reviews</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Leave design feedback comments on anything that seems like it might be a “lopsided value tradeoff” (a significant amount of engineering work for little design/user impact when compared to the easier solution) so that the PM and designers are aware</li>
        <li>Encourage the rest of the team to do so as well</li>
      </ul>
    </td>
  </tr>
</table>

### Other engineering team collaborations

<table>
  <tr><th>PM expectations</th><th>EM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Communicate and prioritize inter-team dependencies</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Drive inter-team dependency collaboration and execution</li>
      </ul>
    </td>
  </tr>
</table>

## Engineering managers (EMs) are accountable for:

### Hiring

<table>
  <tr><th>EM expectations</th><th>PM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Define hiring requirements based on team goals</li>
        <li>Keep job spec up-to-date</li>
        <li>Source candidates</li>
        <li>Screen candidate applications</li>
        <li>Define and maintain the hiring process</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Ensure there is a clear roadmap so the EM knows who we need to hire and how to pitch the vision of the team to candidates.</li>
      </ul>
    </td>
  </tr>
</table>

### Iteration execution

<table>
  <tr><th>EM expectations</th><th>PM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Keep the team’s handbook page up-to-date with the process for executing iterations</li>
        <li>Track progress of the iteration and alert PM when we need to scope up/down</li>
        <li>Manage/escalate technical blockers on work</li>
        <li>Ensure the work delivered is of a high quality</li>
        <li>Scope and prioritize bugs escalated by CE team</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Scope and prioritize bugs escalated by CE team</li>
        <li>Protect the team’s focus during an iteration</li>
      </ul>
    </td>
  </tr>
</table>

### Productivity

<table>
  <tr><th>EM expectations</th><th>PM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Hold retrospectives after each iteration</li>
        <li>Continuously optimize processes</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Update handbook owned pages (goals or roadmap) with relevant action items after retrospectives</li>
      </ul>
    </td>
  </tr>
</table>

### Reporting

<table>
  <tr><th>EM expectations</th><th>PM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Provide weekly status report to engineering leadership</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Provide weekly progress highlight for weekly status report email that is also shared at the company meeting</li>
        <li>Look over weekly update by EOD [the day before it gets sent] and supplement any info</li>
      </ul>
    </td>
  </tr>
</table>

### Career development and performance management

<table>
  <tr><th>EM expectations</th><th>PM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Hold weekly 1:1s with team members</li>
        <li>Mentor team members to make progress towards their career goals</li>
        <li>Measure the performance of the team and individuals and provide regular feedback to team members</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Make the EM aware of any career-related conversations that come up when working with engineers directly</li>
        <li>Provide continuous insight to EM on what areas engineers excel in and what areas they can grow in</li>
      </ul>
    </td>
  </tr>
</table>

### Team morale 😊

<table>
  <tr><th>EM expectations</th><th>PM expectations</th></tr>
  <tr>
    <td>
      <ul>
        <li>Team social events</li>
        <li>Come up with or maintain team “rituals” (even as simple as adding a fun question to the start of syncs)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Bringing in customer feedback to make the team excited about what we’re building</li>
        <li>Following up on data/analytics to prove the impact of what we’ve built, so the team feels like we’re having an impact</li>
        <li>Come up with or maintain team “rituals” (even as simple as adding a fun question to the start of syncs)</li>
      </ul>
    </td>
  </tr>
</table>
