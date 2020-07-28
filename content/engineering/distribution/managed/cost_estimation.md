# Managed instances: cost estimation

The following describes how to **estimate** the infrastructure costs incurred for a managed instance. Managed instances are always created in completely isolated GCP projects, and as such it is easy to see the exact infrastructure cost breakdown for a given customer.

| Cost estimate                  | Description                                                                                                                  |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| $388/mo min. varies         | [VM instance](https://cloud.google.com/compute/vm-instance-pricing#n1_standard_machine_types), `n1-standard-16` min. in `us-central`. Consult [resource estimator](https://docs.sourcegraph.com/admin/install/resource_estimator) |
| $85/mo min. / $0.340/GB        | Data disk, SSD/regional, 250G minimum - exact size depends on customer's repository sizes.                                   |
| $34/mo                         | Boot disk, SSD/regional, 100G fixed size.                                                                                    |
| $85/mo / $0.026/GB             | 13 weekly snapshots (taken weekly, retained for 90d)                                                                         |       
| $78/mo / $0.026/GB             | 12 monthly upgrade data disk snapshots (taken once per month as part of upgrade, retained for 1yr).                          |
| $36/mo                         | [Cloud Load Balancing](https://cloud.google.com/vpc/network-pricing#lb), two rules required.                                 |
| $12/mo                         | [External IP address](https://cloud.google.com/vpc/network-pricing#ipaddress), four required.                                |
| $1/mo + $0.045/GB              | [Cloud NAT](https://cloud.google.com/vpc/network-pricing#nat-pricing), one required.                                         |
| $6/mo + $0.75/million requests | [Cloud Armor](https://cloud.google.com/vpc/network-pricing#armor-pricing), one policy, one rule, and user-activity requests. |
| $1.42/GB                       | [Cloud Proxy](https://cloud.google.com/vpc/network-pricing#proxy-instance-charge), 3 are required.                           |
| $0.12/GB                       | [Internet egress traffic](https://cloud.google.com/vpc/network-pricing#internet_egress) from `us-central1`.                  |

Or, more succinctly:

| Cost estimate  | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| $282/mo        | **data and snapshot storage costs for the first 250GB**                  |
| $56/mo         | **network infrastructure costs**                                         |
| +$388/mo min.  | **n1-standard-16, or your VM instance type based on resource estimator** |
| +$1/GB storage | **For any additional storage above 250GB required.**                     |
| +$1.54/GB      | **For each GB of network traffic to/from the instance.**                 |

Thus, the smallest managed instance supporting around ~300 repositories and ~100 users costs around $726/mo.

**IMPORTANT:** This is a _rough estimate_ to the best of our ability, infrastructure pricing estimates are not trivial to do extremely accurately and actual costs are always subject to change. The goal of this is to give you a rough estimate of costs, not an exact amount.

### Cost savings

The above does not take into account:

- Potential committed use discounts, which are handled transparently on Sourcegraphs' side through [cross-project committed use discount sharing](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#sharing_committed_use_discounts_across_projects) and passed onto you automatically.
- Cost reduction based on proactive monitoring of services based on your actual usage - resource requirements of Sourcegraph vary widely depending on how your usage looks. This is handled automatically by Sourcegraph as part of monthly upgrades.
