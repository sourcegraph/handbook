# What should I be doing?

## My customer is just now signing with Sourcegraph:

- Complete the New Customer Onboarding and Enablement Project
- Achieve 80% MAU/Seats within 45 days of implementation\*
  - Implementation is expected to be completed within the first few weeks for non-Implementation Engineering involved accounts or Managed Instances.

## My customer has a MAU / Seats below 80%:

- Complete the Customer Health - Decreased Usage project
  - Initial inspection of the account and comprehensive Get Well Plan
  - Weekly updates to the Get Well Plan Status
  - Tasks created in Vitally to keep track of your action items.

## My customer is renewing in the next six months, and their health score in Vitally is either Red or Yellow:

- Account will be flagged into the [Lighthouse Program](../team-culture/processes.md#lighthouse-program) for extra help and attention.

## My customer is renewing in the next 180 days:

-Complete the Renewal Health Assessment Project to ensure they are properly categorized.

- IF account is Red / Yellow health category
  - Complete the Get Well project
    - Initial inspection of the account and comprehensive Get Well Plan
    - Weekly updates to the Get Well Plan Status
    - Tasks created in Vitally to keep track of your action items.

## My customer has a Yellow or Red health score:

- Review the traits that make up the health score
- Going to the account and expanding the health sections will tell you which traits are causing the issues
  - TA Pulse - This is how you feel about the account, if you are concerned about other dashboard metrics, take corrective action. If you feel there is risk, take preventative measures
  - Technical Health - To encourage customers to configure precise code intelligence and upgrade to the latest version it takes personal skills. Champions are contacts who will help you get things done and it is important to understand what motivates these people to help ensure that deployments are regularly updated and fully configured
  - Relationships & Engagement - It is important to maintain a champion and communication with each customer. Ensure that you have good channels of communication with our point of contact at each customer and that we are helping them achieve their goals so that they continue to advocate for Sourcegraph.
  - Utilization - The amount of people that use Sourcegraph is dependant on the level of friction we see at with customer. It is important that customers have access to the latest and greatest features of Sourcegraph to promote stickiness, ease of use, and interest to minimize friction. This comes from ensuring that their deployment is up to date, fully configured and end users have been trained on it along side understanding how it fits in to their existing workflows and use cases and priorities the organization has as a whole.
- These traits are explained in more detail [here](../team-culture/account-management-activities.md#customer-health).

## My customer has a low TA Pulse:

- If you're coming here then more often than not you did not assign this TA pulse. It is important to understand from any previous account team why there may have been concern if it is not evident from their current health dashboard. TA pulse is subjective and can be related to other health metrics, or concern for risk in the future.

## My customer has a low Technical Health Score / Last Month Versions Behind:

- Review notes to see if they have deployment challenges.
- Pull information about the biggest improvements from their current version and our latest release.
- Relate those improvements back to their engineering goals.
- Ensure they are aware of multi-version upgrades.
- Evaluate the deployment and see if they are set up for long-term success. A deployment change might be useful based on our updated methods.
- Relay the benefits of precise code intelligence and understand any barriers to deploying executors.
- Reach out to Implementation Engineering for support with upgrading/deploying executors.
- Sync with the AE and evaluate if a switch to Cloud makes sense.

## My customer does not have an active champion:

- Customers as of Jan 1, 2023 without an active champion have been identified and are being paired with exec sponsors to help reengage.
- If a customer falls into this category after the fact, mark the customer for inclusion in the [Lighthouse Program](../team-culture/processes.md#lighthouse-program).
- Champions are customer points of contact who will advocate on behalf of Sourcegraph. To build champions it is important to understand what an individual goal with Sourcegraph might be, and help them realize it. If you are able to make a customer contact successful they will be more likely to help you achieve your goals with that company.

## My customer does not have an active buyer that we have access to:

- Sync as an account team and escalate as needed to get Sourcegraph exec help rebuilding that connection.
- Work with your champion to collect internal wins that came from using Sourcegraph along with feedback.
- Create a [CBR](../team-culture/account-management-activities.md#cbrs) style presentation for your champion showing that value so that they can present Sourcegraph internally and gain support for their initiatives.

## My customer has not been contacted in X number of days:

- Never reach out just to reach out, always work to bring something of value to the customer. This could be a new feature we have released, a new blog post or piece of collateral we’ve created, or some piece of industry news (Log4J) that you believe might affect them PAIRED with some guidance from Sourcegraph.

<!-- ## My customer has a low Usage Score:

- \*\* Usage Score is DAU/MAU, weighted based on customer tenure, along a scale from 0-100. Technical health score is calculated monthly on the first of the month, using data from the previous month. So we calculated scores on Dec 1 for the month of November. DAU is an average of the daily active users for the month of November. MAU is the total MAUs for the month of November.
- Usage Score is a direct reflection of how active the MAU’s are. You could have 100% MAU / Seats but if everyone only logged in once, your Usage Score would be low.
- Dig into the customer's day to day activities. Build out an org chart to identify all the teams using sourcegraph and what they specifically do in the engineering or. With this information you will be able to help understand where sourcegraph can help in achieving their KPIs and help developers add Sourcegraph to their daily workflows
- This is more of a responsive approach (You can use Batch Changes to help with any migrations, do you have any migrations coming up? Vs. “We’re working through a project now where we need to upgrade our terraform packages across teams.”)
- Listen and advise. -->

## My customer has low MAU / Seats:

- Low MAU / Seats can happen for a number of reasons also related to the previous traits and should be taken into account.
- Being too many versions behind might have led to a bad user experience for the customer end users.
- Not having precise code intelligence configured could lead to a bad code intelligence user experience.
- Lacking a champion might mean Sourcegraph is not being vocalized internally
- Low usage score might mean we do not have enough power users to evangelize Sourcegraph internally. The more people who use Sourcegraph regularly, the easier it will be to see big customer wins and spread naturally.

## Low Utilization

Any customer whose utilization score (Monthly Active Users / Total Seats Purchased) is below 80% 45+ days into their tenure as a customer triggers a Low Utilization Project in [Vitally](https://sourcegraph.vitally.io/) and is assigned to the TA. The projects consists of two parts: planning and execution.

### Planning

The TA fills out the `Account - Context on Low Utilization field` in Vitally, providing a brief overview about: Why is utilization below 80%? Are there any in-progress activities occurring right now to directly impact adoption? The TA also completes a Get Well Plan to align with the Account Team and Sales and TS leadership on the go forward plan. The TA provides the following as part of the initial plan:

- Current State of the Account, Relationship
  - Description: What's the overall pulse of the account? Who do we have relationships with and how have things been going?
- Are we in their dev onboarding flow?
  - Description: We want every new dev to learn about Sourcegraph as they onboard to their company so it's important that we try and get our stakeholders to include links and licensing provisioning for Sourcegraph as part of their new employee onboarding program.
- Do we have documentation in their CMS?
  - Description: We want to meet our customers where they are at. Most every company have their own internal documentation solution and we want Sourcegraph to be linked and referenced there to make it easy for devs to learn about and self-service their questions and needs.
- Do you have recurring syncs with biz stakeholders?
  - Description: How actively engaged are we and the stakeholders that we are talking to, are they able to connect us and help us with enablement and training?
- What are your plans for driving Utilization?
  - Description: This asks the TA and Account Team to lay out their specific plan and actions for increasing utilization to the 80% threshold or above.
- Where are you stuck / where do you need help?
  - Description: This is an opportunity for the TA and Account Team to call out risks or blockers and ask for help from other teams or leadership in order to execute the plan successfully.

### Execution

After plan creation, the execute phase of the projects consists of bi-weekly updates from the TA via the Get Well Plan in Vitally which is reviewed by TA leadership.

## Account Health

The [account health playbook](https://docs.google.com/document/d/1YeuwtlplEkZEnmLMXZ1vKjJGImUZCIb1x4aCLXcNavc/edit) offers a repeatable framework for mitigating the risk of low adoption scores by offering suggestions for engagement as well as repeatable training and reusable content. This is a living document that should change to reflect available components in the [Customer Health Dashboard - Individual Customer](https://sourcegraph.looker.com/dashboards-next/194?Unique+Server+ID=Eventbrite) and mature over time to provide more refined resources to support Customer Engineers.
