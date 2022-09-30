# Resize disks in GKE StatefulSet

Important: this change will cause recreation of all pods in the StatefulSet, which can cause downtime if application is not highly available.

### Steps to resize StatefulSet persistent disks

1. Check the actual disks sizes in GCP

```
gcloud compute disks list
```

2. List existing persistent volumes and corresponding persistent volume claims:

```
kubectl get pv
kubectl get pvc -n prod
```

3. Ensure that the storage class of the volumes for resizing has set `AllowVolumeExpansion=True`

```
kubectl describe sc sourcegraph | grep AllowVolumeExpansion
# should be: AllowVolumeExpansion:  True
```

4. Ensure that storage class of the volumes for resizing has set `ReclaimPolicy=Retain`

```
kubectl describe sc sourcegraph | grep ReclaimPolicy
# should be: ReclaimPolicy: Retain
```

5. Modify persistent volume claims to have new size

Note: do it for ALL persistent volumes used by StatefulSet!

```
for i in $(kubectl get pvc -n prod --no-headers -l app=gitserver | awk '{print $1}'); do
  kubectl patch pvc "$i" -n prod -p '{ "spec": { "resources": { "requests": { "storage": "YOUR STORAGE VALUE" }}}}'
done

```

6. Ensure that all resized persistent volumes, persistent volume claims and google disks has new value:

```
kubectl get pv
kubectl get pvc -n prod
gcloud compute disks list
```

7. Delete StatefulSet without deleting the pods (`--cascade='orphan'`)

Important: without `--cascade='orphan'` you will lose the PVs! (But not the GCP disks since `Retain` is set on the StorageClass)

```
kubectl delete sts gitserver --cascade=orphan -n prod
```

8. Modify and deploy StatefulSet with extended disk sizes (change `storage` to `<new size>` in this example):

- in [StatefulSet](https://k8s.sgdev.org/github.com/sourcegraph/deploy-sourcegraph-cloud/-/blob/base/gitserver/gitserver.StatefulSet.yaml?L148)
- in [PersistentVolumes](https://k8s.sgdev.org/github.com/sourcegraph/deploy-sourcegraph-cloud/-/tree/base/gitserver) (all files with `repos-gitserver-[NUMBER].PersistentVolume.yaml` names)
- deploy via [buildkite job](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud)

9. Delete StatefulSet pods one by one (optional)

Note:

- only invoke if pods were not recreated in step 8.

```
kubectl rollout restart sts gitserver -n prod
```
