import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import React from 'react'

import { CONTENT_FOLDER } from '../lib/constants'
import { PageWithMetadata } from '../pages/[...slug]'

interface EditSectionProps {
    page: PageWithMetadata
}

const AVATARS_TO_DISPLAY = 8

export const EditSection: React.FunctionComponent<EditSectionProps> = ({ page }) => {
    const pagePath = page.path.replace(/^\//, '')

    return (
        <section className="right-sidebar-section edit-section">
            {page.authors && page.authors.length > 0 && (
                <>
                    <h4 className="sidebar-heading mb-0">Contributors</h4>
                    <div className="avatar-set">
                        {page.authors.slice(0, AVATARS_TO_DISPLAY).map(author => (
                            <a
                                href={author.url}
                                className="avatar"
                                title={author.name}
                                target="_blank"
                                rel="noreferrer noopener"
                                key={author.username}
                            >
                                <img
                                    alt={`Avatar of ${author.name}`}
                                    src={`${author.avatar}&s=72`}
                                    width="36"
                                    height="36"
                                />
                            </a>
                        ))}
                        {page.authors.length - AVATARS_TO_DISPLAY > 0 && (
                            <span>+ {page.authors.length - AVATARS_TO_DISPLAY} more</span>
                        )}
                    </div>
                </>
            )}
            {page.lastUpdated && (
                <div>
                    Updated{' '}
                    <time dateTime={page.lastUpdated}>{formatDistanceToNow(new Date(page.lastUpdated))} ago</time>{' '}
                    <span className="text-muted mx-1" aria-hidden="true">
                        •
                    </span>{' '}
                    <Link href={`https://github.com/sourcegraph/handbook/commits/main/${CONTENT_FOLDER}/${pagePath}`}>
                        History
                    </Link>
                </div>
            )}
            <div className="sidebar-bottom-links">
                <Link
                    href={`https://sourcegraph.com/search?q=context:global+repo:%5Egithub.com/sourcegraph/handbook%24+file:${CONTENT_FOLDER}/${pagePath}+type:diff+rev:main&patternType=literal`}
                >
                    Page history as diffs
                </Link>
                <br />
                <Link href={`https://github.com/sourcegraph/handbook/edit/main/${CONTENT_FOLDER}/${pagePath}`}>
                    Edit this page
                </Link>
                <br />
                {page.frontMatter?.data_source && (
                    <a
                        href={`https://github.com/sourcegraph/handbook/edit/main/${String(
                            page.frontMatter?.data_source[0]
                        )}`}
                    >
                        Edit {String(page.frontMatter?.data_source[1])} data
                    </a>
                )}
                <br />
                {page.frontMatter?.data_source_2 && (
                    <a
                        href={`https://github.com/sourcegraph/handbook/edit/main/${String(
                            page.frontMatter?.data_source_2[0]
                        )}`}
                    >
                        Edit {String(page.frontMatter?.data_source_2[1])} data
                    </a>
                )}
            </div>
        </section>
    )
}
