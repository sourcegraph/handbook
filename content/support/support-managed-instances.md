# Accessing managed instances

In order to have good security and risk mitigation practices, only a subset of our application engineers have access to managed instances. If you need to access logs for these customers, post in our #customer-support-internal Slack channel and @ mention Don, Jason, Mariam, and Kelvin. One of them can help!

A quick note before reading the rest of this page: Customers with managed instances cannot pull their own logs, and in many cases, the customer we're dealing with is not a site-admin, so they can't access site-admin priveleges either.

Please make absolute sure regardless of the customer, that they are not working with a managed instance. If they are, and you are unaware, asking for logs may end up sounding like a silly question to them, and cause the customer to lose confidence in our ability as Application Engineers. If you are unsure after looking through salesforce and looker whether a customer does or does not have a managed instance, please reach out to Don, Jason, Mariam or Kelvin and they will be able to confirm for you.

If you are an application engineer being trained to work with managed instances, read ahead.

## Required access

To fully access managed instances, follow these [docs](../engineering/enablement/delivery/managed/index.md#access)

## Set up a tutorial session

After you've followed the docs in the 'required access' section and received the access to all necessary credentials, reach out to Dom, Mariam, Kelvin or Jason to set up a thirty minute tutorial that will take you through the most important aspects of accessing managed instances.

If all of us happen to be outside of working hours when you need a tutorial, [watch this video](https://drive.google.com/file/d/1JdC-OEfng-X0tBKYjsrFn0XNHTbhE2pB/view?usp=sharing) as a supplement. That said, it would still be good to schedule some time to meet with one of us when we're back online.

## Google Cloud Platform SDK/CLI

To work with managed instances, you'll need acccess to Sourcegraph's Google Cloud Console and access to all managed instances therein. Reach out to Dax from distribution and request access to the "gcp-managed" group.

Next, you'll need to install the Google Cloud Platform (GCP) SDK locally. Instructions for doing so can be found [here](https://cloud.google.com/sdk/docs/install). Pay close attention to the troubleshooting tips in this link, as you are likely to run into a few minor snags along the way.

To check and see if you've installed the GCP SDK correctly, enter the command `gcloud version` in your terminal. It should return the current version of your SDK. If so, congratulations. You now have the ability to start up virtual machines for each managed instance, and begin debugging.

Next, read the [managed instances operations](../engineering/enablement/delivery/managed/operations.md) page in its entirety. This provides direction for using the gcloud in the command line to debug managed instances, and is _absolutely necessary_ reading. Bookmark the page. You will revisit it often.

# Other important notes

## Logging in to managed instances of Sourcegraph

In general, this is _not advised_. While you will have access to every instance managed by Sourcegraph, we want to limit this approach in order to maintain the privacy of our customers. However, if other approaches fail to resolve an issue, this is an option.

Should you find yourself in a situation where you need to login to a customer's instance directly, make sure you inform the customer before you do so, and provide thorough and clear context for your reasoning behind needing to do so. Be **completely transparent** about your intentions so that you and the customer are on the same page.

## Requesting Help

It is important to do everything we can to solve issues with managed instances ourselves, but realistically, this won't always be the case. As a general reminder, if you are stuck on an issue, always engage your CS teammates first. Specifically, reach out to Don, Jason, Mariam, or Kelvin and request help. If they can't figure out what's going on, work with them to engage the distribution team in the way they've asked [here](./engaging-other-teams.md).

To be clear, there is nothing wrong with engaging the distribution team, as long as it is the last step in our process towards finding a solution, and that it only be taken when absolutely necessary.
