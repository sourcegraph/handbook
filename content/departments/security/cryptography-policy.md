# Cryptography Policy

## Purpose

To ensure proper and effective use of cryptography to protect the confidentiality, authenticity and/or integrity of information. This policy establishes requirements for the use and protection of cryptographic keys throughout their entire lifecycle.

## Scope

All information systems developed and/or controlled by Sourcegraph which store or transmit confidential data.

## Policy

Sourcegraph shall evaluate the risks inherent in processing and storing data, and shall implement cryptographic controls to mitigate those risks where deemed appropriate. Where encryption is in use, strong cryptography with associated key management processes and procedures shall be implemented and documented. All encryption shall be performed in accordance with industry standards, including NIST SP 800-57.
For all personal data, Sourcegraph shall consider the state of the art, the costs of implementation and the nature, scope, context, and purposes of processing as well as the risk of varying likelihood and severity to the rights and freedoms of natural persons, and implement appropriate technical and organizational measures surrounding the pseudonymization and encryption of data to ensure a level of security appropriate to the risk.
For all web traffic sent over the public Internet containing confidential information, the TLS v1.2 protocol or better must be utilized.

## Key Management

Access to keys and secrets shall be tightly controlled in accordance with the Access Control Policy.

The following table includes the recommended usage for cryptographic keys:

<table>
  <tr>
    <th>Domain</th>
    <th>Key Type</th>
    <th>Algorithm</th>
    <th>Key Length</th>
    <th>Max Expiration</th>
  </tr>
  <tr>
    <td>Web Certificate</td>
    <td>Digital Signature</td>
    <td>SHA256</td>
    <td>256 bit</td>
    <td>2 years</td>
  </tr>
  <tr>
    <td>Web Cipher</td>
    <td>Encryption</td>
    <td>AES_128_GCM *</td>
    <td>128 bit</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Confidential</td>
    <td>Encryption</td>
    <td>AES256</td>
    <td>256 bit</td>
    <td>1 Year</td>
  </tr>
  <tr>
    <td>Password</td>
    <td>Hash</td>
    <td>Bcrypt</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Laptop HDD</td>
    <td>Encryption</td>
    <td>XTS-AES-128 **</td>
    <td>256 bit</td>
    <td>N/A</td>
  </tr>
</table>

\* This is provided via the TLS 1.3 stack using the TLS_AES_128_GCM_SHA256 Cipher Suite.

\*\* Please see [Computer Standards](../tech-ops/process/internal-security/computer-standards.md) for more information.

## Exceptions

Requests for an exception to this policy must be submitted to Security for approval.

## Violations & Enforcement

Any known violations of this policy should be reported to the #security slack channel. Violations of this policy can result in immediate withdrawal or suspension of system and network privileges and/or disciplinary action in accordance with company procedures up to and including termination of employment.

**Policy Owner**: Head of Security

| Version | Date        | Description              | Author          | Approved by |
| ------- | ----------- | ------------------------ | --------------- | ----------- |
| 1.0     | 27-Jan-2022 | First version            | David Sandy     | Diego Comas |
| 1.1     | 30-May-2023 | 2023 review - no updates | André Eleuterio | Diego Comas |
