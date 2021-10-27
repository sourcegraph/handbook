# Security goals and priorities

## Current Goals

### 1. Secure Sourcegraph Cloud for private code (due end of 2021-July)

**Problem:** The [Core application team](../../../../engineering/core-application/index.md) is working toward [private code on Sourcegraph Cloud](index.md). Prior to allowing users to index their own private code with Sourcegraph, we need confidence that we can proactively identify and resolve security issues. We also need to ensure that we're protected against known security flaws.

**Milestones:**

1. ✅ We have a better way to store and access [our own secrets](https://docs.google.com/document/d/1HzO7szEm-h4fqlQOnVbcJdpDmfQiM7Rb-Tz4CMEYl-Q).
2. ✅ External surface scanning - [issue](https://github.com/sourcegraph/sourcegraph/issues/21298) (Being executed by Core App)
3. ✅ Security review - authentication and authorization
4. ✅ Reviewing and restricting site admins on [sourcegraph.com](https://sourcegraph.com/)
5. ✅ Customer facing security policy
6. ✅ Pen test
7. ⏳ GCP access control audit

## Future Goals

These are goals that we have not started working on, but expect to begin work on in the near future. They exist as direct continuations of our current goals, and are documented to show how we plan to ensure the continuity of our work.

### 1. Secure Sourcegraph Cloud for SMBs

**Problem:** The [Core application](../../../../engineering/core-application/index.md) team is working toward [enabling Sourcegraph Cloud as an alternative to on-premise deployments](../core-application/index.md). To be confident that Sourcegraph Cloud is a secure alternative to Sourcegraph on-premise, we need a high degree of confidence in our security posture. We'll do this by improving visibility across our entire threat surface, as well as continuously and proactively ensuring the efficacy of our security controls.

1. We have confidence that our centralized logging infrastructure is production-ready, and we have relevant tooling and testing environments configured.
2. We're confident that we're ingesting logs from all services that are tightly coupled to our Cloud deployment. This is anything that directly interacts with our cloud deployment with elevated privileges, or directly allows authentication to these services.
3. Additional continuous scanning and alerting is implemented.
   1. Continuously scan our sourcecode for vulnerabilities (SAST), and document triage and patching processes.
   2. Continuously monitor our 3rd party dependencies for vulnerabilities and outdated versions.
4. We're ingesting logs from all services loosely coupled to our Cloud deployment. This is anything that cannot independently impact Cloud, but may be leveraged to gain access, extract sensitive information, or otherwise negatively impact cloud.
5. We have confidence that the logs we're ingesting provide enough useful information about their context. This is a prerequisite for normalizing our log format.
6. Normalize log format in our centralized log storage so that it is easier to correlate and search. This is a prerequisite for creating automated alerts from the logs.
7. Create alerts and dashboards to automate the process of investigating events of interest (e.g., detect and alert on a spike of failed login attempts to a single account, or across Sourcegraph Cloud as a whole).
8. We connect our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) to Sourcegraph Cloud and only [members who can access that repository on GitHub](https://github.com/sourcegraph/security-test/settings/access) can access that repository on Sourcegraph Cloud (i.e., [Sourcegraph organization owners](https://github.com/orgs/sourcegraph/people?query=role%3Aowner) and @sourcegraph/security members). We then advertise a bounty for each unique vulnerability that allows an unauthorized person to gain access to this [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
9. We run a time-bound capture the flag event where there are larger bounties for being able to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
10. Document and publish our security practices so that our customers can review and audit them.

### 2. SOC Audit readiness

**Problem:** As we begin providing a SaaS product, attaining a full SOC 2 & SOC 3 certification will become necessary to enable the business. Note that a SOC 3 provides the same assurances as a SOC 2 certification, but contains fewer details, and is something that we can [freely distribute](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc3report.html). If reasonable, we'll pursue SOC 2 type 2 in parallel with this, since it's the same audit process. After operating in a SOC 2 environment for six months, we will attain SOC 2 type 2 - as per the requirement.

1. Configure [Vanta](https://www.vanta.com/) to document and plan our SOC readiness.
1. Prepare for SOC 2 type 1 certification and contract with an auditor to complete the audit.
   1. This will serve as a way to communicate to our customers that we're on the right track in our SOC certification process.
   1. SOC 3 is the focus as audit reports are designed to be more easily digestible than SOC 2 - nothing prevents us from sharing our SOC 2 audit artifacts.
1. Put protocols in place to produce and gather the requisite auditable artifacts for SOC 3.
1. Attain SOC certifications and publicly share the reports.

## Roadmap

- [High level roadmap in Productboard](https://sourcegraph.productboard.com/roadmap/2866503-fy2022-security)
- [Completed/in-progress/planned in Productboard](https://sourcegraph.productboard.com/feature-board/2130270-security)
