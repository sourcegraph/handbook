# Sourcegraph App FAQ

## What is the Sourcegraph app?

We launched the first version of the Sourcegraph app at Starship, in March 2023. That version of the app allowed users to download the app (via the macOS dmg installer or through `brew`/`dpkg` in the command line), sync their remote repos and local files, and explore Sourcegraph for free quickly and easily on their local machines. It supports:

- 1 code host connection
- Unlimited local files and remote repos
- Search
- Batch changes (unlimited batch changes, limited to 10 changesets each)
- Code insights (limited to 2 insights)
- Notebooks
- Precise code intelligence
- Extensions
- Sourcegraph API

In Q2, the Sourcegraph app will become _the Cody app_. We'll lay the groundwork for a future vision in which Cody (app + extension) supercharges IDEs like VS Code and becomes the most obvious way for devs to get fast, reliable precise code intelligence at scale, across all their code (both local and remote), with Cody AI workflows to boot. For more on this vision, see [vision: Sourcegraph app becomes the Cody app](https://docs.google.com/document/d/1M8XKHR2sfJcwIm9ss8tjzproI4Tk68fLcqpGyotBZao/edit#heading=h.euplf3k940l2).

## Why are we building it?

The app is a critical part of our effort to become more product led because it gets individual devs up an running with a Cody-supported Sourcegraph instance quickly, easily, and for free. We know that Sourcegraph and Cody are most powerful when used on private code, and we’ve learned that there’s a lot of red tape that prevents people from doing that through Cloud trials and that our self-hosted options can be cumbersome. The app solves both of those problems. See the [MSEM](https://docs.google.com/document/d/1B5RXpMB3GbE44BgQh1gEH2QwT2EX_eVLw6Opw3y4WHY/edit#heading=h.z9fim61o5c7s).

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

- Number of downloads
- Number of trial starts (any deployment)
- CTA activity (e.g. talk to sales)

These are our first priorities, but we also want to keep track of retention and high-level product usage.

## How can I try it out?

[Read the installation docs.](https://docs.sourcegraph.com/app)

## Where should I share feedback?

Sourcegraphers should join our #ask-app and #dogfood-app channels in Slack. For anyone else trying it out, please join our [Discord](https://discord.com/invite/s2qDtYGnAE) or follow us on [Twitter](https://twitter.com/sourcegraph). We’d love to hear from you!
