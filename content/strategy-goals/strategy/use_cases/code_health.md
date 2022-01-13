# Code Health use case

This page provides a strategic introduction to one of our [company use cases](../index.md#use-cases). Check that link to find the rest of the use cases and learn how we use them as part of our company strategy.

## Overall vision

<!-- Convey what things will be like in the future for your use case, being as descriptive as you can to help someone understand where we are headed with our vision. -->

Our vision for this use case is that Sourcegraph provides a dashboard source of truth for overall code structure and health. It makes visible the impact of changes on health, and provides interventions for improving code health. We envision this covering rigorous, explicitly measurable aspects of code health such as scorecards and checklists (for example, https://www.cortex.io/products/scorecard and https://www.opslevel.com/checks/ but for code), compliance scoring, and measurable, actionable tech debt. We can also extend this analysis to the dependencies in your software supply chain.

Note that more abstract notions of health such as general tech debt, subjective outcome surveys, or team happiness/health are not what we are focusing on.

## Why this is important

<!-- Beyond imagining a future in the above section, talk more about why this future is important and why we are going after it. -->

[Originating in Google](https://testing.googleblog.com/2017/04/code-health-googles-internal-code.html), Code Health is defined as “…how software was written that could influence the readability, maintainability, stability, or simplicity of code“, with the idea being that a developer’s quality of work, productivity, and happiness can be improved if the code they work with is healthy. While in most companies there are no dedicated developers working on code health as their job title, code health initiatives can improve the lives of engineers and their ability to write products with shorter iteration time, decreased development effort, greater stability, and improved performance, which all lead to business upside.

Tech debt is one component in code health that plays a big role in developer experience and productivity, and refers to the cost of refactoring or redesigning code tomorrow because of short-cuts taken today. [Stripe found](https://stripe.com/files/reports/the-developer-coefficient.pdf) that developers spend 33% of their time on tech debt; maintenance of legacy systems and tech debt being the number one cause for productivity loss. For a 50-person engineering team of $100k/year developers, that 33% respresents $1.65M/year. Beyond the monetary implications, organizations bogged down with it often suffer from low morale and churn.

## How we solve this today

<!-- Describe in as much detail as you can how the product enables this use case today. You can include customer quotes, textual walkthroughs, and this is also a great place to link to demo videos. This is perhaps the most important single section in this document, so don't be afraid to add too much - if you feel this section is getting long, consider summarizing here and linking out to other pages in the handbook with details. -->

The following are real, anonymized quotes from customers today on how we're already helping them with this use case:

- With Sourcegraph, our developers removed or modified deprecated systems, eliminating huge amounts of tech debt. This benefited all areas of the architecture, including not only application code, but also build, deployment, logging, and monitoring systems—any tool that supported the deployment and uptime of the application.
- Sourcegraph helps us with technical debt reduction and the consolidation of our codebase by letting us avoid duplication, spot the usage of deprecated APIs or internal (non-API) library code, and identify general purpose code in specific projects (such as utility classes) that can be factored out and shared in a core library.
- With the help of Sourcegraph, we were able to quickly look at all clients of an API and remove unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding up developer iteration time.
- Our teams are constantly innovating and building new systems, necessitating decomposing and migrating off of older ones. Sourcegraph gives us the ability to search for and refactor references to deprecated services, libraries, URL patterns, and more across our 2000+ repositories, and the confidence that we're not leaving anyone behind.

## Who benefits

<!-- Link to the personas that relate to this use case, and describe how it benefits each of them -->

[Developer](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_1_0):

- Healthy code, happy you

[Engineering Leader](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_46)

- Hire your teams, and keep them

[Dev Productivity Lead](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_19)

- Tie to higher retainment of engineers when they work in healthy code environments
- Increased productivity, quicker builds

## Additional resources

<!-- Are there other articles, blogs, internal documents, or handbook links that are useful for someone who wants to understand this use case? Link to them here. -->

- [Use case index](../index.md#use-cases)
- [Code Health unpacked](https://diff.wikimedia.org/2017/10/11/mediawiki-code-health-group/)
- [Technical debt value case (internal only)](https://docs.google.com/document/d/1SwEvwqUuaX66T7RN_wPp7BMi95O3CcTHVqxkPQMF4Cg/edit)
