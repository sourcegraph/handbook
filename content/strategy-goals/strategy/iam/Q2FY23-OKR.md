# Q2 Objective and Key Results

### Problem Area: Align on Team Vision

- Key Result 1: An updated handbook page for the IAM team including mission, vision, and team working agreements.
- Key Result 2: A GitHub board outlining the key efforts on our 12-month roadmap validated by customer product gaps.

**Engineering OKR Alignment:** This does not align to engineering OKRs. It is necessary due to the formation of a new team.

### Problem Area: Unifying Feature Permissions

> NOTE: This work has been paused for Q2.

Today, nearly all Sourcegraph features (Code insights, batch changes, search notebooks, etc) have unique, custom permissions models, creating confusion for users and preventing cross-feature use cases from being developed.

- Key Result 1: A detailed product & technical plan for implementing a unified permissions model
- Key Result 2: Implementation of the MVP for a unified permissions model
- Key Result 3: Robust documentation for feature teams to adopt this updated permissions mode

Within this area, in Q2 we are not working on:

- Implementing RBAC for administrators
- Updating features to respect our permissions, this will be owned by each feature team

**Engineering OKR Alignment:** Objective #2: Focus on time-to-value for a single use-case (Fixing Vulnerabilities). With a single permissions model, Sourcegraph feature teams will be able to enable cross-feature experiences for our customers to fix vulnerabilities. For example, setting up a code monitor to ensure a vulnerability is not re-introduced after fixing with a batch change.

### Problem Area: Improve Admin Analytics

_Update_: The MVP of this work was launched as a part of [Sourcegraph 3.42](https://about.sourcegraph.com/blog/release/3.42).

Today, Sourcegraph Admins do not have a clear understanding of how their team is using (or not using) Sourcegraph. This information is valuable to help administrators (1) convey the value of Sourcegraph to executives and (2) make key decisions required to do their job effectively, such as monitoring remaining licenses.

- Key Result 1: Identify and deliver an improved usage analytics experience for admins.

**Engineering OKR Alignment:** Objective #1: Faster Time-to-Value by enterprises. Today, enterprise admins have very little visibility into usage within their organization. They are forced to rely on the basic stats provided by Sourcegraph or anecdotal reviews from their team. Introducing more fine grained analytics will enable admins to easily quantify value to their team and aid Sourcegraph AE/CE in driving upsell conversations based on usage within the org.

### Problem Area: Allow Admins to Control Sign-ups via Externally Defined Groups

_Update_: We shipped numerous improvements to allow admins to limit by [github teams](https://docs.sourcegraph.com/admin/auth#how-to-control-user-sign-up-and-sign-in-with-github-auth-provider), [gitlab groups and subgroups](https://docs.sourcegraph.com/admin/auth#how-to-control-user-sign-up-and-sign-in-with-github-auth-provider) and [SAML group membership](https://docs.sourcegraph.com/admin/auth/saml#how-to-control-user-sign-up-and-sign-in).

Today, Sourcegraph does not provide administrators the ability to specify who can and cannot sign up for Sourcegraph, yet this functionality is critical for customers who want to adopt a land-and-expand strategy for adoption within their organization.

- Key Result 1: Unblock deployment for blocked customers
- Key Result 2: A technical roadmap is written to provide admins the ability to limit user sign-up based on an externally defined entity (i.e. a GitHub Organization or Team, Gitlab organization, LDAP group for SAML connections).
- Key Result 3: Short term improvements are implemented to provide admins the ability to limit user sign up based on externally defined entities (i.e. GitHub organization, GitLab organization, IDAP group)

**Engineering OKR Alignment:** Objective #1: Faster Time-to-Value by enterprises. Today, customers who want to limit sign-ups to a specific group are either blocked or are required to spend extra time coordinating with our CE team to build a custom hack to achieve the desired outcome. By introducing this as a standard feature of Sourcegraph, customers who desire this will be able to deploy faster.
