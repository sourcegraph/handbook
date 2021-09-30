import * as url from 'url'

import rehypeExtractToc, { Toc } from '@stefanprobst/rehype-extract-toc'
import { Node } from 'hast'
import { select } from 'hast-util-select'
import { HastNode } from 'hast-util-select/lib/types'
import { toString } from 'hast-util-to-string'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeUrl, { UrlMatch } from 'rehype-url-inspector'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified, Plugin } from 'unified'
import { VFile } from 'vfile'

import { rehypeMarkupDates } from './rehypeMarkupDates'

export default async function markdownToHtml(markdown: string): Promise<{ content: string; title?: string; toc: Toc }> {
    const result = await unified()
        // Parse markdown
        .use(remarkParse)
        .use(remarkGfm)
        // Convert Markdown AST -> HTML AST
        .use(remarkRehype, { allowDangerousHtml: true })
        // Parse Markdown that was included _within_ HTML
        .use(rehypeRaw)
        .use(rehypeMarkupDates)
        // Trim .md suffix from links
        .use(rehypeUrl, {
            selectors: ['a[href]'],
            inspectEach: rewriteLinkUrl,
        })
        // Add IDs to headings
        .use(rehypeSlug)
        // Extract title from H1 and attach as `vfile.data.title`
        .use(rehypeExtractTitleFromH1)
        // Add ToC metadata to result
        .use(rehypeExtractToc)
        .use(rehypeAutolinkHeadings, { properties: { class: 'anchor', ariaHidden: true, tabIndex: -1 } })
        .use(rehypeStringify)
        .process(markdown)

    return { content: result.toString(), title: result.data.title as string, toc: result.data.toc as Toc }
}

/**
 * Rewrite links to `.md` files and to `index.md` files.
 */
function rewriteLinkUrl(match: UrlMatch): void {
    // Use lenient URL parser since the URL can be relative. Make sure to preserve hash fragment.
    const parsedUrl: url.UrlObject = url.parse(match.url)
    if (parsedUrl.hostname) {
        // Ignore absolute links
        return
    }
    // Rewrite index.md references to point to the directory
    if (parsedUrl.pathname?.match(/(^|\/)index\.md$/)) {
        parsedUrl.pathname = url.resolve(parsedUrl.pathname, '.') || '.'
    }
    parsedUrl.pathname = parsedUrl.pathname
        // Remove .md suffix
        ?.replace(/\.md$/, '')
        // Our routing currently redirects trailing slash to non-trailing slash anyway, so trim it
        // earlier to save a redirect
        .replace(/\/$/, '')

    match.node.properties!.href = url.format(parsedUrl)
}

/**
 * For parity with Docsite, extract the title from the first H1 heading.
 */
const rehypeExtractTitleFromH1: Plugin = () =>
    function transformer(tree: Node, file: VFile) {
        const titleElement = select('h1', tree as HastNode)
        if (titleElement) {
            file.data.title = toString(titleElement)
        }
    }
