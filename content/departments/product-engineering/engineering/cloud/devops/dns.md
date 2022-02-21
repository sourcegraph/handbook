# Add or modify DNS records to Sourcegraph owned domains

Sourcegraph follows an Infrastructure as Code (IaC) model. To make changes to Sourcegraph
owned DNS records you should make the change to the code in Terraform in our infrastructure repo.

1. Navigate to the `dns` folder
1. Create a file, add the record near the most relevant DNS entries, or modify the existing record

   1. For domains with a large number of TXT records like
      Sourcegraph.com, we typically create a file `sourcegraph.$TXT_PROVIDER.tf`

1. Create a pull request in the infra repo with your changes
1. Get approve from the cloud-devops team
1. `terraform apply` the PR or ask a member of the devops team to do this
1. Merge the PR **after** the apply succeeds

For other
