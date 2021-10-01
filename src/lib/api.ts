import fs from 'fs/promises'
import { join } from 'path'

import { Toc } from '@stefanprobst/rehype-extract-toc'
import matter from 'gray-matter'

import { CONTENT_FOLDER } from './constants'
import getAllPages from './getAllPages'
import markdownToHtml from './markdownToHtml'

export interface Page {
    path: string
    slug: string
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
}

const pagesDirectory = join(process.cwd(), CONTENT_FOLDER)

export async function getAllPageSlugPaths(): Promise<string[]> {
    const allPages = await getAllPages(pagesDirectory)
    return allPages.map(page => page.slugPath)
}

async function loadFileBySlugPath(slug: string): Promise<LoadedPage> {
    const relativePathForIndexPage = join(slug, 'index.md')
    const fullPathForIndexPage = join(pagesDirectory, relativePathForIndexPage)
    try {
        const body = await fs.readFile(fullPathForIndexPage, 'utf8')
        return {
            body,
            path: relativePathForIndexPage,
            slug,
            isIndexPage: true,
        }
    } catch {
        const relativePathForPage = `${slug}.md`
        const fullPathForPage = join(pagesDirectory, relativePathForPage)
        const body = await fs.readFile(fullPathForPage, 'utf8')
        return {
            body,
            path: relativePathForPage,
            slug,
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

export function buildPageTree<P extends Page = Page>(pages: P[]): DirectoryNode<P> {
    const root: DirectoryNode<P> = {
        name: '',
        pages: [],
        subdirectories: [],
    }

    // Sort pages alphabetically by name
    const sortedPages = pages.sort((page1, page2) =>
        getLastSlugPart(page1.slug) > getLastSlugPart(page2.slug) ? 1 : -1
    )

    for (const page of sortedPages) {
        const slugPathParts = page.slug.split('/')

        // For index pages, the directory path is the entire slug path. For all
        // other pages, the directory path is the slug path excluding the last
        // part (because the last part is the "file" name).
        const directoryPathParts = page.isIndexPage ? slugPathParts : slugPathParts.slice(0, -1)
        const parentDirectory = findOrCreateDirectoryNode(root, directoryPathParts)

        if (page.isIndexPage) {
            parentDirectory.indexPage = page
        } else {
            parentDirectory.pages.push(page)
        }
    }

    return root
}

function findOrCreateDirectoryNode(node: DirectoryNode, path: string[]): DirectoryNode {
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
    const { content, title, toc } = await markdownToHtml(page.body, page.path, page.isIndexPage)
    return { ...page, html: content, title, toc }
}

export function getLastSlugPart(slug: string): string {
    const parts = slug.split('/')
    return parts[parts.length - 1]
}
