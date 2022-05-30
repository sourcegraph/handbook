# Upgrading p4-fusion

The following steps are required to update the version of [p4-fusion](https://github.com/salesforce/p4-fusion) we use inside our `gitserver` and `server` images.

1. Find the desired [release](https://github.com/salesforce/p4-fusion/releases)
2. Update the version [here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@a7d2e70a89294ef57f23681df1e12c94b9ad5bac/-/blob/cmd/gitserver/p4-fusion-install-alpine.sh?L41)
3. From within `cmd/gitserver`, build the image, which will build the binary. _NOTE_: On M1 macs you'll need to build for amd64, see details below

```sh
docker build -t p4-fusion --target=p4-fusion .
```

4. Copy the binary out of the container:

```sh
docker create p4-fusion
# This will output a container hash
docker cp CONTAINER_HASH:/usr/local/bin/p4-fusion ./
```

5. Compute the sha256 sum of the binary

```sh
cat p4-fusion | sha256sum
```

6. Upload the binary to https://console.cloud.google.com/storage/browser/sourcegraph-artifacts/p4-fusion, following the path pattern seen there.

7. Update the sha256 sum and filename [here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@a7d2e70a89294ef57f23681df1e12c94b9ad5bac/-/blob/cmd/gitserver/p4-fusion-install-alpine.sh?L52).

Push the changes, the PR should look something like [this one](https://github.com/sourcegraph/sourcegraph/pull/36156). In most cases you won't need to modify the Helix Core API so that can be ignored.

## Extra steps required for M1 macs

You'll need to configure docker so that the images build for amd64, not arm64.

```sh
docker buildx create --use
docker buildx build -t p4-fusion --platform linux/amd64 --target=p4-fusion .
```
