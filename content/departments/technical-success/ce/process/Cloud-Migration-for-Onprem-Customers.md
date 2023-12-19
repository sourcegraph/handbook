# Sourcegraph Self-Hosted to Cloud instance migration

This document is to help CE/TA's migrate existing customers to cloud. The migration is executed by the IE team (#ask-implementation).

> [!NOTE] It is the responsibility of the TA/CE to own the customer relationship, co-ordinate all the internal/external resources and activities for a successful cloud migration.

> [!NOTE] If you are working with a strategic customer with complex migration needs, the CE/TA should request help from the Implementation Team.

> [!WARNING] The customer must agree to our cloud TOS before going on Cloud, this is generally handled by the AE. Work with your AE before starting the process

Once the commercials are squared away, the migration can begin. The Cloud will create/monitor the instance. However, most everything else will be owned by the IE team including:

- If we will be performing a data migration
- If we are working with a large enterprise/strategic customer that has complex needs
- If the customer generally would benefit from additional help with configuration (especially if they will be building out Precise as part of the migration)

### Steps for Migrating from Self-Hosted to Cloud

1. (CE/TA owned) Make a copy of [this doc](https://docs.google.com/document/d/1QcaAMG2YsaOnnht1YIZyMQ1mOfygSVfdXgBdbNc00GA/edit?usp=sharing) and works with the customer to fill it out

2. (CE/TA owned) Ask the customer if data migration is required. In most cases, it's not! All repos can be re-indexed and the instance can be reconfigured with insights, saved searches and etc. However, this saved searches, contexts, notebooks, etc. from the self-hosted instance will not be available unless a data migration is performed.

   - Some data like active-inflight batch changes and usage history will be lost forever and can't be recreated.
   - This list is not fully comprehensive there might be other parts of the product which can't be re-configured manually.

3. (CE/TA owned) If a data migration is required, contact the IE team to own. As the src snapshot utility tool will be used to perform the migration, customers must qualify for a data migration. To qualify, they must:

   - have a Sourcegraph instance on v3.20.0 or later
     - If the instance is on an earlier version, the self-hosted instance will need to be upgraded to a version that supports multi-version upgrades (v3.20.0 or later) before performing the data migration
   - use databases on Postgres 12 or later
   - _not_ have [on-disk database encryption](https://docs.sourcegraph.com/admin/config/encryption) enabled
   - have the [latest release](https://github.com/sourcegraph/src-cli/releases) of [`src`](https://github.com/sourcegraph/src-cli)
   - have direct database access
   - have a site-admin access token for their instance

   See [On-prem data migration to Cloud v2: Requirements](../../../cloud/technical-docs/v2.0/onprem_data_migration.md#requirements) for more details.

4. (CE/TA owned) Request a cloud instance [as per our handbook page](../../..//cloud/#managed-instance-requests)

5. (IE owned) Perform the data migration and/or instance configuration

6. (CE/TA owned) Cloud/Sourcegraph enablement - work with customer to provide cloud or Sourcegraph enablement and training as required, to make sure all the users are onboarded. See [On-prem data migration to Cloud v2: Process](../../../cloud/technical-docs/v2.0/onprem_data_migration.md#process) for more details.

### Different strategies for cloud migration

- Cold switch over: This is the simplest migration stratergy (if no data migration is required), we can provision the cloud instance and the customer can redirect users to access the new deployment. Customer can do an internal redirect via proxy config from their self-hosted/on-prem Sourcegraph URL to <instance>.sourcegraph.com
- Running both instances in parallel: The idea here is to run both self-hosted/on-prem and Cloud instance simultaneously. This approach works best, if no data migration is required. Sourcegraph can provision a cloud instance for the customer, which can be configured and tested before retiring the onprem Sourcegraph deployment.
  -- This stratergy can be combined with onboarding users in phases with enablement, as opposed to just turning off the old onprem instance (akin to cold switch over)
- Managed switched over: This stratergy is preferred when data migration is required. IE will own the migration, and the CE/TA will need to have more of a hands on approach to manage the entire migration process. This involves working with customer on a go-live plan and milestones; getting a data dump, provisioning infra, co-ordinating cutoff process for switch over, communication internal/external stakeholnders and co-ordinating resources.
