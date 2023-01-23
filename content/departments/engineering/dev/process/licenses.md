# Licenses

This page documents which licenses are usable at Sourcegraph. For questions, please contact #legal in Slack.

## Licensing Sourcegraph code

All Sourcegraph code should generally be licensed under either:

- The [Apache license](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.apache)
- The [Sourcegraph enterprise license](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.enterprise)

Which one to choose is a decision that your team, manager, and product/leadership should agree on.

### Open Source philosophy

Sourcegraph has an open core business model: it develops Sourcegraph OSS as well as Sourcegraph Enterprise. Like any open core company, we balance the need to serve a strong community, with the need to build a sustainable business that can continuously invest in its products. We are [open and transparent](../../../../company-info-and-process/values/index.md#open-and-transparent), so we strive to clearly communicate our decisions to make a feature open source or not.

In general core value adds should be enterprise-licensed, while utilities, support libraries, etc. that are unlikely to benefit potential competitors should be Apache licensed.

We intend Sourcegraph OSS to:

- allow any developer to build Sourcegraph OSS from source and get code search, with very little obligations (Apache 2)
- allow any developer to modify Sourcegraph OSS with very little obligations (Apache 2)

We intend Sourcegraph Enterprise to

- be usable in production out of the box
- be supported by our team
- include features that enable teams and companies to use Sourcegraph
- include features that deliver significant value beyond code search

We intend all of Sourcegraph to be source available so that anyone can view our code.

## Using open source code

### Allowed licenses: Permissive Licenses

You may use any code licensed under any permissive license, such as Apache, MIT, BSD. If you aren’t sure whether a license is permissive, you can use any license **rated Bronze or better** on the [permissive license list](https://blueoakcouncil.org/list) compiled by Blue Oak Council.

### Not allowed licenses: Copyleft Licenses

We avoid using code and libraries under copyleft licenses. If you can't find an alternative, reach out to the legal team. Below are the most common copyleft licenses:

- AGPL
- GPL (ok for internal use)
- LGPL (ok for internal use)
- CCDL (ok for internal use)
- Eclipse Public License (ok for internal use)
- Mozilla Public License (ok for internal use)
- Anything else not on the permissive license list

If it's for internal use only and not for distribution to users/customers, then tell the legal team and the licenses marked "ok for internal use" above will likely be approved.
