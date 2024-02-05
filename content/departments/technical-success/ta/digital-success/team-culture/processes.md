# TA Processes

Processes exist to ensure consistent practices amongst teams. Processes that the TA team either drives or heavily contributes to are outlined below.

### Post-sales hand-off

This process occurs through both Salesforce and Vitally. Below is an overview of the process along with additional details about tooling automation that facilitates the process.

The pre-to-post sales handoff process consists of the following steps:

1. Technical Advisor Support Level is manually assigned on the Salesforce Account by TA leadership
2. The account is created in Vitally automatically once the Support Level is set
3. The Customer Segmentation Assignment Vitally Playbook runs to assign account segment attribute of: Strategic, Enterprise, Mid-Market, or SMB.
4. Digital Scaled customers are assigned an account segment attribute of: Scaled.
5. Customer Lifecycle Stages Vitally Playbook runs to assign account as "0. Prospect", the first step in the customer lifecycle. At this point, the account is created and all initial attributes about the new customer are assigned in Vitally.
6. TA leadership continues to monitor the new business opportunity until close.
7. Upon close, the pre-sales CE performs the following steps:
   1. Creates the production license
   2. If relevant, generates request for new cloud production instance.
   3. Completes [instance to admin mapping](https://docs.google.com/document/d/12W85VTKLJg2Os74PWADxwOPfpMozB0mUm4Do6fN9dFs/edit?usp=sharing)
   4. Tags customer contacts with the appropriate `role` on their contact card in Salesforce.

### How We Use Notion

Utilizing columns to represent different stages of the project lifecycle, such as "To-Do," "In Progress," "Under Review," and "Completed," we can easily track the status of each task. This visual representation enhances collaboration by providing a real-time overview of project progress, enabling quick identification of areas that require attention. This allows transparency and efficiency among team members.

### Vitally

#### Customer Playbooks

Playbooks in Vitally automate our process to reach our Digital Success customers effectively and efficiently.

- [Onboarding Playbook](https://sourcegraph.vitally.io/settings/playbooks/d2ce4cd5-4030-4c12-8589-809ec3c719d9)
- [30 Day Survey](https://sourcegraph.vitally.io/settings/playbooks/341f21e3-7991-4287-a141-93dda6f1bc5a)
- [90 Day Check In](https://sourcegraph.vitally.io/settings/playbooks/341f21e3-7991-4287-a141-93dda6f1bc5a)
- [Monthly Recap Email](https://sourcegraph.vitally.io/settings/playbooks/5d7b557e-d7b8-47ad-95de-be0a11fb694c)
- [Product Releases](https://sourcegraph.vitally.io/settings/playbooks/9d3aab65-ff3b-495d-a957-bf2e04348250)

#### Customer Utilization and Alerts

The Customer Utilization playbook enables us to internally notify our Digital Success Teams and Account Executives whenever customers engage with a feature for the first time. Additionally, it provides the capability to ensure that customers fully leverage the number of seats purchased. The playbooks automatically trigger alerts, notifying our team through #alerts-customer-usage channel.

#### Conversations

We monitor key metrics associated with our conversations to analyze and optimize our communication strategies. This includes tracking open and read rates, monitoring unsubscribes, and managing [pending](https://sourcegraph.vitally.io/hubs/335a99ea-5302-498d-9d11-cc39aa8386b9/d22fb1ab-179a-4a55-9b5b-e997a86ad5c4), [bounced](https://sourcegraph.vitally.io/hubs/335a99ea-5302-498d-9d11-cc39aa8386b9/0093fc1f-b3e9-4602-afd5-0ad46cd70f55) and [sent](https://sourcegraph.vitally.io/hubs/335a99ea-5302-498d-9d11-cc39aa8386b9/1e8f0f60-c8e8-4356-9ebf-2258dbdca5aa) conversations.

#### Customer Health Overview

Focused customer health monitoring allows us to assess Digital Success customers' overall health and utilization by closely tracking key metrics such as utilization, feature adoption, engagement of users, and version updates. This comprehensive approach empowers us to proactively address any emerging concerns and fine-tune our communication strategies to align precisely with the needs of our customers. As part of this initiative, we've crafted a Health Overview dashboard, accessible through [Customer Health Overview](https://sourcegraph.vitally.io/hubs/335a99ea-5302-498d-9d11-cc39aa8386b9/fd3cafe5-94a0-4c7f-bbdb-aa40b34269b4), providing a centralized and insightful view of the health status of our Digital Success customers. This dashboard serves as a valuable tool, facilitating informed decision-making and fostering proactive engagement with our customer base.
