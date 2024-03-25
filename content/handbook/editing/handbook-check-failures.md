# Handbook Check Failures

> If you are running the handbook locally, you can run these checks before you push your commit, [explained in the readme](../../../README.md).

On your GitHub pull request page, you'll notice a green checkmark or a red X-mark next to your commits. This information repeated at the end of the page with a "Some checks were not successful" in red or "All checks have passed" in green.

![Handbook Check Failures](https://storage.googleapis.com/sourcegraph-assets/handbook/handbook-checks.png)

## What are Handbook Checks?

These "checks" are automated formatting and structural rules that run on your new changes. The goal is to help you catch common errors before you merge your pull request to the handbook, because if a handbook user hits these errors when they are live, it's a poor experience.

Ideally, you won't merge your pull request unless all checks have passed and are "green."

If you see any red failed checks then you can click “Details” to see the error that caused the check to fail. You’ll see something like this:

![Handbook Check Failure Example](https://storage.googleapis.com/sourcegraph-assets/handbook/relocate-page-errors.png)

If you're not sure what the error message means or can't determine how to fix it, you are welcome to ask for help in Slack's #handbook and optionally tag @handbook-support, but first refer to the common errors:

## Common Handbook Check Failures

### Broken or Missing Links

#### Must link to .md file

- [Example](https://github.com/sourcegraph/about/runs/2976049292)
- Your error contains text like this:
  - `handbook/product/user_stakeholder_feedback.md: must link to .md file, not ../technical-success/support/support-workflow`
- Breaking down the error:
  - `handbook/product/user_stakeholder_feedback.md:`
  - This is telling you what file is causing the failure. In this case, it’s something happening within in the “User Feedback” Handbook page file, nested under the “Product” section of the Handbook.
  - `must link to .md file, not ../technical-success/support/support-workflow `
  - This is telling you that you must link to an .md file, rather than just a URL. See [this page](linking-within-handbook.md) for more information about linking.
- **To Fix:** add an `.md` and make the link to `../technical-success/support/support-workflow.md` instead of `../technical-success/support/support-workflow`.
- **Note:** if there is an anchor tag in the link, the .md goes before the anchor tag, like `../technical-successt/support/support-workflow.md#support-workflow`.

#### Disconnected page / No inlinks

- [Example](https://github.com/sourcegraph/about/runs/2975885844)
- Your error contains text like this:
  - `handbook/engineering/hiring/engineering-leadership.md: disconnected page (no inlinks from other pages)`
- Breaking down the error:
  - `handbook/engineering/hiring/engineering-leadership.md`
  - This is telling you what file is causing the failure. In this case, it’s happening because of the “Engineering Leadership” Handbook page file, nested under the “Engineering > Hiring” section of the Handbook.
  - `disconnected page (no inlinks from other pages)`
  - This is telling you that there are no links in the Handbook to your new page. This throws an error because unless someone has a link directly to your page, or knows to search for it, there will be no way for them to discover the content. Requiring links helps ensure your content will be surfaced to the right audiences.
- **To Fix:** Determine if this page is still valuable, and if so, on which other handbook page to add a link to this page. If it’s not obvious or you’re not sure, you should post for help in #handbook and tag someone you think might know better (based on the content of the disconnected page).
- See [this page](linking-within-handbook.md) to learn how to use relative paths to link Handbook pages. This helps us maintain links over time more easily than pasting a URL.

#### Broken Link

- The `check all links between pages are valid` Handbook check has failed.
  ![Broken link Handbook check failure](https://storage.googleapis.com/sourcegraph-assets/handbook/broken-link-failure.png)
- Click "details" to see more information, and you should see something like this:
  ![Broken link error details](https://storage.googleapis.com/sourcegraph-assets/handbook/broken-link-details.png)
- Breaking down the error:
  - `readmes/foo.md`
    - This is telling you that the link to the “Foo Readme” page is broken. This can happen when a page is moved or deleted, and that link path no longer works.
- \*\*To Fix:
  - First, you need to find the page where the broken link lives. In your PR, click the "Files Changed" tab.
  - Scroll down until you see an error like this:
    ![Broken link page details](https://storage.googleapis.com/sourcegraph-assets/handbook/broken-link-page-detail.png)
  - This is telling you the broken link is on the `content/product/product-org.md` page.
  - Visit the page where the broken link exists. Find that link within the page, and [update the relative path](linking-within-handbook.md) to reflect the new location of the page. Or, if the page has been deleted, remove the link altogether. As always, don’t hesitate to ask @handbook-support in the #handbook Slack channel for help.

#### Anchor reference warnings

You may see messages when links are being checked that look like this:

```
Warning: Anchor reference from ./content/engineering/incidents/playbooks/index.md to ./content/engineering/deployments/index.md (#kubernetes) missing
Warning: Anchor reference from ./content/marketing/content/editorial/editorial-strategy.md to ./content/marketing/content/editorial/index.md (#content-principles) missing
```

These will not cause a failure with the build, but indicate that there is a reference to an anchor (i.e., a specific section on the page) that is not valid. To use the first example above, the Playbooks page refers to a section on the Deployments page called Kubernetes, but that section isn't there.

It's easy to end up with orphaned anchors as content changes, so if you see these warnings and now how to fix them please do. Sometimes the link should be updated to a new page where the content moved, the anchor should be renamed to whatever the section was renamed to, or the anchor should simply be removed.

### YAML build errors

YAML build errors can happen when you are editing the `.yml` files under `/data`, such as when you are adding yourself to the team page. These errors will throw `YAMLException`s, and there will be a few lines of the file and (usually) an arrow pointing exactly to where the problem is.

#### Indentation errors

If indentation is wrong, you will receive a `YAMLException: bad indentation of a mapping entry` error. To fix these, you need to make sure that you always indent two spaces underneath any heading.

```
file:///home/jason/code/handbook/node_modules/js-yaml/dist/js-yaml.mjs:1273
  return new exception(message, mark);
         ^
YAMLException: bad indentation of a mapping entry (20:3)

 17 |
 18 | christina_forney:
 19 | name: 'Christina Forney'
 20 |   pronouns: 'she/her'
--------^
 21 |   role: 'VP Product'
 22 |   location: 'Woodside, CA, USA 🇺🇸'
```

#### Quoting errors

If you have an incorrect quote, you will also receive a `YAMLException: bad indentation of a mapping entry`, but the arrow will point to the extra/unbalanced quote. In the example below, there is an extra single quote inside the single quoted string.

To fix this, you could delete the extra quote if you didn't intend it to be there. If you do want it there, you could change the name row to use double quotes on the outside, like this: `name: "Christina 'Forney"` (if you want double quotes inside you should use single quotes outside.)

Sometimes, depending on the quoting error (especially if you have multiple errors) these can get tricky to resolve. If you feel stuck check with the #handbook Slack channel for help.

```
file:///home/jason/code/handbook/node_modules/js-yaml/dist/js-yaml.mjs:1273
  return new exception(message, mark);
         ^
YAMLException: bad indentation of a mapping entry (19:21)

 16 |   description: 'Beyang Liu is CTO and cofounder of  ...
 17 |
 18 | christina_forney:
 19 |   name: 'Christina 'Forney'
--------------------------^
 20 |   pronouns: 'she/her'
 21 |   role: 'VP Product'
```

### YAML Data Validation Errors on 'reports_to' slug

If you get an error on the 'reports_to' slug when adding yourself to the Team page, it is likely that your manager hasn't declared their 'manager_role_slug'.

1. Find the entry for the person you're reporting to
2. Take note of their manager_role_slug
3. If they don't have a manager_role_slug, just also edit their entry to add your manager slug. Do this by typing: "manager_role_slug: X"
4. Put that X value under the reports_to on your entry

### YAML schema validation errors

It's also possible for the YAML schema validation job to fail. This will result in a log like the following:

```
$ find data -name *.yml | sed -E "s/data\/(.*).yml/\1/" | xargs -I '{}' ajv -d data/{}.yml -s schema/{}.schema.json --errors=text
data/code_hosts.yml valid
data/maturity_levels.yml valid
data/team.yml valid
data/features.yml valid
data/product_teams.yml invalid
data/search must have required property 'title'
```

The file with invalid YAML will be reported as invalid, and the error will be listed following that line. In the above example, the `data/search` entry is missing a required property—its title.

If you are confused by the error message you're seeing you can always reach out for help in #handbook.

### Merge Conflicts

#### What is a Merge Conflict?

Merge conflicts happen when you merge branches that have competing commits, and Git needs your help to decide which changes to incorporate in the final merge. This could mean a fellow teammate was making a change to the same file you were working on around the same time.

#### Resolving a Merge Conflict

See GitHub’s [documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for resolving a merge conflict within GitHub. These can be tricky, so don’t hesitate to tag @handbook-support in the #handbook Slack channel for help!
