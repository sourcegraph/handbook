import React from 'react'
import styles from './ResultItem.module.css'
import classNames from 'classnames'

export interface Result {
    name: string
    url?: string
    subtitle?: string
    perform?: (item: Result) => void
}

interface ResultItemProps {
    item: Result
    active: boolean
}

export const ResultItem = React.forwardRef(({ item, active }: ResultItemProps, ref: React.Ref<HTMLDivElement>) => {
    const { name, url, subtitle, perform } = item

    const handleClick = () => {
        if (url) {
            // TODO: render the element as a link instead of using window.location.href.
            window.location.href = url
        } else {
            perform?.(item)
        }
    }

    return (
        <div
            ref={active ? ref : null}
            onClick={handleClick}
            role="option"
            aria-selected={active}
            className={classNames(styles.itemContainer, active && styles.active)}
        >
            <div className={styles.itemDetails}>
                <div>
                    <span>{name}</span>
                </div>
                {subtitle && (
                    <span
                        className={styles.itemSubtitle}
                        dangerouslySetInnerHTML={{
                            __html: subtitle,
                        }}
                    />
                )}
            </div>
        </div>
    )
})
