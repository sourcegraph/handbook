# Visual design checklist

This checklist is intended to be suggestions and important considerations when finalizing a design artifact, rather than a prescriptive list of requirements.

This checklist ensures that our designs are consistent, accessible, and optimized for developer handoff.

## Visual design checklist

- Ensure spacing is consistent and matches the 8pt grid system
- Ensure text, colors and other styles match and use existing styles in Wildcard, if possible.
  - If adding new styles, ensure that they meet our [accessibility standards](https://handbook.sourcegraph.com/product/design/design-and-interaction-guidelines#accessibility-standards) and add them to Wildcard
- Review designs for accessibility:
  - Color blindness check
  - Contrast check should meet AA standard for small text
- Create dark mode compositions, if there are not existing dark mode designs in Wildcard
- Consider preparing redlines or an interaction delivery writeup for the following :
  - Margin and padding
  - Animation
  - Keyboard behavior
- Due to the low number of mobile and table visitors (< 3%) design comps for these sizes are generally not required
  - If responsive behavior is an important consideration to your designs, describe expected behavior of layout for tablet and mobile screensizes

## User experience considerations

Improvements to the Sourcegraph user experience should consider the following in every change:

- Light mode / Dark mode
- Enterprise / Cloud
- Signed in vs. anonymous user
- User permissions and security
- Interactive mode / plain text mode
- Has the change’s effect on the CLI been considered?
  - Does the language in the UI map to the language in the CLI?
  - Does the documentation reflect the change?
