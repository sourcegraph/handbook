# Security goals and priorities

## Current Goals

These goals represent our targeted work for 70% of our focus time. The remaining 30% is reserved for items that arise such as security reports. Our current work is documented in a [private GitHub project](https://github.com/orgs/sourcegraph/projects/130).



### 1. Secure Sourcegraph Cloud for private code

**Problem:** The [Cloud team](../cloud/index.md) is working toward [private code on Sourcegraph Cloud](../cloud/index.md#private-code-on-sourcegraph-cloud). Prior to allowing users to index their own private code with Sourcegraph, we need confidence that we can proactively identify and resolve security issues. We also need to ensure that we're protected against known security flaws.



**Milestones:** 

1. We have a better way to store and access [our own secrets](https://docs.google.com/document/d/1HzO7szEm-h4fqlQOnVbcJdpDmfQiM7Rb-Tz4CMEYl-Q).
2. We have implemented continuous scanning for known security vulnerabilities, and have resolved all impactful vulnerabilities.
   1. Infrastructure vulnerability scans
   2. Docker image scans
   3. We have resolved compute vulnerabilities with a high severity, or a CVSS score of at least 4.0.



## Future Goals

These are goals that we have not started working on, but expect to begin work on in the near future. They exist as direct continuations of our current goals, and are documented to show how we plan to ensure the continuity of our work.

### 1. Secure Sourcegraph Cloud for SMBs

**Problem:** The [Cloud team](../cloud/index.md) is working toward [enabling Sourcegraph Cloud as an alternative to on-premise deployments](../cloud/index.md#private-code-on-sourcegraph-cloud). To be confident that Sourcegraph Cloud is a secure alternative to Sourcegraph on-premise, we need a high degree of confidence in our security posture. We'll do this by improving visibility across our entire threat surface, as well as continuously and proactively ensuring the efficacy of our security controls.

1. We have confidence that our centralized logging infrastructure is production-ready, and we have relevant tooling and testing environments configured.
2. We're confident that we're ingesting logs from all services that are tightly coupled to our Cloud deployment. This is anything that directly interacts with our cloud deployment with elevated privileges, or directly allows authentication to these services.
3. Additional continuous scanning and alerting is implemented.
   1. Continuously scan our sourcecode for vulnerabilities (SAST), and document triage and patching processes.
   2. Continuously monitor our 3rd party dependencies for vulnerabilities and outdated versions.
4. We're ingesting logs from all services loosely coupled to our Cloud deployment. This is anything that cannot independently impact Cloud, but may be leveraged to gain access, extract sensitive information, or otherwise negatively impact cloud.
5. We have confidence that the logs we're ingesting provide enough useful information about their context. This is a prerequisite for normalizing our log format.
6. Normalize log format in our centralized log storage so that it is easier to correlate and search. This is a prerequisite for creating automated alerts from the logs.
7. Create alerts and dashboards to automate the process of investigating events of interest (e.g., detect and alert on a spike of failed login attempts to a single account, or across Sourcegraph Cloud as a whole).
8. We connect our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) to Sourcegraph Cloud and only [members who can access that repository on GitHub](https://github.com/sourcegraph/security-test/settings/access) can access that repository on Sourcegraph Cloud (i.e., [Sourcegraph organization owners](https://github.com/orgs/sourcegraph/people?query=role%3Aowner) and [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) members). We then advertise a bounty for each unique vulnerability that allows an unauthorized person to gain access to this [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
9. We run a time-bound capture the flag event where there are larger bounties for being able to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
10. Document and publish our security practices so that our customers can review and audit them.



### 2. SOC Audit readiness

**Problem:** As we begin providing a SaaS product, attaining a full SOC 2/3 certification will become necessary to enable the business. Note that a SOC 3 provides the same assurances as a SOC 2 certification, but contains fewer details, and is something that we can [freely distribute](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc3report.html). If reasonable, we'll pursue SOC 2 type 2 in parallel with this, since it's the same audit process. After operating in a SOC 2 environment for six months, we will attain SOC 2 type 2 - as per the requirement.

1. Configure [Vanta](https://www.vanta.com/) to document and plan our SOC readiness.
1. Prepare for SOC 2 type 1 certification and contract with an auditor to complete the audit. 
   1. This will serve as a way to communicate to our customers that we're on the right track in our SOC certification process.
   1. SOC 3 is the focus as audit reports are designed to be more easily digestible than SOC 2 - nothing prevents us from sharing our SOC 2 audit artifacts.
1. Put protocols in place to produce and gather the requisite auditable artifacts for SOC 3.
1. Attain SOC certifications and publicly share the reports.



## Roadmap

See [WIP roadmap in productboard](https://sourcegraph.productboard.com/feature-board/2119755-cloud)
