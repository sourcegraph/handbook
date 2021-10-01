## Adding Images or Video to the Handbook


## Images


### Adding Images to Google Cloud Storage



1. View the [sourcegraph-assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true_) 
    * If you don’t have permission to view the contents of this link, ask the team in #it-tech-ops for Google Cloud Storage permissions to add images to the Handbook.
2. Make sure your file has a unique name that clearly describes the image or video. There are lots of files in Google Cloud Storage, and you want to be able to identify yours easily.
3. Navigate to the handbook/ folder found in the link in step 1. You can scroll through the list or search.
4. Click “Upload Files” to select your file, and click “Open”.


### Adding Images from Google Cloud Storage to the Handbook



1. In Google Cloud Storage, copy the URL for the image you want to include.
    * You can do this by clicking the file name to see more details, then copying the “Public URL”.
2. To insert your image into the Handbook, follow this format:
    * `![Alt Text](Image URL)`
3. Finish editing and [merge your changes as normal](edit-a-single-file.md).


## Videos

The easiest way to add a video to the Handbook is to embed it. Most video hosting sites, like Youtube or Loom, include an “embed” option in their sharing menu. The link should look something like this:

`&lt;div style="position: relative; padding-bottom: 56.25%; height: 0;">&lt;iframe src="video URL" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">&lt;/iframe>&lt;/div>`

Copy and paste that link into your markdown file as you would any other piece of text. Check your handbook page after merging your changes to verify your video is playing correctly.

## Uploading Other Large Files

If you want to upload a large file (such as a large image, video, or audio recording) and make it available in the handbook, upload the file to Google Drive and then get a shareable link to the file on Google Drive. Add that link to the handbook. Don't add large files to the handbook repository itself (because Git is not a good way to store large non-text files).
