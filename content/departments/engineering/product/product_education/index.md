# Product Education

## Vision

At the end of FY’22 a new team, Product Education, was formed within the product organization.

The Product Education team aims to ensure that users not only understand how features work but why they are important through practical, actionable technical content.

Put another way, this team's primary goal is to educate users and provide them with a path to realized value in Sourcegraph products, as well as help them achieve measurable success in reaching their desired outcomes. We strive to accomplish this through a variety of educational content that goes beyond docs and also includes guides, technical use cases, tutorials, videos, and any other content/mediums/approaches that serve our users and this goal.

While the primary focus of this group will be to create original content, this group will also work to develop the strategy, templates, processes, and standards necessary to ensure the content produced aligns with style guides, maintains relevancy, and provides a consistent style, tone, and voice.

Finally, this group will contribute to shaping the relevant technical platforms in order to drive consistent design, information architecture, functionality, and experience that allows this content to stand out as a competitive differentiator for Sourcegraph.

## Contact

@docs-team on Slack

## Process

### Uploading graphics

#### Adding Images to Google Cloud Storage

If your changes include any images or video, you’ll need to upload to the Google Cloud Storage (GCP) blog bucket before sticking it in your markdown file. However, if the image is [less than 100kb](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/dev/documentation.md#adding-images-to-the-documentation) in size, it can be added to the /doc folder.

1. Once you have permissions set up, view the [sourcegraph-assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true_)
1. Make sure your file has a unique name that clearly describes the image or video. There are lots of files in Google Storage, and you want to be able to identify yours easily.
1. If you’re working on a blog, navigate to the **blog/** folder found in the link in step 1. Navigate to the appropriate release folder—if your release folder is missing, go ahead and make a new one.
1. Click "Upload Files" to select your file, and click "Open".

### Publishing changes

The publishing process for the website, handbook, and docs is the same as the one listed in [editing the handbook](../../../../handbook/editing/index.md).

### Local previews

#### Handbook changes

1. Navigate to your local sourcegraph/about repository
1. Run `make serve` to start
1. Preview at [localhost 5082](http://localhost:5082/)
1. Ctrl-c will kill the server

Run `make docsite-check` to verify your changes and catch any broken links.

#### Product docs

1. Navigate to your local sourcegraph/sourcegraph repository
1. Run `./dev/docsite.sh serve` to only run the documentation (vs. starting the Sourcegraph instance)
1. Preview at [localhost 5080](http://localhost:5080/)

### Marketing website or blog

1. Navigate to your local sourcegraph/about repository
1. Go into the `website` sub-directory
1. Run `yarn start`
1. Preview at [localhost 8000](http://localhost:8000/)
