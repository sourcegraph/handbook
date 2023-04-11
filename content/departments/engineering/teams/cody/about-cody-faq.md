# About Cody FAQ

Submit [feedback from the field here](https://docs.google.com/document/d/1LD6t01TdxPT1LSbzmS2FN_a8tifhBiUOn9YpzJKORWo/edit).

## What is Cody?

#### What is Cody (ELI5)?

Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody uses a combination of AI (specifically Large Language Models or LLMs), Sourcegraph search, and Sourcegraph code intelligence to provide answers that eliminate toil and keep human programmers in flow. You can think of Cody as your programmer buddy who has read through all the code on GitHub, all the questions on StackOverflow, and all your organization's private code, and is always there to answer questions you might have or suggest ways of doing something based on prior knowledge.

#### Is Cody for Enterprise customers? Or for individual devs?

There are two ways to use Cody:

- As an individual dev, using Cody with sourcegraph.com. Follow the instructions here. Note that users might want to try Cody using sourcegraph.com on private com, which is possible as long as they agree to our [terms]()
- As a Sourcegraph Enterprise user, connect Cody to your Sourcegraph Enterprise instance. Instructions are here.

> Note: There used to be two distinct VS Code extensions (Cody community and Cody enterprise) but they were merged into a single one.

#### How does Cody work (integration with CIP)?

To provide responses to requests, Cody does the following:

1. A user asks Cody a question (or to write some code).
1. Cody fetches code snippets and docs from Sourcegraph related to the user request via OpenAI. (This is accomplished through embeddings which are used to fetch additional context). OpenAI orchestrates this today.
   1. Unlike Copilot, Cody knows about all your company’s private code and fetches snippets directly relevant to you.
   2. Sourcegraph uses a combination of code search, code graph (SCIP), intelligent ranking, and an AI vector database to respond with snippets that are relevant to the user's request.
   3. If OpenAI embeddings are not on, then a search is ran locally to provide context.
1. Sourcegraph passes a selection of these results along with the original question to a Large Language Model like Claude or OpenAI’s ChatGPT.
1. The Large Language Model uses the contextual info from Sourcegraph to generate a factual answer and sends it to Cody.
1. Cody then validates the output of the Large Language Model and sends the answer back to the user.

![How cody works with embeddings](https://storage.googleapis.com/sourcegraph-assets/handbook/cody/how-cody-works-embeddings.png)

### How does Cody work (locally)?

To provide responses to requests, Cody does the following:

1. A user asks Cody a question (or to write some code).
1. Cody fetches code snippets from the users’ current workspace.
1. The additional context collected is passed along with the original question to a Large Language Model like Claude or ChatGPT.
1. The Large Language Model uses the contextual info provided to generate a factual answer and sends it to Cody.
1. Cody then validates the output of the Large Language Model and sends the answer back to the user.

![How cody works with keywords search](https://storage.googleapis.com/sourcegraph-assets/handbook/cody/how-cody-works-keywords.png)

([image source](https://app.excalidraw.com/s/4Dr1S6qmmY7/3TiB7SbYTmm))

#### How is Cody different from ChatGPT?

Cody uses a ChatGPT-like model as a component in its architecture (today we use Claude, but we could alternatively use ChatGPT or a similar Large Language Model). ChatGPT lacks the ability to search for contextual code snippets and docs, so its knowledge is therefore limited to open source it was trained on.
It does not know about recent changes to code or your private codebase.
Rather than telling you when it doesn't know, ChatGPT will just confidently make stuff up that sounds correct but is false. The contextual snippets that Cody fetches from Sourcegraph are crucial to enabling Cody to generate factually accurate responses.

#### How is Cody different from GitHub Copilot?

- GitHub Copilot's main feature is autocomplete, while Cody is focused on question answering. Cody's main feature today is a chat interface where you can ask it to (1) find, (2) explain, and (3) write code. You can ask Cody questions about the code, which you can't do with Copilot (because it’s autocomplete only). The closest feature to Copilot would be if you asked Cody to write code matching a description. Cody is able to give better answers and write better code snippets because Cody can fetch additional context from your codebase with the request to enrich it, so it is capable of writing code beyond the boilerplate use cases that Copilot is good for.
- Future state: Cody autocomplete vs Copilot. Copilot makes use of a LLM (Large Language Model) to generate these completions. Because Copilot doesn’t use a powerful search, a common criticism of Copilot is that it generates correct code only for boilerplate tasks. In the future, Cody will use Sourcegraph’s code intelligence to provide autocomplete tailored to a customer’s code.

|                      | Cody                                                 | Copilot              | Copilot Chat         |
| -------------------- | ---------------------------------------------------- | -------------------- | -------------------- |
| Chat interface / Q&A | ✅                                                   | Waitlist             | NA                   |
| Code generation      | ✅                                                   | Waitlist             | Waitlist             |
| Autocompletion       | Experimental (internal)                              | ✅                   | Waitlist             |
| Context              | Local and remote repositories (embeddings)           | Local                | Local                |
| Code and metadata    | All the code graph (own, metadata, etc) coming soon. | Code only            | Code only            |
| Zero retention       | On model inputs and outputs                          | On model inputs only | On model inputs only |
| Bring your own model | Coming soon (experimental)                           | ❌                   | ❌                   |

Notes:

- Copilot for Business retains ‘Suggestions’ (also known as completions or model outputs derived from your code) for up to 30 days.
- Cody context fetching is based on embeddings. So far, it retrieves relevant code for a single repository at a time. Multi-repo context fetching is scheduled for Q2.

## Can Cody …?

In general, a good idea is to give use cases a try. LLMs are very powerful and generic, and we add new recipes all the time. Here’s a few answers:

#### How does Sourcegraph’s CIP capabilities augment Cody? Aka why is it better to use Cody with CIP?

Cody Enterprise uses the Sourcegraph API to fetch contextual code snippets and docs that are relevant to answering a user's query, using embeddings and soon other APIs. One way to think about Cody is that it is a natural language layer on top of Sourcegraph that uses many of the same search and code navigation features a human might, and then synthesizes the results from these features into an answer to the user's question or code-writing request.

(As an analogy, consider how ChatGPT is pretty smart on its own for stuff that happened in public in the past, but it doesn't know about anything in the present or any specifics about stuff from your email or private documents, for example.)

#### Can Cody understand code in any programming language?

Cody can read and write code in any major programming language. More esoteric languages might not work out of the box.

#### Can Cody speak human languages other than English?

Yes, Cody can speak many languages, including Spanish, French, German, Italian, Chinese, Japanese, Korean, Latin, and Esperanto.

#### Can Cody write code referencing other parts of the codebase (Ex. Write a new function calling an existing function in another repo)?

Yes, that’s the type of things Cody can do. Mileage may vary though, and Cody sometimes hallucinates!

## Demoing

#### What are demo paths for Cody?

- [Short demo video](https://sourcegraph.slack.com/archives/C04MSD3DP5L/p1677050171642469)
- [Longer demo video](https://drive.google.com/drive/u/0/folders/1C1Tb4I2Jdgfp0ECl_4aBeM7SiOEENSfM)
- [Cody background info and demo notes from SQS](https://docs.google.com/document/d/1M7F9n4uNjlQOuUley6EubRjOw9D3meKwgFfvd7yHkMA/edit#)
- [Tips on Demoing an LLM-based application from SQS](https://slack.org/llm-demo-tips)

You can also use this simple demo flow:

- Start with a generic question
  > What are popular go libraries for building CLIs?
- But the unique thing about Cody is it knows about your codebase. It uses code intelligence to answer questions about your code?
  > Do we have a React date picker component in Sourcegraph?
  > Do we have a timeline component in Sourcegraph?
- Cody can speak Spanish, but I can't
  > Do we have a timeline component in Sourcegraph? Answer in spanish.
- Cody can explain code
  > sourcegraph/enterprise/internal/batches/reconciler/plan.go
  > Explain function DeterminePlan

For the first demo, we recommend that Technical Success takes the lead. As your customers or prospects want to talk about the future of Cody or the roadmap, please pull in @malomarrec.

## Turning Cody on for a Sourcegraph Enterprise instance (customer or prospect)

#### How do we turn on Cody for a Sourcegraph Enterprise customer?

- Prerequisites
  - See [docs]()
  - Approval of [Cody terms](https://about.sourcegraph.com/terms/cody-notice). The very first step is to make sure customers can agree to terms and know that Cody uses third-party services (Anthropic and optionally OpenAI). There is **no paperwork required**: customers will agree to terms by turning Cody on in the admin UI. But we need to make sure that they are aware and have the right expectations.
- Instructions for Cloud customers
  - See the cloud team [handbook](../../../cloud#managed-instance-requests) (“Enable Cody on a Managed Instance”)
  - Also see the [customer facing docs](https://docs.sourcegraph.com/cloud#cody)
- Instructions for self-hosted customers:
  - See [docs](https://docs.sourcegraph.com/cody#cody-on-your-self-hosted-sourcegraph-enterprise-instance)
  - To turn Cody on, the TA or CE assigned to the account needs to generate an anthropic access key,
    - Prerequisite: accept your invite to the Anthropic console.
    - Head to the [anthropic console](https://console.anthropic.com/account/keys)
    - Click “generate key”
    - Use the MI hostname as the key name - the instance url is more accurate from MI's perspective, and we don't store customer's name directly anywhere in our Cloud infrastructure.
- Adoption strategy
  - Cody Enterprise Use the MI hostname as the key name - the instance url is more accurate from MI's perspective, and we don't store customer's name directly anywhere in our Cloud infrastructure. sending code snippets out to a third party provider, Anthropic.
  - On top of that, and **optionally**, customers can set up OpenAI embeddings to improve the quality of context fed to Cody and the quality of Cody answers. We recommend TAs to ignore embeddings at first when talking to customers, because that requires sending out their entire codebase (or at least all the repos they want to search) to OpenAI.
  - We should focus on getting them to turn on Cody, which only requires Anthropic.

### Prerequisites, dependencies, limitations

#### Does Cody require Sourcegraph to function (technical dependencies)?

Yes. See [docs](https://docs.sourcegraph.com/cody/faq#does-cody-require-sourcegraph-to-function)

#### Can Cody work with self-hosted Sourcegraph?

Yes, Cody can work with self-hosted Sourcegraph instances. It's important to note that Cody on self-hosted Sourcegraph has third-party dependencies:

- snippets of code (up to 28 KB per request) will be sent to a third party cloud service (Anthropic) on each request. This will be fine for some security teams, but others may opt to wait for a version that does not require sending any code to a third party service.
- if embeddings are used, the whole codebase (or at least a subset of repositories) will be sent to OpenAI.

#### Are there third party dependencies?

Yes:

- Anthropic (mandatory) for the LLM
- OpenAI (optional) for embeddings

See details and security information below.

#### Having code snippets sent to third-party services will be a problem for <customer>. Do we have a plan to address that? What if a customer or prospect is fully air-gapped?

- Short term
  - We don’t have a short term plan to provide a completely self-hostable version of Cody. That’s because the LLM we use to generate the answers is provided by a third-party, and costs a few million dollars to train.
  - Customers that ask for this will likely recognise that, and ask for options. What frequently works is offering them to use their own OpenAI (chatGPT and embeddings) or Anthropic contract, which we are [working on](https://github.com/sourcegraph/sourcegraph/issues/50273).
- Longer term, we want Cody to be completely modular, so that customers can plug their model of choice, including their own proprietary LLM.
  - One of those two things are very likely to happen:
    - A good enough open source model gets released, and we can use it by default for self-hosted customers.
    - Anthropic (or another LLM provider) provides a single-tenant offering that can be used by customers with constraining security requirements. In that case, the code snippets will still be sent to a third-party service, but on an instance dedicated to the customer. We are currently discussing this with Anthropic, but don’t have a timeline.
  - We’re building a long-term plan to use a smaller, self-hosted model for code completion only (no conversational features). This doesn’t have a timeline yet but it’s likely we’re gonna do this over the next year, and we’re hiring a Head of AI to drive this effort.

#### What snippets are sent to Anthropic?

The snippets that are sent are determined using Sourcegraph search, embeddings, or any other method that maximizes the relevance of the context fed to the LLM.

#### Does Cody train on customer code? How does Cody answer questions about your code if it does not train on customer’s code?

No, Cody doesn't train on customer code. See [docs](https://docs.sourcegraph.com/cody/faq#does-cody-train-on-my-code)

#### Is there a list/explanations of where the model trains in open source code?

Please reference the [Cody notice](https://about.sourcegraph.com/terms/cody-notice).

#### Does Cody send code outside of a customer’s network?

Yes. Cody uses a third party large-language model. When a user asks Cody a question, Sourcegraph sends relevant code snippets out to a LLM cloud provider as context to generate answers.
Our current third party large language model is provided by Anthropic. Anthropic has a zero-retention policy. Code snippets are only processed by Anthropic the length of time required to return the answer, and are removed permanently after that.
Cody can also be setup to use embeddings. If setup, Cody will send data out to OpenAI.

#### Are there any limitations of Cody supporting non-git code hosts?

Cody should work with Git code hosts. @beyang is working on verifying that.

#### What's on the roadmap for Cody?

See [Cody roadmap](https://docs.google.com/document/d/1HpKuHHt0Bh2QEAgrWG93d3S3X12pCKRMSohB0jh2F9M/edit#).

#### When’s GA?

We don’t have a GA date so far. For reference, the Gmail beta lasted more than a year. Cody is available to any prospect and customer today in its experimental state.

#### Are metrics available for Cody on Sourcegraph Enterprise instances?

Yes, here's the [dashboard](https://analytics.amplitude.com/sourcegraph/dashboard/4n7yl67).
But…! See this [thread](https://sourcegraph.slack.com/archives/C04MZPE4JKD/p1680877846166199).

#### Can we offer Cody to an entire team of engineers at certain customers - are pilots limited to only a few users?

Yes, all customer users are able to access Cody

#### How can I communicate which Cody offering is best for my prospects and customers to use?

- The VS Code extension used with sourcegraph.com: allows you to search one local code base at a time + the repo you have embeddings for on .com.
- [Not yet available] App + Cody: allows you to search everything that you connect to your app instance to (local files and remote repos).
- Cloud trial / enterprise: allows you to set up embeddings for your entire codebase.

## The future

#### Is search going to be replaced by embedding search?

Usually people think of embeddings / vector search as complementary to other strategies. While it matches really well semantically ("what is this code about, what does it do?"), it drops syntax and other important precise matching info. So the results are often combined with exact/ precise approaches to get the "best of both worlds".

Also see [AI reading list](https://docs.google.com/document/d/1nuJsd6vRjKcP4sHRbO7F6NXe38iyKOrt8PTdVhca-JE/edit#heading=h.98jii17cexrv)

#### Is Souregraph going to offer its own embeddings service?

Yes. Before the end of Q2, Sourcegraph will offer a self-hosted embeddings service.
Note that there will still be a third party dependency on Anthropic.

#### Is there a timeline of when Cody will help with search queries?

There’s a prototype live on s2: https://sourcegraph.sourcegraph.com/search/cody
There’s no timeline yet for shipping this and future iterations to customers, but we are working on a [further iteration](https://docs.google.com/document/d/10RZCwcKz-I0NbdEW9finkvpo2vDGSqZRaOVPMtDmseg/edit#heading=h.55yagbmk4s13) on sourcegraph.com.

#### Will Cody support other LLM providers?

Yes. Cody we will be modular so people can use their own contractually agreed to LLM(s) ([WIP](https://github.com/orgs/sourcegraph/projects/331?pane=issue&itemId=24616071)).
As of today, Cody by default supports the following models: [docs](https://docs.sourcegraph.com/cody#configuring-embeddings), [docs](https://docs.sourcegraph.com/cody#step-1-enable-cody-on-your-sourcegraph-instance).

We are in early conversations with Google and Cohere to be able to be able to provide our customers with more options for their LLM use.
There is no clear timeline for when these will be officially available, but by the end of Q2 is highly likely.

#### Do we log Cody queries, in a way that either our customer support team or their site admins can read user queries?

- On sourcegraph.com, we may log queries in order to provide the service and to improve the product.
- On Sourcegraph Enterprise, we don’t log cody queries.

### Marketing material

#### Where can I find additional assets for Cody?

- [Cody One-Pager for Enterprise [DRAFT]](https://docs.google.com/document/d/11bUFF0e5Hyec94bJCdvwM8zgHHdoBLs7X_hugFGp4VY/edit#)
- Social videos to come first week of April
- [Background info and demonstration notes](https://docs.google.com/document/d/1M7F9n4uNjlQOuUley6EubRjOw9D3meKwgFfvd7yHkMA/edit#heading=h.mgur8fhhngdv)
- [[INTERNAL, DRAFT] Cody and GitHub Copilot for Business comparison](https://docs.google.com/document/d/1x1Z8ewbCwciVj0cA5aRLt5ziVHuE7LbdBcfNcVEPk-U/edit?usp=sharing)

## Technology primers

#### Can you explain embeddings?

See this [post](https://towardsdatascience.com/what-is-embedding-and-what-can-you-do-with-it-61ba7c05efd8).

## Administration

#### How do we (Sourcegraph) revoke, disable, or turn off access to Cody?

To disable access to Cody, you must revoke the Anthropic/OpenAI API keys provided to the customer that they apply to the instance. Once the API key is revoked, the Cody extension becomes unusable.

For example to revoke the Anthropic API Key, from the Anthropic Console find the API Key specific to the customer and disable it.

## Cody security standards

See this internal [doc](https://docs.google.com/document/d/1KW9IwEMRLouU4fvYlwsDhx_SyeLMQ-caSIfCzdbecIY/edit#heading=h.w7wad266yfsk).

### Go to market

See this internal [doc](https://docs.google.com/document/d/1KW9IwEMRLouU4fvYlwsDhx_SyeLMQ-caSIfCzdbecIY/edit#heading=h.v8v0tbchdh0e)

#### Would setting up Cody internally require us to get a separate usage license from Anthropic/OpenAI for internal use?

no -- they would be accessing the LLM via Cody (us), our licenses permit their use

#### As a GTM team member, how can I set up Cody locally to run demos?

See this [thread](https://sourcegraph.slack.com/archives/C04MZPE4JKD/p1679514141605149).

#### Which Cody offering is best for my prospects and customers to use?

|                 | **Have executors setup**                                 | **Don't have executors setup**                                                |
| --------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **MI**          | Run batch spec button on top. Download for src-cli below | Download for src-cli below                                                    |
| **Self-hosted** | Run batch spec button on top. Download for src-cli below | Download for src-cli on top. Run batch spec below, that opens SSBC info modal |

#### When should we position Cody to create pipeline?

See [this question](https://docs.google.com/document/d/1KW9IwEMRLouU4fvYlwsDhx_SyeLMQ-caSIfCzdbecIY/edit#heading=h.tghbf1q68uvz).

#### With so many "leads" so far on Cody, are we ready to be able to handle all of the requests for access from an onboarding perspective?

Yes

#### Who can we prospect into for Cody?

- All Customers (AE & TA led).
- All Prospects (AE & CE led).
- All contacts are eligible, per the existing ROE (including ICs who are already on the approved list)

#### How will Inbound leads for Cody be managed?

Inbound leads are being routed to the Account Teams (for Named Accounts), and to Casi for Unassigned. Named SDRs work to triage and prioritize with your AE, CE & TA partners.

- SDR job # 1: effectively convert, triage all inbound leads.
- SDR job # 2: work with AE to prioritize outreach to all named prospects.

We may change Unnamed Account distribution ROE depending on the inbound demand (i.e. would not be possible for one inbound SDR to cover the demand if we have thousands of Unnamed Accounts).

ALL LEADS MUST BE CONTACTED FOR FIRST TOUCH WITHIN 24 HOURS OF ENTERING SALESFORCE LEAD VIEW (WEEKENDS EXCEPTED).

The goal of the initial outreach from the SDR is to provide helpful onboarding materials via the Sourcegraph docs, and establish a meeting with the AE & CE (or AE & TA in Customer meetings) to walk through questions, help with orientation, and unblock the Prospect or Customer from using Cody.
There are Salesforce reports that show your (AE) leads from prospects, and inbounds from customer accounts:

- [“For Work” - prospect](https://sourcegraph2020.lightning.force.com/lightning/o/Lead/list?filterName=00B5b000005dhseEAA)
- [“For Personal” - prospect](https://sourcegraph2020.lightning.force.com/lightning/o/Lead/list?filterName=00B5b000005dhsjEAA)
- [“For Work” - existing customer](https://sourcegraph2020.lightning.force.com/lightning/o/Contact/list?filterName=00B5b000005dht8EAA)
- [“For Personal” - existing customer](https://sourcegraph2020.lightning.force.com/lightning/o/Contact/list?filterName=00B5b000005dht3EAA)

If you have questions please reach out to Andrew Reed or Ajay Uppaluri.

#### When should we position Cody to create pipeline?

See [this question](https://docs.google.com/document/d/1KW9IwEMRLouU4fvYlwsDhx_SyeLMQ-caSIfCzdbecIY/edit#heading=h.tghbf1q68uvz)

### Pricing and Packaging (private)

See this [document](https://docs.google.com/document/d/1KW9IwEMRLouU4fvYlwsDhx_SyeLMQ-caSIfCzdbecIY/edit#heading=h.skqeosldgnl1)
