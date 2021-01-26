# CE-to-Engineering issue handover process

This document outlines how and where to ask for help for customers and prospects, as well as the principles governing that process. Read [the support overview](support.md) before filing an issue.

## Principles

**CE is always the first line of defense.**

**Engineering should only feel a responsibility to get involved if tagged in by CE.**

**However, once someone [takes ownership](support.md#support-owners) of a ticket (whether formally, or informally by taking over the conversation), it is their responsibility to see it through, either by (1) see the issue through to resolution or (2) assign a new owner.**

Exceptions to the principles above:

- This does not apply to our public GitHub issue tracker; instead, it only applies to [official support channels](support.md). Issues filed in GitHub are the responsibility of Engineering and/or Product.
- Certain customers pay for dedicated support from a member of the Engineering team (find the full list in the [CE account ownership document](https://docs.google.com/spreadsheets/d/1EbAlUlMoZU-M2haRj0DoW3E7h7KG2D0vwLX3PlwL-h0/edit#gid=0)). Responding to issues filed by these customers is a shared responsibility for the assigned Engineer and CE (whoever sees it first).
- If a new question or issue is raised in an existing ticket or thread, the engineer who previously owned the thread should notify the CE to determine whether to start a new thread or change ownership.

Otherwise, if an engineer sees a new question or issue come in and they are interested in responding, they should just check with CE first (by posting in the #ce Slack channel).

## Create a customer issue

We maintain two issue trackers:

1. [sourcegraph/customer](https://github.com/sourcegraph/customer/issues) for private issues that affect a particular customer.
1. [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/issues) for public issues affecting the general product.

When in doubt, file in the private repo—issues can be moved over to the public repo if needed. 

Support tickets should be translated to GitHub issues when they require an Engineering team to remediate them. If you need a gut check or a suggestion for next steps, you can check with the [appropriate team](routing_questions.md) in Slack.

File new customer issues in the [private customer issue tracker](https://github.com/sourcegraph/customer/issues/new), providing all information required for troubleshooting (such as screenshots, logs, or conversation transcripts) and labelling it with `customer/$name`. Link to the appropriate Jira Service Desk ticket and link to the reporting company's profile in Salesforce. Assign the issue to the [appropriate team](routing_questions.md) in Github (you should be able to assign to the entire team—if not, check in #it-tech-ops for why that's not appearing).

If it turns our to be a general issue affecting multiple deployments, create an issue in the [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues/new/choose). The issue must not include any private information and it should link to the related customer issues in its description.

## How CE hands GitHub issues to Engineering

1. The assigned CE will first reply to the prospect or customer that reported the issue.
1. If the issue is clearly a bug or a feature request (rather than a question that can be clarified or answered on the spot), [the CE will file or add on to a GitHub issue](customer_issues.md).
1. The CE will add a prioritization label to the issue, from `user/p0` to `user/p4`, based on a combination of (1) the severity of the issue, and (2) the prioritization of the reporting company. These labels mean the following:
  1. `ce/p0`: The issue results in the company's Sourcegraph instance being unusable and the company is a [Tier 1 prospect or customer](../sales/index.md#segmentation).
  1. `ce/p1`: The issue results in partial loss of functionality or serious disruption and the company is a [Tier 1 or Tier 2 prospect or customer](../sales/index.md#segmentation).
  1. `ce/p2`: The issue results in minimal loss of functionality or annoyance and the company is a [Tier 1 or Tier 2 prospect or customer](../sales/index.md#segmentation), or the issue is more serious, but applies to a [Tier 3 prospect or customer](../sales/index.md#segmentation).
  1. `ce/p3`: The feature request is a "nice-to-have" for a [Tier 1 or Tier 2 prospect or customer](../sales/index.md#segmentation), or the issue results in minimal loss of functionality or annoyance for a [Tier 3 prospect or customer](../sales/index.md#segmentation).
  1. `ce/p4`: The feature request is not urgent or the issue is minor.

## Engineering responsibilities

1. If an Engineer agrees to take on an issue or a ticket, they must be willing to follow-through on the problem until it is addressed. If they are not willing or able to do so, they must find a replacement or notify the CE as soon as possible so someone else can be assigned.
1. If an Engineer is unsure of how to respond, they should reach out to CE in the #ce channel for feedback and support.
