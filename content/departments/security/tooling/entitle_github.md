# GitHub access using Entitle

Some of the use cases for using Entitle for GitHub permissions and team access:

- Quarterly Manager review of their GitHub teams
- Temporary access to a specific team
- Teammates switched teams and needs to be added to their new team

## Managers' access to GitHub teams

Request "Maintainer" role in GitHub via Entitle to review your teams and add or remove teammates as neccessary.

In Entitle or the /access_request in Slack:

- Request a specific permission
  - Integration: GitHub
  - Resource: [Name of your team]
  - Role: **Maintainer**
  - Grand method: Direct
  - Duration: (suggested 1 day)
  - Justification: example, "to audit teamm ember access for team xx"

<img src="https://storage.googleapis.com/sourcegraph-assets/Screenshot%202023-04-21%20at%203.05.21%20PM.png" alt="Manager access review example" width="450" height="500">

Once approved, you can go into GitHub to conduct the review.

## Teammate access to specific GitHub teams

This can be used for short or more permanent durations.

The steps to renew a request if very quick (you get a reminder that your access is expiring and you can click, renew, and it will send the same ticket values through the process without having to fill it out again).

In Entitle or the /access_request in Slack:

- Request a specific permission
  - Integration: GitHub
  - Resource: [Name of the team needed]
  - Role: **Member**
  - Grand method: Direct
  - Duration:
  - Justification:

<img src="https://storage.googleapis.com/sourcegraph-assets/Screenshot%202023-04-21%20at%203.12.06%20PM.png" alt="teammate access review example" width="450" height="500">

You will get a notification from Entitle once approved.
