# Design Process

As each project is different, a lean design process will be formulated for each effort during the RFC stage. For example, if the risk associated with a design is low and the requirements are well defined, we will reduce or eliminate the research and testing phase to immediately begin design and development.  If a project requires very little new design, we may rely on wireframes and opt to not produce visual designs. In these cases, our existing design system will help carry the project and ensure it meets visual standards.

Conversely, a large project with new page layouts, new technology or lightly defined requirements from customers may require a much larger design process.

_All projects, no matter how small are hallway tested with internal users._

See the process segments section for more information.

## Open and asynchronous design with synchronous reviews

All interested persons should be able to consume and comment on the output of the design team asynchronously. 

While asynchronous communication is a core attribute of remote work, key moments such as research or wireframe and visual design reviews require a synchronous meeting. This is because design and workflow can be subtle, difficult to summarize and span multiple states or flows. To allow a more immediate and personal level of discussion of these key moments, artifacts will be made available for asynchronous review and a synchronous meeting will be held to allow the designer or researcher to present their efforts.

## Process segments

- Ideation
  - This is generally represented by a kickoff meeting with interested parties. Kickoff meetings should generally include representatives of the following parties:
      - The product manager
      - Developers working on the project
      - Designers
      - Sales, ops and customer engineering staff who have insight into how this affects users
      - Customers if available
      - Stakeholders as required
  - Tools
      - We are experimenting with [miro.com](https://miro.com/) as an ideation tool
      - Figma.com can be used to generate mood boards
- Research
  - Interview internal users
      - As our users are developers, Sourcegraph developers make great interview subjects. However, we need to acknowledge that they do have biases about features and this research must be augmented
  - Interview external users
      - Where the project requires and time permits, conduct research with these users to inform your designs
  - Customer requests and support tickets
      - Our users are passionate and provide excellent feedback. Each project should utilize our collections of this feedback in [Productboard](https://sourcegraph.productboard.com/)
  - Analogous designs
  - Competitive designs
  - Usability tests
    - When updating existing product features, first conduct usability tests to inform redesign decisions
  - Process
      - A GitHub issue should be created to track the work
      - Research is conducted according to requirements
      - Findings publishing and review
        - Findings should be detailed in a Google doc and announced in the corresponding team channel or #product on Slack
        - Findings should contain a clear summary, links to resources and supporting data
        - Conduct a synchronous review meeting with key stakeholders based on the size of project or importance of findings
      - Schedule and conduct a presentation meeting with stakeholders where necessary
  - Tools
      - Google Docs
      - Google Forms for polls
      - UserTesting.com
      - Maze.design
- Wireframes
  - Wireframes should utilize the Sourcegraph Figma component system
  - Wireframes should generally utilize realistic data and text for each element. In cases where many elements are required, ‘lorem epsum’ placeholder text will suffice if the initial or prominent elements are real data.
  - Process
      - A GitHub issue should be created to track the work
          - Label the issue with the design and/or ux label
          - TBD - how do we replicate pull request reviewers?
      - Wireframes are produced in Figma
      - Wireframes are announced in Slack and linked in the GitHub issue well before they are complete for review
      - Wireframes are hallway tested with internal users and product managers
      - Schedule and conduct a presentation meeting
      - Stakeholders will approve the GitHub issue indicating the designs are ready for the next phase
  - Checklist
      - Ensure designs meet Jacob Nielsen's [ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
      - Has the change’s effect on the CLI been considered?
          - Does the language in the UI map to the language in the CLI?
      - Enterprise / Cloud
      - Signed in vs. anonymous user
      - User permissions
      - Interactive mode / plain text mode
      - TBD - add a standard UX checklist
  - Tools
      - Figma
- Testing
  - Process
      - A GitHub issue should be created to track the work
      - Testing is conducted according to requirements
      - Publish testing results summary to google drive
      - Announce results in slack
      - Create a GitHub issue to address items in the test results
  - Tools
      - Maze.design
      - UserTesting.org
- Visual design
  - Visual design should utilize the Sourcegraph’s Figma based component system
  - Dark compositions will be created for each major design
  - If new components are required, components will be created in the file itself, not the component system
  - Improvements to the Sourcegraph user experience should consider the following in every change:
        - Has the change’s effect on the CLI been considered?
        - Does the language in the UI map to the language in the CLI?
        - Does the documentation reflect the change?
        - Light mode / Dark mode
        - Enterprise / Cloud
        - Signed in vs. anonymous user
        - User permissions
        - Interactive mode / plain text mode
  - Process
      - A GitHub issue should be created to track the work
      - Designs are produced in Figma
      - Designs will be announced in Slack and linked in the GitHub issue well before they are complete for review
      - Ensure designs meet the visual design checklist:
        - Ensure spacing is consistent and matches the 8pt grid system
        - Ensure text, colors and other sytles match existing styles, if possible. 
          - Introduce new text styles only if really necessary.
          - If adding new styles, ensure that they meet the accessibility standards and add them to the design system 
        - Review designs for accessability:
          - Color blind check
          - Contrast check should meet AA standard for small text
      - Schedule and conduct a design presentation meeting if the size of the project requires
      - Receive signoff from stakeholders
      - If components were created in the visual design process, when the designs are signed off on, those components will be moved to the Sourcegraph component system
      - Prepare redlines or an interaction delivery writeup for the engineers. Consider the following:
          - Margin and padding
          - Animation
          - Links and hover states
      - Describe expected behavior of layout for tablet and moble screensizes
        - Due to the low number of mobile and table visitors (< 3%) design comps for these sizes are generally not required 
      - Schedule a meeting with engineers to discuss the interaction
  - Tools
      - Figma
- Metrics collection:
  - In the RFC process, the definition of success will include items which can be measured and evaluated
  - Involve the business operations team in determining what metrics to track and how they are tracked
  - Work with engineers to add the required eventLog tracking
  - Tools
      - Looker
      - Google analytics
- Refinement
  - Designers will review metrics and determine if their designs are meeting objectives set for them.
  - If areas for improvement are found, tickets will be created to document the change required to improve the issue
