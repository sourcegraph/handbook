# Security Onboarding **🧑‍💻**

Welcome to the Security Team 🥳

Congrats on taking your first steps towards a new chapter in your cyber security career! Our team is here to support and guide you on this journey so never hesitate to reach out in the team Slack channel **#security-internal**.

Below you'll find some steps to get your local development enviroment setup, common tools installed, access etc.

## Useful Slack Channels

Sourcegraph as a whole uses Slack heavily for daily communication. Here are some recommended channels to join to make sure you're kept in the loop.

- #security - This is our public channel where other teams can contact us with questions / support requests.
- #security-internal - This is our teams "private" channel (all channels are visible to all) where our team can collaborate with each other asynchronously, share interesting news, ocassional memes, or to just say hello 😄
- #security-team-sync - Each day an app within Slack called Geekbot asks each teammate for an update on the previous day. This is where the updates are posted.
- #security-monitoring - This is where our automated monitoring alerts are posted.
- #incidents - This is where product incidents are posted. A useful channel if you get engaged for an incident and need context.

## Github Access

If you haven't been given access to Sourcegraphs Organization on Github yet reach out to #it-tech-ops on Slack and provide your Github username.

We are an all-remote company and favor asynchronous communication, it is important to configure your notifications correctly so that you receive and read notifications that are important (e.g. someone makes a comment on one of your PRs, someone adds you as a reviewer to a PR) without being overwhelmed by notifications that don’t involve you.

- [Configure GitHub notifications](../../github-notifications/index.md)

## Other Access

- Request access to the services below via the listed teams:
  - GCP (Google Cloud Platform) - GCP is where our Cloud infastructure exists. 
    - #it-tech-ops
  - Buildkite - Our CI (Continuous Integration) pipelines host. 
    - Self-serve via google auth
  - Cloudflare
    - #security or you can reach out in #internal-security

## Sourcegraph - Local Enviroment Setup

The first step is to get your local copy of Sourcegraph running.

- [SG local Setup](https://github.com/sourcegraph/sourcegraph/blob/main/doc/dev/getting-started/index.md) [_If you encounter any issues, ask for help in #dev-chat and then update the documentation to reflect the resolution (so the next engineer that we hire doesn’t run into the same problem)_]

### Sourcegraph - Browser Search Engine

Our browser extension has a handy search shortcut letting you quickly make a search on Sourcegraph. 
- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine)

Our private code repositories can only be searched using our internal dev instance of Sourcegraph (dogfood) so adding a second shortcut is recommended. 
  - To search our private code, log in to our [internal dogfood instance](../../deployments/instances.md#k8s-sgdev-org) (<code>[k8s.sgdev.org](https://k8s.sgdev.org/)</code>) and add another entry: <code>[https://k8s.sgdev.org/search?q=%s](https://k8s.sgdev.org/search?q=%s)</code>. 

## Tools Setup
1. [Setup the google cloud CLI tool](https://cloud.google.com/functions/docs/quickstart) and authenticate.
   - Required for terraform and kubectl.
2. [Set up Terraform](https://github.com/sourcegraph/infrastructure#first-time-using-terraform)
   - Terraform is our infastructure as code tool which we use to modify our enviorments. 
3. [Connect to dogfood with kubectl](../../deployments/debugging/tutorial.md#gain-access-to-the-cluster)
   - For prod and other clusters it’s just a matter of adding the other kubeconfigs
4. Download and setup [Burpsuite community edition](https://portswigger.net/burp/communitydownload) on your laptop.
   - You can use [this Burp project](https://drive.google.com/file/d/1__fpwVbzUyuZinbrJnEJSVe3WM1ANpxQ/view?usp=sharing) already configured for Sourcegraph. 
   - Try to capture some basic traffic such as logging in to Sourcegraph.
  
  Tip: The browser extension FoxyProxy makes it much easier to quickly switch between Burps proxy ;) 

## Training
- Get accustomed to Buildkite

(WIP)

* Secret Rotation:
  - It’s a common ask of the Security team to rotate or help rotate production secrets. We have extensive documentation about [Secret Management at Sourcegraph](https://docs.google.com/document/d/1Qm5P4KbyVMP_KyPvud0qyqUb43RK3lTFMjAeE6623Nw/edit#heading=h.2xk4w97izb7i). Don’t worry about how to create new secrets unless you’re interested in the setup. For now what matters is focusing on the <code>Rotating Secrets</code> and <code>Secret Types</code> sections.
  - The goal is rotating two production secrets. You can choose any in these categories:
    - <strong>A secret in [sourcegraph.com](http://sourcegraph.com/) site-config</strong>: Sourcegraph instances may contain secrets such as OAuth creds in the site-config file. Choose one secret from dotcom’s site-config and rotate. Hint: Avoid the GitLab OAuth creds - go for GitHub OAuth or SMTP credentials.
    - <strong>Any secret in our production pods or CI</strong>: Besides site-config, it’s important to know how to rotate secrets that we use as env vars in our pods. Look for any secrets that you think are a good idea to rotate in the <code>deploy-sourcegraph-dotcom</code> or <code>infrastructure</code> repositories. [This search ](https://k8s.sgdev.org/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/%28deploy-sourcegraph-dot-com%7Cinfrastructure%29+file:%28base%7Cbuildkite%29+file:%5C.Deployment%5C.yaml%24+secretKeyRef&patternType=regexp)can serve as a starting point to find some secrets to rotate.
  - This requires having completed the set up part of your Security onboarding. Dig through our code, GCP, 1Password and especially the Secret Management doc.

- Valuable docs:
  - [Docs.sourcegraph.com](https://docs.sourcegraph.com)
  - [Secret Management Doc](https://docs.google.com/document/d/1Qm5P4KbyVMP_KyPvud0qyqUb43RK3lTFMjAeE6623Nw/edit#heading=h.2xk4w97izb7i)
  - Sourcegraph demo video

## Acceptance Criteria

- You are able to run Sourcegraph code locally with dev-private
- You are able to run tf plan on the sourcegraph/infrastructure repository
- You are able to kubectl into our clusters
- Complete hands on tasks assigned to you as a starter task
- Capture traffic via Burpsuite for analysis
- Rotated secrets per instructions above
