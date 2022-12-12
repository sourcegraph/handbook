# Handbook usage

## What is the handbook?

The Sourcegraph handbook is centralized documentation system for how we work. We are a [handbook-first company](#what-does-it-mean-to-be-handbook-first) because:

1. A written process is followed more closely and frequently than an informal one, which leads to more people and iterations to improve it.
1. We believe anyone can and should propose improvements to a written-down process. Learn [how to propose an edit the handbook](editing/index.md).
1. New teammates can onboard more quickly by reading our handbook to understand background information and processes.
1. When you go on vacation or to sleep, you can relax knowing that nobody will be blocked while you're not working. They can rely on the handbook.

### Guiding Principles

- **The Handbook can be viewed by anyone.** One of our Sourcegraph values is transparency. We want all public information to be available to everyone, whether they work at Sourcegraph or not, and it all lives in the Handbook. The Handbook should be searchable and easy to navigate.
- **The Handbook can be edited by any Sourcegraph teammate.** We value high agency and encourage all teammates to update the Handbook as they see fit. We provide resources to help teammates contribute to the Handbook no matter their technical background.
- **The Handbook is maintained by every Sourcegraph teammate.** At Sourcegraph, we work as a team. No one person is responsible for keeping our content updated, it falls on all of us. Editing and updating pages should be quick and well documented.
- **The Handbook is a source of truth** at Sourcegraph, and information there is expected to be accurate and up-to-date.

### Intended audience

Sourcegraph is an [open company](../company-info-and-process/about-sourcegraph/index.md#sourcegraph-open-product-open-company-open-source) and we value [transparency](../company-info-and-process/values/index.md#open-and-transparent). As such, we keep the Handbook public.

The **primary** intended audience for the Handbook is Sourcegraph teammates.

The **secondary** intended audience for the Handbook is Sourcegraph candidates.

Content intended for users of the Sourcegraph product should be part of [Sourcegraph Docs](https://docs.sourcegraph.com/).

## What does it mean to be handbook-first?

Being handbook-first means using the handbook as the source of truth for answers and processes.

To be handbook-first, we must:

- Rely on the handbook being a reliable source of truth: accurate and up-to-date.
- Default to the handbook when looking for information about a business process or policy, not just when we read about it the first time, but as a habit every time because we expect it to keep evolving.
- Share responsibility for keeping the handbook accurate and up-to-date. If you notice something is missing or inaccurate, it is your responsibility to propose a change. This takes a lot more time than just doing things and not writing things down. But being handbook-first is worth it because it yields better processes and helps us work together efficiently as we grow.

## Handbook usage

- Most content in this handbook is meant to help rather than being absolute rules (unless stated).
- For any process to be in force, it must be documented in the handbook. A Google Doc or pending PR to the handbook is not sufficient because using those reduces the effectiveness of the handbook as a trusted source of knowledge. Further, if you never need to merge your change to bring it into force, we aren't encouraging making small, iterative improvements. This is a rule required for us to truly be a handbook-first company.
- Whenever possible, link to the Handbook rather than providing a written-out answer to a teammate's question. If you ask a question and someone answers with a link to the handbook, they are doing so because the handbook has the best answer for your question.
  - Similarly, if someone replies to a question with a newly typed-out answer that differs from what's in the handbook, gently ask them to either follow what's in the handbook or propose an edit to the handbook.
- If what you're looking for isn't answered in the handbook, it's likely that someone else will have the same question in the future. Document the answer by updating the handbook to help everyone else, or clearly pass along the responsibility to do so to someone else ("Who will document this?").
- Related to the above, resist the temptation to improve something at the same time you document it. As a first step, make a PR to document things as you know them to be today and then create another PR to add improvements. By separating these two steps, you avoid a situation where a proposal and improvement blocks documenting what people need to know today.
- The handbook documents what we do right now. It doesn't describe the ideal practices we hope to follow in the future, or outdated practices we followed in the past.
- [Announce important changes](editing/announcing-handbook-updates.md) in the appropriate channels. Ensure everyone who needs to be aware of the change is made aware.
- Use PRs to discuss change proposals to the handbook whenever possible (an exception, for example, might be when discussing non-public information that might lead to a handbook update.) Using a Google Doc, Slack, etc. instead can be easy to miss existing (even conflicting) content and also makes it hard to follow the discussion since it is in multiple places. Getting to a PR also more quickly makes it easier to discover these and for others to contribute cross-links or highlight duplicated/conflicting content.
  - **Note:** In some cases, it might make sense to start with an [RFC](../company-info-and-process/communication/rfcs/index.md). In any case, before changes are implemented, they must be documented in the handbook.
- Follow the [Sourcegraph content guidelines](../company-info-and-process/communication/content_guidelines/index.md) for consistent voice and style.
- Follow the [Handbook Content Best Practices](editing/handbook-content-best-practices.md) for help with structuring your content, and deciding where it should live.

## Why do we use Git? Why not a wiki or Google Docs?

The handbook consists of Markdown files in the Git repository at github.com/sourcegraph/handbook. Being [handbook-first](#what-does-it-mean-to-be-handbook-first) means the Handbook must be kept up to date. There are several benefits in using Git over another format:

1. Many handbook changes require updating references and mentions across multiple pages. In wikis and Google Docs, there is no easy way to propose a _group_ of changes to multiple sections or pages, which means people making and reviewing edits can easily miss other places that need to be updated. This format allows grouped multi-page changes and collaboration. This is more complicated than wikis or Google Docs, but we commit to help every teammate [learn how to edit this handbook](editing/index.md).
1. Many handbook changes are collaborative and need to be reviewed, revised, and commented on by other teammates. Git makes this possible, with comments and code reviews. Wikis don't make this easy or possible, and Google Docs has very limited review and no revision capabilities.

## Handbook support

### Slack

Contact @handbook-support in the #handbook channel for help with the Handbook. @handbook-support is a volunteer-based group of Sourcegraph teammates that are passionate about the Handbook and eager to help. Join the @handbook-support group in Slack if you're interested in helping in this capacity.

## Handbook feedback

We're constantly working to make the Handbook better. Is it easy to use? Do you find what you're looking for? Let us know [here](https://docs.google.com/forms/d/e/1FAIpQLSfb0yU9xmnvK2namuUzUEKbB9IqZlNQF2IWw0OpLsGvBiW2oQ/viewform?usp=sf_link).
