# (Unsupported) Migrate a Self-Hosted Installation to Managed Instance

> **NOTE:** We do not formally offer this service to our customers. This page is a product of a proof-of-concept.

This page describes the process of migrating a self-hosted Sourcegraph deployment to a Managed Instance. A team member from the Customer Engineering (CE) team
may request a migration on behalf of a customer. The technical steps are carried out by the Delivery Team.

## Workflow

1. CE creates an issue with the customer migration template in the `sourcegraph/customer` repository.
1. Delivery provides a Level of Effort (LOE) within the migration request.
1. Delivery Engineering Manager (EM) and Product Manager (PM) will coordinate and schedule Delivery resource for migration.
1. Delivery resource performs the migration according to the Migration Procedure below.

## Providing Migration Level of Effort

Within the Customer Migration issue provided by CE, add the following information:

1. **Upgrade path with time estimate.** Sourcegraph must be updated one minor version at a time. Identify [the upgrade path](https://docs.sourcegraph.com/admin/updates/docker_compose) from the customer's self-hosted version to the version that is currently deployed to managed instance. Generally you can estimate 20-30 minutes per minor version upgrade.
1. **Resource estimate.**

# Migration Procedure

## 1. Gathering Necessary Information

This information should be contained in the managed instance request template. Reach out to the CE for more details if needed.

## 2. Create the Managed Instance

[Create a Managed Instance](creation_process.md) using the `VERSION` of the customer's self-hosted installation. This is provided in the migration request.

## 3. Perform the data load

Load the customer data into the managed instance from the backup.

### A) Set up the environment

```
export $NEW_DEPLOYMENT=<red or black>
export $PROJECT_PREFIX=managed
export $CUSTOMER=<customer slug>
```

### B) Retrieve the Encrypted Payload

CE will provide the location of the encrypted payload. Using the GPG key in 1Password, decrypt the payload.

```
gpg --decrypt name.tar.gz.asc -o name.tar.gz
```

### C) Upload the payload to the managed instance

Use `gcloud scp` to copy decrypted tarball. Replace `name.tar.gz` with the name of the tarball.

```
gcloud compute scp --project "$PROJECT_PREFIX-$CUSTOMER" --tunnel-through-iap name.tar.gz root@default-$NEW_DEPLOYMENT-instance:~/name.tar.gz
```

### D) Start a SSH session into the managed instance

Use gcloud ssh to get as shell into the managed instance

```
gcloud compute ssh --project "$PROJECT_PREFIX-$CUSTOMER" --tunnel-through-iap $NEW_DEPLOYMENT/docker-compose/docker-compose.yaml root@default-$NEW_DEPLOYMENT-instance:/deployment/docker-compose/docker-compose.yaml
```

### E) Stop all containers

Stop all containers, we don’t want state being modified during the data loading

```bash
cd /deployment/docker-compose
docker-compose down
```

### F) Unpack the payload

untar the tarball

```bash
tar -xzvf name.tar.gz.asc
```

### G) Stage the backup

```bash
mv pgsql_dump.sql /tmp/pgsql_dump.sql
```

### H) Mount the database backup into the database container

Edit `docker-compose.yaml` to mount the PostgresSQL dump into the container
add the following line to the `volumes:` stanza for `pgsql`.

```
volumes:
  - /tmp/pgsql_dump:/tmp/pgsql_dump
```

### I) Start the database container

10. docker-compose -d up `<container_name>`

**Choose the appropriate value for <container_name>**

- `pgsql` is the frontend database container
- `codeintel-db` is the Code Intel database container

### J) Shell into the database container

```
docker exec -it pgsql /bin/sh
```

### K) Drop Existing Database

When Sourcegraph first starts, either the `frontend` or `migrator` will run initial database migrations.
Since we are loading database dumps that contain `CREATE DATABASE` instructions, we need to undo the initial creation.

> NOTE: These commands are executed within the database container shell session.

```bash
# Start a connection to postgres
pgsql -U sg
```

```sql
// connect to the postgres database, cannot delete the schema that is currently selected
\c postgres

// delete the existing database
DROP DATABASE sg;

// create an empty schema
CREATE DATABASE sg;

// quit the pgsql session
\q
```

### L) Load the database dump

> NOTE: These commands are executed within the database container shell session.

```bash
psql -U sg sg < /tmp/pgsql_dump.sql
```

Once the database dump is loaded successfully, exit the database container shell session.

```bash
exit
```

### M) Repeat Steps 3F to 3K for the CodeIntel DB (if provided)

Some customers may only provide the "pgsql" or frontend database dump. If the customer provides a Code Intel database dump, repeat the procedure from steps 3F to 3K, replacing

### N) Edit the Site-Config JSON file from the customer data payload

Edit the Site Configuration JSON file provided by the customer.

- Set the `externalUrl` to the new value matching the convention `<slug>.sourcegraph.com`
- Configure the alerts similarly to Step 27 in the [Creating a managed instance](creation_process.md) procedure.

### O) Start Sourcegraph

```
docker-compse up -d
```

- Verify all containers are running.
- Examine `frontend` logs, checking for critical errors.

## 4. Take a snapshot

Take a snapshot at this point to preserve the state of the instance before proceeding any further. In case a mistake is made later in the procedure, a known starting point will be preserved.

## 5. Upgrade to the latest version

Sourcegraph must be upgraded 1 minor version at a time.

1. [Perform in-place upgrades](upgrade_process.md#in-place-updates) from the customer's self-hosted version to the latest version deployed to managed instances.

Repeat in-place upgrade process for upgrade path (Glovo’s listed below)

- 3.35.1
- 3.36.3
- 3.37.0

## 6. Reconcile Site Health

This will require interpretation and will be unique for every migration. Use your best judgement, however it may be helpful to evaluate site health by examining the Grafana dashboard for any existing alerts, examine service logs.

## 7. Take a final Snapshot

Take a snapshot after resolving any critical alerts or site configuration issues. This will provide a known starting point before transferring over to the customer. If the customer makes a mistake between the time of handover and the next automated snapshot, a restore point will be available.

## 8. Handover to Customer

- Notify CE that managed instance is ready for customer.
- Notify CS that migration has been completed for customer, CS updates their notes.
