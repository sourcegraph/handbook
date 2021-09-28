import fs from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import getAllPages from './getAllPages'

interface Page {
    path: string
    content: string
    slug: string
}

const pagesDirectory = join(process.cwd(), '_pages')

export async function getPagesSlug() {
    const allPages = await getAllPages(pagesDirectory)
    return allPages.map(page => page.pagePath)
}

async function loadFileBySlug(slug: string): Promise<{ contents: string; path: string }> {
    const fullPathForIndexPage = join(pagesDirectory, slug, 'index.md')
    try {
        const contents = await fs.readFile(fullPathForIndexPage, 'utf8')
        return {
            contents,
            path: fullPathForIndexPage,
        }
    } catch (error) {
        const fullPathForPage = join(pagesDirectory, `${slug}.md`)
        const contents = await fs.readFile(fullPathForPage, 'utf8')
        return {
            contents,
            path: fullPathForPage,
        }
    }
}

export async function getPagesBySlug(slug, fields = []): Promise<Page> {
    const { contents, path } = await loadFileBySlug(slug)
    const realSlug = slug.replace(/\.md$/, '')

    const { data, content } = matter(contents)

    const items = {
        content: content ?? '',
        path,
        slug: realSlug ?? '',
    }

    return items
}

export async function loadAllPages(fields = []) {
    const slugs = await getPagesSlug()

    const pages = slugs.map(slug => getPagesBySlug(slug, fields))
    // sort pages by date in descending order
    // .sort((page1, page2) => (page1.date > page2.date ? -1 : 1))
    return Promise.all(pages)
}
