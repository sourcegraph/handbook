import React from 'react'

import { TableOfContents } from '../components/TableOfContents'
import { buildPageTree, loadAllPages, Page, DirectoryNode, parsePage, ParsedPage, buildBacklinks } from '../lib/api'
import omitUndefinedFields from '../lib/omitUndefinedFields'

// This may be too much; disable it for now.
const showTocInTree = false
const showBackLinks = true

function DirectoryItem(props: { node: DirectoryNode<ParsedPage> }): JSX.Element {
    return (
        <li>
            <code>{props.node.name}</code>{' '}
            {props.node.indexPage && (
                <a title={props.node.indexPage.path} href={`/${props.node.indexPage.slugPath}`}>
                    {props.node.indexPage.title || 'Untitled'} (/{props.node.indexPage.slugPath})
                    {props.node.indexPage.isIndexPage && ' (index.md)'}[
                    <span title={props.node.indexPage.internalLinks.join(' ')}>
                        {props.node.indexPage.internalLinks.length}
                    </span>
                    ]
                </a>
            )}
            <ul>
                {props.node.pages.map(page => (
                    <li key={page.slugPath}>
                        <code>{page.fileSlug}</code>{' '}
                        <a title={page.path} href={`/${page.slugPath}`}>
                            {page.title || 'Untitled'} (/{page.slugPath}) {page.isIndexPage && ' (index)'}[
                            <span title={page.internalLinks.join(' ')}>{page.internalLinks.length}</span>]
                        </a>
                        {showTocInTree && (
                            <TableOfContents className="fst-italic" hrefPrefix={`/${page.slugPath}`} toc={page.toc} />
                        )}
                        {showBackLinks && page.backlinks.length && (
                            <ul>
                                {page.backlinks.length} Backlinks
                                {page.backlinks.map(backlink => (
                                    <li key={backlink}>/{backlink}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <ul>
                {props.node.subdirectories.map(node => (
                    <DirectoryItem key={node.name} node={node} />
                ))}
            </ul>
        </li>
    )
}

interface IndexProps {
    allPages: ParsedPage[]
    tree: DirectoryNode<ParsedPage>
}
export default function Index({ allPages, tree }: IndexProps): JSX.Element {
    const pagesWithoutBacklinks = allPages.filter(page => page.backlinks.length === 0)
    const pagesWithoutTitle = allPages.filter(page => !page.title)

    return (
        <div className="container">
            <section id="content">
                <h1>Handbook Dashboard</h1>
                <h2>Statistics</h2>
                <p>The handbook contains {allPages.length} pages.</p>

                <h2>Pages without backlinks: {pagesWithoutBacklinks.length}</h2>
                <ul>
                    {pagesWithoutBacklinks.map(page => (
                        <li key={page.path}>
                            <a href={`/${page.slugPath}`}>
                                {page.title || 'Untitled'} ({page.path})
                            </a>
                        </li>
                    ))}
                </ul>

                <h2>Pages without a title: {pagesWithoutTitle.length}</h2>
                <ul>
                    {pagesWithoutTitle.map(page => (
                        <li key={page.path}>
                            <a href={`/${page.slugPath}`}>{page.path}</a>
                        </li>
                    ))}
                </ul>

                <h2>Tree view</h2>
                <ul>
                    <DirectoryItem node={tree} />
                </ul>
            </section>
        </div>
    )
}

export async function getStaticProps(): Promise<{ props: { allPages: ParsedPage[]; tree: DirectoryNode<Page> } }> {
    const allPages = await loadAllPages()

    const parsedPages = await Promise.all(allPages.map(page => parsePage(page)))

    // Populates the `backlinks` field of each page.
    buildBacklinks(parsedPages)

    const { tree } = buildPageTree<ParsedPage>(parsedPages)
    const root = parsedPages.find(page => page.path === 'index.md')
    if (root) {
        tree.indexPage = root
    }

    return {
        props: omitUndefinedFields({ allPages: parsedPages, tree }),
    }
}
