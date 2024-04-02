# Creating & editing blog posts with Markdown and GitHub

## Process overview

> [!NOTE] This documentation covers only the mechanics of adding a blog post, not considerations such as who needs to approve your post or when it should be published. If you have a technical blog post idea and are struggling to make it a reality, [contact the DevRel team](process/blog_post_help.md).

1. Create an outline and request a reviewer
2. Create a draft of your blog post in Google Docs and request a reviewer
3. Create the blog post file
4. Create a pull request
5. Confirm via the preview deployment site that everything is looking good (the `deploy/netlify — Deploy preview ready!` link in the checks section)
6. Request a review from the editor who reviewed your draft

## Create an Intro & Outline

You only get one chance to make a first impression on your blog post, meaning you need an introduction that stands out. But what do you say? How do you say it? Should it be long? Short? Funny? Serious? Intros set the stage. They establish the tone and let visitors know what to expect.

### 3 Steps for a great intro

1.  Grab the reader's attention. That looks different for every piece of writing.
2.  Present the reason for the post's existence.
3.  Explain how the post will help address the problem that brought your reader to it.

### Why do you need an outline?

Blog posts can have overwhelming amounts of information – for the reader and the writer. The trick here is to organize the information, so readers aren't intimidated by the length or amount of content. This organization can take multiple forms — sections, lists, tips — whatever's most appropriate. But it must be organized!

## Create a Draft

The best way to get actionable feedback on your blog post is to start by writing it on a [blank Google Docs file](https://docs.new). This format will allow your reviewers to suggest changes or add comments to sections of your post.

When asking for a review, you should be happy with your draft being ready to be published. This means you've got your headers and images in place, and your code samples all work.

There's nothing more frustrating for a reader than not being able to copy code (if, for example, you end up using images instead of code snippets) or if that code just doesn't work.

Feel free to add many code snippets and use code repositories to complement your example. A reader should be able to implement the solution you're proposing from start to finish or at least understand how you implemented that solution if the aim here is only to tell a story.

## Adding a blog post

Once your draft is approved, you're ready to add a blog post by creating a Markdown file in one of the `sourcegraph/about` repository `/content/blogposts` child directories.

## Convert to markdown

To quickly convert your document into Markdown, you can use [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607). This is not required, but can save some time if you do not prefer to rewrite the content.

If you do this, please add the **frontmatter** to the beginning of the file, frontmatter instructions can be found in the [Blog Post Starter Pack](#using-the-blog-post-starter-pack).

## Using the Blog Post Starter Pack

Access the template in the About repository: [`/content/blogposts/blog-post-starter-pack.md`](https://github.com/sourcegraph/about/tree/main/content/blogposts/blog-post-starter-pack.md).

To use the template, copy the above file and paste it in the appropriate year folder (i.e. `/content/blogposts/2022/`). Rename the file to the slug the post will be, or something similar. Edit the markdown content accordingly. All available standardized components are ready to be changed right in this file!

<hr />

To ensure uniformity between commonly used content items, please use the following components where appropriate. These are setup to accommodate screen responsiveness, accessibility concerns, and meet our brand guidelines.

<ol>
  <li>Alert</li>
  <li>Badge</li>
  <li>Blockquote</li>
  <li>Figure</li>
  <li>TableWrapper</li>
  <li>Video</li>
  <li>YouTube, and;</li>
  <li>HubSpotForm</li>
</ol>

> [!NOTE] **Reference the [Blog Post Starter Pack](#using-the-blog-post-starter-pack) for use case examples.**

<hr />

## Adding images

Please use a `<Figure />` component to add images to your post. Find instructions in the [Blog Post Starter Pack](#using-the-blog-post-starter-pack).

**Do not** add images using `img` tags or `![text](image.png)` methods.

### Sizing images

- Make images as small as possible (aim for less than 200Kb).
- Images should be no larger than 1600px wide (if you want @2x retina quality) but often, this isn't needed and 800px is fine.
- JPEG images should be compressed at no larger than 80% quality to reduce file size.
- The [ImageOptim](https://github.com/ImageOptim/ImageOptim) app and CLI is great for significantly reducing the size of PNG files and JPEG files.

### Uploading images

- If you do not have a custom hero or social image, use this [default hero image](https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png).
- Small images can be placed in the `/public/blog` directory and have the url of `/blog/example-image.jpg` in your markdown. We also strongly encourage you to create a sub directory with the same slug as your post if you are including multiple files for your blog post. This keeps our assets organized per blog post. For example: `/blog/my-slug/image-name.png`, `/blog/my-slug/other-image-name.png`.
- Large images, GIFs, and other binary assets should be uploaded to the `sourcegraph-assets` Google Cloud Storage bucket. You can use the UI uploader at [https://console.cloud.google.com/storage/browser/sourcegraph-assets/blog](https://console.cloud.google.com/storage/browser/sourcegraph-assets/blog) or you can use the CLI with `gsutil cp local/path/to/myasset.png gs://sourcegraph-assets/blog/`, with the image `src` being `https://sourcegraphstatic.com/blog/myasset.png`.
  - Note: You may need to request permission to upload files to the GCP bucket. If you see an error message that additional permissions are required, you can ask for help in #it-tech-ops on Slack.
- Please use lower case letters and hyphens instead of spaces in folder and image names:

<div className="usage">
  <div className="item yes">
    <h5>Yes</h5>
    <ul>
      <li>api-docs-hero.png</li>
    </ul>
  </div>
  <div className="item no">
    <h5>No</h5>
    <ul>
      <li>API docs hero.png</li>
    </ul>
  </div>
</div>

## Previewing your blog post

It's recommended to run the development site to preview your blog post locally.

Once your pull request is created, you can preview your blog post through the Netlify build. To do so:

- In your PR, on the 'conversation' tab
- Find the checks at the bottom
- Find the deploy/netlify check and click the details link
- This will open a build of the Sourcegraph marketing website
- Add /blog to the end of the url

## Publishing your post

Once your pull request has been approved and merged, a new build of the production site will be triggered and your post will be live in 5 minutes.

### Troubleshooting: If your blog post is not appearing on the blog index page

If you're not seeing your blog post on the index page, check that:

- Your blog post file has a `.md` file extension
- That it's in a child directory of the `blogposts` directory
- That your frontmatter data matches that of the template, e.g., make sure the `publishDate` format is correct

## Editing blog posts

Fixing, editing, and updating a blog post on [about.sourcegraph.com](https://about.sourcegraph.com/blog/) is easy, can be done in minutes, and does not require running code locally.

This video shows the process from start to finish, although only those with repository push access will be able to squash and merge the change. Find a blogpost file in [About's repository](https://github.com/sourcegraph/about/tree/main/content/blogposts), the slug and file name are usually the same. Edit and preview the markdown in GitHub. Create a pull request from the browser. The change can be previewed again in staging, accessible from the `deploy/netlify` **Details** button.

<div className="container">
  <iframe src="https://www.youtube-nocookie.com/embed/0kQDard1GEY" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} frameBorder="0" webkitAllowFullscreen="" mozAllowFullScreen="" allowFullScreen="" />
</div>
