import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pagesDirectory = join(process.cwd(), '_pages')

export function getPagesSlug() {
  return fs.readdirSync(pagesDirectory)
}

export function getPagesBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(pagesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPages(fields = []) {
  const slugs = getPagesSlug()

  const pages = slugs.map(slug => getPagesBySlug(slug, fields))
  // sort pages by date in descending order
  // .sort((page1, page2) => (page1.date > page2.date ? -1 : 1))
  return pages
}
