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
   <td><em>Cloud Deployment</em>
   </td>
   <td>
<ul>
<li>Preferred deployment strategy
<li>Once it is determined that the customer qualifies for Cloud, the CE or Sales will submit a <a href="https://handbook.sourcegraph.com/departments/cloud/#managed-instance-requests">Managed Instance Request</a> to the Cloud Team to kick off the process
</li>
</ul>
   </td>
   <td>Cloud
<p>
CE
   </td>
  </tr>
  <tr>
   <td><em>One-Click Deployment</em>
   </td>
   <td>
<ul>
<li>Preferred on-prem deployment method
<li>The production environment for the customer is created by the CE prior to transitioning ownership of the account to the TAM
<li>The production environment could be initiated as part of a trial or POC, or it could be created following contract closure
</li>
</ul>
   </td>
   <td>CE
   </td>
  </tr>
  <tr>
   <td><em>Jointly Managed Deployment</em>
   </td>
   <td>
<ul>
<li>If Cloud and One-Click are not options for the customer, the CE will <a href="https://handbook.sourcegraph.com/departments/ce-support/ce/ie/ce-implementation-handoff/#initiating-an-ie-request">Initiate an IE Request</a>
<li>Upon reviewing the request, the implementation team qualifies the customer for a jointly managed deployment and kicks off the process with the CE and Sales
<li>This method is primarily used for on-prem Kubernetes deployments
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
   <td><em>One-Click Into Jointly Managed Deployment</em>
   </td>
   <td>
<ul>
<li>This method is only used by customers that would like a production environment stood up quickly, their initial user set can be supported by a One-Click Deployment, but a full Kubernetes instance will be needed for expansion to the full set of users
<li>The CE will stand up an initial One-Click production environment and transition the customer to the TAM for continued support
<li>As the deployment reaches scalability or technical limits, the TAM engages the implementation team to coordinate a post-live, jointly managed Kubernetes deployment 
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
   <td><em>One-Click Into Cloud Deployment</em>
   </td>
   <td>
<ul>
<li>This method is only used by customers that would like a production environment stood up quickly and there are particular Cloud blockers that need to be resolved prior to the customer using a Managed Instance
<li>The CE will stand up an initial One-Click production environment and transition the customer to the TAM for continued support
<li>Once the Cloud Team completes the development required for the customer to use a Cloud deployment, the TAM engages the Cloud team to coordinate a transition to a Managed Instance
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

Customers should be directed towards using a managed instance on Sourcegraph Cloud. If this is not an option, they should then be evaluated for use of an on-prem one-click deployment. If this too is not an option, customers should deploy on-prem with Kubernetes. Only is very specific situations should customers be directed towards a Docker Compose deployment.

### Deployment Decision Tree

![Deployment Decision Tree](https://storage.googleapis.com/sourcegraph-assets/Deployment%20Decsision%20Tree%20v8.png)

[Link to Excalidraw](https://excalidraw.com/#json=9j9s-5ByiRR4y5SdcF5F3,fYozCz5zwCEt6QoC_Y_Fww)

### Description of Decision Tree Questions

**Does the account qualify for a Cloud Instance?**<br>

- <em>Do Sourcegraph's certification meet all requirements?</em> - While Sourcegraph's current certifications and compliances (i.e. SOC2) should be sufficient for a large number of customers, others may have hard certification requirements that Sourcegraph does not currently support (such as FEDRAMP, ISO 27001, and others). If you are uncertain of current certifications, reach out to the Cloud team.<br>

- <em>Is Sourcegraph's admin access acceptable?</em> - Sourcegraph admins will need to access the customer's Managed Instance. This may be a blocking issue for a customer. Currently, Sourcegraph admins authorize via Okta with 2FA. We don't currently support MFA. This question is used to ensure that this access and authorization is acceptable for the customer.

- <em>Will Sourcegraph's audit logging capabilities be acceptable</em> - Some customers may have specific audit log or eDiscovery hard requirements. If a customer has a requirement and it isn't immediately obvious whether or not it can be supported with a managed instance, reach out to the Cloud team to investigate.

- <em>Do no additional organizational Cloud blockers exist?</em> - Certain organizations may have hard cloud blockers that are not captured by other questions. If you identify these blockers, begin by collaborating with the Cloud team. In situations where we cannot support the requirement (or development to support the requirement won't be completed quickly enough for the customer), that customer of course cannot use Cloud in the immediate term.

- <em>NOTE</em> - With any of these Cloud-related blocking questions, if you run into a hard requirement that isn't currently supported for Managed Instances, reach out to the Cloud team. For many situations, it may be possible that the Cloud team can complete development to remove that blocker and help to qualify the customer for Cloud.

**Is there a requirement for a currently unsupported hosting locale or code host that the organization is not willing to wait for Cloud development?**<br>

- Certain organizations will have hosting locale requirements that aren't currently supported. It typically takes the Cloud team about 1 month to stand up a new hosting locale. If this timeline works for the customer, great! Otherwise, they will need to move on to other deployment options.

- Likewise, Cloud can currently support the same code host types as listed for self-hosted instances ([Link to current code host support.](https://docs.sourcegraph.com/admin/external_service)). That being said, the code host must be publicly available (i.e. have a public IP and accept connections from all source addresses or have the ability to be configured to accept connections from a public IP). Without being publicly available, a Managed Instance currently cannot connect to a code host and is therefore not a viable option for that customer.

**Does the account have more than 75GB of hosted code?**<br>

- This question is used to determine whether or not the customer will use the Business or Enterprise Cloud pricing model. Any customer with more than 75GB or hosted code will be on the Enterprise pricing model.

**Are any of your code hosts non-standard or non-cloud?**<br>

- All code hosts must be standard, cloud-based offerings (GitHub Cloud, GitLab Cloud, BitBucket Cloud) in order for the customer to be on the Business pricing model. If any of the customer's cloud hosts are non-standard or non-cloud, the customer will need to be on the Enterprise pricing model.

**Does the account require priority SLAs, dedicated support, additional executors, or Private Instance Access?**<br>

- A customer wanting any of these available options will need to be on the Enterprise Cloud model. For the executors specifically, Business customers are restricted to 2 exectors whereas Enterprise customers will have up to 4.

**Does the organization have more than 20k users or 200k repos?**<br>

- As of right now, AMI deployments can only scale up to these numbers of users and repositories. If an organization is above these numbers, they will need to deploy with Kubernetes.

**Is there an organizational requirement for a cluster deployment?**<br>

- Some organizations require enterprise products to be deployed on clusters. If this is the case, the customer should be directed to a Kubernetes deployment.

**Will a Sourcegraph AMI instance work for the account?**<br>

- <em>Can the organization deploy Sourcegraph on AWS?</em> - As of right now, Sourcegraph one-click AMIs need to be deployed on AWS. If the organization needs to deploy on any other cloud provider, they cannot use the one-click deployment option.

- <em>Has the organization had no historical technical or scaling issues when deploying on a single machine?</em> - As a single-node option, customers may run into technical or scaling issues that may prevent them from using the one-click deployment option. When this happens, it should be recommended that the customer transitions to a Kubernetes deployment.

- <em>Do no other technical or organizational restrictions exist that prevent the use of a Sourcegrpah AMI for the instance</em> - This is a placeholder to capture any other technical or organizational blockers that disallow a customer from using the one-click deployment option. If you and the customer encounter issues or limitations of this deployment option, reach out the the Delivery team to discuss options and determine whether or not Kubernetes should be recommended.

\*\*Does the account qualify for a jointly managed instance?

- <em>Has the account been evaluated by the implementation team for implementation services?</em> - Prior to qualifying an account for implementation services, the CE and AE must coordinate with the implementation team to discuss the opportunity, need, and strategy.

- <em>Does the account take priority on the implementation backlog based on size, ARR, and TAM?</em> - The implementation team will likely not be able to handle every Kubernetes detployment that comes down the pipeline. In order to prioritize the accounts on the jointly managed backlog, the implementation team and leadership will primarily review the organizations size, the opportunities ARR, and the total addressable market of the account.

- <em>Are there contextual limitations requiring the acount to user Sourcegraph implementation services?</em> - Any additional contextual situations should be taken into account when determining the account priority and need for a jointly managed instance. These include questions such as whether or not the account has a lack of deployment expertise, they have particularly unique set of deployment requirements, or they have a strategic purpose.

**Is there an organizational requirement to use their own base AMI or does the organization use a cloud provider other than AWS?**

- If a customer uses a cloud provider other than AWS and does not need a full Kubernetes deployment, Docker Compose should continue to be recommended.
- If a customer uses AWS but indicates that they require the use of their own base AMI (therefore requiring the use of Docker Compose), this should be questioned and discouraged. While this is still possible, Docker Compose is no longer recommended, and ideally any customer for whom Cloud and one-click doesn't work should be deploying with Kubernetes.
