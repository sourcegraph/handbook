# Editorial strategy

This page explains the strategy behind the content we publish on the Sourcegraph blog.

### Related handbook pages

- [Editorial process (including how to submit a blog post)](editorial-process.md)
- [Blog handbook](../creating_blog_posts.md)

The FY22 Editorial Strategy for the Sourcegraph blog builds on our [FY22 Content Strategy](index.md).

As one of Sourcegraph’s primary channels for generating awareness, the blog should play a key role in establishing the brand and our credibility with our audience. Beyond the blog, contributions to external publications and spin-off programs such as newsletters make up an editorial ecosystem.

In the context of content marketing, editorial content is defined by Power Digital Marketing as “[content that is not explicitly aimed at selling something](https://powerdigitalmarketing.com/blog/what-is-editorial-content/)”.

Most technology brands have a corporate blog to support their content strategy, driving traffic through referrals and SEO, to build authority, credibility, and trust with their audience. Some brands have a separate engineering blog (for example, [Netflix](https://netflixtechblog.com/), [Uber](https://eng.uber.com/), [Airbnb](https://medium.com/airbnb-engineering)), which works well for consumer-facing brands whose customers are not necessarily interested in how the technology is built. For the most part however, corporate blogs tend to publish a blend of editorial and promotional content, ranging from tutorials and how-tos, engineering deep dives and product spotlights, to analyst report accolades, customer stories and company news.

With so much potential content to share, an editorial strategy helps to guide our decision making. It forces us to keep our audience’s needs top of mind and ensure that each blog post is set up for success by always offering something of value to our readers, maintaining a high quality bar, and aligning with broader marketing themes and objectives.

## Editorial principles

The editorial strategy for Sourcegraph’s blog draws on the same [principles that inform our overall content strategy](index.md#content-principles):

1. **Quality over quantity.** We do not sacrifice quality for quantity, and we take our reputation as a content producing company seriously. We respect our audiences’ time and thus, we respect the creative process and allow ample time for content creation.
1. **Audience-first mentality.** We prioritize the needs of our audience over our own. Our content offers useful and actionable information regardless of whether the reader uses Sourcegraph or not. Content marketing does not equal advertising.
1. **Keep it helpful and simple.** We make it easy to find, consume, and share our content. We create content that is intelligent, thoughtful, and accessible to all and apply user experience best practices. We don’t engage in fear mongering or share vapid content.

All blog posts and other editorial content need to align with the above principles, and we will vet content at all stages of production to ensure it meets our editorial standards:

1. **At the pitch stage:** Wherever the idea comes from (within editorial, marketing, the rest of the company, or externally), at this stage we evaluate what value the proposed content will offer the reader. Is it helpful and simple? What do we hope they will learn or take away from the post? Are we putting the audience’s needs ahead of our own? (That is, are we helping them to learn something, solve a problem, or even entertain them, rather than just pushing a particular product feature?)
1. **At the review stage:** Is the draft delivering on the pitch? Have we provided enough context or background information? Is it written in plain language and structured so it’s easy to read?
1. **After publishing:** We will monitor performance of content to assess how it’s being received by our audience, and iterate on our strategy based on what we learn.

## Mission statement

In one sentence: "Insights, tips, and technology to help you hone your craft and grow your career."

The Sourcegraph’s blog primary function is to serve our developer audience: to be a source of information, inspiration, and delight. We want to help make developers’ jobs easier by surfacing technology, tips, and ideas to improve efficiency, grow in their careers, and hone their craft. We will do this by applying the above [principles](#editorial-principles) rigorously to all content that we publish.

The secondary function of the blog is to grow awareness of Sourcegraph’s brand. Fulfilling this function is a direct result of the first: we can’t establish Sourcegraph as a trusted, respected developer brand without serving our audience first.

## Priority content

The buckets outlined below are an internal reference and guideline. Although there are three buckets here, content we may publish isn't limited to these, and we may publish more of one type of content than others.

1. **Inside Sourcegraph engineering:** How we built X, scaled Y, debugged Z. These are meaty deep dives into the process of building and iterating on Sourcegraph the product and engineering org. Got code snippets? Graphs and charts? Links to PRs? We’ll take them all. Even though we may talk about Sourcegraph as part of these stories, the focus is on the technical work behind the product rather than the product itself.
1. **Tutorials/how tos:** These practical posts show readers how to solve a problem or improve on a skill. Better code reviews, communication and collaboration advice, and productivity tips are examples of topics we might tackle here.
1. **Customer/user stories:** Stories highlighting cool things our customers and users are doing with or because of Sourcegraph. We’ll collaborate with customer marketing and community on these.

To view sample categories and feature stories, team members can check out the [Editorial Strategy RFC](https://docs.google.com/document/d/1Zq8UcrCti_xVBGO7xqs2w6_yR_J_uBS1kimuSpQKqYY/edit?usp=sharing).

## Blogs our devs trust

According to a question asked in Slack, our devs would trust the information coming from the following company blogs if they saw a post in a Google search or on HackerNews.

- [Fly.io](https://fly.io/blog/)
- [Facebook Engineering](https://engineering.fb.com/)
- [Netflix Tech Blog](https://netflixtechblog.com/)
- [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/)
- [Google Developers](https://developers.googleblog.com/)
- [Uber Engineering](https://eng.uber.com/)
- [Dropbox.Tech](https://dropbox.tech/)
- [Cloudflare](https://blog.cloudflare.com/)
- [LogRocket](https://blog.logrocket.com/)
- [Hasura](https://hasura.io/blog/)
- [Discord](https://blog.discord.com/tagged/engineering)
- [Prometheus](https://prometheus.io/blog/)
- [Grafana](https://grafana.com/blog/)
- [Shopify Engineering](https://shopify.engineering/)

### Learnings

Below is a non-exhaustive, in-progress list of learnings we've gathered from reading the above blogs. 

## Balance depth and compactness

The Fly.io blog focuses on two extremes of the length-spectrum, primarily writing either “FYI” posts that take less than five minutes to read or long blog posts that take 20-30 minutes or more.

* Example: [FYI: Phoenix drops webpack and npm for esbuild](https://fly.io/blog/phoenix-moves-to-esbuild-for-assets/) takes 3 minutes to read.
* Example: [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) takes 39 minutes to read. 

The average FYI post takes 3 minutes and the average regular post takes 21.5 minutes. 

Another strategy to find this balance is to write multi-part posts. In a series of posts on decision-making at Netflix, the Netflix Engineering blog writes a three minute intro post ([Decision Making at Netflix](https://netflixtechblog.com/decision-making-at-netflix-33065fa06481)) and, as of November 18, with more to come, has written four more posts in this series. 

## Emphasis on hands-on dev experiences and stories

In the post [How Safari Ruined My Tuesday on Fly.io](https://fly.io/blog/how-safari-ruined-my-tuesday/), the author hooks the post on a personal story (as exemplified in the title). 

Sentences like “In the whole of the internet, there's only one, lonely Stack Overflow thread talking about this issue affecting mobile Safari” and “This was an annoyingly difficult issue to debug. Safari's web inspector will tell you the computed property of the elements is pointer-events: auto, but it's lying. Elements won't respond to click events. Bad times. It's like living with IE6 again” demonstrate the actual lived experience of software development. In other words, it’s relatable. It’s by devs, for devs. 

## Include humor

In the post [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) on Fly.io, the author prefaces the post with a sales pitch but does so in a humorous way, making it more palatable:

>“We’re Fly.io. This post isn’t about Fly.io, but you have to hear about us anyways, because my blog, my rules. Our users ship us Docker containers and we transmute them into Firecracker microvms, which we host on our own hardware around the world. With a working Dockerfile, getting up and running will take you less than 10 minutes.”

The in-depth value of the post (it’s 39 minutes long) likely also makes the pitch more palatable. 

Examples are a great opportunity for humor. In the post [What is an A/B Test?](https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962), the Netflix Engineering blog authors write “Let’s say — this is a hypothetical! — we want to learn if a new product experience that flips all of the boxart upside down in the TV UI is good for our members” and includes an image of all the boxart on the Netflix home screen upside down. 

## Assume devs are knowledgeable

In the post [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) on Fly.io, the author includes a sub-hed that reads “Let's Take Passwords Off The Table” and the section beneath is only two sentences long: 

>“It’s 2021 and so I don’t need to tell you that having your API pass a username and password through HTTP basic authentication is a bad idea. Your tokens should look large and random, whatever they are.” 

Writing like this signals to devs that the author is writing at their level. Though there’s some risk of excluding people who don’t know these facts, it pulls in readers who’d otherwise bounce, readers who’d think this post is for beginners if they saw things explained that they already knew. 

Similarly, in the post [How We Got to LiveView](https://fly.io/blog/how-we-got-to-liveview/) on Fly.io, the author asks the reader if they remember a fact from software development’s past:

>“Do you remember when Ruby on Rails was first released? I do. Rails was also a revolution. It hit on the idea of using an expressive language and a few well-chosen, unifying abstractions to drastically simplify development. It's hard to remember what CRUD app development was like before Rails, because the framework has been so influential.”

Again, devs who weren’t around or who weren’t near the Ruby on Rails release might feel alienated. But the risk is worth the gain because it proves–and this is something that needs to be proven multiple times in every post–that this post is by devs, for devs. 

That said, there’s a balance to strike. On the Uber Engineering blog, in the post [CRISP: Critical Path Analysis for Microservice Architectures](https://eng.uber.com/crisp-critical-path-analysis-for-microservice-architectures/), the article includes a background section with two, weighty sub-sections explaining information necessary to understand the rest of the post. We’ll have to understand our audience on an article-by-article basis to know when to explain and when to assume. 

You can elide some of this problem by including a list of concepts the reader will need to already understand to understand the post, as [Using Drizzle and React to write DApp frontends](https://blog.logrocket.com/using-drizzle-react-write-dapp-frontends/) on the LogRocket blog does. 

## Include plenty of code snippets, diagrams, graphs, and gifs

In a single post, [How We Got to LiveView](https://fly.io/blog/how-we-got-to-liveview/) on Fly.io, the author includes 12 graphic elements, including code snippets and gifs of UIs in action. In the post [Autonomous testing of services at scale](https://engineering.fb.com/2021/10/20/developer-tools/autonomous-testing/) on the Facebook Engineering blog, the author includes architectural diagrams. In the post [Superpack: Pushing the limits of compression in Facebook’s mobile apps](https://engineering.fb.com/2021/09/13/core-data/superpack/) on Facebook Engineering, the author includes bar graphs. 

## Move the development world forward with research

In the post [Kangaroo: A new flash cache optimized for tiny objects](https://engineering.fb.com/2021/10/26/core-data/kangaroo/), the Facebook engineering blog summarizes a paper that won Best Paper award at the 2021 Symposium on Operating Systems Principles (SOSP) conference (a paper the Facebook engineering team and Carnegie Mellon University partnered on). The post is, by nature, original; it’s hard to skip because the learnings will, theoretically, push the industry forward. 

## Present lessons learned

The post [Autonomous testing of services at scale on Facebook Engineering](https://engineering.fb.com/2021/10/20/developer-tools/autonomous-testing/) ends with the concluding sub-hed “Deployment and lessons learned.” This section, six paragraphs long, notably _doesn’t_ summarize the preceding post (like many conclusions do) but instead gathers up the lessons learned from the story retold in the post. The conclusion goes through these lessons point by point, e.g. “Second, we learned that…” and “Third, we noticed that…” and without any fluff. 

As another example, the post [Build AI-powered customer conversations in Google Maps and Search with Google's Business Messages](https://developers.googleblog.com/2021/11/build-ai-powered-customer-conversations.html) on the Google Developers blog ends with a “Final thoughts” section, which the author uses to summarize the preceding post and leave the reader with a departing CTA and a “I can’t wait to see what you build!” 

## Criticize erroneous approaches

One way to demonstrate your knowledge is to not only recommend one approach but to recommend _against_ another approach. In the post [A linear programming approach for optimizing features in ML models](https://engineering.fb.com/2021/07/29/data-infrastructure/linear-programming/) on Facebook Engineering, for instance, the author calls a different approach “naive”:

>“A naive solution would be to just start picking the features with the most gain (teal squares) until you are out of capacity. However, you might not be making the best use of your resources if you just prioritize the gain.”

Criticizing other approaches shows you know the world of possible solutions, not just the one you’re writing about. Criticism demonstrates, too, that you have the intelligence and wisdom to know many approaches but choose one. 

## When telling engineering stories, be transparent about struggles and results

In the post [Migrating Facebook to MySQL 8.0](https://engineering.fb.com/2021/07/22/data-infrastructure/mysql/) on Facebook Engineering, the author is transparent about their struggles, writing sentences like

* “Our last major version upgrade, to MySQL 5.6, took more than a year to roll out.”
* “Version 5.6 was approaching end of life…”
* “When we initially scoped out the project, it was clear that moving to 8.0 would be even more difficult than migrating to 5.6 or MyRocks.”
* “It took a couple of years to complete porting all of these features.”

And in the post [Improving HDFS I/O Utilization for Efficiency](https://eng.uber.com/improving-hdfs-i-o-utilization-for-efficiency/), Uber Engineering writes the good: “The Good: ~90% of the disks have an average IO utilization of less than 6%.” and the bad: “The Bad: the tail end of disk IO utilization can be as high as more than 15%, which is more than 5 times greater than the average disk IO utilization. Even though these disks are a fraction of the entire disk pool, they represent thousands of drives.”

And in the post [How we’re making Dropbox data centers 100% carbon neutral](https://dropbox.tech/infrastructure/making-dropbox-data-centers-carbon-neutral), Dropbox Tech uses the sub-hed “Results (so far)” as a place to both share their results and signal that there’s more to come. We shouldn’t pretend that any technical effort is one-and-done. 

## Enable readers to get started ASAP

Don’t wait for the end of a post to put a CTA. In the post [Build AI-powered customer conversations in Google Maps and Search with Google's Business Messages](https://developers.googleblog.com/2021/11/build-ai-powered-customer-conversations.html) on the Google Developers blog, the author writes an introductory section, a definition/explanation section, and then jumps into a “How do I get started?” section. 

Devs aren’t allergic to CTAs; they’re allergic to sales-y CTAs. If you’re giving them the option to play with something you just got them intrigued in, a CTA might be great to include. 

Also, make the CTAs dev-specific. In the post [Build your next video application on Cloudflare](https://blog.cloudflare.com/build-video-applications-cloudflare/) on the Cloudflare blog, the authors end with “Check out the source code and get started building your own video application today!” It links out to GitHub, not a landing page or other marketing material. 

## Highlight tools used

Tools are a signal that a blog post is relevant to a given dev. In the posts [Building Uber’s Fulfillment Platform for Planet-Scale using Google Cloud Spanner](https://eng.uber.com/building-ubers-fulfillment-platform/), the Uber Engineering blog authors cite two tools and in the post [Real-Time Exactly-Once Ad Event Processing with Apache Flink, Kafka, and Pinot](https://eng.uber.com/real-time-exactly-once-ad-event-processing/), they mention three. 

## Highlight job openings

A good technical post explains why and how a development effort was made. Doing so effectively serves multiple purposes, but an underrated one is attracting new hires. Demonstrating the fact that our team takes on complex, interesting technical challenges, and uses innovative or interesting or otherwise effective methods to address them, is attractive to potential applicants. 

In the post [Why we built a custom Rust library for Capture](https://dropbox.tech/application/why-we-built-a-custom-rust-library-for-capture), for example, Dropbox Tech ends the post with a “We’re hiring!” section and asks readers “Do you love Rust? Do you want to grow as an engineer? Dropbox is hiring!” 

## Build and share

Developers are builders. One great way to frame and structure a post is to build something and then write about why you built it and the experiences you had along the way. This type of post is also a great way to talk about your product in a non-salesy way. 

In the post [Build your next video application on Cloudflare](https://blog.cloudflare.com/build-video-applications-cloudflare/) on the Cloudflare blog, for example, the author explains that “Historically, building video applications has been very difficult” but then explains how “Cloudflare Stream abstracts all the difficult parts away, so you can build custom video and streaming applications easily.” 

This is all in the first paragraph, so there’s no sneakiness about this post being product-focused. Instead, the focus is a step-by-step explanation of how they used the product to do something devs too would like to do. 

## Take (and cite) inspiration from the dev community

In the post [Why don’t people like PHP?](https://blog.logrocket.com/why-dont-people-like-php/) on the LogRocket blog, the author highlights a Twitter thread that inspired the post. Citations like these prove we’re involved in the community and in the discourse, and validate that devs are asking questions we can answer. 

At the same time, if you’re wading into a contentious topic, be prepared for your readers to have opinions. In the same post, readers commented that it sounded like the author didn’t do their research, writing that “I don’t understand the point of this article or what it is you’re trying to accomplish. A LOT more research should have been done.”
