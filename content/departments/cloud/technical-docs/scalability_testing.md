## Running scalability tests on Cloud instances

This document lists steps required to verify that a Cloud instance (_target instance_) can pass [Sourcegraph scalability tests](https://github.com/sourcegraph/k6). This document assumes:

- testing scale of Size L (fka Size S) customers -> 10000 users / 100000 repos
- testing is performed using an existing Cloud instance (`rctest`)
- testing uses external Cloud endpoints (so requests go through Cloudflare and GCLB)

### Preparation

1. Make sure target instance is of size `n2-standard-32` (or, has at least 32 CPU)
2. Make sure target instance has a SSD data disk with capacity >=1000GB
3. Create a Code Host connection with >=100000 repos - [example for Github](https://github.com/sourcegraph/reference-architecture-test/blob/main/configs/github_config_100k_repos.json)
4. Wait until your instance has [cloned](https://rctest.sourcegraph.com/-/debug/grafana/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22Prometheus%22,%7B%22exemplar%22:true,%22expr%22:%22src_gitserver_repo_count%22,%22requestId%22:%22Q-662fcf77-5726-4d55-90cf-e523b29d1ea3-0A%22%7D%5D) and [indexed](index_num_indexed) all repos.
5. To generate load, create a 4 CPU VM in the same region as your target instance
6. Follow our [k6 installation guide](https://github.com/sourcegraph/k6#instructions)
7. Take note of load generator VP external IP, and add it to Cloudflare IP Access Rules allowlist

### Running load tests

Run k6 scripts on load generator VM with ` k6 run -e SG_SIZE=S scripts/load.js`

### Clean-up

1. Tear down load generator VM
2. Remove Cloudflare allowlist added in step 7
3. (optionally) remove code host connection with 100k repos from target instance
4. (optionally) scale target instance down
