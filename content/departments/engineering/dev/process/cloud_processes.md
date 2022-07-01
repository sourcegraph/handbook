# Sourcegraph Cloud Processes

## Closing down a customer's organization on Sourcegraph Cloud

If you have created an organization on Sourcegraph Cloud, follow these instructions when it’s time to delete it:

- Go to your organization settings page. You can access it from the top right menu where there's a link to it.

- You should see the "Delete this organization" button in the bottom of the page. Go ahead and click it, confirming the deletion by typing the org's name in the input field.

  Note that this action can't be undone and will hard delete the organization along with all resources associated to it, including:

  - Organization membership
  - Organization invitations
  - Registry extensions
  - Saved searches
  - Notebooks
  - Settings
  - Code insights
  - Batch changes
  - Code monitors

Deleting an organization will also remove all its synced repositories from Sourcegraph Cloud.

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

## Closing down an organization locally, on `dotcom` mode

If you are running a local instance of Sourcegraph DotCom (with `sg start dotcom`), first make sure that your organization has the `org-deletion` feature flag set to `true`. When this flag is not configured, the "Delete this organization" button won't be displayed in the org's settings page.

To create a feature flag locally or to change its value:

- Go to the Site Admin page, click "Feature flags" in the left menu. If `org-deletion` is present and set to `false`, change it to `true`.
- If you don't have the `org-deletion` flag yet, click the "Create feature flag" button in the same page, type the flag name, set its type to `boolean` and its value to `true`.
- Go to your organization settings page. You can access it from the Site Admin area, in the left side bar, under Organizations. Or quickly navigate to the top right menu where you will also find a link to it.
- Now you should see the "Delete this organization" button. Go ahead and delete it, but be aware that this action can't be undone and will hard delete the organization along with all resources associated to it.

Deleting an organization will also remove all its synced repositories from Sourcegraph Cloud.
