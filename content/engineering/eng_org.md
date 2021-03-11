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
	- [Batch Changes](../../handbook/engineering/batch-changes/index.md)
    - [Web](../../handbook/engineering/web/index.md)
        - [Frontend platform](../../handbook/engineering/web/frontend-platform/index.md)
        - [Extensibility](../../handbook/engineering/web/extensibility/index.md)
		- [Code insights](../../handbook/engineering/web/code-insights/index.md)
	- [Security](../../handbook/engineering/security/index.md)
	- [Distribution](../../handbook/engineering/distribution/index.md)
	- [Core application](../../handbook/engineering/core-application/index.md)

## Planned organization

This is the current plan for our engineering organization and growth.

Plans can change given new information!

- [Beyang Liu](../../../company/team/index.md#beyang-liu), CTO
- [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him), [VP Engineering](roles.md#vp-engineering)
    - Global code graph {#global-code-graph}
        - FQ2 [Director of Engineering](https://jobs.lever.co/sourcegraph/92a29215-e44f-4f2e-b147-73a8cb756d09), Nick acting manager until then.
        - [Team: Search core backend](search/index.md#search-core-backend-eng)
        - [Team: Search product](search/index.md#search-product-eng)
        - [Code intelligence](code-intelligence/index.md)
            - [Team: Code intelligence](code-intelligence/index.md#code-intelligence-eng)
        - [Batch Changes](batch-changes/index.md)
            - [Team: Batch Changes](batch-changes/index.md#batch-changes-eng)
    - Web org {#web}
        - [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Director of Engineering](roles.md#director-of-engineering))
        - [Code insights](web/code-insights/index.md)
            - [Team: Code insights](web/code-insights/index.md#code-insights-eng)
        - [Extensibility](web/extensibility/index.md)
            - [Team: Extensibility](web/extensibility/index.md#extensibility-eng)
        - [Frontend platform](web/frontend-platform/index.md)
            - [Team: Frontend platform](web/frontend-platform/index.md#frontend-platform-eng)
        - [Google for Code](web/google-for-code/index.md)
            - [Team: Google for Code](web/google-for-code/index.md#google-for-code-eng)
    - Platform and infrastructure {#platform-and-infrastructure}
        - B.C. starting 2020-03-22
        - [Security](security/index.md)
            - [Team: Security](security/index.md#security-eng)
        - [Distribution](distribution/index.md)
            - [Team: Distribution](distribution/index.md#distribution-eng)
        - [Team: Core application](core-application/index.md#core-application-eng)

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
