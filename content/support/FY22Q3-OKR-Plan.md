# FY22Q3 OKR Plan

In support of our product/engineering Q3 objective (see all OKRs [here](../company/goals/2022_q3.md) to _Make cloud and enterprise successful at massive scale_, one way we will measure our success in achieving this goal is for the **Customer Support team to maintain 100% support issue resolution within 7 days while only requiring help (filing a #rfh Github issue) on 10% (measured weekly looking at last 30 days)**. To accomplish this, we will…

| #   | Status      | Responsible | Project                                                                                                         |
| --- | ----------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| 1   | In-progress | Warren      | Add `src debug` command to `src-cli`                                                                            |
| 2   | In-progress | All CS      | Make at least 45 doc updates/additions across the team                                                          |
| 3   | In-progress | Giselle     | Retro all Q2 tickets that resulted in a #rfh for Distribution and Core App                                      |
| 4   | In-progress | Adeola      | Create cheat sheets of what logs are most needed in certain situations                                          |
| 5   | Completed   | Beatrix     | Make the [command generator](https://command-generator.netlify.app/) customer-facing and scalable               |
| 6   | In-progress | Michael     | Create database type solution to make it easy and reliable for application engineers to learn from past tickets |
| 7   | In-progress | Alex        | Streamline key steps in CS workflow                                                                             |
| 8   | In-progress | Carl        | 5 folks complete kubernetes certification                                                                       |
| 9   | In-progress | Virginia    | Implement retro practice for all tickets that take longer than X days to solve                                  |
| 10  | Not started | Virginia    | Provide enablement in how to navigate difficult conversations with customers                                    |
| 11  | In-progress | Adeola      | CS Onboarding updates V3                                                                                        |

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

Progress update on how we are tracking toward our OKR can be found [here](https://docs.google.com/spreadsheets/d/11SJb0KdkT0Kmp0epjSkJ1TnzuWilnLEhILGrjl9kFCU/edit#gid=0), which is also linked in [the product/engineering tracker](https://docs.google.com/spreadsheets/d/1M7xgQuKTkxhAlOU2bZgnp5EjJgptwxNJXBkOJaomm5w/edit?usp=sharing).

## Final summary

To be provided at quarter end
