# How to resolve a "Sourcegraph.com is deleted entirely" incident

## Assess in which way it is deleted entirely

- Navigate to the `sourcegraph-dev` project and [look at the existing Kubernetes clusters](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-dev). Does the `cloud` cluster exist still?
  - No, the dot-com cluster is gone:
    - Do the disks for the now-deleted cluster nodes still exist? Check by navigating to [Compute -> Disks](https://console.cloud.google.com/compute/disks?project=sourcegraph-dev) and searching for `pgsql-prod---cloud` (
      - Yes, the disks still exist: Go to **Recreating GKE cluster** and follow the **with existing disks** steps.
      - No, the disks are gone: Go to **Recreating GKE cluster** and follow the **from snapshots** steps.
  - Yes, the cloud cluster exists: Go to **Recreating Kubernetes objects**

## Recreating GKE cluster

We use Terraform to manage our deployments

1. [Navigate to the `cloud` repo](https://github.com/sourcegraph/infrastructure/tree/master/cloud)
2. Follow the instructions there to run `terraform plan` to see if the infrastructure has drifted from what is specified there.
3. **With existing disks**, recreate the Kubernetes objects:
   a. Do NOT run `create-new-cluster.sh` as it will try to recreate the statically-named disks.
   b. Run `kubectl-apply-all.sh` and most things should come online but Sourcegraph.com will still be inaccessible.
   c. Run [configure/ingress-nginx/install.sh](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/master/configure/ingress-nginx/install.sh) to install the nginx ingress.
   d. Expose the cluster by running ONLY the `kubectl expose` commands found in [`create-new-cluster.sh`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/create-new-cluster.sh#L61-L80)
   e. Go to **Confirm health of Sourcegraph.com**
4. **From snapshots**, recreate the Kubernetes objects:
   a. Since nothing exists, run `create-new-cluster.sh` and it will recreate everything including disks.
   b. Sourcegraph.com should now be accessible, but with no postgres, redis-store, or precise-code-intel-bundle-manager data present.
   c. Restore pgsql disks from the latest `pgsql-prod---cloud` compute snapshot, `redis-store---cloud` snapshot, and `bundle-manager---cloud` snapshot: https://console.cloud.google.com/compute/snapshots?project=sourcegraph-dev
   - TODO: this section should be more explicit about what needs to be done.
     d. Go to **Confirm health of Sourcegraph.com**

## Recreating Kubernetes objects

1. [Navigate to the `cloud` cluster on the Google Cloud console](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-dev) and click `Connect`, run the `gcloud command it gives you.
1. `kubectl -n prod get deployments` should show partial or no Kubernetes deployments, but that you are connected to the right cluster.
1. In the https://github.com/sourcegraph/deploy-sourcegraph-dot-com repository's latest `release` branch, run `kubectl-apply-all.sh` which will recreate all Kubernetes objects.

- Sourcegraph.com uses static disk attachments, so the volumes should still be valid and no data should have been lost.

Go to **Confirm health of Sourcegraph.com**

## Confirm health of Sourcegraph.com

- Check that `kubectl -n prod get pods` shows all pods as healthy and starting.
- Check that sourcegraph.com is accessible and you can run searches.
- Check that https://sourcegraph.com/site-admin shows a large number of users, repositories, etc. indicating postgres data exists.
- Check that the following are online and working:
  - https://about.sourcegraph.com
  - https://handbook.sourcegraph.com
  - https://docs.sourcegraph.com
  - https://sgdev.org
  - https://about-docsite.sourcegraph.com/
- Check that:
  - Regular expression searches [like this](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/about%24+about-docsite&patternType=regexp) are working.
  - `type:symbol errorf` works
  - `repo:/sourcegraph/sourcegraph$ type:symbol index:no errorf` works
  - hover, jump-to-definition, find-references work
- OpsGenie shows no more open alerts
- https://sourcegraph.com/-/debug/grafana shows no unexpected alerts

Follow [the documented regular incident follow-up procedures](index.md).
