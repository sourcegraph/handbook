import * as path from 'path'
import * as url from 'url'

import * as _rehypeSection from '@agentofuser/rehype-section'
import rehypeExtractToc, { Toc } from '@stefanprobst/rehype-extract-toc'
import { Node, Root } from 'hast'
import { isElement } from 'hast-util-is-element'
import { select } from 'hast-util-select'
import { HastNode } from 'hast-util-select/lib/types'
import { toString } from 'hast-util-to-string'
import { h } from 'hastscript'
import { Root as MdastRoot, Content as MdastContent } from 'mdast'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeUrl, { UrlMatch } from 'rehype-url-inspector'
import remarkGfm from 'remark-gfm'
import remarkGitHub from 'remark-github'
import remarkParse from 'remark-parse'
import remarkRehype, { HastRoot } from 'remark-rehype'
import { unified, Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { VFile } from 'vfile'

import * as generatedMarkdown from './generatedMarkdown'
import { rehypeMarkupDates } from './rehypeMarkupDates'
import { rehypeSlackChannels } from './rehypeSlackChannels'
import { rehypeSmartypants } from './rehypeSmartypants'

// Workaround for https://github.com/agentofuser/rehype-section/issues/85
const { default: rehypeSection } = _rehypeSection

const urlSelectors = [
    'a[href]',
    'img[src]',
    'video[src]',
    'audio[src]',
    'source[src]',
    'track[src]',
    'object[data]',
    'link[href]',
    'script[src]',
]

export default async function markdownToHtml(
    markdown: string,
    contextUrlPath: string,
    isIndexPage: boolean
): Promise<{ content: string; title?: string; toc: Toc; internalLinks?: string[] }> {
    // Pre-insert generated markdown
    markdown = await Promise.resolve(insertGeneratedMarkdown(markdown))
    const result = await unified()
        // Parse markdown
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkSpecialNoteBlocks)
        // Automatically link and shorten GitHub issues, PRs, repos etc like on GitHub
        .use(remarkGitHub, {
            mentionStrong: false,
            repository: 'sourcegraph/sourcegraph', // Default repository if only issue/PR number is used
            buildUrl: (values, defaultBuildUrl) => {
                if (values.type === 'mention') {
                    if (values.user.startsWith('sourcegraph/')) {
                        // Team handle. remark-github doesn't handle those correctly natively.
                        const [, teamName] = values.user.split('/')
                        return `https://github.com/orgs/sourcegraph/teams/${teamName}`
                    }
                    // When @user handles are used in the handbook, they often mean a Slack handle, not a GitHub username
                    return false
                }
                return defaultBuildUrl(values)
            },
        })
        // Convert Markdown AST -> HTML AST
        .use(remarkRehype, { allowDangerousHtml: true })
        // Parse Markdown that was included _within_ HTML
        .use(rehypeRaw)
        .use(rehypeSmartypants, { backticks: false, dashes: 'oldschool' })
        .use(rehypeMarkupDates)
        .use(rehypeSlackChannels)
        // Wrap all tables in Bootstrap's responsive helper to make them scroll instead of overflowing
        .use(rehypeResponsiveTables)
        // Trim .md suffix from links
        .use(rehypeUrl, {
            selectors: urlSelectors,
            inspectEach: urlMatch => rewriteLinkUrl(urlMatch, contextUrlPath, isIndexPage),
        })
        // Apply syntax highlighting for code blocks
        .use(rehypeHighlight, { ignoreMissing: true })
        // Add IDs to headings
        .use(rehypeSlug)
        // Wrap sections (as denoted by headings) in <section> elements
        .use<[], Root, Root>(rehypeSection)
        // Extract title from H1 and attach as `vfile.data.title`
        .use(rehypeExtractTitleFromH1)
        // Add ToC metadata to result
        .use(rehypeExtractToc)
        .use(rehypeAutolinkHeadings, { properties: { class: 'anchor', ariaHidden: true, tabIndex: -1 } })
        .use(rehypeStringify)
        .process(markdown)

    return {
        content: result.toString(),
        title: result.data.title as string,
        toc: result.data.toc as Toc,
        internalLinks: (result.data.internalLinks as string[]) ?? [],
    }
}

/**
 * Rewrite links to `.md` files and to `index.md` files.
 */
function rewriteLinkUrl(match: UrlMatch, contextUrlPath: string, isOnIndexPage: boolean): void {
    // Use lenient URL parser since the URL can be relative. Make sure to preserve hash fragment.
    const parsedUrl: url.UrlObject = url.parse(match.url)
    if (parsedUrl.hostname) {
        // Ignore absolute links
        return
    }

    // index.md files are rendered as the output for the *parent* folder.
    // Therefor links within the index.md files need to be rewritten to be relative to the parent folder,
    // instead of relative to the index.md file.
    if (
        parsedUrl.pathname &&
        !parsedUrl.pathname?.startsWith('/') &&
        isOnIndexPage &&
        contextUrlPath !== '' &&
        contextUrlPath !== '/'
    ) {
        const baseName = path.posix.basename(contextUrlPath)
        parsedUrl.pathname = `./${baseName}/${parsedUrl.pathname}`
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

    if (match.node.tagName === 'a') {
        const formattedInternalUrl = url.format(url.resolve(contextUrlPath, parsedUrl.pathname || ''))
        const vfileData = match.file.data as VFile['data'] & { internalLinks?: string[] }
        if (!vfileData.internalLinks) {
            vfileData.internalLinks = []
        }
        vfileData.internalLinks.push(formattedInternalUrl)
    }
    match.node.properties![match.propertyName!] = url.format(parsedUrl)
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

/**
 * Note blockquote syntax, originally from docsite. Any blockquote starting with
 * "> NOTE:" is converted to <aside class="note">...</aside>.
 */
const remarkSpecialNoteBlocks: Plugin<[], MdastRoot> = () =>
    function (tree) {
        for (const node of tree.children) {
            if (isSpecialNoteBlockquote(node)) {
                // TODO: This overwrites the `hProperties` to add the class
                // name. Improve it by adding the class name while respecting
                // existing `hProperties` or existing classes.
                node.data = { ...node.data, hName: 'aside', hProperties: { class: 'note' } }
            }
        }
    }

/**
 * Wraps all `<table>`s in `<div class="table-responsive">` for horizontal scrolling.
 */
// eslint-disable-next-line unicorn/consistent-function-scoping
const rehypeResponsiveTables: Plugin<[], HastRoot> = () => tree => {
    visit(tree, (node, index, parent) => {
        if (isElement(node, 'table')) {
            parent!.children[index!] = h('div.table-responsive', node)
        }
    })
}

function isSpecialNoteBlockquote(node: MdastContent): boolean {
    if (node.type !== 'blockquote') {
        return false
    }
    const child = node.children[0]
    if (child.type === 'paragraph') {
        const text = child.children[0]
        if (text.type === 'text') {
            return text.value.startsWith('NOTE:')
        }
    }
    return false
}

async function insertGeneratedMarkdown(markdown: string): Promise<string> {
    if (markdown.match(/{{generator:/)) {
        markdown = markdown.replace(
            /{{generator:maturity_definitions}}/gi,
            await Promise.resolve(generatedMarkdown.generateMaturityDefinitions())
        )
        markdown = markdown.replace(
            /{{generator:feature_maturity_levels}}/gi,
            await Promise.resolve(generatedMarkdown.generateFeatureMaturityLevels())
        )
        markdown = markdown.replace(
            /{{generator:feature_code_host_compatibilities}}/gi,
            await Promise.resolve(generatedMarkdown.generateFeatureCodeHostCompatibilities())
        )
        markdown = markdown.replace(
            /{{generator:code_hosts_list}}/gi,
            await Promise.resolve(generatedMarkdown.generateCodeHostsList())
        )
        markdown = markdown.replace(
            /{{generator:team_members_list}}/gi,
            await Promise.resolve(generatedMarkdown.generateTeamMembersList())
        )
        markdown = markdown.replace(
            /{{generator:product_teams_list}}/gi,
            await Promise.resolve(generatedMarkdown.generateProductTeamsList())
        )
    }
    return markdown
}
