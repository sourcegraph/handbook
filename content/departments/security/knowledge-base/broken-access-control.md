# Broken Access Control

## [KB-BAC-1] Process / Service - Internal Actor Context

### Description

Sourcegraph utilizes serveral internal services / processes for various actions such as: `repo-updater, searcher, worker` etc. These processes can run under a combination of permission contexts: specific users context, an unauthenicated user context, or under an `internal actor` context depending on the level of access / permission they require for their various functions.
In certain situations code may require a higher level of access such as the `repo-updater` process which needs to be able to view the full repository table for syncing purposes. Running under the context of an `internal actor` can be dangerious since permissions are elevated and can result in data being modified, corrupted, or exfiltrated.

### Example Issue - Side Channel Information Disclosure

A side-channel vulnerability occurs when application implementations / features / responses can be analyzed and used to extract useful information.

> Analyzing a login pages error responses and determining that a different error is displayed for a valid username. Allowing someone to compile a list of valid usernames.

A new user feature is built for Sourcegraph that has the capability to perform searches (triggered by an authenticated user) and display a count of how many search results are returned. When the code is written it's added to an existing process that defaults to the `internal actor` context.
Due to the context this feature would run as it would be able to perform searches in repositories the end user doesn't actually have access to.

This example could allow someone to accurately guess data that follows specific patterns in repositories they do not have access to.

### Prevention

This can be prevented by explicitly setting the actor context to the specific logged in user - preventing searches in repositories the user does not have access to. A better solution would be to also move code to a process that does not by default use an `internal actor` context. This would add an extra layer of protected in the event that the explicit context code was removed.

Example code for setting the context to a specific user:

```
context = actor.WithActor(context, actor.FromUser(<user id>))
```

When adding new features / code or modifying existing code it's important to understand what permissions are required and under what actor context it will run.
