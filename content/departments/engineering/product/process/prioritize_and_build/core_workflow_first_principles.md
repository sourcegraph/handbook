# Core workflow first principles

Our one year product vision is to reposition Sourcegraph as a code intelligence platform. This new positioning will be a big shift in the experience of using Sourcegraph to get work done.

Today, Sourcegraph is conceptually oriented around “searching code.” This conceptual orientation is surfaced through the UI, the information architecture, and the core interaction patterns.

We’ve iteratively created many new features and products (Code Insights, Batch Changes, etc.) alongside code search that rely on the underlying search technology. While this helped us build and validate these features quickly, the result is a collection of adjacent feature silos and a core workflow for “searching code” rather than for “code intelligence.”

We have work underway to reduce complexity in the existing code search and bring some of these siloed features into the existing core workflow. However, this approach continues to be additive on top of the original conceptual orientation of “searching code.” Continuing with this approach is risky and unsustainable—the conceptual orientation around “searching code” creates a local maximum for Sourcegraph’s future as a code intelligence platform.

To reach our product vision, we need to instead take a transformative approach and go a level higher conceptually, to redefine the first principles and core interaction patterns, and those are surfaced in the core workflow.

First principles for our core workflow **are**:

- The philosophy of how the user’s workflow is carried out in Sourcegraph
- The underlying model of how the system aligns with / enables the user’s actions
- What we prioritize (and as a consequence what we care less about)

These first principles **are not**:

- Principles for how to approach design or development as a discipline (e.g. our existing design principles)
- Brand principles or values
- UI design patterns
- Jobs to be done or user problem statements

Having these first principles will:

- Help us refine the core workflow for Sourcegraph as a unified product, where other product features can easily design for the feature’s integration into the core workflow.
- Give us an opinionated approach to building our product.
- Identify where we need to invest in improvements to the existing product.

## First principles for the core workflow

These principles represent our current understanding. As we move forward, we’ll revisit and revise these principles as needed based on our learnings.

### “Code intelligence” is knowledge derived from code

Sourcegraph’s first role is to help developers get knowledge out of code—code intelligence—that unblocks them in their work. The core workflow is the basis for code intelligence in Sourcegraph.

**Immediate implications**

- Conceptually, we need to shift the core workflow from an underlying conceptual model of **“searching code”** to instead **“querying code intelligence data.”**
- Code itself is one type of data exposed through Sourcegraph, alongside history, metadata, SCIP data, etc. (define the full set, elevate as first class where needed).

### The query is the access point into “code intelligence” on Sourcegraph

The core workflow begins in some way or another with a query. The core workflow enables other workflows in Sourcegraph.

**Immediate implications**

- The core workflow enables other features like batch changes and code insights to extend or integrate directly into the core workflow.
- The query should be a unifying connection enabling as many of Sourcegraph’s features as possible.

### From broad interest space to narrow solution space

The core workflow inherently supports a workflow moving from a broad interest space to a narrow solution space. The path from broad to narrow goes from broad to narrow, sometimes once, sometimes over and over to answer different parts of a question or even new questions.

A user’s path is not prescribed, but rather adapts to the user’s needs in the moment.

**Immediate implications**

- The core workflow will benefit from our explicitly defining different search strategies that developers use and what makes those strategies successful.
- The core workflow is already based around an existing search strategy, and that will form the basis for iteration.
- To support a range of search strategies, the core workflow must make it easy for users to understand the path they’ve followed and be able to to move back and forth between moments on that path.
- The core workflow more closely resembles “berrypicking” than a “linear drilldown.”
- The underlying information architecture, UI, and navigation through the UI must align to these first principles, and this particular principle is one of the most influential in decision-making.

### Support building and holding mental context

The core workflow supports a user’s own workflow, which inherently involves building and holding mental context. Every interruption that shifts attention to Sourcegraph itself versus the workflow it’s supporting adds cognitive load that adds stress in holding that mental context. The core workflow actively minimizes and avoids these moments.

**Immediate implications**

- The core workflow should minimize doorway effects and preserve working context.
- Rendering and loading content must be feel instant. We will need to optimize how we do this beyond simply rendering faster.
- The core workflow should follow existing and familiar patterns whenever possible. Explicitly define the context of “familiar patterns” and how the core workflow parallels or diverges from this context.
- Avoid anything that increases cognitive load, such as extraneous UI elements or things that require interpretation.

### Collaboration should take place close to context

The core workflow is the basis of code intelligence on Sourcegraph, and ultimately helps deliver value across a user’s organization. First-class collaboration is crucial for transforming Sourcegraph from orienting around “a user’s workflow in isolation” to a platform that “provides value across a user’s organization.” Collaboration should take place as close to the original context as possible.

**Immediate implications**

- Future collaborative actions must be intentionally designed as close to the original context as possible.
- The core workflow and integrations with this workflow should consider not only the direct user engaging with core workflow, but the ecosystem of users that may engage with the core workflow in other ways or through other users.
