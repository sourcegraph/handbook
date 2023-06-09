# Permanently deleting user data (GDPR requests, etc.)

Sometimes users will ask us to remove their account data. This can be just because they want it done, or as a GDPR compliance request, etc.

### Submitting a request

Anyone may request to have their user data permanently deleted from Sourcegraph.com, whether for a GDPR request or otherwise. We treat all requests the same way and with urgency.

You can request this via support@sourcegraph.com

### Support: Processing a data deletion request

The support team member is responsible for delegating to other teams. If you're not the support team, you should inform the user that only our support team support@sourcegraph.com can handle such requests.

[Create an issue in the sourcegraph/customer repository](https://github.com/sourcegraph/customer/issues/new/choose) and follow the "**Customer support: Delete user data**" checklist issue template.

This will involve coordinating with multiple teams to get all the data deleted from various systems (Sourcegraph.com itself, marketing, sales, and analytics data sources, etc.)

### In the product: how to nuke a user account

1a. If the request is for a Sourcegraph.com account, engage [one of your teammates who has access](../tools/index.md#sourcegraphcom-admin-access) (it requires site admin). Inform the customer that you can only remove the username associated with the email they submitted the request from.

_If no teammates with site admin access are available, then notify the customer that the account will be deleted by the end of the week/the end of next week (depending on when the request is made). Engage one of your teammates when possible and confirm with the customer once the account is deleted._

1b. If the request is for a customers' on-prem instance, the site admin of that instance is the only one who can perform that action and they will need to follow the steps outlined here.

2. Look up the username associated with the email address using [this GraphQL query](<https://sourcegraph.com/api/console#%7B%22query%22%3A%22%7B%5Cn%20%20user(email%3A%20%5C%22somebody%40somewhere.com%5C%22)%20%7B%5Cn%20%20%20%20username%5Cn%20%20%20%20emails%20%7B%5Cn%20%20%20%20%20%20email%5Cn%20%20%20%20%20%20verified%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D>).

   a. Confirm the email address shown matches the email address the request came from.
   b. Confirm the email address is marked as _verified_. If it is not, the request could be a malicious request and the user will need to sign into Sourcegraph and verify the email address in order for us to verify the account is owned by them before we can proceeed with deletion.

3. Locate the user at e.g. https://sourcegraph.com/site-admin/users?query=theusername, click the three dots under the `Actions` column and select the 'Delete Forever' option:

<img width="933" alt="image" src="https://storage.googleapis.com/sourcegraph-assets/delete-forever-action.png">

4. Select OK on the warning prompt that appears:

<img width="394" alt="image" src="https://storage.googleapis.com/sourcegraph-assets/delete-forever-check.png">

5. All data associated with that user has now been deleted!
