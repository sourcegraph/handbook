# Cloud preprod environment (aka staging)

Preprod is live and deployed at https://preview.sgdev.dev/search.

Sourcegraph ensures that new code and infrastructure changes, before being deployed to [production cloud](https://sourcegraph.com), are also deployed and tested on preprod environment.

- [Documentation](https://docs.google.com/document/d/1yGYsFIkvhPrsq4THW1TTnDJlx5vCM2AC4lJK0xpgz24)
- [RFC 586 - Adding Pre-Prod Environment to Cloud CD Pipeline](https://docs.google.com/document/d/1x7Luv4YM5g3iGxtRcc8YUhf6LKky8P0MOFmbSryrzic)
- [RFC 592 - Introduce Staging Environment](https://docs.google.com/document/d/13kVYJSoTWYgyeBFXeJnasF3WU7SHyOjhSNpp9yV_pvY)

## Deploying Code to Preprod

Code is automatically deployed to preprod as part of the [Continuous Deployment Process](../../dev/process/deployments/index.md#continuous-deployment-process). Changes committed to `sourcegraph/deploy-sourcegraph-cloud@preprod` are automatically built and deployed to the preproduction environment.
