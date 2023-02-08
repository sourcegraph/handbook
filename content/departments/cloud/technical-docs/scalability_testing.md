## Running scalability tests on Cloud instances

This document lists steps required to verify that a Cloud instance (_target instance_) can pass [Sourcegraph scalability tests](https://github.com/sourcegraph/k6), with the following assumptions:

- we are testing scale of [Size L](https://docs.google.com/spreadsheets/d/1n-KfGc8m1w09rIzNKm5tRxAYmP4-w11CVOCplMvVazk/edit#gid=1172385107&range=B7) (previously Size S) customers -> 10000 users / 100000 repos
- testing is performed using an existing Cloud instance (`rctest` in links below)
- load generator uses external Cloud endpoints (so requests go through Cloudflare and GCLB)

### Preparation

1. Make sure target instance is of size `n2-standard-32` (or, has at least 32 CPU)
2. Make sure target instance has a SSD data disk with capacity >=1000GB
3. Create a Code Host connection with >=100000 repos - [example for GitHub](https://github.com/sourcegraph/reference-architecture-test/blob/main/configs/github_config_100k_repos.json)
4. Wait until your instance has [cloned](https://rctest.sourcegraph.com/-/debug/grafana/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22Prometheus%22,%7B%22exemplar%22:true,%22expr%22:%22src_gitserver_repo_count%22,%22requestId%22:%22Q-662fcf77-5726-4d55-90cf-e523b29d1ea3-0A%22%7D%5D) and [indexed](https://rctest.sourcegraph.com/-/debug/grafana/explore?orgId=1&left=%5B%22now-7d%22,%22now%22,%22Prometheus%22,%7B%22exemplar%22:true,%22expr%22:%22index_num_indexed%22,%22requestId%22:%22Q-bab9d4c3-db12-4ae7-b051-2be6ec528e58-0A%22%7D%5D) all repos.
5. To generate load, create a 4 CPU VM in the same region as your target instance (to make sure cross-region network requests don't affect latency)
6. Follow our [k6 installation guide](https://github.com/sourcegraph/k6#instructions) on the load-generator VM
7. Take note of load generator VP external IP, and add it to Cloudflare IP Access Rules allowlist (to avoid 429/Captcha challenges being returned by Cloudflare)

### Running load tests

Run k6 scripts on load generator VM with `k6 run -e SG_SIZE=S scripts/load.js`
Sample output for rctest:

```
$ k6 run -e SG_SIZE=S scripts/load.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: scripts/load.js
     output: -

  scenarios: (100.00%) 1 scenario, 2000 max VUs, 5m30s max duration (incl. graceful stop):
           * default: Up to 2000 looping VUs for 5m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)

INFO[0005] Load Testing Size s Instance: https://rctest.sourcegraph.com  source=console

running (5m29.9s), 0000/2000 VUs, 10961 complete and 765 interrupted iterations
default ✓ [======================================] 0000/2000 VUs  5m0s

     █ setup

     █ stream

       ✓ literal
       ✓ highlight
       ✓ regexp
       ✓ structural
       ✓ unindexed

     █ graphql

       ✓ literal
       ✓ unindexed
       ✓ structural
       ✓ regexp

   ✓ checks.........................: 100.00% ✓ 40041      ✗ 0
     ✓ { type:highlight }...........: 100.00% ✓ 28697      ✗ 0
     ✓ { type:literal }.............: 100.00% ✓ 8204       ✗ 0
     ✓ { type:regexp }..............: 100.00% ✓ 2575       ✗ 0
     ✓ { type:structural }..........: 100.00% ✓ 279        ✗ 0
     ✓ { type:unindexed }...........: 100.00% ✓ 286        ✗ 0
     data_received..................: 585 MB  1.8 MB/s
     data_sent......................: 22 MB   67 kB/s
     group_duration.................: avg=770.99ms min=33.56ms  med=192.96ms max=1m0s     p(90)=679.6ms  p(95)=1.12s
     http_req_blocked...............: avg=1.26ms   min=192ns    med=366ns    max=61.57ms  p(90)=555ns    p(95)=23.89µs
     http_req_connecting............: avg=537.98µs min=0s       med=0s       max=27.21ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=216.46ms min=32.65ms  med=54.13ms  max=1m0s     p(90)=109.57ms p(95)=226.59ms
       { expected_response:true }...: avg=216.46ms min=32.65ms  med=54.13ms  max=1m0s     p(90)=109.57ms p(95)=226.59ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 40041
     http_req_receiving.............: avg=114ms    min=27.78µs  med=69.72µs  max=1m0s     p(90)=1.01ms   p(95)=3.86ms
     http_req_sending...............: avg=68.6µs   min=33.28µs  med=63.73µs  max=1.11ms   p(90)=86.97µs  p(95)=111.98µs
     http_req_tls_handshaking.......: avg=714.28µs min=0s       med=0s       max=36.52ms  p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=102.39ms min=32.52ms  med=53.71ms  max=1m0s     p(90)=102.92ms p(95)=198.93ms
     http_reqs......................: 40041   121.375478/s
     iteration_duration.............: avg=44.29s   min=356.49µs med=44.07s   max=2m24s    p(90)=1m11s    p(95)=1m17s
     iterations.....................: 10961   33.225859/s
     time_to_first_byte.............: avg=102.39ms min=32.52ms  med=53.71ms  max=1m0s     p(90)=102.92ms p(95)=198.93ms
     ✓ { type:highlight }...........: avg=61.45ms  min=34.24ms  med=49.05ms  max=1.06s    p(90)=83.39ms  p(95)=102.64ms
     ✓ { type:literal }.............: avg=129.9ms  min=40.46ms  med=70.08ms  max=1m0s     p(90)=164.93ms p(95)=338.62ms
     ✓ { type:regexp }..............: avg=231.34ms min=32.52ms  med=72.64ms  max=2.53s    p(90)=718.41ms p(95)=826.16ms
     ✓ { type:structural }..........: avg=2.3s     min=39.92ms  med=616.68ms max=22.76s   p(90)=7.32s    p(95)=11.6s
     ✓ { type:unindexed }...........: avg=113.08ms min=42.63ms  med=69.84ms  max=780.74ms p(90)=232.92ms p(95)=265.71ms
     vus............................: 11      min=0        max=2000
     vus_max........................: 2000    min=537      max=2000
```

### Clean-up

1. Tear down load generator VM
2. Remove Cloudflare allowlist added in step 7
3. (optionally) remove code host connection with 100k repos from target instance
4. (optionally) scale target instance down
