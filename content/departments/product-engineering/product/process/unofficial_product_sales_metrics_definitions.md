# Unofficial product sales metrics definitions

While there are multiple company departments working to standardize and unify per-product revenue and sales reporting, that shouldn't stop us from evaluating the sales patterns of add-on products like Code Insights and Batch Changes. These metrics help us track success, prioritize investments, determine when parts of our product and sales strategy need iteration, and learn from what's working well.

Since these numbers are somewhat unofficial due to our current sales process, the most important thing is that we use the same definitions so we can summarize and learn across products.

(Of course, all the numeric values on this page are wildly fake and do not reflect neither proportionally nor absolutely the price or metrics of Sourcegraph. They exist for example purposes only.)

## Attach rate

The percentage of new logos that include an add-on product. When calculating attach rate on a quarterly basis, we do count expansion sales TODO THINK ABOUT THIS. When calculating overall, it's just the percentage of total customers with an add-on product.

**Example:** If we landed at 100 new customers and 30 of them purchased Batch Changes, that would be a 30% attach rate.

**How we use this metric:** Attach rate provides signal on the breadth of product-market fit and the overall enablement readiness and sales motion of a product.

## Per-product iARR

The dollar value we attribute to the product sale.
Until we have better tracking in place on the sales and finance side, teams use roughly equivalent ARR metrics (tradeoff of time and information precision). Batch changes uses the % of ARR its sticker price suggests for all Batch Changes deals. Code Insights (since it is newer to market) uses the following heuristics, in order:

1. If the sale was purely an add-on for just that product, we count 100% of the iARR from that close
2. If the sale was presented to the customer with products broken out per price, we follow that % breakdown of revenue per product
3. If the sale was sticker price, we use the [price](https://docs.google.com/spreadsheets/d/1Vea0kr4Mx6AIs9YIHytTzDv9D1E7TY235hO49ZOB4I0/edit#gid=1935459439) percentages and values
4. If the deal was a flat fee at a discount, we use the same price percentages and values (applying the discount equally across the total product price before breaking it out)

**Examples:** not worth writing out unless we align on this, then can write out

**How we use this metric:** In evaluating both past and future opportunity investments (from headcount to marketing to whether it's worth optimizing some part of the product or sales funnel), it's useful to know the overall magnitude of opportunity available and captured.

## Per-seat price

The per-product iARR divided by the number of seats purchased.

**Example:** If we sold Batch Changes for $1B to 10 users, the per-seat price would be $100M.

**How we use this metric:** This metric is one that's easy to compare across products on the market, to understand at what level we capture and demonstrate value. The difference between this metric and the sticker price also helps guide future pricing iterations.

## Product Premium

We compare the Annual Price Per User across deals with and without a product to determine the product premium percentage.

**Example:** If we have 2 total closed sales, one deal with Code Insights + Search at $1.01 per user per year and one deal with just Search at $1.00 per user per year, the product premium of Code Insights is 1%.

**How we use this metric:** This metric helps us evaluate the size of future opportunities and product investments, as well as providing a signal on the product-market success of a product.
