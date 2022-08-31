# Upgrading p4-fusion

The following steps are required to update the version of [p4-fusion](https://github.com/salesforce/p4-fusion) we use inside our `gitserver` and `server` images.

1. Find the desired [release](https://github.com/salesforce/p4-fusion/releases)
2. Update the version [here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@a7d2e70a89294ef57f23681df1e12c94b9ad5bac/-/blob/cmd/gitserver/p4-fusion-install-alpine.sh?L41)
3. From within `cmd/gitserver`, build the image, which will build the binary. **NOTE**: On M1 macs you'll need to build for amd64, see details below

```sh
docker build -t p4-fusion --target=p4-fusion .
```

4. Copy the binary out of the container:

```sh
# This will output a container hash
docker create p4-fusion

# Use the container hash in the next command
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
docker buildx build --load -t p4-fusion --platform linux/amd64 --target=p4-fusion .
```

## Testing the changes

First, verify that running `docker build` again uses the cache to build the image. The output will be similar to this:

```
$ docker build -t p4-fusion --target=p4-fusion .
Sending build context to Docker daemon  58.28MB
Step 1/7 : FROM sourcegraph/alpine-3.14:154143_2022-06-13_1eababf8817e@sha256:f1c4ac9ca1a36257c1eb699d0acf489d83dd86e067b1fc3ea4a563231a047e05 AS p4cli
 ---> e98f10284f24
Step 2/7 : RUN wget http://cdist2.perforce.com/perforce/r21.2/bin.linux26x86_64/p4
 ---> Using cache
 ---> afe0cc667660
Step 3/7 : RUN mv p4 /usr/local/bin/p4
 ---> Using cache
 ---> c458b48641a3
Step 4/7 : RUN chmod +x /usr/local/bin/p4
 ---> Using cache
 ---> 492c5dfbebc3
Step 5/7 : FROM sourcegraph/alpine-3.14:154143_2022-06-13_1eababf8817e@sha256:f1c4ac9ca1a36257c1eb699d0acf489d83dd86e067b1fc3ea4a563231a047e05 AS p4-fusion
 ---> e98f10284f24
Step 6/7 : COPY p4-fusion-install-alpine.sh /p4-fusion-install-alpine.sh
 ---> Using cache
 ---> 3ced61d59072
Step 7/7 : RUN /p4-fusion-install-alpine.sh
 ---> Using cache
 ---> ee90643e2bba
Successfully built ee90643e2bba
Successfully tagged p4-fusion:latest
```

Run the binary in the container by running the following command:

```
docker run -t -i p4-fusion /usr/local/bin/p4-fusion
```

The output will be similar to this:

```
[ PRINT @ Main:33 ] Running p4-fusion from: /usr/local/bin/p4-fusion
[ PRINT @ Main:55 ] p4-fusion v1.10.0
[ PRINT @ Main:56 ] Usage:
--client [91m[Required][0m
        Name/path of the client workspace specification.

--flushRate [93m[Optional, Default is 1000][0m
        Rate at which profiling data is flushed on the disk.

--fsyncEnable [93m[Optional, Default is false][0m
        Enable fsync() while writing objects to disk to ensure they get written to permanent storage immediately instead of being cached. This is to mitigate data loss in events of hardware failure.

--includeBinaries [93m[Optional, Default is false][0m
        Do not discard binary files while downloading changelists.

--lookAhead [91m[Required][0m
        How many CLs in the future, at most, shall we keep downloaded by the time it is to commit them?

--maxChanges [93m[Optional, Default is -1][0m
        Specify the max number of changelists which should be processed in a single run. -1 signifies unlimited range.

--networkThreads [93m[Optional, Default is 16][0m
        Specify the number of threads in the threadpool for running network calls. Defaults to the number of logical CPUs.

--path [91m[Required][0m
        P4 depot path to convert to a Git repo

--port [91m[Required][0m
        Specify which P4PORT to use.

--printBatch [93m[Optional, Default is 1][0m
        Specify the p4 print batch size.

--refresh [93m[Optional, Default is 100][0m
        Specify how many times a connection should be reused before it is refreshed.

--retries [93m[Optional, Default is 10][0m
        Specify how many times a command should be retried before the process exits in a failure.

--src [91m[Required][0m
        Relative path where the git repository should be created. This path should be empty before running p4-fusion for the first time in a directory.

--user [91m[Required][0m
        Specify which P4USER to use. Please ensure that the user is logged in.
```
