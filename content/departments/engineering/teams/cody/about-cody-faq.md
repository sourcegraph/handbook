# About Cody FAQ

## What is Cody?

#### What is Cody (ELI5)?

Cody is an AI coding assistant that lives in your editor that can find, explain, and write code. Cody uses a combination of AI (specifically Large Language Models or LLMs), Sourcegraph search, and Sourcegraph code intelligence to provide answers that eliminate toil and keep human programmers in flow. You can think of Cody as your programmer buddy who has read through all the code on GitHub, all the questions on StackOverflow, and all your organization's private code, and is always there to answer questions you might have or suggest ways of doing something based on prior knowledge.

#### Is Cody for Enterprise customers? Or for individual devs?

There are two ways to use Cody:

- As an individual dev, using Cody with sourcegraph.com and/or Cody App.
- As a Sourcegraph Enterprise user, connect Cody to your Sourcegraph Enterprise instance.

#### How does Cody work?

To provide responses to requests, Cody does the following:

1. A user asks Cody a question (or to write some code).
1. Cody fetches relevant code snippets.
   1. Unlike Copilot, Cody knows about entire codebases, and fetches snippets directly relevant to you.
   2. Sourcegraph uses a combination of code search, code graph (SCIP), intelligent ranking, and an AI vector database to respond with snippets that are relevant to the user's request.
1. Sourcegraph passes a selection of these results along with the original question to a Large Language Model like Claude or OpenAI’s ChatGPT.
1. The Large Language Model uses the contextual info from Sourcegraph to generate a factual answer and sends it to Cody.
1. Cody then validates the output of the Large Language Model and sends the answer back to the user.

#### How is Cody different from ChatGPT?

Cody uses a ChatGPT-like model as a component in its architecture (today we use Claude, but we could alternatively use ChatGPT or a similar Large Language Model). ChatGPT lacks the ability to search for contextual code snippets and docs, so its knowledge is therefore limited to open source it was trained on.
It does not know about recent changes to code or your private codebase.
Rather than telling you when it doesn't know, ChatGPT will just confidently make stuff up that sounds correct but is false. The contextual snippets that Cody fetches from Sourcegraph are crucial to enabling Cody to generate factually accurate responses.

#### How is Cody different from GitHub Copilot?

Look for the latest competitive landscape information in [Highspot](https://sourcegraph.highspot.com).

## Cody Access & Exception Process

See [here](cody-exceptions.md) for the access conditions and exception process around customers using Cody.

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

Yes.

## Demoing

#### What are demo paths for Cody?

See the [CE Demo page](../../../technical-success/ce/demo/cody.md)

## Turning Cody on for a Sourcegraph Enterprise instance (customer or prospect)

#### How do we turn on Cody for a Sourcegraph Enterprise customers?

Cody is on by default for all Sourcegraph customers with managed instances. Self-hosted customers are not able to get access to Cody without a special exemption.

### Prerequisites, dependencies, limitations

#### Does Cody require Sourcegraph to function (technical dependencies)?

Yes.

#### Can Cody work with self-hosted Sourcegraph?

Technically, it can be done, but due to the complexities involved this is not supported out-of-the-box.

#### Are there third party dependencies?

Yes:

- Anthropic or OpenAI for the LLM
- OpenAI for embeddings

#### Having code snippets sent to third-party services will be a problem for <customer>. Do we have a plan to address that? What if a customer or prospect is fully air-gapped?

- Short term
  - We don’t have a short term plan to provide a completely self-hostable version of Cody. That’s because the LLM we use to generate the answers is provided by a third-party, and costs a few million dollars to train.
  - Customers that ask for this will likely recognise that, and ask for options. What frequently works is offering them to use their own OpenAI (chatGPT and embeddings) or Anthropic contract, which we support (BYO Key).

#### What snippets are sent to Anthropic?

The snippets that are sent are determined using Sourcegraph search, embeddings, or any other method that maximizes the relevance of the context fed to the LLM.

#### Does Cody train on customer code? How does Cody answer questions about your code if it does not train on customer’s code?

No, Cody doesn't train on customer code. See [docs](https://docs.sourcegraph.com/cody/faq#does-cody-train-on-my-code)

#### Is there a list/explanations of where the model trains in open source code?

Please reference the [Cody notice](https://about.sourcegraph.com/terms/cody-notice).

#### Does Cody send code outside of a customer’s network?

Yes. Cody sends code outside of a customer's network when creating embeddings and during normal use by end users. Our zero-retention agreements with our third-party LLM providers apply to these requests and responses.

#### What's on the roadmap for Cody?

Check the #job-fair channel in Slack for the latest updates about what's coming for Cody. See the [product planning handbook page](../../product-planning.md) for more information about how we create the roadmap.

#### When’s GA?

We don’t have a GA date set.

#### Are metrics available for Cody on Sourcegraph Enterprise instances?

See [Looker](https://sourcegraph.looker.com/dashboards/476).

## The future

#### Is search going to be replaced by embedding search?

Usually people think of embeddings / vector search as complementary to other strategies. While it matches really well semantically ("what is this code about, what does it do?"), it drops syntax and other important precise matching info. So the results are often combined with exact/ precise approaches to get the "best of both worlds".

Also see [AI reading list](https://docs.google.com/document/d/1nuJsd6vRjKcP4sHRbO7F6NXe38iyKOrt8PTdVhca-JE/edit#heading=h.98jii17cexrv)

## Marketing material

See [Cody Marketing page](cody-marketing.md) for Cody messaging, one-pagers, and other marketing assets.

## Technology primers

#### Can you explain embeddings?

See this [post](https://towardsdatascience.com/what-is-embedding-and-what-can-you-do-with-it-61ba7c05efd8).

## Administration

#### How do we (Sourcegraph) revoke, disable, or turn off access to Cody?

To disable access to Cody, you must revoke the Anthropic/OpenAI API keys provided to the customer that they apply to the instance. Once the API key is revoked, the Cody extension becomes unusable.

For example to revoke the Anthropic API Key, from the Anthropic Console find the API Key specific to the customer and disable it.
