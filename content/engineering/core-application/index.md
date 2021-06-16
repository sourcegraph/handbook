# Core application team

<img width="70%" height="70%" src="logo.jpg" alt="Sourcegraph Cloud team logo">

While you could think this is an angry cloud, it's actually a fierce and determined one 😃.

The core application team owns a number of [fundamental areas](#areas-of-ownership) in our product and code base.

Our current work-streams are:

1. **Core application**: Building, securing and scaling our multi-tenant hosted version of Sourcegraph for customers that do not want to deploy Sourcegraph on-premise. Also meeting the needs of larger and larger enterprises to support those deals (e.g. Perforce support)
2. **Backend platform**: Make it easy for teammates of different experience levels to onboard and contribute to backend code. Hide and remove non essential complexity from engineers working on new product features and use cases. Promote and champion consistency and simplicity across all backend code by building shared tools, libraries and infrastructure for common use cases. Scale and maintain said infrastructure. Create leverage for and accelerate other teams.

## Areas of ownership

- Authorization and authentication
- Repository management (gitserver, repo-updater, src-expose)
- Data storage and access libraries
- GraphQL API
- License generation and enforcement
- Admin and user settings
- Analytics

## [Goals](goals.md)

See [goals](goals.md)

## Contact

- #core-application channel or @core-app in Slack
- [team/core-application](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/core-application) label in GitHub.

- #backend-platform channel in Slack
- [team/backend-platform](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/core-application) label in GitHub.

## Resources

- [Cloud roadmap](https://sourcegraph.productboard.com/feature-board/2119755-cloud)
- [GitHub Projects](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Cloud+OR+Core+OR+Backend)
- [Manual migrations](manual_migrations.md)

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+monitoring.ObservableOwnerCoreApplication&patternType=literal)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/01b8adfc-9b85-462b-a841-945791c17e9e/main)

## Processes

We have two week cycles starting on Wednesdays. We do a sync planning the day before (Tuesday) where we determine what each teammate works on. We use JIRA to track that work. We do a sync retrospective before the planning meeting, and have a general team sync meeting every other Monday. We use Geekbot in the #core-application-sync channel for daily updates.

## Team norms

### Getting assistance

If you need assistance with a task, let the team know in the #core-application-sync channel. You'll find your peers are more than happy to act as a [rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging) and get you unblocked, or direct you to the right person(s) for further assistance.

See [Tagging teammates](#tagging-teammates) below for more information.

### Giving assistance

Consider setting up regular [office hours](https://support.google.com/calendar/answer/190998?co=GENIE.Platform%3DDesktop&hl=en) so that peers can reserve your time, while knowing that they won't be disrupting your daily workflow.

### Code reviews

- **Post-merge feedback:** It is important to make progress while getting feedback from other teammates in code reviews. On the one hand, the pull request author doesn't have to be blocked by all reviewers who the author intends to get feedback from; on the other hand, reviewers can still focus on their work on hands and leave feedback at their convenience. The pull request author should use their best judgement to decide if a pull request should wait (for high-risk changes) or simply rely on post-merge feedback.
- **Approve to unblock:** When the reviewer thinks there are no obvious blockers and trusts the pull request author will take care of comments/questions/concerns (e.g. answer to questions, explain rationale, act on code suggestions) before merging the pull request.
- **Request for changes:** When the reviewer believes it is important to get another round of review from the person before merging the pull request. This situation often happens when there is a significant design change.

### Tagging teammates

Feel free to tag `@core-app` on Slack or anyone directly as and when required. It is acceptable to tag people to get their attention. On the contrary it is also acceptable to turn off your notifications when you want to focus and do not want to be interrupted.

## Members

<!-- Due to the markdown renderer that we use, the indentation here is sensitive. If you want to change the indentation, check that it renders correctly locally with `make serve` -->

- [Ryan Phillips](../../company/team/index.md#ryan-phillips-he-him) ([Product Manager](../../product/roles/index.md#product-manager))
- [Quinn Keast](../../company/team/index.md#quinn-keast-he-him) ([Product Designer](../../product/roles/index.md#product-designer))
- [Rafal Leszczynski](../../company/team/index.md#rafal-leszczynski-he-him) ([Engineering Manager](../roles.md#engineering-manager))
  - [Joe Chen](../../company/team/index.md#joe-chen)
  - [Ryan Slade](../../company/team/index.md#ryan-slade-he-him)
  - [Alan Harris](../../company/team/index.md#alan-harris-he-him)
  - [Artem Ruts](../../company/team/index.md#artem-ruts-he-him)
  - [Asdine El Hrychy](../../company/team/index.md#asdine-el-hrychy)
  - [Indradhanush Gupta](../../company/team/index.md#indradhanush-gupta-he-him)
  - FQ4 hire
