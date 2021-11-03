# CI Playbook

> This page is maintained by the [DevX Team](../../engineering/enablement/dev-experience/index.md).

> Audience: any software engineer, no prior infrastructure knowlegde required. 

This document sums up what to do in multiple scenarios that can block the CI.

See also: [Continuous Integration](https://docs.sourcegraph.com/dev/background-information/continuous_integration) in our product documentation.

## Prerequisites

In order to handle problems with the CI:

- Have access to the `sourcegraph-ci` _project_ on Google Cloud Platform.
  - See [#it-tech-ops](https://sourcegraph.slack.com/archives/C01CSS3TC75) 
- Have the CLI `gcloud` tool installed and have authenticated yourself.
  - See [Gain access to the cluster](../../engineering/deployments/debugging/tutorial/index.md)
- Set the current Kubernetes context to the `default-buildkite` _cluster_ in the `sourcegraph-ci` _project_:
  - `gcloud config set project sourcegraph-ci`
  - `gcloud container clusters get-credentials default-buildkite --zone us-central1-c`
- (Optional) Install [K9s](https://k9scli.io) for easier interactions with the _pods_.

## Overview

The CI is what enables us to feel confident when delivering our changes to our users, and is one of the key components enabling Sourcegraph to deliver quality software. While the DevX team is in charge of managing the CI as a tool, it is essential for every engineer to be able to unblock themselves if there is a problem in order be autonomous. 

This page lists common failures scenarios and provide a step by step guide to get the CI back in an operational state. 

## Scenarios

### Build has failed on the `main` branch

- Gravity: _minor_
- Impact: that commit won't be deployed on DogFood and `sourcegraph.com` until an ulterior build passes.
- Possible causes:
  - The `main` branch runs additional checks compared to Pull Requests builds. So it's possible that one of those checks failed.
  - The `main` branch have changes that weren't in the Pull Request branch and those changes are causing a failure. 
  - The `main` branch is failing due to a previous build. 

#### Actions 

1. Check your build on [Buildkite](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=main)
  - Find its link directly in the [#buildkite-main](https://sourcegraph.slack.com/archives/C02FLQDD3TQ) channel.
  - :bulb: Or run `sg ci status` in your shell, with the same branch checked out. 
2. Search for the failing steps, and browse the logs (:bulb: run `sg ci logs` in your shell, with the same branch checked out) .
  - Look for a failure explanation: it can be a test that failed or a command that return a non zero exit code.
3. Check the previous builds on the `main` branch on [Buildkite](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=main)
  1. Are they failing with the same exact error?
    - Yes: see the [Builds are failing in the `main` branch with the same error]()
    - No: see next point.
4. Is that a real failure or a flake?
  1. Restart that step. Maybe it will fail again, but if it doesn't it'll save you time. 
    - :bulb: You can go to 3. while it runs. 
  1. Did restarting it fixed the problem?
    - Yes: that's a flake. See the [Spotted a flake scenario]()
    - No: see next point.
  1. Does the failure points to problem with the code that was shipped on that commit?
    a. Yes, and it's a very quick fix that can get merged promptly: 
      1. Write a short message on [#buildkite-main](https://sourcegraph.slack.com/archives/C02FLQDD3TQ) and tell others that you're fixing it. 
      1. Submit the fix with another PR and get it merged as soon as possible. 
    b. Yes, but it's not easily and/or quickly fixed 
      1. Revert the incriminating Pull Request.
      1. Checkout the PR branch
      1. Rebase it so it includes the changes that broke it when merged in the `main` branch.
      1. Rename the branch to `main-dry-run/your-branch` in order to get the CI to run the same exact checks it does on the `main` branch.
    c. No, but it seems to fail in step or code from another team.
      1. Reach out a member of the team responsible for that test. 
      2. go for a. or b. from the previous points.
    d. No, and there is suspicion of a flake.
      - Yes: that's a flake. See the [Spotted a flake scenario]()

### Build are all failing on the `main` branch with the same error

- Gravity: _major_
- Impact: no commits are being deployed on DogFood and `sourcegraph.com` until the problem is resolved. Cutting a release is impossible.
- Possible causes:
  - A previous Pull Request introduced a change that causes a test to fail.
  - A previous Pull Request introduced a change that modified state in an unexpected way and broke the CI.
  - An external dependency is not available anymore and is causing builds to fail.
  - Some rate limiting API is throttling us and causing builds to fail. 

#### Actions

1. Identify the error in common with the recent builds on [Buildkite](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=main).
1. Find the build where the problem appeared for the first time.
  - :bulb: Often it's the first build that became red, but check that the error is the same to be sure.
1. Is this an external failure or an internal one?
  - :bulb: External failures are about downloading a dependency like a package in a script or a in a Dockerfile. Often they'll manifest in the form of an HTTP error.
  - :bulb: If unsure, ask for help on [#dev-chat](https://sourcegraph.slack.com/archives/C07KZF47K).
  - Yes, it's an external failure:
    1. SSH into an agent to reproduce the problem:
      1. Launch `k9s` and select an agent, they are named like `buildkite-agent-xxxxxxxxxx-yyyyy`
      1. Press `s` to SSH on it.
      1. You will be prompted with which pod to SSH onto, select the agent itself. 
    1. Try to reproduce the faulty HTTP request so you can observe what's the problem. Is it the same failure?
      - Yes:
        - Do you know how to fix it? If no escalate by creating an incident (`/incident` on Slack).
      - No: escalate by creating an incident (`/incident` on Slack).
  - No, it's an internal failure:
    1. Is it involving faulty state in the agents? (a given tool is not found where it should have been present, or have incorrect version)
      1. Launch `k9s` and select an agent, they are named like `buildkite-agent-xxxxxxxxxx-yyyyy`
      1. Press `s` to SSH on it.
        1. Inspect the state on the faulty agent. Take note of what you see.
      1. Try to find an agent that recently successfully ran the faulty step (look for a green build on the `main` branch) 
        1. Can you see a difference? If yes take note. 
      1. Do you know how to fix it?
        - Yes: apply the fix.
        - No: Restart the agents to see if it fixes the problem. See [Restarting the agents]()
          - Does it fix the problem? If no, escalate by creating an incident (`/incident` on Slack).

### Build are failing on the `main` branch with different errors

- Gravity: _major_
- Impact: no commits are being deployed on DogFood and `sourcegraph.com` until the problem is resolved. Cutting a release is impossible.
- Possible causes:
  - A previous Pull Request introduced a change that causes a test to fail.
  - A previous Pull Request introduced a change that modified state in an unexpected way and broke the CI.
  - An external dependency is not available anymore and is causing builds to fail under certain conditions.
  - Some rate limiting API is throttling us and causing builds to fail. 

#### Actions

1. Escalate by creating an incident (`/incident` on Slack).
1. Get some help. 
1. Downscale the agents to be able to observe exactly what's going on.
  1. Update the `autoscaler` manifest to run a single agent
    1. `cd sourcegraph/infrastructure` 
    1. Edit the [manifest](https://sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/buildkite/kubernetes/buildkite-autoscaler/buildkite-autoscaler.Deployment.yaml?L32-35) to have 1 on both max an min agent count.
    1. `cd buildkite/kubernetes/buildkite-autoscaler`
    1. Run `kubectl apply -n buildkite -f buildkite-autoscaler.Deployment.yaml` 
    1. Run `k9s` and wait for the agents to be downscaled. Kill them if necessary.
  1. From there, any change and build will run on a single agent, allowing you to observe the behaviour live.

### Spotted a flake 

- Gravity: _minor_
- Impact: Some builds will fail randomly, creating noise and slowing down the engineering team
- Possible causes:
  - Tests relying on timing.
  - Race conditions. 
  - End to end tests are delicate by nature and can fail randomly due to the complexity of all involved components. 
  - State dependent test is not properly teared down and fails.

#### Actions

TODO Loki stuff

#### Restarting the agents

- Gravity: _minor_
- Impact: May fail ongoing builds, but that's fine. 
- Possible causes:
  - Manual restart by an engineer.
  - Newer version of the agents needs to be deployed.

#### Actions 

1. Open `k9s` to observe the currently running agents.
1. In a different terminal, run `kubectl -n buildkite rollout restart deployment buildkite-agent`.
1. Wait a bit to see the agents restarting completely. 
1. Restart the faulty build and observe it the problem is fixed or not. 
  - If necessary: escalate by creating an incident (`/incident` on Slack).

