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

This team is responsible for the continuous deployment of Sourcegraph.com

Our Cloud monitoring infrastructure (Prometheus / Grafana)

## Members

{{generator:product_team.devops}}

## Content

- [How to deploy a code change to the Cloud](deploy-code-change.md)
<<<<<<< Updated upstream
- [Large release (rollout release) process](deploy-code-change.md#large-releases-to-cloud-rollup-releases)
=======
- [Large-release-(rollout-release)-process](deploy-code-change.md#Large-releases-to-Cloud-(Rollup-releases))
>>>>>>> Stashed changes
- [How to make configuration changes to sourcegraph.com](update_sg_website_config.md)
- [Onboarding](onboarding.md)
- [How to add or modify DNS Records](dns.md)
- [Disaster Recovery](disaster-recovery.md)
- [How to resize disks in StatefulSet](resize-disks-in-statefulset.md)
- [How to use preprod aka staging](preprod.md)

## How to contact the team and ask for help

The best way to contact the cloud-devops team is in the #cloud-devops slack channel.

## Goals

### Q4 Goals

- Assist the Cloud-SaaS team with [RFC 525](https://docs.google.com/document/d/1FgrB6VIFT9eNQHmL4C0zipS9Vr8jfQ5n5IASy17gT7c/edit#heading=h.trqab8y0kufp)
- Stabilize our CD environment
- Create a pre-production environment for Cloud
- Standardize our monitoring, logging and error reporting systems
- Migrate our zonal cluster to a regional cluster and document the process
- Complete assigned security tasks on behalf of security and provide evidence of completion

[delivery]: ../delivery/index.md
