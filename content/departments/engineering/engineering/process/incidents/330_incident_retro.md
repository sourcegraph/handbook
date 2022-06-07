## Background:

On Wednesday, July 21st, 2021, Sourcegraph released version 3.30 to customers. Within a few hours, several customers reported an inability to launch Sourcegraph utilizing the 3.30. Sourcegraph released updated changelogs requesting customers to stop any planned updates.

Upon further investigation, our engineers identified that in 3.30 the base postgres container was updated from debian to alpine (due to still-unpatched vulnerabilities in the debian image), which changed the glibc version. This new glibc version contained a major update of its Unicode locale data with new collation information. This change also required indexes depending on these collations to be rebuilt immediately (more information [here](https://postgresql.verite.pro/blog/2018/08/27/glibc-upgrade.html) and [here](https://docs.sourcegraph.com/admin/migration/3_30)).

## Looking Forward:

As a result of the 3.30 bug, Sourcegraph is committing to numerous changes to ensure this does not happen again. These changes impact both our engineering and support processes.

### Engineering:

#### Pre-release process (development, release prep, & cutting)

- Introduce improved test instances to ensure we trust the signals while testing future releases.
- Continue to encourage a “raise a flag” culture—when something _feels_ off, Sourcegraph engineers need to be encouraged to raise a flag and slow the process down. Customers are okay with the release coming a week late.
- Continue sharing knowledge across timezones to ensure we are not limited by any knowledge gaps in the event of future incidents.
- Routinely use amcheck to see if Postgres can self-report corruption issues. The tool cannot guarantee corruption is absent, but can prove existence when present.
- Work to migrate existing customers and set a standard for new customers to utilize managed external databases in their cloud providers (i.e. CloudSQL, RDS, Aurora, Aiven, etc)

#### Post-release process

- Create a clearly defined process/tooling for pausing/pulling a release that does not require individual messages to customers.
- Introduce an ‘insiders’ ring of customers who receive the build several days ahead of time. This insiders ring will ensure that customers who are comfortable with an increased level of risk will be able to trial Sourcegraph’s latest feature set while being able to rollback incase of an incident.

### Customer Support:

- Formalize our major incident response including instructions on how and when Sourcegraph will pull releases if major incidents occur in the future.
- Create a single source of truth for future major incidents which ensure all customers receive the latest information (ie, a status page)

We will continue to update this handbook page with status updates related to these action items.
