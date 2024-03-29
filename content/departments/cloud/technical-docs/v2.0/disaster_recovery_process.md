# Disaster recovery process of a Cloud instance

<span class="badge badge-note">SOC2/CI-82</span>

Report from [failover test on 28th of November 2022](https://docs.google.com/document/d/1CfI2m2eZ-dtG1XoPpWEuWm87XJ7m2dbQAG2tOHV74pk/edit)
Report from [disaster recovery test on 30th-31th of January 2024](https://docs.google.com/document/d/16yhTlV_qvZ1tsxYLZteOBwvIV_-R0p5R9rLwTGLaH5w/edit)

## GKE cluster zone failover

> [!IMPORTANT] this does not test GKE api server zone failover as it's already HA with 3 replica across multiple zones managed by GCP.

- export environment variables

```sh
export ENVIRONMENT=[dev|prod]
export SLUG=<SLUG>
export GKE_NAME=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcp.gkeClusters[0].name')
export GKE_REGION=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcp.region')
export GCP_PROJECT=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcp.projectId')
```

- extract the instance from Control Plane if `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`

Follow the `Extract instance from control plane (break glass)` section from the Ops Dashboard of the instance, go/cloud-ops

- check instance is healthy

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraphcloud.com/sign-in -i
```

- connect to cluster

```sh
mi2 instance workon -e $ENVIRONMENT --slug $SLUG -exec
```

- verify node zone

```sh
kubectl get nodes
kubectl describe node <NODE_FROM_CLUSTER> | grep zone
```

- perform zone failover (remove node zone from GKE node locations)

**NOTE ON TARGET ZONES**
`gcloud container node-pools describe` will return a list of zones into which the node pool can be deployed. The output of the `kubectl describe node` command above will show which of those zones is actually in use.

The TARGET_ZONE will take a list of zones into which the node pool should be deployed. You should remove the failed zone from this list (and add new zones as needed). For instance: if the current node-pools are in `us-central-1a` and `us-central-1c`, and the active node is provisioned in `us-central-1a`, you can fail over to `us-central-1c` by removing `us-central-1a` from the list.

```sh
gcloud container node-pools list --cluster $GKE_NAME --region $GKE_REGION --project $GCP_PROJECT
gcloud container node-pools describe primary --cluster $GKE_NAME --region $GKE_REGION --project $GCP_PROJECT --format json | jq '.locations'
gcloud container node-pools update primary --cluster $GKE_NAME --region $GKE_REGION --project $GCP_PROJECT --node-locations <TARGET_ZONE> --async
```

- verify pods were terminated

```
kubectl get pods # should show failing pods, b/c node was drained
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health # should fail
```

- wait for new node to be ready

```sh
kubect get nodes # waiting for new node
```

- verify new node zone

```sh
kubectl describe node <NEW_NODE> | grep zone # should be different from previous node
```

- check instance is healthy

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraphcloud.com/sign-in -i
```

- backfill the instance into Control Plane if `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`

Follow the `Backfill instance into control plane` section from the Ops Dashboard of the instance, go/cloud-ops

## CloudSQL zone failover

- export environment variables

```sh
export ENVIRONMENT=[dev|prod]
export SLUG=<SLUG>
export CLOUDSQL_INSTANCE_NAME=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcp.cloudSQL[0].name')
export GCP_PROJECT=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcp.projectId')
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
```

- extract the instance from Control Plane if `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`

Follow the `Extract instance from control plane (break glass)` section from the Ops Dashboard of the instance, go/cloud-ops

- check instance is healthy

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraphcloud.com/sign-in -i
```

- export environment variables

```sh
export FAILOVER_ZONE=<new target zone>
```

- patch CloudSQL instance to use different zone

```sh
gcloud sql instances describe $CLOUDSQL_INSTANCE_NAME --project $GCP_PROJECT | grep zone
# returns actual CloudSQL zone
mi2 instance edit --jq '.spec.infrastructure.gcp.zone = "'$FAILOVER_ZONE'"' --slug $SLUG -e $ENVIRONMENT
mi2 generate cdktf -e $ENVIRONMENT --slug $SLUG
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/stacks/sql
terraform init && terraform apply -auto-approve

gcloud sql instances describe $CLOUDSQL_INSTANCE_NAME --project $GCP_PROJECT | grep zone
# should return <FAILOVER_ZONE>
cd -
```

- check instance is healthy

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraphcloud.com/sign-in -i
```

> Below steps are optional, they should be performed only if CloudSQL disk was lost.

- restore backup in different zone

```sh
mi2 instance sql-backup list --slug $SLUG -e $ENVIRONMENT
mi2 instance sql-restore create --backup-id $SQL_BACKUP_ID --slug $SLUG -e $ENVIRONMENT
# wait until ready
# can check status with command: mi2 instance sql-restore list --slug $SLUG -e $ENVIRONMENT
gcloud sql instances describe $CLOUDSQL_INSTANCE_NAME --project $GCP_PROJECT
```

- check instance is healthy

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraphcloud.com/sign-in -i
```

- backfill the instance into Control Plane if `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`

Follow the `Backfill instance into control plane` section from the Ops Dashboard of the instance, go/cloud-ops
