# Distaster recovery process of a Cloud instance

1. GKE cluster zone failover

> Important: this does not test GKE master zone failover.

- export environment variables

```sh
export ENVIRONMENT=[dev|prod]
export SLUG=<SLUG>
export GKE_NAME=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gkeClusters[0].name')
export GKE_REGION=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.spec.gcpRegion')
```

- check instance is healthy

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraph.com/\_\_version -i
```

- connect to cluster

```sh
mi2 instance workon -e $ENVIRONMENT --slug $SLUG
# paste output into terminal
```

- verify node zone

```sh
kubectl get nodes
kubectl describe node <NODE_FROM_CLUSTER> | grep zone
```

- perform zone failover (remove node zone from GKE node locations)

```sh
gcloud container node-pools list --cluster $GKE_NAME --region $GKE_REGION
gcloud container node-pools describe primary --cluster $GKE_NAME --region $GKE_REGION --format json | jq '.locations'
gcloud container node-pools update primary --cluster $GKE_NAME --region $GKE_REGION --node-locations <DIFFERENT_ZONE_THAN_EXISTING_NODE> --async
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

- check istance ready again

```sh
mi2 instance check --slug $SLUG -e $ENVIRONMENT pods-health
curl -sSL --fail https://$SLUG.sourcegraph.com/\_\_version -i
```

2. CloudSQL zone failover

TDB
