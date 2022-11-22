### Staying Current on Recently Resolved Tickets

As an Support Engineer, it is helpful to understand current trends in our resolved tickets database. Doing so can help heighten your awareness of current issues that may come up in your own tickets.

## Code Insights is your friend

At Sourcegraph, we can leverage code insights to stay up to date on recently resolved tickets.

For example, some Ses have found it helpful to create a monitor that sends an email each time a new search result becomes available in the resolved tickets database. An added benefit of enabling this feature for yourself is that it will help you gain knowledge of the code insights user interface.

To enable this for yourself, [add a code monitor](https://docs.sourcegraph.com/code_monitoring/quickstart) to track the following query:

`repo:^github\.com/sourcegraph/support-tools-internal$@HEAD file:^resolved-tickets type:diff patternType:literal`
