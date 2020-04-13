# Design execution (DE)

*This section is a WIP, we are currently running our first [design execution document](https://docs.google.com/document/d/1xjygvhxjWekkhstlTch5q7x2N3L7uKMIG8Pq9IbWCaI/edit#)*

Design execution documents are where design projects live, tracking the process that was laid out in corresponding RFC's. As a company we value tracking work to make asynchronous communication easier, by having a central place for design projects to live, and by using an environment familiar to everyone at Sourcegraph (Google Docs), we can more easily solicit feedback.

A design execution document is a place where design is executed. Research will be organised, and discussion concerning design artifacts can take place and be documented here.

The [template](https://docs.google.com/document/d/12qT1U_ogBBY1ED6XlG-3MnbeOzCuYrnvoU7inpUMtPM/edit#) for design execution documents is loose, to accomodate varying design needs, and changes to process. 

All DE documents should serve 3 goals:

1. A public repository of the design process is a place to receive and solicit feedback from the team
2. Viewing the design process as a whole helps everyone understand where we are in a project, and highlights problem areas
3. Finished projects are a timeline that informs future work, and helps new team members onboard

## Status

Each design execution document has a status that is in the title of the design execution document (e.g. “DE 1 ACTIVE: Title”). The editor is responsible for keeping the status updated.

| Status | Description |
|-------|-------------|
| TENTATIVE | A design problem has been identified, and an RFC is being drafted. |
| ACTIVE | The first related RFC has been approved, and the design process is underway. |
| ABANDONED | There are no plans to move forward with this design project. The initial RFC may be ABANDONED. The reason is communicated in the metadeta section of the design execution document. |
| IMPLEMENTED | This design execution document has been implemented. |

## Sequential numbering

Design execution documents will be numbered sequentially (eg., "DE 1: onboarding") so they are easy to reference, and to keep an ordered high level overview.

## Design execution documents are Google Docs

Refer to ['RFC's are Google Docs'](https://about.sourcegraph.com/handbook/communication/rfcs#rfcs-are-google-docs) for more information.

## Design execution document structure

DE docs have a template that should be followed as closely as possible, this keeps structure across other projects, and helps other team members build familiarity with the design process.

**Title** that includes DE number and project name
- eg. DE 1: onboarding

**Metadata**
- Editors name (project owner)
- Figma files (each inner project has a corresponding figma file)
- Document status (TENTATIVE, ACTIVE, ABANDONED, IMPLEMENTED)
- Team (project owner, inner project owners, PM, development)
- RFC's that are directly realted to the project
- Problem statement
- Current project(s) (eg., search onboarding)
- Explanation if ABANDONED

**Inner projects** (eg., onboarding > search onboarding, admin onboarding) 
- Title
- Editor (inner project owner)
- Figma file
- Problem statement
- Explanation if ABANDONED
- Research
- Design
- Test
- Development (specifications, copy)
- Archive

## Privacy

The default state for active design execution documents is private, due to potentially sensitive information being included. However, once a design execution document project has been completed, an edited version removing sensistive data will be released. The public version will be subject to peer review prior to release.

We choose to default to private to avoid blocking individuals by creating extra process around sharing potentially private information (eg., interview recordings).

## Participation

Any member of the team can leave feedback in the form of comments on any element of a design execution document.

## Treating a design execution document post implementation

Once a project has been implemented, the editor will treat the document, keeping a private version in an archived state, and creating a new public version that removes potentially confidential information. This will be reviewed before being made public.

## Resources

- https://medium.com/dali-lab/document-your-design-process-to-367ee88d5d7f
