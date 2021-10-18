# Editorial process

This page explains how team members can contribute to Sourcegraph's blog, including pitching ideas and writing posts. The [Editorial team processes](#editorial-team-processes) section covers team-specific processes for planning and organizing work related to the blog.

### Related handbook pages

- [Editorial strategy](editorial-strategy.md)
- [Blog handbook](../creating_blog_posts.md)

Writing is a process, and thus, our editorial process is designed to aid the writer in producing their best work while staying on track with the publishing schedule. Pitches and first drafts can vary greatly in format and completeness. Some people like to create an outline for their first draft, others prefer to just start writing. The more you write, the more familiar you will get with your own writing process. What’s important is that you write multiple drafts and get feedback on them. This is how ideas turn into fully formed, thoughtful articles.

It’s important to have a publishing schedule so that we can deliver relevant content to our audience at relevant times. The editorial team strategically manages our publishing calendar to optimize article views and engagement. For example, if you are writing an article on Go and GopherCon is two months away, we can time the release of your article to coincide with other activity around the conference. This has the potential to bring more attention and readers to your post while the topic is trending.

## Guidelines for contributing to Sourcegraph’s blog

Please follow these guidelines when contributing to Sourcegraph’s blog.

First, decide how you want to contribute:

### Write the draft yourself

If you have an original article idea that you want to write, start by submitting your pitch via this [Asana form](https://form.asana.com/?k=gU7tdLoh3TyyrSa-w0-pCQ&d=7195383522959) so we can triage appropriately. If you prefer to write your first draft and submit that in place of a pitch, please go ahead! It may still take some time for us to review and schedule your post

**OR**

### We interview you

If you are short on time or less comfortable writing, a member of the content team can interview you and use the transcript to start an outline for you to work from. Please mention if you want to go this route when you fill out your [form](https://form.asana.com/?k=gU7tdLoh3TyyrSa-w0-pCQ&d=7195383522959).

**OR**

### Just submit an idea

If you have an idea to submit but you don't want to write it, you can still submit the idea via the [Asana form](https://form.asana.com/?k=gU7tdLoh3TyyrSa-w0-pCQ&d=7195383522959), just make a note that you are not proposing to write the post yourself.

### Once you have submitted a pitch

1. The Editorial team triages pitches weekly.
1. An editor will be assigned and will give you feedback on your idea. At this point we may suggest an alternative channel or content format for your idea (guide/case study/social post/etc.)
1. If the pitch is approved by you and your editor, next we'll decide on a timeline together.
1. First draft is submitted by the first draft deadline.
1. An editor and/or peer reviewer is completed by the first draft review deadline. Please reference the [peer review template](https://docs.google.com/document/d/1KHFMIGmbmDPsE8EYPAf4DPD6kek_1dRnKf49wG5foU0/edit) when conducting your review. You do not need to answer every reflection question. This is a guide to help you provide useful and actionable feedback to the author.
1. A second draft is submitted. This may be your final draft depending on its polish and completeness. If there are major outstanding structural and/or mechanical issues, your editor may request a third draft.
1. The editor does a final copyedit.
1. Once the final draft is approved by you and your editor, it will be staged and/or scheduled for release.

### What happens if I want to write something on my own, on my own time for Sourcegraph’s blog?

Once you’re ready for an editor’s review, submit your draft in place of a pitch and follow the article submission guidelines. An editor will reach out to you with feedback, requested changes, and publishing options. Please note that immediate publishing may not be available. If you would like to publish on your own schedule, [Medium](https://medium.com/) is a great option for self-publishing.

## What to write about for the Sourcegraph blog

Some questions to keep in mind when deciding what to write about in your blog post:

- **What's in it for the reader?** One of our [Editorial principles](#editorial-principles) is to have an audience-first mentality. What do we expect them to gain from reading the post?
- **Would someone share this?** If you didn't work for Sourcegraph, would you be interested in the post? Would you click on it on Hacker News or share it with your peers?

If you can answer both of these questions confidently, you're on your way to a great post!

### What makes a great engineering post?

Below are some common elements and themes found in the posts that tend to draw the most traffic and get the most attention.

- Debugging stories: Take the reader on a winding journey with a satisfying conclusion. These often feel like a treasure hunt, with some twists and red herrings along the way.
- Stories of building, scaling, implementing, and improving: A behind-the-scenes look at how the team approached a technical challenge. These are especially compelling if covering how we built or improved on a popular feature.
- Hot takes: It's not advisable to be controversial just for the sake of it, but taking an opinionated, contrary stance on a popular topic, _backed by evidence and experience_, will usually get people interested (more examples [below](#themes)).
- Knowledge-sharing: Readers should be able to learn something from our blog that they can take away and apply to their own work.

#### Examples of great engineering posts

Below are some examples of the types of blog post that are usually popular (from our blog and beyond):

- [An ex-Googler's guide to dev tools](https://about.sourcegraph.com/blog/ex-googler-guide-dev-tools/): This was one of our top blog posts of all time, and even now it still gets regular traffic. What worked?
  - It gives practical, actionable advice for engineers experiencing a common challenge after leaving Google (or any tech company that builds its own internal tools).
  - It's written from the point of view of someone who has experienced this pain! This helps to build trust with readers.
  - It's not explictly selling Sourcegraph. Sure, code search is mentioned and the author is up front about being the CTO of a code search company, but it's not shoehorned in and there's far more to the blog post than promoting Sourcegraph.
  - Even though the post is long, the author sets expectations at the beginning about what readers will get from the post, and breaks the content up into sections with subheadings, numbers, and bullets, to make it more digestible than a wall of text.
- [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
- [Optimizing a code intelligence commit graph](https://about.sourcegraph.com/blog/optimizing-a-code-intel-commit-graph/)
- [Scaling monorepo maintenance](https://github.blog/2021-04-29-scaling-monorepo-maintenance/)
- [When AWS Autoscale Doesn’t](https://segment.com/blog/when-aws-autoscale-doesn-t/)
- [The story of one latency spike](https://blog.cloudflare.com/the-story-of-one-latency-spike/)

### Themes

Dan Luu summarized some [common themes from his own blog](http://danluu.com/programming-blogs/) which could help spark some ideas for you too:

- [This thing that's often considered easy is harder than you might think](http://danluu.com/file-consistency/)
- [This thing that's often considered hard is easier than you might think](http://danluu.com/edit-binary/)
- [This obvious fact is not obvious at all](http://danluu.com/dunning-kruger/)
- [Humans are human](http://danluu.com/postmortem-lessons/): humans make mistakes, [and systems must be designed to account for that](http://danluu.com/google-sre-book/)
- [Computers will have faults](http://danluu.com/postmortem-lessons/), [and systems must be designed to account for that](http://danluu.com/limplock/)
- [Is it just me](http://danluu.com/broken-builds/), [or is stuff really broken?](http://danluu.com/everything-is-broken/)

### Brainstorm board

There are a lot of ideas on our [Miro board](https://miro.com/app/board/o9J_l9gAUM4=/). Feel free to use it for inspiration or let us know if you'd like to write about one of the topics! (Note: You may be asked to request access to the board if you don't have Miro set up with your Sourcegraph email address yet.)

## Editorial team processes

This section covers how the editorial team plans, organizes, and executes work on the Sourcegraph blog.

### Project management

We work in three main Asana projects:

- [FY22 Content Operations](https://app.asana.com/0/1199959077348208/1199959077348208) – this is where most of our planning and organization happens
- [Marketing Content Calendar](https://app.asana.com/0/1200972415267795/1200972415267795) – this is where we surface planned content to the rest of the marketing org
- [Content Ideas](https://app.asana.com/0/1200484301601757/1200484301601757) – this is where we capture ideas for future blog posts and where we triage pitches. Once we decide to actively work on something, we add tasks from here to the Content Operations project.

- As soon as you intend to work on a blog post, either create a blog post task using the template, or add an existing task to the [FY22 Content Operations](https://app.asana.com/0/1199959077348208/1199959077348208) project.
- Fill out all necessary fields and complete any tasks already taken care of.
- Make sure there is a date or a date range applied to the parent task, and add the task to the [Marketing Content Calendar](https://app.asana.com/0/1200972415267795/1200972415267795) project in the relevant section, so our teammates can see what's coming up.
- All subtasks should have due dates and assignees.

#### Illustrations

We can commission a custom illustration or animation for blog post hero images. There is an Asana task for this as part of the blog post template. When planning a blog post, you should consider whether a custom image is needed and some potential themes or ideas about how we can represent the story. If collaborating with other team members (for example, you interviewed people for the story or someone else actually wrote it) it's best to ask them if they have ideas about how to illustrate the post.

At a minimum, we can share a summary and/or the first draft of the post in the illustration task description. When we're ready for a designer to get started, ping Fabiana on the task and let her know when we're planning to publish the post.

#### Social promotion

There is an Asana task for social promotion of new blog posts in the blog post task template. You need to add this to the [Social Media Requests: Organic](https://app.asana.com/0/1200960005454857/1200960005454857) project, as a subtask of the monthly blog posts task.

At a minimum, we can share the first draft of the post in the description of the social promotion task. This will help Kristen draft initial posts about the blog post. Ideally, we can help her further with suggested copy or other ideas about how to promote (graphic assets we will have, possible polls or other opportunities for engagement).

By suggesting Twitter copy we have a better chance of the post being promoted on the day of publishing.

After publishing the blog post, there is a task for the editor to share the live URL in #social-media-action. This will alert Kristen that she can proceed with social promotion.
