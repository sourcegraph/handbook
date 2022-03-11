# Product team onboarding

Welcome to Sourcegraph! As a member of the product team, it is your job to be the voice of the user, and to balance that with the goals of the company. For all [roles on the product team](../roles/index.md), you will have a very similar first week. Weeks 2–4 will vary depending on your role and areas of focus, but the high level goals for each week will be the same.

**[Onboarding buddy](../../../../company-info-and-process/onboarding/buddy-program.md)**: You will be paired up with an “onboarding buddy” in order to become better acquainted with Sourcegraph team and culture. A buddy will be your go-to person for questions (in addition to your manager and the People Ops team).

## Manager checklist

- Visit the [Onboarding process for Hiring Managers](../../../../company-info-and-process/onboarding/onboarding-for-hiring-managers.md) page to understand the workflow with People Ops.
- Create onboarding Google doc and copy in this page to customize week 2–4 tasks and have a personal checklist for the new teammate.
- Update onboarding doc Week 2–4 with initial projects.
- Notify People Ops on the tools needed by day one - [Tools for new teammates form](https://docs.google.com/forms/d/e/1FAIpQLSeQjfoLjAZUim7pVYw9joQCssXuVz2t2RlpjLadzmHrj15cwQ/viewform)
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
  - Invite to GitHub teams, including @sourcegraph/everyone
  - Figma
  - Productboard
  - Looker
  - Amplitude
<<<<<<< HEAD
=======
- Suggest product people the new teammate should create a 1:1 with
- Schedule check-ins for the first and second weeks at Sourcegraph to keep up with onboarding and to create space for answering any questions that might come up.
- Create a 1-1 doc and add initial discussion items. Some suggestions:
  - Onboarding doc - YAYYYYYYYYYY WELCOME!!!!! 🎉
    - Your onboarding doc is to help outline the projects and tasks you have over your first 30 days.
    - This 1-1 doc will be where we take notes on discussions, set goals, and make sure you’re on track.
  - 1-1 meetings - What format do you like? What is most helpful to you for these meetings?
  - How do you like to receive feedback?

## Week 1 - Getting started

Your objective is to get to know the team and learn as much about Sourcegraph (the company and product) as possible. It is your responsibility to be proactive in your onboarding, and it is the team's #1 priority to support you and help set you up for success. Everyone will drop what they're doing to help you. We are so excited to have you on the team and can't wait to get to know you better!

Remember:

- Sourcegraph is an [open company](../../../../company-info-and-process/about-sourcegraph/index.md#sourcegraph-open-product-open-company-open-source). Everything here at Sourcegraph is public unless there is a very good reason for it to be private.
  - One of our values is to be [open and transparent](../../../../company-info-and-process/values/index.md#open-and-transparent)
  - Good reasons for things to be private: sensitive customer information, sensitive personal information
  - If you see a "request permission" page for some doc or other resource, it is a mistake. Just ask to be granted access to it (and make a PR to update the handbook so the next person starting is granted access to that system).
- Unlike at many companies, it is OK (and important) to call out when we did something poorly or when something doesn't go well (e.g., a sales pitch falls flat). That helps us be real and do it better in the future.

### Day 1

- Complete [Process st onboarding](https://app.process.st/reports/)
  - Keep the [guiding principles](../../../../company-info-and-process/onboarding/index.md#guiding-principles) from the general onboarding page in mind - we are here to support you and you should act like an owner!
- Write your 30–60–90 day objectives in your 1:1 doc with your manager

### Get to know the team

- Schedule individual meetings with the [Product team](../team/index.md#current-team) members suggested by your manager
- Schedule individual meetings with each person on the engineering team you'll be working most closely with ( this will be in your specific onboarding docs)
- Get up to speed on what your team is working on
  - Team handbook page(s), to learn about the team and its internal processes
    - [Product](../index.md)
    - [Product management](../process/index.md)
    - [Product design](../design/index.md)
    - [Product process](../process/index.md)
  - [Sourcegraph user docs](https://docs.sourcegraph.com/)

### Set up the basics

- [Configure your GitHub notifications.](../../../../company-info-and-process/onboarding/git-intro/github-notifications/index.md)
  - Make sure that your Name is set to your First and Last name on GitHub so that other teammates can easily indentify you. Go to GitHub -> Your profile -> Edit profile -> Fill out the ‘Name field’ -> Save
- Familiarize yourself with our [team chat](../../../../company-info-and-process/communication/team_chat.md) and join team channels on Slack, as well as any other channels you find interesting. [Product team chat documentation](../../../../company-info-and-process/communication/team_chat.md#product).
- Set up your [local development environment](https://docs.sourcegraph.com/dev/setup). If you encounter any issues, ask for help in Slack and then update the documentation to reflect the resolution (so the next person that we hire doesn't run into the same problem).
  - You will need to run Sourcegraph locally to test and validate work that engineering is doing, to provide early feedback, or to review the UX of recently implemented work.
- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine). To search our private code, log in to our [internal dogfood instance](../../engineering/process/deployments/instances.md#k8s.sgdev.org) ([`k8s.sgdev.org`](https://k8s.sgdev.org)) and add another entry: `https://k8s.sgdev.org/search?q=%s`.
- Install a text editor of your choice. A lot of the team uses [Visual Studio Code](https://code.visualstudio.com/).

### Get to know the product

- Review [product resources](../index.md#references)
- Learn how the Customer Engineering team gives demos and talks about the product in the [product demo recording](https://drive.google.com/file/d/1idbCnce5MIvtAV0GOOwgB68zQJB2WmZ9/view).
- Read about [search queries](https://docs.sourcegraph.com/code_search) and perform your first searches.
- Work through the questions from the [Sales Onboarding Quiz](../../../sales/onboarding/quiz.md) to make sure you understand key concepts. Feel free to skip any obvious answers and discuss any questions you have or knowledge gaps with your manager.
- Record yourself completing the Sales [10 Step Demo Certification](https://docs.google.com/document/d/1P6nzAGfpTNysIi2FIcFY7mHX__q0qZ8955NDnWylF4I/edit#).
- [How to make configuration changes to sourcegraph.com](../../engineering/cloud/devops/update_sg_website_config.md)

### Get to know our customers

- Watch the [demo videos](../../../ce/onboarding/education.md#trainings-and-demos) & recent Chorus.AI recordings with customers
- Familiarize yourself with [customer feedback channels](../process/product_feedback_rotation.md):
  - [HubSpot](https://app.hubspot.com/forms/2762526/a86bbac5-576d-4ca0-86c1-0c60837c3eab/submissions) surveys
  - [Productboard](https://sourcegraph.productboard.com/insights/shared-inbox)
  - Twitter
  - Slack #feedback channel

### Know our tools

- ProductBoard
  - Watch [ProductBoard’s how-to videos](https://www.notion.so/Video-resources-64f81208b5dd4aaf89d3586a34223ec0) as an intro
  - Walk through ProductBoard with someone from the team
- Figma
  - Watch [Figma for Sourcegraphers part 1](https://drive.google.com/file/d/1zzUKDJN5XUwvKF8LfKZqQb7gK9NpK1Wx/view?usp=sharing) to learn how we use the application
  - Watch [Figma for Sourcegraphers part 2 (intro to the Wildcard Design System)](https://drive.google.com/file/d/1kfT3PVvTag_e0RXLAt6nndf6fS2n1Slv/view)
  - Read [Figma developers guide](https://www.smashingmagazine.com/2020/09/figma-developers-guide/)
- Looker
  - [How Sourcegraph uses Looker](../../../bizops/analytics/index.md#using-looker)
- UserTesting.com
  - Walk through UserTesting.com with one of the designers on the team

### Understand company and team goals

- [Sourcegraph values](../../../../company-info-and-process/values/index.md)
- [Sourcegraph strategy](../../../../strategy-goals/strategy/index.md)
- [OKR Tracker](https://docs.google.com/spreadsheets/d/1pNXVev2JtYC94lB1NIfsc8OqyYnnSFn7p5PYFcniblE/edit?ts=607a3f2e#gid=1699297878)

### Get ready to contribute to the docs

- Read the [content guidelines](../../../../company-info-and-process/communication/content_guidelines/index.md) for contributing to the handbook, product docs, and product copy
- Google Cloud Storage access: Ask in #product to be added to the `gcp-assets-users` group.
- **Screenshot/GIF making software**: See the [handbook](../../../marketing/process/adding_screenshots_screen_recording.md) for guidelines about software. Expense the program that works for you when you need it.
- [Product documentation guidelines](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/dev/documentation.md)
- [Docs to Markdown add-on for Google Docs](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607)

### Set up your design environment

If you are a designer on the team, use the following resources to get up to speed on design at Sourcegraph.

You'll find we have a strong base to work from, but we are in the early stages of creating our program. Your input will be critical to our success, so take notes about everything you experience while onboarding. We'll use them to help us improve our process and the product!

- Set up Figma
  - Download [Figma](https://www.figma.com)
  - (Optional) Set nudge to 8px in preferences > nudge amount
  - Install Figma plugins:
    - [A11y - Color Contrast Checker](https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker) - handy tool to check if your designs meet our [accessibility standards](../design/design-and-interaction-guidelines.md#accessibility-standards)
    - [Iconify](https://www.figma.com/community/plugin/735098390272716381/Iconify) - We use the material design icons which can be searched and included with this plugin
    - [Style organizer](https://www.figma.com/community/plugin/816627069580757929/Style-Organizer) - helps us manage color
    - [Data lab](https://www.figma.com/community/plugin/740286071386014712/Data-Lab) - populates layers with data. This helps us provide more accurate designs and avoid tedious text generation
    - [Data for design](https://drive.google.com/drive/folders/1UPxQ4Ln_JH7KNBVGP6ZepSK5WiGWfVDO)
    - [Lorem Ipsum](https://www.figma.com/community/plugin/736000994034548392/Lorem-ipsum) - simple text generator
    - Suggest plugins to help make us more efficient!
  - Install the font SF PRO, which can be found in the [drive type folder](https://drive.google.com/drive/folders/1X1hwQr4lGGVn5BDe4f09q_xRqboQZpsQ)
  - Review the [component library](https://www.figma.com/files/project/14326173/%F0%9F%93%9ADesign-system)
  - Review the [Project Tools](https://www.figma.com/file/8qNcDzOXLj1hcOM76WDPN9/Project-Tools?node-id=0%3A1)
  - Take a moment to add some inspiring design to the Figma [styleboards](https://www.figma.com/files/project/10712517/Styleboards)
- UserTesting.com
  - Get a tour of UserTesting.com from another designer on the team.
  - Review a few [usability studies](https://drive.google.com/drive/folders/1WcvPUtdVH2XE3Hak6tutoPWRCuEXPvCd) to get an idea of how you will use the product.
- As you learn the product, if you come across a quick win for better usability based on general heuristics, create a GitHub issue identifying the problem and proposing a quick solution, and tag it with 'UX'.
- Suggest a tool you love to the team in the #design channel on Slack!
- Storybook houses our React component library. We use [Chromatic](https://www.chromatic.com/library?appId=5f0f381c0e50750022dc6bf7) to easily access and collaborate on the components. You can access the React components library in two ways:
  1.  Log in to Chromatic with your GitHub account and open Sourcegraph library
  1.  from the root of your local development environment run storybook: `yarn storybook`.
- Explore and favorite the [Google Drive design folder](https://drive.google.com/drive/folders/1ow-19Yd4AFtT8HjVZ9ln_nEGpCzQ2CTf)
- Review the [Potential UX projects document](https://docs.google.com/document/d/1LemO13R3f0Ku88WK8tFr7_Qo4teDA0Bebs8Y2TGkS3U/edit)

## Week 2–3 - initial projects

- The goal is to give you a handful of projects that will help you familiarize yourself with the product, and get some quick wins in your first weeks.
- If you see something that you think would be a great project for you to tackle as you’re onboarding, let’s talk about it!
- We are excited to get you meatier projects, and also want to make sure you have adequate ramp-up time :)

## Week 4 - start a larger project

- Let’s talk about your strengths, interests, areas you’re excited about, as well as what will help drive the team and company goals!
  - Use this document to record issues you'd like to work on as you discover them during your onboarding
