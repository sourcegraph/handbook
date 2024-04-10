## Multi-SKU Enterprise ARR Recognition

In line with the Company's Cody + Search strategy, Finance believes it is important to introduce a multi-SKU ARR recognition guidance. Multi-SKU ARR recognition provides more granular insights into product performance, aids in customer segmentation, supports revenue optimization, and boosts investor confidence. By documenting and following this guidance, the company ensures accurate financial reporting, effective decision-making, and sustainable growth in the competitive market landscape.

Currently, we are categorizing enterprise ARR into four buckets:

- Professional Services ARR
- Platform or Recurring Fee ARR
- Software ARR
  - Code Search ARR
  - Cody ARR

Note: If we change methodologies, we will do so only in a system of record agreed upon across operations teams. The ARR tracker in manual form does not scale for multi-product ARR recognition.

### Professional Services ARR Recognition

When calculating ARR recognition by SKU, we will apply discounting for software + services purchases according to the following rules:

- Discounts are first applied against all one-time/non-recurring revenue. E.g., implementation fees.
- Discounts are then applied proportionally against all included SKUs based on list prices.
  - Example: the customer was buying $100k (list price) of software and $50k (list price) of recurring services, but they were only paying $135k (i.e., they got a 10% discount), then we would record it and report it as $90k of software ARR and $45k of services ARR — 10% off of each product at list price.
- We will not restate ARR for deals that are already booked, even if the list price of services has changed since the booking.
- If professional services are clearly outlined in the order form, but at $0, we will still allocate ARR to PS because the discount is applied proportionally.

### Platform Fee ARR Recognition

Platform fees or any other ongoing fee charged to the customer will also impact the value of ARR, and will be applied directly to platform fee SKU. If for example the customer was buying $100K of Code Search Enterprise, but we also charged them a $10K Platform Fee, then we would record it and report it as $110K of total software ARR: $10k as Platform Fee ARR and $100k as Code Search Enterprise ARR.

### Software (Code Search & Cody) ARR Recognition

#### Only Code Search OR Cody

Cody-only or Code Search-only deals are perhaps the most straightforward in which 100% of the seat quantity times price is attributable to Cody or Code Search, respectively.

#### Code Intelligence Platform

Code Intelligence platform deals are less straightforward in terms of product ARR allocation, given the standalone list prices for Search ($588) & Cody ($228) added together ($816) are greater than the Code AI list price ($708). Finance’s recommendation is to keep the same percent allocation of the standalone prices added together.

For Code Intelligence Platform:

- Cody ARR percent allocation for each unit at Code Intelligence Platform list price equals $228 / ($228 + $588) = 28%
- Search ARR percent allocation for each unit at Code Intelligence Platform list price equals $588 / ($228 + $588) = 72%

For Code Intelligence Platform (Cody BYOK):

- Cody ARR percent allocation for each unit at Code Intelligence Platform list price equals $180 / ($180 + $588) = 23%
- Search ARR percent allocation for each unit at Code Intelligence Platform list price equals $588 / ($180 + $588) = 77%

#### Cody and Search but seats differ

If Search seats & Cody seats differ, then, the Code Intelligence Platform allocation does not apply. 100% of the seat quantity times price is attributable to Cody or Code Search, assuming we have factored in PS (including one-time fees) & platform fees.

Cross-sell deals may not specify Code Intelligence Platform, as the contract is reflecting the purchase of Search or Cody. However, even if all products have the same seat count, the recognition will not operate as if the contract has Code Intelligence Platform. 100% of the seat quantity times price is attributable to Cody or Code Search, assuming we have factored in PS (including one-time fees) & platform fees. Upon renewal of the same contract, we may reallocate per our standard methodology if if the order form reflects a migration to the Code Intelligence platform SKU.

#### Other Software notes

If the product is listed as beta, then we will not recognize product-level ARR even if there is a clearly defined seat quantity and price (annual).

It is likely (especially in the context of repricing) that a deal will have an increase in Cody ARR that corresponds to a reduction in Search ARR. However, this may have a net zero effect in overall contract churn.
