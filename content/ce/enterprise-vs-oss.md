# Sourcegraph Enterprise vs. Sourcegraph Open Source (Sourcegraph OSS)

## Background

Sourcegraph offers two versions of its core product: Sourcegraph Open Source (Sourcegraph OSS) and Enterprise Sourcegraph (referred to through the rest of the document as Sourcegraph). The Sourcegraph offering additionally offers multiple hosting options. This can be confusing to people, and this document aims to clarify the distinctions.

## What is Open Source Software (OSS)?

Great question! When software is built and released, it’s released under a license that tells the end user what they can do with it. Some software is released as closed source/under a proprietary license—think the Mac OSX, whose source code you can’t see, can’t modify, and can’t audit. If you want to make a new OSX feature, you just have to request it and see if Apple builds it.

Open Source Software is software released under a license that lets you see and modify the source code. It’s often built by teams of volunteers, but some companies (like us) release open source products, or license some parts of their code under an open source license. Linux, the operating system used to run many servers, is an open source operating system originally written by the same person who wrote git. If you want a new Linux feature, you can make it and run it yourself, as well as potentially sharing it for others to use. 

If this is something you are interested in, [read more here](https://opensource.com/resources/what-open-source).

Not all public code is open source. In our case, all our enterprise code is *public* but not *open source*. Sourcegraph Core, however, is open source. 

## Sourcegraph OSS vs. Enterprise Sourcegraph

Sourcegraph offers two versions of its core code: the Open Source (OSS) version and the enterprise version. Enterprise Sourcegraph consists of our pre-built Docker images, and encompasses all of the versions on our [pricing page](https://about.sourcegraph.com/pricing/).

Customers often confuse the free version of our Enterprise offering with the OSS version, but they are different. 

The OSS version involves:

- Removing the `enterprise` directories from the repo
- Building your own docker image (you can’t just use ours)

This means you have the following limitations:

- No path to upgrade to an Enterprise or Team plan down the line (you can’t change your mind without launching a new instance)
- No external dependencies (means no extensions!)
- No Enterprise features (SSO, access control, Batch Changes)
- Built as a single container (slower at scale)
- No access to our extensions

Benefits to the OSS option include:

- No user limit
- Some people prefer OSS ideologically

If someone is talking to Sales or CE and says they’re using the OSS version, they are 99% of the time using the free tier of Enterprise Sourcegraph. If they say they’re hitting a user limit, they’re using the free version of Sourcegraph, not Sourcegraph OSS.

For those who are curious, the instructions for an OSS install are available in the [readme](https://github.com/sourcegraph/sourcegraph/#installation) for `sourcegraph/sourcegraph`. They don’t exist in our Docs site (https://docs.sourcegraph.com/) , since those are focused primarily on commercial Sourcegraph.

If someone follows the install instructions for our Docker, Docker Compose, or Kubernetes options ([reference](https://docs.sourcegraph.com/admin/install)), they will install commercial Sourcegraph.

## Enterprise product tiers

Within commercial/Enterprise Sourcegraph, there are three product tiers (free, Teams, and Enterprise). You can see a feature list for each tier on our [pricing page](https://about.sourcegraph.com/pricing/). The code for all three tiers is the same—a license key, saved to the site settings, is what activates the features for the two paid tiers. (When OSS builds remove the `enterprise` folders, they’re removing that ability.)

Because the code for all three pricing tiers is the same, customers can install any tier in any of our [deployment methods](https://docs.sourcegraph.com/admin/install). The deployment method they use is unrelated to the pricing tier, generally (for exceptions, ping the CE team).
