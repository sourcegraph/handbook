import fs from 'fs/promises'
import { join } from 'path'

import { Toc } from '@stefanprobst/rehype-extract-toc'
import matter from 'gray-matter'

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
    title: string
    toc: Toc
    html: string
}

const pagesDirectory = join(process.cwd(), '_pages')

export async function getPagesSlug(): Promise<string[]> {
    const allPages = await getAllPages(pagesDirectory)
    return allPages.map(page => page.pagePath)
}

async function loadFileBySlug(slug: string): Promise<LoadedPage> {
    const fullPathForIndexPage = join(pagesDirectory, slug, 'index.md')
    try {
        const body = await fs.readFile(fullPathForIndexPage, 'utf8')
        return {
            body,
            path: fullPathForIndexPage,
            slug,
            isIndexPage: true,
        }
    } catch {
        const fullPathForPage = join(pagesDirectory, `${slug}.md`)
        const body = await fs.readFile(fullPathForPage, 'utf8')
        return {
            body,
            path: fullPathForPage,
            slug,
            isIndexPage: false,
        }
    }
}

export async function getPagesBySlug(slug, fields = []): Promise<LoadedPage> {
    const page = await loadFileBySlug(slug)

    const { data, content } = matter(page.body)

    return { ...page, frontMatter: data, body: content }
}

export async function loadAllPages(fields = []): Promise<LoadedPage[]> {
    const slugs = await getPagesSlug()
    const pages = slugs.map(slug => getPagesBySlug(slug, fields))
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

export function buildPagesTree<P extends Page = Page>(pages: P[]): DirectoryNode {
    const root: DirectoryNode = {
        name: '',
        pages: [],
        subdirectories: [],
    }

    for (const page of pages) {
        const directoryParts = page.slug.split('/').slice(0, -1)
        const parentDirectory = findOrCreateDirectoryNode(root, directoryParts)

        // TODO This logic isn't quite right, because I think it conflates the
        // idea of an "index page" which is just an `index.md` with a "parent
        // node" which can be either `foo/index.md` or `foo.md` alonside a
        // `foo/` directory.
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
    const { content, title, toc } = await markdownToHtml(page.body)
    return { ...page, html: content, title, toc }
}
