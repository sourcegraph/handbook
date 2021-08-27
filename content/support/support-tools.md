# Support Tools

When you first start in support, the list of tools to set-up can feel like a lot. This document explains how they add value for you, (when relevant) how they fit together, and a deep dive on Zendesk.

## Internal collaboration

- Slack is our primary communication tool.
- Github is where our handbook lives.
- Zoom is how we connect synchronously.
- Gmail is mostly for notifications.
- Google calendar is for your calendar, as well as shared calendars (like the CS team calendar).
- Asana is for our project tracking as a team
- Gsuite is for drafts, slide decks, and spreadsheets.
- Lattice is to facilitate our for our twice yearly [review cycles](https://about.sourcegraph.com/handbook/people-ops/review-cycles).
- Greenhouse is for hiring.
- Grammarly and Hemingwayapp help us say what we intend.
- Otter.ai makes it easier for everyone to follow along during Zoom calls.

## All things customers

- Zendesk is where we manage our day-to-day work and interact with some customers.
- Slack is where we interact with most customers.
- Salesforce is our source of truth for customer data.
- Looker is our data warehouse so we can connect different data sources and analyze anything we need to.
- ProductBoard is where collect all feedback about the product.
- Calendly is useful when you need to schedule a call with a customer.
- Krisp quiets background noise when on Zoom.
- Grammarly and Hemingwayapp help us say what we intend and catch any typos we don't see.

## sourcegraph.com admin access

In order to have good security and risk mitigation practices, only a subset of the team has admin access to sourcegraph.com. If you need to help a customer and it requires such access, post in our #customer-support-internal Slack channel and @ mention Adeola, Beatrix, Giselle, Stompy, and Warren. One of them can help!

## Managed instance access

In order to have good security and risk mitigation practices, only a subset of the team has [access to managed instances](https://about.sourcegraph.com/handbook/support/support-managed-instances) (you can find which customers have a managed instance [here](https://about.sourcegraph.com/handbook/support/customer-exceptions)). If you need to access logs for these customers, post in our #customer-support-internal Slack channel and @ mention Don, Jason, and Mariam. One of them can help!

Read more about working with managed instances [here](https://about.sourcegraph.com/handbook/support/support-managed-instances).

## Test Environments

There are some test environments created specifically for the Customer Support Engineers to run tests on when helping customers. They allow the team to reproduce and debug issues without affecting our production instances.

- [Test instance deployed with Docker Compose](https://cse-aws-test.sgdev.org/) ([_management doc_](managing-cse-aws.md))
- [Test instance deployed with Kubernetes](https://cse-k8s.sgdev.org/) ([_management doc_](managing-cse-k8s.md))
- [Single Docker for local testing](https://docs.sourcegraph.com/admin/install/docker)
- [Installation guide for Local Development](https://docs.sourcegraph.com/dev)
- [GitHub test instance ](https://github.sgdev.org)
- [GitLab test instance ](https://gitlab.sgdev.org)
- [Gerrit test instance ](https://gerrit.sgdev.org/)
- [Bitbucket test instance ](https://bitbucket.sgdev.org/)
- [Phabricator test instance ](https://phabricator.sgdev.org/)
- [Dogfood Perforce instance](p4-enablement.md)

> NOTE: You can find all the login credentials for the test instances in your 1Password account.

## Troubleshooting

### GitHub Repository for Support Tools

The [Support Tools GitHub Repository](https://github.com/sourcegraph/support-tools-internal) contains tools built by the Customer Support Engineers that provide values when supporting our customers. This repository is private and you are welcome to add your projects to this repository, but please speak to Virginia about your ideas and plans before development starts to aviod possible conflicts.

> NOTE: Please aviod working directly on main branch.

[Link to Support Tools GitHub Repository](https://github.com/sourcegraph/support-tools-internal)

### Command Line Generator

The [Command Line Generator](https://github.com/sourcegraph/support-generator) is a simple web app that supports can use to generate the most frequently used commands for different deployment type when supporting a customer.

[Link to Command Line Generator GitHub Repository](https://github.com/sourcegraph/support-generator)

### Sourcegraph Graphql Voyager

[Sourcegraph Graphql Voyager](https://sourcegraph.github.io/support-tools-internal/Graphql-Voyager/) is a bootstraped tool that allows users to visually explore the Sourcegraph GraphQL API as an interactive graph.

#### How to use:

1. Go to [Cors Demo](https://cors-anywhere.herokuapp.com/) to opt-in for temporary `Cors Anywhere` access by clicking on the Request temporary access to the demo server button
2. Enter your Sourcegraph Token on homescreen

[Link to Sourcegraph Graphql Voyager GitHub Repository](https://github.com/sourcegraph/support-tools-internal/tree/main/Graphql-Voyager)

### Scripts

Creating customized scripts can help automate a repetitive task for the team and the customers. You can find all the existing scripts in this [directory](https://github.com/sourcegraph/support-scripts) and are welcome to write and share your own custom scripts with the team.

> WARNING: This is a **public** repository. Please \*_do not_ add any private information to any part of the repository, including the names of our customers.

[Link to GitHub Repository for Scripts](https://github.com/sourcegraph/support-scripts)

## Zendesk

This section captures our Zendesk protocol and configuration decisions.

### Access

- CSEs have agent access
- Virginia, Brielle, Nonso, Tamar, and Tech Ops have admin access
- Only Virginia can modify billing related items
