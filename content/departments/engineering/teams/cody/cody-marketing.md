# Cody Marketing

Please [submit questions and feedback for this page here](https://sourcegraph.slack.com/archives/C04QTJDTH70).

## Describing Cody

**Prorduct name:** Cody (or "Sourcegraph Cody" when clarity is needed)
**Tagline:** Cody, your AI coding assistant

### Generic Cody descriptions (version-neutral)

**One-sentence description:** Cody is an AI coding assistant that can find, explain, and write context-aware code utilizing Sourcegraph’s code intelligence.

**50 word description:** Cody is an AI coding assistant living in your editor that can find, explain, and write code. Cody is available to customers as a part of the Sourcegraph code AI platform and is also available for personal use for free as a VS Code extension.

**100 word description:** Cody is an AI coding assistant living in your editor that can find, explain, and write code. Cody is available to customers as a part of the Sourcegraph code intelligence platform; by connecting to your Sourcegraph instance and referencing the code graph, Cody provides context-aware answers based on your own codebase. Cody can also be used free for personal use with the VS Code extension, which can provide context-aware responses based on designated public repositories from Sourcegraph.com.

### Cody (for enterprise) descriptions

**50 word description:** Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody uses a combination of Large Language Models (LLMs), Sourcegraph search, and the code graph from Sourcegraph to provide context-aware answers based on your own codebase, eliminating toil and keeping developers in flow.

**100 word description:** Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody uses a combination of Large Language Models (LLMs), Sourcegraph search, and the code graph from Sourcegraph to provide context-aware answers based on your own codebase, eliminating toil and keeping developers in flow. You can ask Cody to describe your codebase, explain how to call services, reference your documentation, or even recap the changes to a codebase that have occurred over the last week. Think of Cody as an always-available senior engineer that knows your codebase inside and out.

### Cody (for individuals) descriptions

**50 word description:** Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody is free for individuals as a VS Code extension; simply download the extension and connect it to your Sourcegraph.com account to get started with your own personal AI programming buddy.

## Cody for enterprise vs. Cody for individuals

"Cody for enterprises" is an unofficial name for the full, context-aware version of Cody.

- It is enabled on a customer’s instance to give every user on that instance access to Cody. It therefore requires the customer to have a Sourcegraph instance.
- By connecting to the customer’s private Sourcegraph instance, it can provide context-aware information. It uses Sourcegraph and the code graph to reference the customer’s private code and answer questions based on it.

"Cody for individuals" is a lighter-weight solution that is available to anyone.

- It is enabled on an individual user basis.
- It does not require the user to have a Sourcegraph instance. It only requires them to have a Sourcegraph.com account.
- This version of Cody can answer many general questions based on its knowledge of code and the code open in the user's editor, but it cannot reference the user’s entire private codebase and code graph (because it doesn’t have access to a private codebase).

## Cody differentiators

### Context-aware
Cody understands your codebase. When you submit a query, Cody uses Sourcegraph search to reference context from the user’s codebase. This allows Cody to answer questions about the codebase or provide answers that take a codebase’s context into account.

### Universal
Cody is not locked to any specific code host. The enterprise version of Cody can utilize the entire Sourcegraph code graph from the user's instance including code from multiple code hosts.

### Secure
Cody has a zero-retention policy, meaning that code snippets sent to the LLM provider (Anthropic) are processed for the length of time required to return the answer and are removed permanently after that. Cody is also [open source](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/client/cody).