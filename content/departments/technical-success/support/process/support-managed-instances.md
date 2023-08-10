# Accessing managed instances

All SEs in the GCP [user group](https://groups.google.com/u/1/a/sourcegraph.com/g/gcp-customer-support-engineering/members) `gcp-customer-support-engineering` have access to managed instance via GCP management tooling. To request access to this group, reach out to #it-tech-ops to request access to the `gcp-customer-support-engineering` group.

A quick note before reading the rest of this page: Customers with managed instances cannot pull their own logs, and in many cases, the customer we're dealing with is not a site-admin, so they can't access site-admin privileges either. Please make absolute sure regardless of the customer, that they are not working with a managed instance.

A list of managed instances can be found as part of the GCP Project `Managed Instances`

If you are an support engineer being trained to work with managed instances, read ahead.

## Required access

If you do not have access, create a ticket in #it-tech-ops request to be added to `gcp-customer-support-engineering` Google Group and tag your manager for approval.

## Set up a tutorial session

After you've followed the docs in the 'required access' section and received the access to all necessary credentials, reach out to Jason or Mariam to set up a thirty minute tutorial that will take you through the most important aspects of accessing managed instances.

If all of us happen to be outside of working hours when you need a tutorial, [watch this video](https://drive.google.com/file/d/1JdC-OEfng-X0tBKYjsrFn0XNHTbhE2pB/view?usp=sharing) as a supplement. That said, it would still be good to schedule some time to meet with one of us when we're back online.

## Google Cloud Platform SDK/CLI - cloud_sql_proxy

Next, you'll need to install the Google Cloud Platform (GCP) SDK locally. Instructions for doing so can be found [here](https://cloud.google.com/sdk/docs/install). Pay close attention to the troubleshooting tips in this link, as you are likely to run into a few minor snags along the way.

To check and see if you've installed the GCP SDK correctly, enter the command `gcloud version` in your terminal. It should return the current version of your SDK. If so, congratulations. You now have the ability to start up virtual machines for each managed instance, and begin debugging.

To access managed instance's running external databases (Cloud SQL) via `psql` you'll need to install `cloud_sql_proxy`, instructions to do so may be found [here](https://cloud.google.com/sql/docs/postgres/connect-instance-auth-proxy#macos-64-bit).

Next, become familiar with the [managed instances operations](http://go/cloud-ops) page. This provides overview for debugging managed instances, and is _absolutely necessary_ reading. Bookmark the page. You will revisit it often.

# Other important notes

## Logging in to managed instances of Sourcegraph

In general, this is _not advised_. While you will have access to every instance managed by Sourcegraph, we want to limit this approach in order to maintain the privacy of our customers. However, if other approaches fail to resolve an issue, this is an option.

Should you find yourself in a situation where you need to login to a customer's instance directly, make sure you inform the customer before you do so, and provide thorough and clear context for your reasoning behind needing to do so. Be **completely transparent** about your intentions so that you and the customer are on the same page.

## Requesting Help

If while working on an issue for a managed instance customer you encounter and issue that customer support cannot resolve, engage the cloud team in the `#cloud` slack channel. _After gathering relevant data, and checking with team CS team members for ideas._
