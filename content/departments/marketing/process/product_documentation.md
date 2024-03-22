# Product documentation

These guidelines are for contributing documentation to the [sourcegraph repository](https://github.com/sourcegraph/docs).

## Contributing

Whenever a feature is changed, updated, introduced, or deprecated, the pull request introducing these changes must be accompanied by the documentation (either updating existing ones or creating new ones).

The developer who made the code change is also responsible for writing the initial documentation for new features and updating the documentation for changes to existing features. This includes updating [the changelog as well](https://github.com/sourcegraph/docs/blob/main/docs/CHANGELOG.mdx). At the pace Sourcegraph evolves, this is the only way to keep the docs up to date.

For docs PRs, the author should tag `@maedahbatool` from the docs team as an additional reviewer on the pull request.

The [changelog](https://github.com/sourcegraph/docs/blob/main/docs/CHANGELOG.mdx) should also be updated for any changes that impact the user.

It's the responsibility of the Product Manager to ensure all features are shipped with documentation (i.e., that nothing slips through), whether is a small or big change.

## Docs repo local setup

We've recently rearchitectured our docs tech stack — powered by Next.js, TailwindCSS and deployed on Vercel. This guide will walk you through the process of contributing to our documentation using the new tech stack.

### Get started

To get started with this template, clone this repository to your local machine using the following command:

```sh
git clone https://github.com/sourcegraph/docs.git sourcegraph-docs
```

Navigate to the project directory by typing the following command in your terminal:

```sh
cd sourcegraph-docs
```

Before the dependencies are install make sure your local machine has the following versions of `node` and `pnpm`:

- node: `v20.8.1`
- pnpm: `8.13.1`

**Note**: If you have `asdf` available you can install the above versions for only this repository by running the following command from your terminal in the root folder:

```sh
asdf install
```

Now that the base requirements of the project have been satisfied, we can install the required dependencies to run the development server!

```sh
pnpm install
```

Next, run the development server:

```sh
pnpm run dev
```

Finally, open [`http://localhost:3000`](http://localhost:3000) in your browser to view the website.

## Writing and contributing to Sourcegraph Docs

To add new or update existing docs content. Create a new branch and checkout by via:

```sh
git switch -c BRANCH_NAME_HERE
```

### Folder structure

The folder structure is exactly the same here. All the docs reside within the `/docs` folder. Here you'll find separate folders for every docs section like `cody`, `code_search`, `cli`, etc.

- Navigate to the relevant relevant section for your contribution
- If you're adding a new page, create a new MDX file (e.g., `my-new-page.mdx`) in the appropriate folder

### Using MDX

We use MDX for our documentation, which allows you to seamlessly integrate JSX (React components) within Markdown. Write your content using standard markdown syntax. For example,

```

# This is heading 1

This is an introductory paragraph.

## This is heading 2

### This is heading 3

These are the details for heading three. And this how you add an image.

![demo-image](https://storage.googleapis.com/sourcegraph-assets/Docs/cody-sign-in.png)

This is how you add a [demo-link](https://sourcegraph.com/)

- This is a bullet 1
- This is bullet 2
- This is bullet 3
```

### Including React Components

The only difference with this new stack is its ability to use React components. We have a set of reusable React components located in the `src/components` directory. These components are designed to enhance the user experience and maintain consistency across our documentation.

For example the cards layout appears by using the `<Callout>` component that can add `note`, `info`, or `warning` notices in docs.

![](https://storage.googleapis.com/sourcegraph-assets/Docs/CleanShot%202023-12-12%20at%2012.00.29%402x.png)

You can use this component within your content as follows:

```js
<Callout type="note">Cody is currently in Beta for all users.</Callout>
```

This snippet creates a single `<QuickLink>` titled as "Get Cody". You can add as many cards you want while filling out all the relevant details.

Here are the list of all the supported components we have:

- `<QuickLinks>`
- `<ProductLinks>`
- `<LinkCards>`
- `<Callout>`

For a better docs experience we'll continue adding more components in future.

### Adding a link

To add a `link` to any docs page, use the following routing syntax: `[Link text](path-to-link)`.

- Do not include `/docs` in the link paths. The base URL will be `sourcegraph.com/docs`
- There should be **no file extension** in the path name

For example, if you want to link to the Cody Quickstart somewhere in the Code Search docs, you should use:

```markdown
- This is a link to [Cody Quickstart](/cody/quickstart) in Code Search docs
- This is a way to hash-link to [Cody for VSCode installation](/cody/clients/install-vscode#verifying-the-installation) in Code Search docs
```

### Adding images and binary assets

For large images and other binary assets, upload them to the `sourcegraph-assets` Google Cloud Storage bucket instead with `gsutil cp -a public-read local/path/to/myasset.png gs://sourcegraph-assets/` (and refer to them as `https://sourcegraphstatic.com/myasset.png`). For a more detailed instructions visit [this page](../../../handbook/editing/handbook-images-video.md).

> Note: Make sure to use [ImageOptim.app](https://imageoptim.com/mac) to reduce the size of the images before uploading, since large images degrade page loading speed.

### Previewing changes locally

As you make changes to the documentation, the development server will automatically update. Review your changes by navigating to `http://localhost:3000` in your browser.

### Submitting your Contribution

Once you're satisfied with your changes, follow these steps:

- Commit your changes
- Create a pull request to the [Sourcegraph documentation repository](https://github.com/sourcegraph/docs).
- Tag `@maedahbatool` in `#docs` channel through Slack to get a quick review

Thank you for contributing to Sourcegraph documentation! Your efforts help us provide top-notch learning experiences for our users. If you have any questions or need assistance, feel free to reach out.
