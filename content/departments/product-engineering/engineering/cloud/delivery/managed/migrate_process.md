# Migrate a Self-Hosted Installation to Managed Instance

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

## 2. Create the Managed Instance

[Create a Managed Instance](./creation_process.md) using the `VERSION` of the customer's self-hosted installation. This is provided in the migration request.

## 3. Perform the data load

Load the customer data into the managed instance from the backup.

### A) Retrieve the Encrypted Payload

CE will provide the location of the encrypted payload. Using the GPG key in 1Password, decrypt the payload.

```
gpg --decrypt name.tar.gz.asc -o name.tar.gz
```

### B) Upload the payload to the managed instance

Use gcloud scp to copy unencrypted tarball

### C) Start a SSH session into the managed instance

Use gcloud ssh to get as shell into the managed instance

```

```

### D) Stop all containers

Stop all containers, we don’t want state being modified during the data loading

```bash
cd /deployment/docker-compose
docker-compose down
```

### E) Unpack the payload

untar the tarball

```bash
tar -xzvf name.tar.gz.asc
```

### F) Stage the backup

```bash
mv pgsql_dump.sql /tmp/pgsql_dump.sql
```

### G) Mount the database backup into the database container

edit docker-compose.yaml to mount /tmp/pgsql_dump:/tmp/pgsql_dump

### H) Start the database container

10. docker-compose -d up `<container_name>`

**Choose the appropriate value for <container_name>**

- `pgsql` is the frontend database container
- `codeintel-db` is the Code Intel database container

### I) Shell into the database container

11. docker exec -it pgsql /bin/sh

### J) Drop Existing Database

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

### K) Load the database dump

> NOTE: These commands are executed within the database container shell session.

```bash
psql -U sg sg < /tmp/pgsql_dump.sql
```

Once the database dump is loaded successfully, exit the database container shell session.

```bash
exit
```

### L) Repeat Steps 3F to 3K for the CodeIntel DB (if provided)

Some customers may only provide the "pgsql" or frontend database dump. If the customer provides a Code Intel database dump, repeat the procedure from steps 3F to 3K, replacing

### M) Edit the Site-Config JSON file from the customer data payload

Edit the Site Configuration JSON file provided by the customer.

- Set the `externalUrl` to the new value matching the convention `<slug>.sourcegraph.com`
- Configure the alerts similarly to Step 27 in the [Creating a managed instance](https://handbook.sourcegraph.com/departments/product-engineering/engineering/cloud/delivery/managed/creation_process/) procedure.

Copy this file into frontend containers:

```

```

### N) Start Sourcegraph

```
docker-compse up -d
```

- Verify all containers are running.
- Examine `frontend` logs, checking for critical errors.

## 4. Take a snapshot

Take a snapshot at this point to preserve the state of the instance before proceeding any further. In case a mistake is made later in the procedure, a known starting point will be preserved.

## 5. Upgrade to the latest version

Sourcegraph must be upgraded 1 minor version at a time.

1. [Perform in-place upgrades](https://handbook.sourcegraph.com/departments/product-engineering/engineering/cloud/delivery/managed/upgrade_process/#in-place-updates) from the customer's self-hosted version to the latest version deployed to managed instances.

Repeat in-place upgrade process for upgrade path (Glovo’s listed below)
3.35.1
3.36.3
3.37.0

## 6. Reconcile Site Health

## 7. Take a final Snapshot

Take a snapshot after resolving any critical alerts or site configuration issues. This will provide a known starting point before transferring over to the customer. If the customer makes a mistake between the time of handover and the next automated snapshot, a restore point will be available.

## 8. Handover to Customer

- Notify CE that managed instance is ready for customer.
- Notify CS that migration has been completed for customer, CS updates their notes.
