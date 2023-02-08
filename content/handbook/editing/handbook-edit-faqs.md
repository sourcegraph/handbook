# Editing the Handbook FAQs & Troubleshooting

Before asking the #handbook channel for help, see if your question can be answered below. If you see a question being commonly asked in the #handbook channel, feel free to add it and the answer to this page.

## When will I see my changes live in the Handbook?

**TL;DR,** your changes will be live and viewable anywhere from a few minutes to a few hours after merging.

The Handbook deployment process runs fairly quickly, and your changes are deployed within a few minutes after your merge. However, browser caching may prevent you from seeing your changes for a while. Closing the tab with your recently updated Handbook page and revisiting later is the simplest way to check on your Handbook changes.

You can [clear your cache](https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop), try viewing your page in an [incognito window](https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop), or ask a teammate if they can see your changes if you’re still not seeing them after a few hours.

## Why do I need to keep updating my branch?

You may see the following message:

- Your branch is out-of-date with the base branch.

![Branch is Out of Date](https://storage.googleapis.com/sourcegraph-assets/branch-out-of-date.png)

This means someone else has made changes on the main branch that you need to pull into your branch to move forward. If you were to merge your branch as is, your changes could conflict with the changes made by another teammate. Clicking “Update branch” will trigger Handbook Checks to run again, and you can then merge your changes.

The best way to avoid this is to merge your changes often. Sometimes on commonly edited pages (like the [Team page](../../team/index.md)), this is hard to avoid.

## What does it mean to enable auto-merge?

When you create a pull request, you should see a button titled "Enable auto-merge" where Handbook checks are running:

![Enable automerge](https://storage.googleapis.com/sourcegraph-assets/handbook/enable%20auto%20merge.png)

Clicking this button means your change will automatically be merged in for you once all checks have passed. If any checks fail, you'll get an email notification if your GitHub account is set up to do so. This is a great way to "set it and forget it" after you make changes in the Handbook, to avoid leaving a PR open for a long time and running into merge conflicts.
