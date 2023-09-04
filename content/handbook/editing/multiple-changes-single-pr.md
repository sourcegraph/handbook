# Editing Multiple Files in a Single Pull Request

To make edits to multiple files and submit all of the edits as a group to be reviewed together, you will follow a more complex process than when editing a single file. This also is required for [adding new files](adding-new-files.md).

> [!NOTE] These steps are not exhaustively documented. Please [ask for help](../editing/index.md#how-to-get-help) as many times as you need to until you feel comfortable with this process.

A screen recording of how to make multiple changes in a single PR in the web interface for GitHub:

<iframe src="https://drive.google.com/file/d/1UL3JqbXEGLaVXEkk4G81wGO69z8J_Cbw/preview" width="560" height="315"></iframe>

### Steps:

_This is just one path for making multiple changes in a single PR in the Handbook. These steps can be completed in a different order, or outside of the GitHub web interface._

1. Visit the first handbook page you want to edit on [handbook.sourcegraph.com](https://handbook.sourcegraph.com).
1. Press the **Edit this page** button in the sidebar.
1. In the text editor, make your edits.
   - The document is in a format called Markdown that lets you use headings, links, bold, lists, etc., in a plain text file. See "[Mastering Markdown](https://guides.github.com/features/mastering-markdown/)" and feel free to [ask for help](#how-to-get-help).
1. Switch back and forth to the **Preview changes** tab at the top of the editor to see the nicely rendered page with your edits applied.
   - Deletions are shown in red, changes are shown in orange, and additions are shown in green.
1. When you're happy with your edits, scroll to the bottom of the page to the **Commit changes** box.
   - Type a short, one-line summary of your change in the first text field (instead of the default `Update filename.md` text).
   - Type a more detailed explanation of your change in the larger text field.
   - Select the **Create a new branch for this commit and start a pull request** option (if it's not already selected).
   - Press the **Commit changes** button.
1. On the next page, click on the dropdown arrow on the “Create Pull Request” button, and choose “Create Draft Pull Request”. This will keep your PR from auto-notifying code owners or reviewers before it’s ready. Then, click “Draft Pull Request”.
   - You don't have to create a Draft Pull Request, and can create a regular one if you prefer. A Draft PR just indicates that you're still working on your changes.
1. In a new tab, navigate to the next page where you want to make changes.
   -You can do this in the same tab if you’d like, but it may be easier to keep your PR up in its own tab while you do this part.
1. Press the **Edit this page** button in the sidebar.
1. Click "Cancel Changes" in the github window. This is because you want to make sure you're working in the branch you've already started.
1. Click on the branch dropdown on the upper left side of your screen (it probably says “main”). Search for the branch you named when creating your first change, and select it. Update Branch
1. Click the pencil icon to edit your file.
1. When you're happy with your edits, scroll to the bottom of the page to the **Commit changes** box.
   - Type a short, one-line summary of your change in the first text field (instead of the default `Update filename.md` text).
   - Type a more detailed explanation of your change in the larger text field.
   - Select the **Commit directly to the "branch name" branch** option (if it's not already selected).
   - Press the **Commit changes** button.
1. Return to your PR, and the checks should rerun. Once checks pass, merge your changes.
   - If you forget to merge your pull request, you'll be reminded about it after 14 days of inactivity on that pull request. If the pull request sees another 7 days of inactivity, it will be automatically closed.
