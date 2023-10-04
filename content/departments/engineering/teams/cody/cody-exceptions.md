# Cody Access and Exception Process

> **_NOTE:_**: As of 2023-Jul-12

Cody is intended to be used in conjunction with a Sourcegraph Cloud Managed environment. We have defined criteria for access to Cody as well as a defined exception process for prospective and existing customers interested in Cody. This page is complementary to the decision tree and process flow documented [here](https://www.figma.com/file/ehwTSzvFTwLZSwKyfG6tTp/Cody-Customer-Fit?type=whiteboard&node-id=0%3A1&t=xSEC3vgs2Sc8GRvv-1).

## Criteria for Access

### Net New Prospects

For a net new prospect interested in Cody, there are two potential paths that may be considered:

- Sourcegraph Cloud Managed, the de facto standard method
- Self-Hosted

For Sourcegraph Cloud Managed prospects:

- Cody is on via the webApp by default. Embedding policies need to be configured.
- Prospects will also have access to Cody via IDE.
- Must agree to use Cloud embeddings
- Must agree to use either OpenAI or Anthropic LLMs (our token or theirs)

For Self-Hosted prospects:

- Min ACV must exceed $1M
- Managed Services PS must be included in the agreement
- Must agree to use Cloud embeddings
- Must agree to use either OpenAI or Anthropic LLMs (our token or theirs)

### Existing Customers

For an existing Code Search customer interested in Cody there are two paths to consider depending on their current hosting method:

- Sourcegraph Cloud Managed, the de facto standard method
- Self-Hosted

For Sourcegraph Cloud Managed customers:

- Cody is on via the webApp by default after version 5.1. Embedding policies need to be configured.
- Customers also have access to Cody via IDE.
- Must agree to use Cloud embeddings
- Must agree to use either OpenAI or Anthropic LLMs (our token or theirs)

For Self-Hosted customers:

- Must be a standard, healthy deployment, certified by internal teams
- Must agree to use Cloud embeddings
- Must agree to use either OpenAI or Anthropic LLMs (our token or theirs)
- Must receive manual approval in order to proceed

## Exception Process

If allowable - for existing Code Search customers only - the account team may raise an exception request to Sales, Technical Success, and Product leadership for consideration. Exceptions are reviewed every Tuesday and Thursday via [this report](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005s21WEAQ/view?queryScope=userFolders) and the output of the review is communicated in #wg-selling-sourcegraph.

To trigger an exception the account team must fill out the following information on the Salesforce Opportunity:

- Deployment Method
- Deployment Style
- Deployment Host
- Cloud Disqualifiers
- Cloud Disqualifier Description
- LLM Provider
- Preferred Embeddings Deployment
- Preferred Embeddings Notes
- Cody Approval Status Notes (provide a brief summary of why you're requesting an exception)
- Cody Approval Status = `Needs Review`
