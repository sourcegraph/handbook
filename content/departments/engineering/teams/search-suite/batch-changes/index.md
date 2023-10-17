# Batch Changes

<img src="https://storage.googleapis.com/sourcegraph-assets/badgerhat.svg" width="300" height="300" align=right alt="Batchers Logo: badger in a silly hat">

## Strategy

- Vision, mission and strategy: [Batch Changes strategy](../../../../strategy-goals/strategy/batch-changes/index.md)
- [Key metrics](metrics.md)

## Contact

- For general questions or concerns, #discuss-code-search channel or @code-search-team on Slack.
- For engineering support requests, customer questions, or anything else, @batcher-support on Slack.
- @sourcegraph/batchers team or [team/batchers label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fbatchers) on GitHub.

## Stewardship of src-cli

The Batch Changes team is the current owner of [src-cli](https://github.com/sourcegraph/src-cli), due to the fact that most of the src-cli work in recent months has been related to Batch Changes. We do not expect to be the permanent owners of src-cli; when another team becomes the main contributor, we will transfer ownership to them.

## Onboarding

- As a Batch Changes teammate
  - [Onboarding](onboarding.md)
- As a customer support engineer (CSE) supporting Batch Changes
  - [Supporting Batch Changes](supporting-batch-changes.md)
- As a customer engineer (CE) supporting Batch Changes
  - [CE onboarding](ce-onboarding.md)
- As a sales team member
  - (private) AE training: [recording](https://drive.google.com/file/d/10oeyEvKNKk4RdyJUtvc-rXcgcmGhSrc2/view?usp=sharing), [slides](https://docs.google.com/presentation/d/1N50kk1N712lvsWI_BrGB4WH8LHnOVYrkxqvRS9WubuA/edit#slide=id.g7d2aea8729_0_0)
  - [Batch Changes positioning](go-to-market/index.md)

## Sourcegraphers using Batch Changes

This is a non-exhaustive list of Sourcegaphers use cases for Sourcegraph (either internally or on side-projects):

- Run TS-Morph-powered codemods on the frontend platform repository. [Spec](https://k8s.sgdev.org/batch-changes/executions/QmF0Y2hTcGVjOiI0eGNQQVVIaVoxZCI=/workspace/QmF0Y2hTcGVjV29ya3NwYWNlOjk0ODQwNA==) (private)
- Update PR templates across many repositories.
- Standardize versions of tools across many repositories by updating .tool-versions files. [Search](https://k8s.sgdev.org/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph+file:%5E%5C.tool-versions+shfmt&patternType=literal&case=yes) (private)
- Update CI configuration across several repositories. [Blog post](https://unknwon.io/posts/211110_sourcegraph_batch_changes/)
- Update CI to use system python ([spec](https://k8s.sgdev.org/organizations/sourcegraph/batch-changes/use-system-python-in-ci?tab=spec&visible=2))
- Tracking release changesets.
- Add test plans to all PR templates ([example changeset](https://github.com/sourcegraph/terraform-google-executors/pull/35))

## Related links

- [User-facing documentation](https://docs.sourcegraph.com/batch_changes)
- [Developer documentation](https://docs.sourcegraph.com/dev/background-information/batch_changes)
- [Batch Changes Drive Folder (private)](https://drive.google.com/drive/u/0/folders/18Sa_NpsVRvVV8MIvuXyoDEinpEf8fbGn)
- [Batch Changes go-to-market resources](go-to-market/index.md)

## Attribution

Our team logo was designed using resources from [Flaticon](https://www.flaticon.com/).
