# Account Management Activities

This page contains an overview of various account management activities that TAs should pay attention to.

- [Customer Health](#customer-health)
- [Customer Data & Analytics](#customer-and-data-analytics)
- [Voice of the Customer](#voice-of-the-customer)
- [Champion Building & Relationship Management](#champion-building--relationship-management)
- [CBRs](#cbrs)
- [TA to TA Account Handoff](#ta-to-ta-account-handoff)

---

# Customer Health

A Customer Health Score is used to give us a view into the well-being of our customer base.

Vitally is the tool we use to calculate this score. Vitally will update this score once an hour, but the underlying traits still need to be maintained.
The customer health score is calculated using the following standard categories:

| Customer Tier              | Weight |
| -------------------------- | ------ |
| TA Pulse                   | 5%     |
| Technical Health           | 15%    |
| Relationships & Engagement | 25%    |
| Utilization                | 55%    |

Those categories are made up of the following data points:

**TA Sentiment**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Account - TA Sentiment | The overall sentiment of the account in all dimensions. Healthy, Concerning, or Poor | Manually set by TA |

**Technical Health**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Last Month Versions Behind | At the end of each calendar month, we look at the version that the instance is currently on compared to the most recent version of Sourcegraph. This is that difference. | Sourcegraph generated (BigQuery) |
| Precise Intel Status | Whether or not precise code navigation is enabled on at least one language. This is either active or inactive. | Sourcegraph generated (BigQuery) |
Last 90 Days Defect Tickets | The number of defect support tickets in the last 90 days. Less than 2 is considered healthy, 5 or more is considered poor. | Sourcegraph generated (BigQuery) |
Last 90 Days Help Tickets | The number of questions or general help support tickets in the last 90 days. Less than 10 is considered healthy, 15 or more is considered poor. | Sourcegraph generated (BigQuery) |

**Relationships & Engagements**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Relationship - Active Champion? | This trait indicates that we have an [active champion](#champion-building--relationship-management) built inside the customer. | Manually set by TA |
| Relationship - Access to buyer? | This trait indicates that we currently have a line of communication to the buyer of Sourcegraph or the buyer for the renewal. | Manually set by TA |
| Last Activity | Looks at last contact as logged in by Salesforce. 14 or less days is considered healthy, 30 or more days of inactivity is considered poor. | Salesforce |

**Utilization**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Usage Score (Last 4 Wk DAU / Last Month MAU) | This looks at the rolling 4 week average of daily active users over last month's monthly active users. 30% or higher (.3) is considered healthy, 20% or less is considered poor (.2). | Sourcegraph generated (BigQuery) |
| Last Month Mau Over Seats | At the end of each calendar month we look at the Monthly Active Users of an instance for that month. We then divide that by the number of seats they have purchased. 80% is considered healthy (.8), less than 50% (.5) is considered poor. | Sourcegraph generated (BigQuery) |

# Voice of the Customer

A key role we play for our customers is serving as an advocate on their behalf back to internal product teams. As requests or feedback is shared from our customers, we share that with our product teams serving as a liaison on the customers' behalf. We do so by logging their feedback in Salesforce on the [Product Feedback Dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders).

# Account Management

As TAs we are responsible for the technical success of our customers. Post-sales we nurture these relationships and manage the accounts by paying attention to customer health metrics. Usage, adoption, and customer sentiment are important indicators that we monitor and address. It is recommended that TAs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

## Customer and Data Analytics

Looker is our source for customer data & analytics. Two key dashboards we use are:

- [Customer Health TS Dashboard](https://sourcegraph.looker.com/dashboards/484)
- [Instance Overview Dashboard](https://sourcegraph.looker.com/dashboards/409?Account+name=Apex+Clearing+Corp&Installer+email=))

## Champion Building & Relationship Management

A core responsibility of the TA is to identify, build, and maintain strong relationships with customers. We define a champion as someone who:

1. Has power and influence within their company
2. Actively sells and promotes on our behalf
3. Has a vested interest in our success, and see it as their success

All three of these aspects must be true in order to be a true champion. TAs must constantly be testing their champions to ensure they remain true champions, and where necessary either build up existing champions or identify new ones.

See more of our champion training [here](https://docs.google.com/presentation/d/1RPqSkCgKU0za85fe2QCOuhlzoy6a2fJBlRgZbbz6ceU/edit#slide=id.g1eeb416435b_0_56) and on [Highspot](https://sourcegraph.highspot.com/).

## CBRs

An important dimension of relationship management and ensuring that our customers are getting the expected value and outcomes from Sourcegraph is understood and shared through Customer Business Reviews (CBRs). We ideally want to lead these conversations with customers on a quarterly basis, but at times may hold them bi-annually. TAs are responsible for leading the planning and execution of customer CBRs with close input from internal team members such as Sales.

The format of CBRs is as follows:

- Intros
- Business Strategy & Key Initiatives
- Previous Progress & Outcomes
- Usage Summary
- Value Realization & Maturity Model
- Product Roadmap & Feedback
- Next Steps

[(Deck)](https://docs.google.com/presentation/d/1H0Hefg-0KZJejhmR5o-oks7TcruW3g4v0xP8CgdK7Fc/edit?usp=sharing)

## TA to TA Account Handoff

**Outgoing TA:** Complete the following steps when transitioning an assigned account to a new TA

1. Create a new Document in Vitally using the [TA to TA Account Handoff template](https://sourcegraph.vitally.io/settings/templates/docs/897ed501-2e7c-42c8-a359-6b8513bf5d9e) and complete all the information required in the placeholders.
2. Inform the TA manager upon completing the [TA to TA Account Handoff template](https://sourcegraph.vitally.io/settings/templates/docs/897ed501-2e7c-42c8-a359-6b8513bf5d9e).
3. Share any account docs or notes in Vitally and ensure the new TA has editor permissions.

**New TA:** Complete the following steps after the outgoing TA has completed the steps above

1. Review the [TA to TA Account Handoff template](https://sourcegraph.vitally.io/settings/templates/docs/897ed501-2e7c-42c8-a359-6b8513bf5d9e) and inform the TA manager, who will make the assignment changes in our CRM systems upon completion.
2. Notify the account team (AE, CE, IE) about the transfer on the Customer Slack channel (#customer-NAME).
3. Work with your AE to notify/email the customer using the [Existing Customer - TA account transfer template](https://docs.google.com/document/d/1yM0k8zt1xRIawkAPLyIqTH57ZsfcxgJFEb_ScguzAWk/edit#bookmark=id.qoc9l1gl4bt6).
