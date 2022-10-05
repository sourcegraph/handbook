# Release Post process

Product Marketing is responsible for creating the monthly release post in collaboration with the product team. The release post is intended to showcase highlights and major updates included in the latest version of Sourcegraph. New versions are typically released on the 22nd of each month; you can read more about [the engineering release process here](../../engineering/dev/process/releases/index.md#when-we-release).

Here is an overview of the release post process:

**10 days before release ships**

- Product Marketing creates a release post file with placeholder section for highlights, adding it to a new PR in GitHub.
- Product Marketing proposes a release post timeline in #release-post & pulls in involved teams (Product & CE).

**7 days before release ships**

- PMs recommend which updates to feature in the post and commit draft copy to the release post PR. They also add assets (videos, links, screenshots) for all highlights directly to the PR.
- If visual assets aren't ready by this date, PMs add a placeholder for expected assets.

**When the release is cut (72 hours before release ships)**

You can tell when the release is cut by following along in #progress.

- The marketing release post owner adds the changelog to the release post file.

  - They run the command to generate the changelog (being sure to replace the version number in the command), and then pastes the output at the end of the release post ([loom guide](https://www.loom.com/share/59da6bc1784a48e9b6af4d9e620ee4df)): `go run ./scripts/generateChangelogItems.go -versions 3.43.1 -i ../sourcegraph/CHANGELOG.md`.
  - Make sure that you get the latest in the Sourcegraph repo before running this command. If your repo is in a different location than `../sourcegraph`, you'll need to update the command line above.
  - If for some reason the version number isn't added yet and you need to capture the "Unreleased" then passing it the literal string match for the "Unreleased" heading, usually `Unreleased`, in place of a version number works)

- Once this is done, PMM works with the CE team to choose 5-7 changelog items to include in the post, and then informs the team in the #release-post channel.
- If necessary, PMs make edits to the changelog based on what was actually shipped.
  - PMs are responsible for their highlights accurately reflecting features that are included in the release.
- PMs add final assets.
- Product marketing makes last edits to the release post and shares it to Content, Product, Product Marketing, & Comms for review.

**0–2 days after release ships**

- No new additions or edits from the product team.
- PMM edits and publishes release post.

**When the release post is published**

- PMM shares the release post in #progress.

## Adding images & videos to the release post

### Capturing content

### Embedding content

For all images and videos added to the release post, include the `blog-image` class as follows, and be sure to add an `alt` and `title` description for hover and/or screen readers:

````html
<figure
  src="https://my-image.jpg"
  class="blog-image"
  alt="This description will be shown to people with assistive readers"
  title="This description will be shown on hover"
/>
``` The `alt` and `title` values can be the same or not, up to you. In general, `title` is more appropriate for a
general title, and `alt` is more appropriate to describe what you're seeing visually. For more information, see the
[blog post start pack](https://handbook.sourcegraph.com/departments/marketing/blog/).
````
