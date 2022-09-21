---
data_source: [/data/use_cases.yml, use cases]
---

# Code security use case

This page provides a strategic introduction to one of our [company use cases](../index.md#use-cases). Check that link to find the rest of the use cases and learn how we use them as part of our company strategy.

## Sponsors

This use case has sponsors who [help maintain it](../working-with-use-cases.md). If you have questions or suggestions, you can reach out to them.

{{generator:use_case_sponsors.code_security}}

## Overall vision

<!-- Convey what things will be like in the future for your use case, being as descriptive as you can to help someone understand where we are headed with our vision. -->

Sourcegraph is THE **security** partner that CISOs and security teams use to assess, implement, and verify security patches across their code. They utilize Sourcegraph to derive insights around the vulnerability impact area and monitor dependencies. (Many other tools focus on alerting, but Sourcegraph is used to close the loop.)

## Why this is important

<!-- Beyond imagining a future in the above section, talk more about why this future is important and why we are going after it. -->

Understanding how to mitigate vulnerabilities in information systems is an intimidating challenge for development teams — especially when dealing with less-known weaknesses, unknown vulnerabilities that have not yet been exploited, and vulnerabilities whose manifestation in the codebase has yet to be determined. High-severity vulnerabilities now take nearly 250 days to remediate (Source: [Security Intelligence](https://securityintelligence.com/news/news-vulnerabilities-25-days-remediate/)) and this statistic is startling since, for critical security updates, every hour that goes by increases risk dramatically.

Existing tooling doesn’t enable teams to be agile and effective in their response to security vulnerabilities:

- Finding the vulnerabilities across scattered codebases takes expensive time and resources
- Making changes to many repositories requires spreadsheets and manual labor to track and manage pull requests to completion
- Internal library authors need to enable and sometimes force upgrades
- The process is cumbersome, unclear, and painful to all involved

The recent Log4j vulnerability is still having a massive impact on developers worldwide. It is a prime example of how challenging it is to create a cohesive response across multiple teams in an org. While Log4j was a widely recorded vulnerability with a lot of available remediation tactics, teams all around the world, in multi-million dollar infrastructure organizations, were left feeling lost and scrambling to implement a fix. Most organizations struggled with searching all of their codebase to determine where the vulnerability existed, how it was being used, and what impact it had on the other code. Even after learning that, they were not empowered to patch it in an effective, timely manner.

In April May FY2023, we ran a 2-month exploratory effort to identify the core painpoints of security teams and security leaders. We focused on the software supply chain. Here are the key findings:

- Supply chain attacks are increasing, as well as regulatory pressure on emitting a software bill of material (SBOM). It's likely that emitting an SBOM will rapidly be commoditized, however no player today is providing a complete solution to explore, visualise, and extract actionable insights from the SBOM.
- Code security scanners create a low signal to noise/ratio, increasing the load on security and development teams. This leads to alert fatigue, and sometimes to the erosion of trust between security and development teams.
- When analyzing the maturity of security teams, there are three main stages:
  - The most mature companies have automated processes, where 99% of issues are handed off directly to development teams, who then resolve it under a standard SLA. Internal tooling allows to track dependencies, priority, and SLAs to resolution. Security teams focus on supporting that process, tooling, and on the 1% most critical CVEs (eg.log4j). The next step for those teams is to rationalize tooling (including replacing internal tools by commercially supported tools), optimize triage and automate remediation (fixing simple, widespread issues without involving engineering).
  - The bulk of companies have scanners in place, but are struggling to handle the load of alerts. Their next step is to make triaging more efficient, and put in place workflows to more efficiently hand-off issues to engineering.
  - The late-adopters don't have scanners yet. Their next step is to get a scanner.

We developed a vision of how Sourcegraph could position itself in the software supply chain space, and accelerate triage and remediation. See [explore, understand & secure the software supply chain](https://docs.google.com/presentation/d/1_Cuu2wi9Zdq41PW97rbmlIruhQSY9t_1zOlOkI6A1Es/edit) (private) and [PD 35 WIP - Dependency Graph for code security](https://docs.google.com/document/d/1Bq2SAx-FXxzW0YFbkIYoPS6bvy-LvlvZMyOTNUI1NV0/edit#heading=h.z5ozjpfzh2yl).

Sourcegraph today is building two building blocks that will be key in achieving that vision:

- dependency search
- code ownership

As we iterate on these features, we need to keep code security users and the dependency graph vision in mind.

## How we solve this today

<!-- Describe in as much detail as you can how the product enables this use case today. You can include customer quotes, textual walkthroughs, and this is also a great place to link to demo videos. This is perhaps the most important single section in this document, so don't be afraid to add too much - if you feel this section is getting long, consider summarizing here and linking out to other pages in the handbook with details. -->

The following are real, anonymized quotes from customers today on how we’re already helping them with this use case:

- “Sourcegraph has also become essential to how the security team can quickly address security risks and root-cause incidents”.
- “When a potential security issue comes up, I often have to go into another engineer’s project to quickly understand how the code works to understand the critical functions, where the data is flowing, what sort of controls or checks are happening. With Sourcegraph, I can jump into another engineer’s project and quickly explore and better understand the code faster”
- Using Sourcegraph, the team is fixing vulnerabilities in hours (vs. weeks)
- Sourcegraph guided users through Log4j vulnerability remediation “I can’t imagine the pain of having to do this without Sourcegraph” more in this [blog post](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/)

## Who benefits

<!-- Link to the personas that relate to this use case, and describe briefly how it benefits each of them (the real detail is in the above section, so be sure not to repeat yourself here; speak in generalities for each persona in this section.) -->

[Developer](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_1_0):

- Find, fix, and track affected / vulnerable code

[Engineering Leader](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_46)

- Access Code Insights and set up Code Monitoring alerts to be notified when risky patterns, secrets, or other known vulnerabilities are introduced into the codebase

[Dev Productivity Lead](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_19)

- Increased productivity, lower time to remediation

## Features that enable this use case

{{generator:use_case_feature_list.code_security}}

## Additional resources

<!-- Are there other articles, blogs, internal documents, or handbook links that are useful for someone who wants to understand this use case? Link to them here. -->

- [Marketing page for Security Vulnerabilities use case](https://about.sourcegraph.com/use-cases/#find-and-fix-security-vulnerabilities)
- [Use case index](../index.md#use-cases)
- [Productboard Code security (internal only)](https://sourcegraph.productboard.com/feature-board/3957049-fy23-use-cases/features/11482297/detail)
- [Tackling Log4j with Sourcegraph](https://about.sourcegraph.com/blog/log4j-log4shell-0-day)
- [Cloudflare case study](https://about.sourcegraph.com/case-studies/cloudflare-accelerates-debugging-and-improves-security/)
- [Related issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ause-case%2Fdev-onboarding+label%3Ause-case%2Ffix-vulnerabilities)

### Log4j search notebook

As part of our log4j mitigation efforts, we used a Search Notebook to demonstrate how to use Sourcegraph to solve this use case. You can see that here.

{{notebook:Tm90ZWJvb2s6MQ==}}
