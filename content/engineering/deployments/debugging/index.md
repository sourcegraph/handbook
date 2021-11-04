# Debugging

In order to debug the services we deploy you should understand the environment they are deployed on.

This guide will allow you to debug one of our running services in the [dogfood](../instances.md#k8s.sgdev.org) deployment which mimics our customer environment. All of our services here run on a Kubernetes cluster.

- [Debugging](#debugging)
  - [Gain-access-to-the-cluster](./tutorial.md#gain-access-to-the-cluster)
- [Tutorial](tutorial.md)

## Intro to crictl

_[Kubernetes Docs](https://kubernetes.io/docs/tasks/debug-application-cluster/crictl/)_

When debugging pods on the node itself you should prefer `crictl` from <https://github.com/kubernetes-sigs/cri-tools/releases> over docker.
This tool works with all OCI container runtime. Kubernetes supports several container runtime and docker is not the only one.
