## Software Product Lifecycle

Each phase of the software product lifecycle has a label we use to communicate
to our customers a) the quality we're aiming for and b) the support we're able
to provide. These labels are assigned to major features of our software
products, e.g. Batch Changes Beta, but prior to v1, an entire product will
receive this label, e.g. Cody Beta.

These labels are assigned subjectively, but not arbitrarily, using the
guidelines below:

- **Early Access Program (EAP)**
  - Shared privately, most often with a small set of NDA's customers
  - Super early functionality
  - Can be an entire product or a new feature of an existing product
  - Not for production workloads
  - Some hand-holding from the product team and DevRel
  - Unsupported
  - Goals
    - Does this idea have potential?
    - What would make it awesome?
- **Experimental**
  - Shared publicly
  - Super early functionality
  - Unsupported
  - Goals
    - Does this idea have potential?
    - What would make it awesome?
- **Beta (n)**
  - Shared publicly (although private betas are sometimes useful)
  - Feature complete (although it's sometimes useful split a product's functionality into multiple betas to get feedback on Beta 1 features while still developing Beta 2 features, for example)
  - Early docs and samples
  - Best effort support
  - No guarantee of stability from beta to beta
  - Goals
    - Provide “bake time” on the way to GA
    - Gather feedback from real customers applying it to real workloads
    - Fix bugs
    - Optimize performance
    - Train sales and support staff
    - Finalize the docs
- **General Availability (GA)**
  - Publicly available
  - Production workload ready
  - Fully supported using industry best practices for deprecation as necessary
  - Performance optimized (both latency and scale)
  - Blocking bugs fixed
  - Contains no new features that didn't get “bake time” (to the best of our ability)
  - Scenario-complete docs + samples
  - Sales and support staff trained and ready to go

## Versions

Each version of a product represents a label to communicate its maturity and
breadth of applicability:

- The **major versions** are owned by marketing to communicate a jump forward,
  often as part of a launch event
- The **minor versions and revisions** are owned by the product teams to
  communicate minor changes, new features, bug fixes, etc. at the team's
  discretion
