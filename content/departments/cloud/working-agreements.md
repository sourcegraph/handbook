# Cloud Team Working Agreements

Guidelines for how the [Cloud team](./index.md) collaborates.

## Roles of Cloud teammates

- [Cloud Engineer](#cloud-engineer)
- [Cloud EM and PM](#cloud-em-and-pm)
- [DRI](#dri)
- [On-call Engineer](#on-call-engineer)
- [Security Engineer](#security-engineer)

## Issue tracking

The [Cloud team GitHub Project](https://github.com/orgs/sourcegraph/projects/264/views/1) is the single source of truth.

Learn more about [how we use GitHub Projects](./github-projects-beta.md)

Learn more about [grooming and estimation process](./grooming-and-estimation-process.md)

## Project planning

### How do we work on projects?

Aside from ad-hoc and support tasks, our work is usually considered as part of an initiative. This section will walk through the process of how to discover, plan, scope, estimate and prepare the work for execution. At a high level, every initiative is considered a project; every [project](#project-initiative) consists of multiple [milestones](#milestone); each milestone consists of many [tasks](#task).

For example, below is the mental model to approach a project to add support for a new region to Cloud:

> Adding new region support to Cloud is the project. Usually, the first step would be performing discovery work. In this case, this could be quickly putting a working deployment (proof of concept, or POC) in the new region. After the discovery, it provides a better idea of what needs to be done. The second step would be to properly define the scope and break them down to multiple milestones for execution. This could be presented in the form of a RFC or some other document and it should be peer reviewed by the team or relevant stakeholders. Such document should meet the requirement of [Definition of Ready](#definition-of-ready) prior to execution. The project should also meet the requirement of [Definition of Done](#definition-of-done) to be considered as finished.

> NOTES: we intentinoally use `steps` instead of `milestones` for the discovery and scoping phase, and `milestones` are reserved or actual delivery milestones within the project.

### How do we update project status?

<!--
The DRI is expected to provide weekly update in #cloud-internal-status-updates on the project status. For every ongoing project, the DRI should provide update on the current milestone using the following questionnaire. Slack will send a reminder `@cloud-team` every week in #cloud-internal-status-updates to provide the project status updates. Use the `Update Project Status` Slack workflow and fill up the form to provide the update.

- which initiative?
- which milestone?
- what is the status? green, yellow, or red
- what is the significant progress?
- is there any encountered risks, delays, problems, and blockers?
- what do you plan on working next week?

#cloud EM will aggregate status of all ongoing projects status and broadcast with the organization in #cloud. In the future, we may consider having a rotation for the weekly combined update.
-->

Use go/ship-okrs

## On-call (support) rotation

We maintain an [on-call rotation in Opsgenie](https://sourcegraph.app.opsgenie.com/teams/dashboard/9ec2825d-38da-4e2b-bdec-a0c03d11d420/main). Responsibilities of the teammate who is on-call include:

- Acknowledging and triaging incoming alerts on Opsgenie in a timely fashion, including low priority alerts such as P3, P4 alerts.
- Acknowledging inquires in #discuss-cloud-ops or being tagged via the `@cloud-support` handle. Please follow [intake process](#
- Initiating incident procedures
- Publishing postmortems

On-call engineers are explicitly empowered to work on reliability issues and other high priority work while on-call.
This is a critical part of the role and is expected to be a significant portion of the on-call engineer's time.
The on-call engineer is expected to be available to respond to alerts and to initiate incident procedures.

This means that an on-call engineer has the ability BUT IS NOT REQUIRED to work on tasks that improve the reliability of Sourcegraph Cloud.
Examples include work right-sizing instances to reduce the number of alerts. They may choose to work on these tasks instead of their assigned work.

### On-call issues intake process

We generally see two categories of issues:

- CAT1: escalated by TA/CE/CS
- CAT2: surfaced from our preconfigured alerts on Opsgenie

For CAT1 issue, first perform some basic sanity check to rule out any infra problem, e.g., workload resource utilization, infra components states.
If it is determined to be non-infra problem, route the request to the owning team from go/whodoinotify directory. Cloud Ops team focus should be around builing tooling to operate fleet of Cloud instances, and we should delegate troubleshooting application-specific issues to the product team to protect our focuse. If the issue is deem incident-worthy, encourage the product team to open and own the incident, while making ourself available to support them.

For CAT2 issue, our team will continue to own the end-to-end process. However, escalate problem to the product team once it's determined to be application-specific problem.

## Communication

- #cloud - external channel for the Cloud team where other Sourcegraphers can ask for help or leave questions for the team
- #cloud-internal - internal channel for the Cloud team for all day to day communication within the team

## Glossary

### Project (Initiative)

A project represents bodies of work for stakeholders and non-involved teammates. A project should demonstrate business values to staksholders. A project is owned by DRI or the subgroup. A project should be served as the interface between #cloud and the rest of the organization.

### Milestone

A milestone tracks progress towards the completion of a project. Each milestone should demonstrate meaningful progress. Each milestone should provide value to the stakeholders. It should also have a **fixed scope** to avoid neverending project, and it should always have a **estimated delivery date**. Milestone should be served as the interface between DRI and the rest of the team. Therefore, milestone progress should be included in the weekly status update within the team.

### Task

A task is the smallest unit of work that we peform. DRI has the final say on how the task is structured and performed. Teammates outside of the subgroup are not expected to keep track of individual tasks.

Tasks are typically tracked as issues in [GitHub Projects](#issue-tracking).

### Definition of Ready

The Definition of Ready (DoR) is a list of criteria that the high level initiative definition (exp. an epic) should meet in order to be ready for scoping down into individual GitHub issues:

- [Context and objectives](#context-and-objectives)
- [High-level plan](#high-level-plan)
- [Estimates](#estimates)

Each item should be assessed at each DRI's discretion.

#### Context and objectives

- Context behind project
  - Research on alternatives
  - Risks of not pursuing the initiative
  - Reasons to not pursue the initiative
- Objective of project
  - Business impact
  - Value to customers
  - How to measure impact and value
- External and internal dependencies
- List of stakeholders
- RFC or written document explaining the above

#### High-level plan

- Fixed scope, clear deliverables
- Milestones and plan for the work
  - MVP definition
  - Rollout plan
- Security risk level assessment and approval if required
- Impact assessment timelines

#### Estimates

- Cost projection
- Engineering capacity required estimate

### Definition of Done

The Definition of Done (DoD) is a list of criteria that the high level initiative definition (exp. an epic) _should_ meet in order to be considered DONE:

- [Work is completed](#work-is-completed)
- [Documentation is available](#documentation-is-available)
- [Approvals](#approvals)
- [Operability](#operability)

Each item should be assessed at each DRI's discretion.

#### Work is completed

- No more work required from the Cloud team
- Fully tested (unit/integration/scale/load/performance testing)
- Rolled out to applicable instances
- Future work tracked as issues

##### Documentation is available

- User-facing documentation
- Customer-facing documentation
- Enablement and training material for CE/sales
- [Operability](#operability) documentation

#### Approvals

- Security approval
- Legal and compliance approval
- Stakeholder sign-off (e.g. external team, CE engineers, etc)

#### Operability

Operational plans:

- Rollout plan
- Feature flagging/rollback plans
- Monitoring/observability plan
- Impact/correctness measurement plan
- Cost assessment and verification plan

Operational knowledge:

- On-call playbooks, troubleshooting/operational documentation
- Cloud team knowledge sharing focused on operator maintainence and future dev work (e.g. with docs or walkthroughs)
- Launch questionnaire or playbook

### Cloud Engineer

- Make continuous progress on roadmap items
- Implementation work
- Push for architecture/feature designs that work the best for the cloud
- Regularly team the team on their work, encountered problems, blockers, and delays
- Highlight potential security issues for review
- Complete work as defined by DRIs
- Documentation and testing
- Ensure the team stays technically flexible to deliver on changing requirements
- Identify areas of technical improvement, process improvement, and paring down tech debt
- Technical decision-making
- Code reviews of Go code and IaaC languages like Terraform
- Identify and escalate gaps in processes, tooling, and ownership that affect Cloud roadmap
- Identify team weaknesses and define processes for improvement
- Maintain a broad view on state and status of team initiatives and roadmap items
- Grow and maintain knowledge of GCP resources and when to use managed resources vs self-hosting

### Cloud EM and PM

- Lead and represent the team to external stakeholders
- Make sure the rest of company is aware of Cloud deliverables
- Align the Cloud roadmap with external priorities
- Support the DRIs with cross-team communication and establish requirements from other teams
- Collect and share with the team future goals and plans -- i.e. things to do for strategic customers -- to better plan the QX roadmap
- Identify and escalate gaps in processes, tooling, and ownership that affect the Cloud roadmap
- Maintain processes for how we work
- Track progress of larger initiatives
- Maintain a broad view on state and status of team initiatives and roadmap items
- Manage Cloud dependencies on other teams
- Manage relationship with cross-function peers (CE, Sales, Support, Legal etc)
- Define and execute staffing strategy to meet the business expectations
- Support individuals on the team
- Provide feedback and reviews for Cloud team members

### DRI

- Be held accountable for end-to-end design and delivery of initiatives
- Be held accountable for defining technical solutions to business problems
- Review code/changes made by other team members for a given project
- Clarify the problems to solve
- Work directly with stakeholders, the EM, and the PM
- Provide cross-team input on new features
- Make explicit "do" vs "delegate" decisions
- Request help from other teammates when needed
- Scope project work, write epics, tickets, and RFCs
- Own the delivery plan for the feature (outside of core work)
- Maintain updates on progress
- Keep stakeholders in the loop
- Technical decision-making

### On-call Engineer

- Handle pings from CE/Support
- Service new instance creation and teardown requests
- Handle ad-hoc requests
- Answer Cloud-related questions on Slack
- Be the first-responder for external inquires in [#cloud](https://sourcegraph.slack.com/archives/C03JR7S7KRP)
- Incident response
- Respond to alerts from managed instances and clean up recurring alerts (e.g. fix OOMs)
- Propagate relevant support work to on-call engineers on other teams
- Protect the focus of other members on the team
- Write post-mortems and on-call summaries
- Provide on-call hand-off notes
- Prioritize on-call and reliability work during rotation rather than backlog-work

### Security Engineer

- PR/RFC reviews
- Incident response during working hours
- Push cloud team to prioritise and resolve identified security vulnerabilities
- Ensure there is no duplicate or conflicting work between Cloud and Security
- Question design decisions from a security perspective
- Write IaaC modules for security policies
- Help align Cloud with Security initiatives
- Assist with compliance
- Approve new tools and workflows
- Define security requirements
- Bridge communications with security team
- Prioritize security roadmap items
- Documentation
- Proactively raise security awareness
- Define security best practices
- Help Sales/Legal with the security side of selling Cloud-related
- Support the team with decision-making
- Handle customer communications for CVEs
