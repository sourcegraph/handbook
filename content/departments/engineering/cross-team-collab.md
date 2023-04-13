# Cross-team collaboration

Sometimes, ideas (and even code) for something your team owns comes from other teams or departments at Sourcegraph. That's a good thing because everyone can contribute to the innovation and success of the product we all use, and the more we do of that sort of thing, the more of a flywheel we're generating for improvements and that is one of the real advantages of being developers that make products for other developers.

That said, if the collaboration part is not handled well, you can end up in situations where we create duplicative product features, or waste time building things that eventually will need to be reworked, or even shut down.

## Clear ownership

To avoid this, as an open core company we can look to open source to see how this kind of situation is handled:

1. There should always be a clear Engineering department `maintainer team` who makes the final decision of whether to accept a suggestion/code from another team. You can refer to the [ownership chart](dev/process/engineering_ownership.md) to determine which team the maintainer is, and they are the first group you should go to to discuss your idea. In cases where the question isn't directly dependent on or modifying existing code, you should refer to the "Vision" sections of [team strategy pages](../../strategy-goals/strategy/index.md#team-strategy-pages) to determine if there is already a `maintaining team` for features related to the job-to-be-done you are pursuing.
2. Similarly, if you're submitting code, they own the merge decision for changes to areas they maintain.
3. When it comes to go-to-market, they also determine pricing and how it fits in with their product area.

## Making changes to another product area

The earlier you engage with the maintaining team, the more likely you are to avoid a situation where you've gotten ahead of yourself and might need to redo work: unlike open source, there is no forking the project to make your own version. In situations where the ownership is unclear, it might represent a new category, or things are otherwise fuzzy, you should post in #product for help.

It's also important to communicate when something that looks like a project involving other teams is not yet prioritized, to avoid making other teams concerned you are not following this process and that they need to proactively get involved. For example, if you were to create an early prototype for user research, if you share that prototype in public or internal places, you should note the purpose of the prototype and acknowledge you'll reach out to the maintainer team if or when the project gets prioritized.

Through these simple rules of engagement we can foster innovation at the company, avoid turf wars and shipping the org chart, take advantage of the fact that we're a tool "by engineers, for engineers" and welcome everyone's contributions to improve the product while avoiding negative outcomes.

## Identifying and prioritizing platforms

Sometimes a team builds a new platform feature. Recent examples include executors or compute. As a PM, EM or engineer building what could be a new platform, you should proactively sollicit feedback from other teams on what the platform could be used for. This will allow other teams to start thinking about what the new capability could mean for their area, and inform your own decisions. See [Open-ended compute directions](https://docs.google.com/document/d/1daJwnJGmOGbekx7wK98cfMcv0lzH-cvuw7pDdIOU3dQ/edit) for an example of how to do this well.

## Contributions from the public

We're an open core company, so we can also get code, ideas, and bug reports from outside parties. The same guidance applies for their contributions as well.
