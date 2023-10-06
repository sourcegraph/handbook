# TA Team Norms

## Customer Segmentation

We segment our customers into [three discrete tiers](../../../../strategy-goals/strategy/index.md#market-segmentation). This segmentation is important in helping provide a consistent experience to our customers by defining the discrete activities that we want to deliver to every customer in a given tier. Using both the estimated number of developers and real ARR in our tiers ensures that customers have the proper resources attached to make them successful at scale while also letting us ensure the health of our own business.

A customer, and our post-sales success team, falls into one of our separate but related post-sales functions:

- Managed (named, dedicated TA; high-touch)
- Unmanaged (group of non-dedicated TAs; scaled success; low-touch)

### Managed

This group is comprised of our Enterprise and Strategic TAs who are dedicated to a specific number of customers, depending on region and TA level. Within their book of business, TAs work directly with these customers throughout the post-sales lifecycle to provide a high-touch, customized experience.

Today, the following segments are considered managed:

| Customer Segment | Segment definition                       |
| ---------------- | ---------------------------------------- |
| Strategic        | 10k+ devs, any amount of ARR spend       |
| Enterprise       | 1.5k - 10k devs, any amount of ARR spend |
| Commercial       | 0 - 1.5k devs, <$100k ARR spend          |

### Unmanaged

This group is comprised of a team of technical advisors and program managers who nurture this segment of our customers through our [Scaled Success Program](#scaled-success-program) and provide a low-touch, tailored experience.

Today, the following segment is considered unmanaged:

| Customer Segment | Segment definition              |
| ---------------- | ------------------------------- |
| Commercial       | 0 - 1.5k devs, >$100k ARR spend |

## Scaled Success Program

Our Scaled Success program services our customers who do not qualify for a named, dedicated TA (managed) through a tech-nurtured approach based on their use of Sourcegraph by delivering tailored, consistent communication & enablement to meet their needs, support them, and ensure they have a positive experience.

We are utilizing Vitally to monitor all customers and send all communications. We seek to align the Scaled Success Customer Lifecycle to our overall customer journey as closely as possible.

You can view our current program across the customer lifecycle below:
![Customer Lifecycle - Scaled Success](https://github.com/sourcegraph/handbook/assets/7228359/7cd03b9b-cdb0-4387-9a46-000250363e74)

### Q3 Roadmap

In Q3 we are iterating on our Scaled Success program to add the following capabilities:

- Notification to AE when account hits 90% & 100% of seats
- Quarterly offering of 30 minute call with Scaled TA team
- Additional enablement and nurture email campaigns sharing blogs & content, and youtube videos
- Tailored monthly usage recap emails for customers who have fallen behind in upgrading

## Tooling

### Vitally

We use Vitally to stay organized internally around our customers. This is the central tool and source of truth for TAs across their customers and book of business. TAs should use Vitally to plan and organize their strategy and activities across their customers.

Vitally calculates our customer health score and is the mechanism by which we facilitate:

- pre-to-post sales handoff from CE to TA
- scaled customer success communications
- our renewal process
- quarterly success plans for customer goals & expected outcomes
- the lighthouse program for corrective action on accounts

This [Dashboard](https://sourcegraph.vitally.io/work/team/dashboards/eee503ef-886f-4eba-b416-866f0aef71bb) can be used to see the current state of these traits for your accounts all in one spot.

##### Other Helpful Vitally Dashboards

###### Easy Book Of Business Breakdown

- https://sourcegraph.vitally.io/views/d3aceeb1-143d-48b9-afef-7fb0c679cb9a
- Use the CSM filter at the bottom right to pick the TA

###### List of Health Score Category Changes

- https://sourcegraph.vitally.io/views/99ca793f-c005-4e50-b842-71490f52013a
- Gives you the Account that changed, the date it changes, it’s current green/yellow/red status and it’s old green/yellow/red status

###### Other helpful links and tools

- Make sure you have enabled the Gmail Integration with Vitally - [Link](https://docs.vitally.io/pushing-data-to-vitally/integrations/gmail) and your SFDC Gmail connector

### Salesforce

As the Sales system of record, we use Salesforce (and the data we bring into Vitally from Salesforce) as the source of contractual information such as revenue, licensing, and renewal & expansion opportunities.

### Looker

Looker is our product analytics tool that allows for deep inspection and analysis around customer utilization and consumption. While a subset of this information is synced into Vitally, a lot of data lives in Looker.

## Recurring Team Meetings

This team is highly focused on engaging our customers with valuable insight and information. We also are focused on internally surfacing customer information that is important to the business. This means both synchronous customer conversations throughout the day along with synchronous and asynchronous Sourcegraph processes.

Team meetings are held weekly.

## OOO Protocols

Prior to taking time off, TAs should:

1. [Log time off request in Deel PTO](../../../../benefits-pay-perks/benefits-perks/time-off/index.md)
2. Work with their manager and peers to create a coverage plan. The coverage plan should highlight any accounts that:
   - Are renewing during the OOO period. These should have any pending action items resolved
   - Are unhealthy and have active Lighthouse Program Save plans
   - Are active on customer Slack channels and have open Support Tickets
3. Share the OOO coverage plan with the relevant account teams like AE, CE, IE, etc
4. Reschedule any upcoming customer syncs with champions or stakeholders, keeping the AE informed
5. Notify their customers through the appropriate channels of their upcoming OOO
6. Update their Slack status accordingly with OOO dates indicated
