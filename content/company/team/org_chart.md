# Org chart

The org chart is generated automatically. [Need to edit it?](#how-to-edit)

<div id="org-chart-loading">
	Generating org chart...
	<br/>
	<small>If the org chart does not appear, please <a href="https://github.com/sourcegraph/about/issues">report this issue</a> and include the output from your browser's devtools JavaScript console.</small>
</div>

## [Engineering](../../engineering/eng_org.md#current-organization)

[Future engineering org chart and hiring plan](../../engineering/eng_org.md#planned-organization)

## [Product](../../product/index.md#members)

## [Customer Support](../../support/index.md#the-team)

## [Customer Engineering](../../ce/index.md#current-team-members)

## [Marketing](../../marketing/index.md#members)

## Operations
<!-- When updating the ops team list below, please also update handbook/index.md. -->
### [People Ops](../../people-ops/index.md#people-ops-team-members)
### [Business Operations & Strategy](../../ops/bizops/index.md#members)
### [Finance & Accounting](../../ops/finance/index.md#members)
### [Legal](../../ops/legal/index.md#members)
### [Tech Ops](../../ops/tech-ops/index.md#members)

## Sales
<!-- When updating the engineering team list below, please also update handbook/index.md. -->
### [Sales team](../../sales/index.md#members)
### [SDR team](../../sales/sdrteam/index.md#members)
### [Sales strategy & operations](../../sales/sales-ops/index.md#members)

## Other teams: TODO

Not all teams are listed here yet.

---

## How to edit

This org chart is generated automatically based on the contents of other handbook pages.

1. To add a team, [edit this page](https://github.com/sourcegraph/about/edit/main/company/team/org_chart.md) and add a link to the section of the team's page that lists the members (such as `### [My team](../../myteam/index.md#members)`).
1. To edit a team, edit the linked section on the team's page. In the example above, you'd edit the `Members` section of `../../myteam/index.md`. Everything in that section until the next heading is displayed on this page.
1. To add any other text or structure to this page, just insert it as you would normally. Only 3rd-level heading links (lines that start with `###` and that have a link) are treated specially; all other content is preserved.

<script>
// This script injects the org chart content into each section of this page that links to a team page.
// It is similar to the script used to compile the goals in ../goals/index.md.

async function getPageOrgChart(pageUrl) {
	const sectionId = pageUrl.replace(/^.*#/, '')

	const resp = await fetch(pageUrl)
	const doc = new DOMParser().parseFromString(await resp.text(), "text/html")
	const section = doc.getElementById(sectionId)
	if (!section) {
		const error = document.createElement('p')
		error.innerText = `Error generating org chart: page at ${pageUrl} has no section with ID ${sectionId}.`
		return error
	}

	const wrapper = document.createElement('section')
	const iterator = doc.createNodeIterator(doc, NodeFilter.SHOW_ELEMENT, () => NodeFilter.FILTER_ACCEPT)
	let curNode
	let orgChartStarted = false
	while (curNode = iterator.nextNode()) {
		if (curNode instanceof HTMLHeadingElement && curNode.id === sectionId) {
			orgChartStarted = true
			continue
		}
		if (orgChartStarted) {
			// End at next heading.
			if (curNode instanceof HTMLHeadingElement) {
				break
			}

			wrapper.appendChild(curNode)
		}
	}
	return wrapper
}

const sectionHeaders = Array.from(document.querySelectorAll('h2,h3')).filter(section => Boolean(section.querySelector('a[href]:not([aria-hidden])')))
Promise.all(
	sectionHeaders.map(async sectionHeader => ({
		header: sectionHeader,
		content: await getPageOrgChart(sectionHeader.querySelector('a[href]:not([aria-hidden])').href),
	}))
).then(sections => {
	const loading = document.getElementById('org-chart-loading')
	loading.innerHTML = '' // clear

	for (const {header, content} of sections) {
		header.parentNode.insertBefore(content, header.nextSibling)

		// Make header link to top of page, not the members section.
		const headerLink = header.querySelector('a[href]:not([aria-hidden])')
		const headerLinkUrl = new URL(headerLink.href)
		headerLinkUrl.hash = ''
		headerLink.href = headerLinkUrl.toString()
	}
})

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
		content: await getPageOrgChart(a.href),
	}))
).then(data => {
	for (const {anchor, content} of data) {
        // Replace the parent node list item
        anchor.parentNode.replaceWith(content)
	}
})
</script>
