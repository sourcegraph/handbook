# Glossary of terms

This is a glossary of terms you might hear working at Sourcegraph. Although we try to minimize the use of acronyms, they do appear from time to time and this can be a helpful resource to figure out what people are talking about.

## Technical terms

| Term                     | Meaning                                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GQL                      | GraphQL (a type of API, sort of like HTTP or Rest APIs)                                                                                                          |
| VSCE                     | VS Code Extension, referring to either the Sourcegraph integration extension for the VS Code IDE, or the Microsoft tool called 'vsce' used to publish extensions |
| Bext                     | Brower extension, sometimes pronounced literally as "bext" or "baxt"                                                                                             |
| LSIF                     | Language Server index Format, a specification created by Microsoft which Sourcegraph uses to provide code intelligence.                                          |
| RFC                      | Request for comments                                                                                                                                             |
| RFH                      | Request for help                                                                                                                                                 |
| RCE                      | Remote code execution (a security vulnerability)                                                                                                                 |
| SSRF                     | Server side request forgery (a security vulnerability)                                                                                                           |
| SEO                      | Search engine optimization, making Google understand our web pages better                                                                                        |
| SSBC                     | Server-side batch changes. Large scale code refactoring that runs as part of the Sourcegraph server, rather than on a developer's laptop.                        |
| POC                      | Proof of concept                                                                                                                                                 |
| PR                       | Pull request, where code is sent to be reviewed before becoming a part of the product                                                                            |
| TODO                     | A note left in the code as a comment indicating something we should do                                                                                           |
| DFS                      | Damn Fine Source code                                                                                                                                            |
| Easy stamp, stamp please | Change that needs approval but not review                                                                                                                        |
| CI                       | Continuous Integration, a server that runs our tests and ensures things are not broken. Often stated as "CI is failing" and "CI is slow"                         |
| Dogfood                  | Either k8s.sgdev.org (the "dogfood" instance) or just saying "we should try what we built" in general                                                            |
| dev                      | Someone who can barely write code, but does so professionally                                                                                                    |
| k8s                      | Kubernetes, a thing for deploying software across multiple computers                                                                                             |
| a11y                     | Accessibility, the "11" is because there are 11 characters between the letter A and Y. a`ccessibilit`y                                                           |
| i18n                     | Internationalization, like having the UI show in multiple languages.                                                                                             |
| GCP                      | Servers hosted on Google's cloud                                                                                                                                 |
| AWS                      | Servers hosted on Amazon's cloud                                                                                                                                 |
| SMTP                     | or IMAP Email server protocols                                                                                                                                   |
| IDE                      | The text editor people use to write code                                                                                                                         |
| HG                       | Horse Graph                                                                                                                                                      |
| Standup                  | Everyone sits down for 15/30/60m and says what they are doing. Sometimes they just type it.                                                                      |
| pgsql/psql               | Postgres database                                                                                                                                                |
| MVP                      | Minimum viable product, the bare minimum needed to see a feature working for example. Think "very early stages, experimental"                                    |
| MVC                      | Model-View-Controller frontend/JavaScript pattern. React. Google "MVC"                                                                                           |
| TDD                      | Test driven development, you write the tests before you write the code that would pass the tests.                                                                |
| API                      | Application programming interface; like when your browser makes a request to your bank's web server to send money                                                |
| DOM                      | Document Object Model, a tree of buttons/text/etc that are displayed in browsers. "The DOM" refers to all the stuff making up the web page.                      |
| LOC                      | Lines of code                                                                                                                                                    |
| LOE                      | Level of effort                                                                                                                                                  |

# Business terms

| Term                                         | Meaning                                                                                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CAC                                          | Customer acquisition cost (how much $ spent to win a new customer)                                                                                                      |
| ICP                                          | Ideal customer profile (the hypothetical perfect customer for your organization; lists all of the qualities that make them the best fit for the solutions you provide.) |
| LCV                                          | Lifetime customer value (the total revenue a customer will generate for a business throughout the relationship)                                                         |
| B2B                                          | Business to business, i.e. we sell to other businesses                                                                                                                  |
| B2C                                          | Business to consumer, i.e. we sell directly to individual consumers                                                                                                     |
| GA                                           | General availability, either "lol we shipped to prod" (unusual?) or "it was approved by marketing, legal, product, there were design docs, etc."                        |
| ROI                                          | Return on investment                                                                                                                                                    |
| WoW                                          | Week over week, "We currently have 2% WoW revenue growth" means that last week had 2% more revenue than the previous week.                                              |
| KR                                           | Key result, just means "goal we will measure"                                                                                                                           |
| OKR                                          | Objective key result, just means "goal we will measure"                                                                                                                 |
| Q1                                           | First quarter of the year. THIS MEANS [FISCAL YEAR](../../departments/finance#fiscal-years) IN SOURCEGRAPH                                                              |
| FY22                                         | Fiscal Year 2022. BEWARE: FY22 Q1 means the first quarter of _2021_ not _2022_                                                                                          |
| NPS score                                    | One of those "please rate our product on a scale of 1-10" things. Google it for more info.                                                                              |
| ARR                                          | Annual Recurring Revenue - if we have a contract with a customer over any timeframe, how much we get in a one year period.                                              |
| IARR                                         | The change in ARR from one period to another.                                                                                                                           |
| New IARR                                     | IARR, but only including new customers                                                                                                                                  |
| Expansion IARR                               | IARR from customers who we already had at the start of the period                                                                                                       |
| Booking                                      | A customer committed to paying us money, a new customer signing a contract, a contract signed to expand the number of seats, etc.                                       |
| AP                                           | Accounts Payable, i.e. our own bills we can pay right now                                                                                                               |
| AR                                           | Accounts Receivable, [bills customers should pay to us](../../departments/finance/process/ar.md)                                                                        |
| Cash, AR, AP, Accruals, and Deferred Revenue | Very specific terms defined [here](../../departments/finance#financial-planning-and-financial-statement-review)                                                         |
| CLA                                          | Contributor license agreement, non-employees must sign this before contributing code                                                                                    |
| UX                                           | User experience, the experience a user would have going through a flow for example                                                                                      |
| UI                                           | User interface, how buttons look, the layout, etc.                                                                                                                      |
| SaaS                                         | Software as a service                                                                                                                                                   |
| PQL                                          | [Product Qualified lead](../../departments/bizops/process/product_led_growth.md)                                                                                        |
| PLG                                          | [Product led growth](../../departments/bizops/process/product_led_growth.md)                                                                                            |
| MQL                                          | [Marketing qualified lead](../../departments/bizops/process/product_led_growth.md)                                                                                      |
| SLA                                          | Service level agreement                                                                                                                                                 |

# Role terms

| Term          | Meaning                                                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AE            | Account executive - responsible for maintaining an enterprise customer account and our relationship with them                                                                            |
| AE            | Application engineer                                                                                                                                                                     |
| SDR           | Sales Development reps - focused on reaching out to customers, determining if they're good leads to follow up on                                                                         |
| MBA           | Master of Business Administration - a degree, not to be confused with the NBA which is a basketball team                                                                                 |
| GTM           | Go to market                                                                                                                                                                             |
| CS            | Customer Support                                                                                                                                                                         |
| EM            | Engineering manager                                                                                                                                                                      |
| PM            | Product manager                                                                                                                                                                          |
| PD            | Product designer                                                                                                                                                                         |
| PO            | Purchase order                                                                                                                                                                           |
| CSE           | Customer Support Engineer, someone who can debug issues for example - no longer used, Application Engineer is preferred                                                                  |
| CE            | Customer Engineer, e.g. helps customers deploy software and resolve their technical issues                                                                                               |
| IC            | Individual contributor, not managing other people. Still works on a team with other ICs.                                                                                                 |
| Release Guild | A captain of releasing the product, drives releases, gathers and informs others about the release, helps test the release, fixes and discovers issues in the release before it goes out. |
| DevRel        | Developer relations, they post on Hacker News, Reddit, and Twitter about how cool we are. They give talks and go to conferences                                                          |
| DevExp        | Developer experience, improving lives of devs working on sourcegraph                                                                                                                     |
| devx          | Developer experience, improving lives of devs working on sourcegraph                                                                                                                     |
| dx            | Developer experience, improving lives of devs working on sourcegraph                                                                                                                     |
| People ops    | The HR department, scheduling interviews etc.                                                                                                                                            |
| Biz ops       | Business operations, like financial modeling, managing legal aspects, etc                                                                                                                |
| IT tech ops   | IT team, if you have laptop issues or need to order a computer                                                                                                                           |
| Ops           | Operations (includes Finance, Accounting, Legal, People, Data & Analytics, Strategy, and Tech Ops)                                                                                       |
| DRI           | Directly responsible individual, the "one true owner" of something                                                                                                                       |

# General terms

| Term  | Meaning                                             |
| ----- | --------------------------------------------------- |
| PTAL  | Please take a look                                  |
| LGTM  | Looks good to me                                    |
| SGTM  | Sounds good to me                                   |
| IIUC  | If I understand correctly                           |
| ICYMI | In case you missed it                               |
| NBD   | No big deal / not a big deal                        |
| AFAIK | As far as I know                                    |
| LFG   | Looking for Gutekanst - sometimes Looking for Group |
| YAGNI | You aren't gonna need it                            |
