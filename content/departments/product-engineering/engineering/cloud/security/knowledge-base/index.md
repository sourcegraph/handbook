# Security Knowledge Base :lock:

Welcome to the Sourcegraph Security Knowledge Base. 

The knowledge base is a repository of security best practices and principles that we've accumulated over time to help secure our product and infrastructure. This includes everything from high-level software design principles to Sourcegraph / technology specific coding best practices. 
In the spirit of [transparency](https://handbook.sourcegraph.com/company-info-and-process/values/#open-and-transparent) we want to share as much as we can openly with the community including this **public** knowledge base - however not everything should be represented here. 

Before adding to the knowledge base consider the following:
- Am I being too specific / is the content reusable? We want the knowledge base to be a reusable reference anyone can refer to for insight and examples of how to best engineer things securely.
- Is there a known vulnerability / reported issue related to your entry? Our first priority is to ensure the safety of our users and thus must be sure not to disclosure anything related to on-going incidents or active reports in our security-issues repository. 
- Does your entry contain any details only available to Sourcegraph Employees? It's important to safe guard data that is not within public reach.

## Guiding Best Practices

| **HTTPS Everywhere** |
|:--------------------:|
Encrypted secure communications - while not always required for non-sensative information - are largely recognized as an industry best practice to ensure data is protected. HTTPS should be used throughout Sourcegraph as well as enforced for outgoing connections in features where applicable. 
It's generally easier to consistently use secure communications everywhere then it is to have special cases where encryption is not used.

| **Principle of Least Privledge (PoLP)** |
|:--------------------:|
PoLP refers to the practice of ensuring systems, processes, networks, users etc. only have access that they absolutely require to perform their duties. This needs to be considered at design time of new features and when updating existing features. This is important as our product is changing fast and therefore it's easy to introduce cases of elevated access within features.
While it can take more time to gather the required context to understand the consequences of changes - especially in cases where code is being relocated - it's an important step to reduce the impact of discovered vulnerabilities within Sourcegraph. 

| **Data Validation & Sanitization** |
|:--------------------:|
Data validation and sanitization are critical steps in application security hygene. 

## [KB-SEC-1] Side-channel - Access Managment Controls

### Description

A side-channel vulnerability is where data / responses can be analyzed to accurately guess data that followss specific patterns.
