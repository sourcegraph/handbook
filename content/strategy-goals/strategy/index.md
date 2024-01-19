# Sourcegraph strategy

- [Mission](#mission) (long-term): Make it so everyone codes
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

Sourcegraph is a code AI platform.

#### Products

- **Cody:** Code AI that writes code and answers questions for you by reading your entire codebase and the code graph.
- **Code Search:** Code search, plus features such as batch changes, code insights, and code monitoring.

#### Concepts

- **Code graph:** All your code and any context (info about your code). Both Cody and Code Search use the code graph (in various ways). Today this includes repositories from code hosts, code ownership information, code navigation data, etc. In the future this will include information from issue tracking tools, observability tools, documentation, runtime, security tools, etc.
- **LLM (Large Language Model):** Our products use existing best-in-class foundation models and give you the freedom to choose the best or preferred LLM for your needs.

#### How we package and ship these products

- **Cody app:** The Cody app will be the fastest way for individual developers to get Cody's full power and accuracy on their private code.
- **Editor extensions**
- **Sourcegraph Enterprise {Cloud, Server}:** A single instance with all of our products (Cody and Code Search), built for enterprises to deploy at scale.

#### Principles

The principles apply to our company and products:

- **Universal:** Across all code, all code hosts, and all tools that know things about code. Works with all LLMs. Unlike competitors, which only works with their vendor locked-in suite.
- **Powerful and accurate**
- **Scalable and secure:** Proven on the world's biggest codebases and trusted by the world's most discerning companies.
- **Open:** At Sourcegraph, our code is public and we operate transparently. Sourcegraph is the open code AI platform, vs. competitors closed/faux-open platform.

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

- Build the code AI platform
- Become more product-led
- Win in big companies with Big Code
- Prefer cloud over self-hosted
- Operate efficiently

Sourcegraph team members can view the internal [company framework](https://docs.google.com/document/d/127S8cGKrYi2g8CVjMO3fpT33Ld_ZpT7_1UgbAvlqGC0/edit?usp=sharing) and [Mission, Strategy, Execution, and Metrics doc](https://docs.google.com/document/d/1ZgGq3Ox1c1i_3z1z-zLANVDkj2iif_ZUPFq5NvZmAis/edit). These artifacts help our team gain internal alignment and influence how we build, market, and sell our products. We will move the content to the handbook soon.

### [Big Code](https://sourcegraph.com/big-code/big-code-in-ai-era)

See "[Big Code in the AI era](https://sourcegraph.com/big-code/big-code-in-ai-era)".

### Market segmentation

Having a single market segmentation helps teams and processes across Sourcegraph stay consistent. Our market segments are determined by the total number of full-time engineers at a given company. We use the following definitions as a consistent and common language for referencing our target market internally. This data is based on LinkedIn Sales Insights data or data derived from the customer where appropriate.

| <div style="width:215px">Customer Segment</div> | Segment criteria |
| ----------------------------------------------- | ---------------- |
| Small-to-Medium Biz (SMB)                       | 0 - 99 devs      |
| Mid-Market (MM)                                 | 100 - 500 devs   |
| Enterprise                                      | 501 - 2,500 devs |
| Strategic                                       | 2,501+ devs      |
