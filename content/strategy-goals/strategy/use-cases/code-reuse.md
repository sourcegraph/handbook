---
data_source: [/data/use_cases.yml, use cases]
---

# Code Reuse use case

This page provides a strategic introduction to one of our [company use cases](../index.md#use-cases). Check that link to find the rest of the use cases and learn how we use them as part of our company strategy.

## Overall vision

<!-- Convey what things will be like in the future for your use case, being as descriptive as you can to help someone understand where we are headed with our vision. -->

Sourcegraph is the way that devs discover libraries and learn how to reuse them. It's also how library maintainers monitor and understand usage. Every dev and eng leader wants more and better code reuse, but it's not something you can mandate or just decide to start doing—it's an extremely complex and knowledge-intensive phenomenon that involves every member of the eng team and requires the following 5 processes to work extremely well:

- How developers discover existing code libraries that they can use
- How developers evaluate whether the code libraries are high quality and appropriate for their needs
- How developers decide when a new library needs to be created for a given purpose
- How library maintainers can understand where and how their library is being used, and evolve or fix the library and everywhere it's used
- How engineering leadership allocates investments in library development vs. application teams

[Innersourcing](https://en.wikipedia.org/wiki/Inner_source) (see also [GitLab's definition](https://about.gitlab.com/topics/version-control/what-is-innersource)) is necessary but not sufficient for code reuse. In order to reuse code, you need to be able to view the code. But you can't stop there. Just making it visible doesn't mean it's easy to discover code to reuse, evaluate it, and so on. Any organization that embarked on an innersourcing journey intending to improve code reuse needs to follow through (see the "Our model" section for what's needed).

Note that "Code reuse" as we use it always refers to code library reuse, not to copy-paste reuse. Also, the terms "library" and "API" have a nuanced relationship—in the context of this use case, they are roughly interchangeable.

## Why this is important

<!-- Beyond imagining a future in the above section, talk more about why this future is important and why we are going after it. -->

Code reuse is the practice of using existing code libraries and APIs when developing new software instead of "reinventing the wheel". This saves time, improves quality, and simplifies maintenance. Sourcegraph helps developers discover and evaluate libraries and APIs that they can use (either inside their own organization or in the open-source), and it helps library owners create and maintain better libraries that other developers can more easily use.

A [code library](<https://en.wikipedia.org/wiki/Library_(computing)>) is a package of related code intended for a certain purpose. For example, someone might create a library to compute the number of days between any 2 dates. Any application that needed such functionality (such as a subscription billing system) could depend on that library. The alternatives are to (1) "reinvent the wheel" by implementing that computation in each application that needs it (which wastes dev time, and devs would probably make subtle mistakes each time) or (2) copy-paste the code into each application (which is messy).

While copying and pasting code is technically a way to reuse code, it's frowned upon because it leads to messy code. (Using code libraries is the preferred way to reuse code, and the term "code reuse" always refers to code library reuse, not copy-paste reuse.) As an analogy for why copy-pasting is bad, imagine that a scientific research paper could not cite any other papers and instead needed to copy and paste in the entire text of all other research papers upon which it relies. That would be extremely difficult to read and write, and if any research was invalidated, it would be difficult to know what other results were affected.

Every developer and software project practices code reuse to some degree---it's virtually impossible to build an application truly from scratch, just as it's virtually impossible to build a [pencil](https://fee.org/resources/i-pencil/) from scratch (good luck mining graphite yourself!). A modern web or mobile application may depend on hundreds or thousands of libraries. You've probably heard of some very popular open-source libraries, such as [React](https://reactjs.org/), [Log4j](https://logging.apache.org/log4j/2.x/), and [OpenSSL](https://www.openssl.org/). One example of an internal (non-open-source) library or API is the API inside Uber that knows all of the airport terminals and doors at airports around the world (which is used by their iOS apps, their Android apps, and certainly many internal apps as well).

## How we solve this today

<!-- Describe in as much detail as you can how the product enables this use case today. You can include customer quotes, textual walkthroughs, and this is also a great place to link to demo videos. This is perhaps the most important single section in this document, so don't be afraid to add too much - if you feel this section is getting long, consider summarizing here and linking out to other pages in the handbook with details. -->

Code Search, Batch Changes, Code Intel, and Code Insights play a key role here.

The following are real, anonymized quotes from customers today on how we're already helping them with this use case:

- Our developers use Sourcegraph to reuse code that already exists, avoiding duplication and saving developers countless hours redoing work that has already been done. Sourcegraph takes search one step further by "understanding" the structure of the code (as opposed to just "seeing" it as raw text), enabling the organization to do semantic searches that yield accurate results.
- I was recently tasked with something that I, admittedly, had no idea how to do, but I was sure that someone must’ve already done it at some point. Sourcegraph universal code search took me directly to the code I was looking for so I could repurpose it. It’s also an invaluable tool for enabling our developers to learn from one another.
- Our developers use Souregraph to reuse code and ensure consistency across their organization. For large enterprises, code search capabilities are essential to ensuring consistency as well as eliminating duplicative efforts.
- If I’m developing code for a library that might draw charts, for example, we don’t want 30 different ways to draw a chart. With Sourcegraph, I can search the code to find other chart examples, and simply copy the code. This saves us time and ensures consistency.
- Our Client Platform Team is responsible for developing and maintaining the frameworks and shared libraries that all other products are built on. This includes a shared UI widget library to support our entire engineering team. Any time they shipped a release for one of their packages, they’d also have to propagate it across 70+ repositories used by other teams to avoid breaking changes. While they developed their own internal tool to automate these changes, it required ongoing maintenance and didn't provide end-to-end visibility into the path to completion. The Client Platform team has already used Batch Changes numerous times to propagate large-scale updates to the frameworks and shared libraries they maintain. In comparison to manually making these changes, Batch Changes reduces the time it takes to make large-scale code changes by 80%.

## Who benefits

<!-- Link to the personas that relate to this use case, and describe briefly how it benefits each of them (the real detail is in the above section, so be sure not to repeat yourself here; speak in generalities for each persona in this section.) -->

[Developer](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_1_0)

- Developers can be far more productive if they are able to reuse existing code.

[Engineering Leader](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_19)

- Eng leaders set the strategy and philosophy around code reuse. For Eng Leaders that have committed to a culture of code reuse, Sourcegraph is a critical solution.

[Dev Productivity Lead](https://docs.google.com/presentation/d/1aQhcWoWd_LJXdAgEn7JBGnZV5pfN6UJyct2VV-ZiTXI/edit#slide=id.ge9b93ff711_0_19)

- At enterprises, internal dev productivity teams are often tasked with maintaining shared libraries and APIs that are used throughout the organization. This ensures consistency and eliminates duplicate work.

Additionally, the "platform team" (a central team that mains many or most libraries in a company) is a key player here for companies that have that team.

## Features that enable this use case

{{generator:use_case_feature_list.code_reuse}}

## Additional resources

<!-- Are there other articles, blogs, internal documents, or handbook links that are useful for someone who wants to understand this use case? Link to them here. -->

- [Marketing page for Code Reuse use case](https://about.sourcegraph.com/use-cases/#streamline-code-reuse)
- [Use case index](../index.md#use-cases)
- [Productboard code reuse (internal only)](https://sourcegraph.productboard.com/feature-board/3957049-fy23-use-cases/features/11482292/detail)
- [Drive innovation by enabling innersource](https://drive.google.com/file/d/1hiyTxBA_n43LsZjhuE3YOMiWZdAOHcTn/view?usp=sharing), Gartner. Analyst research that cites Sourcegraph as a key resource for enabling innersource and code reuse.
- [Related issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ause-case%2Fcode-reuse)
