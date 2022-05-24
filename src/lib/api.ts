import fs from 'fs/promises'
import { join } from 'path'

import { Toc } from '@stefanprobst/rehype-extract-toc'
import matter from 'gray-matter'

import { CONTENT_FOLDER } from './constants'
import getAllPages from './getAllPages'
import markdownToHtml from './markdownToHtml'

export interface Page {
    /**
     * The location of the source file, relative to `CONTENT_FOLDER`.
     */
    path: string

    /**
     * URL path (possibly with subdirectories) where the page is located.
     */
    slugPath: string

    /**
     * The last part of the slug path.
     */
    fileSlug: string

    /**
     * Indicates if the source file is an `index.md` file (in any subdirectory).
     */
    isIndexPage: boolean
}

export interface LoadedPage extends Page {
    body: string
    frontMatter?: Record<string, any>
}

export interface ParsedPage extends LoadedPage {
    title?: string
    toc: Toc
    html: string
    internalLinks: string[]
    backlinks: string[]
}

const pagesDirectory = join(process.cwd(), CONTENT_FOLDER)

export async function getAllPageSlugPaths(): Promise<string[]> {
    const allPages = await getAllPages(pagesDirectory)
    return allPages.map(page => page.slugPath)
}

async function loadFileBySlugPath(slugPath: string): Promise<LoadedPage> {
    const relativePathForIndexPage = join(slugPath, 'index.md')
    const fullPathForIndexPage = join(pagesDirectory, relativePathForIndexPage)
    try {
        const body = await fs.readFile(fullPathForIndexPage, 'utf8')
        return {
            body,
            path: relativePathForIndexPage,
            slugPath,
            fileSlug: getLastSlugPart(slugPath),
            isIndexPage: true,
        }
    } catch {
        const relativePathForPage = `${slugPath}.md`
        const fullPathForPage = join(pagesDirectory, relativePathForPage)
        const body = await fs.readFile(fullPathForPage, 'utf8')
        return {
            body,
            path: relativePathForPage,
            slugPath,
            fileSlug: getLastSlugPart(slugPath),
            isIndexPage: false,
        }
    }
}

export async function getPageBySlugPath(slug: string, fields: string[] = []): Promise<LoadedPage> {
    const page = await loadFileBySlugPath(slug)
    const { data, content } = matter(page.body)

    return { ...page, frontMatter: data, body: content }
}

export async function loadAllPages(fields: string[] = []): Promise<LoadedPage[]> {
    const slugs = await getAllPageSlugPaths()
    const pages = slugs.map(slug => getPageBySlugPath(slug, fields))
    // sort pages by date in descending order
    // .sort((page1, page2) => (page1.date > page2.date ? -1 : 1))
    return Promise.all(pages)
}

export interface DirectoryNode<P extends Page = Page> {
    name: string
    indexPage?: P
    pages: P[]
    parent?: DirectoryNode<P>
    subdirectories: DirectoryNode<P>[]
}

export function buildBacklinks(pages: ParsedPage[]): void {
    for (const page of pages) {
        for (let link of page.internalLinks) {
            // Trim ending slash.
            // TODO: this should be handled earlier in the process.
            link = link.replace(/\/$/, '')

            if (link === page.slugPath) {
                // Skip self-links (usually links to a section)
                // TODO: this should be handled earlier in the process.
                continue
            }
            const linkedPage = pages.find(page => page.slugPath === link)

            if (!linkedPage) {
                // TODO: collect dead links and report them elsewhere.
                // console.error(`Dead link: "${page.slugPath}" -> "${link}"`)
                continue
            }
            if (!linkedPage.backlinks.includes(page.slugPath)) {
                linkedPage.backlinks.push(page.slugPath)
            }
        }
    }
}

export function buildPageTree<P extends Page = Page>(
    pages: P[]
): { tree: DirectoryNode<P>; nodes: DirectoryNode<P>[] } {
    const tree: DirectoryNode<P> = {
        name: '',
        pages: [],
        subdirectories: [],
    }
    const nodes: DirectoryNode<P>[] = []

    // Sort pages alphabetically by name
    const sortedPages = pages.sort((page1, page2) =>
        getLastSlugPart(page1.slugPath) > getLastSlugPart(page2.slugPath) ? 1 : -1
    )

    for (const page of sortedPages) {
        const slugPathParts = page.slugPath.split('/')

        // For index pages, the directory path is the entire slug path. For all
        // other pages, the directory path is the slug path excluding the last
        // part (because the last part is the "file" name).
        const directoryPathParts = page.isIndexPage ? slugPathParts : slugPathParts.slice(0, -1)
        const parentDirectory = findOrCreateDirectoryNode(tree, directoryPathParts)

        if (!nodes.includes(parentDirectory)) {
            nodes.push(parentDirectory)
        }

        if (page.isIndexPage) {
            parentDirectory.indexPage = page
        } else {
            parentDirectory.pages.push(page)
        }
    }

    return { tree, nodes }
}

function findOrCreateDirectoryNode<P extends Page = Page>(node: DirectoryNode<P>, path: string[]): DirectoryNode<P> {
    if (path.length === 0) {
        return node
    }
    const pathPart = path[0]
    const child = node.subdirectories.find(node => node.name === path[0])
    if (child) {
        if (path.length > 1) {
            return findOrCreateDirectoryNode(child, path.slice(1))
        }
        return child
    }
    const newNode = {
        name: pathPart,
        pages: [],
        subdirectories: [],
        // parent: node,
    }
    node.subdirectories.push(newNode)
    return newNode
}

export async function parsePage(page: LoadedPage): Promise<ParsedPage> {
    // TODO: the change to `slugPath` for the second argument probably breaks normal link rewriting.
    const { content, title, toc, internalLinks = [] } = await markdownToHtml(page.body, page.slugPath, page.isIndexPage)
    return { ...page, html: content, title, toc, internalLinks, backlinks: [] }
}

export function getLastSlugPart(slug: string): string {
    const parts = slug.split('/')
    return parts[parts.length - 1]
}
