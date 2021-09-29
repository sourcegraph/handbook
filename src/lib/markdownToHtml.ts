import { unified, Plugin } from 'unified'
import { VFile } from 'vfile'
import { Root as HastRoot } from 'hast'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeExtractToc, { Toc } from '@stefanprobst/rehype-extract-toc'
import rehypeRaw from 'rehype-raw'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypeMarkupDates } from './rehypeMarkupDates'
import { select } from 'hast-util-select'
import { toString } from 'hast-util-to-string'

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
 * For parity with Docsite, extract the title from the first H1 heading.
 * @returns
 */
const rehypeExtractTitleFromH1: Plugin = () => {
    return function transformer(tree: HastRoot, file: VFile) {
        const titleElement = select('h1', tree)
        if (titleElement) {
            file.data.title = toString(titleElement)
        }
    }
}
