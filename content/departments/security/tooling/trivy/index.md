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

### Using Trivy diff

The steps above can become a bit tedious if you need to scan all images during a release cut. We've written a script that you can find in the [infrastructure repo](https://github.com/sourcegraph/infrastructure/tree/main/security/tooling/trivy). You can run the script as follows:

```
$ python3 trivy-diff.py --last-release 4.1.0 --threads 10
```

The command above will fetch the accepted vulnerabilities from the markdown table in our handbook. You need to specify the release using the `--release` option. It then uses 10 threads to scan the container images. When the scan is done it will output vulnerabilities that are not on the handbook page, and those that are on the handbook page but not found by Trivy. Keep in mind that you should not put tags in the container justification document. This confuses the tool, and is unnecessary as the title of the justification page already indicates the version.

`trivy-diff` also supports result caching with `--cache` and you can point it to the markdown file you are updating with `--local-table`. This makes it easier to check if the justification table is complete when you are updating it. If you use the latest version of `trivy-diff` when you use the `--local-table` option, it will now create a new file in the directory where you run it. That file contains an updated table with newly detected issues and without the resolved vulnerabilities.

## Accepted vulnerabilities and false positives

Trivy finds many vulnerabilities that are either false positives (where we are not actually vulnerable) or that we decide to accept because it presents low risk to us. It's not expected for all images to be cleared of all High/Critical CVEs due to these issues with the tool. This is according to our [Vulnerability Management Policy](../../../engineering/dev/policies/vulnerability-management-policy.md#acceptance-of-vulnerabilities). Current CVEs that are accepted or false positives are documented [here](https://github.com/sourcegraph/security-issues/issues?q=is%3Aopen+is%3Aissue+label%3Asource%2Ftrivy).

## For Security engineers

When a new vulnerability is found by Trivy it's the resposibility of the security engineer on support rotation to triage and fix it.

### Triaging

To triage a Trivy vulnerability and confirm its risk to our environment confirm the vulnerable versions on the official vulnerability source and the component by running:

```
trivy image --severity "HIGH,CRITICAL" -f json {IMAGE}
```

grep the results and you will find the exact version of the component the image has. It's often useful to exec into a running container with the image and run the binary to check versions.
You will need to calculate the environmental CVSS score for vulnerabilities that you want to add to the 'Accepted CVEs' table. For the attack vector, customers instances usually not directly available on the internet. Therefore we use attack vector 'Adjacent Network' in the 'Environmental Score Metrics'. In additional to changing the attack vector, also add the 'Impact Subscore Modifiers' and set:

- Confidentiality Requirement (CR) to 'High'
- Integrity Requirement (IR) to 'Medium'
- Availability Requirement (AR) to 'Low'

The score that comes out of it (Overall CVSS Score) is the modified score for our product.

### Fixing

If a component or base image has a CVE we decide whether to patch it based on the risk of the vulnerability and of the patch. For example, if we have a High severity CVE but that actually does not present risk to our application and the upgrade is of several major versions we may choose to not upgrade. On the other hand, if the patches are available for minor versions we should always patch regardless of the vulnerability risk.

Most docker images we create have build scripts that can be run locally. In case the CI does not build the image when changes are committed to a PR, you can force an image build with:

```
sg ci build docker-images-patch <image>
```

More information [here](../../../engineering/dev/process/deployments/testing.md#building-docker-images-for-a-specific-branch)

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

## Accepted CVEs

Releases of Sourcegraph may ship with container images that contain known vulnerable
packages that are either false positives considering the way in which we run Sourcegraph,
or that we have accepted as low risk. You can find more details about these below:

### 5.3

- [5.3.3](./5-3-3.md)
- [5.3.2](./5-3-2.md)
- [5.3.1](./5-3-1.md)
- [5.3.0](./5-3-0.md)

### 5.2

- [5.2.7](./5-2-7.md)
- [5.2.6](./5-2-6.md)
- [5.2.5](./5-2-5.md)
- [5.2.4](./5-2-4.md)
- [5.2.3](./5-2-3.md)
- [5.2.2](./5-2-2.md)
- [5.2.1](./5-2-1.md)
- [5.2.0](./5-2-0.md)

### 5.1

- [5.1.9](./5-1-9.md)
- [5.1.8](./5-1-8.md)
- [5.1.7](./5-1-7.md)
- [5.1.6](./5-1-6.md)
- [5.1.5](./5-1-5.md)
- [5.1.4](./5-1-4.md)
- [5.1.3](./5-1-3.md)
- [5.1.2](./5-1-2.md)
- [5.1.1](./5-1-1.md)
- [5.1.0](./5-1-0.md)

### 5.0

- [5.0.6](./5-0-6.md)
- [5.0.5](./5-0-5.md)
- [5.0.4](./5-0-4.md)
- [5.0.3](./5-0-3.md)
- [5.0.2](./5-0-2.md)
- [5.0.1](./5-0-1.md)
- [5.0.0](./5-0-0.md)

### 4.5

- [4.5.1](./4-5-1.md)
- [4.5.0](./4-5-0.md)

### 4.4

- [4.4.2](./4-4-2.md)
- [4.4.1](./4-4-1.md)
- [4.4.0](./4-4-0.md)

### 4.3

- [4.3.1](./4-3-1.md)
- [4.3.0](./4-3-0.md)

### 4.2

- [4.2.1](./4-2-1.md)
- [4.2.0](./4-2-0.md)

### 4.1

- [4.1.3](./4-1-3.md)
- [4.1.2](./4-1-2.md)
- [4.1.1](./4-1-1.md)

### 4.0

- [4.1.0](./4-1-0.md)
- [4.0.1](./4-0-1.md)
- [4.0.0](./4-0-0.md)

### 3.43

- [3.43.2](./3-43-2.md)
- [3.43.1](./3-43-1.md)
- [3.43.0](./3-43-0.md)
