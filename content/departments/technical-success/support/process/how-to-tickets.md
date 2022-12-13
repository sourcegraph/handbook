# Engaging Engineering

As an Support Engineer, you will be confronted with tickets that require you to seek help from engineering. You are encouraged to do so! There are two ways to do so, largely depending on the nature of the ticket.

### "How To" Tickets

For "how-to" tickets, you are not required to create a Request for help (RFH) in GitHub[^1]. Instead, follow the procedure below.

1. As you normally would, check the [docs](https://docs.sourcegraph.com), and [ticket database](https://github.com/sourcegraph/support-tools-internal/tree/main/resolved-tickets) (searchable on `cse-k8s`) for possible solutions.
2. If no solution is found, create a new post in the #customer-support-internal channel in Slack. Start the post with "HTQ:" so that it is searchable in the future.
3. If you still don't have a solution after doing so, create a new post in #ask-engineering in slack. Again, make sure you start the post with "HTQ:" to make it more searchable.
4. If you are not getting a response, raise this to leadership, and they will help move the request forward.
5. Lastly, once a solution is provided and the ticket is closed,
6. include the Slack thread in your summary for future SE lookup
7. update relevant pages on [docs](https://docs.sourcegraph.com) for future customer questions

### All Other Tickets

RFH's should be reserved for tickets that are more complex in nature. More times than not, this is intuitive, but in case you find yourself unsure of whether an issue warrants an RFH, here are a few good markers:

1. Is it likely this will require deep research/work from an engineering team?
2. Is it likely that multiple log files or grafana screen shots will be shared throughout the troubleshooting process?
3. Is this issue a P1?
4. Does this customer require a high touch?

If the answer to any one of these questions is "yes", it's probably a good idea to file an RFH.

[^1]: While RFH's are a valuable tool when dealing with complex issues, they introduce overhead and complexity that isn't necessary for "How-To" questions. Furthermore, they limit visibility, and collaboration between teams that happens in public, shared channels.
