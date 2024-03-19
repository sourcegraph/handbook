## Search data and analytics

**Metric: DAU**

- **Definition:** Average daily active users who search or read code in their managed instance.

- **Why this metric:** Daily active users is a standard metric for measuring engagement, and reflects the amount of value we want developers to derive from Sourcegraph.

- **Source of truth:** [Looker](https://sourcegraph.looker.com/dashboards/447?%20Date=30%20day&Account%20Type=&Account%20name=&Installer%20Email=)

**Metric: Search success**

- **Definition:** This event occurs when users search and then conduct actions such as copying code, navigating via code intel, searching history, or visiting the code host.

- **Why this metric:** Tracking search success aligns us to the actions users need to accomplish with code search. As we improve the product to help developers accomplish their tasks, we will register more search success events, and grow the number of users who find immense value in Sourcegraph.

- **Source of truth:** Search success is currently defined by a custom event in Amplitude that combines several eventlogger metrics. The official chart can be viewed [here](https://app.amplitude.com/analytics/sourcegraph/dashboard/90h2qwld). (see: “Search result clicked and search success (all users)” chart, the KPI on the funnel labeled "Conversion Rate".)

**Metric: Search results clicked**

- **Definition:** Users who perform a search, then click on a result.
- **Why this metric:** When a user clicks through to a result, it signals the user found something of interest. Less obviously, a session where no results were clicked could be a sign that we surfaced the right code in the results and the user did not need to navigate elsewhere. As we seek to improve ranking, results display, and other modifications to the core workflow, tracking the impact on results clicked will help us understand how we are changing the search user experience.

- **Source of truth:** [Amplitude](https://app.amplitude.com/analytics/sourcegraph/dashboard/90h2qwld) (see: “Search result clicked and search success (all users)” chart and the middle funnel labeled "SearchResultClicked".)

## Search reporting tools

### Looker

Looker is the source of our most detailed and accurate search metrics across all of our customers.

### Amplitude

Amplitude currently contains only events from managed instances (Cloud). Unless a specific managed instance customer is being reviewed, charts found here should be considered as indications of trends rather than the source of truth across all customers.
