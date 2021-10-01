import React from 'react'

import { TableOfContents } from '../components/TableOfContents'
import { buildPageTree, loadAllPages, Page, DirectoryNode, parsePage, ParsedPage, getLastSlugPart } from '../lib/api'
import omitUndefinedFields from '../lib/omitUndefinedFields'

function DirectoryItem(props: { node: DirectoryNode<ParsedPage> }): JSX.Element {
    return (
        <li>
            <code>{props.node.name}</code>{' '}
            {props.node.indexPage && (
                <a title={props.node.indexPage.path} href={`/${props.node.indexPage.slug}`}>
                    {props.node.indexPage.title || 'Untitled'} {props.node.indexPage.isIndexPage && ' (index.md)'}
                </a>
            )}
            <ul>
                {props.node.pages.map(page => (
                    <li key={page.slug}>
                        <code>{getLastSlugPart(page.slug)}</code>{' '}
                        <a title={page.path} href={`/${page.slug}`}>
                            {page.title || 'Untitled'} (/{page.slug}) {page.isIndexPage && ' (index)'}
                        </a>
                        <TableOfContents className="italic" hrefPrefix={`/${page.slug}`} toc={page.toc} />
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
    return (
        <div className="container">
            <section id="content">
                <h2>Debug: list of all pages:</h2>
                {/* <ul>
                    {allPages.map(page => (
                        <li key={page.slug}>
                            <a href={`/${page.slug}`}>
                                {page.title ?? `Untitled (${page.slug})`} {page.isIndexPage && '(index.md)'}
                            </a>
                        </li>
                    ))}
                </ul> */}
                <h2>Debug: Tree view</h2>
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

    const tree = buildPageTree<ParsedPage>(parsedPages)
    const root = parsedPages.find(page => page.path === 'index.md')
    if (root) {
        tree.indexPage = root
    }

    return {
        props: omitUndefinedFields({ allPages: parsedPages, tree }),
    }
}
