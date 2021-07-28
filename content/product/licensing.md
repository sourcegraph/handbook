# Licensing

Licensing at Sourcegraph can be confusing: the word "license" (or "licence", for the non-Americans in the crowd) is used in two overlapping contexts within Sourcegraph:

1. The software license under which our users obtain and potentially modify our source code, and
2. The [team or enterprise plan](https://about.sourcegraph.com/pricing) that a customer uses to gain access to enterprise-only features such as [batch changes](https://docs.sourcegraph.com/batch_changes), which is controlled via a [license key](../ce/license_keys.md).

## Software licensing

The core of Sourcegraph is [licensed under the Apache License, version 2.0](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.apache).

As described [in the open source FAQ](../community/faq.md#is-all-of-sourcegraph-open-source), users can use just that functionality without agreeing to any enterprise licensing terms by building their own server image. If they do so, no code from our enterprise licensed features nor any trademarks or logos will be included in their Sourcegraph deployment. This means that there will be no references to functionality such as batch changes.

Most users, however, will use our prebuilt images, which include code licensed under our [enterprise license](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.enterprise), and require agreeing to our [terms of service](https://about.sourcegraph.com/terms/) and [privacy policy](https://about.sourcegraph.com/privacy). Users who use these images — with or without a paid plan — are agreeing to be bound by the terms of the enterprise license in addition to the terms of the Apache License.

## Plans

To gain full access to enterprise features, paying customers are provided with a [license key](../ce/license_keys.md), usually by a customer engineer. When a prebuilt image is configured with a license key, the functionality covered under the customer's plan or subscription is enabled.

> NOTE: Although it includes the word "license", a license key is _completely_ unrelated to the [software license](#software-licensing) described above.

## Summary

You can think of this as a set of three options from the user's perspective:

1. Run a fully open source deployment of Sourcegraph. No enterprise code is included in this deployment, no enterprise features (or even landing pages for those features) are enabled, and no option is provided to do so.
2. Run Sourcegraph Core. This corresponds to [the _Free_ option on the pricing page](https://about.sourcegraph.com/pricing/). A Sourcegraph Core deployment includes enterprise code, but without a license key, any functionality provided therein is extremely limited. (For example, batch changes can only be made with up to five changesets.)
3. Run Sourcegraph with a paid plan. This corresponds to [the _Team_ or _Enterprise_ options on the pricing page](https://about.sourcegraph.com/pricing/). These deployments include enterprise code, with paid features available based on the customer's plan, controlled by their license key.

For more information, you may also want to refer to our [explanation of Sourcegraph Enterprise vs Sourcegraph OSS](../ce/enterprise-vs-oss.md).
