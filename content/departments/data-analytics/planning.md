# **Sprint planning**

We currently work in two week sprints that run from Monday to the following Friday. Requests that come in mid-sprint will be placed in the backlog and triaged at the next sprint planning meeting. If something is urgent, please let us know and we can prioritize as needed.

For larger data, reporting, or analysis requests, the first action will be to plan a scoping exercise for the analyst or engineer in order to size the level of effort and determine where it sits in the overall priorities.

General outline of our planning process:

- Thursday before a new sprint: synchronous sprint planning. Plan out the sprint 2-4 weeks out, and review the upcoming sprint
- First Monday of the sprint: send out a message to #analytics with the wins from the last sprint and the plan for the current sprint (and a link to 2-4 weeks out if anyone wants to look)
- First Friday of sprint: post updates to the issues in the sprint with a status and do an async review of where we’re at, if we need to push anything out or pull anything in
- Repeat

Planning Principles:

- OKR-driven
- Mix of quick wins and long-term, proactive projects
- Only choose projects where we have a clear picture of what the result looks like and the impact it will make; if these aren’t clear, we should block time to further scope them

# **Operating cadence**

## Calendar

<table>
  <tr>
   <td>Timing
   </td>
   <td>What
   </td>
  </tr>
  <tr>
   <td>Quarterly
   </td>
   <td>OKR planning, including month 1/2/3 plan
   </td>
  </tr>
  <tr>
   <td>Monthly
   </td>
   <td>Backlog grooming and retrospective
   </td>
  </tr>
  <tr>
   <td>~10th of every month
   </td>
   <td>Rolling planning of next two sprints
   </td>
  </tr>
  <tr>
   <td>~25th of every month
   </td>
   <td>Rolling planning of next two sprints
   </td>
  </tr>
  <tr>
   <td>Monday standup
   </td>
   <td>Weekend, last week/this week summary, blockers/sprint risks
   </td>
  </tr>
  <tr>
   <td>Wednesday standup
   </td>
   <td>Progress week-to-date, plan for rest of week, blockers/sprint risks
   </td>
  </tr>
  <tr>
   <td>Friday
   </td>
   <td>Comment any any active issue in the current sprint with a status update
   </td>
  </tr>
</table>

## Issues

- [Minimum detail on a ticket](https://github.com/sourcegraph/analytics/issues/new?assignees=&labels=&template=internal.md&title=) (included in issue types in our tracker)
- Every ticket should be in small enough chunk where it gets done within the sprint

### A guide to Impact/Urgency - P0 - P4

<table>
  <tr>
   <td>
   </td>
   <td>Expectation
   </td>
   <td>Example
   </td>
  </tr>
  <tr>
   <td>P0: Outage
   </td>
   <td>Drop everything else and work continuosly to resolve.  An outage means that some piece of infrastructure that the community relies on is down.
   </td>
   <td>
<ul>

<li>Data in BigQuery is missing, a pipeline/transformation is erroring

<li>A bug is found in an enterprise report/dashboard (watermarked)

<li>A calculated field is incorrect or provides unexpected results in any monitored/business critical pipeline
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>P1: Critical
   </td>
   <td>Continuous status updates to stakeholders and managers, includes issues, but also any work with a short deadline or requested by and executive.
   </td>
   <td>
<ul>

<li>A bug is found in a non-enterprise report/dashboard

<li>Errors in non-business critical pipelines or tables

<li>Major degradation in performance

<li>Any request with a deadline in the next two to three weeks (will include in current sprint or next sprint as needed)
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>P2: Default
   </td>
   <td>Most tickets will fall into this priority.  These can be planned and executed by more than one person or in the next several sprints.  There is no special urgency associated, but is a priority/OKR/stakeholder request that fits within our engagement model.  Also includes, self directed work and analysis as deemed important by our team.
   </td>
   <td>
<ul>

<li>A new dashboard/report or an enhancement to an existing dashboard/report

<li>A new data source pipeline with a concrete understanding of the final output of a report or the decision that we are looking to help provide insight on

<li>A bug found in a table/pipeline that is not used any reporting

<li>New technologies research

<li>Optimizations
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>P3: Nice to have
   </td>
   <td>Non-critical improvements/efficiencies, any requests without clear outcomes/problems that we are trying to solve (placeholder tickets until more details become available)
   </td>
   <td>
<ul>

<li>New data source request without clear requirements on final dashboard or analysis

<li>New dashboard or report with data that can be found elsewhere

<li>Placeholder self-directed work for future scoping
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>P4
   </td>
   <td>High level ideas for future work that may or may not rise in priority or small improvements with no criticality that should be fixed eventually
   </td>
   <td>
<ul>

<li>Additional documentation/comments in code

<li>Ideas that come to you in the middle of the night
</li>
</ul>
   </td>
  </tr>
</table>

### Story points

<table>
  <tr>
   <td>How much is known about a task
   </td>
   <td>Everything
   </td>
   <td>Almost everything
   </td>
   <td>Something
   </td>
   <td>Almost nothing
   </td>
   <td>Nothing
   </td>
   <td>Nothing
   </td>
  </tr>
  <tr>
   <td>Dependencies
   </td>
   <td>None
   </td>
   <td>Almost none
   </td>
   <td>Some
   </td>
   <td>Few
   </td>
   <td>More than few
   </td>
   <td>Unknown
   </td>
  </tr>
  <tr>
   <td>How much work effort
   </td>
   <td>&lt;2 hours
   </td>
   <td>.5 days
   </td>
   <td>Up to 2 days
   </td>
   <td>Few days
   </td>
   <td>Around a week
   </td>
   <td>More than a week
   </td>
  </tr>
  <tr>
   <td>Story points
   </td>
   <td>1
   </td>
   <td>2
   </td>
   <td>3
   </td>
   <td>5
   </td>
   <td>8
   </td>
   <td>13
   </td>
  </tr>
</table>
