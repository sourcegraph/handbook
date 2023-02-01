# Google Drive

We use Google Drive to store documents and collaborate internally and externally. All files should be stored within Google Drive and not on your local hard drive.

## Sharing permissions

There are several ways to share documents within Google Drive.

- **Restricted**: Only people specifically invited to the file can access that file. Collaborators can include anyone with an @sourcegraph email address or a user from an allowlisted domain. This setting is standard to all Sourcegraph accounts.
- **Sourcegraph**: Anyone with an @sourcegraph email can access the document with the link to the file. Collaborators can include anyone with an @sourcegraph email address or any user from an allowlisted domain. This setting is standard to all Sourcegraph accounts.
- **Anyone with the link** : Anyone with the link can access the document. This should be restricted to only files that can be shared publicly and do not contain any sensitive teammate or client information. This permission is limited to our publicly shared folders only.

From each of these sharing levels you can set how you want collaborators to interact with the file (edit, view, or comment). More information about getting started with Google Drive can be found [here.](https://support.google.com/a/users/answer/9310248?hl=en)

## My Drive

These drives are account user specific. Folders and files can only have one owner, which by default is the account owner. Ownership of files and folders can be transferred but this has to be done by the account owner, administrators cannot transfer for you in the event the user is unavailable. While folders and files in My Drive can be shared and worked on collaboratively, best practice is to store all documents in a shared drive so that ownership is shared by a group or multiple users.

## Shared drives

The benefit of shared drives is that administrators and drive owners can manage the content stored inside. The Sourcegraph shared drive allows all teammates to manage files and folders stored inside it. There are also shared drives for specific teams and groups.

## Sharing public documents

If you have a set of documents to be shared publicly, Tech Ops will create a drive where the files and folders have the ability to “share with anyone with a link.” Externally shared folders will have the title "EXT - Sourcegraph - XXX".

## Collaborating with people outside of Sourcegraph

Collaborating on files with people outside of Sourcegraph is available to everyone through the use of allowlists. Any folder or file can be shared with people at an organization whose domain has been added to our allowlist. After adding an email account, Drive will either allow the invite to be sent (meaning the domain is already on the allowlist) or else Drive will send a warning stating that this domain is not on our allowlist.

To request a domain be added, please post in #ask-it-tech-ops. Domains will be reviewed periodically to ensure they are still active collaborators.

## Using Google service accounts

Please contact Tech Ops for granting access to google drive files for google service accounts. These accounts need to be scoped properly to allow information to be accessed by the service account.
