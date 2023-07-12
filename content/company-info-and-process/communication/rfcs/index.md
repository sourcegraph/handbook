# Requests for comments (RFCs)

**Quickstart**

- Create a new RFC:
  - Automatically, via `sg` tool
    - Benefits
      1. Ensures unique ID across public and private RFCs
      2. Creates the document and update title and content
      3. (for private RFC) creates a breadcrumb doc in the public RFC folder, to
         redirect to the private RFC and not leave a gap in the public view
    - Command:
      ```
      sg rfc [--private] create --type <type> "rfc title"
      ```
      Example:
      ```
      sg rfc --private create --type solution "Cody on Apple Watch"
      ```
    - More information:
      Tool [reference](https://github.com/sourcegraph/sourcegraph/blob/main/doc/dev/background-information/sg/reference.md#sg-rfc).
  - Manually
    - The default format — [View](https://docs.google.com/document/d/1VV0ddLmMrcU2IWo_s4xm8Q8UtGnreyuhIRPJY0Dh5NI/edit) or [Duplicate](https://docs.google.com/document/d/1VV0ddLmMrcU2IWo_s4xm8Q8UtGnreyuhIRPJY0Dh5NI/copy)
    - Framing problems, proposing solutions, and making decisions—[View](https://docs.google.com/document/d/1FJ6AhHmVInSE22EHcDZnzvvAd9KfwOkKvFpx7e346z4/edit) or [Duplicate](https://docs.google.com/document/d/1FJ6AhHmVInSE22EHcDZnzvvAd9KfwOkKvFpx7e346z4/copy)
    - Surfacing a tension—[View](https://docs.google.com/document/d/1__E9bzW9eV7pnzhGfs4f_bOqWefYZKzI-m0rWrZ8nF4/edit) or [Duplicate](https://docs.google.com/document/d/1__E9bzW9eV7pnzhGfs4f_bOqWefYZKzI-m0rWrZ8nF4/copy)
    - Proposal for adding data to pings — [View](https://docs.google.com/document/d/1dbR2ir-gKmpGRgnNphk6SxOkt1DNSCX2pjbOiPtcFBw/edit) or [Duplicate](https://docs.google.com/document/d/1dbR2ir-gKmpGRgnNphk6SxOkt1DNSCX2pjbOiPtcFBw/copy)
    - Proposing process / handbook changes — [View](https://docs.google.com/document/d/1zInJ9mn_SePKjS8dLHS1EDt2_gUEkCKD544bDDSuJek/edit) or [Duplicate](https://docs.google.com/document/d/1zInJ9mn_SePKjS8dLHS1EDt2_gUEkCKD544bDDSuJek/copy)
- [View all public RFCs](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa)
- [View all private RFCs](https://drive.google.com/drive/folders/1KCq4tMLnVlC0a1rwGuU5OSCw6mdDxLuv)
- There is also an #rfcs channel you can use to follow along with RFCs as they are created. The bot that updates the channel is a [Zapier](https://zapier.com) integration; you can request access in #it-tech-ops but you only need to do this if you want to modify the bot.

---

We use RFCs to collaborate successfully as an [all-remote](../../remote/index.md) team.

RFCs give us a way to write down ideas and plans so we can communicate, collect thoughtful feedback from others on the team, and make decisions.

An “RFC” literally means a “Request for Comments.” Though RFCs at Sourcegraph can take many forms for different purposes, an RFC is ultimately just a document with a few attributes:

- The author’s name(s)
- The date it was written
- A sequential number
- A status label
- Is public to the world by default
- Is a Google Doc

Our goal is for RFCs to be lightweight, low-process, and effortless to create and use. An RFC can be thought of as an asynchronous conversation. Unlike Slack, email, or other channels, using RFCs helps us because:

- There’s no implicit demand for an immediate response.
- Reviewers have time to consider and propose changes.
- More people can collaborate at once without clashing.
- RFCs are easily searchable and referable.
- RFCs are retained indefinitely.

## When to use an RFC

### Use an RFC when…

- You want to frame a problem and propose a solution.
- You want thoughtful feedback from team members on our globally-distributed remote team.
- You want to surface an idea, tension, or feedback.
- You want to define a project or design brief to drive project collaboration.
- You need to surface and communicate around an important, highly cross-functional decision.

### Don’t use an RFC when…

- You want to discuss personal or sensitive topics one-on-one with another team member.
- You want to make a decision to change something where you are the decider. In the vast majority of cases, creating an RFC to explain yourself will be overkill. RFCs should only be used if a decision explicitly requires one of the bullets in the section above.

## How we craft RFCs

### RFCs are sequentially numbered

Each RFC has a unique, sequential number that appears in the title (e.g. “RFC 485 Review: Rethinking RFCs.”) This makes it easier to quickly reference specific RFCs and easier for readers to quickly find that document in Google Drive. The sequential numbers also provide valuable context about the order in which RFCs were created.

### RFCs have a status

Each RFC has a status label in the title of the RFC (e.g. “RFC 227 WIP: Title.”) The author is responsible for keeping the title updated.
These status labels help to provide more context for readers. They’re most helpful for readers to understand the RFC’s context and shape their feedback accordingly.

We have a set of status labels we’ve found helpful in the past:

- **WIP**: The author is still drafting the RFC and it’s not ready for review.
- **Reviewing problem**: The Reviewing problem label is used when the RFC has a firm problem statement, and reviews should focus on confirming that the problem definition is correct.
- **Reviewing solution**: The Reviewing solution label is used when the problem is well understood, and a proposal has been written that solves it that is ready for review.
- **Approved**: When the RFC is for the purpose of making a decision, the Approved label indicates that the decision has been made.
- **Implemented**: When the RFC is for the purpose of making a decision, the Implemented label indicates that the RFC’s proposal has been implemented. If an important code change has happened due to implementing this RFC, we recommend capturing that in an [Architecture Decision Record - ADR](https://docs.sourcegraph.com/dev/adr) and linking the RFC in question in the ADR.
- **Closed**: When the RFC is for the purpose of collaboration or discussion but not necessarily to make a decision or propose a specific outcome that will eventually become Implemented, the Closed label indicates that the RFC is no longer an active collaborative artifact.
- **Abandoned**: When the RFC is for the purpose of making a decision, and there are no plans to move forward with the RFC’s proposal, the Abandoned label indicates that the RFC has been purposefully set aside.

While these labels suggest that RFCs move through a series of prescribed stages, this isn’t always the case. RFCs are low-process and can be used for all kinds of purposes that may not have an explicit, actionable outcome. Ultimately, the RFC itself should make it clear what the status and planned process is.

If in doubt about the current status of an RFC, check the update history and contact the author.

### RFCs are public to the world by default

[We value openness](../../values/index.md#open-company). Transparency helps us to communicate with and gather feedback from our customers and across our team, and it holds everyone accountable for being inclusive, high-quality, and (thing).

All RFCs are public for anyone to read and comment by default, and for all Sourcegraph teammates to edit. These RFCs are located in our [public Google Drive folder](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa).

Sometimes, there’s information in RFCs that can’t be made public. These are located in our [private Google Drive folder](https://drive.google.com/drive/folders/1KCq4tMLnVlC0a1rwGuU5OSCw6mdDxLuv).

- RFCs should never reference customer names directly, even if they are listed on our website. Instead, you can use our [process for linking to customer names in public places](../../../departments/data-analytics/documentation.md#how-to). You can also use an arbitrary code name (e.g. “ACME,” “Customer X”) for each customer you need to reference in the RFC. Code names don’t need to be consistent across documents. The first usage of each code name should be linked to the actual customer.
- If there is strategic or confidential information that shouldn’t be made public, you can put that information into a private document and link to it from the public RFC.
- If most of the content of the RFC can’t be made public, then it is okay to make the RFC accessible only to the Sourcegraph team. To do this, add “PRIVATE” after the status in the title, move it to the [private RFCs Google Drive folder](https://drive.google.com/drive/folders/1KCq4tMLnVlC0a1rwGuU5OSCw6mdDxLuv), and explain why it’s private within the RFC itself.

For examples of public vs. non-public information, see our [transparency chart](../../values/index.md#open-and-transparent).

#### What should you do if non-public information is accidentally added or found in an RFC?

Only Sourcegraph teammates are able to view the revision history of RFCs (as edit access is required to view revision history). This means if non-public information is found in a public RFC, all you need to do is remove that information. Similarly, comments that accidentally contain non-public information can be deleted.

### RFCs are Google Docs

We use Google Docs for writing and collaborating on RFCs. Using a single system helps us because:

- It gives our team and outside readers a consistent experience when writing, reading, and collaborating on RFCs.
- It makes it easy for us to make sure everyone has access to all of our RFCs in a single location.
- It’s intuitive and inclusive of all of our team members, regardless of prior technical experience.
- It’s easy to determine the next sequential number when creating a new RFC.

We know Google Docs don’t have all the features or capabilities we would like, such as markdown support and code snippets. We’ve considered and tried using other tools in the past, including Notion and markdown in git. However, in our experience, Google Docs provides the best overall experience within its constraints.

Often, the ideas and proposals within RFCs progress into other collaborative artifacts: a usability improvement might be explored in a Figma file, a new feature might be captured in a series of GitHub issues, or a single RFC’s proposal might be carried out through a series of subsequent RFCs. It’s a best practice to update RFCs to include links and references to related artifacts.

## RFC formats we’ve found helpful in the past

The default RFC template is minimal and contains just the attributes you need to get started on a new RFC. However, we’ve found a few different structured formats and workflows to be helpful in achieving specific outcomes with RFCs.

Instead of providing these formats in the default template, we document the RFC formats and workflows we’ve found helpful in the handbook. This way, we keep RFCs lightweight and flexible, but can also keep iterating and improving on formats that work well for specific needs.

If you find that a new format works well for achieving a distinct goal and could be of use in the future, please add it to our list of formats.

### The default format

The default format has just the required attributes and can be used as the starting point for any RFC.

[View the template](https://docs.google.com/document/d/1VV0ddLmMrcU2IWo_s4xm8Q8UtGnreyuhIRPJY0Dh5NI/edit) • [Duplicate](https://docs.google.com/document/d/1VV0ddLmMrcU2IWo_s4xm8Q8UtGnreyuhIRPJY0Dh5NI/copy)

### Goal: Framing problems, proposing solutions, and making decisions

This format is helpful for framing a problem, proposing solutions (or collecting feedback so as to propose a solution), and for ultimately making decisions.

This is our typical format for defining what we feel is important to work on, and acts as a constant touchpoint throughout our work from conceptualization to implementation and measuring success.

In this format, we find it helpful to include:

- **Tags** for the people involved and their roles in the decision-making framework (including the decider, input providers, approvers, and approvals).
- **Tags** for any teams that will be affected either directly or indirectly, and should have the opportunity to review and contribute to the RFC.
- **Background**: Just enough context necessary to frame the rest of the RFC. The content should be indisputable facts, not opinion.
- **Problem**: A description of the problem that this RFC is trying to address, the constraints, and why this problem is worth solving now.
- **Proposed solution** (optional): A description of how to solve the problem. It’s okay to skip this section if you just want to define a problem. Otherwise, it can be helpful for thinking of solutions or to hand off ownership to someone else.
- **Definition of success**: How do we know if this proposal was successful? Are there any metrics we need to start tracking?

[View the template](https://docs.google.com/document/d/1FJ6AhHmVInSE22EHcDZnzvvAd9KfwOkKvFpx7e346z4/edit) • [Duplicate](https://docs.google.com/document/d/1FJ6AhHmVInSE22EHcDZnzvvAd9KfwOkKvFpx7e346z4/copy)

### Goal: Surfacing a tension

This format is helpful for surfacing a tension. A tension is somewhere between a problem, a feeling (of unease), and a person’s (unmet) needs. When tensions come up, they describe a sense there’s a gap between the current reality and an ideal potential future.

Tensions are good, because they highlight where things might not be working so well, whether it’s an inefficiency or a blocker. They give us a way to identify them, and then we can then address them and make improvements. Tensions aren’t “problems,” but rather opportunities to grow.

Many organizations wait until tensions are “big.” But if we identify tensions early, while they’re still small, they’re not only easier to address, they help us stay healthy and grow well.

In this format, we find it helpful to include:

- **My tension**: Make it personal—share your personal tension and how it affects you in your day-to-day work.
- **My proposal**: Make it actionable—small as a first step, as specific as how you will do it and who helps you. Make it good enough for now, and safe enough to try.
- **What happens if we do nothing**: How might this become “big” if we do nothing, and what consequences will that have?

[View the template](https://docs.google.com/document/d/1__E9bzW9eV7pnzhGfs4f_bOqWefYZKzI-m0rWrZ8nF4/edit) • [Duplicate](https://docs.google.com/document/d/1__E9bzW9eV7pnzhGfs4f_bOqWefYZKzI-m0rWrZ8nF4/copy)

### Goal: Proposal for adding data to pings

This format is standard for adding new data to pings.

In this format, we include:

- **Background**: Just enough context necessary to frame the rest of the RFC. The content should be indisputable facts, not opinion.
- **Problem**: A description of the problem that this RFC is trying to address, the constraints, and why this problem is worth solving now.
- **Proposal**: What data should be added, including:
  - The exact data fields you’re requesting to add
  - The exact questions you’re trying to answer with this new data, and why existing data can’t answer those questions
  - What the JSON payload looks like once those data fields are added

[View the template](https://docs.google.com/document/d/1dbR2ir-gKmpGRgnNphk6SxOkt1DNSCX2pjbOiPtcFBw/edit) • [Duplicate](https://docs.google.com/document/d/1dbR2ir-gKmpGRgnNphk6SxOkt1DNSCX2pjbOiPtcFBw/copy)

### Goal: Proposing process / handbook changes

This format is helpful for discussing things that will ultimately result in a change to the handbook. While this format includes framing a problem and proposing a solution, its format helps us to make next steps very clear by anchoring it to a concrete proposal with a very clear next step after approval.

In this format, we find it helpful to include:

- **Tags** for the people involved and their roles in the decision-making framework (including the decider, input providers, approvers, and approvals).
- **Tags** for any teams that will be affected either directly or indirectly, and should have the opportunity to review and contribute to the RFC.
- **Background**: Just enough context necessary to frame the rest of the RFC. The content should be indisputable facts, not opinion.
- **Problem**: A description of the problem that this RFC is trying to address, the constraints, and why this problem is worth solving now.
- **Proposal, including a linked pull request**: A proposal for the change, including a link to a pull request on GitHub with the proposed changes reflected in the handbook. This helps anchor the discussion to a concrete proposal. For larger changes, the proposal should include and reflect the status of any rollout steps, such as presenting the changes to the company.

This format helps us to keep the handbook our source of truth and makes the next step after approval very clear: just merge the PR.

[View the template](https://docs.google.com/document/d/1zInJ9mn_SePKjS8dLHS1EDt2_gUEkCKD544bDDSuJek/edit) • [Duplicate](https://docs.google.com/document/d/1zInJ9mn_SePKjS8dLHS1EDt2_gUEkCKD544bDDSuJek/copy)

Here is how I would rewrite the external contributing section with the Markdown links:

## Contributing as an external contributor

We welcome contributions from developers outside of Sourcegraph and Cody! Here are some tips for external contributors:

### Contributing to Sourcegraph

If you want to contribute an RFC to Sourcegraph, reach out to the Sourcegraph team on Twitter [@sourcegraph](https://twitter.com/sourcegraph) or by [filing an issue](https://github.com/sourcegraph/sourcegraph/issues) on GitHub. A Sourcegraph team member can then give you edit access to the [RFCs Google Drive folder](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa) so you can submit your proposal.

### Contributing to Cody

To contribute an RFC to Cody, connect with the Cody team on Twitter [@sourcegraphcody](https://twitter.com/sourcegraphcody) or [GitHub](https://github.com/sourcegraph/cody/issues). A Cody team member can provide you edit access to add your RFC to the shared [RFCs Google Drive folder](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa).
