# Technical writing

## Vision

TODO

## Contact

@docs-team on Slack

## Process

### Uploading graphics

If your changes include any media, you’ll need to upload it to the Google Cloud Storage (GCP) blog bucket before sticking it in your markdown file. However, if the image is [less than 100kb](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/dev/documentation.md#adding-images-to-the-documentation) in size, it can be added to the /doc folder.

1. Once you have permissions set up, view the [sourcegraph-assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true_)
1. If you’re working on a blog, navigate to the **blog/** folder, then upload to the appropriate release folder. If your release folder is missing, go ahead and make a new one. If you’re working on documentation, we need to create a folder structure, and at time of writing, haven’t yet.
1. The [https://sourcegraphstatic.com](https://sourcegraphstatic.com/) site serves content from the sourcegraph-assets Google Cloud Storage bucket. We are using this hostname instead of [https://storage.googleapis.com/sourcegraph-assets/](https://storage.googleapis.com/sourcegraph-assets/) because the latter is blocked by some ad blockers, which means our assets are not visible to many of our users. So the reference URL in the markdown will look like this: [https://sourcegraphstatic.com/blog/3.18/k8s-search-page.png](https://sourcegraphstatic.com/blog/3.18/k8s-search-page.png)

### Publishing changes

The publishing process for the website, handbook, and docs is the same as the one listed in [editing the handbook](https://about.sourcegraph.com/handbook/editing).

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
