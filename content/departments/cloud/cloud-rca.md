# Root Cause Analysis (RCA) / Post-mortem Template

While the Cloud team strives to keep Sourcegraph Cloud running smoothly, occassionaly
outages do happen. When they do, we should respond with a clear post-mortem.

This is an industry norm and clear, high quality post-mortems can improve a company's
[trustworthess](https://cloud.google.com/blog/products/gcp/fearless-shared-postmortems-cre-life-lessons).

## Template

You should consider your audience when writing post-mortems. Is this internal facing
or going to be delivered to customers?

1. Incident Summary - briefly describe the incident and its impact on customers. Include
   aspects such as scope, duration and severity.
1. Brief timeline of events
1. Impact Analysis - Describe the impact of the incident on customers, including downtime or
   disruptions to the service
1. Root Cause - explain the underlying cause of the incident. Optionally including technical,
   operational or processes issues that lead to the incident
   The best post-mortems usually contain a clear explanation of what happened.
1. Remediation - describe the actions taken to fix the incident. Optionally include short-term
   workarounds.
1. Follow-ups actions & lessons learned - describe either future steps that will be taken to
   prevent the issue from happening in the future or changes that have already been made.
1. Closure - Communicate to the customer that we take service disruptions seriously and
   that we encourage them to reach out with any further questions.

### Further steps for documents

If there any security concerns that arose during the incident have the #security-team approve
the document.

If the document is intened to be viewed by customers, request a review from our communications team (#ask-internal-comms).

High-quality or interesting post-mortems should be also considered to be published to align
with Sourcegraph's [Open And Transparent Culture](../../company-info-and-process/about-sourcegraph/index.md##sourcegraph-open-product-open-company-open-source).

### Prior Art

- [GitLab post-mortem about db deletion](https://about.gitlab.com/2017/02/10/postmortem-of-database-outage-of-january-31/)
- [Cloudflare edge servers had a memory leak](https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/)
