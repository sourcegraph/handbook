# Communication

We're an [all-remote](../../company/remote/index.md) company, with teammates from all around the world and (soon) no primary office. To make this work, we need to be deliberate about how we communicate.

## Sources of truth

These places are the source of truth for information at Sourcegraph. Information in these places is expected to be accurate and up-to-date:

- [Documentation](https://docs.sourcegraph.com)
- [sourcegraph/sourcegraph repository](https://github.com/sourcegraph/sourcegraph)
- [sourcegraph/about repository](https://github.com/sourcegraph/sourcegraph)
  - [about.sourcegraph.com](https://about.sourcegraph.com)
  - [Sourcegraph handbook](../index.md)
  - [Sourcegraph blog](https://about.sourcegraph.com/blog)
- [Project roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#)
- [Issue tracker](https://github.com/sourcegraph/sourcegraph)
- [HubSpot](https://app.hubspot.com)
- [JIRA Service Desk](https://sourcegraph.atlassian.net/jira/servicedesk/projects/SG)
- [Looker](http://sourcegraph.looker.com/)

### Scratchpads and ephemeral information (non-sources of truth)

The following places are not sources of truth. Treat documents and conversations in these places as "scratchpads" or documents that were true at creation time but aren't expected to be up-to-date. Any decisions or changes resulting from these places need to be reflected in a [source of truth](#sources-of-truth):

- [Slack](team_chat.md)
- [RFCs](rfcs/index.md)
- Email
- Zoom recordings
- All other Google Docs/Sheets/Slides

## Meetings

- [Company meeting](company_meeting.md) (Mondays 10:30-11:00am PST/PDT)

### Internal meetings

- Always start on time, even if some participants are late. (And try not to be late.) Latecomers can watch the Zoom recording.
  - Don't punish the people who arrived on time by waiting for people or repeating what was already said.
  - If the meeting's leader is not present at the precise start time (and hasn't proactively mentioned they are late), everyone should leave the call and switch to other work. This is a nudge to respect others' time and to not be late to meetings you lead.
- Always end on time (or early).
  - If there's more to discuss, handle it asynchronously or schedule a new meeting with the appropriate participants.
  - A meeting that would run over is a nudge that the meeting's agenda or duration was wrong, or that the meeting was led ineffectively.

### External meetings

- Join meetings early or on time.
- End meetings on time.
- Be patient for external folks who are running late to our meetings.

  - For customers, prospects, and users, wait on the line for at least 10 minutes (and send them a friendly reminder after 3-5 minutes).

## [1-1 meetings](../leadership/1-1.md)

See "[1-1 meetings](../leadership/1-1.md)".

## Google Docs

We use Google Docs for:

- [RFCs](rfcs/index.md)
- Collaborative editing of ephemeral documents

### Deprecating a Google Doc

Deprecate a Google Doc when its content is added to the handbook, blog, or documentation (or other [source of truth](#sources-of-truth)). This lets people know to not consult, edit, or comment on it anymore.

1. Rename the Google Doc to `DEPRECATED - <previous doc title>`.
1. Delete all doc content, and replace it with `See <URL to new content location>.`.

See [example of deprecated Google Doc](https://docs.google.com/document/d/1M22s-WDY9lp_JOitfv48cZNjtv4x6IJVKhlHZOAIlLM/edit#heading=h.23jju0ooahdb).

## Video calls

Most meetings at Sourcegraph are video calls. We prefer [Zoom](https://zoom.us) for all video calls because it seems to have the best connectivity and compatibility.

1. Google Calendar has a [Zoom plugin](https://chrome.google.com/webstore/detail/zoom-scheduler/kgjfgplpablkjnlkjmjdecgdpfankdle?hl=en-US) where you can easily add a Zoom link for a video call to the invite.
1. Set Zoom meetings to be recorded to the cloud so that you and other teammates can refer back to them later.
   - If any participant doesn't feel comfortable with the meeting being recorded, it is fine to not record it.

## Writing

1. Always use [ISO dates](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) in all writing and legal documents because other formats [lead to online confusion](http://xkcd.com/1179/). Use `yyyy-mm-dd`, for example 2020-04-13, and never 04-13-2020, 13-04-2020, 2020/04/13, nor April 13, 2020. Even if you use an unambiguous alternative format, it is still harder to search for a date, sort on a date, and for other team members to know we use the ISO standard. For months use `yyyy-mm`, so 2020-01 for January 2020.
1. Prefix the year with `FY` (e.g., `FY20` for fiscal year 2020) when referring to fiscal year, which starts on February 1 and ends January 31. {#fiscal-year} We use this instead of calendar years (`CY`) because Q4 ending during the December holidays makes the quarters less even and predictable.
  - FY__ is fiscal year 20__ (e.g., `FY20` is fiscal year 2020, which means 2020-02-01 through 2021-01-31)
  - FY__-Q1 (e.g., `FY20-Q1`) is February 1 through April 30
  - FY__-Q2 is May 1 through July 31
  - FY__-Q3 is August 1 through October 31
  - FY__-Q4 is November 1 through January 31