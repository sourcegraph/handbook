import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeExtractToc, { Toc } from '@stefanprobst/rehype-extract-toc'
import rehypeRaw from 'rehype-raw'
import { rehypeMarkupDates } from './rehypeMarkupDates'

export default async function markdownToHtml(markdown: string): Promise<{ content: string; toc: Toc }> {
    const result = await unified()
        // Parse markdown
        .use(remarkParse)
        // Convert Markdown AST -> HTML AST
        .use(remarkRehype, { allowDangerousHtml: true })
        // Parse Markdown that was included _within_ HTML
        .use(rehypeRaw)
        .use(rehypeMarkupDates)
        // Add IDs to headings
        .use(rehypeSlug)
        // Add ToC metadata to result
        .use(rehypeExtractToc)
        .use(rehypeStringify)
        .process(markdown)

    return { content: result.toString(), toc: result.data.toc as Toc }
}
