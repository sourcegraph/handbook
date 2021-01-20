# 20-minute comprehensive demo script

Historically used by the sales team as the [10 Step Demo](https://docs.google.com/document/d/1P6nzAGfpTNysIi2FIcFY7mHX__q0qZ8955NDnWylF4I/edit?usp=sharing), and also the foundation of the Sourcegraph 101 webinar. Within your first 2 weeks, you should become comfortable with this demo flow, and be able to present a 20-minute version of it. When you’re comfortable, present it at the Demo workshop held on Fridays for the CE team. 

Remember: this is intended as a starting point; you’re not expected to deliver a word-for-word version of the script. This is intended to be a helpful guiding framework for you as you begin to develop your flow. 

To run this demo, you need:

- A Sourcegraph account connected to Github
- The Codecov integration installed
- The Open in Editor extension installed
- The Sourcegraph repo cloned locally so you can open it in the editor
- The Sourcegraph browser extension enabled and pointed at the Sourcegraph environment you’ll be demoing in
- At least one campaign configured on demo.sourcegraph.com
- At least one monitor configured on demo.souircegraph.com

**Note**: Depending on the nature of the demo and the amount of time you have, you may want to chop the Campaigns, Insights, and Monitoring content off and either shorten the demo or discuss in more detail how [Precise Code Intelligence](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence) works.

## Flow

### Intros
1. Introduce yourself and your role as the technical point of contact during the proof of concept phase and if they become a customer.
1. Give a high-level outline of what the demo will cover: our search product in-depth; our extensions; and our campaigns, monitoring, and insights tools briefly.
1. Mention that if anyone has questions about the last three, they can schedule a more in-depth meeting at a later date.
1. Mention that you will be pausing for questions throughout and leave space for questions at the end.

### Search
1. Open sourcegraph.com/search. (In the future, we will use demo.sourcegraph.com, but currently most CEs use sourcegraph.com.) 
1. Give a two-sentence summary of what Sourcegraph is. Highlight that it’s a Google-like experience and that this is an idea that’s already quite popular at Google and Facebook—our team aims to bring that same experience to everyone else. Not only do we help you find what you’re looking for, but we also help you better understand it.
1. Frame the demo as being oriented around building a new auth flow in the Sourcegraph codebase—you're roleplaying as a new engineer who isn't super familiar with this code and hasn't built a new auth flow before. Start with a broad search for `new auth provider` (literal search).
1. Explain the results you’re seeing—they’re coming from a variety of different repos, in different languages, because the Sourcegraph search experience is intended to be broad (unlike pulling a repo down locally and searching within it).
1. Add `repo:^github\.com/sourcegraph/sourcegraph$` to your query. Explain the repo filters below the search box (we auto-suggest repos based on the results) and how it’s useful for when you as an engineer don’t know where the code you’re looking for is.
1. Enable the regex search option and explain it and its [fuzzy matching](https://docs.sourcegraph.com/code_search/reference/queries#regular-expression-search) on whitespace (both because this is a useful feature and because if you don’t enable it you won’t get any results). 
1. Highlight that you now have a much smaller set of results. 
1. From there, discuss the auto-generated filters beneath the search bar. Demonstrate that you can click `lang:go` to limit to just Go files, which our backend is written in. Delete that and show that you can also type `lang:go` and have it auto-populate with suggestions. 
1. Once you have those results, highlight the auto-suggested filter to remove test files (`-file:_test`). Apply it.
1. At this point, scroll through the results to find `authz.go`. Open that file by clicking on the highlighted line number, and discuss how you can navigate directly to a particular line of code.
1. Pause and ask if there are questions.
1. From there, hover over the `NewAuthzProviders` function, and highlight the code intelligence features (you can see the definition and the structure of the function).
1. Click on Go to definition, and show that it has navigated you to the function definition. Highlight that though we are searching one repo, this would work cross-repo as well.
1. Discuss structural search. If you knew the name of the function, for example, you could have run a structural search to find it instead. Run a structural search for `repo:^github\.com/sourcegraph/sourcegraph lang:go func NewAuthzProviders(...) (...) {...}` instead. Highlight that unlike regexes, it's multiline by default.
1. Open one of the results of the structural search tog et back to where you were. Enable git blame for the entire file. Discuss what the integration shows, and highlight that you can click into an associated commit and view that in Sourcegraph. Show that. 
1. Navigate back to the `authz` file, and show the history feature. Highlight that this is useful to see how stable code is—is this buggy code being actively rewritten, or is this pretty stable? 
1. Click on one of the PRs in the history view. Highlight the “view in code host” button, and click it to open the PR in Github.
1. From Github, highlight that Sourcegraph’s browser extension allows you as a developer to view hover tool tips in the code host, allowing for informed code review, even if the change is large. 
1. Find a function, hover over it in Github, and show that “go to definition” keeps you in Github.
1. From there, highlight that the browser extension allows you to search using the `src` shortcut in the browser bar.
1. Pause to ask if there are any questions.

### Extensions
1. Return to Sourcegraph, and highlight the Open In Editor extension. Open the file in your editor to show that that looks like.
1. Return to Sourcegraph, and show the Codecov integration; highlight that it shows code coverage in-app and links to that coverage on Codecov itself. 
1. Open the Extensions menu, and highlight the large number of available extensions, and that there is a generic Open in Editor extension. Mention that customers can write their own extensions, as well.
1. Pause for questions.

### Campaigns
1. Open demo.sourcegraph.com, and introduce the Campaigns feature. Give a two sentence description highlighting that it allows you to make changes and automate opening PRs/Merge Requests across multiple repos using a spec file.
1. Show the main page for one of your campaigns, highlighting that it allows you to view all of the requests in one place.
1. Pause for questions.

### Insights and Monitoring
1. From there, navigate to https://k8s.sgdev.org/; highlight that the next two features are experimental.
1. Open Insights, and give a two-sentence description. Highlight that it uses the power of Sourcegraph’s search to show you the number of results over time for a particular query or set of queries, so you can track progress over time. “If you can search it, you can see it.”
1. Pause for questions.
1. Navigate back to demo.sourcegraph.com, and open the monitoring page. Give a two-sentence description of the feature, highlighting that it allows you to be alerted when new results for a particular query become available in your code base; highlight the utility for security concerns (not using an old library, for example).
1. Create a new monitor, and quickly walk through setting it up. The contents are up to you; anything works so long as you can quickly build it on the fly.
1. Pause and ask for final questions.

### Outro
1. Share your name again, and kick it back to the AE.
