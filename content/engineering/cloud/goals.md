# Cloud goals and priorities

## Guiding principles

1. **Make it work**: Build the backend blocking work, and expose it (even in a roughly usable way) to the Sourcegraph team. We will be able to quickly surface any glaring issues and will have more thoughts around usability. Take shortcuts where possible (this is currently due to the team having fewer frontend resources).
   - Where possible, making it work and usable should be combined (avoid duplicate efforts), but if it's possible to separate the two in order to move things forward, we should!
1. **Make it smooth**: The experience has been designed and thought through. We feel good about putting this in front of users, and they will find it valuable!
1. **Make it fast**: Now that users can try it, make sure the experience is fast for them (but it's better to have a slow working feature than a fast not-working one).
1. **Make it scale**: Make it work at large scale. Up until now we have been starting to grow awareness of the feature, so the number of users is starting to matter. It is better to have high demand and need to surge on scalability than to make an infinitely scalable unused feature.

## Goals

### Private code on Sourcegraph Cloud

**Problem:** Customers who want to use Sourcegraph with their private code must setup and run a Sourcegraph instance on their own compute infrastructure. There are customers who want to use Sourcegraph but don't want to have to deploy and operate their own Sourcegraph instance and associated compute infrastructure. These customers expect to be able to search over only the code they care about, and are not inundated with public or irrelevant code. To host private code on Sourcegraph Cloud, we need to not only ensure the security of our product (which is important for on-premise deployments too), but we also have to ensure the security of our Sourcegraph Cloud infrastructure.

**Milestones:**

1. ✅ The Sourcegraph team members can add public code from GitHub.com and GitLab.com.
1. 🔄 The Sourcegraph team members can add private code from Github.com and GitLab.com to Sourcegraph Cloud.
1. 🔄 Any user can add public code from GitHub.com and GitLab.com.
1. Sourcegraph Cloud is Generally Available (GA) for users to add private code from GitHub.com and GitLab.com.
1. Sourcegraph Cloud is a viable alternative to Sourcegraph Server for a 20-100 person organization.
1. Sourcegraph Cloud is a paid product that is Generally Available (GA).

### Backend infrastructure

Backend infrastructure goals are ad hoc as requests come up from customers or other teams. The Cloud team is responsible for scheduling and prioritizing these requests as they come up. See the [roadmap](../../product/roadmap.md#cloud) for planned items.

## Roadmap

The cloud team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/feature-board/2119755-cloud)

Unplanned:

- [Non-Git VCS](https://docs.google.com/document/d/1Y2xYbckAz5jlBePER_BarypeDfP3mjjX9bBOZm3ALqY/edit#heading=h.m60esa7uysvx)
