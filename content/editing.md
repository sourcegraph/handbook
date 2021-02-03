# Editing the handbook

Every Sourcegraph teammate will be editing the Sourcegraph handbook frequently to keep information up-to-date and participate in important changes in the company. This guide helps everyone learn how to edit the handbook.

The handbook consists of Markdown files in the Git repository at [github.com/sourcegraph/about](https://github.com/sourcegraph/about). ([Why not a wiki or Google Docs?](usage.md#wiki-and-google-docs-handbooks-become-stale))

## How to get help

We don't expect everyone on the team to figure this out on their own. Other teammates are happy to help!

- Any engineer at Sourcegraph can help. (The *code* that engineers write at Sourcegraph also consists of files in a Git repository, so engineers are very familiar with making these kinds of edits.)
- [Teammates who have already made a handbook change](https://sourcegraph.com/github.com/sourcegraph/about/-/stats/contributors?path=handbook%2F) can help.
- **Handbook heroes**: Ask the @handbook-heroes group in Slack (including @eric, @aileen, and @aharvey) for handbook help (via DM, #handbook, or #any-question). They volunteered to help anyone with anything handbook-related!
- Ask in #handbook: `Who can screen-share with me to help me make an edit to the handbook?`
- Don't be afraid of breaking anything! It is very easy for any engineer on the team to roll back to the previous version of the handbook if you make a mistake.

## Overview

Here's the process for getting a change published to the handbook. For detailed step-by-step instructions (intended for people who are new to Git), see the sections below.

1. Propose the edits you want to make by creating a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) on the Git repository at [github.com/sourcegraph/about](https://github.com/sourcegraph/about).
   - Because the [handbook is public](usage.md#why-make-this-handbook-public), anyone in the world can see your proposed edits.
1. You can request a review from specific teammates (who will get a notification) on the GitHub pull request page.
   - We don't have any rules around who needs to review what changes. Use your judgment (e.g., if your change affects the entire engineering team, request review from the VP Engineering).
   - For minor edits, you can skip review.
1. Wait for the necessary teammates to review and approve your pull request.
1. Merge the pull request.
1. Wait up to 5 minutes for your change to be live on about.sourcegraph.com.

## Reviewing and approving another person's proposal

Frequently used links:

- [All proposed (and not yet merged) handbook changes](https://github.com/sourcegraph/about/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)
- [Proposed handbook changes waiting on review by you](https://github.com/sourcegraph/about/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+review-requested%3A%40me)
- [Proposed handbook changes submitted by you](https://github.com/sourcegraph/about/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+author%3A%40me)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Q8tUXKU66Sk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Edit a single file

If you just need to edit a single page, you can do it entirely on the web.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MsIGvw0IEzo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/>

1. Visit the handbook page you want to edit on about.sourcegraph.com.
1. Press the **Edit this page** button in the sidebar.
   - If you don't see it, you may be viewing a page on about.sourcegraph.com that is not part of the handbook. Handbook pages all have the same design as the [main handbook page](https://about.sourcegraph.com/handbook). If it has a different design, [ask for help](#how-to-get-help).
1. In the text editor, make your edits.
   - The document is in a format called Markdown that lets you use headings, links, bold, lists, etc., in a plain text file. See "[Mastering Markdown](https://guides.github.com/features/mastering-markdown/)" and feel free to [ask for help](#how-to-get-help).
1. Switch back and forth to the **Preview changes** tab at the top of the editor to see the nicely rendered page with your edits applied.
   - Deletions are shown in red, changes are shown in orange, and additions are shown in green.
1. When you're happy with your edits, scroll to the bottom of the page to the **Commit changes** box.
   - Type a short, one-line summary of your change in the first text field (instead of the default `Update filename.md` text).
   - Type a more detailed explanation of your change in the larger text field.
   - Select the **Create a new branch for this commit and start a pull request** option (if it's not already selected).
   - Press the **Commit changes** button.
1. Press the **Create pull request** button. Now your change has been proposed!
   - You can share the link to the pull request with anyone to show them your proposed change (e.g., `https://github.com/sourcegraph/about/pull/123).
1. Select teammates to review using the **Reviewers** button on the right side of the pull request page.
1. Wait for teammates to review, comment on, and approve your pull request.
1. When you're ready to publish the change and make it live, press the **Squash and merge** button, then press **Confirm squash and merge**.
1. Wait up to 5 minutes for your change to be live on about.sourcegraph.com.

## Edit multiple files or add a new file

To make edits to multiple files and submit all of the edits as a group to be reviewed together, you will follow a more complex process than when [editing a single file](#edit-a-single-file). This also is required for adding new files. 

> NOTE: These steps are not exhaustively documented. Please [ask for help](#how-to-get-help) as many times as you need to until you feel comfortable with this process.

### Web interface

A screen recording of how to make multiple changes in a single PR in the web interface for GitHub:

<iframe src="https://share.getcloudapp.com/yAu6oB7v?embed=true&amp;branding=true&amp;title=true" style="border:none" allowtransparency="true" allowfullscreen="true" width="100%" height="100%" frameborder="0"></iframe>

A screen recording of how to make a new file and include it for review in the web interface for GitHub:

<iframe src="https://share.getcloudapp.com/7Kup2n2x?embed=true&amp;branding=true&amp;title=true" style="border:none" allowtransparency="true" allowfullscreen="true" width="100%" height="100%" frameborder="0"></iframe>

### macOS

### Github Desktop version
Here's a screen recording of the steps (written out below) for macOS:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/diZUeHZhekc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Prerequisites

1. Download and install [GitHub Desktop](https://desktop.github.com/).
1. Launch GitHub Desktop and sign into it using your GitHub username.
1. Clone the `sourcegraph/about` repository (assuming to the `~/Documents/GitHub/about` folder on your computer).

Optional:

- Use [Typora](https://www.typora.io/) to edit and preview Markdown (`.md`) files.

#### Steps

1. In GitHub Desktop, open the `about` repository that you cloned previously.
1. In **Current Branch**, select `main` if it's not already selected.
1. Press the **Fetch Origin** button to get the latest contents of the repository.
1. In **Current Branch**, create a new branch with a short name (like `add-travel-guidelines`, no spaces or punctuation).
1. Edit files in the `~/Documents/GitHub/about/handbook` folder on your computer.
1. When you've edited the files and saved your changes, GitHub Desktop will show you the changed files in the left sidebar. Confirm that your changes look good by viewing the diffs for each file.
1. In the bottom left `Summary (required)` text field, type your commit message (a one-line description of the change) and a longer `Description` below.
1. Press the **Commit to add-travel-guidelines** button (where `add-travel-guidelines` is the branch name you chose earlier).
1. Press the **Publish branch** button.
1. Press the **Create Pull Request** button.
1. On the pull request page in your web browser, select reviewers and wait for reviews/approvals, then merge to make the changes live.

## Uploading large files

If you want to upload a large file (such as a large image, video, or audio recording) and make it available in the handbook, upload the file to Google Drive and then get a shareable link to the file on Google Drive. Add that link to the handbook. Don't add large files to the handbook repository itself (because Git is not a good way to store large non-text files).

## Running a local preview handbook site

> NOTE: This is optional.

See the [handbook section](https://github.com/sourcegraph/about#handbook) in the repository README.
