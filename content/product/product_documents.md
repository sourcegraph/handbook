# Product documents

A Product Document (PD)'s purpose is to communicate the high level product problem that needs to be solved. It is the one place where ongoing research and information can be aggregated around a particular problem statement. Product documents exist to encourage quick iteration, the ability to fail fast, and multiple efforts to be combined towards a singular problem statement.

These documents were created out of a need to orient around a particular problem statement, and the realization that it sometimes takes multiple [RFCs](../communication/rfcs.md) to fully solve a problem. This helps to aggregate the motivations and learnings around a problem, so that individual RFCs can focus on a particular proposed solution.

_All PDs are in a [public Google Drive folder](https://drive.google.com/drive/folders/1UbuN9izpTj7ppJiduKI5tid8GEFuAiEx)._

## PDs have similar properties to RFCs

They are:

- [Sequentially numbered](../communication/rfcs.md#rfcs-are-sequentially-numbered)
- [Google Docs](../communication/rfcs.md#rfcs-are-google-docs)
- [Public](../communication/rfcs.md#rfcs-are-public)
- [Open to external contributions](../communication/rfcs.md#external-contributors)

## Status

Each PD has a status that is in the title of the PD (e.g. "PD 1 WIP: Title"). The author is responsible for keeping the status updated.

| Status | Description |
|-------|-------------|
| WIP | The author is still drafting the PD and it is not ready for review. |
| REVIEW | The PD is ready to be reviewed. The PD explicitly lists whose reviews are requested and deadline for receiving those reviews. |
| DEFINED | The problem statement defined and agreed upon, and is locked to changes. This is to ensure that anyone involved in solving the problem statement defined within the PD does not need to worry about changing scope. A change to the problem statement likely requires a new PD to be created to define the new problem statement. If the update is minor enough, all interested parties should be notified. |
| ABANDONED | There are no plans to move forward with solving the problem statement defined in the PD. The particular reason is communicated in the metadata section of the PD. For example, the PD may have failed to get the necessary approvals, it may be been superseded by another PD, priorities may have changed, or we may not have resources to work on this PD in the foreseeable future. |
| SOLVED | The problem statement defined in the PD has been solved. |

## PD structure

Effective PDs contain the following information. The below might feel like a heavy structure, this is intentional to help ensure all important considerations and context has been written down. Many sub-sections are very short, and some can be omitted if not relevant to the specific PD.

The [Google Docs Template](https://docs.google.com/document/d/1MBZxnRlDG69Fyvzpai5rBqxizvX5zVeZiUe6z7VZrjk/edit?usp=sharing) is the source of truth and defines each section that should be included in a product document and should be used when creating new PDs. This is maintained within the template to avoid duplication.

At a high level, this is why the following sections are important:

- **Title** that includes the PD number.
  - The title is inlined in the Google Doc so that it is more visible and will not disappear if exported to a different format.
- **Metadata** about the state of the PD. Including but not limited to:
  - **Editor:** The person responsible for iterating on the content of the PD.
  - **Owners:** The single owner from each of Product, Engineering, and Design who is accountable for this PD.
  - **Status:** A description of the current state or outcome of the PD.
  - **Requested approvers:** The list of people that the PD author is requesting a review from and a requested deadline for those reviews.
  - **Approved by:** A list of people who agree that the problem statement as defined in the PD is valid, and that there is enough context to begin solving the problem (note that they do not _actually_ need to start work).
- **Purpose:** Where the who, what, when, why are defined for the product document. This is the foundation for all other sections.
- **Scope:** To help reduce the complexity of a problem, or to make sure particular constraints are fulfilled, we define the scope and appetite we have for solving this problem.
- **Discovery:** We want to quickly iterate and ideate about this problem. This is where we keep track of all of those ideas in addition to the particular solutions we have implemented or are currently implementing.
- **Design:** Links to design work and user research, as well as user experience notes to consider.
- **Analytics:** How we are going to validate that this problem has been solved and that it is adding value to users.

## How are PDs different from RFCs?

When an RFC is created in response to a PD, **the background and problem sections in the RFC are replaced with links to the associated PD**. The PD becomes the place where all context, customer data, and learnings are aggregated for the problem statement. Then, PDs keep track of all of the proposed solutions, ideas, and plans for solving a particular problem. The RFC is a single proposed solution.

In the past, we have simply elevated an RFC to be a "parent RFC", though it didn't quite help orient the team around a problem, and we found that in the RFC format it was easy to fall into "solution or feature blindness" rather than focusing on all the possible things that can be done to solve a particular problem.
