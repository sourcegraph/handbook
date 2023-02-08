# Using components

In Figma, components are reusable items like icons, navigation, and inputs that are shared across a team. You can read more about Figma components in [Figma's documentation.](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-Components-in-Figma). React, which our frontend is written in, also has a concept of components.

## Adding a component

When a new component is required, the designer who discovered the gap is responsible for expanding Wildcard with the following process:

- Create component in the Figma file that requires the new component. Preface the name of the component with '\_' so that it is not used while in review
- Create a proposal frame with the following items:
  - Proposal name and description
  - Link to a Sourcegraph search showing affected areas of the product
  - Screenshots of current product usage
  - A design that represents the new component
  - A clear verbal description of why a new component is needed
- @ mention a frontend engineer in the Figma file to request the addition to the component system. Engineering will approve, requests changes, or request that the designer uses an existing component
- @ mention a designer and request a review
- Create a GitHub issue for the component. Designers should use the GitHub issue template, labeled "Propose a new Wildcard component".
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
- Create a GitHub issue for the component. Designers should use the GitHub issue template, labeled "Propose a new Wildcard component".
- When the GitHub issue is complete:
  - Remove the '\_' from the component name
  - Modify the main instance of the component in Wildcard
  - Publish changes with a fitting commit message
  - Add to the "Changelog" layer in the Wildcard Figma file

## Adding a new icon

- In Figma, icons are stored in the Wildcard file, on the Base page, in a frame called Icons ([direct link to frame](https://www.figma.com/file/NIsN34NH7lPu04olBzddTw/Wildcard-Design-System?node-id=1366%3A611))
- All of our icons come from Material Design Icons. Note that there are more icons on that site than what’s contained in the original Google Material Design icon spec.
- In order to add a new icon to Figma, you’ll first need to download the SVG from the [Material Design Icons website](https://materialdesignicons.com/).
- Insert the SVG file into the Figma frame. You can drag it from your downloads/desktop, or use Place Image (nested under the rectangle icon, or <kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>K</kbd>)
- Click the chain icon for “constrain proportions” on both the frame and the vector layer.
  - The icons on the Material Design Icons website default to 24px by 24px, but our icons are 16px by 16px. Constraining the proportions on both levels will ensure resizing without warping the dimensions.
- Change the dimensions of the frame to 16px by 16px.
- Change the fill color of the vector to `Semantic/icon-color/light`.
- Optional: Rename the icon to include the prefix “icon-” and remove any trailing numbers. This will make the icon easier to find in the Figma component search.
- Click on the “Create component” button or use the keyboard shortcut to make a component of your new icon.
- Publish your changes by going to the Assets tab, clicking on the team library icon, then “Publish changes.”
  - You may need to unselect pending changes made by other people!
- Add a commit message with your initials. These messages appear in the updates that are pushed to every Figma file, and let people know what changes and updates they’re accepting.
