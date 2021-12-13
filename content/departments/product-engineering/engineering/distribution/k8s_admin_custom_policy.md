# How to use a k8s pod security policy to simulate admin restrictions

This describes how to simulate being a Sourcegraph admin with restrictions. ie an admin that can only schedule pods with
security restrictions applied to the pods.

It is assumed you have a test cluster running in GCP or a similar k8s runtime and you are a cluster admin, ie
you have super powers in the cluster:

```shell script
kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value account)
```

First we need a pod security policy that matches as close as possible the restrictions at the customer site. For example
(this is just an example, tweak as necessary):

```yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: nonroot-policy
spec:
  privileged: false
  allowPrivilegeEscalation: false
  # The rest fills in some required fields.
  seLinux:
    rule: RunAsAny
  supplementalGroups:
    rule: 'MustRunAs'
    ranges:
      # Forbid adding the root group.
      - min: 1
        max: 65535
  runAsUser:
    rule: 'MustRunAsNonRoot'
  fsGroup:
    rule: 'MustRunAs'
    ranges:
      # Forbid adding the root group.
      - min: 1
        max: 65535
  volumes:
    - '*'
  readOnlyRootFilesystem: true
```

Save this yaml into `nonroot-policy.yaml` and add the policy to the cluster:

```shell script
kubectl apply -f nonroot-policy.yaml
```

From here on out we will do almost everything in a namespace. This is not strictly necessary (it works in the default namespace too)
but it is cleaner and we're migrating to namespaces anyways.

We create the namespace:

```shell script
kubectl create namespace ns-sourcegraph
```

We now create a fake account, bind this policy to the account and impersonate it when we deploy and manage Sourcegraph.
The impersonation will ensure that the policy is enforced for any pods that are scheduled/edited/managed by the fake account.

Let's create the fake account. It will be a service account (so not a user). This enables us to later impersonate it.

```shell script
kubectl create serviceaccount -n ns-sourcegraph fake-user
```

We create a role binding for it to declare that the fake user can edit the cluster in the namespace (schedule pods):

```shell script
kubectl create rolebinding -n ns-sourcegraph fake-editor --clusterrole=edit --serviceaccount=ns-sourcegraph:fake-user
```

We create a role for the pod security policy:

```shell script
kubectl create role -n ns-sourcegraph nonroot:unprivileged --verb=use --resource=podsecuritypolicy --resource-name=nonroot-policy
```

and then bind it to the fake user:

```shell script
kubectl create rolebinding -n ns-sourcegraph fake-user:nonroot:unprivileged --role=nonroot:unprivileged --serviceaccount=ns-sourcegraph:fake-user
```

Our fake user is now under the spell of the pod security policy. Let's check that:

```shell script
kubectl --as=system:serviceaccount:ns-sourcegraph:fake-user -n ns-sourcegraph auth can-i use podsecuritypolicy/nonroot-policy
```

It should return `yes`.

From here on you can impersonate the fake user by adding `--as=system:serviceaccount:ns-sourcegraph:fake-user -n ns-sourcegraph` to your `kubectl` commands:

```shell script
kubectl --as=system:serviceaccount:ns-sourcegraph:fake-user -n ns-sourcegraph get pods
```
