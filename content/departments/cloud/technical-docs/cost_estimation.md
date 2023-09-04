# Managed instances: cost estimation

> [!WARNING] This page is **DEPRECATED**, and only retain to provide historical context

## How to calculate the cost of a managed instance

> ⚠️ **IMPORTANT:** This provides a _rough estimate_ to the best of our ability, infrastructure pricing estimates are not trivial to do accurately and actual costs are always subject to change. The goal of this is to give you a rough estimate of costs, not an exact amount.<br><br>ℹ️ If unsure about anything with pricing for a managed instance, message `@devops-support` in the [#cloud-devops] – ensure you include all the information needed for the resource calculator and any extra information about why you need help.

Several data points are needed to work out the cost:

- Size of all of their repositories on disk
- Number of repositories
- Number of those repositories that are monorepos

These data points are also listed in the CS [managed instance request template](https://github.com/sourcegraph/customer/blob/master/.github/ISSUE_TEMPLATE/new_managed_instance.yml).

| Cost estimate  | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| $282/mo        | Data and snapshot storage costs for the first 250GB                                                  |
| +$1/GB storage | For any additional storage above 250GB required.                                                     |
| $56/mo         | Network infrastructure costs                                                                         |
| +$388/mo min.  | VM instance type - [see "Working out the VM type required" below](#working-out-the-vm-type-required) |
| +$1.54/GB      | For each GB of network traffic to/from the instance.                                                 |

Thus, the smallest managed instance supporting around ~300 repositories and ~100 users costs around $726/mo. Add enough buffer to the pricing to account for some variation in usage—for example, an estimate of $10–15k for this instance.

### Working out the VM type required

1. Use the [resource estimator](https://docs.sourcegraph.com/admin/install/resource_estimator) to work out the memory and CPUs required for the customer's user count and repos.
2. Go to [GCP's page for machine sizing](https://cloud.google.com/compute/vm-instance-pricing#n1_standard_machine_types)
   1. Make sure you're looking at N1 machine types.
   2. Make sure the bar at the top is set as follows, with US-Central selected on the left and Monthly pricing toggled on the right.<br><img src='https://storage.googleapis.com/sourcegraph-assets/docs/images/distribution/Screen%20Shot%202021-07-23%20at%2010.40.32.png'>
3. Find the machine type from any of the following tables that at least exceeds the CPU and memory requirements advised by the Resource Estimator.
   - N1 standard machine types
   - N1 high-memory machine types
   - N1 high-CPU machine types

---

## Potential cost savings

The above does not take into account:

- Potential committed use discounts, which are handled transparently on Sourcegraphs' side through [cross-project committed use discount sharing](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#sharing_committed_use_discounts_across_projects) and passed onto you automatically.
- Cost reduction based on proactive monitoring of services based on your actual usage—resource requirements of Sourcegraph vary widely depending on how your usage looks. This is handled automatically by Sourcegraph as part of monthly upgrades.

---

## Detailed breakdown

The following describes how the above table was derived—reviewing this is not necessary for calculating the cost of a new managed instance.

The following summarizes the infrastructure costs incurred for a managed instance. Managed instances are always created in completely isolated GCP projects, and as such it is easy to see the exact infrastructure cost breakdown for a given customer.

| Cost estimate                  | Description                                                                                                                                                                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $388/mo min. varies            | [VM instance](https://cloud.google.com/compute/vm-instance-pricing#n1_standard_machine_types), `n1-standard-16` min. in `us-central`. Consult [resource estimator](https://docs.sourcegraph.com/admin/install/resource_estimator) |
| $85/mo min. / $0.340/GB        | Data disk, SSD/regional, 250G minimum—exact size depends on customer's repository sizes.                                                                                                                                          |
| $34/mo                         | Boot disk, SSD/regional, 100G fixed size.                                                                                                                                                                                         |
| $85/mo / $0.026/GB             | 13 weekly snapshots (taken weekly, retained for 90d)                                                                                                                                                                              |
| $78/mo / $0.026/GB             | 12 monthly upgrade data disk snapshots (taken once per month as part of upgrade, retained for 1yr).                                                                                                                               |
| $36/mo                         | [Cloud Load Balancing](https://cloud.google.com/vpc/network-pricing#lb), two rules required.                                                                                                                                      |
| $12/mo                         | [External IP address](https://cloud.google.com/vpc/network-pricing#ipaddress), four required.                                                                                                                                     |
| $1/mo + $0.045/GB              | [Cloud NAT](https://cloud.google.com/vpc/network-pricing#nat-pricing), one required.                                                                                                                                              |
| $6/mo + $0.75/million requests | [Cloud Armor](https://cloud.google.com/vpc/network-pricing#armor-pricing), one policy, one rule, and user-activity requests.                                                                                                      |
| $1.42/GB                       | [Cloud Proxy](https://cloud.google.com/vpc/network-pricing#proxy-instance-charge), 3 are required.                                                                                                                                |
| $0.12/GB                       | [Internet egress traffic](https://cloud.google.com/vpc/network-pricing#internet_egress) from `us-central1`.                                                                                                                       |

[#cloud-devops]: https://sourcegraph.slack.com/archives/C02KX975BDG
