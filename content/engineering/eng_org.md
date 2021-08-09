# Engineering org

This page documents our current and planned future engineering org structure. Plans can change!

## Philosophy

Our engineering organization is divided into mission based teams that contain the necessary cross-functional skillsets to achieve the desired mission. The leader of each team (at every layer) is responsible for ensuring appropriate cross-team collaboration happens when necessary.

### Minimum viable team

A minimum viable team contains:

- A product manager
- An engineering manager
- Appropriate product design support depending on the work of the team
- Four engineers, with a minimum of two per skillset (examples: 2 backend + 2 frontend, 4 backend, 4 frontend)

New teams will not be created until/unless we have committed headcount in the plan to staff them to a minimum viable team within 3 months of forming the team, or to whatever is necessary to make the new team successful, whichever is larger.

We want each team to have sufficient engineering capacity to not only be able to deliver on their roadmap but so that teammates feel:
- they can take PTO without worrying about the team's commitments
- teammates have ample time to experiment with new ideas or improvement that exist outside the team's roadmap.

The number of teammates that allows teams to achieve these objectives should be considered their minimum team size.

### Optimal team size

The optimal engineering team size is somewhere between minimum and maximum size, and depends on the team's scope, the engineering manager's capacity, and teammate capabilities. We trust engineering managers to make the right decision for their team.

### Maximum viable team

We expect engineering managers to not manage more than 8 people directly.

If a team is approaching capacity and we need to continue to grow, the manager of the team should work with their manager to create a plan to grow and divide the team. This involves identifying a new engineering manager (either internally or hiring), which can take ~3 months, so it is important to plan ahead. In advance of identifying a new manager, the manager of the team at capacity should already start organizing the team's work as if they were managing two separate teams. This eases the team into the transition before we actually have a new engineering manager onboard.

When teams grow and divide, we prefer to grow the org horizontally, not vertically. This means the new engineering manager would be a peer to the existing engineering manager, not report to the existing engineering manager, as long as the engineering manager's manager has capacity. If the engineering manager's manager doesn't have the capacity, then we need to make a higher-level decision about how to adjust our org structure to support the growth we need.

## Transferring teams

If you are already at Sourcegraph and see a current or future opportunity that you're interested in, please tell your manager. Your manager will chat with you to understand what you want and then propose next steps.

## Current organization

- [Nick Snyder](index.md#nick-snyder-he-him), [VP Engineering](../../handbook/engineering/roles.md#vp-engineering) (reports to [Beyang Liu](index.md#beyang-liu), CTO)
    - Global code graph
        - [Search core](../../handbook/engineering/search/core.md)
        - [Search product](../../handbook/engineering/search/product.md)
        - [Code intelligence](../../handbook/engineering/code-intelligence/index.md)
        - [Batch Changes](../../handbook/engineering/batch-changes/index.md)
    - [Developer Insights](../../handbook/engineering/developer-insights/index.md)
        - [Frontend platform](../../handbook/engineering/developer-insights/frontend-platform/index.md)
        - [Extensibility](../../handbook/engineering/developer-insights/extensibility/index.md)
        - [Code insights](../../handbook/engineering/developer-insights/code-insights/index.md)
        - [API docs](../../handbook/engineering/developer-insights/api-docs/index.md)
    - Platform and infrastructure
        - [Security](../../handbook/engineering/security/index.md)
        - [Distribution](../../handbook/engineering/distribution/index.md)
        - [Core application](../../handbook/engineering/core-application/index.md)

## Planned organization

This is the current plan for our engineering organization and growth.

Plans can change given new information!

- [Nick Snyder](../company/team/index.md#nick-snyder-he-him), [VP Engineering](roles.md#vp-engineering) (reports to [Beyang Liu](index.md#beyang-liu), CTO)
    - Global code graph {#global-code-graph}
        - [Yink Teo](../company/team/index.md#yink-teo-he-him) ([Director of Engineering](roles.md#director-of-engineering))
        - [Search core](search/core.md)
            - [Team: Search core](search/core.md#search-core-eng)
        - [Search product](search/product.md)
            - [Team: Search product](search/product.md#search-product-eng)
        - [Code intelligence](code-intelligence/index.md)
            - [Team: Code intelligence](code-intelligence/index.md#code-intelligence-eng)
        - [Batch Changes](batch-changes/index.md)
            - [Team: Batch Changes](batch-changes/index.md#batch-changes-eng)
    - Developer Insights {#developer-insights}
        - [Jean du Plessis](../company/team/index.md#jean-du-plessis-he-him) ([Director of Engineering](roles.md#director-of-engineering))
        - [Code insights](developer-insights/code-insights/index.md)
            - [Team: Code insights](developer-insights/code-insights/index.md#code-insights-eng)
        - [Extensibility](developer-insights/extensibility/index.md)
            - [Team: Extensibility](developer-insights/extensibility/index.md#extensibility-eng)
        - [Frontend platform](developer-insights/frontend-platform/index.md)
            - [Team: Frontend platform](developer-insights/frontend-platform/index.md#frontend-platform-eng)
        - [API docs](developer-insights/api-docs/index.md)
            - [Team: API docs](developer-insights/api-docs/index.md#api-docs-eng)
    - Platform and infrastructure {#platform-and-infrastructure}
        - [Bill Creager](../company/team/index.md#bill-creager) ([Director of Engineering](roles.md#director-of-engineering))
        - [Security](security/index.md)
            - [Team: Security](security/index.md#security-eng)
        - [Distribution](distribution/index.md)
            - [Team: Distribution](distribution/index.md#distribution-eng)
        - [Core application](core-application/index.md)
            - [Team: Core application](core-application/index.md#core-application-eng)

[VP Eng team docs](vpe/index.md).

<script>
// This script injects the org chart content into each section of this page that links to a team page.
// It is similar to the script used to compile the goals in ../goals/index.md.

async function getPageOrgList(pageUrl) {
	const sectionId = pageUrl.replace(/^.*#/, '')

	const resp = await fetch(pageUrl)
	const doc = new DOMParser().parseFromString(await resp.text(), "text/html")
	const section = doc.getElementById(sectionId)
	if (!section) {
		const error = document.createElement('p')
		error.innerText = `Error generating org chart: page at ${pageUrl} has no section with ID ${sectionId}.`
		return error
	}
    return section.parentNode
}

const teamAnchors = Array.from(document.querySelectorAll('a')).filter(a => a.innerText.startsWith('Team: '))
Promise.all(
	teamAnchors.map(async a => ({
		anchor: a,
		content: await getPageOrgList(a.href),
	}))
).then(data => {
	for (const {anchor, content} of data) {
        // Replace the parent node list item
        anchor.parentNode.replaceWith(content)
	}
})
</script>
