# Customer Managed Encryption Keys

Customer Managed Encryption Keys (CMEK) is the security feature which ensures that the customer data in Google Cloud Platform is encrypted at rest using unique, dedicated keys stored in Cloud KMS - [Google Cloud Platform documentation](https://cloud.google.com/kms/docs/cmek).

Benefits:

- customer's data are encrypted with non-default Google key, which ensures Google (nor any other entity) cannot decrypt the data
- database data is encrypted with a different key as GKE persistent volumes, to increase security
- dedicated CMEK can be rotated manually or automatilly if required

## How to enable CMEK

> [!WARNING] CMEK can only be enabled during instance creation. Changing this conguration after the instance is created will require recreation of CloudSQL and Persistent Volumes, which will destroy all the data!

To enable CMEK for Cloud instance during creation, add tag `cmek` to [instance features](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/cloud/-/blob/.github/workflows/mi_create.yml?L63)

or

modify instance `config.yaml` with given annotation:

```yaml
"cloud.sourcegraph.com/enable-cmek" = "true"
```

## How to disable CMEK

When CMEK is enabled for instance, it cannot be disabled. Changing this conguration after the instance is created will require recreation of CloudSQL and Persistent Volumes, which will destroy all the data!
