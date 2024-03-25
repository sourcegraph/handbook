# Implementation Strategies and Recommendations

There are several potential deployment and implementation strategies that may be used with a customer depending on their deployment type, size, and complexity. Each deployment strategy involves different internal owners and timeline expectations.

# Deployment Strategies

<table>
  <tr>
   <td>
<h3>Deployment Strategy</h3>
   </td>
   <td>
<h3>Description</h3>
   </td>
   <td>
<h3>Owners</h3>
   </td>
  </tr>
  <tr>
   <td><em>Cloud</em>
   </td>
   <td>
<ul>
<li>Preferred deployment strategy
<li>Once it is determined that the customer qualifies for Cloud, the CE or Sales will submit a <a href="../../../cloud/index.md#managed-instance-requests">Managed Instance Request</a> to the Cloud Team to kick off the process
</li>
</ul>
   </td>
   <td>Cloud
<p>
CE
   </td>
  </tr>
  <tr>
   <td><em>CE-Owned</em>
   </td>
   <td>
<ul>
<li>Used for simpler self-hosted deployments methods such as Machine Image or Single Node Shell Install Script deployments, or scenarios where a deployment was <em>not</em> selected off of the Implementation Backlog
<li>The production environment for the customer is created by the CE prior to transitioning ownership of the account to the TA
<li>The production environment could be initiated as part of a trial or POC, or it could be created following contract closure
</li>
</ul>
   </td>
   <td>CE
   </td>
  </tr>
  <tr>
   <td><em>Jointly Deployed Implementation</em>
   </td>
   <td>
<ul>
<li>If Cloud and CE-Owned deployments are not options for the customer (e.g., the customer intends to deploy in Kubernetes or has other complex environmental requirements), the CE will initiate an Implementation Request via the #ask-implementation Slack workflow</a>
<li>Upon reviewing the request, the Implementation team qualifies the customer for a jointly deployed instance and kicks off the process with the CE and Sales
<li>This method is primarily used for self-hosted Kubernetes deployments
</li>
</ul>
   </td>
   <td>CE
<p>
IE
<p>
TPM
   </td>
  </tr>
  <tr>
   <td><em>Self-Hosted Into Jointly Deployed Instance</em>
   </td>
   <td>
<ul>
<li>This method is only used by customers that would like a production environment stood up quickly and their initial user set can be supported by a simpler deployment method, but a full Kubernetes instance will be needed for expansion to the full set of users
<li>The CE will stand up an initial production environment (likely with a Machine Image or Single Node Shell Install Script deployment), and transition the customer to the TA for continued support
<li>As the deployment reaches scalability or technical limits, the TA engages the implementation team to coordinate a post-live, jointly deployed Kubernetes instance
</li>
</ul>
   </td>
   <td>CE
<p>
TAM
<p>
IE
<p>
TPM
   </td>
  </tr>
  <tr>
   <td><em>Self-Hosted Into Cloud Deployment</em>
   </td>
   <td>
<ul>
<li>This method is only used by customers that would like a production environment stood up quickly while there are particular blockers that need to be resolved prior to the customer using a Managed Cloud Instance
<li>The CE will stand up an initial production environment and transition the customer to the TA for continued support
<li>Once the Cloud Team completes the development required for the customer to use a Cloud deployment, the TA engages the Cloud team to coordinate a transition to a Managed Instance
</li>
</ul>
   </td>
   <td>CE
<p>
TAM
<p>
Cloud
   </td>
  </tr>
</table>

# Deployment Recommendations

Customers should be directed towards using a Managed Cloud Instance on Sourcegraph Cloud whenever possible. If this is not an option, they should then be evaluated for use of a "single node" deployment method (i.e., Machine Image or Single Node Shell Install Script). If this too is not an option, customers should deploy on-prem with Kubernetes. Customers should not be advised to pursue a Docker Compose deployment unless all of the previously described options are incompatible with the customer's requirements, and such scenarios should be discussed internally beforehand.

### Deployment Decision Tree

![Deployment Decision Tree](https://storage.googleapis.com/sourcegraph-assets/12-5-22%20Deployment%20Decision%20Tree.svg)

[Link to Excalidraw](https://excalidraw.com/#json=3sgWhfSb_gCs_iRuJauuy,jni0RyI7l_4xCq2Q2nDvnQ)

### Description of Decision Tree Questions

**Does the account qualify for a Cloud Instance?**<br>

- <em>Do Sourcegraph's certification meet all requirements?</em> - While Sourcegraph's current certifications and compliances (e.g., SOC2) should be sufficient for a large number of customers, others may have additional hard certification requirements that Sourcegraph does not currently support such as FEDRAMP, ISO 27001, and others. If you are uncertain of current certifications, reach out to the Cloud team.<br>

- <em>Is Sourcegraph's admin access acceptable?</em> - Sourcegraph Cloud admins will have access to the customer's Managed Cloud Instance, which may not be acceptable to some customers. Currently, Sourcegraph admins authorize via Okta with 2FA. We don't currently support MFA. This question is used to ensure that this access and authorization is acceptable for the customer.

- <em>Will Sourcegraph's audit logging capabilities be acceptable?</em> - Some customers may have specific audit log or eDiscovery hard requirements. If a customer has a requirement and it isn't immediately obvious whether or not it can be supported with a Managed Cloud Instance, reach out to the Cloud team to investigate.

- <em>Do no additional organizational Cloud blockers exist?</em> - Certain organizations may have hard cloud blockers that are not captured by other questions. If you identify these blockers, begin by collaborating with the Cloud team. In situations where we cannot support the requirement (or development to support the requirement won't be completed quickly enough for the customer), that customer will not be able to utilize the Managed Cloud Instance offering in the immediate term.

- <em>NOTE</em> - With any of these Cloud-related blocking questions, if you run into a hard requirement that isn't currently supported for Managed Cloud Instances, reach out to the Cloud team. For many situations, it may be possible that the Cloud team can complete development to remove that blocker and help to qualify the customer for Cloud.

**Is there a requirement for a currently unsupported hosting locale or code host that the organization is not willing to wait for Cloud development?**<br>

- Certain organizations will have hosting locale requirements that aren't currently supported. It typically takes the Cloud team about 1 month to stand up a new hosting locale. If this timeline works for the customer, great! Otherwise, they will need to move on to other deployment options.

- Likewise, Cloud can currently support the same code host types as listed for self-hosted instances ([Link to current code host support.](https://docs.sourcegraph.com/admin/external_service)). That being said, the code host must be accessible over the internet (i.e., have a public IP and accept connections from all source addresses or have the ability to accept connections from a public IP on a specified allowlist). Without access to connect to the code host over the internet, a Managed Cloud Instance will not be a viable option for that customer.

**Does the account have more than 75GB of hosted code?**<br>

- This question is used to determine whether or not the customer will use the Business or Enterprise Cloud pricing model. Any customer with more than 75GB or hosted code will be on the Enterprise pricing model.

**Are any of your code hosts non-standard or non-cloud?**<br>

- All code hosts must be standard, cloud-based offerings (GitHub Cloud, GitLab Cloud, BitBucket Cloud) in order for the customer to be on the Business pricing model. If any of the customer's cloud hosts are non-standard or non-cloud, the customer will need to be on the Enterprise pricing model.

**Does the account require priority SLAs, dedicated support, additional executors, or Private Instance Access?**<br>

- A customer wanting any of these available options will need to be on the Enterprise Cloud model. For executors specifically, Business customers are restricted to 2 exectors whereas Enterprise customers will have up to 4.

**Does the organization have more than 20k users or 200k repos?**<br>

- As of right now, AMI deployments can only scale up to these numbers of users and repositories. If an organization is above these numbers, they will need to deploy on Kubernetes.

**Is there an organizational requirement for a cluster deployment?**<br>

- Some organizations require enterprise products to be deployed on clusters. If this is the case, the customer should be directed to a Kubernetes deployment.

**Will a Sourcegraph Machine Image instance work for the account?**<br>

- <em>Can the organization deploy Sourcegraph on AWS or GCP?</em> - As of right now, Sourcegraph only provides Machine Images for AWS & GCP. If the organization needs to deploy on any other cloud provider, they cannot use the one-click deployment option.

- <em>Has the organization had no historical technical or scaling issues when deploying on a single machine?</em> - As a single-node option, customers may run into technical or scaling issues that may prevent them from using the one-click deployment option. When this happens, it should be recommended that the customer transitions to a Kubernetes deployment.

- <em>Do no other technical or organizational restrictions exist that prevent the use of a Sourcegraph Machine Image for the instance?</em> - This is a placeholder to capture any other technical or organizational blockers that disallow a customer from using the one-click deployment option. If you and the customer encounter issues or limitations of this deployment option, reach out to the Delivery team to discuss options and determine whether or not Kubernetes should be recommended.

**Does the account qualify for a jointly deployed instance?**

- <em>Has the account been evaluated by the implementation team for implementation services?</em> - Prior to qualifying an account for implementation services, the CE and AE must coordinate with the implementation team to discuss the opportunity, need for implementation services, and strategy.

- <em>Does the account take priority on the implementation backlog based on size, ARR, and TAM?</em> - The implementation team will likely not be able to handle every Kubernetes deployment that comes down the pipeline. In order to prioritize the accounts on the jointly deployed backlog, the implementation team and leadership will primarily review the organizations size, the opportunities ARR, and the total addressable market of the account.

- <em>Are there contextual limitations requiring the account to use Sourcegraph implementation services?</em> - Any additional contextual situations should be taken into account when determining the account priority and need for a jointly deployed instance. These include questions such as whether or not the account has a lack of deployment expertise, whether they have a particularly unique set of deployment requirements, or if they have a strategic purpose.

**Is there an organizational requirement to use their own base Machine Image or does the organization use a cloud provider other than AWS or GCP?**

- If a customer uses a cloud provider other than AWS or GCP and does not need a full Kubernetes deployment, the Single Node Shell Install Script should be recommended
