# Deleting user data

When users request deletion of their account data, whether for personal preference or GDPR compliance, the support team handles and routes these requests. Please send these requests to support@sourcegraph.com to ensure they enter the support queue.

## Handling Data Deletion Requests

First, identify if the request is for account deletion or specifically for data deletion, which we treat as a GDPR request. Use keywords like 'Permanently delete all my user data,' 'GDPR request,' and 'CCPA request' to guide your assessment. If it's unclear what the user wants, request clarification or seek advice in #team-support-engineering.

<aside>
💡 Direct users wanting to delete their account from a self-hosted instance to their Sourcegraph admin.
</aside>

## Account deletions

For account deletions, remove the account from [sourcegraph.com](http://sourcegraph.com/) and the Sourcegraph Accounts Management System (SAMS).

- [ ] Confirm the requestor's email matches the account email.
- [ ] Apply the “Delete user from [Sourcegraph.com](http://sourcegraph.com/)” ZenDesk macro on the ticket to confirm the deletion request with the user.
- [ ] Delete the user from Sourcegraph.com
  - [Request site admin access through Entitle](https://handbook.sourcegraph.com/departments/security/admin-access-internal-instances/#new-direct-method) with 'Account deletion request' and the ZenDesk ticket link as justification.
  - Find the user at [https://sourcegraph.com/site-admin/users](https://sourcegraph.com/site-admin/users) using their email.
  - Choose 'Delete forever' from the actions menu.
- [ ] Delete the user from SAMS

  - Post the user's email and username in [#discuss-core-services](https://sourcegraph.slack.com/archives/discuss-core-services) and wait for deletion.
      <aside>
      Deletion request: <br>
      Username: user <br>
      Email: user@example.com
      </aside>

- [ ] Inform the user their account is permanently deleted.
<aside>
Your account associated with the email: user@example.com has been permanently deleted. Thank you for trying Sourcegraph.
</aside>

## Data deletions

Data deletion requests require coordination with sales and analytics to remove data from all systems, in addition to the steps for account deletion.

- [ ] Initiate user data removal from our systems by creating a [deletion request GitHub issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=&projects=&template=user-data-deletion.md&title=Request+to+permanently+delete+all+user+data+for%3A+someone%40example.com) as a checklist.

- [ ] Delete previous tickets from a requester
  - On Zendesk, search the user with the email address associated with the account and requesting deletion. You can also click their name on the deletion ticket they created.
  - Select all tickets that are **not** the current request. We need to save their current request for legal reasons.
  - Click on the Edit X ticket(s) button
  - Confirm the deletion
    <img width="933" alt="image" src="https://storage.googleapis.com/sourcegraph-assets/select-tickets-action.png">
- [ ] Notify the user that their data has been permanently deleted.
