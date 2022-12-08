import React from 'react'

/**
 * Banner generates the appropriate banner(s) for the given slug paths. Banners are
 * hardcoded in this component.
 */
export function Banner({ path }: { path: string }): JSX.Element {
    // Banners should each be an <aside> with the appropriate className to indicate the
    // admonition type.
    const banners: React.ReactElement[] = []

    // Inject warning banners to pages with cloud in the path - this helps us communicate
    // to customers that for finalized documentation, they should refer elsewhere.
    if (path.includes('/cloud')) {
        banners.push(
            <aside className="warning">
                <div>
                    <b>
                        To learn more about the Sourcegraph Cloud product, please refer to our{' '}
                        <a href="https://docs.sourcegraph.com/cloud">user-facing documentation</a>.
                    </b>
                    The documentation here is meant for internal Sourcegraph use, and may represent unreleased,
                    incomplete, or out-of-date processes and functionality - it is made public to align with{' '}
                    <a href="/company-info-and-process/values/#open-and-transparent">our values</a>.
                </div>
            </aside>
        )
    }

    return banners ? (
        <div className="markdown-body">
            <br />
            {banners}
        </div>
    ) : (
        <></>
    )
}
