# Adding Images or Video to the Handbook

## Images

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/2e7b28bef98840098bfb2659ce1cadac" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Adding Images to Google Cloud Storage

1. View the [sourcegraph-assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true_)
   - If you don’t have permission to view the contents of this link, request Google Cloud Storage permissions to add images to the Handbook in Entitle. [Here is a direct link to the request type needed](https://app.entitle.io/request?targetType=bundle&duration=3600&justification=reason&bundleId=560006e3-bc10-46ed-b4e8-a72cf820a59a), please edit the duration and justification for your specific purpose.
2. Make sure your file has a unique name that clearly describes the image or video. There are lots of files in Google Cloud Storage, and you want to be able to identify yours easily.

   **Important: make sure to use [ImageOptim.app](https://imageoptim.com/mac) to reduce the size of the images before uploading, since large images degrade page loading speed.**

   - Avoid special characters or spaces as they can sometimes interfere with Markdown rendering. For example:
     - `adding-images-screenshot`

3. Navigate to the handbook/ folder found in the link in step 1. You can scroll through the list or search.
4. Click “Upload Files” to select your file, and click “Open”.

### Adding Images from Google Cloud Storage to the Handbook

1. In Google Cloud Storage, copy the URL for the image you want to include.

   - You can do this by clicking the file name to see more details, then copying the “Public URL”.

2. To insert your image into the Handbook, follow this format:
   - `![Alt Text](Image URL)`
   - `Alt Text`is a description of your image. Learn more [here](https://moz.com/learn/seo/alt-text).
   - `Image URL` is the URL you copied in step 1. It will look something like this: `https://storage.googleapis.com/sourcegraph-assets/handbook/adding-images-demo.png`
3. Finish editing and [merge your changes as normal](edit-a-single-file.md).

## Videos

The easiest way to add a video to the Handbook is to embed it. Most video hosting sites, like YouTube or Loom, include an “embed” option in their sharing menu. The link should look something like this:

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe
    src="video URL"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>
```

Copy and paste that link into your markdown file as you would any other piece of text. Check your handbook page after merging your changes to verify your video is playing correctly.

## Uploading Other Large Files

If you want to upload a large file (such as a large image, video, or audio recording) and make it available in the handbook, upload the file to Google Drive and then get a shareable link to the file on Google Drive. Add that link to the handbook. Don't add large files to the handbook repository itself (because Git is not a good way to store large non-text files).

## Should I ever store these types of files in a Handbook directory?

When working with SVGs, you may want to store an image directly in a Handbook directory, rather than in Google Cloud Storage. SVGs are a superior file format for things like diagrams, flowcharts, logos, illustrations that contain text etc. because the text is accessible, the image scales and stays super sharp, and the file size is much smaller (faster loading times!). Because they are not binary but text and small in file size, these can be committed directly to the repo. **Where possible, using SVGs and adding it directly to the repo is the preferred method.** You can see an example [here](https://github.com/sourcegraph/handbook/tree/381c0b0d29fdef62028d7a2fa495a3870ac3efce/content/marketing/brand/brand_guidelines/color).

Images that are not vector-based, e.g. photos (taken with a camera) or most screenshots, are binary and have larger file sizes. Common file formats are JPG, PNG, GIF. Git cannot store these efficiently, and they would increase the repository size a lot. Even if they are deleted later, they will forever remain in the history, so it's important to never add these to the repo in the first place. **So, binary files like JPG and PNG should always be uploaded to sourcegraph-assets on Google Cloud Storage.**
