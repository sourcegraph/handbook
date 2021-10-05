import { Toc } from '@stefanprobst/rehype-extract-toc'
import React from 'react'

export function TableOfContents({
    toc,
    className,
    hrefPrefix = '',
}: {
    toc: Toc
    className?: string
    hrefPrefix?: string
}): JSX.Element {
    return (
        <ul className={className}>
            {toc.map(node => (
                <React.Fragment key={node.id}>
                    <li>
                        <a href={node.id && `${hrefPrefix}#${node.id}`}>{node.value}</a>
                    </li>
                    {node.children && node.depth <= 3 && (
                        <TableOfContents toc={node.children} hrefPrefix={hrefPrefix} />
                    )}
                </React.Fragment>
            ))}
        </ul>
    )
}
