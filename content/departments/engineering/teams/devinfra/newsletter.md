# 🗞 Developer experience newsletter

Welcome to the developer experience newsletter! This is a newsletter prepared by the [DevInfra team](./index.md) to highlight contributions and updates to Sourcegraph's developer experience, which is [an area the DevInfra team focuses on but is owned by everyone](../../../../strategy-goals/strategy/devinfra/index.md#guiding-principles).

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #discuss-dev-infra or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

To learn more about components of Sourcegraph's developer experience, check out the [developer documentation](https://docs.sourcegraph.com/dev).

> [!NOTE] For authors, refer to [this guide](./processes.md#newsletter) for preparing a newsletter.

## Jan 9th, 2022

Welcome to another iteration of the [Developer Experience newsletter](./newsletter.md)!
As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

Contributors of the changes mentioned in this newsletter (in alphabetical order):
_Coury Clark, David Veszelovszki, Eric Fritz, Indradhanush Gupta, Jean-Hadrien Chabran, Keegan Smith, Kelli Rockwell, Marek Zaluski, Noah Santschi-Cooney, Quinn Slack, Thorsten Ball, Valery Bugakov, William Bezuidenhout._

### Site-Admin

**[Records outbound requests and adds an UI to browse them](https://github.com/sourcegraph/sourcegraph/pull/44286)** to ease understanding what is happening under the hood.

**[Records slow GraphQL requests and andds an UI to browse them](https://github.com/sourcegraph/sourcegraph/pull/45063)** to passively discover quick wins and strange behaviour.

### SG goodies

**[Migrator: prints more details on failure](https://github.com/sourcegraph/sourcegraph/pull/45711)**:

Before

```
❌ failed to run migration for schema "frontend": failed to apply migration 1670600028:

-- LOADS OF SQL HERE
: ERROR: duplicate key value violates unique constraint "executor_secret_access_logs_pkey" (SQLSTATE 23505)
```

After

```
❌ failed to run migration for schema "frontend": failed to apply migration 1670600028:

-- LOADS OF SQL HERE
: ERROR: duplicate key value violates unique constraint "executor_secret_access_logs_pkey" (SQLSTATE 23505)
DETAIL: Key (id)=(420) already exists.
HINT: This up-migration attempts to re-insert executor secret access logs from a backup table that would have lost information due to the associated down-migration changing the table schema. In doing so, a unique violation exception occurred and will have to be resolved manually. The backed up access logs are stored in the executor_secret_access_logs_machineuser_bak_1670600028 table.
```

**[Migrator: logs when concurrent indexes exist](https://github.com/sourcegraph/sourcegraph/pull/44164)**

**[New command, `sg db delete-test-dbs`](https://github.com/sourcegraph/sourcegraph/pull/43197)** to drop databases created by the `dbtest` package.

**[New command `sg release cve-check $handbook_trivy_url`](https://github.com/sourcegraph/sourcegraph/pull/44585)** to automate a step in the release process, to compare CVEs found in a build to a set of CVEs whihc have been approved by the security team.

**[New command `sg db update-user-external-services`](https://github.com/sourcegraph/sourcegraph/pull/44701)** to add new external services from the CLI (useful locally and in scripts).

**[New flag, `sg rfc --private list`](https://github.com/sourcegraph/sourcegraph/pull/42760)** to select private or public RFCs. Also fixes an issue where clashing RFC numbers across private and public would only open the same one.

**[Added a pidfile mechanism to `sg`](https://github.com/sourcegraph/sourcegraph/pull/42366)** to warn the user that an instance already exists with the same `start` arguments.

**[Skip `docker pull` on `syntax-highlighter` if `OFFLINE=true`](https://github.com/sourcegraph/sourcegraph/pull/45161)**, which removes a breaking step if you're working offline.

**[Fixed ambiguous ✅ coming from backgroud tasks](https://github.com/sourcegraph/sourcegraph/pull/42830)** that suggested to the user that their command succeeded even if they didn't because it was printed last.

**[Removed output messing up with the spinner during `dev-private` update check](https://github.com/sourcegraph/sourcegraph/pull/42607)**

**[Fixed `sg` backgrounding when executing shell commands on Linux](https://github.com/sourcegraph/sourcegraph/pull/42031)**.

**[Added a `--format` flag to `sg ci preview`](https://github.com/sourcegraph/sourcegraph/pull/41440)** to preview the raw output in either `json` or `yaml`. Very useful when you're debugging a pipeline issue and want to preview what will be sent to Buildkite.

**[Fixed a bug where additional checks were not called](https://github.com/sourcegraph/sourcegraph/pull/45349)**.

### CI

**[Fix Go tests failures not appearing in the annotations](https://github.com/sourcegraph/sourcegraph/pull/46207)**

**Re-enabled the previously disabled Go linters**: they were previously disabled because they flaked and printed incorrect output. [Root problem causing the errors has been fixed](https://github.com/sourcegraph/sourcegraph/pull/45259).

- [`depguard`](https://github.com/sourcegraph/sourcegraph/pull/45270)
- [`unparam`](https://github.com/sourcegraph/sourcegraph/pull/45548)
- [`nolintlint` and `statickcheck SA1019`](https://github.com/sourcegraph/sourcegraph/pull/45847)
- [`unused`](https://github.com/sourcegraph/sourcegraph/pull/46039)
- All errors with the exception of `unused` have been manually fixed or flagged as exceptions.
- And for `unused`, the found issues are now displayed in _warning_ annotations. Feel free to fix them at your own pace!

![preview of buildkite warnings](https://user-images.githubusercontent.com/10151/210813634-96cc9849-96f9-483e-a059-c7014234b330.png)

**[Reworked Go tests outputs to make them more readable](https://github.com/sourcegraph/sourcegraph/pull/45629)** See for yourself:

Before:
![example of go test outputs, before](https://user-images.githubusercontent.com/10151/207385205-b1240687-9752-457f-a836-d3f6e78c48db.png)

After:
![example of go test outputs, after](https://user-images.githubusercontent.com/10151/207385260-6df1d954-b467-4aa4-a7f3-291d13f504cd.png)

**[Failing e2e job now store logs from _all_ containers as artefacts](https://github.com/sourcegraph/sourcegraph/pull/45243)** instead of just a the `frontend` application.

**[Persist `golangci-lint` cache folder across builds](https://github.com/sourcegraph/sourcegraph/pull/46043)** which enables to get back to previous timing even though we have re-enabled two linters and are running the last one separately.

**[Always create a branch for external commits being build with `sg ci build`](https://github.com/sourcegraph/sourcegraph/pull/44484)** to fix a security issue and avoid jumpscares when seeing a build on the `main` branch in Buildkite, while it's not yet merged on GitHub.

**[Fixed duplicated jobs being printed in Slack](https://github.com/sourcegraph/sourcegraph/pull/44472)**.

**[Fixed `sg lint format` not being run under certain conditions](https://github.com/sourcegraph/sourcegraph/pull/44341)**, which translated into formatting failures sneaking in the `main` branch.

### Local dev enviroment

**[Cached blobstore building](https://github.com/sourcegraph/sourcegraph/pull/45065)**: avoid rebuilding a docker image on every start.

**[Added an installer script for building `universal-ctags` in local](https://github.com/sourcegraph/sourcegraph/pull/45198)**, avoiding to used the dockerized version. The docker version will be called unless you ran the installer manually.

### Observability

**[An OTEL dashboard is now generated](https://github.com/sourcegraph/sourcegraph/pull/45009)**, allowing to monitor span emission/drops across any instance.

**[Reduced the number of spans emitted by SQL requests](https://github.com/sourcegraph/sourcegraph/pull/44798)**.

**[Updated docs for _tail sampling_](https://github.com/sourcegraph/sourcegraph/pull/44658)**.

**[Upgraded `otel-collector` to `v0.65`](https://github.com/sourcegraph/sourcegraph/pull/44543)**, which allowed us to start using the `filter processor` to selectively send traces to different services depending on certain attributes. We're currently using this processor to send UI traces to a different dataset on Honeycomb!

**[Deprecate use of Grafana cloud for tracing](https://github.com/sourcegraph/sourcegraph/issues/43935) as well as [for exporting logs in CI](https://github.com/sourcegraph/sourcegraph/issues/43934)**

### Frontend

**[`graphql-codegen` has been updated](https://github.com/sourcegraph/sourcegraph/pull/45648)** which comes with better errors and performance.

**[Fixed root path on render.com previews](https://github.com/sourcegraph/sourcegraph/pull/43191)**, as it wasntt redirecting to `/search` like dotcom and printed an error instead.

**[Upgraded `percy/cli` to `1.16`](https://github.com/sourcegraph/sourcegraph/pull/45171)** as we were ten versions behind.

**[Updated license finder to `7.1.0`](https://github.com/sourcegraph/sourcegraph/pull/45148)**.

### Backend

**[`goroutine` package improvement](https://github.com/sourcegraph/sourcegraph/pull/45305)**: unifies how to construct them, with predermined error logging.

**[Introduced `SRC_LOG_SCOPE_LEVEL`](https://github.com/sourcegraph/log/pull/46)** to allow operators to override the log level for specific loggers and their children. It is particularly useful to turn up the level for a component you're currently working on.

**[Added a new `FIFOList` structure to `rcache`](https://github.com/sourcegraph/sourcegraph/pull/44938)** to cache a _set_ of objects with a max capacity and deletes the oldest items that are overflowing.

**[Bumped Go to 1.19.3](https://github.com/sourcegraph/sourcegraph/pull/43747)**.

## Sept 19th, 2022

Welcome to another iteration of the [Developer Experience newsletter](./newsletter.md)!
As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

### Tracing with OpenTelemetry

OpenTelemetry is now the default tracing export mechanism in Sourcegraph.

This means that traces now export to an [OpenTelemetry Collector](https://docs.sourcegraph.com/admin/observability/opentelemetry) instance, which can then easily be configured to export data to a variety of backends - for example, in [s2](https://sourcegraph.sourcegraph.com) we are [currently exploring exporting to both Honeycomb, Google Cloud Traces, and Jaeger](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-managed@aa1ff34e9446c38c4376ecc29b3d75f4b4ae4676/-/blob/sg/red/otel-collector/config.yaml) to assess the available options.

OpenTracing API calls are bridged to OpenTelemetry automatically, though we strongly recommend that everyone migrate to OpenTelemetry APIs (either `internal/trace` or `go.opentelemetry.io/otel`), which brings better API ergonomics and improved usage of `context.Context`. We've added a linter that forbids new imports of OpenTracing APIs, and added deprecation notices on internal APIs that should no longer be used.

Additionally, the web app can now be instrumented with OpenTelemetry as well, with traces being sent to the frontend service which proxies it to the deployed OpenTelemetry Collector.

To get started with testing out OpenTelemetry locally, refer to our [OpenTelemetry development docs](https://docs.sourcegraph.com/dev/how-to/opentelemetry_local_dev) and refer to our [tracing for site admins guidance](https://docs.sourcegraph.com/admin/observability/tracing).

If you are interested in learning more about OpenTelemetry in general and the specifics of the engineering work required to make this happen, check out [this recording of a DevInfra team Q&A about OpenTelemetry](https://drive.google.com/drive/folders/1z_Uf_Stp3frDKB_UXFtenbQJdYB4LikO)!

### Frontend news

**`esbuild` for faster frontend builds**: Shoutout to Nick Snyder who took it upon himself to get `esbuild` in a usable state for Sourcegraph. It doesn't work for everything yet but a few people have reported a markable improvement in `sg start` startup time! You can enable it by running `DEV_WEB_BUILDER=esbuild sg start`. For more information on `esbuild` please see [the following docs.](https://docs.sourcegraph.com/dev/background-information/web/build#esbuild)

**Documentation for analyzing the bundlesize check failure**: With more contributions focused on the core workflow improvements, the Frontend Platform team noticed an increased number of [bundlesize check](https://docs.sourcegraph.com/dev/how-to/testing#bundlesize) [failures](https://github.com/sourcegraph/sourcegraph/runs/8094204910), and often the reason for it is not apparent. Valery added [a step-by-step guide for debugging root causes](https://docs.sourcegraph.com/dev/how-to/testing#analyzing-the-bundlesize-check-failure) which should help teams to triage this failure. The Frontend Platform team will be looking into automating these steps entirely next quarter!

### `sg` goodies

**Finding builds or logs by commit**: Ever wanted to look at the build of a particular commit? Not in the mood to go through all the pages of Buildkite? You don't have to anymore! With `sg ci status` you can now pass it a `--commit` flag and it will do all the detective work for you. `sg ci logs` also accepts the `--commit` flag so you can now easily look at the logs of a build for a particular commit too!

**Build annotations, in your terminal!**: Ever wanted to check the status of your build in your terminal, but couldn't see those nice little dialogues (annotations) at the top your build showing that test that failed and other helpful links? Well those days are gone! When you check the status of your build with `sg ci status` it will now also print any annotation that is present on your build!

**Inspect main branch tags with `sg ops inspect-tag`**: We've added a new subcommand named `inspect-tag` which allows you to inspect main branch tags. For example you can now inspect the image with `sg ops inspect-tag index.docker.io/sourcegraph/cadvisor:159625_2022-07-11_225c8ae162cc@sha256:foobar` or get the build number with `sg ops inspect-tag -p build 159625_2022-07-11_225c8ae162cc`. For more examples and other options see `sg ops inspect-tag --help`.

**Update images in Docker compose manifests with `sg ops update-images`**: `update-images` has been updated and can now update docker compose manifests with `sg ops update-images -k compose`. With `compose` entering the fold, `sg ops update-images` is now able to update images in three different formats namely `k8s`, `helm` and `compose`.

**Commands in `sg.config.overwrite.yml` should no longer cause as much headache**: Thorsten has fixed an issue that many have felt the pain of! We've all added a custom command in `sg.config.overwrite.yml` only for `go run generate` to come along and ruin our dreams. Thorsten, having been bitten by this one too many times, landed a fix for this by adding a flag `-disable-overwrite` to sg which is passed to sg when `go run generate` runs to generate the `reference.md` file. Due to the nature of the fix, there is nothing for you to do!

**Multi user Auth testing just got a whole lot easier**: Keegan recently added a `http-header` auth-proxy that creates a few users and exposes each user on a different port locally. By accessing Sourcegraph through these ports you are **authenticated as that user**. To use it run `go run dev/internal/cmd/auth-proxy-http-header.go`. Words don't do it justice so below is some output of it in action! For more information on how authentication happens [please see the docs](https://docs.sourcegraph.com/admin/auth#http-authentication-proxies).

```bash
go run auth-proxy-http-header.go
https://docs.sourcegraph.com/admin/auth#http-authentication-proxies

  "auth.providers": [
    {
      "type": "http-header",
      "usernameHeader": "X-Forwarded-User",
      "emailHeader": "X-Forwarded-Email"
    }
  ]

Visit http://127.0.0.1:10810 for william william@sourcegraph.com
Visit http://127.0.0.1:10811 for user1 william+user1@sourcegraph.com
Visit http://127.0.0.1:10812 for user2 william+user2@sourcegraph.com
Visit http://127.0.0.1:10813 for user3 william+user3@sourcegraph.com
Visit http://127.0.0.1:10814 for user4 william+user4@sourcegraph.com
Visit http://127.0.0.1:10815 for user5 william+user5@sourcegraph.com
```

**A complete set of commands to run web application Puppeteer tests**: Have you ever wondered how to debug a CI client flake locally? Always unsure of what environment variables to set to get things right? `sg` got your back! Valery updated respective commands, which now link directly [to the up-to-date documentation](https://docs.sourcegraph.com/dev/how-to/testing#client-integration-tests):

```bash
sg test web-e2e
sg test web-regression
sg test web-integration
sg test web-integration:debug PATH_TO_THE_TEST_FILE_TO_DEBUG
```

### CI improvements

**Go to the Grafana logs of your build straight from your build:** Previously, if you wanted to see the logs of your build you had to navigate to http://sourcegraph.grafana.net and wield the dark arts of creating a LogQL yourself to query the logs. We've updated annotations on builds to have an additional link named "View Grafana logs" which will take you directly to Grafana with a prefilled LogQL query for your particular build. One small step to helping you diagnose build failures in your faster!

Flaky tests happen, which is why the docs have [a specific section](https://docs.sourcegraph.com/dev/background-information/ci#flakes) about how to deal with those. In a nutshell, disable them on sight and notify the ownning team so they can fix those. We want to say thank you those who took a few minutes out of their day to improve the CI experience for everyone else. Special thanks to Thorsten Ball who disabled the most of them on his own! And thanks to Camden Cheek, Alex Ostrikov who are following closely.

**All builds on the main branch are now faster by about 6 to 8 minutes**. This is achieved by [caching the client bundle build](https://github.com/sourcegraph/sourcegraph/pull/38940) in the job that builds the _server_ container that is later used to run e2e tests.

![builds duration heatmap over july](https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/devx/newsletter/july2022/heatmap_duration.png)

The caching mechanism is disabled on releases, to be 100% sure we are shipping the right client bundle. When the caching is used, an annotation such as the one below is displayed, making it explicit from when the client bundle was cached, so we can easily see if it should have been invalidated. Those two extra precautions are taken because the caching is done externally and do not rely on any client tooling, therefore invalidation depends on how careful we are at not missing files that could change the build result.

![annotation showing a client bundle cache hit](https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/devx/newsletter/july2022/client_bundle_cache.png)

**Stability improvement for frontend steps**: Npm has became increasingly unstable over the past weeks, which caused an increase in client flakes when fetching packages that our code depends on. The CI now wraps `yarn install` in [a retrying loop](https://github.com/sourcegraph/sourcegraph/pull/39454) to mitigate those. Oldest trick in the book!

**Build notifications:** We've rolled out new build notifications! What was wrong with the old ones you might ask? Well, they just took you to the build and you were on your own from then on. With the new build notifications, we show what job failed on your build! We provide a link for you to go straight to the jobs output! If that wasn't enough, we've also added a way for you to see all the logs of your build in Grafana. All of this from the comfort of Slack. We've aimed to make the notifications more actionable and since we're now in control of the notifications we aim to make more improvements.

![slack notification for a build failure](https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/devx/newsletter/july2022/build_tracker.png)

**More annotations!**: We've added a custom Mocha reporter which will upon any E2E and QA test failures generate a annotation on Buildkite with the relevant failures. Now you don't have to doom scroll through a bunch of lines just to find the failures!
The default buildkite failures Slack messages are not the most actionnable ones, so we have decided to replace them with our in-house notifications which we have total control on:

### S2 news

**Sentry frontend and backend errors** are now available in Sentry on the [S2 project](https://sentry.io/organizations/sourcegraph/projects/s2/?issuesType=all&project=6583153). It has a much lower volume than dotcom and reflects more accurately what we can expect to see in our customers deployments. Therefore, it's a prime candidate to monitor your own domain and to create alerts for issues relevant to your team, thanks to the scope attribute. You can view the [loom recording](https://www.loom.com/share/f2010789f6884e72932f6e6a9b091558) to refresh your memory about logging scopes.

**Continuous deployments are live**: every hour, S2 is updated with the latest known green commit from the `main` branch.

## Insights

Now that [S2](https://sourcegraph.sourcegraph.com) is our default instance, all [DevInfra insights](https://sourcegraph.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjoxfQ==) have been ported over there. While a few of those relate mostly to what the DevInfra team is doing (for example the [logging migration](https://sourcegraph.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjoxMH0=)) others insights maybe quite interesting to take a look at, such at [the insight tracking the evolution of tests in the codebase](https://sourcegraph.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjoxMX0=).

![Testing code insight](https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/devx/newsletter/july2022/test_insights.png)

## June 24, 2022

Welcome to another iteration of the [Developer Experience newsletter](./newsletter.md)!
As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

### New guides

**Logging**: We've made some updates to our logging guidance around [the new logging library](https://github.com/sourcegraph/log) to include more concrete suggestions and examples around:

- How to use scopes
- Creating sub-loggers (e.g. those with traces and fields)
- Writing log messages

You can find the new docs in [How to add logging](https://docs.sourcegraph.com/dev/how-to/add_logging)!

**Investigating flakes in CI**: Have you ever merged a PR, got pinged in #buildkite-main, and thought "gosh this test failure has nothing to do with my changes 😭"? Well with a few quick steps you can easily determine if you've been hit with a frequently flaking test that should be disabled ASAP, and contribute to keeping our pipelines healthy! Check out our new Loom demo to learn more:

[![how to find out if a CI failure is a recurring flake](https://cdn.loom.com/sessions/thumbnails/58cedf44d44c45a292f650ddd3547337-1655933919745-with-play.gif)](https://www.loom.com/share/58cedf44d44c45a292f650ddd3547337)

More details are available in the handbook: [Grafana Cloud - CI logs](../../dev/tools/observability/dotcom.md#ci-logs), and if you have any questions please reach out in #discuss-dev-infra!

### Observability features

**Sentry errors**: Errors are now automatically reported to Sentry from warning-level and above logs entries from [`sourcegraph/log` loggers](https://docs.sourcegraph.com/dev/how-to/add_logging) that include an error field, which can be added using the `log.Error` or `log.NamedError` field constructors, for example:

```go
logger.Error("something terrible happened", log.Error(err))
```

The reported Sentry event includes helpful information like the logger scope, log message, log fields, and more!
Check out this demo to see it in action:

[![Sentry demo](https://cdn.loom.com/sessions/thumbnails/f2010789f6884e72932f6e6a9b091558-with-play.gif)](https://www.loom.com/share/f2010789f6884e72932f6e6a9b091558)

Because this raises the amount of errors being reported, we're experimenting with sampling the errors, which both prevents to fill our quota too quickly and also ensure that we're not spending too much resources on the reporting itself.

Under the hood, it uses a new "log sinks" mechanism that can easily be extended to accomodate new backends in the future - you can learn more about it in the [package docs](https://pkg.go.dev/github.com/sourcegraph/log/internal/sinkcores/sentrycore)!
As a byproduct, the codebase doesn't have anymore any explicit reference to Sentry, apart from the optional Sentry sink itself.

**DataDog sunset**: Note that the DataDog trial is being ended, and the plan is to [sunset DataDog integrations within the codebase](https://github.com/sourcegraph/sourcegraph/pull/37673).

### CLA bot automation

The process of ensuring an external contributor has signed Sourcegraph's Contributor License Agreement (CLA) is now fully automated. Once a contributor has signed [the CLA form](https://docs.google.com/forms/d/e/1FAIpQLSfxy_9WJptKeTmTsrQ6C-5JeiVs4i1pUiahzgLZta1t6Nls-g/viewform), their provided GitHub handle will now automatically be synchronized to the list of approved users.

You can learn more in the [`clabot-config` repository](https://github.com/sourcegraph/clabot-config) and the [accepting external contributions guide](https://docs.sourcegraph.com/dev/contributing/accepting_contribution).

### `sg` goodies

**`sg [cmd...] --feedback`**: Love (or hate) `sg`? Want to make a suggestion or found that a command was acting strange? In addition to the `--feedback` flag on _all_ commands, we've also added a `feedback` subcommand enabling you to give us feedback right from the comfort of your terminal! When you opt to provide feedback a new discussion will be created in the [Developer Infrastructure category on the Sourcegraph repository](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience).

**Generated `sg` documentation**: Because maintaining documentation is always hard, what's better than automation to make sure its stays up to date? The [`sg` reference](https://docs.sourcegraph.com/dev/background-information/sg/reference) is now automatically generated.

**`sg setup` and `sg lint` rewrite**: We have rewritten `sg lint` and `sg setup` to use a shared internal framework that can be used to easily and flexibly build powerful "check-and-fix" tasks. This enables features like:

- `sg setup --check` to quickly generate a report of what you have set up
- `sg setup --fix` to fix all issues with your dev setup in one go
- `sg lint --fix` to automatically try and fix your lint issues (only supported by a few linters at the moment, but more can easily be added!)
- Continuous integration testing for `sg setup`

**`dev/schemadoc`** has been removed and is replaced by `sg migration ...` commands. Example: `sg migration describe --db codeintel --format=psql --force --out internal/database/schema.codeintel.md` to generate the schema for the `codeintel` db thanks to [#35905](https://github.com/sourcegraph/sourcegraph/pull/35905).

**`./dev/generate.sh`** has been deprecated in favour of of **`sg generate go`** (and its alias `sg gen go` for teammates in a hurry).

**sg generate go** now displays a progress bar to indicate its status and is also noticeably faster thanks to [35807](https://github.com/sourcegraph/sourcegraph/pull/35807), [#36742](https://github.com/sourcegraph/sourcegraph/pull/36742) and [#36681](https://github.com/sourcegraph/sourcegraph/pull/36681).

**Named migrations files**: `sg migration` now supports migrations with migration names embedded in the migration's directory, and all newly created migrations from `sg migration add` will now have migration names included, which will make the `migrations` directory a bit easier to browser. [#37244](https://github.com/sourcegraph/sourcegraph/issues/37244)

**Readability improvements**: `sg start` logs are now easier to read, as the command names text is now justified. To ensure it's still readable in small terminals, a few of them have be shortened and the `enterprise-` prefix is now implicit whereas `oss-` prefix has been introduced.

![](https://user-images.githubusercontent.com/23356519/174646815-843dbbf0-c4e2-49a1-b046-cc3e75f047f7.png)

**`sg` analytics**: The DevInfra team is experimenting with collecting analytics on `sg` usage and issues! For now this is a manual process, so if you'd like to contribute you data to our explorations, you can submit your data with `sg analytics submit [username]`, or check out what data has been collected with `sg analytics view`!

**ADRs ❤️ `sg`**: You will soon be able to list, search, view, and create [Architecture Decision Records](https://docs.sourcegraph.com/dev/adr/1650968652-record-architecture-decisions) directly from `sg`! [#37718](https://github.com/sourcegraph/sourcegraph/pull/37718)

### CI improvements

- The linter job that runs on every build is now inferring which linter task needs to run depending on the changes (except `main` where it runs everything), saving some time on pull requests thanks to [#35331](https://github.com/sourcegraph/sourcegraph/pull/35331).
- When you retry the `sg lint` step, the `verbose` flag will be added allowing you to see more of what is going on.
- You can now force the run of tests that are executed when your PR is _ready for review_ by specifying in your commit message `[ready-for-review]`. Gone are the days of flipping your PR between draft and ready for review!

### Tech Radar

You can browse this month [tech-radar](https://radar.thoughtworks.com/?sheetId=https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/doc/dev/radar/tech-radar.csv) to get a bird's-eye view of Sourcegraph tech stack! Check this [guide](https://docs.sourcegraph.com/dev/how-to/maintain-tech-radar) to learn about how updating it with your team initiatives.

### DevOps and DevInfra team merge

As you may have heard, the Cloud DevOps team is splitting up into a new Cloud team, with the remaining teammates merging into the DevInfra team - so we're happy to welcome 3 new teammates to the DevInfra team!

A consequence of this change will be a shift in ownership of various domains - this is still a work in progress, but you can see an overview [in the Cloud DevOps handoff plan](https://docs.google.com/document/d/1byFDrIMzPS4Dp9jzQhLcS-RpvZV-gPmc2cpSfaxVBII/edit#heading=h.e8f9rqf2cnkm). Broadly speaking, the main changes are that the DevInfra team will soon own and lead initatives on the following fronts:

- observability (including internal tooling and external services like Grafana Cloud, Sentry, etc)
- the operation of sourcegraph.com
- misc. ops-related support

We will have more to share soon as the dust settles!

## May 20, 2022

Welcome to another iteration of the [Developer Experience newsletter](./newsletter.md)!
It has been quite a while since the last newsletter, so this edition will focus on more recent changes and highlights.
As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

### Logs, logs, logs 🗃️

A brand new logging package is now available in [`github.com/sourcegraph/log`](https://sourcegraph.com/github.com/sourcegraph/log). This library outputs a [OpenTelemetry-compliant log format](https://docs.sourcegraph.com/admin/observability/logs#opentelemetry) in JSON mode, paving the way towards enabling customers to more easily ingest and leverage logs, and also offers a performant, strongly-typed interface for providing log fields. The library also encodes a number of best practices:

1. No global loggers - it is no longer possible to instantiate a logger at compile time, and users should hold their own references to loggers, so that fields can be attached and log output can be more useful with additional context, and pass Logger instances to components as required.
2. Loggers are attached to scopes - this helps orient log entries within a larger codebase. For example, when creating a GitHub V3 client for making a auth provider to make requests, one might use `log.Scoped("provider.github.v3", "provider github client")`.

This library will also be the target of many observability improvements going forward, such as [automated error reporting](https://github.com/sourcegraph/sourcegraph/issues/33240#issuecomment-1129104807), [improved test output](https://github.com/sourcegraph/sourcegraph/pull/35430), and more.
To learn more, check out the new [How to add logging](https://docs.sourcegraph.com/dev/how-to/add_logging) guide.

We've also extended the existing [`internal/observation`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/internal/observation) package, which aims to provide all-in-one logging, tracing, and monitoring primitives, to integrate logging throughout all levels of an observation.
This enables you to easily write logs that includes helpful context like traces, metadata, observation context, and more.
To learn more, check out [How to add observability](https://docs.sourcegraph.com/dev/how-to/add_observability).

The DevInfra team has been collaborating with teams to help migrations to the new logging library - we encourage everyone to start incrementally migrating their existing logging, and to reach out to #dev-experience for feedback and questions!

### `sg` experience ✨

The [`sg`](https://docs.sourcegraph.com/dev/background-information/sg) experience has been a major focus for the DevInfra team and we have been working towards a variety of improvements for both users and contributers of `sg`!

First up, usage improvements:

- `sg` now supports autocompletions that you can trigger using the <kbd>Tab</kbd> key to help you type out long command names and flags faster, and to help you learn `sg` commands faster! To get started, make sure you've run `sg setup`. ([#33817](https://github.com/sourcegraph/sourcegraph/pull/33817))
  [![Autocompletions demo](https://cdn.loom.com/sessions/thumbnails/1e58993d4456479b8048090052c00aa2-1649801857411-with-play.gif)](https://www.loom.com/share/1e58993d4456479b8048090052c00aa2)
- Many `sg` flags now have short aliases (such as `sg run -d enterprise-frontend`),and commands can declare shorter aliases too (such as `sg ci st`) to save you on some extra keystrokes.
- Misspelled a command? `sg` will now prompt you with some suggestions! ([#33943](https://github.com/sourcegraph/sourcegraph/pull/33943)) <img src="https://user-images.githubusercontent.com/23356519/163476445-62bde286-2dd2-4032-ac90-fdd9e931a8ab.png" width="50%">
- Help text is much improved, with `sg help` now rendering commands by category.
- `sg lint` has seen a variety of improvements, and now powers all linters that we run in CI, which means you can easily replicate linter runs locally for debugging and enabling developers to customize linter output with much more granularity.
- `sg`'s autoupdate mechanism has gone through a number of iterations and should now be reliably auto-updating your `sg` installation seamlessly whenever you run `sg`.

For developers wanting to streamline their developer experience with `sg` functionality, we've also made a lot of internal improvements:

- Linters are easier than ever to build with the updated [`lint.Runner`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/sg/internal/lint/lint.go?L13:6#tab=references) interface, which now also provides you an easy way to get changed files and iterate over added lines to perform incremental linting. To get started, just head on over to the [`dev/sg/linters`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/sg/linters/linters.go) package!
- The migration to a new CLI library, [`urfave/cli`](https://pkg.go.dev/github.com/urfave/cli/v2), includes features like:
  - A much nicer API for defining flags and fetching them without declaring global variables, and convenience functions for safely getting arguments: [example](https://github.com/urfave/cli/blob/main/docs/v2/manual.md#flags).
  - Developers can implement custom completions for their commands with the [`BashComplete: completeOptions(...)`](https://sourcegraph.com/search?q=context:%40sourcegraph/all+r:%5Egithub%5C.com/sourcegraph/sourcegraph%24+BashComplete:+completeOptions%28...%29+&patternType=structural) API.
  - Flags and commands can now have short aliases!
- `sg.config.yaml` can now leverage external secrets (we currently support `gcloud` only) with the new `secrets:` field, and `sg` commands can use the [`secretsStore.GetExternal(...)` API](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@9d34772e9d1156c8b0738d1b0b831089d9e45833/-/blob/dev/sg/sg_analytics.go?L37:29-37:40).
  - This is used by `sg test frontend-e2e`, which you can use to run Sourcegraph's E2E tests with ease! ([#34627](https://github.com/sourcegraph/sourcegraph/pull/34627))
- The output API has been overhauled to be centralized in `std.Out`, which now centralizes the exports of a variety of `sg`-specific utilities for incorporating ✨ _fancy_ ✨ output for some added bling. ([#35269](https://github.com/sourcegraph/sourcegraph/pull/35269))
- Writing scripts? We strongly recommend everyone to start writing scripts in Go within `sg`, which gives us more code-sharing opportunities, better cross-platform compatibility, and more advanced features such as better output management. To enable this, the DevInfra team has started developing a new command execution library, [`github.com/sourcegraph/run`](https://pkg.go.dev/github.com/sourcegraph/run), aimed at providing a seamless way to execute commands and manipulate its output in Go. ([#35417](https://github.com/sourcegraph/sourcegraph/pull/35417))

### Following your code from PR to production 🚢

Deployments are now announced over Slack, in #alerts-preprod-cloud for the preprod and in #deployments-cloud for Cloud deployments. If you want to receive a mention on those announcement when your PR is getting deployed, you can use the `notify-on-deploy` label. If the label is present when the PR is deployed you'll receive the notification.

Deployements schedules can be observed in [Honeycomb Dashboard](https://ui.honeycomb.io/sourcegraph/board/ev4yWqP5h3u/Deployments) which tracks how much time elapsed from the moment a PR being merged to the moment it got deployed.

### Smoke testing ☁️

Every ten minutes, smoke tests are being run against [Sourcegraph CLoud](https://sourcegraph.com), first making basic infrastructure tests then performing a quick search to ensure that the application is up. And it's for real this time, [#16589](https://github.com/sourcegraph/deploy-sourcegraph-cloud/pull/16589) turns failures into an automated incident being created.

### Learning resources 🎥

Check out this selection of some of our recently published learning resources!

- The [Sourcegraph Codebase Tour video](https://youtu.be/VXaUXwMLzjg) gives an overview of our main repository and what's in it.
- The [Tour of Secondary Repositories](https://youtu.be/WR5yOdzJWdo) goes over some of the secondary repositories at Sourcegraph.
- [Local development with sg setup](https://youtu.be/K3-wRqYs4sc) is a video demonstrating how to use `sg setup` to set up your local development environment.

### Architecture decision records 📰

The idea behind architecture decision records, or ADRs, is to have small documents that are part of the codebase, not an external artifact that you have to be aware of like an RFC.

We encourage the use of Architecture Decision Records (ADRs) for logging decisions that have notable architectural impact on our codebase. Since we’re a high-agency company, we encourage any contributor to commit an ADR if they’ve made an architecturally significant decision.

Note that ADRs are _not_ meant to replace our current RFC process but to complement it by capturing decisions made in RFCs. However, ADRs do not need to come out of RFCs only. GitHub issues or pull requests, PoCs, team-wide discussions, and similar processes may result in an ADR as well, allowing to keep everyone in touch.

To learn more, check out the [ADR index page](https://docs.sourcegraph.com/dev/adr) and [ADR 1: Record architecture decisions](https://docs.sourcegraph.com/dev/adr/1650968652-record-architecture-decisions).

### Database migration tooling 🗃️

There are two new goodies for database tooling available via `sg migration` locally and via the `migrator` binary shipped with every Sourcegraph instance.

- New [`describe` command](https://github.com/sourcegraph/sourcegraph/pull/35641) provides a formatted version of your database's current schema
- New [`drift` command](https://github.com/sourcegraph/sourcegraph/pull/32472) provides a diff of the expected schema and your database's current schema

And for some added bling, both of the new commands have been beautified! ([#35722](https://github.com/sourcegraph/sourcegraph/pull/35722), [#35735](https://github.com/sourcegraph/sourcegraph/pull/35735))

### Preproduction environment 🔬

Before going out into production on Cloud, all changes are going throuh the preprod environment. The preprod environment is running in DotCom mode with a smaller dataset but with similar resources. Notably, it's running some services which are sharded in production, but not within CI, at the miminum size that enables to exercise all code paths. This opened the path to increase our confidence toward changes through automated testing that weren't previously possible.

Because tests on the prepod requires to put the application in a specific state to perform testing, [state is being restored based on a snapshot](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds/207988#4ff1072f-db01-427e-b0ac-d30cee25c5c4) which makes deterministic ([#16249](https://github.com/sourcegraph/deploy-sourcegraph-cloud/pull/16249))

As a result, [#16301](https://github.com/sourcegraph/deploy-sourcegraph-cloud/pull/16301) the code intel QA test suite is [now running in preprod](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds/207988#29dfa087-fcda-434b-94a0-537fff4299c6), and others will follow shortly.

### Buildkite foundations ⛵

Since the end of March, 100% of our CI builds are now run on stateless agents. It means that by design, it's now guaranteed that a given build cannot impact following ones. This enabled to roll out our own [autoscaler](https://github.com/sourcegraph/infrastructure/blob/main/docker-images/buildkite-autoscaler/buildkite-autoscaler.go) backed by an in-house [buildkite-job-dispatcher](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-job-dispatcher). This resulted in a whopping **30% decrease** of our CI spending on GCP in April!

To try and maintain parity with the stateful agents of old, we have implemented a variety of measures to keep CI times down:

- [Cross-node git repository mirrors](https://github.com/sourcegraph/devx-scratch/blob/main/2022/stateless-agents/log.snb.md#2022-04-08-repository-clone-optimization) means that repository cloning is consistently just as fast - if not faster! - than stateful builds.
- `asdf` caching has been used to speed up the installation process of all languages and tools needed to run our CI builds as we have now been running all builds on stateless agents. It has been extracted into a [plugin](https://github.com/sourcegraph/asdf-cache-buildkite-plugin), making it available for other pipelines as well.
- We have enabled [image streaming](https://cloud.google.com/blog/products/containers-kubernetes/introducing-container-image-streaming-in-gke) for our CI cluster, which has reduced the time to pull an image and start it from 1m50s to ~2s, which means lower wait times for your CI builds. ([infrastructure#3296](https://github.com/sourcegraph/infrastructure/pull/3296))

Some other CI goodies include:

- Many linting steps have been rolled into a new CI step powered by `sg lint`, which now generates output that is actually readable compared to the "Misc linters" step of old! If you run into issues, (hopefully) helpful annotations will also be added to your build summary. ![image](https://user-images.githubusercontent.com/23356519/169623817-cf76e231-75d8-4f80-9302-332725a59c0c.png)
- Sending out a Slack mention when a specific step failed is also available as a [plugin](https://github.com/sourcegraph/step-slack-notify-buildkite-plugin), which is also useful to make sure to notice a failure on a single step independently of the build result. For example, this is being used to alert the Code Intel team if their test suite fails on a preprod build.
- Changes to the client app now render app previews running against [k8s.sgdev.org](https://k8s.sgdev.org)! Learn more in the Sourcegraph docs: [Exploring client changes with PR previews](https://docs.sourcegraph.com/dev/how-to/client_pr_previews)

### Tech Radar 💡

[Thoughtworks Technology Radar](https://www.thoughtworks.com/radar) is a well known source for getting a sense of where the technology landscape is going. What really makes it stand out is how it surfaces Thoughtworks opinions in a format that is really easy to process. What if we had if we used the same medium to keep everyone in the loop within Sourcegraph on [our various initiatives on the engineering front](https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fraw.githubusercontent.com%2Fsourcegraph%2Fsourcegraph%2Fdba63f5f45cf236bc80d1909fbdffcfb841bfda2%2Fdoc%2Fdev%2Fradar%2Ftech-radar.csv)?

Thanks to [#35538](https://github.com/sourcegraph/sourcegraph/pull/35538), it's an ongoing exploration that could potentially help all of us to stay in touch with all the ongoing initiatives at Sourcegraph in the blink of an eye. Feedback and ideas are welcomed on the PR!

## Feb 24, 2022

Welcome to another iteration of the [Developer Experience newsletter](./newsletter.md) of notable changes since the Jan 10th issue!
As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #discuss-dev-infra or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

### SOC2 compliance processes

A new bot, `pr-auditor`, is now live in `sourcegraph/sourcegraph` and is rolling out to [a number of other repositories](https://k8s.sgdev.org/users/robert/batch-changes/pr-auditor-rollout) that houses code that reaches customers. `pr-auditor` will add status checks on your pull requests when you edit descriptions to indicate whether or not it has detected a "test plan" within your pull request description. If a "test plan" is not provided by the time a PR is merged, an issue will be created in [the `sec-pr-audit-trail` repository](https://github.com/sourcegraph/sec-pr-audit-trail/issues) requesting that the PR author document a test plan, or provide a reason for the exception. This serves as an audit log to help us achieve these two SOC2 control points:

> **GN-104** Code changes are systematically required to be peer-reviewed and approved prior to merging code into the main branch.

<span class="virtual-br">

> **GN-105** Application and infrastructure changes are required to undergo functional, security, unit, integration, smoke, regression, and SAST testing prior to release to production.

**What is a test plan?** A test plan is denoted by content following `# Test plan`, `Test plan:`, `### Test Plan:`, etc. within a pull request description. All pull requests must provide test plans that indicate what has been done to test the changes being introduced. Testing methodologies could include:

- [Automated testing](https://docs.sourcegraph.com/dev/background-information/testing_principles#automated-tests), such as unit tests or integration tests
- [Other testing strategies](https://docs.sourcegraph.com/dev/background-information/testing_principles#other-testing-strategies), such as manual testing, providing observability measures, or implementing a feature flag that can easibly be toggled to limit impact

**Pull request reviews are now also required by default**. Branch protections have been enabled in `sourcegraph/sourcegraph`. In other repositories with `pr-auditor` review checks must be opted out of by including `No review required: ...` within a pull request's test plan.

To learn more, refer to [our updated testing guidance](https://docs.sourcegraph.com/dev/background-information/testing_principles). You can find DevInfra SOC compliance documentation by control point in [this search notebook](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6NjA=). If you have any questions or feedback, please do not hesitate to reach out in #dev-experience or in our [GitHub discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience)!

### Internal tools and libraries

#### Database migrations update

We have now eradicated two classes of errors related to database migrations:

1. On the site-administrator and ops side, we no longer spuriously mark the database as dirty and give up any attempt at migrations at the first sign of trouble. We no longer immediately fail an upgrade because of the mere presence of an empty table or a concurrently created index. Now we only fail for **actual** reasons.
2. On the development side, we no longer have to worry about two independently created migrations clashing only after both are merged into `main`. That was very annoying to me and now it will never, ever happen again. Check out the help page for the new `sg migration` to check out the new tooling.

See the [migrator docs](https://docs.sourcegraph.com/admin/how-to/manual_database_migrations) for additional info.

#### New `lib/errors` package and `MultiErrors` type

_All_ errors in Sourcegraph backend services should now use the new `github.com/sourcegraph/sourcegraph/internals/errors` package. This consolidation helps us restrict and control the ways that we can create, consume, and compare errors, and will allows us to control library behavior clashes more easily in the future. [#30558](https://github.com/sourcegraph/sourcegraph/pull/30558)

Additionally, all usages of the old `MultiError` type has been replaced with a new, custom multi-error implementation ([#31466](https://github.com/sourcegraph/sourcegraph/pull/31466), [#698](https://github.com/sourcegraph/src-cli/pull/698)). This new error type is an interface that behaves much more closely to regular errors, prevents errors from disappearing due to library conflicts as was previously the case, and supports introspection with `errors.Is`, `errors.As`, and friends much more consistently.

```go
var err errors.MultiError
for _, fn := range thingsToDo {
  err = errors.Append(err, fn())
}
return err
```

Check out the source code [in `lib/errors`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/lib/errors).

#### Actor propagation reminder

Unified actor propagation was introduced a few months ago as part of an effort to enable the implementation of [sub-repository permissions](https://github.com/sourcegraph/sourcegraph/issues/27916) across all Sourcegraph features.
There have been gradual efforts to roll out this actor propagation to more services, which may cause behavioural changes that impact how permissions are handled if, for example, `internal` actors are not set explicitly.
When implementing new features please ensure that actors are correctly set and read from contexts.

To learn more, check out the [intro to actor propagation search notebook](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6OTI=).

#### New `teams` package

There is now a unified library for interacting with Sourcegraph teammates for whatever fun integrations you want to build! It leverages [`team.yaml`](https://github.com/sourcegraph/handbook/blob/main/data/team.yml) data as well as additional GitHub and Slack metadata:

```go
import "github.com/sourcegraph/sourcegraph/dev/internal/team"

func main() {
  // Neither a GitHub client nor a Slack client is required, but each enables more ways
  // to query for users and/or get additional metadata about a user.
  teammates := team.NewTeammateResolver(githubClient, slackClient)
  tm, _ := teammates.ResolveByName(ctx, "Robert")
  println(tm.SlackID)
  println(tm.HandbookLink)
  println(tm.Role)
  // etc.
}
```

`sg teammate`, branch lock notifications, and Buidlkite failure mentions are [all powered by this API](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+f:dev+ResolveBy...%28...%29+-f:test%7Cmock&patternType=structural).

### Continuous integration

#### Slack mention notifications

We now generate notifications for failed builds based on the author of each commit (using the [new teams package](#new-teams-package)).
Make sure to set up your [`teams.yaml` entry with your GitHub handle](https://github.com/sourcegraph/handbook/blob/main/data/team.yml) to get notified when your changes fail in `main`!

#### Pipeline readability improvements

Pipeline operations can now be configured into groups with `operations.NewNamedSet` ([#30381](https://github.com/sourcegraph/sourcegraph/pull/30381)). The result looks like this:

![Grouped operations](https://user-images.githubusercontent.com/23356519/151649399-247b9507-3d2e-48b3-9f10-48bea69872c8.png)

`sg ci preview` also leverages this grouping to improve readability of pipeline steps, as well as now leveraging a terminal Markdown renderer to generate nicer output! ([#30724](https://github.com/sourcegraph/sourcegraph/pull/30724))

#### Build traces are now uploaded to Honeycomb

Build traces are now uploaded to Honeycomb to dive into the performance of each command that gets run in a pipeline!
A link to the uploaded build trace is added as an annotation on the results of each Buildkite build.

![Trace example](https://user-images.githubusercontent.com/23356519/154169455-9d484f0f-7aac-4310-ac62-1551696765ff.png)

To learn more, check out the [Pipeline command tracing docs](https://docs.sourcegraph.com/dev/background-information/continuous_integration#pipeline-command-tracing).

#### Test analytics preview

We have started rolling out Buildkite test analytics support for Go tests and a subset of frontend tests that get run in continuous integration. This is still an experimental Buildkite feature, but you can learn more about it in our [Test analytics docs](https://docs.sourcegraph.com/dev/background-information/continuous_integration#test-analytics).

#### Pipeline documentation

A new command, `sg ci docs`, can now render a full, up-to-date reference of various run types that our pipeline can generate as well as example pipelines of each, such as what gets run with various diff types.
You can also see a web version of this in the [Pipeline types reference](https://docs.sourcegraph.com/dev/background-information/ci/reference).

Our [pipeline development guide](https://docs.sourcegraph.com/dev/background-information/continuous_integration#pipeline-development) has also been refereshed with updated content, featuring a series of embedded search notebooks! This includes new guidance on:

- [Creating pipeline annotations](https://docs.sourcegraph.com/dev/background-information/continuous_integration#creating-annotations) (using a new API introduced in [#30951](https://github.com/sourcegraph/sourcegraph/pull/30951))
- [Caching build artefacts](https://docs.sourcegraph.com/dev/how-to/cache_ci_artefacts) (only available on [stateless agents](#coming-soon-stateless-buildkite-agents))
- [Pipeline observability features](https://docs.sourcegraph.com/dev/background-information/continuous_integration#observability)

#### Generate builds using run types

`sg ci build` now supports an additional argument to automatically generate a Buildkite build using a specified run type ([#30932](https://github.com/sourcegraph/sourcegraph/pull/30932)). For example, to create a `main` dry run build:

```sh
sg ci build main-dry-run
```

This now also supports run types that require arguments, such as `docker-images-patch` - learn more in [#31193](https://github.com/sourcegraph/sourcegraph/pull/31193).

![sg ci build](https://user-images.githubusercontent.com/23356519/153933687-110f3657-543b-4d95-b01b-21b6b9e28514.png)

#### Coming soon: stateless Buildkite agents

We will soon be rolling out stateless Buildkite agents to all pipeline builds.
These should improve the stability and reliability of all pipelines by removing any issues that might be caused by lingering state from other builds.
Learn more in [this Loom demo](https://www.loom.com/share/601c226a8a93429890c40213922476f9)! ([#31003](https://github.com/sourcegraph/sourcegraph/issues/31003))

#### Optimizations

- **Improvements on the `server` and `gitserver` Docker images building:** after the addition of `p4-fusion` artifacts, the `gitserver` Docker image build time increased to 4 minutes to complete, which also impacted the `server` image. It has been fixed by caching the resulting binary, which brought the build time for `gitserver` down to about 40 seconds, thanks to [#31317](https://github.com/sourcegraph/sourcegraph/pull/31317).
- **`go-mockgen` is now much faster:** a misconfiguration was causing `go-mockgen` to be downloaded multiple times throughout a `go generate` run. This has been fixed, and run times for `go generate` is now much faster ([#31597](https://github.com/sourcegraph/sourcegraph/pull/31597)).

### Local development

#### Log entries now link to source in VS Code

Each log entry now prints an iTerm link that links to each log statement's source file:line in VS Code ([#30439](https://github.com/sourcegraph/sourcegraph/pull/30439)).

#### Workaround for macOS firewalls

A new `-add-to-macos-firewall` flag, [enabled by default on macOS](https://github.com/sourcegraph/sourcegraph/pull/31299), is now available on `sg start` and `sg run` to avoid all those pop-up prompts you get in macOS when firewalls are enabled. [#30747](https://github.com/sourcegraph/sourcegraph/pull/30747)

If this causes issues for you, the behaviour can be disabled with `-add-to-macos-firewall=false`.

#### `sg` highlights

You can now see what has changed as part of your fresh `sg` installation with the `sg version changelog` command! You can also use it to see what's coming up next with `sg version changelog -next`. [#30697](https://github.com/sourcegraph/sourcegraph/pull/30697)

`sg start` now waits for all commands to install before starting them ([#29760](https://github.com/sourcegraph/sourcegraph/pull/29760)).

M1 macs no longer require _any_ additional workarounds ([#29815](https://github.com/sourcegraph/sourcegraph/pull/29815)).

`sg checks docker` now features a custom Dockerfile parser to enable more powerful checks, such as validating `apk add` arguments as well as also running more existing checks.
It now powers the Docker check in CI as well! ([#31217](https://github.com/sourcegraph/sourcegraph/pull/31217))

`sg setup` now features an overhauled checks system to make sure your dev environment is ready to go ([#29849](https://github.com/sourcegraph/sourcegraph/pull/31055)).

`sg setup` now supports Ubuntu as a first class citizen and provides automated installation ([#31312](https://github.com/sourcegraph/sourcegraph/pull/31312)).

## Jan 10, 2022

Happy new year, and welcome to another iteration of the [Developer Experience newsletter](./newsletter.md)! It's been a little while since the last issue, so this is going to be a long one 😄 As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #discuss-dev-infra or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

### Internal tools and libraries

#### Backward-compatible database migrations are now enforced

Backward-compatible database migrations are now enforced in the CI pipeline for `sourcegraph/sourcegraph` - see the PR to re-enable the check at [#28872](https://github.com/sourcegraph/sourcegraph/pull/28872). This PR contains some initial documentation on writing backwards-compatible migrations, but it is still a work in progress.

**What is a backwards compatible migration?:** A migration is backwards-compatible with a particular Sourcegraph version if those changes can be applied to a version without ill-effect.

**What has already changed? (TL;DR)**: We've removed our use of golang-migrate that ran database migrations on startup of the frontend service and added a `migrator` service that runs database migrations separately from and prior to instance upgrades. This puts us well on our way to removing the entire class of frequent "dirty database" bugs that plagues many site-administrators on every upgrade.

**What else is changing?:** We will soon be enforcing that the unit tests of the _previous minor release_ continue to pass with the newest database schema. This gives high confidence that any changes to the database will not negatively affect a running instance (behind at most one minor version). This allow site-administrators to upgrade an instance without requiring downtime to run the migrations.

Of course, this check will come with escape hatches in the event of flake or test failures that are locked in the past. We're currently fleshing out the documentation on the subject, so keep an eye out for updates!

For the full announcement or to leave comments, check out [the Slack discussion](https://sourcegraph.slack.com/archives/C0EPTDE9L/p1641329708282700)!

#### Actor propagation

Actors (used to identify a request in the context of a user or internal actor) are now propagated across _all_ internal requests when using the `httpcli` library, and the various approaches for propagating actors across services has been standardized with the new [`actor.HTTPMiddleware`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@9233e2cd9b96bbbbbfb4be2e72543cb41ad9920c/-/blob/internal/actor/http.go?L94:6#tab=references). This makes it easier to enforce permissions across services. For more details, see [#28117](https://github.com/sourcegraph/sourcegraph/pull/28117).

#### Database connections

[`dbconn.Global` has been removed](https://github.com/sourcegraph/sourcegraph/pull/28251)! This is a huge step towards [bringing better database mocking to the entire codebase](https://github.com/sourcegraph/sourcegraph/issues/26113) (check out the [code insights dashboard tracking relevant migrations](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjY0OTB9)!)

![migration from global database mocks](https://user-images.githubusercontent.com/23356519/148499207-4862bdd8-2be6-4e73-9d47-2cd91f2c208c.png)

#### Tracking issues

[Tracking issues](../../dev/process/tracking_issues.md) now support a new marker, `<!-- OPTIONAL LABEL: my-label -->`, that allows you to add labels on a tracking issue that do not need to be present on child issues for them to be considered part of this tracking issue. This is useful for making tracking issues easier to find without adding labels to every single issue within the tracking issue. For more details, see [#28665](https://github.com/sourcegraph/sourcegraph/pull/28665).

### Continuous integration

#### Subsequent `main` pipeline failures will now result in a branch lock

In response to a variety of CI incidents (including [INC-21](https://github.com/sourcegraph/sourcegraph/issues/25482) at the end of September) we have introduced automated branch locks via a tool called [`buildchecker`](https://github.com/sourcegraph/sourcegraph/tree/main/dev/buildchecker). When `buildchecker` detects a series of CI failures, it will now automatically restrict push access to `main` to authors of recent failed builds and the DevInfra team until it sees a passed build, at which point it will unlock the branch. A notification will be posted in Slack to #buildkite-main as well mentioning the relevant teammates.

It is the responsibility of authors of recently failed builds to investigate what might have gone wrong, seek help if needed, and help get the pipeline back green. We hope this will prevent long periods of time where many commits to `main` go untested due to failing jobs. To learn more, check out the [branch lock playbook](../../dev/process/incidents/playbooks/ci.md#buildchecker-has-locked-the-main-branch)

We've also made significant investments towards improving and streamlining the pipeline for better stability and observability - most recently, [a large number of E2E/QA tests were dropped](#e2e-and-qa-tests-survey-results) - which will hopefully help with minimizing locks triggered by test and infrastructure flakes.

#### Specifying tools and language versions ran by _any_ continuous pipeline

In response to [INC-59](https://docs.google.com/document/d/1HXKZa9L3MVswK6pDpRN5TdCgUcEcQca9Re4vCwlb6Ek/edit#) we have reworked which tools and languages versions are to be used in a given CI job. Previously, the agents where running a mix of `asdf` and natively installed versions which created trouble when diagnosing build failures that weren't caused by the test themselves.

It is now _the responsibility of each repository to provide an adequate `.tools-version` file that defines what are the versions it needs_. There are no more pre-installed `go` version for example.
Presently, this approach is limited by having the plugin for that particular tool installed beforehand on the agents images (we are working on removing this limitation). The overarching goal is to make the agents reasonably independent from what they are actually building.

#### E2E and QA Tests survey results

[RFC 544](https://docs.google.com/document/d/1pHlgAj3JderMVsP2rWMovh2mTSK8TBecriSHLZX6UHQ/edit) explored the result of [the e2e and qa tests survey](https://sourcegraph.slack.com/archives/CHXHX7XAS/p1636989660454300). Thanks to the efforts of every team that took part to that survey, a large amount of irrelevant tests [have been removed](https://github.com/sourcegraph/sourcegraph/pull/28995). As a result, those tests are about seven minutes faster than before and the average build time on the `main` branch is hovering around the 20 minutes mark instead of 25 minutes.

There is more to come on that topic.

#### Buildkite agent selection

Buildkite pipeline steps should now explicitly declare `queue: standard` to avoid experimental or temporary agents. For more details, see [infrastructure#2939](https://github.com/sourcegraph/infrastructure/pull/2939).

#### Terraform vulnerability scanning

The [security team](../../../security/index.md) has introduced [Checkov checks](https://www.checkov.io/1.Welcome/What%20is%20Checkov.html) to the [`infrastructure` repository](https://github.com/sourcegraph/infrastructure) and performed a cleanup to fix or suppress all high and critical issues!

Going forward, the Checkov step of the infrastructure pipeline will be set to fail in the event it finds a Terraform security issue. If the pipeline fails a warning block will be displayed in the pipeline output - a link will take you to the handbook with guidance on how to continue, and additional output will help point you towards how to correct the issue. For more details, see [Checkov Terraform vulnerability scanning](../../../security/tooling/checkov.md)

If anyone has any questions or issues, please post in the #security channel!

#### Sentry integration to monitor internal pipeline scripts and hooks

There are scripts and components of the CI pipeline that should never fail, independently of the tests results. These have proved be to hard to monitor, especially when the scripts are called from build hooks. Being notified when these failures happen enables faster reaction time. Here is an [example](https://github.com/sourcegraph/sourcegraph/pull/28915/files#diff-3c4244f37fc751696252758dd92a887d9e1e30851b18932c142ae56202bb5ea7R40) to get monitor a command so that a Sentry issue in the [Buildkite](https://sentry.io/organizations/sourcegraph/projects/buildkite/?project=6110304) project is created on a non zero exit code.

### Observability

The previous raw Grafana configuration used to add template variables to dashboards has been replaced with [`Container::Variables`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/docs/monitoring/monitoring?ContainerVariable) that abstracts away a lot of the behind-the-scenes dashboard config and potential gotchas to make it easier to define template variables on dashboards! Dashboard template variables are used to filter individual panels down by substituting variables in panel queries. Learn more in the [`ContainerVariable` API docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/docs/monitoring/monitoring?ContainerVariable).

![template variables](https://user-images.githubusercontent.com/23356519/148470790-4397f274-68c7-45ab-8f9a-9057d162b1ab.png)

### Local development

#### Revamped introductory documentation

The local development docs homepage has been revamped! Check it out at [docs.sourcegraph.com/dev](https://docs.sourcegraph.com/dev). The [quickstart docs](https://docs.sourcegraph.com/dev/setup/quickstart) has also been overhauled with a streamlined setup experience featuring `sg setup`, which has been greatly improved!

#### `sg` improvements

`sg` [now ships](https://github.com/sourcegraph/sourcegraph/pull/29382) a command that can reset databases as well as creating a site-admin: `sg db` (early adopters may have seen it under the name of `sg reset`). You can read more about the `sg db [reset-pg|reset-redis|add-user]` in the [documentation](https://docs.sourcegraph.com/dev/background-information/sg#sg-db-interact-with-your-local-sourcegraph-database-s)

If you have ideas of other features that would be great, don't hesitate to join the [`sg` hack hour](./index.md#sg-hack-hour) on Fridays at 4PM UTC!

## Nov 23, 2021

Hello everyone, and welcome to another iteration of the Developer Experience newsletter!

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #discuss-dev-infra or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

### Onboarding

Significant progress has been made with sg setup, a new command that is slated to replace all the manual fenangling that must be done today to set up a Sourcegraph development environment. See a sneak peak of the upcoming iteration of the tool [here](https://sourcegraph.slack.com/archives/C01N83PS4TU/p1637576910255900)!

### Continuous integration

The Developer Infrastructure team is proposing a "build sheriff" rotation in [RFC 515](https://docs.google.com/document/d/1rHOOgvWmBB5c4aS_wWPogNCAWT6_tww8tceSy6nzFy8/edit), with the goal of distributing knowledge and responsibilities around our CI infrastructure to all of engineering through regular rotations of "build sheriffs".

You may have noticed a daily update in #discuss-dev-infra providing an overview of how CI has behaved that day—this will be helping us track our progress towards a flake-free pipeline! If you need more details, a [dashboard is now available in Grafana Cloud](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1) that features an overview of recently failed builds, steps, and potentially relevant logs. You can use this to see if lots of builds are failing on similar steps, which steps are the most problematic, and whether the issues are potentially related. A link can also be found in the Slack summaries. Let us know what you think on [#26118](https://github.com/sourcegraph/sourcegraph/issues/26118)!

![image](https://user-images.githubusercontent.com/23356519/143134471-85e5cea1-a1a2-44cd-96ff-36f06b7fe125.png)

This dashboard is powered by build logs that are now parsed from Buildkite output and uploaded to Loki, a log database available for query in Grafana Cloud using [LogQL](https://grafana.com/docs/loki/latest/logql/). [Try it out here](https://sourcegraph.grafana.net/goto/LZur5Hpnz?orgId=1)! This can be especially useful when seeing if a build issue is a common recurrence.

We are also trialing a number of additional annotations for build failures that should serve to help surface actionable errors more easily, and are working towards exporting an API for it that will enable more checks to easily add digestible output to builds. Let us know in #discuss-dev-infra if you have any ideas for how this could be improved!

![image](https://user-images.githubusercontent.com/23356519/143134415-bc30233b-3d2e-4eb9-a3e6-99add60e839d.png)

### Observability

A proposed revamp of how Honey events are created has been proposed in [#27964](https://github.com/sourcegraph/sourcegraph/pull/27964), furthering work on turning internal/observation into the go-to package for all application observability needs.

[Distributed tracing is now available on worker jobs](https://github.com/sourcegraph/sourcegraph/pull/24008), enabling Jaeger traces to be collected for worker job processing. This is currently only enabled for precise-code-intel-worker in Cloud, and enabling this for other workers is in the works.

[RFC 501 REVIEW: Runtime error monitoring](https://docs.google.com/document/d/1d18e_YFJsw5cgDId8Iz1MT8A_GsHZTOGHMuem1JMzuM/edit) implementation is also progressing, which will allow errors to be more easily surfaced in Sentry to complement alerting.

### Code health

Work on reducing usages of globals has continued with [improvements to how site configuration is accessed](https://github.com/sourcegraph/sourcegraph/pull/27453) that allows site configuration clients to be injected into places that require it. This makes site configuration easier to mock out and test without replacing a global variable in mocks.

On a similar note, tests have been undergoing [incremental updates](https://github.com/sourcegraph/sourcegraph/pull/27401) to leverage the more ergonomic and self-contained database mocks—a [brief guide is available](https://docs.sourcegraph.com/dev/background-information/languages/testing_go_code#testing-with-a-database) if you know an area of the codebase that could use a similar update!

## Nov 2, 2021

Hello everyone! Welcome back to the Developer Experience newsletter. It is a compilation of announcements related to development experience at Sourcegraph. DevInfra is a global effort

To be mentioned here in the next iteration, please tag your PR or issue with dx-announce!

### DevInfra team mission statement

Published Developer Experience team mission and strategy: [handbook.sourcegraph.com/company/strategy/devinfra](../../../../strategy-goals/strategy/devinfra/index.md)

### Buildkite incident post-mortem(s)

On Sep 19th, for about two hours, it wasn't possible to interact with any container registries from Google Cloud platform, which interrupted the process for release 3.33. You can find the detailed report here: [Postmortem Review: INC-25 Buildkite pipelines are not able to interact with container registry](https://docs.google.com/document/d/1Ag4s1GPX4RNU4vsSclT6Ejox6WOS3pWQQr1xz7UtEY0/edit?usp=sharing) .

On October 26th, for another two hours, the pipeline agents were down. You can find the detailed report here: [REVIEW: INC-30 Buildkite pipelines are failing due to pipeline generator failing to run](https://docs.google.com/document/d/1Mb-msMDM81dq7Kf3W4zwpDYYhwXzrPI92Q_RUWKL_U0/edit#)

### CI Pipeline highlights!

- All-in-one pipeline - check all your build jobs in one place! [https://github.com/sourcegraph/sourcegraph/pull/26051](https://github.com/sourcegraph/sourcegraph/pull/26051)
- Cross-build search for Buildkite failures: [https://github.com/sourcegraph/sourcegraph/pull/26259](https://github.com/sourcegraph/sourcegraph/pull/26259)
- We are now measuring how long the pipeline stays red per day. It captures both how reliable the pipeline is and how fast it gets back to green.
  - 22th: red for 1h8m
  - 21th: red for 1h34m
  - 20th: red for 21m
  - 19th: red for 2h4m
  - 18h: red for 54m
- Contractors are now able to access CI builds, as long as they prefix their PR with contractors/ and they have been manually added to buildkite contractors team.
- SQL queries are now displayed on failure in Go tests, both locally and in the CI. [https://github.com/sourcegraph/sourcegraph/pull/26020](https://github.com/sourcegraph/sourcegraph/pull/26020)
- One less papercut, remember the warning sign at the beginning of every step logs? It's not there anymore. [https://github.com/sourcegraph/sourcegraph/pull/26233](https://github.com/sourcegraph/sourcegraph/pull/26233)
- [RFC 497 WIP: Restructuring CI Experience](https://docs.google.com/document/d/1QqOb0ZDuUDSB57RM_YLzqAPFaFnDGq-8AES5yppWiqg/edit#heading=h.p8geto1rvwhg) is now open for feedback!

### SG Highlights

_`sg` is a CLI tool that wraps commands to run the local environment and interact with various Sourcegraph resources such as CI builds or RFC._

A new home for sg documentation: [https://docs.sourcegraph.com/dev/background-information/sg](https://docs.sourcegraph.com/dev/background-information/sg)

- sg ci logs - browse, grep, or save Buildkite output
  - Try the Loki integration locally for advanced search! [https://github.com/sourcegraph/sourcegraph/pull/25835](https://github.com/sourcegraph/sourcegraph/pull/25835)
- sg ci status --wait - get notified as soon as your Buildkite build completes
  - ![image](https://user-images.githubusercontent.com/23356519/143134317-8fa0f0d2-d8e9-4d4c-9ee0-68ec4d44d8fd.png)
- sg version: displays what version of sg you're currently running. Adding it to your message when requesting support for sg will really help!
- Our first bug report that came from the community has been fixed! [sg: include original err in install err](https://github.com/sourcegraph/sourcegraph/pull/26506)

### From the wider Sourcegraph community

- Runtime errors monitoring: [RFC 501 REVIEW: Runtime error monitoring](https://docs.google.com/document/d/1d18e_YFJsw5cgDId8Iz1MT8A_GsHZTOGHMuem1JMzuM/edit)

- Database mocking proposal: [https://github.com/sourcegraph/sourcegraph/pull/26129](https://github.com/sourcegraph/sourcegraph/pull/26129)

## Oct 8, 2021

Hello everyone! This is the first iteration of the Developer Experience newsletter. It is a compilation of announcements related to development experience at Sourcegraph.

To be mentioned here in the next iteration, please tag your PR or issue with dx-announce!

### A team has been created

The Developer Experience team has been created in mid September! Our first goal is to improve the CI experience.

### Buildkite incident post-mortem

Between Sep 21th and Sep 24th, our main branch builds were failing. Due to the difficulties we were having to reliably make it pass, we escalated it to an incident. To prevent new failures from piling up on the already broken branch, we made a decision to lock the main branch, which is a pretty unusual event.

You can find the detailed report in[Postmortem REVIEW: INC-21 Builds failing on main](https://docs.google.com/document/d/1QlosBcYayKqSeMpVuj-TXrFyxmFsiUyZZ_AM5nUz9OU/edit#), which is now in a reviewable state and open to feedback and any inputs.

We'd like to thank dearly all of those who helped to fix this: Patrick Dubroy, Robert Lin, Eric Fritz, Valery Bugakov, Tomás Senart, [Thorsten Ball](mailto:thorsten@sourcegraph.com), [Dax McDonald](mailto:dax@sourcegraph.com), Geoffrey Gilmore, [Erik Seliger](mailto:erik@sourcegraph.com), [Dave Try](mailto:dave@sourcegraph.com) and JH. With the actions we've proposed in the postmortem, we don't expect such an event to happen in the future.

### Pipeline improvements

The CI is what enables us to feel confident when delivering our changes to our users, and is one of the key components enabling Sourcegraph to deliver quality software.

Previously, it was really hard to find time to improve the CI because it was competing with infrastructure work in terms of prioritization, making it a frustrating but rational choice. With the recent team reorganization, making that hard choice is not a problem anymore as this component is now owned by the DX team.

Following up on the above incidents, it became absolutely clear that the CI is a big contender in the list of pains faced by everyone. The good news is that it's a pretty actionable one!

Let's start with some numbers:

- August average build time on the main branch: 19m57, on PR 20m24s
- September average build time on the main branch: 27m47s, on PRs 22m32 (1)
- October average build time on the main branch: 17m48s, on PRs 9m34

![image](https://user-images.githubusercontent.com/23356519/143134230-11641386-4588-4680-82c2-d85b576dc0ce.png)

- Pull requests now run a smaller set of checks on average, and it is easier to add additional PR checks of your own that run over subsets of code that you care about within the pipeline generator.
  See the [Introductory documentation](https://docs.sourcegraph.com/dev/background-information/continuous_integration) to help you get started with hacking on the pipeline generator
- Puppeteer [tests](https://github.com/sourcegraph/sourcegraph/pull/25027)[are now](https://github.com/sourcegraph/sourcegraph/pull/25027)[run in parallel multiple smaller steps](https://github.com/sourcegraph/sourcegraph/pull/25027), netting almost a 50% improvement :fire:
- (1) spiked because that's when the executor pipeline was introduced.

**What's next?**

Observability is crucial to being able to know when and on what to act. This led to the creation of [RFC 496 REVIEW: Continuous integration observability](https://docs.google.com/document/d/1fknr3NQGmwbKCfnF3Bcr-tYzV-TeuAGq-_Tm2-z_09M/edit#bookmark=id.7ia1mplkc80k) which is now in a reviewable state for everyone.

More speed improvements on the builds are being worked on, stay tuned!

### sg is officially entering our daily workflows

What if we had a tool that would be the entry point to interact with our development environment? That's the idea behind sg! Thorsten Ball has been driving this, with contributions from many other engineers. After a few months in a beta state, it's now becoming an integral part of our workflow.

[sg](https://github.com/sourcegraph/sourcegraph/tree/main/dev/sg) is now the default way to run the Sourcegraph development environment locally.

- After half a year of working on sg, the PR to remove what we once knew as `dev/start.sh` and `enterprise/dev/start.sh` has [been merged](https://github.com/sourcegraph/sourcegraph/pull/25505). Adios, 993 lines of shell script!
- The docs have also been updated: the [Getting Started guide](https://docs.sourcegraph.com/dev/getting-started) now uses sg.

But wait, there's more! A new group of commands has been added, the "ci" commands.

- sg ci preview: You can now preview which steps your branch is going to run on the CI with the sg ci preview command. See something that shouldn't be running in there? [Open a PR on the pipeline generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@main/-/tree/enterprise/dev/ci) !
- sg ci status: No more clicking around to find the current build in Buildkite!
- sg ci build: will trigger a manual build, useful if working from a sourcegraph fork.

And additional goodies: the sg teammate time and handbook commands that will tell you what is the current time of that person that lives very far from you, without having to leave your terminal.

**What's next?**

This is just the beginning. Work on [sg setup](https://github.com/sourcegraph/sourcegraph/issues/24900) has begun. The idea is that we can reduce the Getting Started guide from 8 pages down to "install sg and run sg setup".

### Grafana cloud is now available to all!

Just sign up via GSuite SSO on [https://sourcegraph.grafana.net](https://sourcegraph.grafana.net/). This Grafana instance currently has logs for Sourcegraph Cloud, available for search with [LogQL](https://grafana.com/docs/loki/latest/logql/) via Loki. It has support for querying inferred fields from log messages, filtering for substring matches, and more. [Try it out!](https://sourcegraph.grafana.net/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-logs%22,%7B%22expr%22:%22%7Bapp%3D%5C%22sourcegraph-frontend%5C%22%7D%20%7C%20logfmt%20%7C%20lvl%20%3D%20%5C%22eror%5C%22%20%7C%3D%20%5C%22migration%5C%22%22%7D%5D)

Metrics and parity with /-/debug/grafana is on the roadmap—follow [#25407](https://github.com/sourcegraph/sourcegraph/issues/25407) for updates on that!

**Shoutouts to teammates that improved our Developer Infrastructure in September** [**Robert Lin, Valery Bugakov, Thorsten Ball, JH, Camden Cheek, Erik Seliger, Coury Clark and Quinn Slack**](https://github.com/sourcegraph/sourcegraph/pulls?page=2&q=is%3Apr+is%3Amerged+label%3Adx) **.**
