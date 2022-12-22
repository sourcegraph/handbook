# PRFAQ Process Tips and Tricks

## Quick Tips

Consider this the TL;DR; with full details outlined somewhere in this page.

- Try to keep the PR section no longer than 2 pages. FAQs can be longer.
- Projects should be ambitious and inspire others to join the project.
- PRFAQs should cover work that is at least 3 weeks for 1 engineer.
- Try to avoid duplicate proposals or proposals about work already on some team’s roadmap. It’s a good idea to quickly survey what’s already on the roadmap before raising a proposal.
- Here's are two examples of good PR-FAQ: [Job Fair](https://docs.google.com/document/d/1X9j_wkKlCE9xTwRWefZaOE8OCeisQx6p6gzZTe9aQsI/edit#) and [Sourcergaph Own](https://docs.google.com/document/d/1NeokrfnZq7iLzRCIwvzZ9vhD6O3xYCv4trmu24w7m-E/edit#).

## Glossary

- PRFAQ – Press Release / FAQ, a [popular way](https://www.optimizeforoutcomes.com/the-prfaq/) to define projects by working backwards from the customer; there are many [resources online](https://medium.com/intrico-io/strategy-tool-amazons-pr-faq-72b3e49aa167) with [templates](https://medium.com/agileinsider/press-releases-for-product-managers-everything-you-need-to-know-942485961e31) and discussions.
- Roadmap – Our [WIP Product vision & direction document](https://docs.google.com/document/d/1tzfLimS4et3SnC07ZS7ncSeojsEV6UJ5ppvS47WGgg8/edit), which is finalized and is now being used to generate Roadmap projects, by ensuring that our “green-lit” projects have sufficient coverage of our Roadmap goals.
- Roadmap Project - a project that has been green-lit as something we will be committing to delivering and resourcing for success. Also known as a Job Board project; see below.
- Job Board – conceptually, a spreadsheet that tracks all greenlit projects, each of which has gone through a PRFAQ review and prioritization into the project list. Managed by Ryan Phillips. The first iteration, which takes us through March Starship, will be finalized by Dec 20th.
- Job Fair – ([PRFAQ](https://docs.google.com/document/d/1X9j_wkKlCE9xTwRWefZaOE8OCeisQx6p6gzZTe9aQsI/edit#)) This will get its own document soon, but is the new way of defining project work that forces everything through a lens of business prioritization and alignment with our Roadmap. All projects receive KPIs for estimated impact to ARR/DAU, and even internal/technical/maintenance work can be fitted into the Job Fair framework with very little overhead.

## Scope of PRFAQs

At this time, though it may change as we learn more, the rough threshold for deciding whether to use a PRFAQ is about 3 weeks of work for 1 developer. Anything shorter than that is initiated and tracked through regular GH issues, Slack, and our other operational mechanisms.

PRFAQs are required for all new project work for any technical project longer than roughly 2-4 weeks of dev time, and that project work extends into 2023.

## FAQ

Use the FAQ to further educate the reader about what is changing and what we’re getting. Feel free to include time estimates in there (“How long will this take?”) and other useful information.

We prefer engineering scoping estimates for projects before we can fully greenlight them, but for some we can defer the scoping until January. Just scope them roughly, for now, to t-shirt sizes.

### Backend/invisible/cleanup work

- For non-customer-facing work, such as “I want to replace the XYZ engine/library/layer”, if it’s longer than a month of work in 2023, then it has to go through the PRFAQ process.
  - Head of Engineering is the business sponsor and will assign biz impact.
  - This is a way we can show the business the importance of the work we sponsor.
- Easiest way to get backend work approved is to tie it to a greenlit project by making it a prerequisite. If you can convince me, then I’ll greenlight it.
- There’s a fixed 20% budget of ALL Eng resources (i.e. 16 people at any time) allocated to “Infrastructure”, meaning they’re just doing the highest-priority tech cleanup.
  - This work will be in the Job Board under the umbrella project of Infrastructure.
  - My current recommendation is to write an RFC for any work you want in this bucket that takes longer than about a week, and we’ll prioritize it against all other open work (cross-functionally).

### Umbrella Projects

It is a useful abstraction to create “umbrella” PRFAQs and projects that contain multiple PRFAQ-sized subprojects.

Example: Precise Everywhere is an umbrella project that encompasses (so far) three subprojects: PageRank for everyone, Precise UI, and Precise for Everyone. Each of these will wind up with its own Tech Lead once it’s greenlit.

The subprojects do not need to be fixed, and umbrellas may get new projects over time. Job Fair is flexible and continuous.

### Ambition

I’ve found that people uniformly aren’t thinking big enough in their PRFAQ announcements. Most engineers are thinking in terms of engineering projects, but I want you to think broadly in terms of the data we have, the product features, the Roadmap, and the biggest customer needs, and figure out how your work can fit into a much grander picture.

Let’s say you are trying to pitch a big cleanup of legacy code that will increase performance (and maintainability) of part of the system by an order of magnitude. In this case, your announcement should be something like, “Customers can now do XYZ three times faster than before with Super Speed Boost Pack!” where XYZ is some meaningful customer activity that really will speed up noticeably.

I picked a broad generic name, Super Speed Boost Pack, which gives me broad license to stuff things in there that contribute to the overall improvement in user experience. But we know it’s in that category, so we know when (for instance) we need to pause the work in favor of something higher priority.

So choose big ambitious themes that will take you all the way through 2023.

It’s OK if there’s some overlap in the PRFAQs. In fact, we have overlap today in the work we’re doing. This system is meant to be lightweight and flexible. If there are projects that can be merged or share resources, that’s great too.
