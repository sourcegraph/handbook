# Sales

The Sales team represents us and our values to customers, bringing back dollars and feedback to help us grow.

- [Pricing](https://about.sourcegraph.com/pricing)
- [Common questions from prospective customers](common_customer_questions.md)
- [Sales team onboarding](onboarding/index.md)
- [Sales interview process](interviews/index.md)
- [Recording lead and customer emails, calls, and notes](records.md)

## Pipeline, data, and models

- [All deals (HubSpot)](https://app.hubspot.com/contacts/2762526/deals/board/view/all/)
- [Transactions](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=0)
- [FY20 plan](https://docs.google.com/spreadsheets/d/1EkZ7O69-2jbgtacoFDrY8L6rP73Hlqp_syyVCnmGAFA/edit#gid=1071026049)
- [Looker dashboard](https://sourcegraph.looker.com/browse/boards/2)

## How sales works with other Sourcegraph teams

### [Customer engineering](../ce/support.md) (for customer support)

- [Sales-to-CE new customer handover process](sales_to_ce_handover.md)
- [How to request support (for customers)](../ce/support.md#how-to-get-support-for-customers)
- [Creating and maintaining license keys for customers](../ce/license_keys.md)

## Definitions

### ARR

Annual Recurring Revenue (ARR) is the dollar value of contracted recurring revenue in a (normalized) one-year period.

### IARR

Incremental [ARR](#arr) (IARR) is the change in ARR from one period to another.

### New IARR

New [IARR](#iarr) is IARR from *new customers* (i.e., organizations that were **not** existing customers at the beginning of the period). See also [expansion IARR](#expansion-iarr).

### Expansion IARR

Expansion [IARR](#iarr) is IARR from *existing customers* (i.e., organizations that were already customers at the beginning of the period).

If within a single period a new customer signs a contract which then grows in ARR before the end of the period, the total ending ARR is all considered [new IARR](#new-iarr), not expansion IARR. For example, if Acme Corp signs a $100k contract on February 3 and then the contract expands to $200k on March 5, all $200k would be considered new IARR for Q1.

### Booking

A booking is when a customer commits to pay us money. This includes when:

- A new customer just started paying self-service or signed a contract
- An existing customer (depending on their contract) takes an action that increases the amount of revenue we will earn from them (such as growing usage or using more premium features)
- An existing customer renews (including when the renewal is for the same ARR as the previous period)

### Customer

A customer is an organization with a Sourcegraph subscription contract that has not ended.

1. We can only publicly mention the names of customers who have explicitly agreed to be referenceable.
  - Customers mentioned on [about.sourcegraph.com](https://about.sourcegraph.com/) (by logo and/or case study) are referenceable.
  - If in doubt about whether another customer is referenceable by name, ask in #sales.
1. If an organization's contract will start in the future, they are still considered a customer. (This can happen when we agree to have a contract start on the next 1st of the month because that makes life easier for a customer, for example.)

## Stages

See also the [MQL (marketing-qualified lead) definition](../marketing/index.md#mql).

### Prospect

> ~5% probability of winning

The **Prospect** stage is for leads where **ALL** of the following are true:

1. The individual or company could be a potential Sourcegraph customer but has not necessarily been vetted/qualified to confirm if they fit our criteria to be a customer.
1. We have contact info (at least 1 relevant email address) for the individual/company, from one or more of:
   - the "Request a demo form" on [about.sourcegraph.com](https://about.sourcegraph.com)
   - setting up a self-managed Sourcegraph instance
   - signing up for an account on [Sourcegraph.com](https://sourcegraph.com/sign-up)
   - meeting a Sourcegraph teammate in person (e.g., at an event or conference) and giving us their contact info
      - "Create Note" in HubSpot for these conversations and log accordingly.
   - any other way we may have found their contact info

### Lead

> ~10% probability of winning

The **Lead** stage is for leads that are sales qualified (i.e., SQLs), which means **ALL** of the following are true:

1. After vetting/qualifying, we have sufficient info to believe they may fit our criteria to be a customer, and Sales should continue to pursue.
   - Note that Sales is responsible for reviewing the prospects that come through our automated channels. If there are prospects you connect with yourself and believe they are a lead, please send an email to intro the contact to Sales.
1. The potential deal size >= $22,800 ARR
   - Take their total # of developers company-wide and multiply it by $19, and then multiply it by 12 months
   - Rationale for the $19 is because it’s the lower number of our 2 pricing models and allows for a conservative ARR estimate, accounting for the customer potentially opting for the discounted plan
      - As a rule of thumb, this equates to 100 developers in their company
      - As we wouldn’t yet have their exact developer figure at this point, we must take the best guess with the info provided online (LinkedIn), or from conversations with a Prospect
      - If they don’t meet this criteria, we could discuss internally on whether Sourcegraph would benefit from having this company as a customer (e.g., reputable logo, we want to support a non-profit org’s mission, we can partner with them in multiple ways, etc.).
1. We *have* reached out to them requesting a call/meeting to introduce Sourcegraph’s offering, but the call/meeting has *not* occurred yet (i.e. it is still upcoming on the calendar, or they have not yet responded with agreement for the call/meeting).

### Interest

> ~20% probability of winning

The **Interest** stage is under construction

### Qualification

> ~40% probability of winning

The **Qualification** stage is for leads where **ALL** of the following are true:

1. The company has expressed some form of interest/need in Sourcegraph.
1. We have *completed an intro call/meeting* with the company.

Other notes:

1. We may still be collecting specific info on their pain points and use cases.
1. We may still be gathering info to confirm the deal amount (and close date).
   - If we determine that the potential deal amount is <$22,800, then Sales will make a call on whether to proceed, or revert them back to the lead stage, or recommend that they just use our free product.
1. We may still be actively pitching Sourcegraph to them, but have *not* received commitment to move forward yet (they are not fully sold on Sourcegraph’s value) and they have expressed reservations or open questions to be answered.
1. They may have expressed interest in setting up a Sourcegraph trial, and may still be in an active trial period.
1. We may still be collecting technical requirements from them, in order to alert the [Engineering team](../engineering/index.md) of any custom work needed.
1. Note that a deal could remain in the Qualification stage for several months.

### Evaluation

> ~60% probability of winning

The **Evaluation** stage is for opportunities where **ALL** of the following are true:

- We have *completed our “sales pitch*, they fully understand and believe there is value in Sourcegraph to improve/solve at least one area for their developers.
- We have received some signal to move forward.
    1. Deal may however be stalled by procurement review.
- We have explained to them our different pricing plan options, and they are actively evaluating/discussing on their end (or are negotiating terms with us about running the evaluation).
- We are in contact with the individuals who have the authority to make purchasing decisions.

### Contract Negotiation

> ~80% probability of winning

Note that this is a stage we may add in the future to indicate we are almost at the finish line, in that they have received our SOW but there are some remaining negotiations with the terms before they sign. Our attorneys may or may not have been looped in for assistance.

### Closed Won

Deal signed!

## Segmentation

Different customers and deals have different needs from our sales team. We segment customers and deals based on their actual or projected ARR:

- **Tier 1** = $100k+ ARR
- **Tier 2** = $42k+ ARR
- **Tier 3** = $22k+ ARR

## Using HubSpot

This page describes how we use HubSpot to maintain high data quality. This allows us to increase the effectiveness of all Sourcegraph teams through accurate insights.

Account Executives are responsible for maintaining HubSpot as a [source of truth](https://about.sourcegraph.com/handbook/communication#sources-of-truth). The data is synced between HubSpot and Looker every weekend so this data must be updated (at least) by end of day Friday.

### Associating contacts to deals

It is critical to associate all of the most important contacts within a company with any new deal. This should include the technical decision-maker, the economic decision-maker (if they are different) and the original member who introduced Sourcegraph to the organization.

This ensures that all deal-related communication is visible within the deal timeline for teammates to quickly get context surrounding the deal. This also allows us to evaluate the effectiveness of marketing channels and sales touchpoints that our team has with an organization. How we reached the person(s) who introduced Sourcegraph to their organization is one of the most important factors in evaluating the success of marketing activities.

### Maintaining up-to-date information on deals

Please keep the following information updated for deals. These are the the most important deal fields for weekly reviews and tracking, but the more fields that have up-to-date information, the better.

* Deal stage
* Deal size
* Number of engineers

If a deal comes through a referral or introduction, tell [BizOps](../bizops/index.md) so an adjustment can be made in the database to reflect this.

### When a deal is won
1. Mark the ‘Deal Status’ as ‘Closed Won’
1. Mark the column ‘End of contract’ with the last day of the contract. HubSpot will automatically create a renewal deal based on this date

### When a deal is lost
1. Update the ‘Closed Lost Dropdown’ property to reflect the reason. If the reason doesn’t exist in the dropdown, you can talk to [BizOps](../bizops/index.md) about adding one
1. Expand upon the reason in the longform ‘Closed Lost Reason’ field. This supports [2019-Q4 OKR 1 v](../../company/goals/2019_q4.md) to identify the top 3 reasons potential customers don't sign.

### Recording outbound activity

TBD on connecting Zoominfo and HubSpot

### Maintaining customer spreadsheets

Maintaining [Server Installers to Company List](https://docs.google.com/spreadsheets/d/1Y2Z23-2uAjgIEITqmR_tC368OLLbuz12dKjEl4CMINA/edit?usp=sharing) and [Server to Company List](https://docs.google.com/spreadsheets/d/1wo_KQIcGrNGCWYKa6iHJ7MImJ_aI7GN12E-T21Es8TU/edit?usp=sharing) spreadsheets for every new company on a trial and new customers.

These are used as join tables in Looker, and are important to connect instance data to a specific customer.
