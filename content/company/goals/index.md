# Company goals

Our company goals are public.

See "[Guidelines for goals](guidelines.md)" for more information about how we choose and use goals at Sourcegraph. Need to [edit the goals on this page](#how-to-edit)?

[**Sourcegraph OKR Tracker**](https://docs.google.com/spreadsheets/d/1pNXVev2JtYC94lB1NIfsc8OqyYnnSFn7p5PYFcniblE/edit#gid=1699297878)


<div id="goals-loading">
	Compiling goals...
	<br/>
	<small>If the goals do not appear, please <a href="https://github.com/sourcegraph/about/issues">report this issue</a> and include the output from your browser's devtools JavaScript console.</small>
</div>

<!-- When updating the engineering team list below, please also update handbook/index.md. -->

### [People Ops](../../people-ops/index.md#goals)

### [Business Operations & Strategy](../../ops/bizops/index.md#goals)

### [Finance & Accounting](../../ops/finance/index.md#goals)

### [Legal](../../ops/legal/index.md#goals)

## Engineering

<!-- When updating the engineering team list below, please also update handbook/index.md. -->

### [Batch Changes](../../engineering/batch-changes/goals.md#goals)

### [Core application](../../engineering/core-application/goals.md#goals)

### [Code intelligence](../../engineering/code-intelligence/goals.md#goals)

### [Distribution](../../engineering/distribution/goals.md#goals)

### [Search](../../engineering/search/goals.md#goals)

### [Security](../../engineering/security/goals.md#goals)

### [Frontend platform](../../engineering/developer-insights/frontend-platform/goals.md#goals)

### [Extensibility](../../engineering/developer-insights/extensibility/goals.md#goals)

#### [Code insights](../../engineering/developer-insights/code-insights/goals.md#goals)

## [Product](../../product/goals.md)

---

## How to edit

This page is generated automatically based on the contents of other handbook pages.

1. To add a team's goals, [edit this page](https://github.com/sourcegraph/about/edit/master/company/goals/index.md) and add a link to the section of the team's page that lists the goals (such as `### [My team](../../myteam/index.md#goals)`). If the entire page is about goals, omit the section from the URL (for example, omit `#goals`).
1. To edit a team's goals, edit the linked section on the team's page. In the example above, you'd edit the `Goals` section of `../../myteam/index.md`. Everything in that section until the next same-level heading is displayed on this page.
1. To add any other text or structure to this page, just insert it as you would normally. Only 3rd-level heading links (lines that start with `###` and that have a link) are treated specially; all other content is preserved.

<script>
// This script injects the goals content into each section of this page that links to a team page.
// It is similar to the script used to generate the org chart in ../team/org_chart.md.

const getHeadingLevel = heading => heading instanceof HTMLHeadingElement ? parseInt(heading.tagName.slice(1), 10) : undefined

const cloneHeading = (origHeading, level) => {
	const newHeading = document.createElement(`h${level}`)
	newHeading.innerHTML = origHeading.innerHTML
	return newHeading
}

async function getPageSectionContent(pageUrl, level) {
	const sectionId = pageUrl.includes('#') ? pageUrl.replace(/^.*#/, '') : null

	const resp = await fetch(pageUrl)
	const doc = new DOMParser().parseFromString(await resp.text(), "text/html")
	const section = sectionId ? doc.getElementById(sectionId) : doc.querySelector('.markdown-body > h1')
	if (!section) {
		const error = document.createElement('p')
		error.innerText = `Error compiling goals: page at ${pageUrl} has no ${sectionId ? `section with ID ${sectionId}` : 'content'}.`
		return error
	}

	const wrapper = document.createElement('section')
	const iterator = doc.createNodeIterator(doc, NodeFilter.SHOW_ELEMENT, () => NodeFilter.FILTER_ACCEPT)
	let curNode
	let started = false
	let startLevel = undefined
	let demoteByLevels = undefined
	while (curNode = iterator.nextNode()) {
		if (curNode instanceof HTMLHeadingElement && sectionId ? curNode.id === sectionId : curNode === section) {
			started = true
			startLevel = getHeadingLevel(curNode)
			demoteByLevels = level - startLevel
			continue
		}
		if (started) {
			if (curNode instanceof HTMLHeadingElement) {
				const curNodeLevel = getHeadingLevel(curNode)

				if (curNodeLevel <= startLevel) {
					// End at next same-level heading.
					break
				}

				// Demote headings so that the injected content's headings are smaller.
				const demotedLevel = Math.min(curNodeLevel + demoteByLevels, 6)
				curNode = cloneHeading(curNode, demotedLevel)
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
		content: await getPageSectionContent(
			sectionHeader.querySelector('a[href]:not([aria-hidden])').href,
			getHeadingLevel(sectionHeader)
		),
	}))
).then(sections => {
	const loading = document.getElementById('goals-loading')
	loading.innerHTML = '' // clear

	for (const {header, content} of sections) {
		header.parentNode.insertBefore(content, header.nextSibling)
	}
})
</script>
