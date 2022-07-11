## Deployment method

Regardless of the product tier a customer has purchased, there are three supported deployment methods, which we build images for:

- **Docker-container** - Also known as sourcegraph/server (a historical relic—its actual repo is `sourcegraph/sourcegraph`), single-node, or single-container. This contains all of Sourcegraph in a single Docker container. We do not recommend using this for production deployments, but many of our customers do run Enterprise in production on a single container deployment.
- **Docker-compose** - The first of two recommended production deployment options. This is intended for a single machine, with a container for each of the services in the app. Users fork and deploy based on `sourcegraph/deploy-sourcegraph-docker`. This is resilient enough for a production deployment, but does not offer High Availability officially (because it’s intended for a single machine, and if you have to take it down to update, then it’s down until you’re done). Most small/medium companies are fine here. Larger companies can use this option, as well (many do!) but at a certain size it may become cost prohibitive to have one very souped-up machine versus a few smaller machines working in tandem.
- **Kubernetes** - The second of two recommended production deployment options. This can run on multiple machines, using Kubernetes to orchestrate. This is our high-availability option (because you can have multiple machines in a single deployment), and is available at `sourcegraph/deploy-sourcegraph`. Most medium/large companies pick this option.

Self-hosted deployments will use one of these three options, unless customers use the `deploy-sourcegraph-docker` repo to build their own multi-container image (very rare, generally discouraged). All are options no matter what product you’re paying for.

## Self hosted vs. managed instances

The majority of our customers use a self-hosted instance—Sourcegraph is deployed to servers they control, using one of the three options listed in the previous section. However, for Enterprise customers, we do also offer the option for a managed instance.

In a managed instance, we deploy Sourcegraph _for_ the customer, in an isolated instance in our Google Cloud environment. (It's a single-tenant cloud.) We control installing it and upgrading it, but it’s segregated from any other instance. We charge a fee on top of their license fee to cover costs (based on lines of code, since the size of the git repo controls how much disk space we need to provision, which controls how much the instance costs us). Managed instances are controlled by the Cloud team.

Managed instances are all currently docker-compose deployments, and as such are not technically high-availability. They can scale to the largest machine GCP offers, so they can be used by all but the very largest enterprises. [More information here](../../../cloud/index.md).

Managed instances are only available to Enterprise customers.

## Cloud/dotcom

Sourcegraph.com has two purposes. Users can sign up to it for free, and view public code that we’ve indexed. It’s also where employees manage license keys.

Right now, it’s not possible for users to store private code on dotcom; this is slated to change in Q2 of 2021. All users are free users. Long term, we plan to offer the option for customers to store private code on dotcom, and to pay us to do so. Essentially, this would offer some of the benefits of a managed instance to customers that are too small for the Enterprise plan. (Unlike hosted instances, these would not be segregated instances—dotcom is a single instance, so this is a multi-tenant cloud.) Right now, however, this isn’t available.
