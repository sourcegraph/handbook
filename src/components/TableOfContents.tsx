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
                        {node.children && <TableOfContents toc={node.children} hrefPrefix={hrefPrefix} />}
                    </li>
                </React.Fragment>
            ))}
        </ul>
    )
}
