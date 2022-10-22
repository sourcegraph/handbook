# Cloud Team Roles and Responsibilities

The aim of this document is to identify the roles within the Cloud team and align on the responsibilities for each role.

## Roles

- [Cloud Engineer](#cloud-engineer)
- [Cloud EM and PM](#cloud-em-and-pm)
- [DRI](#dri)
- [On-call Engineer](#on-call-engineer)
- [Security Engineer](#security-engineer)

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
- Collect and share with with the team future goals and plans -- i.e. things to do for strategic customers -- to better plan the QX roadmap

- Identify and escalate gaps in processes, tooling, and ownership that affect the Cloud roadmap

- Maintain processes for how we work
- Track progress of larger initiatives
- Maintain a broad view on state and status of team initiatives and roadmap items
- Manage Cloud dependencies on other teams
- Manage relationship with cross-function peers (CE, Sales, Support, Legal etc)
- Fight for headcount
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
