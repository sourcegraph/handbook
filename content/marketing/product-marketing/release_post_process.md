# Release post process

Product marketing is responsible for creating the monthly release post in collaboration with the product and content teams. Here is an overview of the process:

**10 days before release ships**

- Product marketing generates the release post template with placeholder section for highlights

**7 days before release ships**

- PMs to recommend which updates to feature and provide draft copy and assets (videos, links, screenshots) for all highlights directly to the PR.
- If assets aren't ready, PM to add a placeholder for expected assets.

**Within 24 hours after the release is cut**

You can tell when the release is cut by following along in #progress.

- The marketing release post owner runs the command to generate the changelog (being sure to replace the version number in the command), and then pastes the output at the end of the release post ([loom guide](https://www.loom.com/share/59da6bc1784a48e9b6af4d9e620ee4df)): `go run ./bin/generate_changelog_items.go -versions 3.28 -i ../sourcegraph/CHANGELOG.md`.
  - Make sure that you get the latest in the Sourcegraph repo before running this command. If your repo is in a different location than `../sourcegraph`, you'll need to update the commandline above.
  - If for some reason the version number isn't added yet and you need to capture the "Unreleased" then passing it the literal string match for the "Unreleased" heading, usually `Unreleased`, in place of a version number works)
- Once this is done, inform the team in the #release-post channel.
- If necessary, PMs make edits to the changelog based on what was actually shipped.
- PMs add final assets.
- Product marketing to package and draft the release post and share with Rebecca, Andy, and Christina for review.

**0-2 days after release ships**

- No new additions or edits from the product team
- Managing Editor edits and publishes release post.

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
title, and alt is more appropriate to describe what you're seeing visually.
```
