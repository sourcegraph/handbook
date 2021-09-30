import { Toc } from '@stefanprobst/rehype-extract-toc'
import React from 'react'

export function TableOfContents({ toc, className }: { toc: Toc; className?: string }): JSX.Element {
    return (
        <ul className={className}>
            {toc.map(node => (
                <React.Fragment key={node.id}>
                    <li>
                        <a href={node.id && `#${node.id}`}>{node.value}</a>
                    </li>
                    {node.children && <TableOfContents toc={node.children} />}
                </React.Fragment>
            ))}
        </ul>
    )
}
