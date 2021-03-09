# Support Prioritization

We have many factors to consider in order to determine priorities and as such, we need very clear boundaries and definitions to ensure there is only ever a single number one priority and it’s straightforward to determine what that is. 

## Priority definitions
All work is assigned a priority per these definitions:

* **p0:** Helping engineering troubleshoot and handling communications (to internal stakeholders, to customers via a status page, and to customers if they reach out) during a system outage (`about`, `/search` on sourcegraph.com, or `docs` is fully unreachable) per our [p0 incident response](p0-Incident-Response.md) practice. These are rare, and when they happen, we engage ASAP and it's our most important priority until the issue is resolved.
* **p1:** All customer (including those in the pre-sales process) reported issues per our contractual p1 service level agreement definition [here](https://about.sourcegraph.com/handbook/ce/support#our-service-level-agreements-slas).
* **p2:** All customer (including those in the pre-sales process) reported issues per our contractual p2 service level agreement definition [here](https://about.sourcegraph.com/handbook/ce/support#our-service-level-agreements-slas).
* **p3:** Any internally identified goals/tasks/projects.

## Time allocations
80% of our time is spent on p0, p1, and p2 work (with p0 work being very rare). 20% of our time is spent on internally identified goals/tasks/projects. We protect this time with our focus blocks as outlined in our [team schedule](support-schedule.md).

## Making hard choices
Sometimes we have too much work to keep it simple. In these situations, we will put forth our best effort and unless something about the situation requires us to deviate, we follow this order of priority:

* Paying and pre-sales customers first
* Team customers second
* Free customers third
* Open source fourth
* Internally driven work last

When we have a normal amount of work, we help when help is needed and even with a SLA of 24 hour response time, we still strive to get back to customers (including pre-sales) within a couple of hours most of the time.


## Priority assignment
Priority is always assigned by us, sometimes with input from the customer and/or other internal teams/practices/contractual obligations. We will only expect engineering to drop everything for p0. With p1, it’s okay if engineering waits a day and that can be assessed. Either way, the idea is that we expect very few p0/p1 issues overall, so the need to drop everything should be rare. This also means that it’s okay for p2 issues to sit a bit before engineering takes a look and decides timing for work. The onus will be on support to provide all the necessary context for engineering to decide how to handle p2 issues.
