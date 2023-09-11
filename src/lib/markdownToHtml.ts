import * as url from 'url'

import * as _rehypeSection from '@agentofuser/rehype-section'
import rehypeExtractToc, { Toc } from '@stefanprobst/rehype-extract-toc'
import { Node, Root } from 'hast'
import { isElement } from 'hast-util-is-element'
import { select } from 'hast-util-select'
import { Node as HastNode } from 'hast-util-select/lib/types'
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
import remarkRehype from 'remark-rehype'
import { unified, Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { VFile } from 'vfile'

import * as generatedMarkdown from './generatedMarkdown'
import { rehypeGoLinks } from './rehypeGoLinks'
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
    markdown = insertNotebooks(markdown)
    const result = await unified()
        // Parse markdown
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkSpecialNoteBlocks)
        .use(remarkSpecialWarningBlocks)
        .use(remarkSpecialImportantBlocks)
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
        .use(rehypeGoLinks)
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

    // Rewrite links on non-index pages to be relative, excluding intentionally absolute oness
    if (parsedUrl.pathname && !isOnIndexPage) {
        if (!parsedUrl.pathname.startsWith('/')) {
            parsedUrl.pathname = `../${parsedUrl.pathname}`
        }
    }

    // Rewrite index.md references to point to the directory
    if (parsedUrl.pathname?.match(/(^|\/)index\.md$/)) {
        parsedUrl.pathname = url.resolve(parsedUrl.pathname, '.') || '.'
    }

    // If the link is to an index with an anchor, navigate to the parent
    if (parsedUrl.pathname === '.') {
        parsedUrl.pathname = `../${parsedUrl.pathname}`
    }

    parsedUrl.pathname = parsedUrl.pathname
        // Remove .md suffix
        ?.replace(/\.md$/, '')

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
 * Note blockquote syntax with any blockquote starting with
 * "> [!NOTE]" is converted to <aside class="note">...</aside>.
 */
const remarkSpecialNoteBlocks: Plugin<[], MdastRoot> = () =>
    function (tree) {
        for (const node of tree.children) {
            if (isSpecialBlockquote(node, '[!NOTE]', 'Note:')) {
                // TODO: This overwrites the `hProperties` to add the class
                // name. Improve it by adding the class name while respecting
                // existing `hProperties` or existing classes.
                node.data = { ...node.data, hName: 'aside', hProperties: { class: 'note' } }
            }
        }
    }

/**
 * Warning blockquote syntax with any blockquote starting with
 * "> [!WARNING]" is converted to <aside class="warning">...</aside>.
 */
const remarkSpecialWarningBlocks: Plugin<[], MdastRoot> = () =>
    function (tree) {
        for (const node of tree.children) {
            if (isSpecialBlockquote(node, '[!WARNING]', 'Warning:')) {
                // TODO: This overwrites the `hProperties` to add the class
                // name. Improve it by adding the class name while respecting
                // existing `hProperties` or existing classes.
                node.data = { ...node.data, hName: 'aside', hProperties: { class: 'warning' } }
            }
        }
    }

/**
 * Warning blockquote syntax with any blockquote starting with
 * "> [!IMPORTANT]" is converted to <aside class="important">...</aside>.
 */
const remarkSpecialImportantBlocks: Plugin<[], MdastRoot> = () =>
    function (tree) {
        for (const node of tree.children) {
            if (isSpecialBlockquote(node, '[!IMPORTANT]', 'Important:')) {
                // TODO: This overwrites the `hProperties` to add the class
                // name. Improve it by adding the class name while respecting
                // existing `hProperties` or existing classes.
                node.data = { ...node.data, hName: 'aside', hProperties: { class: 'important' } }
            }
        }
    }

/**
 * Wraps all `<table>`s in `<div class="table-responsive">` for horizontal scrolling.
 */
// eslint-disable-next-line unicorn/consistent-function-scoping
const rehypeResponsiveTables: Plugin<[], Root> = () => tree => {
    visit(tree, (node, index, parent) => {
        if (isElement(node, 'table')) {
            parent!.children[index!] = h('div.table-responsive', node)
        }
    })
}

function isSpecialBlockquote(node: MdastContent, startsWith: string, replaceWith: string): boolean {
    if (node.type !== 'blockquote') {
        return false
    }
    const child = node.children[0]
    if (child.type === 'paragraph') {
        const text = child.children[0]
        if (text.type === 'text' && text.value.startsWith(startsWith)) {
            child.children.unshift({
                type: 'strong',
                children: [{ type: 'text', value: replaceWith }],
            })
            text.value = text.value.replace(startsWith, '')
            return true
        }
    }
    return false
}

function embedNotebook(id: string): string {
    return `<div class="border notebook"><iframe src="https://sourcegraph.com/embed/notebooks/${String(
        id
    )}?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups"></iframe></div>`
}

const replaceNotebook = (match: string, group1: string, group2: string): string => embedNotebook(group2)

const replaceMatchedTeam = async (match: string, group1: string, group2: string): Promise<string> =>
    generatedMarkdown.generateReportingStructure(group2)

const replaceMatchedProductTeam = async (match: string, group1: string, group2: string): Promise<string> =>
    generatedMarkdown.generateTeamOrgChart(group2)

const replaceMatchedProductTeamLeads = async (match: string, group1: string, group2: string): Promise<string> =>
    generatedMarkdown.generateProductTeamLeadsList(group2)

const replaceMatchedUseCaseFeatureList = async (match: string, group1: string, group2: string): Promise<string> =>
    generatedMarkdown.generateUseCaseFeatureList(group2)

const replaceMatchedProductTeamUseCaseList = async (match: string, group1: string, group2: string): Promise<string> =>
    generatedMarkdown.generateProductTeamUseCaseList(group2)

const replaceMatchedGuildRoster = async (match: string, group1: string, group2: string): Promise<string> =>
    generatedMarkdown.generateGuildRoster(group2)

const replaceAsync = async (
    markdown: string,
    regex: RegExp,
    replacer: (string: string, ...args: string[]) => Promise<string>
): Promise<string> => {
    const promises: Promise<string>[] = []
    markdown.replace(regex, (match: string, ...args: string[]): string => {
        const promise = replacer(match, ...args)
        promises.push(promise)
        return match
    })
    const data = await Promise.all(promises)
    return markdown.replace(regex, (): string => data.shift() as string)
}

function insertNotebooks(markdown: string): string {
    if (markdown.match(/{{notebook:/)) {
        markdown = markdown.replace(/({{notebook:)(\w+==)(}})/gi, replaceNotebook)
    }
    return markdown
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

        markdown = await replaceAsync(markdown, /({{generator:reporting_structure.)(\w+)(}})/gi, replaceMatchedTeam)
        markdown = await replaceAsync(markdown, /({{generator:product_team.)(\w+)(}})/gi, replaceMatchedProductTeam)
        markdown = await replaceAsync(
            markdown,
            /({{generator:product_team_leads.)(\w+)(}})/gi,
            replaceMatchedProductTeamLeads
        )
        markdown = await replaceAsync(
            markdown,
            /({{generator:product_team_leads.)(\w+)(}})/gi,
            replaceMatchedProductTeamLeads
        )
        markdown = await replaceAsync(
            markdown,
            /({{generator:product_team_use_case_list.)(\w+)(}})/gi,
            replaceMatchedProductTeamUseCaseList
        )
        markdown = await replaceAsync(
            markdown,
            /({{generator:use_case_feature_list.)(\w+)(}})/gi,
            replaceMatchedUseCaseFeatureList
        )
        markdown = markdown.replace(
            /{{generator:glossary}}/gi,
            await Promise.resolve(generatedMarkdown.generateGlossary())
        )
        markdown = markdown.replace(
            /{{generator:deployment_options}}/gi,
            await Promise.resolve(generatedMarkdown.generateDeploymentOptions())
        )
        markdown = await replaceAsync(markdown, /({{generator:guild_roster.)(\w+)(}})/gi, replaceMatchedGuildRoster)
    }
    return markdown
}
