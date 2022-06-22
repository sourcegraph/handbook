# Cloud DevOps Team

If you're looking for [Delivery] documentation instead of DevOps, visit this [page](../delivery/index.md).

## Vision

The two primary pillars of the Cloud Team are Availability and Observability as defined in [RFC 498](https://docs.google.com/document/d/1FOuWZk6wdL7vOA09pb8ILyBYuQ8tEe5saAxebjKduBw/edit#heading=h.trqab8y0kufp)

This team ensures that Sourcegraph.com has the same reliability and availability as other world-class SaaS offerings.
This team is also responsible for Observability monitoring and tooling to ensure that we are meeting these goals.

More can be found in our [Cloud Vision](../index.md#vision)

## Areas of Ownership

The Cloud DevOps team is responsible for the infrastructure used to host Sourcegraph.com. This includes but is not limited to dashboard and observability, uptime and reliability, and managing our cloud provider resources.
This team works closely with the other teams in the Cloud org to ensure sourcegraph.com is available and functional for our users.
Notably, this team has the ability to slow or stop rollouts to Sourcegraph.com if needed to improve stability.

This team is responsible for

- Continuous deployment of Sourcegraph.com
- Cloud monitoring infrastructure (Prometheus / Grafana)
- [Managed instances](./managed/index.md)

## Contact & Support Guideline

- The best way to contact the `cloud-devops` team is in the #cloud-devops slack channel. If it is urgent, please cc `@devops-support` in your message.
- Issues with `team/devops` labels and [@team/cloud-devops](https://github.com/orgs/sourcegraph/teams/cloud-devops) team on GitHub
- Please do not `@cloud-devops-team` or directly message individual teammates - this is to try and protect their focus. Instead, use the `@devops-support` handle, and the On-Call DevOps teammate will be notified.

## Content

- [Onboarding](onboarding.md)
- [How to deploy a code change to the Cloud](deploy-code-change.md)
- [Large release (rollout release) process](deploy-code-change.md#large-releases-to-cloud-rollup-releases)
- [How to make configuration changes to sourcegraph.com](update_sg_website_config.md)
- [Datadog monitoring](datadog.md)
- [How to add or modify DNS Records](dns.md)
- [Disaster Recovery](disaster-recovery.md)
- [How to resize disks in StatefulSet](resize-disks-in-statefulset.md)
- [How to use preprod aka staging](preprod.md)
- [Persistent disk backup schedule](persistent-disk-backup-schedule.md)
- [Silencing Alerts](silencing-alerts.md)
- [Cloud Postgres](cloud-postgres.md)
- [Managed instances operation](./managed/index.md)
- [Opsgenie](opsgenie.md)

## How we work

We primarily work within the following repositories:

- [sourcegraph/sourcegraph/monitoring](https://github.com/sourcegraph/sourcegraph/tree/main/monitoring)
- [infrastructure](https://github.com/sourcegraph/infrastructure)
- [Our Cloud GitOps repo](https://github.com/sourcegraph/deploy-sourcegraph-cloud)
- [Managed Instance configuration repo](https://github.com/sourcegraph/deploy-sourcegraph-managed)

### Issue tracking

[The DevOps GitHub Project board](https://github.com/orgs/sourcegraph/projects/220/views/23) is the single source of truth.

### Planning, Sync & Retro

We don't have sprint or cycles. We are mostly task-driven under the quarterly goals.

1. Planning/Sync (weekly)

   - This is the good time to call out issues you would like to discuess with everyone
   - Review our GitHub Project board to prioritize tasks for the week

1. Retro (bi-weekly)

   - A review of what we did for learing purposes

### Standup (async)

We use [geekbot](https://app.geekbot.com/dashboard/standup/97887/view) to keep others informed of what’s going on asynchronously. This is a good time to share your progress and ask for help to remove any blockers.

### On-call

We maintain an [on-call rotation in Opsgenie](https://sourcegraph.app.opsgenie.com/teams/dashboard/9ec2825d-38da-4e2b-bdec-a0c03d11d420/main). Reponsibilities of the teammate who is on-call include:

- Acknowledging incoming alerts
- Initiating incident procedures
- Publishing postmortems
- Adding issues to the DevOps GitHub board with the label `devops/support` for external support requests, such as Slack messages addressed to `@devops-support`

#### Issue handover

If the on-call teammate reaches the end of their shift with unresolved issues, they inform the rest of the team in #cloud-devops-internal.

## Goals

### FY23Q2 Goals

**TODO**

### FY22Q4 Goals

- Assist the Cloud-SaaS team with [RFC 525](https://docs.google.com/document/d/1FgrB6VIFT9eNQHmL4C0zipS9Vr8jfQ5n5IASy17gT7c/edit#heading=h.trqab8y0kufp)
- Stabilize our CD environment
- Create a pre-production environment for Cloud
- Standardize our monitoring, logging and error reporting systems
- Migrate our zonal cluster to a regional cluster and document the process
- Complete assigned security tasks on behalf of security and provide evidence of completion

[delivery]: ../delivery/index.md
