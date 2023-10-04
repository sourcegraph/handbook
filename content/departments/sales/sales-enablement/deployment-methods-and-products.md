# Sourcegraph deployment methods and products

This is intended to serve as an overall orientation to the Sourcegraph products and deployment methods, targeted at a Sales audience who may not have familiarity with on-prem deployments. This is not intended to address these questions for an engineering audience.

## Sourcegraph hosting methods

There are a few ways an enterprise customer/prospect may have access to Sourcegraph. These do _not_ reflect the product/version of Sourcegraph they're using—simply where the Sourcegraph code lives.

For full feature availability by hosting method, see [Features available by deployment option](../../product/tools/deployment_options.md).

### Self-hosted

The majority of Sourcegraph's paying users currently deploy Sourcegraph within their own infrastructure. This may be referred to as "on-prem", "self-hosted", or "in the customer's cloud". The main takeaway there is that unlike a traditional SaaS product, the software is not on infrastructure that Sourcegraph controls for those customers. This means:

- We cannot force updates (so customers may be running older releases). Our update process can be time-consuming (an hour or two), and users have to go sequentially (from 3.36->3.37->3.38, not 3.36->3.38), so this can limit what new functionality is available if the customer doesn't stay on top of this. See [our update documentation](https://docs.sourcegraph.com/admin/updates).
- We have limited insight into what's on the instance (we can't see exactly what the customer is doing, only [aggregate ping info](https://docs.sourcegraph.com/admin/pings)
- A customer or prospect may have multiple employees running instances on their own laptops to test

Customers can host Sourcegraph on any cloud provider or in their own data centers—it is useful to ask whether they use their own data center or a cloud provider, and if so which—this is just because we have setup instructions for specific cloud providers that can make things a little easier. (You can install Sourcegraph without them, but it can be nice to know exactly which buttons to click in the AWS console, etc.)

### Managed instances

Our second-largest collection of Enterprise users use our [Managed Instances product](https://docs.sourcegraph.com/admin/install/managed). This is exactly like a self-hosted Sourcegraph instance _except_ that it's hosted on servers the Sourcegraph team controls, not on the customer's infrastructure. (This is managed by the Delivery team.) Any time you see `customername.sourcegraph.com`, that's a managed instance.

Managed instances are single-tenant—that means unlike a traditional midmarket SaaS product, each customers has its own version of Sourcegraph, completely isolated from all the other managed instances. Customers still benefit from the security of that isolation, and gain the benefit of not having to manage infrastructure or upgrades themselves. The tradeoff is that the customer has to be okay with having Sourcegraph have control of copies of their source code (as we do control the servers). (That concern is similar to the concern you'd see with SaaS in general.)

Manage instances are upgraded once a month by Delivery; this is included in the managed instance hosting fee, which covers what we pay to host the instance as well as our developer time spent managing the instance. Your CE will determine the managed instance fee.

All managed instances are Docker Compose instances, which means there is a limit to the size of the customer which we can support on a managed instance. (Docker compose means you have to run everything on a single server, not multiple servers strung together—so the biggest instance you can support is determined by the biggest server that Google sells.)

If you have a customer who is interested in a managed instance, confer with your assigned CE. They will lead discovery. But initial signs that someone might be a good fit for managed instances:

- Mid-sized enterprise (think a software company with 500 devs, not a bank with 20,000)
- They use the cloud version of their code host (github.com versus hosting it in their own infrastructure—this means they're already okay with source code outside their own servers)
- They ask if we offer something like this, or if we offer a cloud option

You can always ask if the customer tends to prefer cloud deployments or self-hosted deployments for other dev tools—that usually provides enough info for your CE to begin their work.

### Cloud/dotcom

This is a more traditional SaaS product (free signup, multi-tenant, in Sourcegraph-controlled infrastructure). This is https://www.sourcegraph.com. Some features (Insights, Batch Changes) are not available there. Enterprise customers, other than small enterprises covered by the Commercial team, are not going to be candidates for Cloud except to use it to test overall functionality against public code.

## Sourcegraph deployment methods

Whereas the hosting method controls where the code _lives_, the deployment method controls _how_ you installed it. (Think of it as the difference between downloading an app on your computer from the App Store vs. buying a piece of software on CD vs. downloading an app directly from the software company who built it. They all potentially get you the same app, but you might have different experiences.)

As a sales team member, you're not required to know the nuances of these methods, particularly not right as you start. The tl;dr is that we support Docker Compose or Kubernetes production installs—if a customer is asking for more info beyond that, that's time to loop in a CE. (Talking to a CE can be a good carrot to get the prospect to meet.)

If you do want more info on the different deployment methods, your best starting point is our [admin install docs](https://docs.sourcegraph.com/admin/install). This includes time estimates for spinning up the instances.

### Single container

This is the kind of Sourcegraph that will be installed if you follow our [Quick start guide](https://docs.sourcegraph.com/#getting-started). It is not officially supported as a production install method. This is _only_ for quickly installing on your laptop to check things out, but isn't officially supported for a real production instance.

### Docker compose

This is the install method our managed instances use. It can handle small to medium enterprises—above a certain size, customers are going to want the benefits of an install method like Kubernetes. If a customer isn't too big and isn't familiar with Kubernetes, you'll likely see your CE push the customer towards this method. (It's generally quick to spin up.)

### Kubernetes

Kubernetes, or k8s, is a container orchestration platform. If a customer is very large, they will likely need to use Kubernetes for their install, because they can scale their instance up significantly in k8s, which they need to do to support large-scale search needs. We typically only recommend using k8s if the customer has experience with it, so if a customer is asking about k8s, it's helpful to ask them if they have experience deploying k8s apps in their infrastructure, and what team typically manages that process. This will be useful info to coordinate a proof of concept, and will help your CE talk to the right people. Beyond that high-level info, you'll be bringing in your CE to answer questions.

## Sourcegraph licenses

The main product Sales sells is Sourcegraph Enterprise, with optional Code Insights and Batch Changes add-ons. For a full dive on the SKUs, see our [Licenses page](../../product/process/gtm/licensing.md#licensing) in the handbook.

Of particular note around licenses:

- License are generated by CE.
- As part of license creation, the CE will need to know the number of users, expiration date, what product(s) are being used (search, code insights, and/or batch changse), and whether you want a hard-cap or soft-cap license. Hard-cap licenses (the default) won't let users add more users over the license count; soft-cap licenses will allow the user to exceed their license count for a true-up.
- Licenses don't impact what telemetry is available; for more info on what is enabled by default and what can be disabled, see [our Ping documentation](https://docs.sourcegraph.com/admin/pings). (It is possible to leave just critical telemetry enabled, so long as the instance isn't fully airgapped.) The telemetry helps us see overall usage trends, so that we can tailor advice and training.
- If the user wants an airgapped instance, that is possible—that will impact how your CE generates the license and deployment considerations generally, so highlight this for the CE if your prospect wants this.
