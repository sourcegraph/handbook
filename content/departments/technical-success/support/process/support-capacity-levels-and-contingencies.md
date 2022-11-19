# Support capacity levels and contingencies

Based on how many application engineers are able to work each day and how many open cases we have across the team, we are able to quickly see if we have enough capacity to operate business-as-usual or if we need to invoke any contingencies.

We center the following as guiding statements for what we want to be true during periods when we do not have enough capacity to operate business-as-usual:

- Our customers feel that we care about them and the issues they experience with our product
- Our application engineers feel that it’s okay and safe to take the time they need
- Our application engineers covering those who are out feel supported and able to serve our customers well (ie, they are not breaking)
- Our customer engineering, sales, and community teammates don’t ever have to wonder what state support is in / what the plan is to get our customers the help they need

As a general practice, we don't think about the day like this. During exceptional circumstances (holidays, team or company-wide travel events, pandemics), we refer to these levels and contingencies.

When we opt to invoke the levels/contingencies, a member of CS leadership:

1. Alerts the team in #customer-support-internal, reminding folks they need confirmation before starting their focus day whilst the levels and contingencies are in play and clarifying what non-customer work we will suspend until further notice
2. Alerts our teammate in #customer-support that we may need to invoke contingencies to handle for ongoing lack of capacity and why.

Then, folks doing CS triage post in #customer-support to share what level the team is at twice daily around the following times:

- 10:00 UTC to share our level for EMEA timezone coverage (09:00 - 16:00 UTC)
- 17:30 UTC to share our level for our Americas timezone coverage (14:00 - 1:00 UTC)

They also invoke whatever contingency is outlined for that level. The contingency for each level includes the contingency for all preceding levels (for example, if we are at level 4, we are doing all contingencies noted for levels 1-4). It is also possible that we would be at different levels for EMEA coverage vs Americas coverage.

## Level parameters and contingencies

### Summary

- Levels 1-3 only impact the CS team and do not require cross-functional coordination
- Level 4 requires cross-functional coordination with the community team
- Levels 5-6 requires cross-functional coordination with the CE and sales teams
- Level 7 requires cross-functional collaboration with the CE team
- Level 8 requires cross-functional collaboration with the engineering team

#### Level 1

Within planned threshold when **ALL** of the following **are true**:

- 3 Africa/Europe-based AERs working
- 9-11 US-based AERs working
- Each AER working has no more than 5 open, active cases

**Contingency:** n/a; this is business as usual.

#### Level 2

**CS team coordination required** when **ANY** of the following **is true**:

- 2 Africa/Europe-based AERs working
- 6-8 US-based AERs working
- Each AER working has more than 5 open, active cases

**Contingency:** CS-triage coordinates who handles what.

#### Level 3

**CS team flexibility required** when **ANY** of the following **is true**:

- 2 Africa/Europe-based AERs working
- 5 US-based AERs working
- Each AER working has more than 7 open, active cases

**Contingency**: CS-triage pauses all non-issue related work to focus on helping customers ONLY (OKR work, documentation updates etc are put on hold) **AND** will alert AERs with a focus day they need to remain available if needed.

#### Level 4

**Community responsiveness flexibility required** when **ANY** of the following **is true**:

- 2 Africa/Europe-based AERs working
- 4 US-based AERs working
- Each AER working has more than 8 open, active cases

**Contingency:** CS-triage alerts #community-relations that we are at level 4 and will get to posts in the #help channel in our Slack community as soon as we are able and within 24 hours from the time of each post. **AND** CS-leadership takes responsibility for issues, too (if possible and only if it is less work for the team, not more).

#### Level 5

**Post-sales responsiveness flexibility required** when **ANY** of the following **is true**:

- 1 Africa/Europe-based AER working
- 3 US-based AERs working
- Each AER working has more than 9 open, active cases

**Contingency:** CS-triage alerts #ce that we are at level 5 and will get to all issues from post-sales customers as soon as we are able and within 4 business hours from the time of post.

#### Level 6

**Pre-sales responsiveness flexibility require**d when **ANY** of the following **is true**:

- 1 Africa/Europe-based AER working
- 2 US-based AERs working
- Each AER working has more than 9 open, active cases

**Contingency:** CS-triage alerts #ce and #sales that we are at level 6 and will get to all issues from pre-sales customers as soon as we are able and within 2 business hours from the time of post.

#### Level 7

**CE-collaboration required** when **ALL** of the following **are true**:

- 0 Africa/Europe-based AER working
- 1 US-based AERs working
- Each AER working has more than 10 open, active cases

**Contingency:** CS-triage alerts #ce that we are at level 7 and would appreciate CE taking all issues for pre- and post-sales customers as far as they can before CS takes responsibility.

#### Level 8

**Engineering collaboration required** when **ALL** of the following **are true**:

- 0 Africa/Europe-based AER working
- 0 US-based AERs working
- Each AER working has more than 10 open, active cases

**Contingency:** CS-triage alerts #prod-eng-announce that we are at level 8 and alert engineering and product leadership that we would appreciate any SWEs who are able to raise their hand to help our customers directly with issues affecting them (which issues to be shared by whomever is on CS-triage at the time).
