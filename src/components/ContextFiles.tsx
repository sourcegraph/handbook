import { FC, useState } from 'react'

import styles from './ContextFiles.module.css'

export const ContextFiles: FC<{
    contextFiles: string[]
}> = ({ contextFiles }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    if (contextFiles.length === 1) {
        return (
            <p>
                Cody read{' '}
                <span className={styles.contextFile}>
                    <FileLink path={contextFiles[0]} />
                </span>{' '}
                to provide an answer.
            </p>
        )
    }

    if (isExpanded) {
        return (
            <div className={styles.contextFilesExpanded}>
                <span className={styles.contextFilesToggleIcon} onClick={() => setIsExpanded(false)}>
                    ▼
                </span>
                <div>
                    <div className={styles.contextFilesListTitle} onClick={() => setIsExpanded(false)}>
                        Cody read the following files to provide an answer:
                    </div>
                    <ul className={styles.contextFilesListContainer}>
                        {contextFiles.map(file => (
                            <li key={file} className={styles.contextFile}>
                                <FileLink path={file} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.contextFilesCollapsed} onClick={() => setIsExpanded(true)}>
            <span className={styles.contextFilesToggleIcon}>▶</span>
            <div className={styles.contextFilesCollapsedText}>
                <span className={styles.contextFilesListTitle}>
                    Cody read <span className={styles.contextFile}>{contextFiles[0].split('/').pop()}</span> and{' '}
                    {contextFiles.length - 1} other {contextFiles.length > 2 ? 'files' : 'file'} to provide an answer.
                </span>
            </div>
        </div>
    )
}

export interface FileLinkProps {
    path: string
}

const FileLink: FC<FileLinkProps> = ({ path }) => {
    const locationPath = path.replace(/^content\//, '').replace(/\.md$/, '')

    if (path.startsWith('content/')) {
        return <a href={new URL(locationPath, window.location.origin).toString()}>{locationPath}</a>
    }

    return <>{path}</>
}
