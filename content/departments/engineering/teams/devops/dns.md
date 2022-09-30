# Add or modify DNS records to Sourcegraph owned domains

Sourcegraph follows an Infrastructure as Code (IaC) model. To make changes to Sourcegraph
owned DNS records you should make the change to the code in Terraform in our [sourcegraph/infrastructure] repo.

1. Clone [sourcegraph/infrastructure]
1. Navigate to the `dns` folder
1. Create a file, add the record near the most relevant DNS entries, or modify the existing record

   1. For domains with a large number of TXT records like
      Sourcegraph.com, we typically create a file `sourcegraph.$TXT_PROVIDER.tf`

1. Create a pull request in the repo with your changes
1. Open [Buildkite](https://buildkite.com/sourcegraph/infrastructure)

   1. Check status of `ci/terraform.sh dns` job and it should pass without error.
   1. If there is any error, you should consult the logs or reach out to `#cloud-devops`

1. Wait for Buildkite to finish your build
1. Get approve from the cloud-devops team
1. `terraform apply` the PR or drop a message in #cloud-devops and DevOps team will apply it for you (if you're not a DevOps or Security teammate, you most likely don't have sufficient access to apply the `dns` terraform module)
1. Merge the PR **after** the apply succeeds

## FAQ

### Are you adding a DNS record for a Netlify site?

You should create a CNAME record pointing to `sourcegraph.netlifyglobalcdn.com`. In terraform, it looks something like

[example](https://github.com/sourcegraph/infrastructure/blob/621b30a24f448f78509b75600d4338491a7ec127/dns/sourcegraph.tf#L48-L54)

```tf
resource "cloudflare_record" "about-sourcegraph-com" {
  zone_id = data.cloudflare_zones.sourcegraph_com.zones[0].id
  name    = "about"
  type    = "CNAME"
  value   = var.netlify-enterprise-cdn-cname
  proxied = false
}
```

[sourcegraph/infrastructure]: https://github.com/sourcegraph/infrastructure
