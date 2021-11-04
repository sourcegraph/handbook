# FY22Q3 OKR Plan

In support of our product/engineering Q3 objective (see all OKRs [here](../company/goals/2022_q3.md) to _Make cloud and enterprise successful at massive scale_, one way we will measure our success in achieving this goal is for the **Customer Support team to maintain 100% support issue resolution within 7 days while only requiring help (filing a #rfh Github issue) on 10% (measured weekly looking at last 30 days)**. To accomplish this, we will…

| #   | Status | Responsible | Project                                                                                                                                         |
| --- | ------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 🚫     | Warren      | Add `src debug` command to `src-cli`                                                                                                            |
| 2   | 🚫     | All CS      | Make at least 45 doc updates/additions across the team                                                                                          |
| 3   | 🚫     | Giselle     | Retro all Q2 tickets that resulted in a #rfh for Distribution and Core App                                                                      |
| 4   | ✅     | Adeola      | Create [cheat sheets](debugging-cheat-sheet.md) of what logs are most needed in certain situations                                              |
| 5   | ✅     | Beatrix     | Make the [command generator](https://command-generator.netlify.app/) customer-facing and scalable                                               |
| 6   | ✅     | Michael     | Create [a database type solution](zendesk-ticket-exporter.md) to make it easy and reliable for application engineers to learn from past tickets |
| 7   | 🚫     | Alex        | Streamline key steps in CS workflow                                                                                                             |
| 8   | 🚫     | Carl        | 5 folks complete kubernetes certification                                                                                                       |
| 9   | 🚫     | Virginia    | Implement retro practice for all tickets that take longer than X days to solve                                                                  |
| 10  | 🚫     | Virginia    | Provide enablement in how to navigate difficult conversations with customers                                                                    |
| 11  | ✅     | Adeola      | [CS Onboarding updates V3](cs-onboard-mentor.md)                                                                                                |

## Task details

### 1 `src debug` command to `src-cli`

- Workgroup: Warren, Tomas
- Details: This command will create an archive (zip file) with the information we need most often in troubleshooting (values, logs, etc) so that we can ask for one thing and get the majority (if not all) the information we need while troubleshooting. We'll additionally need a way for customers to transfer us this file (it will probably be too big for slack). This is an MVP in accordance with the [observability RFC](https://docs.google.com/document/d/1KjV9pNkwCwqzV5ugW6Bn0eQDZw2L8lVuWaaf7IvVYgQ/edit#). Future plans involve encorperating grafana snapshots and jaeger tracing into this tool. You can see the code in the `src-cli` [src debugger](https://github.com/sourcegraph/src-cli/blob/src-debugger/cmd/src/debug.go) branch.

### 2 Doc updates

- Workgroup: n/a -- all CS
- Details: Make at least 45 doc updates/additions across the team. These can be tied to cases or not. If not, be sure to link to the PR here:

### 3 Retro key Q2 tickets

- Workgroup: Giselle, Gabe, Alex
- Channel: #wg-q2-ticket-retro
- Details: The goal is to see what we can change within CS and/or if we have requests of any other teams
  - Go through [sourcegraph/customer](https://github.com/sourcegraph/customer/issues) May 1, 2021 - July 31, 2021
  - [Working notes document](https://docs.google.com/document/d/1cxjPXLxtwZ_TXy66Dv0fl-E96ko3WsY5ERVn9nXyNL0/edit)
  - [Working sheets document](https://docs.google.com/spreadsheets/d/1Gmsa-ZgIsiXj6feXVl2rlepoQf8GEM-5H3tGMxersdY/edit#gid=0)

### 4 What logs, when cheat sheets

- Workgroup: Adeola, Amber, Stompy
- Channel: #wg-cse-debug
- Details: Create a more simplified and streamlined troubleshooting process by outlining common customer issues and highlighting what services and logs are related to certain issues and generalizing initial troubleshooting steps.
  - [Working notes document](https://docs.google.com/document/d/13S8OH7Rm3xmxE8ttm6EJMV4bsPWRdWdv17VnBvuThUs/edit)

### 5 Command generator

- Workgroup: Beatrix, Jason, Stompy, Adeola, Mariam, Kelvin
- Details: Make the [command generator](https://sourcegraph.github.io/support-tools/command-generator/beta/) customer-facing and scalable. The goal is to develop a tool that can be later expanded to another tool seamlessly.
- Project completed and deployed at [https://sourcegraph.github.io/support-generator](https://sourcegraph.github.io/support-generator)

### 6 CSE "database"

- Workgroup: Michael, Jason, Ben, Gabe, Warren, Don
- Channel: #wg-post-aux
- Details: Having a Guide/pool/database of all resolved tickets with specific keywords to easily identify what the troubleshooting steps are talking about, especially for frequent or complex cases where we can easily make reference to for faster customer resolution. Having a well documented case note( outlining thought process, and steps towards resolution) would really go a long way in achieving this.
  - Place for documenting known historic bugs indexed to versions (thinking an md file in our github page), I don’t think the changelog is sufficient for this nor the upgrade pages on Docs.
  - Ensuring we have a framework in place that accounts for data integrity and ensuring customer sensitive information are not exposed.
  - It will be interesting to assess the pros/cons of the solution being customer-facing or not and/or what can be customer-facing vs not

### 7 Streamline key steps in CSE workflow

- Workgroup: Alex, Kelvin, Carl, Warren
- Channel: #wg-cse-automation
- Details: How can we improve the experience of writing an issue summary for our Slack thread, writing an issue summary for Zendesk, and writing an issue summary for Github, could we make this more DRY? Easier to search?
  - [Working notes document](https://docs.google.com/document/d/1D5_o08GFNZ318trY1hZkZHclBtXkzZrdNKn29a2_Uhc/edit#)

### 8 Kubernetes certification

- Workgroup: Carl, Beatrix, Stompy, Ben, Gabe
- Channel: [wg-cse-k8-training](https://sourcegraph.slack.com/archives/C02BETMDNBD)
- Details: 5 folks on the team to complete certification and make a recommendation as to whether this should be required for the rest of the team

### 9 Long running issue retros

- Workgroup: Virginia, Alex
- Channel: #wg-cse-long-running-case-retro-practice
- Details: Implement practice to have CS, CE, Eng retros on all cases that take longer than X days to resolve
- [Working notes document](https://docs.google.com/document/d/1RG2phsY5Ql2XP8qqf08asPnXA7MtAyWq_LevPouoOtA/edit)

### 10 Hard convo enablement

- Workgroup: Virginia
- Details: Provide enablement in how to navigate difficult conversations with customers (delivering hard to hear news, keeping calls productive and on time, etc)

### 11 CSE Onboarding updates V3

- Workgroup: Adeola, TBD
- Channel: #wg-cse-onboarding
- Details: Make additions or subtractions to CSE onboarding based on retros with all teammates.
  - [Working notes document](https://docs.google.com/document/d/1EJyXAk5PptGjZKtCK-4PHoxS_bMVHlEJmYF9v8wRTk8/edit#)

## Progress update

Progress update on how we are tracking toward our OKR can be found [here](https://docs.google.com/spreadsheets/d/11SJb0KdkT0Kmp0epjSkJ1TnzuWilnLEhILGrjl9kFCU/edit#gid=0).

## Final summary

During Q3, we averaged resolution time of 7.5 days and engaged engineering 13% of the time. While we did not meet our OKR, that does not mean we failed. This quarter has allowed us more finite clarity on where we need to invest in Q4 and Q1, as well as completing the foundation of the team. Additionally, most of the projects we did to help us realize our OKR were only just completed within the last week of the quarter, meaning our results from this quarter were largely without the benefit these projects will bring.

Given that we finished onboarding 10 new members of the team, as well as started to onboard 3 new managers on the team, our performance for Q3 is nothing to balk at. It is performance we can be proud of. We may not be where we want to be just yet, but we are so close and it's ours to have in Q4. Additionally, we made 29 doc updates -- not the 45 we thought might be possible, it's more than double the 11 updates we did the quarter prior.

Here are a few things the team will be able to use in Q4 to continue working toward our definitions of support and also realize our [Q4 OKR](fy22q4-okr-plan.md):

1. A [cheat sheet](debugging-cheat-sheet.md) of what logs are most needed in certain situations
2. A customer-facing and scalable [command generator app](https://command-generator.netlify.app/)
3. [Onboarding improvements](cs-onboard-mentor.md)
4. And the pièce de résistance, [a database of resolved tickets](zendesk-ticket-exporter.md) using the power of Sourcegraph (aka an entire new use case for our product!)

Finally, not related to our OKRs or definitions of success, Q3 also saw two members of the team accept offers to move into dev teams. You know the support team is respected when moves like this start happening.

It's been another good quarter with lots of growing, learning, and getting there.
