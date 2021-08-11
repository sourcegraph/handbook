# Visual design

(Update coming soon!)

- Visual design should utilize the Sourcegraph’s Figma based component system
- Dark compositions will be created for each major design
- If new components are required, the following process should be followed:
    - Design component in the Figma file which requires it
        - If creating a component make sure it is prefaced by '_' so that it is not used while in review
    - Create a proposal frame with the following items:
        - Proposal name and description
        - If changing a component, provide an example screenshot of the existing component
        - Link to a Sourcegraph search showing affected areas of the product
        - Screenshots of current product usage
        - A design that represents the suggested change
        - A clear verbal discrpiption of the suggested changes
    - @ mention a frontend engineer requesting an addition or change to the component system
        - Engineering will approve, requests changes, or request that the designer uses an existing component
    - @ mention a designer and request a review
    - Create a GitHub issue for the component
    - When the GitHub issue is complete:
        - Remove the '_' from the component name
        - Add the component to the Figma component system
        - Publish changes with a fitting commit message


- Improvements to the Sourcegraph user experience should consider the following in every change:
    - Has the change’s effect on the CLI been considered?
    - Does the language in the UI map to the language in the CLI?
    - Does the documentation reflect the change?
    - Light mode / Dark mode
    - Enterprise / Cloud
    - Signed in vs. anonymous user
    - User permissions
    - Interactive mode / plain text mode
- Process
    - A GitHub issue should be created to track the work
    - Designs are produced in Figma
    - Designs will be announced in Slack and linked in the GitHub issue well before they are complete for review
    - Ensure designs meet the visual design checklist:
    - Ensure spacing is consistent and matches the 8pt grid system
    - Ensure text, colors and other styles match existing styles, if possible.
        - Introduce new text styles only if really necessary.
        - If adding new styles, ensure that they meet our [accessibility standards](../design-and-interaction-guidelines.md#accessibility-standards) and add them to the design system.
    - Review designs for accessibility:
        - Color blind check
        - Contrast check should meet AA standard for small text
    - Schedule and conduct a design presentation meeting if the size of the project requires
    - Receive signoff from stakeholders
    - If components were created in the visual design process, when the designs are signed off on, those components will be moved to the Sourcegraph component system
    - Prepare redlines or an interaction delivery writeup for the engineers. Consider the following:
        - Margin and padding
        - Animation
        - Links and hover states
    - Describe expected behavior of layout for tablet and moble screensizes
    - Due to the low number of mobile and table visitors (< 3%) design comps for these sizes are generally not required
    - Schedule a meeting with engineers to discuss the interaction
- Tools
    - Figma
