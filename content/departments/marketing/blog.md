# Creating & editing blog posts with Markdown and GitHub

## Process overview

> NOTE: This documentation covers only the mechanics of adding a blog post, not considerations such as who needs to approve your post or when it should be published.

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

Once your draft is approved, you're ready to add a blog post by creating a Markdown file in one of the `sourcegraph/about` repository `content/blogposts` child directories.

## Convert to markdown

To quickly convert your document into Markdown, you can use [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607). This is not required, but can save some time if you do not prefer to rewrite the content.

If you do this, please add the following frontmatter to the beginning of the file:

```markdown
---
title: The title
description: A 300 character limit field for describing your post. Use this is you want to specially craft the excerpt shown on the index page. Uses the first 300 characters of text from your post if this field does not exist.
authors:
  - name: The author name
    url: https://example.com/
  - name: Second authors name (optional)
    url: https://example-2.com/
publishDate: YYYY-MM-DDT10:00-07:00
tags: [blog]
slug: the-blog-slug
heroImage: /blog/thumbnail-image.jpg
socialImage: Use to set large social image i.e.  https://about.sourcegraph.com/blog/sourcegraph-social-img.png
canonical: Use to override the canonical link i.e. https://www.fastcompany.com/90565930/im-deaf-and-this-is-what-happens-when-i-get-on-a-zoom-call
published: true
videoID: 'dQw4w9WgXcQ'
---

Your markdown content goes here
```

This section is called `frontmatter` and it provides the post's metadata. Importantly:

- The `description` field is used as an excerpt for your post on the blog the index page.
- The `authors` field is for any author of the blog. The `url` field is optional but recommended. \* The indentations on this field are important to keep matching the example.
- The `tags` field should be left as `blog` until we incorporate filtering posts via tags.
- The `publishDate` field must be in the exact format above. Don't worry about the time, just change the date.
- As long as `published` is true, your post will be visible, even if the value of `publishDate` is set in the future.
- The `canonical` field is optional and only required to override the canonical link. Important for cross-posting blogs from personal blogs or published news sites. By default, set to `https://about.sourcegraph.com/blog/the-blog-slug`.
- The `heroImage` field is your blog post's main header image. It's best to ping #creative-ops to request a blog illustration right after you submit your draft to get the artwork in time.
- The `socialImage` field is optional. Use the full path to image in order to be read properly on Twitter and Facebook. Ideal image size: 1,200 x 628 pixels. <a href="https://sproutsocial.com/insights/social-media-image-sizes-guide/" rel="nofollow" target="_blank">Latest social size guidelines</a>.
- The `videoID` field is an optional YouTube video ID and will take priority even if the `socialImage` is present. This will generate an inline video preview card when sharing on social media. This is supported for all types of posts; blog, podcast, and release posts.

## Using the Blog Post Starter Pack

The Content Platform Team maintains a template Markdown file that exposes all of the content components available for use in the blog. You can directly copy and paste components from this file into your post. It's important to use the components provided for tables, images, alerts, youtube videos, videos, and hubspot forms to ensure our blog posts are uniform in styling.

Access the template in the About repository: [`/content/blogposts/blog-post-starter-pack.md`](https://github.com/sourcegraph/about/tree/main/content/blogposts/blog-post-starter-pack.md).

To use the template, copy the above file and paste it in the appropriate year folder (i.e. `content/blogposts/2022/`). Rename the file to the slug the post will be, or something similar. Edit the markdown content accordingly, all available standardized components are ready to be changed right in this file!

## Adding images

Please use a `Figure` component to add images to your post. Optionally, you can include a `caption` to display a description below the image.

<!-- prettier-ignore -->
```html
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="The Sourcegraph logo"
  link="https://https://sourcegraph.com/search.com"
/>
```

Please do not add images using `img` tags or `![text](image.png)` methods.

### Sizing images

- Make images as small as possible (aim for less than 200Kb).
- Images should be no larger than 1600px wide (if you want @2x retina quality) but often, this isn't needed and 800px is fine.
- JPEG images should be compressed at no larger than 80% quality to reduce file size.
- The [ImageOptim](https://github.com/ImageOptim/ImageOptim) app and CLI is great for significantly reducing the size of PNG files and JPEG files.

### Uploading images

- If you do not have a custom hero or social image, use this [default hero image](https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png).
- Small images can be placed in the `website/static/blog` directory and have the url of `/blog/example-image.jpg` in your markdown.
- Large images, GIFs, and other binary assets should be uploaded to the `sourcegraph-assets` Google Cloud Storage bucket. You can use the UI uploader at [https://console.cloud.google.com/storage/browser/sourcegraph-assets/blog](https://console.cloud.google.com/storage/browser/sourcegraph-assets/blog) or you can use the CLI with `gsutil cp local/path/to/myasset.png gs://sourcegraph-assets/`, with the image `src` being `https://sourcegraphstatic.com/blog/myasset.png`.
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

## Adding a video hosted on YouTube

Please use the `YouTube` component to embed YouTube videos into your post.

<!-- prettier-ignore -->
```html
<YouTube
  title="Accelerate developer onboarding with Sourcegraph"
  id="DgwvhRW1Cbc"
  showTitle={true}
/>
```

## Adding a video file or screen recording

You can read about [embedding GIFs and videos](process/adding_screenshots_screen_recording.md) here.

To add a video file to your post, first add the `.webm` and `mp4 versions to Google Cloud, then include them in a `Video` component.

<!-- prettier-ignore -->
```html
<Video
  source={{webm: 'blog/video-title', mp4: 'blog/video-title'}}
  loop={true}
  title="Code reuse"
  caption="An example of code search with Sourcegraph"
  showCaption={true}
/>
```

## Adding an alert

Use an `Alert` to highlight an important piece of information. By default, the background color is purple. To change the background color of the `Alert`, include the `type` property with one of the following options: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, or `dark`.

<!-- prettier-ignore -->
```html
<Alert>This Alert is purple!</Alert>
<Alert type="warning">This Alert is yellow!</Alert>
<Alert type="success">This Alert is green!</Alert>
```

## Adding a blockquote

Showcase a quote using `BlockquoteWithBorder`. You may also include a `headline` above the quote for context.

<!-- prettier-ignore -->
```html
<BlockquoteWithBorder
  quote="Onboard to a new codebase, find answers faster, and identify security risks with universal code search."
  author="Sourcegraph"
  headline="Search your code. All of it."
/>
```

## Adding a table

Tables can be written in Markdown or HTML. When preparing a table, please include the `TableWrapper` component to ensure that the table adapts to different screen sizes.

<!-- prettier-ignore -->
```html
<TableWrapper>
| Planet     | Orbital speed (km/s) |
|------------|----------------------|
| Mercury    | 47.4                 |
| Venus      | 35.0                 |
| Earth      | 29.8                 |
</TableWrapper>
```

## Adding a HubSpot form

Use the `HubSpotForm` component to drop a custom HubSpot form into your post. In most cases, the `masterFormName` and `chiliPiper` props are the only properties that need to be updated. Once added to your post, the HubSpot form will render in its place. All the options for this component are:

- `formId` - an optional form ID if the form doesn't fall under one of our [master forms](https://docs.google.com/document/d/1qa393uAW_tjwNtH9jHf_d__PCJgmbsxNoxi9cO4XOcE/edit)
- `masterFormName` - an optional master form name; `contactMulti`, `contactEmail`, `gatedMulti`, or `gatedEmail` for general contact forms and gated forms that have multi fields or an email field
- `onFormSubmitted` - an optional callback function for triggering an action after a form is submitted
- `inlineMessage` - an optional message to display after a form is submitted. We have a [generic fallback](https://github.com/sourcegraph/about/blob/main/src/components/HubSpotForm.tsx#L288) if none is provided.
- `chiliPiper` - an optional boolean (`true`/`false`) to enable Chili Piper. This is false by default.

```
  <HubSpotForm
    masterFormName="contactEmail"
    chiliPiper={true}
  />
```

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
  <video loop autoplay muted playsinline>
    <source src="https://sourcegraphstatic.com/handbook/edit-blogpost-demo.webm" type="video/webm" />
    <source src="https://sourcegraphstatic.com/handbook/edit-blogpost-demo.mp4" type="video/mp4" />
  </video>
</div>
