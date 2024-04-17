# Customer Managed Encryption Keys

Customer Managed Encryption Keys (CMEK) is the security feature which ensures that the customer data in Google Cloud Platform is encrypted at rest using unique, dedicated keys stored in Cloud KMS - [Google Cloud Platform documentation](https://cloud.google.com/kms/docs/cmek).

Benefits:

- customer data is encrypted using a non-default key not provided by Google, ensuring that neither Google nor any other entity can decrypt the data.
- database data is encrypted with a different key as GKE persistent volumes, to increase security
- dedicated CMEK can be rotated manually or automatically when required
- the [AES_256_CTR](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) algorithm is used for encryption/decryption with `SOFTWARE` protection level

## How to enable CMEK

> [!WARNING] CMEK can only be enabled during instance creation. Changing this configuration after the instance is created will require recreation of CloudSQL and Persistent Volumes, which will result in a loss of all data

To enable CMEK for Cloud instance during creation, add tag `cmek` to [instance features](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/cloud/-/blob/.github/workflows/mi_create.yml?L63)

or

modify instance `config.yaml` with given annotation:

```yaml
"cloud.sourcegraph.com/cmek-algorithm" = "AES_256_CTR"
```

> [!WARNING] If customer wants to use a different algorithm, please contact Security Team.

## How to disable CMEK

When CMEK is enabled for instances, it cannot be disabled. Changing this configuration after the instance is created will require recreation of CloudSQL and Persistent Volumes, which will result in a loss of all data.
