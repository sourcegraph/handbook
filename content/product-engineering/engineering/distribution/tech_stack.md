# Distribution tech stack

This document lists the technologies used by the Distribution team, what they are used for, and best practices for each within Distribution.

Also see [internal infrasturcture](./internal_infrastructure.md) and [tools](../tools/index.md) for specific infrastructure and tools.

## Go

**Use cases:** Services and applications

**Best practices:**

- Adhere to the [Sourcegraph Go style guide](https://docs.sourcegraph.com/dev/background-information/languages/go)

## Typescript

**Use cases:** Complex automation and scripting

**Best practices:**

- We use **[Deno](https://deno.land/)** as our Typescript runtime instead of Node
  - Typescript is not a core part of our expertise, so Deno takes care of tooling and formatting
- Adhere to `deno fmt`, add a CI workflow that validates the result of `deno fmt --check`
- Avoid using third-party dependencies (try to stick to the [standard library](https://deno.land/std))
- Scripts should be executable (`chmod +x`) and have some variation of `#!/usr/bin/env deno run` as the sha-bang

## Bash

**Use cases:** Simple automation and scripting

**Best practices:**

- Adhere to the [Sourcegraph Bash style guide](https://docs.sourcegraph.com/dev/background-information/languages/bash)

## Terraform

**Use cases:** Infrastructure provisioning

**Best practices:**

- Adhere to the [Sourcegraph Terraform style guide](https://docs.sourcegraph.com/dev/background-information/languages/terraform)

## Kubernetes

**Use cases:** Deploying services

## Dhall

**Use cases:** Providing configuration for our deployment types ([work in progress](https://github.com/orgs/sourcegraph/projects/71)).
