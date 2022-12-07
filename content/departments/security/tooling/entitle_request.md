# How to request access to Google Cloud resources via Entitle:

## There are two ways of requesting access in Entitle.

- [Search for Permissions](
- [Permission Sets](entitle_request.md#bundled-access-request)
- [Specific Permission](entitle_request.md#resource-access-request)

## Search for Permission Request:



## Permission Sets Request:

Permission Sets are Entitle’s way of grouping necessary permission together for a certain task. These are custom built based on team requests and frequency of use.
To request a custom built set, please reach out to the Security team.
To request permissions via a Bundle, follow these steps:

1. Issue /entitle or /access_request command in slack and you will see the following popup 
 ![Bundle_dialog](../img/Entitle_bundles.png)
2. Once Permission set is chosen in Request Type, you will have updated dropdowns
3. “Permission set category” is optional but narrows your list of available Bundles. You can leave this field blank if you want to see all the available Bundles
4. “Permission Set” are custom created grouped permissions for easy request submission. These are created so that a teammate who may need access to multiple resources for a particular task can request it in one request vs submitting multiple requests. If a Permission Set describes the type of access you require, you can select it. 
    1. If there isn't one that fits your need and you think that you will benefit from a custom permission set, please reach out to security team.
5. Permission Duration: is the amount of time you will need this access for. This will ensure that once you are finished with your necessary task, the permissions are revoked to keep our systems more secure.
6. Add Justification: This is a very important step. Without proper justification for your access, your request will be denied. This is necessary for audit and reporting purposes. Please reference a customer ticket, a jira ticket, or any other relevant information that justifies your need for access to the resource.


## Resource Access Request:

This option allows for granular access requests to only necessary data/instances. \
To request permission to a specific resource follow these steps:

1. Issue /entitle or /access_request command in slack and choose Resources from Request Type. you will see the following popup
   ![Resource_dialog](../img/Entitle_Resource.png)
2. Next you will choose the integration you need access to. Based on your team and division, you will see specific options. In this guide we will focus on GCP. You have two options
   1. GCP Development Projects: All projects not containing customer data
   2. GCP Production Projects: Customer Instances and other production level projects
3. Resource Type: This is a list of resource types available for the integration chosen. In case of GCP, you will see options such as “projects”, “instances”, “buckets” as well as other options. This drop down is optional but allows you to narrow down the search results
4. Resource: This is where you will choose the resource you want access to. This can be a project, a bucket, a sql_instance, or an instance amongst other options. The drop down has a scroll limit so searching by the name of the project the resource resides within will make it easier to find the correct resource.
5. Role: for GCP this will list out all the roles available to be assigned to you for the resource chosen. Again, search for the role that you think you will need on the resource to make it easier. You can find more information on GCP Roles [here](https://cloud.google.com/iam/docs/understanding-roles)
6. Grant Method: choose direct.
7. Permission Duration: is the amount of time you will need this access for. This will ensure that once you are finished with your necessary task, the permissions are revoked to keep our systems more secure.
8. Add Justification: This is a very important step. Without proper justification for your access, your request will be denied. This is necessary for audit and reporting purposes. Please reference a customer ticket, a jira ticket, or any other relevant information that justifies your need for access to the resource.
