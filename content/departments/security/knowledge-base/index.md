# Security Knowledge Base 🔒

Welcome to the Sourcegraph Security Knowledge Base.

The knowledge base is a repository of security best practices and principles that we've accumulated over time to help secure our product and infrastructure. This includes everything from high-level software design principles to Sourcegraph / technology specific coding best practices.
In the spirit of [transparency](../../../company-info-and-process/values/index.md#open-and-transparent) we want to share as much as we can openly with the community including this **public** knowledge base - however not everything should be represented here.

Before adding to the knowledge base consider the following:

- Am I being too specific / is the content reusable? We want the knowledge base to be a reusable reference anyone can refer to for insight and examples of how to best engineer things securely.
- Is there a known vulnerability / reported issue related to your entry? Our first priority is to ensure the safety of our users and thus must be sure not to disclosure anything related to on-going incidents or active reports in our security-issues repository.
- Does your entry contain any details only available to Sourcegraph Employees? It's important to safe guard data that is not normally within public reach.

## Guiding Best Practices

|                                                                                                                                        **HTTPS Everywhere**                                                                                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Encrypted secure communications - while not always required for non-sensative information - are largely recognized as an industry best practice to ensure data is protected. HTTPS should be used throughout Sourcegraph as well as enforced for outgoing connections in features where applicable. |
|                                                                            It's generally easier to consistently require secure communications everywhere then it is to have special cases where encryption is not used.                                                                            |

|                                                                                                                                                                                            **Principle of Least Privledge (PoLP)**                                                                                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| PoLP refers to the practice of ensuring systems, processes, networks, users etc. only have access / permissions that they absolutely require to perform their functions. This needs to be considered at design time of new features and when updating existing features. This is important as our product is changing fast and becoming more complex - therefore it's easy to introduce cases of unnecessary elevated access. |
|                                                                                   While it can take more time to gather the required context to understand the consequences of changes - especially in cases where code is being relocated - it's an important step to reduce the impact of discovered vulnerabilities within Sourcegraph.                                                                                    |

|                                                                                                                                                                                                               **Data Validation & Sanitization**                                                                                                                                                                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Data validation and sanitization are critical steps in application security hygene. For a malicious actor the door of entry in to an application often begins with user controlled fields such as: form fields, search boxes, GET/POST parameters, the URL etc. Taking steps using built-in libraries to validate and sanitize data entering the application ensures only quality data / expected data gets to the stage of being processed by the application. |
|                                                                 Frontend validation should be seen as a convenience to the end user - informing them of what kind of data is expected. Backend validation can also be used to inform them of expected data - however the main priority of this validation is to ensure only expected data makes it through to be processed by the application.                                                                  |

## Table of Contents

### [Broken Access Control](./broken-access-control.md)

Proper Access Control prevents user accounts, application processes, and application functionality from performing actions outside of their intended permissions. Improper Access Control often leads to the destruction or modification of data, ability to perform unexpected actions in the application, or to view unathorized information.

> For example:
>
> - Missing backend validation that allows a user to tamper a parameter adding another users account number resulting in returning that users data.
> - Allowing an unprivileged user to access an admin only feature without validating that the user session belongs to a true admin.

### [Yubikey FAQ](./yubikey-faq.md)

### [Using IAP](./using-iap.md)
