# Wildcard design system

We use [Wildcard](https://www.figma.com/file/NIsN34NH7lPu04olBzddTw/Wildcard-Design-System?node-id=891%3A0), Sourcegraph’s design system, to create visual design artifacts in Figma. Designers utilize components from Wildcard whenever possible to ensure consistent design across Sourcegraph and efficient development time. We also use [Chromatic](https://www.chromatic.com/library?appId=5f0f381c0e50750022dc6bf7) to manage our storybook.

## Libraries

The [Wildcard Design System](https://www.figma.com/file/NIsN34NH7lPu04olBzddTw/Wildcard-Design-System?node-id=891%3A0) is the primary library to use in order to have access to all of our components and styles. The [Helpers and Tooling](https://www.figma.com/file/8qNcDzOXLj1hcOM76WDPN9/%F0%9F%9B%A0Project-Tools?node-id=72%3A20) also contains useful components like redlines and annotation.

## Basic Tokens

Text:

- We use SF Pro for all text. [Download SF Pro](https://drive.google.com/drive/folders/1X1hwQr4lGGVn5BDe4f09q_xRqboQZpsQ) and install it on your system.
  - You may also need the [Figma font installer](https://www.figma.com/downloads/) if you use Figma in the browser instead of on desktop.
- All text styles are available through Wildcard text styles.
- The style definitions for our text styles are in the [Sticker Sheet](https://www.figma.com/file/NIsN34NH7lPu04olBzddTw/Wildcard-Design-System?node-id=908%3A0).

Colors:

- There are four groups of colors used in Wildcard: Root, Semantic, Brand, and Open Color (OC).
- Of these groups, the Semantic colors are the ones to be used in day-to-day design work.
- The style defitions for the Root and Semantic color styles are in the [Sticker Sheet](https://www.figma.com/file/NIsN34NH7lPu04olBzddTw/Wildcard-Design-System?node-id=908%3A0). The Open Color definitions are in the Colors page.

Space:

- Sourcegraph uses an 8-point grid.

## Adding a component

When a new component is required, the designer who uncovered the gap is responsible for expanding Wildcard with the following process:

- Create component in the Figma file that requires the new component. Preface the name of the component with '\_' so that it is not used while in review
- Create a proposal frame with the following items:
  - Proposal name and description
  - Link to a Sourcegraph search showing affected areas of the product
  - Screenshots of current product usage
  - A design that represents the new component
  - A clear verbal description of why a new component is needed
- @ mention a frontend engineer in the Figma file to request the addition to the component system. Engineering will approve, requests changes, or request that the designer uses an existing component
- @ mention a designer and request a review
- Create a GitHub issue for the component. Designers should use the Github issue template, labeled "Propose a new Wildcard component".
- When the GitHub issue is complete:
  - Remove the '\_' from the component name
  - Add the component to the Figma component system
  - Publish changes with a fitting commit message
  - Add to the "Changelog" layer in the Wildcard Figma file

## Modifying an existing component

When a change to an existing component is required, the designer who is proposing the change should follow the following process:

- Modfiy the component in the Figmal file that requires the changed component by detaching it from the main instance.
- Create a proposal frame with the following items:
  - Proposal name and description
  - Provide an example screenshot of the existing component
  - Link to a Sourcegraph search showing affected areas of the product
  - Screenshots of current product usage
  - A design that represents the suggested change
  - A clear verbal description of the suggested changes
- @ mention a frontend engineer in the Figma file to request a change to an existing component. Engineering will approve, requests changes, or request that the designer uses an existing component
- @ mention a designer and request a review
- Create a GitHub issue for the component. Designers should use the Github issue template, labeled "Propose a new Wildcard component".
- When the GitHub issue is complete:
  - Remove the '\_' from the component name
  - Modify the main instance of the component in Wildcard
  - Publish changes with a fitting commit message
  - Add to the "Changelog" layer in the Wildcard Figma file

## User interface patterns

This section will detail user interface patterns not defined in the Wildcard Design System.

### Getting started pages

Getting started pages are presented to viewers of major Sourcegraph feature pages when they have not seen the page or when there is no content for the section. For un-authenticated users, the page serves as an overview and prompts the user login or sign up. For authenticated users, the page serves the same purpose and also provides helpful links to start using the feature.

The following rules should be applied when selecting the page to display to users:

- If the user has not seen the feature, the feature should display the getting started page
- If the user has not seen the feature but there is content available in this section, a modified getting started page should be displayed
- If the user has seen the feature and there is content in the section, the page should display the index of feature content
- If the user has seen the feature and there is no content in the section, the getting started page will display
- If the feature is not available in the instance, it will display for all users at all times
- The feature home page and the getting started view should have the same URL. For example, both the batch changes list and the batch changes getting started page are available at `/batch-changes`. Clicking the tabs at the top switches between the standard home page and the getting started page without modifying the URL.
