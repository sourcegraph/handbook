# Sourcegraph App

## What is App?

Sourcegraph App is a way to quickly and easily run Sourcegraph on your local machine. We’re building iteratively, but our vision is to reach something like feature parity with what Sourcegraph offers on Cloud today. We say “something like” because we’re still thinking through this, but we know some things will make more sense for App than others, and we want to build a natural onramp to Cloud trials.

The MVP for Starship (March 23, 2023) is to have App running smoothly for anyone who wants to try it out, the ability to sync remote and local repos, and our key metrics in place (see below).

We’re working closely with Marketing and Design to polish our positioning, learn as much as we can from users, and make sure we prioritize investment in areas that will give them the most value. Soon we’ll have a standalone, externally-facing marketing page that we can use to start sharing App widely and get early feedback.

## Why are we building it?

Sourcegraph App is the engine powering our [Growth strategy](../../../../../content/strategy-goals/strategy/growth-team/index.md). We want to get Sourcegraph into devs’ hands easily so that they can get to “wow” quickly. We know that Sourcegraph is most powerful when you can use it on private code, and we’ve learned that there’s a lot of red tape that prevents people from doing that through Cloud trials and that our self-hosted options can be cumbersome. App solves both of those problems.

The user journey we’re building toward is:
- A dev finds out about Sourcegraph (see [Marketing plan FY24Q1](https://docs.google.com/presentation/d/1yDJvLJunOl7ltFagadJhBk8es6KxxNyinMQSBLveYFA/edit))
- They use Sourcegraph App locally on their code
- They upgrade to a Cloud trial (or self-hosted, if necessary) so that they can use Sourcegraph with their team

## How is it different from searching and browsing in my IDE?

IDEs only let you search and browse the code that you have locally on your computer. Unless you want to clone and keep updating every repo you care about, you’re probably going to have to toggle between your IDE and your code host (or ask someone else for help) when you’re trying to get answers to questions you have about your code.

Even if you really only work in a handful of repos and you keep them updated locally, Sourcegraph offers IDE-quality navigation with much more powerful search. You can search across diffs, commits, and branches, and tailor your queries to find exactly what you’re looking for.

## What pains will App solve for devs?

Because you can’t search and browse remote code in your IDE, devs wind up using sub-par code host search, or writing hacky scripts for syncing a bunch of remote repos to their local machine. Those can be messy and are a pain to update, and they likely don’t have the kind of search and code navigation features that Sourcegraph provides. App changes that by offering an easier, more reliable, and much more feature-complete way to search and browse both local and remote code.

## What metrics are we using to measure usage and track success?

Key metrics for App are:
Number of downloads
Number of trial starts (any deployment)
CTA activity (e.g. talk to sales)

These are our first priorities, but we also want to keep track of retention and high-level product usage.

## I know we’re iterating quickly on App. What can it do today?

Today the Sourcegraph App lets you quickly start searching and browsing remote code on your local machine. We’re still working on the ability to browse/search local files, so for now you can think of it as an easy way to try Sourcegraph on your local machine.

## How can I try it out?

[README.md](https://gist.github.com/slimsag/dc860b17ecca155013b419691a77e396)

## Where should I share feedback?

Sourcegraphers should join our #app channel in Slack. For anyone else trying it out, please join our [Discord](https://discord.com/invite/s2qDtYGnAE) or follow us on [Twitter](https://twitter.com/sourcegraph). We’d love to hear from you!
