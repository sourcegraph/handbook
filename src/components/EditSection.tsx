import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import React from 'react'

import { CONTENT_FOLDER } from '../lib/constants'
import { PageWithMetadata } from '../pages/[...slug]'

interface EditSectionProps {
    page: PageWithMetadata
}

const AVATARS_TO_DISPLAY = 8

export const EditSection: React.FunctionComponent<EditSectionProps> = ({ page }) => (
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
                Updated <time dateTime={page.lastUpdated}>{formatDistanceToNow(new Date(page.lastUpdated))} ago</time>{' '}
                <span className="text-muted mx-1" aria-hidden="true">
                    •
                </span>{' '}
                <Link href={`https://github.com/sourcegraph/handbook/commits/main/${CONTENT_FOLDER}/${page.path}`}>
                    History
                </Link>
            </div>
        )}
        <div className="sidebar-bottom-links">
            {page.path === 'company/team/index.md' && (
                <Link href="https://github.com/sourcegraph/handbook/edit/main/data/team.yml">
                    Edit this data on GitHub
                </Link>
            )}
            {page.path === 'product/product_teams.md' && (
                <Link href="https://github.com/sourcegraph/handbook/edit/main/data/product_teams.yml">
                    Edit this data on GitHub
                </Link>
            )}
            {page.path === 'product/feature_maturity.md' && (
                <Link href="https://github.com/sourcegraph/handbook/edit/main/data/features.yml">
                    Edit this data on GitHub
                </Link>
            )}
            {page.path === 'product/feature_compatibility.md' && (
                <Link href="https://github.com/sourcegraph/handbook/edit/main/data/features.yml">
                    Edit this data on GitHub
                </Link>
            )}
            {page.path !== 'company/team/index.md' &&
                page.path !== 'product/feature_maturity.md' &&
                page.path !== 'product/product_teams.md' &&
                page.path !== 'product/feature_compatibility.md' && (
                    <Link href={`https://github.com/sourcegraph/handbook/edit/main/${CONTENT_FOLDER}/${page.path}`}>
                        Edit this page on GitHub
                    </Link>
                )}
        </div>
    </section>
)
