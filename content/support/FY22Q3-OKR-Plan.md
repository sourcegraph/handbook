# FY22Q3 OKR Plan

In support of our product/engineering Q3 objective to *Make cloud and enterprise successful at massive scale*, one way we will measure our success in achieving this goal is for the **Customer Support team to maintain 100% support issue resolution within 7 days while only requiring help (filing a #rfh Github issue) on 10% (measured during last month of quarter)**. To accomplish this, we will…

|#|Status|Responsible|Task|
|---|---|---|---|
|1|In-progress|Warren|Add `src debug` command to `src-cli`|
|2|In-progress|All CSEs|Make at least 45 doc updates/additions across the team|
|3|In-progress|Giselle|Retro all Q2 tickets that resulted in a #rfh for Distribution and Core App|
|4|Not started|Adeola|Create cheat sheets of what logs are most needed in certain situations|
|5|Not started|Beatrix|Make the [command generator](https://sourcegraph.github.io/support-tools/command-generator/beta/) customer-facing|
|6|Not started|Michael|Create database type solution to make it easy and reliable for CSEs to learn from past tickets|
|7|Not started|Alex|Streamline key steps in CSE workflow|
|8|In-progress|Carl|5 folks complete kubernetes certification|
|9|Not started|Virginia|Implement retro practice for all tickets that take longer than 7 days to solve|
|10|Not started|Virginia|Provide enablement in how to navigate difficult conversations with customers|

## Task details
### 1 `src debug` command to `src-cli`
* Workgroup: Warren, Tomas
* Details: This command will create an archive (zip file) with the information we need most often in troubleshooting (values, logs, etc) so that we can ask for one thing and get the majority (if not all) the information we need while troubleshooting. We'll additionally need a way for customers to transfer us this file (it will probably be too big for slack). [This](https://github.com/sourcegraph/src-cli/blob/src-debugger/cmd/src/debug.go) is the repo.

### 2 Doc updates
* Workgroup: All CSEs
* Details: Make at least 45 doc updates/additions across the team. These can be tied to cases or not. If not, be sure to link to the PR here:
	* 

### 3 Retro key Q2 tickets
* Workgroup: Giselle, Gabe, Alex
* Channel: [#wg-q2-ticket-retro](https://sourcegraph.slack.com/archives/C02A8B3CEH1)
* Details: The goal is to see what we can change within CS and/or if we have requests of any other teams
  * Go through [sourcegraph/customer](https://github.com/sourcegraph/customer/issues) May 1, 2021 - July 31, 2021
  * [Working notes document](https://docs.google.com/document/d/1cxjPXLxtwZ_TXy66Dv0fl-E96ko3WsY5ERVn9nXyNL0/edit)
  * [Working sheets document](https://docs.google.com/spreadsheets/d/1Gmsa-ZgIsiXj6feXVl2rlepoQf8GEM-5H3tGMxersdY/edit#gid=0)

### 4 What logs, when cheat sheets
* Workgroup: Adeola, Amber, Stompy

### 5 Command generator
* Workgroup: Beatrix, Jason, Stompy, Adeola, Mariam, Kelvin

### 6 CSE "database"
* Workgroup: Michael, Jason, Ben, Gabe, Warren, Don
* Details: This is a big problem to tackle and will require agreeing to the problem statement, what needs to be true for the solution, and then brainstorming. A few things to consider already:
	* Having a Guide/pool/database of all resolved  tickets with specific keywords to easily identify what the troubleshooting steps are talking about, especially for frequent or complex cases where we can easily make reference to for faster customer resolution. Having a well documented case note( outlining thought process, and steps towards resolution) would really go a long way in achieving this.
	* Place for documenting known historic bugs indexed to versions (thinking an md file in our github page), I don’t think the changelog is sufficient for this nor the upgrade pages on Docs.
	* It will be interesting to assess the pros/cons of the solution being customer-facing or not and/or what can be customer-facing vs not

### 7 Streamline key steps in CSE workflow
* Workgroup: Alex, Kelvin, Carl, Warren
* Details: How can we improve the experience of writing an issue summary for our Slack thread, writing an issue summary for Zendesk, and writing an issue summary for Github, could we make this more DRY? Easier to search?

### 8 Kubernetes certification
* Workgroup: Carl, Beatrix, Stompy, Ben, Gabe
* Details: 5 folks on the team to complete certification and make a recommendation as to whether this should be required for the rest of the team

### 9 Long running issue retros
* Workgroup: Virginia, Alex
* Details: Implement practice to have CS, CE, Eng retros on all cases that take longer than 7 days to resolve

### 10 Hard convo enablement
* Workgroup: Virginia
* Details: Provide enablement in how to navigate difficult conversations with customers (delivering hard to hear news, keeping calls productive and on time, etc)


## Progress update
Progress update on how we are tracking toward our OKR to be provided 2021-08-27 and 2021-09-30

## Final summary
To be provided at quarter end
