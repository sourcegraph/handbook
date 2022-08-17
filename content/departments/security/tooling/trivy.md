# Container vulnerability scanning

We use [Trivy](https://github.com/aquasecurity/trivy) to scan our container images for security vulnerabilities. It breaks down a container image into components and alerts on components with CVEs. We scan our container images for Critical and High severity CVEs.

We currently run Trivy in two ways:

- Daily as a [CronJob](https://k8s.sgdev.org/github.com/sourcegraph/infrastructure/-/blob/security/tooling/trivy/README.md) in the security-tooling kubernetes cluster.
- In our CI on image builds.

The daily scan is meant to catch new CVEs in our existing components. It also sends alerts to the security team on new vulnerabilities. The results are sent to a [GCP bucket](https://console.cloud.google.com/storage/browser/trivy-results) and stored for compliance purposes.

The CI scan is used to catch CVEs in new components. It acts on non-blocking mode in the CI.

## Running Trivy locally

### Sourcegraph Trivy docker image

We can run the same image as the CronJob locally and have results uploaded to the GCP bucket. Authentication to GCP is necessary. Run the image with:

```
docker run -it -v ~/.config/gcloud:/.config/gcloud us.gcr.io/sourcegraph-security-logging/trivy-sg:latest
```

### Trivy binary

You can also install Trivy and scan specific images. Trivy can be installed with [homebrew](https://aquasecurity.github.io/trivy/v0.18.0/installation/):

```
brew install aquasecurity/trivy/trivy
```

Once Trivy is installed running scans on images is easy:

```
trivy image --severity "HIGH,CRITICAL" <IMAGE>:insiders
```

This scans an image for High/Critical CVEs. The `-f json` flag can be used to output data in JSON format, which includes a lot more information on the vulnerable components and versions.

## Accepted vulnerabilities and false positives

Trivy finds many vulnerabilities that are either false positives (where we are not actually vulnerable) or that we decide to accept because it presents low risk to us. It's not expected for all images to be cleared of all High/Critical CVEs due to these issues with the tool. This is according to our [Vulnerability Management Policy](../../engineering/dev/policies/vulnerability-management-policy.md#acceptance-of-vulnerabilities). Current CVEs that are accepted or false positives are documented [here](https://github.com/sourcegraph/security-issues/issues?q=is%3Aopen+is%3Aissue+label%3Asource%2Ftrivy).

## For Security engineers

When a new vulnerability is found by Trivy it's the resposibility of the security engineer on support rotation to triage and fix it.

### Triaging

To triage a Trivy vulnerability and confirm its risk to our environment confirm the vulnerable versions on the official vulnerability source and the component by running:

```
trivy image --severity "HIGH,CRITICAL" -f json {IMAGE}
```

grep the results and you will find the exact version of the component the image has. It's often useful to exec into a running container with the image and run the binary to check versions.

### Fixing

If a component or base image has a CVE we decide whether to patch it based on the risk of the vulnerability and of the patch. For example, if we have a High severity CVE but that actually does not present risk to our application and the upgrade is of several major versions we may choose to not upgrade. On the other hand, if the patches are available for minor versions we should always patch regardless of the vulnerability risk.

Most docker images we create have build scripts that can be run locally. In case the CI does not build the image when changes are committed to a PR, you can force an image build with:

```
sg ci build docker-images-patch <image>
```

More information [here](../../engineering/dev/process/deployments/testing.md#building-docker-images-for-a-specific-branch)

A recommended process to test patches is:

1. Run a trivy scan on the current published image.
2. Make any changes to the Dockerfile.
3. Build the image locally.
4. Run a trivy scan on the local image and confirm the CVE is patched.
5. Push changes to a branch and fix any CI failures.
6. If the image is built during tests scan the published image. If not, use `sg ci build` to run a build with tests.
7. Merge the PR.

## For Release Guild members

For each release there is a release-blocking issue ([example](https://github.com/sourcegraph/sourcegraph/issues/35774) where we need to confirm that all open CVEs are documented and accepted. The release captain may check the last Trivy results in [GCP](https://console.cloud.google.com/storage/browser/trivy-results) and check if the open CVEs are already tracked [here](https://github.com/sourcegraph/security-issues/issues?q=is%3Aopen+is%3Aissue+label%3Asource%2Ftrivy). If so, the issue may be closed. If there are any non-documented open CVEs please contact the Security team.

## For Sourcegraph engineers

If you got a CI warning for a Trivy vulnerability _**it is not your responsibility**_ to patch it. To encourage our High Agency value we encourage engineers to look into CVEs and providing patches where feasible. Please note that we don't expect to fix all CVEs, and accepted vulnerabilities are tracked [here](https://github.com/sourcegraph/security-issues/issues?q=is%3Aopen+is%3Aissue+label%3Asource%2Ftrivy).

## For CEs

It's common for our customers to scan the container images we ship to them. These scans usually contain vulnerabilities that are either false positives or that we have accepted as low risk. All open container vulnerabilities can be found [here](https://github.com/sourcegraph/security-issues/issues?q=is%3Aissue+is%3Aopen+label%3Asource%2Ftrivy), where there is context that can be shared with the customer.

For customer scans the CE should cross-check the vulnerabilities found in the customer scan with the ones we have documented in the `security-issues` repository. If we missed any please bring it to the attention of the Security team in the #security channel.

## Accepted CVEs for Sourcegraph 3.43

| CVE ID                                                                      | Affected Images                                                                              | CVE Severity | [Sourcegraph Assessment](../../engineering/dev/policies/vulnerability-management-policy/.md#severity-levels) | Details                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CVE-2022-1552](https://www.postgresql.org/support/security/CVE-2022-1552/) | sourcegraph/server                                                                           | High         | Info                                                                                                                                             | The vulnerability affects Postgres servers with multiple users where one user can bypass authorization controls and execute commands under a superuser identity. Sourcegraph runs Postgres with only the sg user, making the application not affected by this vulnerability.                                                                                                                             |
| [CVE-2022-27191](https://nvd.nist.gov/vuln/detail/CVE-2022-27191)           | caddy, sourcegraph/grafana, sourcegraph/prometheus, sourcegraph/server                       | High         | Info                                                                                                                                             | This vulnerability impacts SSH servers using the affected dependency. None of the affected images have ssh servers, much less using the dependency. Sourcegraph is not affected by this issue.                                                                                                                                                                                                           |
| [CVE-2021-33194](https://nvd.nist.gov/vuln/detail/CVE-2021-33194)           | sourcegraph/grafana, sourcegraph/cadvisor, sourcegraph/server                                | High         | Low                                                                                                                                              | The CVE affects HTML parsers, specifically the `ParseFragment` function. The affected dependencies don't [use the function](https://sourcegraph.com/search?q=context:global+repo:google/cadvisor%7Cgrafana/grafana%24+ParseFragment&patternType=lucky) nor [import the library](https://sourcegraph.com/search?q=context:global+repo:google/cadvisor%7Cgrafana/grafana%24+x/net/html&patternType=lucky). |
| [CVE-2021-44716](https://nvd.nist.gov/vuln/detail/CVE-2021-44716)           | sourcegraph/grafana, sourcegraph/cadvisor, sourcegraph/server                                | High         | Low                                                                                                                                              | In certain conditions, the monitoring functionality packaged with Sourcegraph (Grafana and cAdvisor) could be rendered temporarily inoperable via specially crafted HTTP/2 requests. Exploiting this vulnerability requires administrator-level access, and does not affect the core Sourcegraph functionality. Sourcegraph does not consider this issue a viable security threat to the product.        |
| [CVE-2022-21698](https://nvd.nist.gov/vuln/detail/CVE-2022-21698)           | sourcegraph/cadvisor, sourcegraph/grafana, sourcegraph/postgres_exporter, sourcegraph/server | High         | Low                                                                                                                                              | The vulnerability affects several third party images shipped with Sourcegraph. However, it doesn't affect Sourcegraph services dirtectly and the third party services are not exposed via HTTP. Sourcegraph is not vulnerable to this vulnerability.                                                                                                                                                     |
| [CVE-2021-38561](https://access.redhat.com/security/cve/CVE-2021-38561)     | sourcegraph/grafana, sourcegraph/cadvisor, sourcegraph/server                                | High         | Info                                                                                                                                             | The CVE affects application parsing language tag using the affected library. [Neither of the Sourcegraph dependencies use `x/text` to parse arbitrary language tags](https://sourcegraph.com/search?q=context:global+repo:google/cadvisor%7Cgrafana/grafana%24+x/text&patternType=literal).                                                                                                              |
