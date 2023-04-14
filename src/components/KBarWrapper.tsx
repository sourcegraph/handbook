import { useState, useMemo } from 'react'
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator } from 'kbar'

import { CommandPanelResults } from './CommandPanelResults'

import styles from './KBarWrapper.module.css'

export const KBarWrapper = () => {
    const [isCodyMode, setIsCodyMode] = useState(false)

    const actions = useMemo(() => {
        if (isCodyMode) {
            return [
                {
                    id: 'keyword_search',
                    name: 'Switch to keyword search',
                    keywords: 'writing words',
                    perform: () => setIsCodyMode(false),
                },
            ]
        }
        return [
            {
                id: 'cody_chat',
                name: 'Switch to Cody',
                keywords: 'writing words',
                perform: () => setIsCodyMode(true),
            },
        ]
    }, [isCodyMode, setIsCodyMode])

    return (
        <KBarProvider actions={actions}>
            <KBarPortal>
                <KBarPositioner className={styles.positioner}>
                    <KBarAnimator className={styles.animator}>
                        <CommandPanelResults isCodyMode={isCodyMode} actions={actions} />
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
        </KBarProvider>
    )
}
