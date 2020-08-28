# Product team onboarding

Welcome to Sourcegraph! As a member of the product team, it is your job to be the voice of the user, and to balance that with the goals of the company.

## Manager checklist

- Grant access to necessary services.
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
  - Invite to GitHub teams, including [@sourcegraph/everyone](https://github.com/orgs/sourcegraph/teams/everyone)
  - Figma
  - Productboard
  - UserTesting.com
- Schedule a recurring [1-1](../../leadership/1-1.md).
- Schedule daily check-ins for the first week at Sourcegraph to keep up with your onboarding and to create space for answering any questions that might come up.

## Product team member checklist

- Get to know our team and learn about Sourcegraph (company and product)
- Finish [general onboarding tasks](../../people-ops/onboarding/index.md#for-all-new-teammates)
  - Set up your email filters, especially for GitHub and feedback
- Get to know the product
  - Complete the "Getting set up" section of the [Engineering onboarding tasks](../../engineering/onboarding/index.md#getting-set-up).
    - You will need to run Sourcegraph locally to test/validate work that engineering is doing, to provide early/often feedback.
  - Review [product resources](../index.md#resources)
  - [Products](https://about.sourcegraph.com/product)
  - Learn how the Customer Engineering team gives demos and talks about the product in the [product demo recording](https://drive.google.com/file/d/1idbCnce5MIvtAV0GOOwgB68zQJB2WmZ9/view).
  - Read about [search queries](https://docs.sourcegraph.com/user/search) and perform your first searches.
  - Work through the questions from the [Sales Onboarding Quiz](../../sales/onboarding/quiz.md) to make sure you understand key concepts. Feel free to skip any obvious answers and discuss any questions you have or knowledge gaps with your manager.
- Get to know our customers
  - Reach out to the Sales/CE teams and ask to be added to as many customer calls as you can this week.
  - Feedback
    - [HubSpot](https://app.hubspot.com/forms/2762526/a86bbac5-576d-4ca0-86c1-0c60837c3eab/submissions)
    - [Productboard](https://sourcegraph.productboard.com/insights/shared-inbox)
- Understand our goals
  - [Sourcegraph master plan](../../../company/strategy.md)
  - [Sourcegraph direction (1 year plan)](../../../direction/index.md)
  - [Goals](../../../company/goals/index.md)

## Product designer onboarding

After completing the product team checklist above, use the following resources to get up to speed on design at Sourcegraph.

You'll find we have a strong base to work from, but we are in the early stages of creating our program. Your input will be critical to our success, so take notes about everything you experience while onboarding. We'll use them to help us improve our process and the product!

- Tools
  - Figma
    - Download [Figma](https://www.figma.com)
    - Set nudge to 8px in preferences > nudge amount
    - Install Figma plugins:
       - [Data lab](https://www.figma.com/community/plugin/740286071386014712/Data-Lab) - populates layers with data. This helps us provide more accurate designs and avoid tedious text generation
       - [Data for design](https://drive.google.com/drive/folders/1Xw7t1rIWRTg3cJ1_v-A40FGKCLE9m9Pg?usp=sharing)
       - [Lorem Ipsum](https://www.figma.com/community/plugin/736000994034548392/Lorem-ipsum) - simple text generator
       - [A11y - Color Contrast Checker](https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker) - handy tool to check if your designs meet accessibility standards
       - [Iconify](https://www.figma.com/community/plugin/735098390272716381/Iconify) - We use the matrial design icons which can be searched and included with this plugin
       - Suggest plugins to help make us more efficent!
     - Install the font SF PRO, which can be found in the [drive type folder](https://drive.google.com/drive/folders/15NibaPYH4F0L_isvKHsYTFpwquv6DnRs)
     - Review the [component library](https://www.figma.com/file/BkY8Ak997QauG0Iu2EqArv/Sourcegraph-Components?node-id=0%3A1&viewport=4848%2C895%2C0.5811631679534912)
     - Review the [style guide](https://www.figma.com/file/Y4JDvoFnCmY1JIQIWdiOJh/styleguide__components?node-id=0%3A1&viewport=153%2C791%2C0.0701417475938797) which we are transitioning to the component library
    - Review the [Project Tools](https://www.figma.com/file/8qNcDzOXLj1hcOM76WDPN9/Project-Tools?node-id=0%3A1)
    - Take a moment to add some inspiring design to a Figma styleboard
   - UserTesting.com
     - Get a tour of UserTesting.com
      - Review a few [usability studies](https://drive.google.com/drive/folders/1qZEWiKSXIvtF8oEp5jGeUQdFcjd2KtVy?usp=sharing) to get an idea of how you will use the product
      - As you learn the product, create a GitHub issue proposiing a usability study you would like to conduct and tag it with 'UX'
    - Suggest a tool you love on Slack in #design!
- Set up your [local development environment](https://github.com/sourcegraph/sourcegraph/blob/master/doc/dev/local_development.md#step-1-install-dependencies)
  - You'll use this environment to review the UX of builds and to gain access to unreleased features 
  - Storybook houses our React component library
    - From the root of your local environment run storybook: `yarn storybook` to see how our designs transformed into React components
- Explore and favorite the [Google Drive design folder](https://drive.google.com/drive/folders/1xBRaw_2Ulccd_2ts0Wcq4Rgs6LuVblLU?usp=sharing)
- Review the [Potential UX projects document](https://docs.google.com/document/d/1LemO13R3f0Ku88WK8tFr7_Qo4teDA0Bebs8Y2TGkS3U/edit)
  - Use this document to record issues you'd like to work on as you discover them during your onboarding
