# Product designer onboarding

Welcome to the Design Team!

Having gone though [the Process St onboarding](https://app.process.st/reports/) and [product onboarding](../../onboarding/index.md), it's time for the design onboarding!

Your perspective as both a new user of Sourcegraph and a new teammate is very valuable to us. Please keep notes on any issues you encounter as you are onboarding and learning the product. We’ll use those notes to improve the product and process.

## Manager checklist

- Complete the [product team manager checklist](../../onboarding/index.md#manager-checklist)
- Add the designer to these team meetings:
  - Design sync meeting (both meetings!)
  - Design retro meeting (first Wednesday of the month)
  - Add the designer to the relevant meetings for their team (if not handled by email groups)
- Notify people ops to include the new designer to the following:
  - GitHub groups:
    - @sourcegraph/design
  - Google groups:
    - product-design@sourcegraph.com
  - Slack groups:
    - @design-team
    - @product-team
    - Their product team's groups
- In their 1-1 doc introduce the designer to a few Figma files that are relevant to their team

## Designer checklist

- Join the design-related Slack channels:
  - design
  - product-design-internal
  - accessibility
  - analytics-review
  - wildcard-components-library-wcl
  - hallway-testing
- Add yourself as a designer to the handbook pages of the teams you're working with. You can also add those teams to your Slack profile description, for ex. 'Product Designer (Code Insights)'
- Get familiar with the products that we use as inspirations for reference in the developer tools industry:
  - code hosts: [GitHub](https://github.com/) and [GitLab](https://gitlab.com/)
  - code editors: [VS Code](https://code.visualstudio.com/) (and other IDEs like [IntelliJ](https://www.jetbrains.com/idea/) and [Atom](https://atom.io/))
  - similar products: [grepp.app](https://grep.app/) and [cs.opensource.google](https://cs.opensource.google)
- Read the [Product Design team handbook](../index.md), especially:
  - [User research](../research/)
  - [Analytics and product design](../metrics/)
  - [Wildcard design system](../wildcard_design_system/)

### Set up your design environment

Use the following resources to get up to speed on design at Sourcegraph.

You'll find we have a strong base to work from, but we are in the early stages of creating our program. Your input will be critical to our success, so take notes about everything you experience while onboarding. We'll use them to help us improve our process and the product!

- Set up Figma
  - Download [Figma](https://www.figma.com)
  - (Optional) Set nudge to 8px in preferences > nudge amount
  - Install Figma plugins:
    - [A11y - Color Contrast Checker](https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker) - handy tool to check if your designs meet our [accessibility standards](../../design/design-and-interaction-guidelines.md#accessibility-standards)
    - [Iconify](https://www.figma.com/community/plugin/735098390272716381/Iconify) - We use the material design icons which can be searched and included with this plugin
    - [Style organizer](https://www.figma.com/community/plugin/816627069580757929/Style-Organizer) - helps us manage color
  - Other helpful plugins:
    - [Data lab](https://www.figma.com/community/plugin/740286071386014712/Data-Lab) - populates layers with data. This helps us provide more accurate designs and avoid tedious text generation
    - [Data for design](https://drive.google.com/drive/folders/1UPxQ4Ln_JH7KNBVGP6ZepSK5WiGWfVDO)
    - [Lorem Ipsum](https://www.figma.com/community/plugin/736000994034548392/Lorem-ipsum) - simple text generator
    - Suggest plugins to help make us more efficient!
  - Install the font SF PRO, which can be found in the [drive type folder](https://drive.google.com/drive/folders/1X1hwQr4lGGVn5BDe4f09q_xRqboQZpsQ)
- UserTesting.com
  - Review a few [usability studies](https://drive.google.com/drive/folders/1WcvPUtdVH2XE3Hak6tutoPWRCuEXPvCd) to get an idea of some of our early research efforts.
- As you learn the product, if you come across a quick win for better usability, create a GitHub issue identifying the problem and proposing a quick solution, and tag it with 'design'.
- Suggest a tool you love to the team in the #design channel on Slack!
- Storybook houses our React component library. We use [Chromatic](https://www.chromatic.com/library?appId=5f0f381c0e50750022dc6bf7) to easily access and collaborate on the components. You can access the React components library in two ways:
  - Log in to Chromatic with your GitHub account and open Sourcegraph library
  - From the root of your local development environment run storybook: `yarn storybook`.
- Explore and favorite the [Google Drive design folder](https://drive.google.com/drive/folders/1ow-19Yd4AFtT8HjVZ9ln_nEGpCzQ2CTf)

## Creating your first Figma project

- Consider using the [Project Template](https://www.figma.com/file/JzufQnpTQtreyfnA3qpmfz/Project-Template?node-id=246%3A11) (read more in [Documents and Templates](../documents_templates/index.md))
  - This template doesn't fit all working styles or projects. If it doesn't work for you, consider try to standardize on the following conventions:
    - Name pages consistently, use emojis to help indicate purpose
    - Use a cover page and cover component to help with readibly
    - Use an About section to help others know what the file/page/section does
