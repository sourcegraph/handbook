# Code Security tiger team strategy

The purpose of the Code Security [tiger team](https://en.wikipedia.org/wiki/Tiger_team) is to iterate quickly with customers over new user flows addressing the [Code security use case](../../use-cases/code-security.md) over FY23Q2.

#### Quicklink

- [Team page](../../../../departments/engineering/dev/code-graph/code-security-tiger-team/index.md)
- [OKR](https://docs.google.com/document/d/1wh8enIZs8mDEoBs_HiPP4v9SIF2gFuhtMFAhbROe2EI/edit#heading=h.tsga00gx9kb8) (private)
- [Weekly updates](https://github.com/sourcegraph/code-graph/issues/21)

Following early customer discovery, we are making a bet on software supply chain. We are iterating rapidly, so what follows may change as we learn. You can also read more in [PD 35 WIP - Dependency Graph for code security](https://docs.google.com/document/d/1Bq2SAx-FXxzW0YFbkIYoPS6bvy-LvlvZMyOTNUI1NV0/edit#heading=h.z5ozjpfzh2yl).

### Vision

Security scanners have a low signal to noise ratio. This means that security and development teams have to spend more and more time triaging and fixing vulnerabilities. This is made more difficult because there is a gap between security and development goals and workflows: security teams want to ensure compliance and reduce risks, while development teams have to make trade-offs between updating dependencies and delivering on other priorities.

In the future, we believe that:

- **Triaging vulnerabilities will be fast and transparent.** Security and development teams will be able to rapidly determine the impact of a dependency on a codebase, tracing it down to the actual function call, and understanding what deployable are impacted. They will use a common source of truth for reasoning about dependencies.
- **Remediation will be faster, safer, and transparent, even in big nested codebases.** When making remediation decisions, developers can understand the big picture, and take into account the impact of a fix on all the repositories and artifacts. Development teams will be able to determine the optimal sequence of build/publish/deploy actions to perform to universally upgrade safely in the shortest period of time.

Software Bill of Material products have initially focused on compliance. We think that there is an opportunity for Sourcegraph to realize the value of the SBOM by making dependencies easy to search, understand and fix.

#### Jobs to be done

We are currently **exploring and validating** the following Jobs To Be Done:

1. As a security engineer, determine if the codebase uses a given open source dependency reported in a CVE either as a direct or transitive dependency. Identify if the codebase actually **calls** a vulnerable function, not just imports a dependency.

- Determine what repositories use it, and trace down the line of code.
- Determine what application/service is impacted by that code, and if it is running in production.
- List out the most used functions from this package.

2. As a security engineer, determine the optimal sequence of build/publish/deploy required to remedy the dependency safely in the shortest amount of time, even when the dependency is very deep in the graph.

- Be able to query a dependency graph of what is running. From a [customer](https://airtable.com/appNsjegbsi2XumCg/tblBc12PKMuKuo40E/viw0rEcIMXmoAQVVF/recaGJm5nzt7bs9lB?blocks=hide):
  > “Ultimately, we want to know: If Log4Shell happened again, what is the optimal sequence of build/publish/deploy actions to perform to universally upgrade safely in the shortest period of time? Since log4j is included (very) indirectly for us, that involves a series of intermediate library publishes to do safely”

3. Then takes steps so that it gets fixed:

- Determine who owns this application/service/repository
- Flag it to the owning team and/or automate a fix.
- Keep a traceable record of the fix

4. Lastly, as a security engineer lead, produce an SBOM to send to customers or auditors for compliance purposes.

We are also looking at adjacent Jobs To Be Done:

5. As a security engineer, from a (library name/path) find all dependent repositories in the codebase that uses it and the most prevalent versions, in order to assess heterogeneity and work required to reduce version spread and improve security posture. This was validated by users at [#565](https://github.com/sourcegraph/accounts/issues/565) and [#544](https://github.com/sourcegraph/accounts/issues/544).

### Competitive positioning

We are currently analyzing our competitive positioning as well as identifying potential partners in [this document](https://docs.google.com/document/d/1FlKYLUuSNLp34yY3F3dNBPeC9icFaoD-pZOILGWrxEI/edit#) (private).

### Market updates

The software supply chain is currently top-of-mind for many customers and industry leaders. Attacks have been [increasing](https://thestack.technology/docker-software-bill-of-materials/?amp):

> Attacks on the software supply chain surged 650% in a year, according to a late 2021 eport by Sonatype that tracked 12,000 software supply chain attacks over the past year, compared to just 929 in 2019-2020.

and there was an executive order on [securing the software supply chain](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/02/24/executive-order-on-americas-supply-chains/). Recently, "White House officials, The Linux Foundation, OpenSSF and CISOs from 37 private sector companies announced a 10-point open source and software supply chain mobilisation plan and $150 million of funding over two year" ([article](https://thestack.technology/10-point-open-source-software-security-mobilization-plan/?amp=1))

### What's next

We are iterating on a way to navigate, visualise and search the depenency graph. We are currently iterating on dependency search and reverse dependency search. We think our two next iterations will be:

- Build a first version of reverse dependency search using precise code intel data for Java. That will immediately help users get precise answers to "what repository depends on `repo-x`? Is function `vulnerable` used in dependencies of `repo-x`?". It's also a building block for what's next.
- Provide a way for users to interactively navigate the dependency graph, one edge at a time. This will improve usability, and create a compelling demo flow.
