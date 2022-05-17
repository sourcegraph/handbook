# Release Post process

Product Marketing is responsible for creating the monthly release post in collaboration with the product and content teams. The release post is intended to showcase highlights and major updates included in the latest version of Sourcegraph. New versions are typically released on the 20th of each more; you can read more about [the engineering release process here](https://handbook.sourcegraph.com/departments/product-engineering/engineering/process/releases/#when-we-release).

Here is an overview of the release post process:

**10 days before release ships**

- Product Marketing creates a release post file with placeholder section for highlights, adding it to a new PR in GitHub
- Product Marketing proposes a release post timeline in #release-post & pulls in involved teams (Product, Content, CE)

**7 days before release ships**

- PMs recommend which updates to feature in the post and commit draft copy to the release post PR. They also add assets (videos, links, screenshots) for all highlights directly to the PR.
- If visual assets aren't ready by this date, PMs add a placeholder for expected assets.

**1-2 days before the release is cut**
- Product Marketing to work with the CE team to review the changelog and determine 5-7 major items that should be featured in the release post changelog.

- It is easier to do this closer to when the release is cut so that the changelog is mostly final.

**When the release is cut (24 hours before release ships)**

You can tell when the release is cut by following along in #progress.

- The marketing release post owner adds the changelog to the release post file.

  - They run the command to generate the changelog (being sure to replace the version number in the command), and then pastes the output at the end of the release post ([loom guide](https://www.loom.com/share/59da6bc1784a48e9b6af4d9e620ee4df)): `go run ./bin/generate_changelog_items.go -versions 3.28 -i ../sourcegraph/CHANGELOG.md`.
  - Make sure that you get the latest in the Sourcegraph repo before running this command. If your repo is in a different location than `../sourcegraph`, you'll need to update the command line above.
  - If for some reason the version number isn't added yet and you need to capture the "Unreleased" then passing it the literal string match for the "Unreleased" heading, usually `Unreleased`, in place of a version number works)

- Once this is done, the marketing owner reduces the changelog to 5-7 notable items and then informs the team in the #release-post channel.
- If necessary, PMs make edits to the changelog based on what was actually shipped.
- PMs add final assets.
- Product marketing makes last edits to the release post and shares it to Content, Product, Product Marketing, & Comms for review.

**0–2 days after release ships**

- No new additions or edits from the product team.
- Managing Editor (from the content team) edits and publishes release post.

**When the release post is published**

- PMM shares the release post in #progress.

## Content notes

For any images added to the release post, include the `blog-image` class as follows, and be sure to add an `alt` and `title` description for hover and/or screen readers:

```html
<img
  src="https://my-image.jpg"
  class="blog-image"
  alt="This description will be shown to people with assistive readers"
  title="This description will be shown on hover"
/>

The `alt` and `title` values can be the same or not, up to you. In general, `title` is more appropriate for a general
title, and `alt` is more appropriate to describe what you're seeing visually.
```
