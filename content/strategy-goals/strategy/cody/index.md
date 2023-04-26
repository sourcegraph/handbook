# Cody strategy

## Quicklinks

- [Metrics](https://analytics.amplitude.com/sourcegraph/dashboard/4n7yl67)
- [Cody FAQ](../../../departments/engineering/teams/cody/about-cody-faq.md)
- [Cody stories](https://docs.google.com/document/d/1LD6t01TdxPT1LSbzmS2FN_a8tifhBiUOn9YpzJKORWo)
- [Board](https://github.com/orgs/sourcegraph/projects/331)
- [Job fair tracker](https://github.com/orgs/sourcegraph/projects/302/views/18?filterQuery=type%3ACody)

## Vision

Developers can find, understand, write, improve, and secure code 100x faster thanks to the power of AI which knows about their company's code, systems, best practices, and policies. Basic, repetitive tasks are gone, and time can be spent designing and building high-value software. Any developer can adopt AI for code because there are guardrails to make it secure and reliable even for the largest regulated enterprises.

### Why Sourcegraph

Sourcegraph is uniquely positioned to build this because for the past 10 years, we've been working on the key building blocks:

- The Code Graph: a representation of code and metadata around it that powers code search and AI.
- Big Code: Sourcegraph is built to work for companies with Big Code. We'll continue integrating deeply with our customer's environment and allowing them to build on top of Sourcegraph.

Besides, we're building Cody so that it's modular: customers can plug their own model, tools, and data sources in. This reinforces how deeply integrated Cody is into a customer's stack, and breaks the dependency and lock-up on a single model provider.


## Strategy & plans

## Next 3 months

- **Enterprise adoption**: So far, we know that customers are fine with an LLM dependency, but large enterprises don't want to send their whole codebase out to create embeddings. Letting Cody answer questions about the entire codebase and not just local context or a single repo is a key differentiator. We've also gotten signal that basic filtering (together with indemnification) is going to be table stakes in conversations.
  - **Multi-repo context fetching**: Cody answers questions about multiple repos (vs 1 at a time today).
  - **[Supply code intelligence context to Cody](https://docs.google.com/document/d/1b4nLWa8pc74xC3MmtZjVQhE1nXe_xWyWmwF-aoumeVw/edit)**.
  - **Sourcegraph Embeddings**: remove the dependency on a third party for embeddings. We focus on embeddings (vs. LLM) because it's easier to do, and sending an entire codebase to a third party is a blocker for many customers
    - Self-hostable embeddings
    - Sourcegraph hosted embeddings GA
  - **Bring your own model**
    - We start by making it so you can use your own Anthropic or OpenAI (ChatGPT) contract. To do so, we'll also need to make it so customers can completely customize the prompts.
    - Meanwhile, we partner with one large customer to experiment with plugging in a model they bring.
  - Filters/policies: allow for filtering out copyleft code, at least on a best effort basis ([PR-FAQ](https://docs.google.com/document/d/1c5VG1gCbAE8Vtf3ey7CFL5S1RQgX8l2soPyfkjLS9GM/edit))
- **Prove out IDE extension usage**
  - We're going to expriment with a set of editor extensions in parallel. We will iterate fast on several IDEs at the same time, and we won't try to create a unitifed experience. Intead, we will iterate on each extension independently to find the UX that works, then ultimately bring learnings back in. Also see this [doc](https://docs.google.com/document/d/1szCZ0D1YH3hj5fIYj4SrhomVl7AQKlX4IUkHQcZUmkM#heading=h.v8dqtp19rsmr).
  - So far, we've started with VS Code ([Amplitude](https://analytics.amplitude.com/sourcegraph/dashboard/4n7yl67))
  - Features will likely include:
    - [Autocomplete](https://docs.google.com/document/d/12eO60kiaGwhjZr1Z3Ny-4GBfHXZJUWHhgu9op0QDOUY)
    - Adding more recipes, and/or allowing customers to define their own
    - Adding metadata and ownership data into Cody
    - Adding refactors recipe
    - Opening up Cody so that it's modular and it's easy to add recipes and data sources
- **Add Cody into Sourcegraph**: we focus on making search easy to onboard and learn for all developers (our most validated challenge of all times) and on merging the chat interface into the Sourcegraph web app.
  - [Magical search](https://docs.google.com/document/d/10RZCwcKz-I0NbdEW9finkvpo2vDGSqZRaOVPMtDmseg/edit#)
  - Chat interface in the main UI
- **Cody can use App as a backend**. This allows us to distribute Cody to individual users and small teams.

## Next 12 months (WIP)

This section is underdefined as we collect feedback from customers.

- **Enterprise adoption**
  - Bring your own model
  - Experiment with self-hosted LLMs
  - Further iterations on filters/policies
  - Platform features that let customers ingest more data into Cody
- **More editors** (IntelliJ, Emacs, neovim)
- A lot more we don't know about!
