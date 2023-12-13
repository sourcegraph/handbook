# Google Front End (GFE)

[Google Front End (GFE)](https://cloud.google.com/docs/security/infrastructure/design#google-frontend-service) is reverse-proxy frontend service provided by GCP. The Core Services team operates and maintains the GFE instances that front Sourcegraph.com and various internal services.

Each GFE instance consists of two environments:

- For the QA environment, the infrastructure is defined in [`sourcegraph/infrastructure/gfe/envs/qa/project`](https://github.com/sourcegraph/infrastructure/tree/main/gfe/envs/qa/project)
- For the production environment, the infrastructure is defined in [`sourcegraph/infrastructure/gfe/envs/prod/project`](https://github.com/sourcegraph/infrastructure/tree/main/gfe/envs/prod/project)

Two types of URL mapping semantics are currently supported:

- Exact URL match: Requests matching the exact URL will be routed to the specified backend
- Prefix URL match: Requests with a URL prefix will be routed to the specified backend. The longest matching prefix takes precedence

## Sourcergaph.com

> [!NOTE] This GFE instance is coming out of the proposal in the [RFC 857 PRIVATE](https://docs.google.com/document/d/1q8lwcjrrmhKItfm2PaM4ay6JPPCtJtJPM7qLEyKqGhY/edit).

The Sourcegraph.com GFE transparently proxying traffic to [Marketing site Netlify deployment](https://github.com/sourcegraph/about), [Sourcegraph Docs v2 Vercel deployment](https://github.com/sourcegraph/sourcegraph-docs-v2) and [Community Code Search deployment](https://github.com/sourcegraph/deploy-sourcegraph-cloud):

Proxy routing is based on the URL mapping (`routes.tf`):

- Unless explicitly matched, all traffic goes to the Community Code Search deployment by default.
- The list of `marketing_pages` specifies exact URL matches.
- The list of `marketing_folders` specifies prefix URL matches.

Environments setup:

- For the QA environment:
  - Uses https://testwww.sourcegraph.com to access the GFE
  - URL mapping is defined in the [`envs/qa/project/routes.tf`](https://github.com/sourcegraph/infrastructure/blob/main/gfe/envs/qa/project/routes.tf)
- For the production environment:
  - Uses https://newwww.sourcegraph.com to access the GFE (for the time being, this will transition to just sourcegraph.com by mid-Dec, 2023)
  - URL mapping is defined in the [`envs/prod/project/routes.tf`](https://github.com/sourcegraph/infrastructure/blob/main/gfe/envs/prod/project/routes.tf)
