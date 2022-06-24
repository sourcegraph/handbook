# Sourcegraph Cloud Processes

## Closing down a customer's organization on Sourcegraph Cloud

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

## Closing down an employee's organization on Sourcegraph Cloud

If you have created an organization on Sourcegraph Cloud for yourself that you’ve been using for testing or learning, when it’s time to delete it:

- Confirm that your organization has the `org-deletion` feature flag set to `true`.

  - To add this flag, go to the Site Admin page, click "Feature flags" in the left menu, then "Create feature flag".
  - Type the flag name (`org-deletion`), set its type to `boolean` and its value to `true`.

- Go to your organization settings page. You can access it from the Site Admin area, in the left side bar, under Organizations. Or quickly navigate to the top right menu where you can also find a link to your org.

- You will see the "Delete this organization" button in the bottom of the page. Go ahead and click it, confirming the deletion by typing the org's name in the input field.

  Note that this action can't be undone and will hard delete the organization along with all these following resources associated to it:

  - org_members
  - org_invitations
  - registry_extensions
  - saved_searches
  - notebooks
  - settings
