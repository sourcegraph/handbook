# Handbook Check Failures

> If you are running the handbook locally, you can run these checks before you push your commit, [explained in the readme](../../README.md).

On your Github pull request page, you'll notice a green checkmark or a red X-mark next to your commits. This information repeated at the end of the page with a "Some checks were not successful" in red or "All checks have passed" in green.

![Handbook Check Failures](https://storage.googleapis.com/sourcegraph-assets/handbook/handbook-checks.png)

## What are Handbook Checks?

These "checks" are automated formatting and structural rules that run on your new changes. The goal is to help you catch common errors before you merge your pull request to the handbook, because if a handbook user hits these errors when they are live, it's a poor experience.

Ideally, you won't merge your pull request unless all checks have passed and are "green." 

If you see any red failed checks then you can click “Details” to see the error that caused the check to fail. ([example page with red X build](https://github.com/sourcegraph/about/pull/3564); [example details page]([https://github.com/sourcegraph/about/runs/2976049292](https://github.com/sourcegraph/about/runs/2976049292))). You’ll see something like this:

![Handbook Check Failure Example](https://storage.googleapis.com/sourcegraph-assets/handbook/relocate-page-errors.png)

If you're not sure what the error message means or can't determine how to fix it, you are welcome to ask for help in Slack's #handbook and optionally tag @handbook-support, but first refer to the common errors:


## Common Handbook Check Failures


### Broken or Missing Links



* **Must link to .md file** ([example](https://github.com/sourcegraph/about/runs/2976049292)) 
    * Your error contains text like this:
        * `handbook/product/user_feedback.md: must link to .md file, not ../support/support-workflow`
    * Breaking down the error:
        * `handbook/product/user_feedback.md:`
            * This is telling you what file is causing the failure. In this case, it’s something happening within in the “User Feedback” Handbook page file, nested under the “Product” section of the Handbook.
        * `must link to .md file, not ../support/support-workflow `
            * This is telling you that you must link to an .md file, rather than just a URL. See [this page](linking-within-handbook.md) for more information about linking. 
    * **To Fix:** add an `.md` and make the link to `../support/support-workflow.md` instead of `../support/support-workflow`.
    * **Note:** if there is an anchor tag in the link, the .md goes before the anchor tag, like `../support/support-workflow.md#support-workflow`.
* **Disconnected page / No inlinks** ([example](https://github.com/sourcegraph/about/runs/2975885844))
    * Your error contains text like this:
        * `handbook/engineering/hiring/engineering-leadership.md: disconnected page (no inlinks from other pages)`
    * Breaking down the error:
        * `handbook/engineering/hiring/engineering-leadership.md`
            * This is telling you what file is causing the failure. In this case, it’s happening because of the “Engineering Leadership” Handbook page file, nested under the “Engineering > Hiring” section of the Handbook.
        * `disconnected page (no inlinks from other pages)`
            * This is telling you that there are no links in the Handbook to your new page. This throws an error because unless someone has a link directly to your page, or knows to search for it, there will be no way for them to discover the content. Requiring links helps ensure your content will be surfaced to the right audiences.
    * **To Fix:** Determine if this page is still valuable, and if so, on which other handbook page to add a link to this page. If it’s not obvious or you’re not sure, you should post for help in #handbook and tag someone you think might know better (based on the content of the disconnected page).
    * See [this page](linking-within-handbook.md) to learn how to use relative paths to link Handbook pages. This helps us maintain links over time more easily than pasting a URL.
* **Broken Link:**
    * Your error contains text like this:
        * `handbook/company/orgchart.md: broken link to /sales/sales-ops#members`
    * Breaking down the error:
        * `handbook/company/orgchart.md`
          `  * This is telling you what file is causing the failure. In this case, it’s something within the “Org Chart” page nested under the “Company” page.
        * `broken link to /sales/sales-ops#members`
            * This is telling you that the link to the “Sales Ops” page is broken. This can happen when a page is moved or deleted, and that link path no longer works.
    * **To Fix: **Visit the page where the broken link exists. Find that link within the page, and update the relative path to reflect the new location of the page. Or, if the page has been deleted, remove the link altogether. As always, don’t hesitate to ask @handbook-support in the #handbook Slack channel for help.


### Merge Conflicts


#### What is a Merge Conflict?

Merge conflicts happen when you merge branches that have competing commits, and Git needs your help to decide which changes to incorporate in the final merge. This could mean a fellow teammate was making a change to the same file you were working on around the same time.


#### Resolving a Merge Conflict

See Github’s [documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for resolving a merge conflict within Github. These can be tricky, so don’t hesitate to tag @handbook-support in the #handbook Slack channel for help!
