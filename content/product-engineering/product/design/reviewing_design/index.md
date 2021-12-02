# Reviewing design

We [design in the open](../index.md#designing-in-the-open), which means that anyone can view [design artifacts](../artifacts/index.md) at any stage of the design process. We want to make an environment where we can work transparently while still having space and the physiological safety to explore ideas, make mistakes, and to create some absolute crap along the way.

To help us do this, we explicitly indicate the state of our design work and what kind of feedback we’re looking for (or not looking for). Sometimes, this state applies to the entire artifact (like the Figma file as a whole), and other times, we’ll use labels and other indicators to point out specific sections in an artifact. Some examples include:

- **Exploratory:** We’re experimenting and exploring with ideas. We’re not thinking about making our design artifacts easy for others to consume and understand, and we’re generally not seeking feedback. This is a lot like working locally on a branch on your own machine, or like a draft PR.
- **Feedback requested:** We’re specifically requesting feedback from others. We will likely have organized a specific section of the artifact to make it easy for others to review and understand asynchronously, where we’ve indicated specifically what kind of feedback we’re seeking. This is a lot like asking for feedback on a PR.
- **Source of truth:** When we reach the end of a [Discovery phase](../index.md#design-process) and agree as a project team what we’ll bring forward into [Delivery](../index.md#design-process), we’ll often create a source of truth in the design artifact to be used as a reference for implementation.

As a design team, it’s our responsibility [to communicate expectations clearly](../artifacts/index.md) and to make it easy for you to review design asynchronously.

As a teammate outside the design team, it’s your responsibility to understand [when and how your feedback will be most valuable](../../../../communication/seeking-and-giving-feedback.md#giving-feedback).

We have a [set of guidelines for how to seek and give great feedback](../../../../communication/seeking-and-giving-feedback.md).

## Reviews in Figma

To make reviewing designs easier, we use the following tools in Figma:

- [**Labels:**](https://www.figma.com/file/8qNcDzOXLj1hcOM76WDPN9/🛠Project-Tools?node-id=1502%3A6598) to indicate the state of specific design elements or views **design**: draft, ready for review, current (approved, ready for dev), deprecated (usually left there for historical context), conceptual (exploratory, an alternative solution) or **copy**: draft copy, current copy (approved, the most recent version). Note that these labels are to provide more granular context than the status of the design project/file as a whole.
- [**Helper cards:**](https://www.figma.com/file/8qNcDzOXLj1hcOM76WDPN9/🛠Project-Tools?node-id=2814%3A6218) to annotate the design and highlight important details. Types of cards: annotation (to provide additional context), todo, feedback requested (to give more context regardign what feedback designer is looking for) and metric collection (see [defining metrics](../metrics/defining-metrics.md)).
- [**Figma comments:**](https://help.figma.com/hc/en-us/articles/360041068574-Add-comments-to-files) for ongoing discussions with reviewers. You may find it easier to review and collaborate on copy longer than 1-2 lines (such as a complete modal) using a Google Doc instead of Figma comments.
