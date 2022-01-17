# Edit a single file

If you just need to edit a single page, you can do it entirely on the web.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MsIGvw0IEzo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/>

### Steps:

1. Visit the handbook page you want to edit on handbook.sourcegraph.com.
1. Press the **Edit this page on GitHub** button in the sidebar.
   - If you don't see it, you may be viewing a page on about.sourcegraph.com that is not part of the handbook. Handbook pages all have the same design as the [main handbook page](../index.md). If it has a different design, [ask for help](../editing/index.md#how-to-get-help).
1. In the text editor, make your edits.
   - The document is in a format called Markdown that lets you use headings, links, bold, lists, etc., in a plain text file. See [Markdown Tips & Tricks](markdown-resources.md) and feel free to [ask for help](../editing/index.md#how-to-get-help).
1. Switch back and forth to the **Preview changes** tab at the top of the editor to see the nicely rendered page with your edits applied.
   - Deletions are shown in red, changes are shown in orange, and additions are shown in green.
1. When you're happy with your edits, scroll to the bottom of the page to the **Commit changes** box.
   - Type a short, one-line summary of your change in the first text field (instead of the default `Update filename.md` text).
   - Type a more detailed explanation of your change in the larger text field.
   - Select the **Create a new branch for this commit and start a pull request** option (if it's not already selected). This is so your changes can be reviewed before committing to the main branch.
   - Press the **Commit changes** button.
1. Press the **Create pull request** button. Now your change has been proposed!
   - You can share the link to the pull request with anyone to show them your proposed change (e.g., `https://github.com/sourcegraph/about/pull/123).
1. If you want this update to be published in the Slack channel #handbook-announce, select the handbook-announce label using the **Label** button on the right side of the pull request page.
1. Select teammates to review using the **Reviewers** button on the right side of the pull request page.
   - Not all proposed changes need reviewers, so use your best judgement. For example, if you want to make a change in the communication process between your team and another team, you should include teammates from both teams as reviewers. They will look at your proposed changes, comment on them so you can make the appropriate changes and finally, when it’s approved, you’ll be able to merge it to the main branch.
1. Wait for teammates to review, comment on, and approve your pull request.
1. When you're ready to publish the change and make it live, press the **Squash and merge** button, then press **Confirm squash and merge**.
   - If you forget to merge your pull request, you'll be reminded about it after 14 days of inactivity on that pull request. If the pull request sees another 7 days of inactivity, it will be automatically closed.
1. Wait for your change to be live on about.sourcegraph.com. This can take anywhere from a few minutes to a few hours.
   - Live deployment status: [![Netlify Status](https://api.netlify.com/api/v1/badges/4c81a998-33b5-4357-a593-479e21bb10f3/deploy-status)](https://app.netlify.com/sites/sourcegraph-handbook/deploys)
