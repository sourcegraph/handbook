# Deleting a managed instance

# 1.

# Disable protection on kms secret

Within `infrastructure.tf` make the following change:

```
resource "google_kms_crypto_key" "key" {
   name     = "primary-key"
   key_ring = google_kms_key_ring.keyring.id
   lifecycle {
-    prevent_destroy = true
+    prevent_destroy = false
   }
 }
```

# Destroy the infrastructure
```
terraform destroy
```

# Force object deletion in the GCP Bucket

Edit `terraform.tfstate`:
```
- "force_destroy": false,
+ "force_destroy": true,
```

# Delete snapshots

# Destroy the GCP Bucket
```
terraform destroy
```

# Remove managed instance terraform files

# Open pull request against deploy-sourcegraph-managed
```
# Create a branch, remove the customer files, commit


# Push the current branch up
git push origin HEAD
