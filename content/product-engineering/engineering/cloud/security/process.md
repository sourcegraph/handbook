# Security - How we manage our work

Our processes are in a period of change, so if in doubt, please reach out to us directly in Slack at #security.

## Contents

- [Principles](#principles)
- [Process overview](#process-overview)
- [How to work with us](#how-to-work-with-us)
- [Other processes](#other-processes)

## Principles

1. [Goals](../../../../company/goals/guidelines.md) are something we strive for, whilst tracking and communicating progress.
2. A work item is a piece of work (e.g., writing code, hiring a new teammate, deploying a new tool) that makes progress toward achieving a goal.
3. Releases may be made up of N workitems, that may impact Y goals. Whilst this is true, we communicate both internally and externally progress towards those goals.
4. Security by its various nature has constraints on how public it's work can be. The Security team are currently trialing Jira for our execution of work - work in Jira is not currently visible, but out [high level plans](../../../../company/strategy/cloud/security/index.md) are still public.
5. Work items can still be raised by anyone in the ([main repo](https://github.com/sourcegraph/sourcegraph) and private workitems ([security repo](https://github.com/sourcegraph/security-issues/)) can be created in. Over time workitems should move from the private repository to the public repository once they can be made public. The ideal goal state is the lack of a private security repository.

## Process Overview

### Planning & Roadmap

1. We plan iterations and features (prior to their execution) in a team planning session.
2. We set one or more goals for the iteration.
3. We write RFCs and solicit feedback (ideally), prior to the start of an iteration, but especially with forethought in mind.
4. We hold weekly team syncs and [track them here](https://docs.google.com/document/d/1l-JyN-hol2G6YXNqPsJsIgN2z3aZEzOW4-Julu4xthI).

ProductBoard serves as our tool for oversight and higher level planning.

In it, you can find:

- [Our roadmap](https://sourcegraph.productboard.com/roadmap/2866503-fy2022-security)
- [A filtered view of all the things we (or others) would like us to do](https://sourcegraph.productboard.com/feature-board/2130270-security)
  - These are a wishlist, refer to the status and whether they have a quarter set in order to judge whether we have them in our sights

Work stays in ProductBoard until it qualifies from "we might do this" to "we are going to". At that point, things transition over into Jira for more detailed planning and execution.

### Execution

Jira is intended only for **planned** work.

- Big work
  - Stuff we're **going to do** makes it into here via ProductBoard, where it gets broken down, ordered, and prioritized against other commited stuff
- Small items that don't fit with the strategic roadmap, but that need to be done soon
- Bugs
- Asks from internal teams (e.g. support or consultation)
