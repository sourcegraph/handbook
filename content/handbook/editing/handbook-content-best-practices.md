# Handbook Content Best Practices

## Overview

This page is intended to give advice when you're making decisions about handbook content. These aren't mandatory and every case is slightly different, but following best practices will allow us to keep a more organized and easy-to-navigate handbook. TL;DR: our [content curators](#content-curators) are here to help if you're unsure where to add your content, or how to structure a page.

## Creating a new page vs adding to an existing page

There is no hard and fast rule on when to create a new page vs adding a new one. Some things to consider:

1. Does the content you're adding fit into the narrative of an existing page?
1. Can you add this to an existing page without making that page too long to consume?
1. Does the page feel like a "wall of text"?

In general, we want to avoid extremely long pages, and bias towards snackable content. They can become more cumbersome than helpful. This often happens when well-intended changes are made by continuously adding bits of content to existing pages, without stopping to think "Is it time to break this out into more than one page?". Doing so can be time consuming, but it will lead to more readable content throughout the handbook. The [content curators](#content-curators) can help with these types of decisions.

## Creating a new directory vs adding to an existing directory

Should I create a new directory (also called a folder) or add my new content to an existing one? The answer is: it depends. To help in making your decision, ask yourself this:

1. Does this content pair with or compliment existing content?

- **If yes**, it should go in the same directory as its companion content.
- **If no**, you may want to create a new directory. It's helpful to create a directory rather than just a single file in case you want to add more related files later. See [where should my content go](#where-should-my-content-go) for help with deciding where that new directory should go.

Reach out for (help)[#content-help] if you're unsure.

## Where should my file or directory go?

To determine where your content should go:

1. Consider the **primary** viewer. Since our handbook is public, anyone can read the content, but you probably have an intended audience in mind. If your content is a company-wide policy or process, it probably belongs in a directory holding company-wide content. If it's a policy or process only your team uses, it probably fits best in your team directory. -**Note:** If your primary viewer is a user of the Sourcegraph product, it should live in the [Sourcegraph Docs](https://docs.sourcegraph.com/).
1. Determine what type of content you are creating. Is it a process describing how we work? Is it a policy that must be followed? Look for a directory with similar types of content. Like content should live together.
1. [RFC 516](https://docs.google.com/document/d/1H2a7vNvQ61CNcsMp_H8kh4FhYGRFl-6OYJlUzevoG7U/edit#heading=h.trqab8y0kufp) details the handbook information architecture updated in December 2021. Do your best to fit your new page within this structure.

Reach out for [content help](#content-help) for help if you're unsure.

## Naming your page

When naming your markdown file, use hyphens rather than underscores in place of spaces. For example: `some-page-name.md` instead of `some_page_name.md`.

You can always change your page name later, so choose something that makes sense for now. If the content changes in the future, you can rename your page.

## Page structure and use of headings

We don't currently have page templates for most areas of the handbook.

In terms of structure, favor using headings to break up your page. This helps visually break up the page for the viewer, and assists in searchability of content. Headings are weighted heavier in handbook search results, so using a descriptive heading will likely help viewers get to your content more quickly.

## Content objectives

As stated in our [Handbook Usage](../index.md#handbook-usage) page, most content in this handbook is meant to help rather than being absolute rules (unless stated). If you're documenting a process or policy that _must_ be followed, indicate this at the top of your page.

## Deleting outdated content

Outdated or inaccurate content should be removed from the handbook whenever it's noticed. Keeping content that is no longer relevant leads to:

- **Confusion:** Which version of the content is correct?
- **Bloated handbook pages:** Long pages are hard to consume, and should only contain the necessary content.

When deleting content or a page that you don't normally maintain, it's best to double check with the content owners to be sure what you're deleting is no longer needed. To see who has contributed to a page, look for the "contributors" section on the right side of any handbook page and click on an avatar to see that person's GitHub profile:

![Handbook contributors](https://storage.googleapis.com/sourcegraph-assets/handbook/handbook-contributors.png)

## Content Help

Two [guiding principles](../index.md#guiding-princples) of the Handbook are that everyone can edit the Handbook, and that the Handbook is maintained by everyone. Sometimes, it can be difficult to know _where_ to put the content you're looking to add. Ask in the #discuss-handbook-help channel for help with things like:

1. Where should I put this new page or directory?
1. Should I create a new page for this content, or embed in an existing page?
