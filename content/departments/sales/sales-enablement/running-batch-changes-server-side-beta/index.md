# Running batch changes server-side is moving to beta

## Quicklinks

- Enablement session recording (TODO)
- Demo video
- [Release post](https://github.com/sourcegraph/about/pull/5471)

## Summary

[Running batch changes server-side](https://docs.sourcegraph.com/batch_changes/explanations/server_side#limitations) is moving to beta. This feature was initially built to enable large customers to run batch changes on very large amounts of repositories. It also comes with UX improvements that will allow developers to iterate on batch changes more quickly. This feature requires installing executors, which comes with additional resource requirements and maintenance. Executors are like CI agents, that Sourcegraph uses to offload expensive tasks. [Executors](https://docs.sourcegraph.com/admin/executors) also power code intelligence [auto-indexing](https://docs.sourcegraph.com/code_intelligence/explanations/auto_indexing). Running batch changes server-side is available both for self-hosted and managed instances customers, as long as customers are able to deploy and host the executors themselves. We do not manage executors on behalf of managed instance customers at this point.

## What is running batch changes server-side?

Batch Changes is a way to apply and track code changes to many repositories and codehosts. Batch Changes users develop a code rewrite script, and Batch Changes takes care of applying it on many repos, open changesets, and provide a tracking dashboard.

A key step in this workflow today is that users run their batch change locally thanks to a local command line interface (`src-cli`). For large amounts of repositories or resource-intensive code rewrites, running `src-cli` locally could take an impractical amount of time and be brittle.

![](https://storage.googleapis.com/sourcegraph-assets/enablement-ssbc-beta/local-run.png)

For example, a complex Java refactor could take 15 min to run per repository. Running it on a 1000 repositories would take 250 hours, which is an unreasonable amount of time.

[Running batch changes server-side (beta)](https://docs.sourcegraph.com/batch_changes/explanations/server_side) removes the need for running that CLI locally to create the batch changes. Instead, the batch change will be ran on one or multiple separate compute instance.

![](https://storage.googleapis.com/sourcegraph-assets/enablement-ssbc-beta/server-side-run.png)

This feature requires to setup [executors](https://docs.sourcegraph.com/admin/executors), which Sourcegraph will use to offload expensive tasks. The best way to think about executors is that they're much like CI agents. Executors can also be used to run Code Intelligence [auto-indexing](https://docs.sourcegraph.com/code_intelligence/how-to/enable_auto_indexing) (experimental).

Watch the session recording for a quick demo.

## What are the benefits?

This feature mostly benefits end users of Batch Changes.

- **Main benefit: run large-scale or resource intensive batch changes**. That will mostly benefit Enterprise or Strategic customers.
  - Offload running batch changes, to avoid clogging a local machine.
  - Run large batch changes faster by distributing them across an autoscaled pool of compute instances.
  - For example, a complex Java refactor could take 15 min to run per repository. Running it on a 1000 repositories would take 250 hours, which is an unreasonable amount of time. Distributing that to 20 executors would result in a much more reasonable runtime of 12h30.
- **Shorter iterations, better development experience**. Get a better debugging experience, with logs being streamed directly into Sourcegraph. Fire and forget: start your batch change run, do something else on your local machine, and get back to it later.
- **For admins:** Trade-off a little more setup for the Sourcegraph admin, against less setup for users (no local `src-cli`). Many end users get errors due to their local docker setup, slowing them down and requiring their Sourcegraph admin or Developer Experience team to step in. Running batch changes server-side removes that failure mode and let admins provide a better experience to their Sourcegraph users and lighten support load.

## What customers are most likely to benefit?

- Large customers with 1,000s of repositories benefit most, because running Batch Changes at their scale is impractical without server-side runs.
- All Batch Changes users benefit from the improved debugging experience, streaming logs, and not having to rely on a local setup.

## What plan or pricing tier is this part of?

This is a free feature for all the customers of the Batch Changes add-on.

## Why is it moving to Beta? Are there limitations?

- It is moving to Beta after we got positive feedback from a few early adopters during the `Experimental` phase.
- Limitations are listed out in the [Running batch changes server-side](https://docs.sourcegraph.com/batch_changes/explanations/server_side#limitations) docs.
- The main limitation to keep in mind is that we don't offer managed executors. Customers on managed instances can enable this feature, but they will need to self-host executors, and connect them to their manage instance.

## FAQ
