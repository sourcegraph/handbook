# Listing Sourcegraph Cloud Users

This playbook was created as a reference for the future. We expect there might be a need to have a list of cloud users, cloud users with and without private repos. In case marketing wants to send emails to specific groups of customers for example.

This playbook contains SQL queries which should be run against the production Postgres in gcloud. To connect to the production Postgres in gcloud, please use [this guide](../../../deployments/postgresql.md#sourcegraph-com-specific).

# SQL queries

## Listing All Cloud Users

```sql
SELECT DISTINCT user_emails.email, users.display_name, users.created_at
FROM user_emails
INNER JOIN users ON users.id = user_emails.user_id AND users.deleted_at IS NULL
WHERE user_emails.is_primary = true;
```

## Private Repository Related Queries

### Listing Cloud Users With Private Repository

```sql
SELECT DISTINCT user_emails.email, users.display_name, users.created_at
FROM user_emails
INNER JOIN external_service_repos ON external_service_repos.user_id = user_emails.user_id
INNER JOIN repo ON repo.id = external_service_repos.repo_id AND repo.private = true AND repo.deleted_at IS NULL
INNER JOIN users ON users.id = user_emails.user_id AND users.deleted_at IS NULL
WHERE user_emails.is_primary = true;
```

Note that we only get the distinct list of email, name and creation date. We also only check for primary email address and ignore deleted users and repositories.
E.g. if a user has previously tried private repositories, but has since removed them from the DB, they will not be part of the list.

### Listing Cloud Users Without Private Repository

```sql
SELECT DISTINCT user_emails.email, users.display_name, users.created_at
FROM user_emails
INNER JOIN users ON user_emails.user_id = users.id AND users.deleted_at IS NULL
WHERE user_emails.is_primary = true
EXCEPT
SELECT DISTINCT user_emails.email, users.display_name, users.created_at
FROM user_emails
INNER JOIN external_service_repos ON external_service_repos.user_id = user_emails.user_id
INNER JOIN repo ON repo.id = external_service_repos.repo_id AND repo.private = true AND repo.deleted_at IS NULL
INNER JOIN users ON users.id = user_emails.user_id AND users.deleted_at IS NULL
WHERE user_emails.is_primary = true;
```

This is basically getting all the users except those, that are listed in the previous query
