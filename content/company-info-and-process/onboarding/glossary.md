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

## Developer lingo for non-developers: a guide

_This guide is made to define and explain many of the terms that are commonplace in conversations at the Sourcegraph office but not necessarily outside of it. The goal of this guide is to break down these terms in a way that your average person can comprehend, at least at a very high level. Think of this as an "intro to dev-speak"_ :)

### Binary

The simplest form of computer code or programming data. It is a series of 1s and 0s that makes up the “language” that computers understand. It's also used to refer to a pre-compiled executable program. Source code is generally compiled into a binary to be executed on specific operating systems.

### Code

The fundamental component of a computer program that is created by a developer. It can be read and understood by a human and then translated into machine language (binary machine code).

Humans don’t usually write in the language that computers understand since it’s just a series of 1s and 0s. Instead they write in different programming languages that can be “translated” to instructions a computer can understand.

### Programming Language

Language used by developers involving certain vocabulary and set of grammatical rules for instructing a computer to perform specific tasks. (examples: Go, JavaScript, Python, and many more). Basically, it's a type of language used by developers to make a computer do what they want.

### Compiler

A compiler takes computer programs written in a programming language and converts them into machine language that a computer can understand and run.

For example, if you’re traveling to France, but you only speak English, you will have to figure out how to communicate in French. You will probably need some sort of translator (a friend, a book, an app, etc.) to translate your words from English to French. Compilers “translate” what developers write in a programming language to binary– a language that computers understand.

### Open Source

In software, open source code is any publicly accessible code/project/design that can be read and modified and redistributed for any personal, commercial or educational use.

For example, if you have a recipe for cookies that you want to share with others, so you share it in a public blog– anyone now has the ability to read it, make it, and modify it for whatever they want.

### Editor

A code editor is a text editor program specifically made for editing code of computer programs by developers. It may be a standalone application or it may be built into an integrated development environment (IDE) or web browser.

Basically, it's the environment where developers write code. Similar to how someone can use Google Docs or Microsoft Word to write and edit an essay.

### IDE (Integrated Development Environment)

A software development tool that is similar to an editor, but has other necessary tools (debugger, tester, compiler, etc.) integrated.

Imagine a Google Doc that has tools built in for error detection, previews, and language translation.

### Code Host

A service like GitHub, GitLab, or Bitbucket which provides storage and remote access to code. It's basically where your code lives.

### Version Control

A system that tracks changes to a document or project over time in an orderly and systematic way.

This is similar to how a Google Doc allows you to review a document’s history (see what changes occurred, who made which changes, etc.) Version control provides the ability to “time travel” and restore previous versions of the document in case something went wrong with one of the changes.

### Git

A version control system, developed for the maintenance of code with particularly strong support for simultaneous efforts by many developers.

### README

This is the file outlining the project and is written by the project developers for others to read. It is comparable to a “front page” of a project, where the project is outlined and described by those that worked on it.

### Issue

A report of a possible problem with a project or piece of software. (Just like a real issue!) It is something of concern that you want to flag so it can be corrected.

### Pull Request (AKA "PR")

A request in GitHub for someone else to review your work for any possible errors or flaws before finalizing changes. For example, if you had written an article, and you were almost ready to publish it but first you wanted someone else to review it. They would have the option to provide feedback through comments or approve it for publishing.

### Merge

The act of taking a series of changes in a document or project (commits, for Git) in a branch and applying them to the existing repository. Generally, merging happens once your pull request has been approved.

### Commit

In Git, a single set of changes. This is how you store changes in your repository.

### Repository (AKA "repo")

A collection of (usually related) source code and other files, plus the history of those files. It is a location for your project, similar to a Google Drive folder that stores related documents in one place.

### Branch

A specific series of changes in a repository, usually used to isolate changes during their development. Branching lets you make changes, test them in a staging area, then merge them into the “main branch” (the “live” part of your code).

### Main Branch

The primary branch of a repository, usually holding the actively-developed product and working of features (non-working versions tend to stay in branches). This is the “live” part of a project that can be viewed by the public. Sometimes referred to as the "master" branch.

### Clone

A copy of a repository, including its full history. Similar to a copy of a Google Doc with all its revision history.

### Fork

Making of a new repository which starts as a clone of an existing repository. Usually used to create changes for submission back to the repository, but also used to make a version that has changes that the original repository’s owner won’t include.

For example, if you took a Google Doc template and made a copy of it so you could use it and edit it, but you also altered the original template to add things the original template didn’t include.

### Ship

A word which simply means that you make a feature or product available to customers.

### Dogfood

A word to describe the act of using your own feature or product. Software is often deployed internally for employees to use before going live for customers.

### Markdown

A text markup language to allow plain text to convert to styled text using common conventions, such as _ italics _ or ~~ strikethrough ~~ It's just a shortcut to edit text (bolding, italicizing, underlining, etc.) without having to click the buttons on a toolbar.

### Command Line (AKA "terminal")

A text-based interface for controlling computers by issuing textual commands. Basically, it's a place where you can enter commands for your computer to execute.

### API (Application Programming Interface)

An API allows a piece of software to interact with another piece of software.

### Server

A computer (virtual or physical) that runs services and/or "serves information" to other computers. It could also refer to an instance of a computer program. There are several different kinds of servers (application server, web server, cloud server, etc.).
