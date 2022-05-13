# Customer Training FY23 Roadmap

Our FY23 focus is to build a world class customer training experience focused on our Enterprise customers. By creating a foundation of consistent training materials and formatting, we will empower the CE org to better serve our Enterprise customer base and our customers to see the most value out of Sourcegraph.

## FY23 Q2: Foundations

Q2 will be focused on building a strong foundation for our future work. As such, we’ll be focused on standardizing training content and flow, standardizing content location for greater discoverability, and producing template content for the CEs to leverage.

- Standardizing customer training

  - What: We’ll be building standardized Sourcegraph 101, 102, and admin webinar trainings, and enabling the CE team on them, similar to previous work on Demo Flows. We will also begin work on use case-oriented trainings, though this may extend into Q3; initial use case focus is Code Security.

  - Why: We can’t iteratively measure the impact of our work if each CE is training on completely different cadences and with completely different materials. Additionally, without training templates, CEs are forced to reinvent the wheel each time they onboard a new customer; we hope that this is the first step in easing that process for the team. Additionally, we want to bring use cases into our customer training and success model in the same way they exist in the pre-sales model.

  - How: We’ll establish a shared training repository in GitHub, a template for training materials to follow, and then transfer existing 101, 102, and admin training concepts floating around the team into standard flows. The team will be trained on how to deliver these trainings using a train the trainer model. The Code Security training will be created and added to the demo repo and the CEs will be enabled on it using a train the trainer model, with other use cases to follow.

  - Business Outcomes:

    - 100% of CE team is trained (via train-the-trainer) on foundational user and admin onboarding training block. (DRI: [Emily Chapman](mailto:emily@sourcegraph.com))
    - Ship (and enable 100% of CE via train-the-trainer) on code security training with Sourcegraph. (DRI: [Thomas Hughes](mailto:thomas.hughes@sourcegraph.com))

- Improved admin experience

  - What: The CTE team will generate training materials to help admins stand up Sourcegraph.

  - Why: This issue impacts the customer experience that impedes them from using the product.

  - How: We will create or modify existing playbooks for Kubernetes (without Helm) installs and for high-security environment installs based on known customer challenges. If time permits, we will create or modify existing playbooks for Kubernetes with Helm and Docker Compose installs. We will store these in the standard artifact repository and enable the CEs on them.

  - Business Outcome:

    - 5 customers receive admin-specific enablement prior to production set up (DRI: [Thomas Hughes](mailto:thomas.hughes@sourcegraph.com))

- CE enablement

  - What: The CTE team will provide reusable assets for CEs focused on resolving shared, identified needs in service of the CTE team’s overall goals.

  - Why: Though CE enablement isn’t the core focus of the team, there is obvious overlap between CE enablement and a world-class customer training experience for our Enterprise customers. Providing reusable resources which can serve both goals furthers the overall CE org’s agenda.

  - How: Within the asset repo, create and share email templates for kickoff of the post-sales onboarding process, share useful sample scripts/cheat sheets/handouts that might accompany a training, and generate other assets as time allows.

  - Business Outcome:

    - Produce and deliver at least 3 CE-requested assets in Q2. (DRI: [Emily Chapman](mailto:emily@sourcegraph.com))

## FY23 Q3/Q4: Customer Onboarding Experience

Q3/Q4 will be focused on continuing to build upon the foundation set in Q2, expanding to the full onboarding experience of customers post-sale closing. We’ll focus on the 90 days after a sale is closed and providing collateral and training as needed based on feedback from the customer’s usage. This collateral and training content will be used by the CE team to continue enabling their customers.

- Create initial 90 day customer enablement onboarding plan

  - What: We’ll be building a standard plan of onboarding a customer post-sale close to include which trainings to deliver in which order and use-case specific training
  - Why: There is not currently a standardized onboarding experience for customers. While trainings have existed for Sourcegraph 101, 102, admin, etc: These have not been formally presented in a roll-out plan for a customer to adopt and be officially “onboarded” and move into a more “ongoing” status. Standardizing this process gives a more clear picture of “onboarding” versus “ongoing” and lays a plan out to the customer to achieve their kick-off goals.
  - How: Collaborating with CE management, the CTE team will introduce an enablement plan template that outlines the trainings and outcomes expected for a 90 day roll out plan to a customer.
  - Measure of Success: Creation of 90 day enablement training plan. Train CE team (train the trainer) on utilizing this enablement plan with their customers.

- Create collateral and training for ongoing customer enablement
  - What: We’ll be building a process for reporting and feedback on training and webinars, enabling CEs to provide CTE with methods to request collateral and determine training opportunities
  - Why: Post onboarding, CEs need to ensure their customers are continuing to onboard developers by providing training based on usage data and feedback from the customers. This feedback will influence the CTE team priorities on enhancing existing training and collateral, as well as creating new training and collateral when required.
  - How: Collateral and training will be made and updated as needed to support ongoing and customer-usage based training needs through an established feedback mechanism from CE to CTE.
  - Measure of Success: CEs are enabled to know which training exists, how to gather and provide feedback on trainings, and when to utilize trainings based on customer feedback and usage data. CTE measures feedback and effectiveness of the trainings.

## Near-term Goals

Near term, the Customer Training organization will support the mission of training and enablement opportunities for our enterprise customers. CTEs will formalize the structure and process for course creation, training enablement and delivery, and will begin to staff for delivering formalized training from the CTE org itself, off-loading this from the CE team.

We anticipate the following initiatives:

- Formal, Discrete Training Function / Offering

  - What: Establish a formalized training offering, led by Customer Training, that is discretely provided to customers.
  - How: Optional PS-style paid engagement or perhaps free for a certain tier (eg Strategic) as part of a great “Training Catalog” documenting our engagement offerings. (See longer-term goals for catalog information)

- Advanced trainings on specific use-cases

  - What: Create additional advanced trainings on specific use-cases, covering the 5 primary use-cases as a company and expanding into additional use cases as we receive feedback from the customers.
  - How: Gathering feedback from the CE team and from customers, we’ll focus on additional use cases as we find new ways customers are using Sourcegraph, and transform these into formal trainings for additional specialized skillsets. For example, we may determine a GraphQL based training for Admins is appropriate for an advanced enablement training.

## Longer-term Goals

Going forward, the Customer Training organization will continue to support the company’s larger goals and metrics surrounding training and enablement opportunities. CTEs will continue to gather feedback and metrics on the impact of trainings against customer usage and adoption rates, and support the Customer Engineering team in their efforts to enable, onboard, and assist in rolling out Sourcegraph to their customers at scale to all customer segments, in a self-service and automated manner. This will continue to be driven through a world-class training experience through a formal learning management system (LMS), certifications, and more.

We anticipate the following larger initiatives:

- External Learning Management System (LMS)

  - What: We’ll invest in a customer-facing LMS that’s built and maintained by the Customer Training team.
  - Why: Streamlines upkeep and iteration of customer-facing training and enablement at scale.
  - Measure of Success: End users are able to access content, consume content, and we see feature consumption in the intended and desired manner.

- Sourcegraph Certification process

  - What: We’ll create a certification process for partners, platform integrators, trainers, and end-users to be certified in Sourcegraph through our LMS.
  - Why: Certification provides a simple way to showcase knowledge in various Sourcegraph skills. This can lead to partner enablement, platform expansion through integrators, and certification of our own team members in Sourcegraph.
  - Measure of Success: Certifications exist for various course paths within the Sourcegraph LMS to be certified as admins, users, trainers, partners, integrators, etc.

- Full training / services catalog

  - What: We’ll create a training and services catalog in partnership with the CE team that showcases which CE led training and CE led engagements are available for a white-glove offering (whether we charge for this or build it into licensing for specific market segments)
  - Why: Providing a catalog is a step toward showcasing the ways Sourcegraph can enhance the overall onboarding and adoption experience of Sourcegraph within a customer’s organizations. Enterprises are happy to pay for quality training, enablement engagements, and more. Showcasing this value through free or paid offerings in a catalog would give a one-stop-shop experience and assist future sales teams in their pitching of the value Sourcegraph can bring.
