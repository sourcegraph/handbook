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

When capturing images or video for the release post, keep these guidelines in mind:

- Capture your window to only show the Sourcegraph app. Don't capture your URL bar or bookmarks bar.
- Use Sourcegraph's light mode.
- If possible, capture the screen with a ~16:10 aspect ratio.
- If you're capturing a text-heavy screen, use the browser's zoom function (125% zoom often works well).

For videos, keep these things in mind:

- Try to keep videos shorter than 10 seconds.
- Capture your content as videos (MP4 format) and not as GIFs.
- Videos will be formatted in the release post to look and act like GIFs. They will autoplay on loop and be muted.

### Embedding content

To render an [Image](https://about.sourcegraph.com/blog/starter-pack#figure) or [Video](https://about.sourcegraph.com/blog/starter-pack#video), please use the `Figure` and `Video` component from the [Blog Starter Pack](https://about.sourcegraph.com/blog/starter-pack).
Here is an example of rendering an image using the Figure component:

```jsx
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Alternative information or rendered when an image cannot be displayed"
  caption="An optional caption displayed under the figure"
  link="https://www.sourcegraph.com/my/optional/link"
  linkIcon={true}
/>
```

The `alt` prop is automatically used for the `title` prop so all that's required is the alt prop. The title attribute specifies
extra information about an element and is most often shown as a text tooltip when the mouse moves over the element. For more
information on available props and documentation, see the [Blog Starter Pack](https://about.sourcegraph.com/blog/starter-pack)
and the [Figure Component](https://about.sourcegraph.com/blog/starter-pack#figure).
