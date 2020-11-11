# Security goals and priorities

## Goals

These goals represent our targeted work for 70% of our time. The remaining 30% is reserved for items that arise such as security reports. Our current work is documented in our [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+label%3Ateam%2Fsecurity+is%3Aopen).

### Visibility into Sourcegraph Cloud's attack surface

**Problem:** The Cloud team is working toward [private code on Sourcegraph Cloud](../cloud/index.md#private-code-on-sourcegraph-cloud). Before we can have [confidence in our security model](#confidence-in-our-security-model), we first need to have visibility into current risks, issues, and threats, so we can proactively plan what work needs to be done (i.e., we don't want to be relying on or waiting for security researchers or customer to report vulnerabilities to us).

**Milestones:**

1. All Docker images are continuously scanned for known security vulnerabilities and the security team is alerted as vulnerabilities are found. (3.21 release)
    1. Three or more vulnerabilities with a high severity, or a CVSS score of at least 4.0 are resolved. (3.21 release)
1. We have resolved container vulnerabilities with a high severity, or a CVSS score of at least 4.0, or that resolution is planned. (3.22 release)
1. All compute nodes are continuously scanned for known security vulnerabilities and the security team is alerted as vulnerabilities are found. (3.22 release)
    1. We have resolved compute vulnerabilities with a high severity, or a CVSS score of at least 4.0, or that resolution is planned. (3.23 release)
1. Implement centralized storage of all of our existing logs (e.g., application logs, compute infrastructure logs). (3.23 release)
1. Start collecting audit and access logs (e.g., visibility into both intentional and unintentional logins). This is useful from both a security visibility point of view, as also a requirement for various auditing frameworks (though not currently a target). (3.23 release)
1. Normalize log format in our centralized log storage so that it is easier to correlate and search. This is a prerequisite for creating automated alerts from the logs. (3.24 release)
1. Create alerts and dashboards to automate the process of investigating events of interest (e.g., detect and alert on a spike of failed login attempts to a single account, or across Sourcegraph Cloud as a whole). (3.24 release)

### Confidence in our security model

**Problem:** We need to have a high degree of confidence in our overall security before we ask paying customers to trust us with their private code.

**Milestones:**

1. We need a better way to store and access [our own secrets](https://docs.google.com/document/d/1HzO7szEm-h4fqlQOnVbcJdpDmfQiM7Rb-Tz4CMEYl-Q).
1. We connect our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) to Sourcegraph Cloud and only [members who can access that repository on GitHub](https://github.com/sourcegraph/security-test/settings/access) can access that repository on Sourcegraph Cloud (i.e., [Sourcegraph organization owners](https://github.com/orgs/sourcegraph/people?query=role%3Aowner) and [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) members). (3.22 release)
   - **DEPENDENCY:** We can't do this until we can have [private code on Sourcegraph Cloud](../cloud/index.md#private-code-on-sourcegraph-cloud)
1. We advertise a bounty for each unique vulnerability that allows an unauthorized person to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud. (3.23 release)
   - **DEPENDENCY:** This milestone depends on milestone 3 of [Visibility into Sourcegraph Cloud's attack surface](#visibility-into-sourcegraph-clouds-attack-surface). We should detect and fix the obvious issues ourselves before we start to invite others to attack us with large bounties.
1. We run a time-bound capture the flag event where there are larger bounties for being able to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud. (3.24 release)
1. We host our private [infrastructure repository](http://github.com/sourcegraph/infrastructure) on Sourcegraph Cloud. (TBD, somewhat dependent on outputs of CtF)
1. We allow paying customers to host their private code on Sourcegraph Cloud. (TBD, somewhat dependent on outputs of CtF)

## Roadmap

See [WIP roadmap in productboard](https://sourcegraph.productboard.com/feature-board/2119755-cloud)
