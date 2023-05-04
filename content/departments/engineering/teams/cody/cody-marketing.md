# Cody Marketing

Please [submit questions and feedback for this page here](https://sourcegraph.slack.com/archives/C04QTJDTH70).

## Marketing assets

- [Cody datasheet for Enterprise](https://drive.google.com/file/d/1aBvueBm1CfzTorkb0aumU0Pa_W4VHFYo/view?usp=sharing)
- [Background info and demo tips](https://docs.google.com/document/d/1M7F9n4uNjlQOuUley6EubRjOw9D3meKwgFfvd7yHkMA/edit#heading=h.mgur8fhhngdv)
- [[Draft] Cody competitive comparisons](https://docs.google.com/document/d/1x1Z8ewbCwciVj0cA5aRLt5ziVHuE7LbdBcfNcVEPk-U/edit?usp=sharing)

## Describing Cody

**Product name:** Cody (or "Sourcegraph Cody" when clarity is needed)
**Tagline:** Cody, your AI coding assistant

## Messaging and copy for Cody

### Generic Cody descriptions (version-neutral)

**One-sentence description:** Cody is an AI coding assistant that can find, explain, and write context-aware code by reading your entire codebase and the code graph.

### Cody (for enterprise) descriptions

**50 word description:** Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody uses a combination of Large Language Models (LLMs), Sourcegraph search, and the code graph from Sourcegraph to provide context-aware answers based on your own codebase, eliminating toil and keeping developers in flow.

**100 word description:** Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody uses a combination of Large Language Models (LLMs), Sourcegraph search, and the code graph from Sourcegraph to provide context-aware answers based on your own codebase, eliminating toil and keeping developers in flow. You can ask Cody to describe your codebase, explain how to call services, reference your documentation, or even recap the changes to a codebase that have occurred over the last week. Think of Cody as an always-available senior engineer that knows your codebase inside and out.

### Cody (for personal use) descriptions

**50 word description:** Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody is free for individuals as a VS Code extension; simply download the extension and connect it to your Sourcegraph.com account to get started with your own personal AI programming buddy.

## Cody differentiators

### Context-aware

Cody understands your codebase. When you submit a query, Cody uses Sourcegraph search to reference context from your codebase. This allows Cody to answer questions that depend on the context of the codebase. For example, Cody can tell you which file a component of the codebase is defined in. Cody can also write context-aware code, such as writing an API call that is dependent on an API schema defined in the codebase.

### Universal

Cody is not locked to any specific code host. The enterprise version of Cody can utilize the entire Sourcegraph code graph from the user's instance including code from multiple code hosts.

### Secure

Cody has a zero-retention policy, meaning that code snippets sent to the LLM provider (Anthropic) are processed for the length of time required to return the answer and are removed permanently after that. Cody is also [open source](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/client/cody).
