This document is to help CE/TA's migrate existing customers to cloud. The migration is executed by the cloud team (#ask-cloud channel).

> NOTE: It is the responsibility of the TA/CE to own the customer relationship, co-ordinate all the internal/external resources and activities for a successful cloud migration.
> NOTE: If you are working with a strategic customer with complex migration needs, the CE/TA can request help from the implementation team. To request assistance, post in #ask-implementation channel

> WARNING: The customer must agree to our cloud TOS before going on cloud, this is generally handled by the AE. Work with your AE before starting the process

Once the commercials are squared away, the migration can begin.

1. Make a copy of [this doc](https://docs.google.com/document/d/1QcaAMG2YsaOnnht1YIZyMQ1mOfygSVfdXgBdbNc00GA/edit?usp=sharing) and work with the customer to fill it out
2. Ask the customer if data migration is required, in most cases its not! As all repos can be re-indexed and the instance can be reconfigured with insights, saved searches and etc.

- Some data like active-inflight batch changes and usage history will be lost forever and can't be recreated.
- This list is not fully comprehensive there might be other parts of the product which can't be re-configured manually.

3. If a data migration is required, then use the src snapshot utility tool. To qualify for a data migration, the customer must:

- have a Sourcegraph instance on v3.20.0 or later
- use databases on Postgres 11 or later
- _not_ have [on-disk database encryption](https://docs.sourcegraph.com/admin/config/encryption) enabled
- have the [latest release](https://github.com/sourcegraph/src-cli/releases) of [`src`](https://github.com/sourcegraph/src-cli)
- have direct database access
- have a site-admin access token for their instance

4. Request a cloud instance [as per our handbook page](<[https://github.com/sourcegraph/src-cli/releases](https://handbook.sourcegraph.com/departments/cloud/#managed-instance-requests)>)
5. Cloud/Sourcegraph enablement - work with customer to provide cloud or Sourcegraph enablement and training as required, to make sure all the users are onboarded.

Different stratergies for cloud migration

- Cold switch over: This is the simplest migration stratergy (if no data migration is required), we can provision the cloud instance and the customer can redirect users to access the new deployment. Customer can do an internal redirect via proxy config from thier onprem Sourcegraph URL to <instance>.sourcegraph.com
- Running both instances in parallel: The idea here is to run both onprem and cloud instance simultaneously. This approach works best, if no data migration is required. Sourcegraph can provision a cloud instance for the customer, which can be configured and tested before retiring the onprem Sourcegraph deployment.
  -- This stratergy can be combined with onboarding users in phases with enablement, as opposed to just turning off the old onprem instance (akin to cold switch over)
- Managed switched over: This stratergy is preferred when data migration is required. The CE/TA will need to have more of a hands on approach to manage the entire migration process. This involves working with customer on a go-live plan and milestones; getting a data dump, provisioning infra, co-ordinating cutoff process for switch over, communication internal/external stakeholnders and co-ordinating resources.
