---
data_source: [/data/use_cases.yml, use cases]
---

# Incident response use case

This page provides a strategic introduction to one of our [company use cases](../index.md#use-cases). Check that link to find the rest of the use cases and learn how we use them as part of our company strategy.

## Overall vision

<!-- Convey what things will be like in the future for your use case, being as descriptive as you can to help someone understand where we are headed with our vision. -->

Sourcegraph provides a collaborative platform that helps devs understand why the problem is occurring and its potential impact on other services--which are crucial for resolving incidents caused by bad code changes in distributed systems. Sourcegraph helps assure incident responders that all holes are plugged, using insights and monitoring to provide confidence of resolution. While other tools only deal with runtime, not code, Sourcegraph helps devs identify the root cause in code and fix the issue **everywhere** so it won't reoccur.

## Why this is important

<!-- Beyond imagining a future in the above section, talk more about why this future is important and why we are going after it. -->

- In the DevOps model, which is widely accepted in the industry, devs are expected to be on-call and respond to incidents affecting the service they build (instead of handing off those responsibilities to a separate non-dev "Ops" team as was done pre-DevOps. They are responsible for mission-critical production services.
- Incident response often relies on heroic efforts by individual developers rallying around an incident. This is not scalable nor is it sustainable because team members can be unreachable at times and no one team member should be a single point of failure as can often happen
- Developers are lacking a single pane of glass to provide them with clarity and visibility that is universal, in a stressful situation where every minute matters
- To be successful, development teams need to stop the impact of the incident, but also analyze the root cause to ensure it does not repeat itself. This is a complex feat that demands time and effort

Sourcegraph is essential to how the Cloudflare security team addresses security risks and root-causes incidents. David Haynes, a Security Engineer at Cloudflare, says "When a potential security issue comes up, I often have to go into another engineer’s project to quickly understand how the code works to understand the critical functions, where the data is flowing, what sort of controls or checks are happening. With Sourcegraph, I can jump into another engineer’s project and quickly explore and better understand the code faster." Read more at this [Cloudflare case study](https://about.sourcegraph.com/case-studies/cloudflare-accelerates-debugging-and-improves-security/).

## How we solve this today

<!-- Describe in as much detail as you can how the product enables this use case today. You can include customer quotes, textual walkthroughs, and this is also a great place to link to demo videos. This is perhaps the most important single section in this document, so don't be afraid to add too much - if you feel this section is getting long, consider summarizing here and linking out to other pages in the handbook with details. -->

- Solving an incident is a collaborative effort that must be documented. Sourcegraph aids in these efforts by allowing users to share links to searches and files and by recording work done in a search notebook.
- IR efforts often require reports. This could include impacted files, repositories or other artifacts Sourcegraph helps generate.

## Who benefits

<!-- Link to the personas that relate to this use case, and describe briefly how it benefits each of them (the real detail is in the above section, so be sure not to repeat yourself here; speak in generalities for each persona in this section.) -->

[Developer](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_1_0):

- Get the incident fixed faster

[Engineering Leader](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_46)

- Meet the organization's SLOs; avoid negative business impacts from prolonged downtime; faster resolution time; fewer escalations.

## Features that enable this use case

{{generator:use_case_feature_list.incident_response}}

## Additional resources

<!-- Are there other articles, blogs, internal documents, or handbook links that are useful for someone who wants to understand this use case? Link to them here. -->

- [Marketing page for Incident Response use case](https://about.sourcegraph.com/use-cases/#resolve-incidents-faster)
- [Use case index](../index.md#use-cases)
- [Productboard incident response (internal only)](https://sourcegraph.productboard.com/feature-board/3957049-fy23-use-cases/features/11482291/detail)
- [Google SRE books](https://sre.google/books/)
- [Cloudflare case study](https://about.sourcegraph.com/case-studies/cloudflare-accelerates-debugging-and-improves-security/)
- [Related issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ause-case%2Fdev-onboarding+label%3Ause-case%2Fincident-response)
