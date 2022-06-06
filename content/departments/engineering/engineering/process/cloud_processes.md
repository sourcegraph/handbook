# Sourcegraph Cloud Processes

## Closing down an organization on Sourcegraph Cloud

During the open-beta, customers receive 30 days to try out Sourcegraph Cloud with Organizations. Once this period has passed, customers need to reach out in order to continue leveraging Sourcegraph Cloud.

The following process documents the queries that need to be executed in order to completely remove an organization if a customer does not reach out.

### Queries

It is important that these queries be run in this order. Replace $ORG_ID with the ID of the organization.

```sql
DELETE * FROM org_members WHERE org_id = $ORG_ID;
```

```sql
DELETE * FROM org_invitations WHERE org_id = $ORG_ID;
```

```sql
DELETE * FROM registry_extensions WHERE publisher_org_id = $ORG_ID;
```

```sql
DELETE * FROM saved_searches WHERE org_id = $ORG_ID;
```

```sql
DELETE * FROM notebooks WHERE namespace_org_id = $ORG_ID;
```

```sql
DELETE * FROM settings WHERE org_id = $ORG_ID;
```

```sql
DELETE * FROM orgs WHERE id = $ORG_ID;
```

### Other useful queries

A list of useful DB queries can be found in [useful DB queries](https://docs.google.com/spreadsheets/d/1Z1-7uJwtF2etZFeqTcJS4z9WcAjKlkCxt8HQ931D3dA).
