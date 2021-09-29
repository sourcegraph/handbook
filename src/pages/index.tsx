import React from 'react'

import { buildPagesTree, loadAllPages, Page, DirectoryNode, parsePage, ParsedPage } from '../lib/api'
import omitUndefinedFields from '../lib/omitUndefinedFields'

function DirectoryItem(props: { node: DirectoryNode<ParsedPage> }): JSX.Element {
    return (
        <li>
            <code>{props.node.name}</code>{' '}
            {props.node.indexPage && (
                <a href={`/${props.node.indexPage.slug}`}>{props.node.indexPage.title || 'Untitled'}</a>
            )}
            <ul>
                {props.node.pages.map(page => (
                    <li key={page.slug}>
                        <a href={`/${page.slug}`}>
                            {page.title || 'Untitled'} (/{page.slug})
                        </a>
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
    const heroPost = allPages[0]
    const morePosts = allPages.slice(1)
    return (
        <div className="container">
            <section id="content">
                <h2>Debug: list of all pages:</h2>
                <ul>
                    {allPages.map(page => (
                        <li key={page.slug}>
                            <a href={`/${page.slug}`}>
                                {page.title ?? `Untitled (${page.slug})`} {page.isIndexPage && '(index.md)'}
                            </a>
                        </li>
                    ))}
                </ul>
                <h2>Debug: Tree view</h2>
                <ul>
                    <DirectoryItem node={tree} />
                </ul>
            </section>
        </div>
    )
}

export async function getStaticProps(): Promise<{ props: { allPages: ParsedPage[]; tree: DirectoryNode<Page> } }> {
    const allPages = await loadAllPages(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])
    const parsedPages = await Promise.all(allPages.map(page => parsePage(page)))
    const tree = buildPagesTree<ParsedPage>(parsedPages)
    return {
        props: omitUndefinedFields({ allPages: parsedPages, tree }),
    }
}
