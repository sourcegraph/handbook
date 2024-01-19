# Feature deprecation process

Sunsetting, or deprecation, of a product or feature is never an easy thing to do. By this point, you have put significant effort into designing, building, and talking with customers and shutting down may feel like losing a close friend. It is equally important to put the same thoughtfulness and care into deprecating the feature as you did building it. Further, we must live our values of dev-love and being direct and transparent extra when deprecating a feature.

This page walks through the most important things to think about when deprecating a feature or product.

## Principles for successful deprecation

Below are a number of principles which have led to success in past deprecating projects:

- Craft an honest message: When conveying the reasoning to customers, it is important that you are as honest as possible about the reasoning behind sunsetting.
- Ensure you’re speaking to the customer: Often times when creating the external-messaging for deprecating a feature, it can be easy to focus on internal-jargon or story. Make sure any message you share is speaking in customer language which they will clearly understand. While customers may not always be happy that we’re shutting down a feature, we want them to understand why.
- Ensure each task has a single DRI and that each DRI understands their role: During deprecating process, it is common for the message about what is happening and when it is happening to get lost. Thus, it is critical to ensure each task has a DRI and that person clearly understands the timeline and expectations of their role.
- Prefer gradual deprecations: We should strive to gradually remove functionality over multiple releases to provide time for our customers and internal teams to make plans and adjust. For example, in a first release we use a feature flag to disable functionality by default and, in a subsequent release we remove the functionality entirely. How we achieve this gradual deprecation should be assessed on a case by case basis depending on the usage, importance of the feature, impacts of removing and other factors.

## Choosing to deprecate a feature

You should first determine the potential impact of the feature deprecation:

- Are any users using the feature? Who are they? Is there another feature that also meets their needs?
- Are any Sourcegraph teams using the feature, or a subset of its code?
- Are any sales prospects specifically interested in the feature?

Be sure to talk to the the parties above and ensure you really understand the impact of the deprecation. If the answers to these questions confirm that deprecation is the best path forward, you should next document the deprecation.

## The process of deprecating a feature

Once the decision to deprecate a product or feature has been made, below is a recommend set of actions to ensure

1. **Determine if you need an exception process.** Some features may require extended migration periods to allow customers extended time to fully adopt a new solution.
2. **Craft the message & build the internal enablement document.** This document should include frequently asked questions, timelines, impacted customers, DRIs, and any other relevant information.
3. **Share the message internally.** You will know what channel is best but generally it is recommended to share in #eng-announce at a minimum. Please lean towards over-sharing in these cases to ensure everyone has a chance to see the message.
4. **Identify a technical DRI to document the technical steps required.** Ideally, this is the person who writes the plan, will be the one executing on the plan the day of the deprecating.
5. **Segment out your customers.** In many cases, shutting down a feature will impact certain users differently and each cohort of users may require slightly different messaging or CTAs. This is important to ensure each user feels comfortable with next steps.
6. **Share with customers at minimum 30-days in advance.** It is recommended to start with a broad email to those impacted and a publicly-facing blog post to outline the full story (examples below). It is important to think critically about who this email comes from (PM, CE, AE, etc) to ensure the message resonates most with the recipient.
7. **Remind customers twice.** 7 days and 1 day before. This is good practice to ensure that customers hear the message and are following any migration steps required.
8. **Execute the deprecation.**
9. **Post-mortem.** Following the wind down, make sure to update this page with learnings to improve this process in the future.

## Documenting a feature's deprecation

You should then create a blog post to publish when we deprecate the feature. The blog post should contain:

- Why we're deprecating the feature.
- The deprecation timeline.
- Workarounds for the feature's users, if relevant.

We document this in a blog post because blog posts are publicly accessible, timestamped, and easy to send directly to customers or prospects.

## Other Considerations

Are you working closely alongside your PMM? They will help craft the message in a way that builds up Sourcegraph.

Are there legal impacts of the decision? Ask in #legal.

Will deprecating your feature impact other Sourcegraph features? Ask in #product.

Does deprecating your feature require a release? If yes, build your timelines around the release schedule.

## Example Content

### Deprecation Blog

Below are past examples of deprecation blog-posts: - [Sunsetting Sourcegraph.com private code beta](https://about.sourcegraph.com/blog/single-tenant-cloud)

### Announcement Email

Subject: Sunestting the personal code beta on Sourcegraph.com

> Hi [name],
>
> Over the last year, Sourcegraph has invested in building a managed version of our code intelligence platform for our customers. We did this in 2 ways: first, we developed a single-tenant, managed version of Sourcegraph, and second, we significantly expanded Sourcegraph.com.
>
> After experimentation and great customer feedback, we have decided that a single-tenant version of Sourcegraph is the right solution for serving our customers. We are increasing our focus on this solution as the future of Sourcegraph Cloud, and as a result, we will also be returning Sourcegraph.com to its original purpose: searching open source code. You can read more about the changes in our blog.

> This decision means we’ll be sunsetting some beta features on Sourcegraph.com, including personal repository syncing. On August 1, all clones of personal repositories (public and private) will be removed from the service. If you have any personal repositories currently synced to the service, they will no longer appear in your Sourcegraph account after August 1.
>
> Sourcegraph.com will continue to host an index of over 2M open source repositories so that you can freely search the open source universe. If you’re interested in Sourcegraph for your personal code or for your company’s code, you can also run a local installation of Sourcegraph for free, or get in touch with our team to learn more about single-tenant Sourcegraph Cloud.
>
> Thank you for being a Sourcegraph.com user!
>
> Ryan Phillips
> Product Manager, Cloud

### 7- and 1-day Reminder Email

Subject: Sunsetting the personal code beta in 1 week

> Hi [name],
>
> This is a reminder that the personal code beta on Sourcegraph.com will end in 1 week, on Monday, August 1. All clones of personal repositories (public and private) will be removed from the service on that date. You can read more about the change on our blog.
>
> Sourcegraph.com will continue to be a place to search open source code for free. You will still be able to access your Sourcegraph.com account to create Notebooks, code monitors, and search contexts based on open source code for free.
>
> If you’d like to search your personal repositories, you can also run a local installation of Sourcegraph for free for up to 10 users.
>
> Thank you for participating in the beta and being a Sourcegraph.com user!

> Ryan Phillips
> Product Manager, Cloud
