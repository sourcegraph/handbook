# FY22Q2 OKR Plan

In support of our product/engineering Q2 objective to _provide a solid organizational and developer experience foundation to scale team 2x this year_, one way we will measure our success in achieving this goal is for the **Customer Support team to maintain 100% support issue resolution within 8 days while only requiring help (filing a #rfh Github issue) on 15% (measured during last month of quarter)**. To accomplish this, we will…

1. ✅ Create a tool available in our docs and to customers with commands we regularly use in troubleshooting and what the commands help identify (available in our [tools page](./support-tools.md#troubleshooting))
2. 🚫 (started in Q2 and still in progress; will continue/complete in Q3) Create scripts customers can run that pull together a file with the information we need most often in troubleshooting (values, logs, etc) so that we can ask for one thing and get the majority (if not all) the information we need while troubleshooting
3. ✅ Identify test environments we need and either secure access or create command line app to enter needed parameters and create the environment needed (available on our [tools page](./support-tools.md#test-environments))
4. 🚫 (we completed 30 updates in Q2 and will have a similar task for Q3) Make at least 50 doc updates/additions based on tickets that the team resolves (where a doc would have helped resolve it faster)
5. ✅ Complete how-to troubleshooting documentation for at least 5 of the most common issues we see from some combination of issues resulting from distribution, core app, search, and/or extensibility ([dirty database](https://docs.sourcegraph.com/admin/how-to/dirty_database),[gather Kubernetes logs](https://github.com/sourcegraph/sourcegraph/pull/21901), [troubleshooting extensions](https://github.com/sourcegraph/sourcegraph/pull/21720), [monitoring guide](https://github.com/sourcegraph/sourcegraph/pull/20999), [pod evictions](https://github.com/sourcegraph/sourcegraph/pull/21374))
6. ✅ Publish “what we test + recommend” document (aka “what we support)
7. ✅ Receive crash course in at least 3 of these topics (available on our [enablement page](enablement/index.md))
   1. Linking the basics of Sourcegraph to debugging.
   2. Something like starting with the basics of Sourcegraph, going into components of the product, then a high level intro of the more technical stuff on how to troubleshoot and debug.
   3. Anything that would give us a solid grasp of where to get started with a variety of issues, walkthroughs of various tools we can use (or have customers use), like how to use Grafana to troubleshoot customer issues like xyz…
   4. Common alerts/errors and where to go next
      How to begin troubleshooting a slow search…
   5. A walkthrough of networking principles for services in Sourcegraph. - Lectures on the behavior and code structure of each microservice in Sourcegraph
   6. The hidden configs/stream search that the customers know about but not on docs, like tls.external.
   7. A quick rundown of the best way to write queries and structural search
   8. Anything Kubernetes
8. ✅ Receive comprehensive feedback on 25 cases, identifying what you are doing well and any suggestions for growth
9. 🚫 (not started in Q2 and will be on the Q3 list) Receive crash course in how to navigate difficult conversations with customers (delivering hard to hear news, keeping calls productive and on time, etc)
10. ✅ Update onboarding to good enough v2 for next new hires

## Progress update

- As of 2021-06-30: We have maintained 100% support issue resolution within 5.3 days while only requiring help (filing a #rfh Github issue) on 16%

##Final summary
We maintained 100% support issue resolution in 6 days while only requiring help (filing a #rfh Github issue) on 20% overall and 13% as measured in July only ... as a result of the work done above!
