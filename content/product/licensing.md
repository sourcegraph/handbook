# Licensing

Licensing at Sourcegraph can be confusing: the word "license" (or "licence") is used in two overlapping contexts within Sourcegraph:

1. The software license under which our users obtain and potentially modify our source code, and
2. The [team or enterprise plan](https://about.sourcegraph.com/pricing) that users are paying for on Sourcegraph Enterprise, which is controlled via a [license key](../ce/license_keys.md). (The Free plan does not have a license key.)

## Software licensing

Sourcegraph's software [license](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/LICENSE) has two parts. The core of Sourcegraph is [licensed under the Apache License, version 2.0](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.apache). Some features and all our container images are licensed under our [enterprise license](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.enterprise).

### Sourcegraph OSS

As described [in the open source FAQ](../community/faq.md#is-all-of-sourcegraph-open-source), users can use Sourcegrah OSS without agreeing to any enterprise licensing terms by building their own server image. If they do so, no code from our enterprise licensed features will be included in their Sourcegraph deployment.

In practice, Sourcegraph OSS involves:

- Removing the `enterprise` directories from the repo
- Building your own docker image (you can’t just use ours)

This means you have the following limitations:

- No path to upgrade to an Enterprise or Team plan down the line (you can’t change your mind without launching a new instance)
- No external dependencies (means no extensions!)
- No enterprise features (SSO, access control, Batch Changes, Code Insights (Beta), Code Monitoring)
- Built as a single container (limited scalability)
- No access to our extensions

Benefits to the OSS option include:

- No user limit
- Some people prefer OSS ideologically

If someone is talking to Sales or CE and says they’re using the OSS version, they are 99% of the time using the free tier of Sourcegraph Enterprise. If they say they’re hitting a user limit, they’re using the free version of Sourcegraph Enterprise, not Sourcegraph OSS.

### Sourcegraph Enterprise

Most users, however, will use our prebuilt images, which include code licensed under our [enterprise license](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.enterprise), and require agreeing to our [terms of service](https://about.sourcegraph.com/terms/) and [privacy policy](https://about.sourcegraph.com/privacy). Users who use these images — with or without a paid plan — are agreeing to be bound by the terms of the enterprise license in addition to the terms of the Apache License.

If someone follows the install instructions for our Docker, Docker Compose, or Kubernetes options ([reference](https://docs.sourcegraph.com/admin/install)), they will install Sourcegraph Enterprise.

Because the code for all three pricing plans is the same, customers can subscribe to any plan in any of our [deployment methods](https://docs.sourcegraph.com/admin/install) except on Sourcegraph Cloud, where packaging and pricing are not defined, and there are no plans yet. The deployment method a customer uses is unrelated to the pricing plan, generally (for exceptions, ping the CE team).

## Plans

Sourcegraph Enterprise offers three **plans**: Free, Team and Enterprise as defined in [pricing](https://about.sourcegraph.com/pricing/). The Free plan is the default plan. It does not require a license key to run.

Customers on the Team and Enterprise plan of Sourcegraph Enterprise are provided with a [license key](../ce/license_keys.md), usually by a customer engineer. When a prebuilt image is configured with a license key, the functionality covered under the customer's plan is enabled.

> NOTE: Although it includes the word "license", a license key is _completely_ unrelated to the [software license](#software-licensing) described above.

## Talking about license, plans, users

What is a "License"? What is a "Free user"? What is an "Enterprise user"?

The word license is ambiguous: the answer to "what's the license of this user?" depends on the context.

"Free user" is also ambiguous, as it can refer to a Sourcegraph OSS user, or a Sourcegraph Enterprise user on a Free plan.

"Enterprise user" is ambiguous as well, as it can refer to a Sourcegraph Enterprise user (on any plan), or specifically to a Sourcegraph Enterise user on an Enteprise plan.

To prevent confusion, avoid using "License" or "Free user". Instead, say:

- a **Sourcegraph OSS** user
- a **Sourcegraph Enterprise** user on a **Free plan**
- a **Sourcegraph Enterprise** user on a **Team/Enterprise plan**
- a **license key** for the **Team/Enterprise plan** of **Sourcegraph Enterprise**
- **Sourcegraph Cloud** is a SaaS offering of Sourcegraph Enterprise, one of the many ways to [deploy Sourcegraph](../ce/deployment-methods.md)

The only case where "license" alone is appropriate is when someone asks "What's the license of Sourcegraph?". The answer to that is Apache 2.0 for Sourcegraph OSS, and the enteprise license for Sourcegraph Enterprise.

## Summary

You can think of this as a set of three options from the user's perspective:

1. Run a fully open source deployment of Sourcegraph. No enterprise code is included in this deployment, no enterprise features (or even landing pages for those features) are enabled, and no option is provided to do so.
2. Run Sourcegraph Core. This corresponds to [the _Free_ option on the pricing page](https://about.sourcegraph.com/pricing/). A Sourcegraph Core deployment includes enterprise code, but without a license key, any functionality provided therein is extremely limited. (For example, batch changes can only be made with up to five changesets.)
3. Run Sourcegraph with a paid plan. This corresponds to [the _Team_ or _Enterprise_ options on the pricing page](https://about.sourcegraph.com/pricing/). These deployments include enterprise code, with paid features available based on the customer's plan, controlled by their license key.

For more information, you may also want to refer to our [explanation of Sourcegraph Enterprise vs Sourcegraph OSS](../ce/enterprise-vs-oss.md).
