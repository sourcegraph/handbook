# Customer Reference Sandboxe Environments

## Purpose & Use

The IE team is creating and will maintain reference sandbox environments that emulate complex customer environments. This allows us to more quickly demonstrate Sourcegraph’s value proposition to prospective customers. 

These environments will be stored in open-source repositories on https://github.com/sourcegraph/ and publicly available to be quickly installed either in our GCP instance or within a prospective customers' instance. If a prospective customer is unable or unwilling to stand up their own environment, we'll spin up  the reference sandbox environment on Sourcegraph’s infrastructure and send login credentials to the prospective customer. The CE will monitor use and be responsible for tearing down the instance to minimize costs.

From our first initial conversation, CEs will share these environments with prospective customers early on. Though prospective customers may still elect to run a formal trial, CE will give every prospect access to a representative environment so that they are able to quickly and easily begin experiencing Sourcegraph. 

## Initial Environments

To start, we will begin with building this structure for environments representing the below two common “flavors” of complex customer:

1. Customers with a large monorepo across major code hosts (Github, Gitlab, Bitbucket, Perforce)
2. Customers with many repos and complex permissioning across major code hosts (Github, Gitlab, Bitbucket, Perforce)

We'll exapnd these environments over time.

