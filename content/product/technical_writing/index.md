# Technical writing

## Vision

TODO

## Contact

@docs-team on Slack

## Process

### Uploading graphics

#### Adding Images to Google Cloud Storage

If your changes include any images or video, you’ll need to upload to the Google Cloud Storage (GCP) blog bucket before sticking it in your markdown file. However, if the image is [less than 100kb](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/dev/documentation.md#adding-images-to-the-documentation) in size, it can be added to the /doc folder.

1. Once you have permissions set up, view the [sourcegraph-assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true_)
1. Make sure your file has a unique name that clearly describes the image or video. There are lots of files in Google Storage, and you want to be able to identify yours easily.
1. If you’re working on a blog, navigate to the **blog/** folder found in the link in step 1. Navigate to the appropriate release folder - if your release folder is missing, go ahead and make a new one.
1. Click "Upload Files" to select your file, and click "Open".

### Publishing changes

The publishing process for the website, handbook, and docs is the same as the one listed in [editing the handbook](../../handbook/editing/index.md#editing-the-handbook).

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
