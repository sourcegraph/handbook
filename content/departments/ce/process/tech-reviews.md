# Tech Review Process

## Background / Context
In Q4, we initiated a [technical review process](../ce/process/tech-win-process.md#tech-review-process) to enable collaboration between CE, Sales and Engineering, Product, Support (EPS) around non-standard or high-risk customer technical requirements. This effort directly impacted our ability to positively influence our revenue goals as a company and drive deals to successful closure.

As part of the pre-sales process, CEs capture the technical requirements and design of a customers’ intended architecture in the Technical Design Doc. For any Sales-designated Key Prospects or any prospective customers with non-standard or high risk requirements, the TDD is sent through the Tech Review process for review by EPS (Engineering, Product, Support) before initiating a Trial.  Subsequently, prior to Production deployment, the TDD is then updated and reviewed by EPS for any Key Prospect or prospective customers with non-standard or high risk requirements intended for their Production Infrastructure.

As part of the pre-sales process, this has proven to be a success in gaining internal alignment and collaborating to benefit our prospective customers. Moving forward, however, we continue to require close alignment and collaboration internally to ensure the long term technical success of our customers. 

## Post-Sales CE/Sales <> EPS Collaboration
With respect to concerns about asks that customer facing teams may have or work that may be required to make our customers successful after the sale is complete, additional technical needs may arise from time to time at different points in their partnership with Sourcegraph.

Today, where a customer need falls outside of what exists or is supported in our Product, CE logs [Product Gaps](../ce/process/tech-win-process.md#surfacing-product-feedback) in Salesforce to surface these requests to Product for consideration onto the [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/21). If / when added to the Roadmap, CE and Sales can track progress from the Roadmap.

Where we uncover that, in order to make a customer successful technically, they require EPS resources / effort that is unplanned and unprioritized, the account CE is expected to write up the details: capture the clear asks (concern / problem statement / etc), provide context if it impacts any other customers, and provide any other business context in order to raise the request through the technical review process employed for pre-sales opportunities today. This allows for transparent alignment and collaborative decision making between Sales, CE, and EPS.

Where we encounter situations that we are unsure if a customer is following a best / supported practice, the account CE is expected to write up the details: capture the clear asks (eg validation required) and provide context around the ask and the customers’ technical design and raise the request through the technical review process employed for pre-sales opportunities today. This allows for transparent collaboration on defining the expectation or best practice and aligning on next steps in support of the customer's needs.

Where an existing customer runs into an issue, Support leads and guides the customer to resolution. If and where CE can provide context to Support to they do; however, Support are the drivers of these activities.

## What the tech review process is / when to employ it
- Think of this like an RFC for our customers when we have found ourselves in a situation where input/comments/buy in/decisions are needed to move something forward.
- When cross-functional alignment and a decision or commitment is needed from Product/Eng/Customer Support/CE/Sales for a customer.
- If technical and business context needs to be provided to EPS to either gain alignment on a solution and go forward plan in support of a customers’ (or multiple customers) needs, or if tradeoff / prioritization conversations need to be had to align on timelines amongst leadership.

## What the tech review process is not / when not to employ it
- Typical support workflows (including support escalations) on reactive customer issues
- A mechanism for escalating a customer need in general. We have other processes and avenues for handling these scenarios.
 - When in doubt about how to route a question, reach out to your leadership team and they’ll help determine the best course of action forward.

## Expectations
- Each request should include, at minimum the following:
  - What is the current misalignment or gap between the customer and Sourcegraph best practices or documented product limitations?
  - When does the customer need a decision or commitment by, and why (context as to what the timeline impacts)?
  - Is this misalignment based on a new or existing customer requirement - i.e., what prevented us from catching this during technical qualification? 
  - What are the customers’ expectations; what happens if we don’t meet this request?
