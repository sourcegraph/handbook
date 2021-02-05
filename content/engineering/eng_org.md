# Engineering org

This page documents our current and planned future engineering org structure. Plans can change!

## Philosophy

Our engineering organization is divided into mission based teams that contain the necessary cross-functional skillsets to achieve the desired mission. The leaders of each team (at every layer) is responsible for ensuring appropriate cross-team collaboration happens when necessary.

## Transferring teams

If you are already at Sourcegraph and see a current or future opportunity that you're interested in, please tell your manager. Your manager will chat with you to understand what you want and then propose next steps. Team transfers need to be approved by the [VP of Engineering](roles.md#vp-engineering).

## Current organization

- [Beyang Liu](index.md#beyang-liu), CTO
- [Nick Snyder](index.md#nick-snyder-he-him), [VP Engineering](../../handbook/engineering/roles.md#vp-engineering)
	- [Search](../../handbook/engineering/search/index.md)
	- [Code intelligence](../../handbook/engineering/code-intelligence/index.md)
	- [Campaigns](../../handbook/engineering/campaigns/index.md)
    - [Web](../../handbook/engineering/web/index.md)
        - [Frontend platform](../../handbook/engineering/web/index.md)
        - [Extensibility](../../handbook/engineering/web/index.md)
		- [Code insights](../../handbook/engineering/code-insights/index.md)
	- [Security](../../handbook/engineering/security/index.md)
	- [Distribution](../../handbook/engineering/distribution/index.md)
	- [Cloud](../../handbook/engineering/cloud/index.md)

## Planned organization

This is the current plan for our engineering organization and growth.

Hiring plans are neither targets nor constraints, they are merely forecasts given current information. They should be continuously kept up-to-date.

- If we find an awesome candidate for a role we weren't planning on hiring for until later, and we think we have the capacity to onboard that person now, we'll hire that awesome candidate now!
- If we planned to grow a team faster, but we're seeing signals that we need to slow down growth (for example: new hires having difficulty onboarding, team doesn't have clear goals or progress), then we will slow or pause that team's hiring until those issues are resolved.

Plans can change!

- [Beyang Liu](../../../company/team/index.md#beyang-liu), CTO
- [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him), [VP Engineering](roles.md#vp-engineering)
    - Search and replace (WIP name) {#search-and-replace}
        - FQ3 Director of Engineering, Nick acting manager until then.
        - [Team: Search core backend](search/index.md#search-core-backend-eng)
        - [Team: Search product](search/index.md#search-product-eng)
        - Code intelligence
            - [Team: Code intelligence](code-intelligence/index.md#code-intelligence-eng)
        - Campaigns
            - [Team: Campaigns](campaigns/index.md#campaigns-eng)
    - Web (WIP name) {#web}
        - [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Engineering Manager](roles.md#engineering-manager))
        - [Team: Frontend platform](web/index.md#frontend-platform-eng)
        - [Team: Extensibility](web/index.md#extensibility-eng)
        - Code insights
            - [Team: Code insights](code-insights/index.md#code-insights-eng)
    - Platform and infrastructure {#platform-and-infrastructure}
        - [FQ1 Director of Engineering](https://jobs.lever.co/sourcegraph/8fcbaade-e511-4d93-bd9b-9cc7ec3438af), Nick acting manager until then.
        - Security
            - [Team: Security](security/index.md#security-eng)
        - Distribution
            - [Team: Distribution](distribution/index.md#distribution-eng)
        - [Team: Core application](cloud/index.md#core-application-eng)
        - [Team: Backend platform](cloud/index.md#backend-platform-eng)

Known gaps in current plan:

- Right now the following things are a bit unclearly owned between Cloud and Distribution, and we need to scale our ability invest more in all of these things this year:
  - Better customer deployment/upgrades
  - Better dev build and CI (speed, reliability, fast deploys to prod)
  - Cloud uptime, reliability, scaling, observability

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
