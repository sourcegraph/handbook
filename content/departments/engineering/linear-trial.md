# Using Linear at Sourcegraph (trial)

<!--
TODOs post adoption:
- Remove trial from doc title
- Combine with 'working with issues' doc
- Update guidance around label groups.
- Update mentions of Eng Private team if we
  merge that with main Eng team. Maybe we still need
  a separate OSS team for OSS repos.
-->

This document describes recommended ways of using Linear
during the trial period, without causing a disruption to
team members who continue using GitHub
and are not part of the trial.

While the [Linear docs](https://linear.app/docs) are excellent,
here is a very quick run down of the core mental model.

- The workspace is divided into Teams.
  - Settings related to workflow (issue statuses, estimates, cycles),
    templates (for issues, projects etc.), syncing with external tools
    and so on are customizable per Team.
- **Issues** are the smallest unit of work.
  - Issues can have sub-issues, be blocked by other issues etc.
  - An Issue belongs to a single Team: the issue identifier includes
    a short prefix based on the Team. (Example: ENG-123)
- **Views** allow slicing/dicing Issues in flexible ways.
  - Views work both within Teams and across Teams.
- **Projects** allow grouping issues into more coherent units.
  - A Project belongs to a single Team, but can contain issues
    that belong to other Teams.
  - Project can have Documents that allow inline comment threads
    similar to Google Docs.
- **Roadmaps** allow grouping projects into larger units,
  and are owned at the workspace level.

For more details, see the [conceptual model docs](https://linear.app/docs/conceptual-model).

## Logging in

Install the [Linear app](https://linear.app/download) or
go to [our Linear workspace](https://linear.app/sourcegraph)
and log in with SAML SSO.

## Team structure

For now, we will aim to use coarse-grained teams.
To start out with, there are 5 teams: Eng PUBLIC,
Eng Private, Product, Design and Implementation.

Teammates in other parts of the company interested
in testing out Linear should feel free to create new Teams.

### Eng PUBLIC and Eng Private

Eng PUBLIC has _full_ bidirectional syncing with `sourcegraph/sourcegraph`.
This means that the following will be synced across,
regardless of whether the change is made in Linear or GitHub:

1. New issues being created.
2. Changes to labels, issue title, issue description,
   new comments (for the "GitHub thread" in Linear), and
   open/close status.

All other repositories have _partial_ bidirectional syncing,
which means that out of (1) and (2) above, only (2) is enabled,
i.e. new issues created in Linear will not be synced to GitHub.
This applies to:

- `sourcegraph/customer` - synced with Eng Private
- `sourcegraph/cody`
- `sourcegraph/src-cli`
- `sourcegraph/scip`, `sourcegraph/scip-java` and other indexers
- All other private repositories that have syncing turned on.
  The full list of repos with syncing can be found [here](https://linear.app/sourcegraph/settings/integrations/github).

Both Eng PUBLIC and Eng Private are configured to use [2 week cycles](https://linear.app/docs/use-cycles)
based on [RFC 916](https://docs.google.com/document/d/16mipKz0fc2Ki5NYXG8Rarb8b4KHh34t27P9Ao_m8e-o/edit).

## Adding a new repository (for Engineering)

You can ask for help in `#wg-linear-trial` with these steps as well.

1. Add the repository to the [GitHub integration](https://linear.app/sourcegraph/settings/integrations/github).
   If you do not see repositories in the Sourcegraph GitHub org listed here,
   you may need to request the `sourcegraph - Owner` GitHub permission in Entitle.

   - For private repos, use the `Eng Private` team.
   - For public repos, use the `Eng PUBLIC` team.

   DO NOT enable the "Enable bidirectional sync" toggle;
   it only applies to _new issues_ created in Linear.
   Comments, label changes, title and description changes will
   still sync bidirectionally even if that toggle is disabled.
   See the [FAQ](#faq) for more details.

2. Under [Import / Export](https://linear.app/sourcegraph/settings/import-export),
   add a GitHub repository. After clicking 'Connect to GitHub' there may
   be a delay of 10-15s before you see the options for selecting a repo.

   If you do not see repositories in the Sourcegraph GitHub org listed here,
   you may need to request the `sourcegraph - Owner` GitHub permission in Entitle.

   - If present, disable the toggle for importing data from organization level projects.
   - Enable the toggle for importing data from closed issues.
   - Select the team to import issues into:
     - For private repos, use the `Eng Private` team.
     - For public repos, use the `Eng PUBLIC` team.

   After importing is complete, you will have the option to configure it.
   Make sure all these checkboxes are checked:

   - Import N open issues
   - Import N stale issues to Archive
   - Import N closed or done issues to Archive
   - Sync issues after import

   So that syncing is maintained for old issues, and all issue history
   is available for search.

   After this step, select 'Import users' and make sure that:

   - If a person has 'Map to Existing' but no associated account on
     the right side, then change it to 'Do not create'
   - Replace any 'Create with email' with 'Do not create'

   Once you click next, confirm on the next page that:

   - The number of user invites is zero
   - The number of completed issues matches up with the closed
     issues in the repo's GitHub issue tracker.

At the moment, all repos except for the monorepo use an extra issue label
to allow filtering for views inside Linear. For example, the `scip-java`
repo uses the `graph/scip-java` label.
Here is an [example PR](https://github.com/sourcegraph/scip-java/pull/685/files)
for auto-adding the label to new issues.
For old issues, you can quickly add the label after importing into Linear.

## Dos and Don'ts

1.  **Don't create new Teams for sub-teams in Engineering**
    (except for testing Linear features, that's OK).
    Instead, let's try to tweak existing settings or enable new ones
    which would be useful to all teams.
2.  **Do add other repositories of interest to Linear**.
    - Even for repos which only have PRs, if the PR descriptions
      use Linear identifiers such as `Fixes ENG-123`,
      then the corresponding issue will be auto-closed.
    - Caveat: Do not enable bidirectional syncing for other repos
      in Eng PUBLIC or Eng Private.
3.  If your team is on-board, **do connect your team's #discuss
    channel with Eng Private using Linear Asks**
    ([here](https://linear.app/sourcegraph/settings/asks))
    to easily turn Slack threads into issues. ([docs](https://linear.app/docs/linear-asks))
4.  **Avoid creating new label groups inside Linear**
    (creating new labels, is OK). - If you attempt to create a new label with `/` on-the-fly
    when editing an issue, Linear will create a label group
    instead of a "flat" label.

    For example, if you type `X/Y` for a new label, it will create
    a group `X` with a label `Y` in that group. Since `X` is the
    group name, the label synced to GitHub will be just `Y`.
    This may be confusing to someone seeing the issue on GitHub
    as the prefix is no longer available.

    - Label groups also have at-most-one semantics - you can't apply
      multiple labels from the same group to a single issue.
    - Alternative: you can create a label with `/` from the Team's settings
      ([example link](https://linear.app/sourcegraph/settings/teams/ENG/labels)).

5.  **Do explore the various Linear [features](https://linear.app/docs)
    and [integrations](https://linear.app/sourcegraph/settings/integrations)**.

## FAQ

### Why are Eng PUBLIC and Eng Private separate?

The Eng Private team is present because of the following
considerations:

1. We have some private repositories on GitHub.
2. We'd like to use bidirectional syncing for the trial
   period to avoid disrupting people not using Linear.
3. To test out whether Linear can work well as a single
   pane of glass for issues, we need to sync issues from
   our private repos into Linear.
4. The Linear -> GitHub sync direction uses the default
   repo set in the GitHub integration, instead of offering
   a repo picker.
5. The default repo for Eng PUBLIC is sourcegraph/sourcegraph
   for ease of use.

The above factors create the risk of an information leak
if someone creates an issue in Linear with customer details.

Eng Private also provides a natural place to create issues
from Slack threads which may have customer details.

### Why not create separate Linear Teams for each sub-team in Engineering?

We initially considered doing this but decided against it
for the following reasons:

- It would create a proliferation of issue prefixes in identifiers,
  making it harder to identify the top-level team based on the identifier.
- If there were any re-orgs in the future, having the issue identifiers
  change to reflect new team names would be a disorienting experience,
  especially for teammates outside Engineering.
- For teammates outside Engineering, it would be valuable to reduce
  the number of potential places to file issues.

However, if the flexibility provided by the current team structure
is not enough, then we can consider creating smaller Teams in Linear
at the end of the trial (around mid May).

### Why don't we have full bidirectional syncing for all repos?

This limitation is present because Linear doesn't offer a repo picker
in the UI if bidirectional issue creation syncing is
enabled for more than 1 repo.

This means that even if we enabled
bidirectional syncing for say `sourcegraph/cody` with the Eng PUBLIC
Team, you couldn't actually create issues which sync to that repo directly
in the UI. To have that work, we'd have to create a separate Cody Team
in Linear with `sourcegraph/cody` being it's default bidirectional syncing repo.

However, that would defeat the above goal of avoiding creating
separate Linear Teams for each sub-team in Engineering.

## Known restrictions

- No custom fields for Issues.
- An issue can have at most one assignee (DRI model).
