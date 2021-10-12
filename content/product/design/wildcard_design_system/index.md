# Wildcard design system

We use [Wildcard](https://www.figma.com/file/NIsN34NH7lPu04olBzddTw/Wildcard-Design-System?node-id=891%3A0), Sourcegraph’s design system, to create visual design artifacts in Figma. Designers utilize components from Wildcard whenever possible to ensure consistent design across Sourcegraph and efficient development time.

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
