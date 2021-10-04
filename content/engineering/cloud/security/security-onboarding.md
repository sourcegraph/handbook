# Security🧑‍💻

## Setup
Set up your local development environment. 
If you encounter any issues, ask for help in #dev-chat and then update the documentation to reflect the resolution (so the next engineer that we hire doesn’t run into the same problem).
Setup Github and Configure your GitHub notifications: 
Because we are an all-remote company and favor asynchronous communication, it is important to configure your notifications correctly so that you receive and read notifications that are important (e.g. someone makes a comment on one of your PRs, someone adds you as a reviewer to a PR) without being overwhelmed by notifications that don’t involve you.
Add Sourcegraph as a browser search engine. 
To search our private code, log in to our internal dogfood instance (k8s.sgdev.org) and add another entry: https://k8s.sgdev.org/search?q=%s.
Request access to 
GCP
Buildkite
Sourcegraph Github repo
Cloudflare
Setup SG tool per https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md
Setup the google cloud CLI tool and authenticate. 
That is needed for terraform and kubectl.
Install and Setup sourcegraph terraform 
https://github.com/sourcegraph/infrastructure#first-time-using-terraform
Connecting to dogfood with kubectl. 
For prod and other clusters it’s just a matter of adding the other kubeconfigs
Get accustomed to Buildkite
Understanding adding security steps to pipeline
Download and setup Burpsuite community edition on your laptop
Valuable docs to read:
Docs.sourcegraph.com
Sourcegraph demo video
