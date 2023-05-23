# Sourcegraph strategy

- [Mission](#mission) (long-term): Make it so everyone can code
- [Strategy](#strategy) (for FY24, this year): Win devs' hearts and minds by solving their [Big Code](#big-code) pains. Get paid by their companies for sustained, business-critical usage.

---

## Long-term

### Mission

**Make it so everyone codes.**

A world where everyone, not just ~0.1% of the world population, codes will see faster and more broadly beneficial technological progress.

But coding is already too complex for most people to start coding, and it's only getting worse as consumers demand more from software and code piles up. We're making it less complex. That will make more people able to code.

#### Background

For thousands of years after writing was invented, most people remained illiterate. Universal literacy seemed unlikely. Is it really possible that every human would be capable of reading and writing? How would literacy benefit the average person? As we now know, every human is capable of and benefits immensely from literacy.

More recently, around 1976, just 0.2% of the world's population used computers. Two tiny companies sought to make computing universal: Apple's vision then was to create a "bicycle for the mind" in the form of a computer, and Microsoft wanted to put a computer "on every desk and in every home". Though it seemed unlikely at the time, as we now know, everyone is capable of and benefits immensely from having a computer (or a phone).

Today, only about 0.1% of the world's population can code. That tiny group has built software that runs the modern world and improves the lives of billions of people. Think of the possibilities if everyone was able to code. All around the world, more people would be able to solve problems and improve their lives by building software. We don't know exactly what these billions of coders will create, but we know that billions of coders means faster and more broadly beneficial technological progress.

### Our product framework

#### Product Principles

The principles apply to our company and products:

- **Universal:** Across all code, all code hosts, and all tools that know things about code. Works with all LLMs. Unlike competitors, which only works with their vendor locked-in suite.
- **Scalable:** Proven to scale over 10+ years to the world's biggest codebases and companies.
- **Open:** At Sourcegraph, our code is public and we operate transparently. Sourcegraph is the open code AI platform, vs. competitors closed/faux-open platform.
- **Trustworthy:** We're trusted by the most discerning devs and companies (unlike startups), we won't compete with you (unlike Microsoft), and we won't retain your data (unlike Copilot). And you can trust Cody to not hallucinate or give unsafe answers (better than anything else).

#### Our products:

- **Cody:** The best AI coding assistant, which helps devs write features and fix bugs faster. In the future, we will segment out Cody’s functionality into more specific Packages tied to persona’s and will update this doc accordingly.
- **Code Search:** This is the current code search product that all our customers and users use. It's valuable and will remain so for a long time. We'll incrementally improve it with AI.
- There is no longer a product called "Sourcegraph". Sourcegraph is the company, which produces Cody and Code Search
- We're talking to customers to learn what new security, compliance, governance, legal, and safety problems will be created when they're heavily using AI coding tools—and how we can solve them with a new product here that is symbiotic with Cody demand and GTM motion.

#### The AI Platform

These products all rest on a single AI platform that is the foundation of our differentiation:

- **Code graph:** All your code and code hosts, comprehensive precise code nav, ownership, and all other code info from your tools. A huge differentiator in code search today that becomes more important when this is fed to an LLM. Replaces the term "code intelligence". (Also, to be clear, today Cody only uses a fraction of this information, but that will change soon.)
- **Tools:** The atomic capabilities of Cody and code search that make them more powerful than the competition: 'submit a PR', 'create a visualization', etc. These will be linked together in unique and creative ways to increase Cody's capabilities.
- **LLM (Large Language Model):** Almost everything in our products will become smarter and better by using a commodity LLM. We are not differentiated on the capability or quality of any foundation model, but we are differentiated in that Sourcegraph gives you the freedom to choose the best or preferred LLM for your needs, unlike Microsoft GitHub OpenAI, which locks you in.
- **Plugin & API:** Our AI platform will provide a standard interface to plug data such as JIRA tickets, documentation, etc and allow other tools to leverage our unique code graph, embeddings, and workflows.

#### How we package and ship these products

- **Cody App:** App will be the fastest way for individual developers to use Cody and Code Search on local code.
- **Sourcegraph Enterprise {Cloud, Server}:** A single instance with all of our products (Cody and code search), built for enterprises to deploy at scale.
- **Editor Extensions:** Historically, these have been add-on features to Sourcegraph enterprise. In the future, these will act as standalone ways to get access to Cody quickly. [Note: These are not yet fully standalone and more engineering work is required to achieve this vision]

#### FAQ

<dl>
  <dt>If we want to make it so more people can code, why are we focused on professional software developers instead of people learning to code on small projects?</dt>
  <dd>By starting where the complexity is greatest and the problem is biggest, we can create a solution that will scale up and down to all of coding in the future, rather than just make already relatively simple coding projects even simpler. This mission is on a timeframe of 30+ years, and we think starting here is how we will have the biggest impact in the very long term to make it so everyone can code.</dd>

  <dt>Will we be creating coding classes, new version control systems, new programming languages, etc.?</dt>
  <dd>No. We aren't so arrogant to think we know how to do that best for everyone and every problem. We want to create a code intelligence platform that lets you use the best tools for the job and that makes them all work together well, so that every dev can understand and write code better--and ultimately focus on the problem they're solving, not the millions of paper cuts along the way.</dd>
</dl>

### Values

Our [values](../../company-info-and-process/values/index.md) are the principles that help us execute on our strategy and build a high-performance team.

## This year (FY24)

**Win devs' hearts and minds** by solving their [Big Code](#big-code) pains. **Get paid by their companies** for sustained, business-critical usage. We will do this by...

- Launch Cody as the most enterprise focused coding assistant
- Build a differentiated AI platform to power Cody and Code Search
- Become more product-led
- Win in big companies with Big Code
- Prefer cloud over self-hosted
- Operate efficiently

Sourcegraph team members can view the internal [company framework](https://docs.google.com/document/d/127S8cGKrYi2g8CVjMO3fpT33Ld_ZpT7_1UgbAvlqGC0/edit?usp=sharing) and [Mission, Strategy, Execution, and Metrics doc](https://docs.google.com/document/d/1ZgGq3Ox1c1i_3z1z-zLANVDkj2iif_ZUPFq5NvZmAis/edit). These artifacts help our team gain internal alignment and influence how we build, market, and sell our products. We will move the content to the handbook soon.

### Big Code

Big Code is when you have to deal with tons of code, complexity, and devs. Sourcegraph solves Big Code problems: problems that devs and engineering teams face when working in big codebases. As consumers demand more from software and code piles up, more and more devs and engineering teams face Big Code problems.

From the [Big Code in the AI Era report](https://about.sourcegraph.com/blog/big-code-in-ai-era):

- **Big Code’s getting bigger.** 77% of devs say their codebase grew 5x over the past three years.
- **AI is taking software by storm.** 95% of devs report using AI tools to write code, and 76% say they are worried about being able to manage the new code AI will generate.
- **This is a “do or die” moment for companies.** 72% of devs say Big Code presents a real risk to their company’s ability to innovate and compete.

The kicker? Only 65% of devs say their company has a plan to address Big Code prior to the rise of AI.

### Market segmentation

We segment our customers into 5 tiers to help ensure we give the appropriate kind of support to each organization. Having a single market segmentation helps teams and processes across Sourcegraph stay consistent.

Our five customer tiers are:
| Customer tier | Tier criteria |
| ---------------- | ---------------------------------------------- |
| Strategic | 10k+ devs OR $1m+ ARR |
| Large Enterprise | 3k - 10k devs OR $500k - $1m ARR |
| Small Enterprise | 1.5k - 3k devs OR $100k - $500k ARR |
| Mid-Market | 500 - 1.5k devs AND less than $100k ARR |
| Tech Nurtured | Any customer below 500 estimated devs |
