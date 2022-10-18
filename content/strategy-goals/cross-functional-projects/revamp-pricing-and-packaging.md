# Revamp pricing and packaging

## Roles, responsibilities, & administration

| Information         |       Date       |
| :------------------ | :--------------: |
| Project start-date: |    2022-07-08    |
| Project end-date:   | 2022-08-31 (???) |
| Last updated:       |    2022-07-14    |

| WG Role                   |     Teammate     | Functional Title      | Responsibilities                                                                                                                                                                                                               |
| :------------------------ | :--------------: | :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DRI                       |  Connor O’Brien  | Chief of Staff to CEO | Project execution and management. General pricing and packaging strategy.                                                                                                                                                      |
| Exec sponsor              |   Quinn Slack    | CEO                   | Vision and support. General pricing and packaging strategy. Has final sign off on new pricing and packaging changes.                                                                                                           |
| Sales support             |   Greg Bastis    | VP of Sales           | Provide sales perspective, help rationalize impact of changes to the field, ultimately has full sign-off on the final package. Responsible for enablement, training, and leading charge on new pricing and packaging roll out. |
| Finance support           |    Dan Adler     | VP of Operations      | Assist with general strategy. Help with analysis to understand impact of potential pricing and packaging changes. Help with operationalizing billing, quote to cash, deal desk, etc.                                           |
| Accounting support        | Desene Sterling  | Controller            | Help with analysis to understand the impact of potential pricing and packaging changes. Help with operationalizing billing, quote to cash, deal desk, etc.                                                                     |
| Sales Finance support     |  Kendrick Moore  | ???                   | Perform analysis into pricing and packaging changes to the business.                                                                                                                                                           |
| Product marketing support | Andy Schumeister | ???                   | Help with pricing and packaging rolled out. Updates to website, sales content, etc. General pricing and packaging strategy.                                                                                                    |
| Product marketing support |       Lori       | ???                   | Help with pricing and packaging rolled out. Updates to website, sales content, etc. General pricing and packaging strategy.                                                                                                    |

## Why?

The competitive landscape for code search has shifted dramatically since the emergence of GitHub
(Microsoft) search. We are no longer the only enterprise-grade code search tool and we need adapt our
current pricing and packaging model to win the market.

## Project mission

Create a simple, pricing and packaging offering that differentiates us from our competition, reduces friction
for growth, and directly ties customer value to ARR.

### Project maxims

In an effort to create a simple, pricing and packaging offering that differentiates us from our competition,
reduces friction for growth, and directly ties customer value to ARR the pricing and packaging working group
believes:

- A flattened product offering will increase product value and differentiate us from our competition (GitHub).
- How can we ensure the primary value of our product is tied to the “core workflow” and not to cross-sell / up-sell product add-ons?
- More devs using our product is the key to Sourcegraph’s success.
- How can we bring down the price point and associated barriers to entry?.
- How can our product + pricing and packaging enable viral growth within our customers?
- How can we pack the most value into our core workflows so that the power of our product is undeniable?
- Customers should only pay for what they use.
- How can we minimize shelfware?
- How can we tie customer need and value to ARR more directly (compute, executor packages, etc.)?
- How can we create a pricing and packaging model that is simple yet flexible?
  We need to increase customer happiness and improve time to value by moving them away from self-hosted deployments and to single-instance cloud & custom cloud deployments.
  How can we use pricing and packaging to nudge prospects and customers to these preferred deployment methodologies?
  If / when customers choose self-hosted, how can we ensure customers are set up for success and Sourcegraph doesn’t operate at a loss due to increased operational overhead (air gapping, increased support, better SLAs, etc.)?
  ARR can’t be negatively impacted due to new pricing and packaging models.
  Changes to our pricing and packaging model can’t negatively impact our existing ARR base.
  There will likely be a downward pressure on our key sales / deal metrics (ARPU, ADS, etc.) but, how can we make up the difference with other revenue streams, increased deal volume, etc.?

### Expected outcomes

Based on the strategy session at the exec-team off-site, we believe a new pricing and packaging model should
contain the following capabilities.
A flattened product offering
MAU-based licensing model
Consumption-based pricing for scaled compute (batch changes, precise cose intelligence, etc.)
Enterprise cross-sell / up-sells for security, centralized management, scalability, etc.

Pricing and packaging is a very complex, cross-functional project that will require a lot of work with virtually every other department and division:
Updated billing, quote-to-cash processes
Updated revenue forecasts
Updated enablement
Updated GTM support models (What are the roles of CSMs?, How does this align compensation for AEs and CEs? etc.)

## Proposal

The following proposal is the proposal created by the exec-team. This is NOT final. Rigorous, comment, collaboration, challenging of assumptions, analysis with data is still needed and expected.

That being said, the exec-team has a strong belief that the final pricing and packaging model will reflect the above “expected outcomes”:
MAU-based licensing model
Consumption-based pricing for scaled compute (batch changes, precise cose intelligence, etc.)
Enterprise cross-sell / up-sells for security, centralized management, scalability, etc.

### Overarching premise:

Create a simple, pricing and packaging offering that differentiates us from our competition, reduces
friction for growth, and directly ties customer value to ARR.

For reference: Existing Sourcegraph pricing

### Proposed Plans

General note: All proposed numbers and pricing suggestions are not final. These are stand-in values that helped the exec team rationalize potential costs that “felt right” in the absence of data-driven decision making.

Expect all numbers and pricing models to change to some extent. All ideas and thoughts are welcome!
Free
An offering with full product capabilities (batch and code insights included) but with hard caps on users, data, compute, and no interconnectivity into other systems / tools.
Price
Free
Available features
Access to the entire code search platform (includes batch changes and code insights)
Constrained or missing features
10 user cap
Data limits (TBD what that would be)
Compute limits
2 executors (or other measure / method)
This needs to be analyzed to figure out what the right number is)
No API connections
No repo permissioning
No custom repos (GitHub, GitLab, Bitbucket only)
Deployment methods
Free, 30-day trial on single-tenant cloud (with flexibility to extend for select prospects / customers)
Single-tenant cloud only
No custom deployment
No self-hosted
Enterprise
An offering with full product capabilities (batch and code insights included) that has no limits and charges customers for non-standard deployments, security needs, and uses consumption based pricing to scale up compute needs.
Price
$100 / user / month ($1200 / user / year)
Options for:
Monthly active user (MAU) 
MAU defined as any user who creates a session on our product
Committed, contracted users (current pricing model) 
If, MAUs exceed contracted #s, incremental MAUs would be charged on a monthly basis based on pre-negotiated prices. 
Available features
Access to the entire code search platform (includes batch changes and code insights)
APIs
Repo permissionsing
Allows for custom repos (perforce, etc.)
10 executors (or another measure / method) for compute
Constrained or missing features
None
Deployment Methods
Free, 30-day trial on single-tenant cloud (with flexibility to extend for select prospects / customers) 
Single-tenant cloud
Custom deployment (with scale-up fees)
Self-hosted (with scale-up fees)
‘Scale-up’ offerings (add-ons)
Support:
Dedicated / Premium support (could see model where we tack on $$$ per user or go with annual fee)
Better SLAs
Dedicated Customer Success Manager (CSM) and / or TAM (Technical Account Manager)
Professional Services
Maintenance, upgrades, technical integrations, etc.
Deployments
Custom (could be traditional pro serve model or tacked on to the per user price, or no charge at all)
Self-hosted (could be traditional pro serve model or tacked on to the per user price)
Enhanced Security
Air Gapped (could be 1-time fee of 100k or tacked on to the per user price $100/u/y)
Compute and data 
On-demand executor $100/day 
Reserved executor $5000/yr (after the first N # of executors)
Self-hosted executors +$x [github]
Data pricing
Expect this to be atypical.
Purpose is to catch edge cases, for customers with small eng teams but high data / code volume
Goal would be to break even, not make money
Integrations
Custom integrations
Professional (potential)
“Enterprise-lite” package. Includes core search and very limited versions of Batch Changes and Code Insights.
Price
$29 / user / month ($348 / user / year)
Options for:
Monthly active user (MAU) 
MAU defined as any user who creates a session on our product
Committed, contracted users (current pricing model) 
If, MAUs exceed contracted #s, incremental MAUs would be charged on a monthly basis based on pre-negotiated prices. 
Available features
Access to the entire code search platform (includes limited batch changes and code insights)
Repo permissioning
Constrained or missing features
N # of APIs / Limit on data
Allows for custom repos (perforce, etc.) at an additional increased cost (???)
5 executors (or another measure / method) for compute
Deployment Methods
Free, 30-day trial on single-tenant cloud (with flexibility to extend for select prospects / customers) 
Single-tenant cloud
Custom deployment (with scale-up fees)
Self-hosted (with scale-up fees)
‘Scale-up’ offerings (add-ons)
Support:
Dedicated / Premium support (could see model where we tack on $$$ per user or go with annual fee)
Better SLAs
Dedicated Customer Success Manager (CSM) and / or TAM (Technical Account Manager)
Professional Services
Maintenance, upgrades, technical integrations, etc.
Deployments
Custom (could be traditional pro serve model or tacked on to the per user price, or no charge at all)
Self-hosted (could be traditional pro serve model or tacked on to the per user price)
Enhanced Security
Air Gapped (could be 1-time fee of 100k or tacked on to the per user price $100/u/y)
Compute and data 
On-demand executor $100/day 
Reserved executor $5000/yr (after the first N # of executors)
Self-hosted executors +$x [github]
Data pricing
Expect this to be atypical.
Purpose is to catch edge cases, for customers with small eng teams but high data / code volume
Goal would be to break even, not make money
Integrations
Custom integrations
Other pricing considerations And questions
Concept of $5/DAU (per working day 20\*5 = 100 / MAU).
Could just be marketing
Worth exploring as an actual pricing offering?
Does Professional muddy the waters too much?
Are the gates / limiters from tier to tier focused on the right value add capabilities that will drive growth and expansion within our customer base?
How will these pricing tiers affect (positively and negatively) our ability to land new business?
How do the features / functions / capabilities of our product roadmap (Sourcegraph 4.0) map to these tiers over the next 3, 6, 9 months?
How are we going to convert customers from the old pricing model to the new pricing model?
How can we use this pricing model to move customers from self-hosted to single tenant cloud or custom deployments?
How many deals have we lost due to price?

## Timeline

### Research and Diligence (2-3 weeks)

Week 1 - Present 1st proposal to pricing and packaging team for review, comment, challenge, change. Continue to refine the overall strategy, pricing and packaging components. Present findings, latest iteration to leadership for review and approval of direction.
Share with board
Week 2 - Continue to refine the overall strategy, pricing and packaging components. Present findings, latest iteration to leadership for review and approval of direction. Continue to run more refined analysis on potential impact to financials and GTM strategy with the new model.
Start bringing in ICs in sales, CE, for feedback on new pricing and packaging strategy
Start working on rollout plan
Accounting for billing
Finance for forecasting
Enablement for training
Product Marketing for content updates
CE for demo updates
Week 3 - Goal will be to have the core components of the new pricing and packaging model solidified.
Set tiers / offerings
Set components within each tier
Set fees and pricing mechanism for each component

### Deep analysis and begin rolling out internal implementation plan (2-4 weeks)

Week 4 - Finance, Accounting, Sales Finance continue to analyze impacts of new pricing and packaging models.
Implementation plans continue to get flushed out.
Weeks 5 to 7 - Target soft and hard launch dates
Softlaunch - ideally some time in late august / early september. We enable and train up AEs to start selling under the new pricing model. Iterate and learn.
Hard launch - We publically announce the new pricing and packaging to our customers in conjunction with the Sourcegraph 4.0 (Sept 27th).

### Implement, train, and roll out (4 weeks)

Week 8 - Soft launch while we continue to implement and roll out new billing, forecasting, training, enablement, content changes and update
Weeks 9 to 11 - continue to implement and roll out new billing, forecasting, training, enablement, content changes and update
Week 12 - Hard launch

## Success criteria & ongoing support

### Success criteria

We will consider this project a success when:
Pricing and packaging content is finalized, agreed on
New pricing and packaging page is updated on the website
New pricing and packaging sales training and content has been rolled out to the field.
Operations is able / capable to process deals, perform financial tasks (billing, forecasting, etc.)

### Ongoing support

Once the new pricing and packaging is rolled out it will jointly be supported, enhanced, and maintained by the various business units who will leverage the pricing and packaging policies to do their jobs.

No one group can make unilateral changes to the pricing and packaging content, but will work with the CEO team on changes if / when the need arises in the future.

## Useful Links and conversation notes

Chat with Andy
Stay away from per user per year for enterprise add-ons
“No tweet rule” for segment - just make them happy
Soft launch where we sell earlier and then adjust customers after the launch
Stripe has premium support at 1200 per month
What’s the threshold for getting support?

Chat with Lori - Migration Fees?
This should be a one-time fee / price to help migrate from free to enterprise.
If it is a ton of work.
Price tag + approval for selling on-prem (often waived) for deployment fees on enterprise
Testing environment for upgrading (Beta testing environment?)
A non-production environment.
They would test their stuff in a simulator make sure their new instance wouldn’t break

$$
amount to POV / POC
$$
