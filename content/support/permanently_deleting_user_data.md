# Permanently deleting user data (GDPR requests, etc.)

Sometimes users will ask us to remove their account data. This can be just because they want it done, or as a GDPR compliance request, etc.

### Submitting a request

Anyone may request to have their user data permanently deleted from Sourcegraph.com, whether for a GDPR request or otherwise. We treat all requests the same way and with urgency.

You can request this via support@sourcegraph.com

### Support: Processing a data deletion request

The support team member is responsible for delegating to other teams by following the steps below. If the request came in through another team, you should inform the user that only our support team support@sourcegraph.com can handle such requests.

1. **Verify the user's identity:** It is extremely important that we only delete a user's data if it is actually tied to the email address the request came from. That is the only way we know the user actually owns that user account. If a request from "alice@gmail.com" is asking us to delete their account data for "aliceb@gmail.com" or for "the username alice", we could mistakenly delete the wrong user OR it could even be a malicious request. To solve this, **only reference the email address that the request came from when communicating with other teams below.**
2. **Deleting data from Hubspot and Salesforce:** Post **in #it-tech-ops**:

> Hi team! We've recieved a request to permanently delete a user's data (for GDPR or other reasons), can you please ensure their data is deleted from both Hubspot and Salesforce?
>
> The email address is: ...
>
> (I am following https://handbook.sourcegraph.com/support/permanently-deleting-user-data)

3. **Deleting data from Sourcegraph.com**: Post **in #dev-ops**:

> Hi team! We've recieved a request to permanently delete a user's data (for GDPR or other reasons), can you please nuke their user account from Sourcegraph.com?
>
> The email address is: ...
>
> (I am following https://handbook.sourcegraph.com/support/permanently-deleting-user-data) cc @Stephen Gutekanst

Once both teams report back, you can inform the user we've permanently deleted all data associated with that user account and mark the ticket as complete.

### In the product: how to nuke a user account

If the request is for a Sourcegraph.com account, a #dev-ops team member will handle this step for you (it requires site admin).

If the request is for a customers' on-prem instance, the site admin of that instance is the only one who can perform that action and they will need to follow the steps outlined here.

2. Look up the username associated with the email address using [this GraphQL query](<https://sourcegraph.com/api/console#%7B%22query%22%3A%22%7B%5Cn%20%20user(email%3A%20%5C%22somebody%40somewhere.com%5C%22)%20%7B%5Cn%20%20%20%20username%5Cn%20%20%20%20emails%20%7B%5Cn%20%20%20%20%20%20email%5Cn%20%20%20%20%20%20verified%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D>).
   a. Confirm the email address shown matches the email address the request came from.
   b. Confirm the email address is marked as _verified_. If it is not, the request could be a malicious request and the user will need to sign into Sourcegraph and verify the email address in order for us to verify the account is owned by them before we can proceeed with deletion.
3. Locate the user at e.g. https://sourcegraph.com/site-admin/users?query=theusername and select the 'Nuke' option:

<img width="933" alt="image" src="https://user-images.githubusercontent.com/3173176/136848800-f31e214a-0025-4e15-8be3-0b6caf9e3e92.png">

4. Select OK on the warning prompt that appears:

<img width="394" alt="image" src="https://user-images.githubusercontent.com/3173176/136848928-d474b16d-a80f-4bfe-be20-3e64c6d3a254.png">

5. All data associated with that user has now been deleted!
