# Batch Changes team

<img src="https://storage.googleapis.com/sourcegraph-assets/badgerhat.svg" width="300" height="300" align=right alt="Batchers Logo: badger in a silly hat">

## Strategy

- Vision, mission and strategy: [Batch Changes strategy](../../../../strategy-goals/strategy/code-graph/batch-changes/index.md)
- [Key metrics](metrics.md)

## Contact

- For general questions or concerns, #batch-changes channel or @batchers on Slack.
- For engineering support requests, customer questions, or anything else, @batcher-support on Slack.
- @sourcegraph/batchers team or [team/batchers label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fbatchers) on GitHub.

## Process

- We prioritize our work in [our planning board](https://github.com/orgs/sourcegraph/projects/216). It is the responsibility of the PM and EM to keep this updated and correct.

- Each day, Slack reminds us to do our text check-in, which consists of a _short_ message (it shouldn't take longer than a minute to write) in the reminder's thread. This should be a recap of what we have finished that day.

- One Big Thing: Each sprint, each engineer gets one big thing to work on — one significant chunk of work scoped to be doable in a single sprint (leaving some slack in the sprint for customer support and other unexpected issues). When it is completed, engineers will pull P0 items from [our planning board](https://github.com/orgs/sourcegraph/projects/216) into the current sprint to work on (or P1 if there are no P0s).

- Support rotation: Each sprint, one engineer will assume the role of support engineer, serving as the primary point of contact for customer questions or issues with Batch Changes that are escalated by CE and CS. The support rotation schedule is laid out in our [team sync agenda doc](https://docs.google.com/document/d/1opVINuZ1PfNZCx3zJP3BwlXAEG5SYt8HIIdGab115j8/edit#), and customer GitHub issues on our team's radar are tracked on [our support board](https://github.com/orgs/sourcegraph/projects/218). Any engineer is always welcome to jump in on support requests, but it is the responsibility of the support engineer to ensure that issues that come in are not ignored or lost.
  - At the beginning of a new sprint, the incoming support engineer should update the @batcher-support "user group" in Slack to remove the previous support engineer and add themselves.
  - At the end of a sprint, the outgoing support engineer should use their discretion to decide whether to finish in-progress issues themselves or hand them off to the next support engineer. Either way, the outgoing engineer should review the state of the support board with the incoming engineer in order to ensure a smooth transition.
  - Engineers may arrange for their teammates to cover them on days during their support rotation that they are unavailable due to PTO, holidays, etc.

## Sprint planning

Our two-week sprints start every other Wednesday. On the Tuesday before, we have our sprint planning meeting to determine our common goals for the iteration. The process for this is described in our [agenda doc](https://docs.google.com/document/d/1d4_WndknEd23BNUFG05-KEV4pq2MNx8mdZedVnZpLCg/edit#). After sprint planning, the team has a retro to discuss how the previous sprint went, and what changes we might want to our working agreements.

## Working Agreements

- To avoid siloing of knowledge and to keep teammates happy, we make sure that everyone gets a chance to work in different areas of the codebase. In particular, we don't want tasks in area X to always default to person P. We want to strike a healthy balance between spreading knowledge around and building individual expertise in one area.
- We do not schedule team meetings on Fridays. (Folks are free to pair on Fridays if they want.)
- We do not scramble to get last-minute changes in before branch-cut. (If it's a blocking issue, there's [a process for that](../../releases/index.md#issues).)
- If there is no agenda in our sync doc for our team syncs by 5 minutes before the meeting starts, then the meeting will be cancelled.
- If a process isn't serving us, we are quick to either change it or get rid of it.
- We aim to improve the developer experience of working on the Batch Changes and the larger Sourcegraph codebase as we work on it. We do that by allowing ourselves to set aside time to implement improvements if we see a chance to do so. For example: it's okay to spend half a day improving our test tooling if we know that it will make things easier for us and others in the future.
- By default, we record team meetings with 3+ participants (with exceptions for social meetings and retros).

## Team Communication

Our team has two Slack channels, one for everyone (#batch-changes) and one just for us (#batch-changes-internal). Both channels are public and able to be joined by anyone, but _our default is to use #batch-changes._

The internal channel is for communications that would be of no interest to someone not on the team. Things like (re-)scheduling of team meetings, vacation scheduling, reminders about tasks that need completing, etc. Keeping these out of the public channel raises the signal-to-noise ratio for folks interested in Batch Changes, but not interested in who will be 10 minutes late to our sync meeting today due to the fact that their cat knocked over a jar of pickles and now there's glass everywhere and everything smells like vinegar and now you wish you hadn't read this sentence to the end.

For bringing support questions or requests to the team, you can alert the engineer who is currently on support rotation using the @batcher-support alias.

## Stewardship of src-cli

The Batch Changes team is the current owner of [src-cli](https://github.com/sourcegraph/src-cli), due to the fact that most of the src-cli work in recent months has been related to Batch Changes. We do not expect to be the permanent owners of src-cli; when another team becomes the main contributor, we will transfer ownership to them.

## Members

- [Malo Marrec](../../../../team/index.md#malo-marrec) ([Product Manager](../../../product/roles/index.md#product-manager))
- [Rob Rhyne](../../../../team/index.md#rob-rhyne) ([Product Designer](../../../product/roles/index.md#product-designer))
- [Chris Pine](../../../../team/index.md#chris-pine) ([Engineering Manager](../../roles.md#engineering-manager))
  - [Thorsten Ball](../../../../team/index.md#thorsten-ball)
  - [Adam Harvey](../../../../team/index.md#adam-harvey)
  - [Erik Seliger](../../../../team/index.md#erik-seliger)
  - [Kelli Rockwell](../../../../team/index.md#kelli-rockwell)
  - [Adeola Akinsiku](../../../../team/index.md#adeola-akinsiku)

## Growth plan

We are looking to add one [experienced full-stack engineer](https://boards.greenhouse.io/sourcegraph91/jobs/4179711004) to our team to help us grow our product in FY22 Q4.

## Onboarding

- As a Batch Changes teammate
  - [Onboarding](onboarding.md)
- As a customer support engineer (CSE) supporting Batch Changes
  - [Supporting Batch Changes](supporting-batch-changes.md)
- As a customer engineer (CE) supporting Batch Changes
  - [CE onboarding](ce-onboarding.md)
- As a sales team member
  - (private) AE training: [recording](https://drive.google.com/file/d/10oeyEvKNKk4RdyJUtvc-rXcgcmGhSrc2/view?usp=sharing), [slides](https://docs.google.com/presentation/d/1N50kk1N712lvsWI_BrGB4WH8LHnOVYrkxqvRS9WubuA/edit#slide=id.g7d2aea8729_0_0)
  - [Batch Changes positioning](../../../../marketing/product-marketing/batch_changes_positioning.md)

## Sourcegraphers using Batch Changes

This is a non-exhaustive list of Sourcegaphers use cases for Sourcegraph (either internally or on side-projects):

- Run TS-Morph-powered codemods on the frontend platform repository. [Spec](https://k8s.sgdev.org/batch-changes/executions/QmF0Y2hTcGVjOiI0eGNQQVVIaVoxZCI=?workspace=QmF0Y2hTcGVjV29ya3NwYWNlOjk0ODQwNA==) (private)
- Update PR templates across many repositories.
- Standardize versions of tools across many repositories by updating .tool-versions files. [Search](https://k8s.sgdev.org/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph+file:%5E%5C.tool-versions+shfmt&patternType=literal&case=yes) (private)
- Update CI configuration across several repositories. [Blog post](https://unknwon.io/posts/211110_sourcegraph_batch_changes/)
- Tracking release changesets.

## Related links

- [User-facing documentation](https://docs.sourcegraph.com/batch_changes)
- [Developer documentation](https://docs.sourcegraph.com/dev/background-information/batch_changes)
- [Batch Changes Drive Folder (private)](https://drive.google.com/drive/u/0/folders/18Sa_NpsVRvVV8MIvuXyoDEinpEf8fbGn)
- [Batch Changes Product Marketing Brief](https://docs.google.com/document/d/1yQpCKF50gx8_T-KDnU4s9TjW6fZpMUfWLF2h4xSM8jk)

## Attribution

Our team logo was designed using resources from [Flaticon](https://www.flaticon.com/).
