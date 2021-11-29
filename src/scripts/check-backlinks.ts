import { buildBacklinks, loadAllPages, parsePage } from "../lib/api";

async function checkbackLinks() {
    console.log('Loading all pages...');
    const allPages = await loadAllPages()

    console.log('Parsing all pages...')
    const parsedPages = await Promise.all(allPages.map(page => parsePage(page)))

    // Populates the `backlinks` field of each page.
    console.log('Populating all backlinks...')
    buildBacklinks(parsedPages)

    const pagesWithoutBacklinks = parsedPages.filter(page => page.backlinks.length === 0)

    if (pagesWithoutBacklinks.length > 0) {
        throw new Error(`Pages without backlinks:\n${pagesWithoutBacklinks.map(page => `- ${page.slugPath}: ${page.title || 'Untitled'}\n`).join()}`)
    }
}

checkbackLinks().catch(error => {
    console.error(error.message)
    process.exit(1)
})


