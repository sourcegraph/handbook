# [gitlab.sgdev.org](https://gitlab.sgdev.org)

## Overview

We use [ArgoCD](../../process/deployments/index.md#argocd) to sync the GitLab deployment by following GitOps practices. All configuration is tracked in [sourcegraph/infrastructure] repo.

- The argo app is defined at [dogfood/kubernetes/argocd] and
- The state of the GitLab deployment is configured at [dogfood/kubernetes/tooling/gitlab]

The confiugration changes to [dogfood/kubernetes/tooling/gitlab] will be picked up by ArgoCD once it's landed on the `main` branch.

## Access

The admin credential can be found in [1password](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=ohorqvirgq5t2h5cpo4hwafpuy&h=team-sourcegraph.1password.com). If the credential doesn't work, you may follow <https://docs.gitlab.com/charts/quickstart/#sign-in-to-gitlab> to recover admin access.

Google OAuth has been configured and you will be able to use your GSuite account to login.

## Operation

### How to install

> This is only needed for initial deployment

`cd` into [dogfood/kubernetes/argocd] and run

```sh
kubectl apply -f ./tooling-gitlab.Application.yaml
```

### How to upgrade/change (recommended)

> Automated upgrade is configured for regular version upgrade using `renovate` in [sourcegraph/infrastructure]

Create a Pull Request to make neccessary changes and ask for review. Once the PR is merged, [argocd] will sync the new changes to the cluster.

### How to upgrade/change (manual)

> Only use this approach when [ArgoCD] is down

Switch context to `dogfood` cluster

```sh
kubectx gke_sourcegraph-dogfood_us-central1-f_dogfood

# or if you don't have kubectx installed
# also, you should check it out https://github.com/ahmetb/kubectx
kubectl config set current-context gke_sourcegraph-dogfood_us-central1-f_dogfood
```

Clean up cached `charts` directory to avoid stale content

```sh
rm -rf charts/
```

Diff

```sh
kustomize build --enable-helm ./ | kubectl diff -f -
```

Apply

```sh
kustomize build --enable-helm ./ | kubectl apply -f -
```

[argocd]: ../../process/deployments/index.md#argocd
[sourcegraph/infrastructure]: https://github.com/sourcegraph/infrastructure
[dogfood/kubernetes/tooling/gitlab]: https://github.com/sourcegraph/infrastructure/tree/main/dogfood/kubernetes/tooling/gitlab
[dogfood/kubernetes/argocd]: https://github.com/sourcegraph/infrastructure/tree/main/dogfood/kubernetes/argocd
