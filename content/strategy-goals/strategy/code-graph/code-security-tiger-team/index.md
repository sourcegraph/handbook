# Code Security tiger team strategy

The purpose of the Code Security [tiger team](https://en.wikipedia.org/wiki/Tiger_team) is to iterate quickly with customers over new user flows addressing the [Code security use case](../../use-cases/fixing-security-vulnerabilities.md) over FY23Q2.

Our strategy is work in progress, but we will focus heavily on running customer discovery in May.

#### What success means

We are in customer discovery phase, and will define a success metric later on. Our main business goals are:

- Close deals faster (with focused, quicker new business lands), and a reduced average sales cycle
- Attach to a compelling event
- Fill a meaningful gap in the current security tool landscape
- Create incremental and meaningful value for our customers
- Provide a new buyer to land with in target accounts

#### Plan

- [Our goal](https://docs.google.com/document/d/1wh8enIZs8mDEoBs_HiPP4v9SIF2gFuhtMFAhbROe2EI/edit#heading=h.tsga00gx9kb8) (private)
- [Planning document](https://docs.google.com/document/d/1LtdwXVKYTw5VhIdSul_-eLgm-PtM1EOKVMbpdAHFSmk/edit) (private)

### Customer discovery

We are currently running customer discovery to identify critical code security needs of our customers that Sourcegraph is uniquely positioned to solve.

- Read our [Customer research plan and interview guide](https://docs.google.com/document/d/13U8WvuDGHi9G3PJIDVJzge9rb-ApuA3PCiotAlshdCk/edit#) (private)
- View [insights collected from interviews](https://airtable.com/appNsjegbsi2XumCg/tblam1hdUFUSFLzyS/viwTBDtytBqAxoZ40?blocks=hide) (private)
- We are looking for insights! If there's someone we should be talking to, [submit them here](https://airtable.com/shrEbXnkA6pmkTJWL)
- Meanwhile, we keep track of [assumptions here](https://docs.google.com/document/d/1tnPDKvwbQr0yiu2fWRgsJ8H8gvkQ8erlIS17-_MyEIY/edit#)

Our first meaningful insight is about gaps in software supply chain, in particular how security users can answer the following problem statement:

> “If you learn that a code pattern in library x version y is vulnerable, how do you determine if you're actually exposed to it? How do you trace it down to the actual line of code?”
> Note that here, being exposed to a code pattern means _actually calling it_ and not just importing a dependency.

We are currently validating that need with customers, and iterating on the problem. You can read more in the [problem brief](https://docs.google.com/document/d/1vAmdh-N5QABXznKCq7wJr7vYB87FdwNEPDoug90r2Z8/edit#).

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
