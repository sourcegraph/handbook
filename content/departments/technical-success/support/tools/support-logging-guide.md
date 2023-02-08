# Support Engineers guide to getting started with Sourcegraph logging, services, and observability

**Note to reader:** This guide assumes little to no prior knowledge of how to troubleshoot distributed systems, gather logs, levels of user access, etc. It is an overview with the goal to provide a starting point for _where to look, why to look there, what you are looking for, and who can provide it._

### At the end of this guide you will...

- Have gained a conceptual understanding of Sourcegraph architecture, services, and the logs they generate
- Learn how to `grep`, search and parse through logs to find what you are looking for
- Know the Sourcegraph logging levels and how to set them
- Be better equipped to understand when to gather logs and how to interpret them
- Become familiar with other Sourcegraph observability tools

### Sourcegraph architecture

Sourcegraph is essentially built from many different **services** that are deployed from **docker images**. Each **service** has its own resource allocation, configuration, and other **services** it talks to. Some services communicate to **external services** like GitHub through API's, while others communicate to **internal services**, such as a database, or the client aka **browser**. Each service generates its own **logging data.** All services collect at the **frontend** service. See the [Sourcegraph Architecture page](https://docs.sourcegraph.com/dev/background-information/architecture) for a visual of each service.

### Site administrators

Currently, most Sourcegraph customers deploy **"on premise"** through one of our supported deployment methods: **docker-compose** or **kubernetes**.
They deploy to a variety of places such as AWS, GCP, and bare metal.

**Key concept**: You will encounter exceptions to supported deployments, so refer to customer organization notes and exceptions.\*

When Sourcegraph is deployed **"on premise"**, that means system administrators at the customers organization manage the installation and configuration of their Sourcegraph instance. A system administrator is both a job title and infers level of access to Sourcegraph configurations and logs.

These folks normally have **site administrator** privileges within their Sourcegraph instance. Unlike **regular users**, they have access to Sourcegraph debug and config pages:

Get there by appending the page to a Sourcegraph URL like so https://sourcegraph.com/-/debug/

- `/site-admin` Contains menus for Site and Global configurations, add and remove users, add and remove repos, and more
- `/-/debug/` View things like metrics, events, requests for each **service**
- `/-/debug/grafana/` View the Sourcegraph built in Grafana and alerts dashboard
- Jaeger

Support Engineers (SE's) normally **do not** have direct access to **"on premise"** installations, so troubleshooting is a working relationship between Support Engineers, other Sourcegraph folks, and the **site administrator(s).** There are exceptions to SE level of access so Refer to customer organization notes and exceptions.

### It's log, log, log!

Each service has its own logging data. Conceptually, logs are records of services and databases sending requests and communicating to one another to send data. Often these are made through HTTP requests, but it depends on the entities that are communicating. What you can _see_ in the logs depends on factors like instance configured logging level and what each service has been programmed to send to logs when operating.

Typically in logs you will see records of HTTP requests made to internal and external services. For example:

- Sourcegraph's Gitserver sends an external request via GitHub's API to GitHub.
- If the request is successful, GitHub's API should send back an HTTP response with the requested data.
- The request and response has an HTTP response header associated with it
- All this corresponds to how that API was designed by the service provider.

Extrapolating on API's, this is why knowing which **External service code host(s)** (GitHub, Gitlab, etc) a customer has configured is important because _that external services_ documentation should have API docs for what each status code means. Also, outages for an _exteral service_ could affect a customer's Sourcegraph instance as well.

### Log request timing concepts

Completed HTTP requests and responses will have a time record associated with them. This time (usually milliseconds or seconds) starts when the request is sent from the Sourcegraph service and ends when the service receives a response from the other service.

Generally speaking, not all requests will be captured or timed due to an observability concept called **sampling**. Requests are sampled because if we were to gather _every_ request, that would increase data storage, CPU and memory requirements. _To extent to which Sourcegraph samples or not and where needs further exploration as this author is not sure._

When a request is logged, it's essentially a record that was _a request_ when it is _slower than_ whatever the _threshhold time variable is configured to be._

For Sourcegraph logs and alerting, these thresholds, log severity like `warn`, `critical`, and their **metrics queries** are _hard coded_ into our codebase in the form of Prometheus logging metrics. Prometheus metrics are what populate our built in Grafana dashboards and built in alerting.

### Context, clues and considering the bigger picture

Because the thresholds are hard coded rather than being configurable to each Sourcegraph instance, log messages like `lvl=warn msg="slow http request"` are somewhat relative. For instance, what is "normal" performance for a large Sourcegraph deployment with monorepo, will differ from a smaller deployment with many repos.

Consider that in distributed systems with many services communicating, changes take time to run and complete. API's normally have limits so Sourcegraph is designed to throttle itself. Internet traffic and services which communicate through HTTP are imperfect. Things can happen along the way to interrupt the communication. Other behavior like [race conditions](https://en.wikipedia.org/wiki/Race_condition) are less likely but can be hard to spot. At their worst, these can cause critical failures, but in other cases, services have not had time to sync yet thus report errors because they are attempting to reach a service which isn't ready yet. You can actually observe this by spinning up a new Sourcegraph instance and tailing the logs. For instance, when running `docker-compose up -d`, omit the `-d` (which would tell it to run in the background) and watch the console output. You will probably notice errors reporting from some services until the `frontend` starts.

Again this depends on a lot of factors like number of users, size of the repo's and type, the external services, etc.

### Context clues are things like...

- How recently has this instance been set up? How many users or repos were added in a short period of time?
- Was Sourcegraph working well before? What changed? Recent upgrade or migration?
- Changes like new code hosts (external services) configured, and which code hosts are configured?
- Are the Sourcegraph users reporting client (browser) side issues such as slow search, hover tips that don't load or load sometimes, side bars that don't load?
- Does the customer have a mono-repo, and how large? Do they have smaller repos, how many? Or do they have both?
- How severe are the log level warnings, and how often? `warn` is less severe than `crit`
- Are there issues connecting to one code host and not another?

Look for clues in the logs that a service can successfully send and receive requests. Which service was sending a request and where was sent to? What is the http response back? Is there a response at all? That will guide you towards the root cause.

### Gathering logs and their levels

Logs are very useful in the right situations! Having an intuition for when to ask for them builds over time, and ideally you would have them and have attempted to interpret them before escalating a case.
So before asking a customer for logs, consider a few things:

Urgency of the request...

- If Sourcegraph's frontend is not starting and the web UI is inaccessible, yes you likely need logs!

Less urgent...

- Not every user you talk to has the ability to gather logs. Was the case reported by someone that appears to be a **site administrator**?
- Gathering logs and sharing them with SE's takes customer time and effort. Does it sound like logs are the only place to find the answer? Or are there other places to check like Grafana or in the Sourcegraph site-admin pages?

Blockers to sharing logs...

- Sometimes customer security restrictions dictate what they can and cannot share. Airgapped customers are more likely to restrict what information they can share. In cases like this, can the customer be guided to which services to check in the logs or observability pages? Consider testing out commands in one of our SE test instances or local test instance.

Reported symptoms do not sound like Sourcegraph is 'broken'...

- Is the question more of a "how do I..." type question, such as "This query ... is not returning any results, what am I doing wrong?" Or "my batch spec is failing with this error message..." Consider asking for more details on what they are attempting and testing it before asking for logs.

### Accessing logs

The way to access logs depends on the deployment method and which service you need logs for. For quick reference see the [Support command generator tool](https://sourcegraph.github.io/support-generator/)

[Logging levels are set as an environmental variable `SRC_LOG_LEVEL`.](https://docs.sourcegraph.com/admin/observability/logs) The default logging level in cluster deployments is `dbug`, and in docker it is `warn`. **Site administrators** may have changed the logging level to _more_ or _less_ verbose. The most verbose logging level is `dbug` and the least is `crit`. See this doc for [how to set environment variables.](https://docs.sourcegraph.com/admin/install/docker-compose/operations#set-environment-variables)

At `dbug` level, you will see _all_ the logs. Theoretically you won't miss anything that was logged at the time of log collection. However, you will see everything which can include logs that are not relevant nor indicative of problems.

At `crit` level, only critical level logs will be sent logged. This setting is good for conserving resources and if Sourcegraph is running well, but will make troubleshooting harder due to less visibility into potential problems.

When requesting logs, consider checking or confirming with the **site administrator** what the logging level is set to. If it is set too low, ask them to increase the log level while collecting the logs and then lower it afterwards. Example verbiage:

> I'd like to gather logs for **_ service. Can you ensure the logging level is set to _**? Once you've finished gathering the logs, you are free to change it back to its previous value.

### What logs do you need

Most **site administrators** will know what you mean by gathering logs, but they don't always know which ones to gather. Asking for the **frontend** logs is a good place to start, because all services "talk" to the **frontend**. They can share the logs a variety of ways, but to make it easier, ask for a `.txt` file or similar. Assume that most of the time the logs you receive are fresh, ie what is currently going on and not past events. However, you can confirm that with the log line time stamps.

### Searching a log

There are multiple ways to search through logs. Either in an IDE, directly open the text file, etc. This is just one way to grep through a log in the Mac Terminal that you may find useful.

Assuming you were given a .txt file or similar...

1. Download the log to your computer
2. Open a terminal and navigate to the directory the log is in
3. Assuming you're starting with the frontend, grep for log lines with `warn`, `eror`, and `crit`.

   Example 1: If your file was named `frontend_logs`, you could do `grep -w "eror" frontend_logs` which will display log lines from that file which include the word `eror`.

   Example 2: You may receive logs that are so big they are hard to open or search through. Or maybe you want to save specific log lines in another file to make it easier to read. Modify the `grep` to send to a txt file instead of the console. `grep -w "eror" frontend_logs > your_new_text_file_name.txt`

4. View the output in the terminal or `cat` the output of the text file to the terminal with `cat your_new_text_file_name.txt`

5. Think about the lines that come up. Does anything stand out? Are there log lines repeated _a lot_? What are in the request(s)? How severe is the log level? Are there clues like the service name? Maybe a repo that was affected? An individual user?

For example, if you find something like `lvl=eror msg="syntax highlighting failed` and it came from `error="http://syntect-server:9238`, that indicates the syntect service could have problems. Gathering more logs directly from the syntect server would be a good idea, because that service has additional logs that don't show up in the frontend logs.

### Log line examples

A) Example prometheus log line:

> prometheus | t=2022-03-15T22:58:42+0000 lvl=dbug msg="TRACE internal" host=sourcegraph-frontend-internal:3090 path=/.internal/configuration code=200 duration=979.415µs

Breaking it down:

- `prometheus` is the service that recorded this trace
- `t=2022-03-15T22:58:42+0000` the time it was recorded
- `lvl=dbug` the logging level set when the logs were gathered
- `msg="TRACE internal"` indicates it was a prometheus trace, so a record of a transaction from start to finish, full circle
- `host=sourcegraph-frontend-internal:3090` the host it originated from
- `path=/.internal/configuration` path it took
- `code=200` indicates HTTP 200, so it was a successful request
- `duration=979.415µs` the time it took the trace to complete

Summary: This request completed successfully, it was not slow, and was likely automatically recorded as a sample trace. We saw it because logging was `dbug` so most verbose.

B) Example frontend log line:

> sourcegraph-frontend-0 | t=2022-03-15T00:00:06+0000 lvl=warn msg="slow http request" method=POST url=/.api/graphql?CodeIntelSearch code=200 duration=1m0.148358041s x_forwarded_for="172.25.23.216, 172.18.0.1" user=14191

Breaking it down:

- `sourcegraph-frontend-0` frontend is the service it came from
- `t=2022-03-15T00:00:06+0000` the time it was recorded
- `lvl=warn` warn logging level indicates the time on this request isn't great, but not the worst
- `msg="slow http request"` indicates it was marked as slow because it met the threshold criteria for a slow request
- `method=POST url=/.api/graphql?CodeIntelSearch` indicates the frontend received a POST request from a client (users browser), to the CodeIntelSearch service endpoint.
- `code=200` The request was successful
- `duration=1m0.148358041s`
- `x_forwarded_for="172.25.23.216, 172.18.0.1" user=14191` The IP the request was sent to, and the user ID.

We can extrapolate that the user performed an action in Sourcegraph that used CodeIntel (hover tool tips?) and the request completed, but was slow and the user probably saw it 'take awhile to load the tooltip.' This _could_ indicate Sourcegraph is under-provisioned and could use more resources. Or it could indicate a particular user is having issues. Check for clues like are the slow requests being sent to one user or many? Note: the `user` value can be looked up in the pgsql database table!

### Further reading

- [Sourcegraph administrator special privileges](https://docs.sourcegraph.com/admin/privileges#impersonate-regular-users)
- [Feature request - Add better log messaging around services successfully starting](https://github.com/sourcegraph/sourcegraph/issues/22106)
