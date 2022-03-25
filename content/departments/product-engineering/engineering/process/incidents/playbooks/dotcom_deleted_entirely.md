# How to resolve a "Sourcegraph.com is deleted entirely" incident

## Assess in which way it is deleted entirely

- Navigate to the `sourcegraph-dev` project and [look at the existing Kubernetes clusters](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-dev). Does the `cloud` cluster exist still?
  - No, the `cloud` cluster is gone:
    - Do the disks for the now-deleted cluster nodes still exist? Check by navigating to [Compute -> Disks](https://console.cloud.google.com/compute/disks?project=sourcegraph-dev) and searching for `pDName` [search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-cloud%24+pdName+lang:YAML+&patternType=literal)
      - Yes, the disks still exist: Go to **Recreating GKE cluster** and follow the **with existing disks** steps.
      - No, the disks are gone: Go to **Recreating GKE cluster** and follow the **from snapshots** steps.
  - Yes, the cloud cluster exists: Go to **Recreating Kubernetes objects**

## Recreating GKE cluster

We use Terraform to manage our infrastructure

1. [Navigate to the `cloud` repo](https://github.com/sourcegraph/infrastructure/tree/master/cloud)
1. Follow the instructions there to run `terraform plan` to see if the infrastructure has drifted from what is specified there.
1. Run a `terraform apply` to reconcile the infrastructure to its definition in code.
1. **With existing disks**, goto [recreate the Kubernetes objects](#recreating-kubernetes-objects):
1. **From snapshots**, goto [restore the disks from snapshots](#restore-disks-from-snapshots)
1. Go to **Confirm health of Sourcegraph.com**

## Recreating Kubernetes objects

1. [Navigate to the `cloud` cluster on the Google Cloud console](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-dev) and click `Connect`, run the `gcloud command it gives you.
1. `kubectl -n prod get deployments` should show partial or no Kubernetes deployments, but that you are connected to the right cluster.
1. In the https://github.com/sourcegraph/deploy-sourcegraph-cloud repository's latest `release` branch, run `kubectl-apply-all.sh` which will recreate all Kubernetes objects.

- Sourcegraph.com uses static disk attachments, so the volumes should still be valid and no data should have been lost.

Go to **Confirm health of Sourcegraph.com**

## Restore disks from snapshots

1. We use [Velero](https://velero.io/docs/v1.8/index.html) to manage our disaster recovery process.
1. [Navigate to the `cloud` cluster on the Google Cloud console](https://console.cloud.google.com/kubernetes/list?project=sourcegraph-dev) and click `Connect`, run the `gcloud` command it gives you.
1. Ensure you have Velero installed locally (`brew install velero`)
1. Check to see if the `velero` namespace exists. `kubectl get ns velero`
1. If it does not, you need to install and configure Velero.

   ```
   gcloud config set project sourcegraph-dev

   SERVICE_ACCOUNT_EMAIL=$(gcloud iam service-accounts list \
   --filter="displayName:Velero service account" \
   --format 'value(email)')

   gcloud iam service-accounts keys create credentials-velero \
   --iam-account $SERVICE_ACCOUNT_EMAIL

   velero install \
   --provider gcp \
   --plugins velero/velero-plugin-for-gcp:v1.4.0 \
   --bucket sg-velero-cloud-backup \
   --secret-file ./credentials-velero
   ```

1. Following the velero restore [documents](https://velero.io/docs/v1.8/disaster-case/) steps.
   a. First, patch the backup location
   ```
   kubectl patch backupstoragelocation default \
   --namespace velero \
   --type merge \
   --patch '{"spec":{"accessMode":"ReadOnly"}}'
   ```
   b. Find the most recent backup with `velero backup get` and run `velero restore create --from-backup <BACKUPNAME>`
   c. Finally, revert the accessMode
   ```
   kubectl patch backupstoragelocation default \
   --namespace velero \
   --type merge \
   --patch '{"spec":{"accessMode":"ReadWrite"}}'
   ```
1. Goto [confirm the health of Sourcegraph.com](#confirm-health-of-sourcegraph-com)

## Confirm health of Sourcegraph.com

- Check that `kubectl -n prod get pods` shows all pods as healthy and starting.
- Check that sourcegraph.com is accessible and you can run searches.
- Check that https://sourcegraph.com/site-admin shows a large number of users, repositories, etc. indicating postgres data exists.
- Check that the following are online and working:
  - https://about.sourcegraph.com
  - https://docs.sourcegraph.com
- Check that:
  - Regular expression searches [like this](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/about%24+about-docsite&patternType=regexp) are working.
  - `type:symbol errorf` works
  - `repo:/sourcegraph/sourcegraph$ type:symbol index:no errorf` works
  - hover, jump-to-definition, find-references work
- OpsGenie shows no more open alerts
- https://sourcegraph.com/-/debug/grafana shows no unexpected alerts

Follow [the documented regular incident follow-up procedures](index.md).
