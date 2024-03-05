# How to request access to Google Cloud resources via Entitle:

Entitle is available through a Slack integration as well as web interface.

### Web Interface

- The webapp is available [here](https://app.entitle.io/request)
- You can login via your Google Workspace account
- Clicking on "New Request" in the top left corner will take you to the request form
- Please see request form details below

### Slack Interface

- Slack interface is available by typing /entitle or /access_request in any slack window

## There are three types of requests in the form.

- [Search for Permissions](entitle_request.md#search-for-permission-request)
- [Permission Sets](entitle_request.md#permission-sets-request)
- [Specific Permission](entitle_request.md#specific-permission-request)

### Search for Permission Request:

This search engine allows you to lookup roles and resources without having to specify the application or integration that the role/resource belongs to.

1. Issuing a Slack command will show you this popup:

![Search Dialog](https://storage.googleapis.com/sourcegraph-assets/Entitle_search.png)

OR web interface form will look like this
![SearchUI](https://storage.googleapis.com/sourcegraph-assets/Entitle_webui1.png)

2. Search for Permission request type is the default choice
3. “Search Permission”: This is where you would type in search terms for your request:
   1. You can type in a project name to see what Roles you can request
   2. You can type in a particular Role to see which resources you can request it on
   3. You can also combine and type in Role and Project together to narrow down your search.
4. Permission Duration: is the amount of time you will need this access for. This will ensure that once you are finished with your necessary task, the permissions are revoked to keep our systems more secure.
5. Add Justification: This is a very important step. Without proper justification for your access, your request will be denied. This is necessary for audit and reporting purposes. Please reference a customer ticket, a jira ticket, or any other relevant information that justifies your need for access to the resource.

NOTE: this feature is still in Beta so results may vary. If you do not see the expected results, please use the other two request methods.

### Permission Sets Request:

Permission Sets are Entitle’s way of grouping necessary permissions together for a certain task. These are custom built based on team requests and frequency of use.
To request a custom built set, please reach out to the Security team.
To request permissions via a Bundle, follow these steps:

1. Issue /entitle or /access_request command in slack and you will see the following popup if you choose Permission Sets from Request Type dropdown

   ![Bundle_dialog](https://storage.googleapis.com/sourcegraph-assets/Entitle_bundles.png)

OR if you click "I want a permission set" on the bottom of the web interface form

![Bundle Webform](https://storage.googleapis.com/sourcegraph-assets/Entitle_webui2.png)

2. “Permission set category” is optional but narrows your list of available Bundles. You can leave this field blank if you want to see all the available Bundles
3. “Permission Set” are custom created grouped permissions for easy request submission. These are created so that a teammate who may need access to multiple resources for a particular task can request it in one submission vs making multiple requests. If a Permission Set describes the type of access you require, you can select it.
   1. If there isn't one that fits your need and you think that you will benefit from a custom permission set, please reach out to security team.
4. Permission Duration: is the amount of time you will need this access for. This will ensure that once you are finished with your necessary task, the permissions are revoked to keep our systems more secure.
5. Add Justification: This is a very important step. Without proper justification for your access, your request will be denied. This is necessary for audit and reporting purposes. Please reference a customer ticket, a jira ticket, or any other relevant information that justifies your need for access to the resource.

### Specific Permission Request:

This option allows for granular access requests to only necessary data/instances.
To request permission to a specific resource follow these steps:

1. Issue /entitle or /access_request command in slack and choose Specific Permission from Request Type. you will see the following popup

   ![Resource_dialog](https://storage.googleapis.com/sourcegraph-assets/Entitle_Resource.png)

Or if you click "I want a specific permission" on the bottom of the web interface form

![specific permission webform](https://storage.googleapis.com/sourcegraph-assets/Entitle_webui3.png)

2. Next you will choose the integration you need access to. Based on your team and division, you will see specific options. In this guide we will focus on GCP. You have two options
   1. GCP Development Projects: All projects not containing customer data
   2. GCP Production Projects: Customer Instances and other production level projects
3. Resource Type: This is a list of resource types available for the integration chosen. In case of GCP, you will see options such as “projects”, “instances”, “buckets” as well as other options. This drop down is optional but allows you to narrow down the search results
4. Resource: This is where you will choose the resource you want access to. This can be a project, a bucket, sql_instance, or an instance amongst other options. The drop down has a scroll limit so searching by the name of the project the resource resides within will make it easier to find the correct resource.
5. Role: for GCP this will list out all the roles available to be assigned to you for the resource chosen. Again, search for the role that you think you will need on the resource to make it easier. You can find more information on GCP Roles [here](https://cloud.google.com/iam/docs/understanding-roles)
6. Grant Method: choose direct.
7. Permission Duration: is the amount of time you will need this access for. This will ensure that once you are finished with your necessary task, the permissions are revoked to keep our systems more secure.
8. Add Justification: This is a very important step. Without proper justification for your access, your request will be denied. This is necessary for audit and reporting purposes. Please reference a customer ticket, a jira ticket, or any other relevant information that justifies your need for access to the resource.

# FAQ

#### How do I start using Entitle?

- Just type in “/entitle” into a slack message and you can get started with it.

#### How do I know which project is where?

- Here is the [project mapping](https://docs.google.com/spreadsheets/d/1Sn7CWAdfUl8nQxFq-o2z8p5m-0fJH8y3NSQq2eUq1ng/edit?usp=sharing). For access to Cloud (Managed Instances), please visit go/cloud-ops

- Please let Security Team know if there is a project missing that you want included in the mapping

#### What if there is an incident and I need access?

- In case of an incident or on-call access request, please submit the access request and then reach out to security via our incident response process outlined [here](../security-incident-response.md#reporting)

#### Which applications can I request access to via Entitle?

- Currently we are using Entitle to request permissions to

  1.  Google Cloud
  2.  GitHub
  3.  Okta
  4.  Managed instance UI access

#### How to break glass if encounters problems with Entitle?

For members of Cloud, DevInfra and Security teams, the Slack command `break-glass` is available to grant 1h of SG_Editor access in specific GCP folders. You can find more information [here](https://github.com/sourcegraph/infrastructure/tree/main/security/tooling/break-glass-access).

#### If my team uses a group of permissions regularly, how can these be requested more easily?

- [Contact](../index.md#contact) The Security team to create a Bundle for those permissions

#### I want access to a project in our “Engineering Projects” folder. How do i do that?

- Engineering projects are all development projects. So you will find these via the “Google Cloud Development Projects” integration in the Resource Access Request flow.

#### I want access to a Customer Instance, how do I request it?

- Customer instances contain sensitive customer data. These are considered our production projects and can be found under the “Google Cloud Production Projects” integration in the Resource Access Request flow.

- Due to the sensitive nature of the request, approval will rely heavily on the justification provided so please ensure that you have the right use case for requesting this access.

#### How do I renew a request that has expired?

- Entitle app Slack channel shows your requests and expirations. You can hit renew on an expired permission request to re-request it.

![webapp renew](https://storage.googleapis.com/sourcegraph-assets/Entitle%20Renew%202.png)

- Entitle Webapp has history of all your requests in the "My Requests" section. You can click to renew a past request from the right most column on this page.
  ![slack app renew](https://storage.googleapis.com/sourcegraph-assets/Entitle%20Renew%201.png)

#### What if i run into an error in Entitle?

- Please reach out to #security with the error and we can help resolve it

#### If I didnt get the requested permissions after approval, what should I do?

- In the web interface of Entitle, you can see full log of where your request is in the process.

- If there is an error and requests seems stuck, we still have terraform available as a failover for provisioning access. Please follow handbook steps regarding terraform changes
