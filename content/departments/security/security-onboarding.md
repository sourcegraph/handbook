# Security Onboarding **🧑‍💻**

Welcome to the Security Team 🥳

Congrats on taking your first steps towards a new chapter in your cyber security career! Our team is here to support and guide you on this journey so never hesitate to reach out in the team Slack channel **#security-internal**.

Below you'll find some steps to get your local development enviroment set up, common tools installed, access etc.

## Useful Slack Channels

Sourcegraph as a whole uses Slack heavily for daily communication - our team also uses a [journal](https://docs.google.com/document/d/1cUI_M5KO7ksl8V3CAUBj0O1IUL7wZQSmjPlZTIe-sg4/edit) to document work progress each week. Here are some recommended channels to join to make sure you're kept in the loop.

- **#discuss-security** - This is our public channel where other teams can contact us with questions / support requests.
- **#team-security** - This is our teams "private" channel (all channels are visible to all) where our team can collaborate with each other asynchronously, share interesting news, ocassional memes, or to just say hello 😄
- **#security-monitoring** - This is where our automated monitoring alerts are posted.
- **#security-terraform** - Our infrastructure is managed using Terraform, and notifications regarding changes to security-related infrastructure go here.
- **#incidents** - This is where product incidents are posted. A useful channel if you get engaged for an incident and need context.
- **#security-code-monitoring** - This is where our Code scanning monitoring alerts are posted that includes Semgrep SAST, Dependabot, Hackerone.
- **#security-infra-observability** - This is where alerts go related to the availability of our security systems. This includes alerts from Google Monitoring and uptime checks.

## GitHub Setup

If you haven't been given access to Sourcegraph's Organization on GitHub yet reach out to **#it-tech-ops** on Slack and provide your GitHub username.

We are an all-remote company and favor asynchronous communication, it is important to configure your notifications correctly so that you receive and read notifications that are important (e.g. someone makes a comment on one of your PRs, someone adds you as a reviewer to a PR) without being overwhelmed by notifications that don’t involve you.

- [Configure GitHub notifications](../../company-info-and-process/onboarding/git-intro/github-notifications/index.md)

## Other Access

- Ensure you have access to the following services. If not, request access via the listed teams:
  - [Buildkite](https://buildkite.com/sourcegraph?team=sourcegraphers) - Our CI (Continuous Integration) pipelines host.
    - Self-serve via google auth
  - [Cloudflare](https://dash.cloudflare.com/login) - Our CDN / WAF / DNS provider.
    - **#security** or you can reach out in **#security-internal**
  - [GCP](https://console.cloud.google.com) (Google Cloud Platform) - GCP is where our Cloud infastructure exists.
    - **#it-tech-ops**
  - [Google Workspaces investigation tool](https://admin.google.com/ac/sc/investigation)
    - **#it-tech-ops**
  - [OpsGenie](https://sourcegraph.app.opsgenie.com/teams/dashboard/ff31605f-6091-4ab0-93f5-3b5b9a79100c/main)
    - **#security-internal**
  - [Security Team 1Password shared vault](https://team-sourcegraph.1password.com/home) - where we store credentials used by the team
    - **#it-tech-ops**
  - [HackerOne](https://www.hackerone.com/) - used for bug bounty management
    - **#security-internal**

## Sourcegraph - Local Enviroment Setup

It's much easier to test and debug code locally. Follow the below guide to get Sourcegraph up and running!

- [SG local Setup](https://github.com/sourcegraph/sourcegraph/blob/main/doc/dev/setup/quickstart.md) [_If you encounter any issues, ask for help in #dev-chat and then update the documentation to reflect the resolution (so the next engineer that we hire doesn’t run into the same problem)_]

### Sourcegraph - Browser Search Engine

Our browser extension has a handy search shortcut letting you quickly search using Sourcegraph. This can be a life saver if you need to quickly find something!

- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine)

Our private code repositories can only be searched using our internal dev instance of Sourcegraph (dogfood) so adding a second shortcut is recommended.

- To search our private code, log in to our [internal dogfood instance](../engineering/dev/process/deployments/instances.md#k8s-sgdev-org) (<code>[k8s.sgdev.org](https://k8s.sgdev.org/)</code>) and add another entry: <code>[https://k8s.sgdev.org/search?q=%s](https://k8s.sgdev.org/search?q=%s)</code>.

## Tools Setup

1. [Setup the google cloud CLI tool](https://cloud.google.com/functions/docs/quickstart) and authenticate.
   - Required for terraform and kubectl.
2. [Set up Terraform](https://github.com/sourcegraph/infrastructure#first-time-using-terraform)
   - Terraform is our infastructure as code tool which we use to modify our enviroments.
3. [Connect to dogfood with kubectl](../engineering/dev/process/deployments/debugging/tutorial.md#gain-access-to-the-cluster)
   - For prod and other clusters it’s just a matter of adding the other kubeconfigs
4. Download and setup [BurpSuite Community Edition](https://portswigger.net/burp/communitydownload) on your laptop.
   - You can use [this Burp project](https://drive.google.com/file/d/1__fpwVbzUyuZinbrJnEJSVe3WM1ANpxQ/view?usp=sharing) already configured for Sourcegraph.
   - Try to capture some traffic in your local sourcegraph instance such as logging in.

## Training

### Golang

Sourcegraph is built primarily using [Golang](https://golang.org/) if you are unfamiliar with Go it's definitely worth spending some time here to ensure you understand the basics. Go is similar to C but has some syntax differences as well as a replacement for traditional threads called Goroutines. Take your time and step through the below tutorials:

- [Go Intro](https://www.w3schools.com/go/go_introduction.php)
- [Intro to Goroutines & Channels](https://golangbot.com/goroutines/)

## Onboarding Tasks

Alright! Time to get our hands dirty 👷
Work through and complete the below onboarding tasks. It's not expected for you to master these on your first run through so please reach out to the team if you'd like someone to pair with for support 😃

### Explore the Product

The more familiar you are with Sourcegraph and it's components the better! Spend some time code surfing and try to step through a certain feature or component.

- Run some sample searches with help from our [product documentation](https://docs.sourcegraph.com).
- Run a [Batch Change](https://docs.sourcegraph.com/batch_changes/quickstart) to update multiple repos at once!

### Buildkite

Explore our Continuous Integration (CI) platform [Buildkite](https://buildkite.com/sourcegraph?team=sourcegraphers). There's no need to deepdive on the [documentation](https://buildkite.com/docs/pipelines) but understanding the basics on a high-level and familiarizing yourself with our usage is recommended.

### Secret Rotation

It’s a common ask of the Security team to rotate or help rotate production secrets. We have extensive documentation about [Secret Management at Sourcegraph](https://docs.google.com/document/d/1Qm5P4KbyVMP_KyPvud0qyqUb43RK3lTFMjAeE6623Nw/edit#heading=h.2xk4w97izb7i). Don’t worry about how to create new secrets unless you’re interested in the setup. For now what matters is focusing on the <code>Rotating Secrets</code> and <code>Secret Types</code> sections.

The goal is rotating two production secrets. You can choose any in these categories:

- <strong>A secret in [sourcegraph.com](http://sourcegraph.com/) site-config</strong>: Sourcegraph instances may contain secrets such as OAuth creds in the site-config file. Choose one secret from dotcom’s site-config and rotate. Hint: Avoid the GitLab OAuth creds - go for GitHub OAuth or SMTP credentials.
- <strong>Any secret in our production pods or CI</strong>: Besides site-config, it’s important to know how to rotate secrets that we use as env vars in our pods. Look for any secrets that you think are a good idea to rotate in the <code>deploy-sourcegraph-dotcom</code> or <code>infrastructure</code> repositories. [This search ](https://k8s.sgdev.org/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/%28deploy-sourcegraph-cloud%7Cinfrastructure%29+file:%28base%7Cbuildkite%29+file:%5C.Deployment%5C.yaml%24+secretKeyRef&patternType=regexp)can serve as a starting point to find some secrets to rotate.

**Note:** This requires having completed the set up part of your Security onboarding. Dig through our code, GCP, 1Password and especially the Secret Management doc.

### Security Support Rotation

Skim through our support rotation page in the [handbook](security-support-rotation.md). This is meant as a reference so no need to memorize anything 🙂

## Resources:

- [Docs.sourcegraph.com](https://docs.sourcegraph.com)
- [Secret Management Doc](https://docs.google.com/document/d/1Qm5P4KbyVMP_KyPvud0qyqUb43RK3lTFMjAeE6623Nw/edit#heading=h.2xk4w97izb7i)
- [Security support rotation](security-support-rotation.md)
- Sourcegraph demo video

## Acceptance Criteria

- You are able to run Sourcegraph code locally with dev-private
- You are able to run `tf plan` on the sourcegraph/infrastructure repository
- You are able to `kubectl` into our clusters
- You have BurpSuite set up on your local machine
- You have installed the OpsGenie app on your phone
