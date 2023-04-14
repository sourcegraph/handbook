import React, { FC, useEffect, useState } from 'react'
import { Action } from 'kbar'

import CommandPanel from './CommandPanel'
import { Result, ResultItem } from './ResultItem'

interface CommandPanelResultsProps {
    isCodyMode: boolean
    actions: Action[]
}

export const CommandPanelResults: FC<CommandPanelResultsProps> = props => {
    const { isCodyMode, actions } = props

    const activeRef = React.useRef<HTMLDivElement | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [searchResults, setSearchResults] = useState<Result[]>([])

    const topItems = isCodyMode ? [] : actions
    const bottomItems = isCodyMode ? actions : searchResults

    const handleSearchResultsUpdate = (results: Result[]) => {
        setActiveIndex(0)
        setSearchResults(results)
    }

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.isComposing) {
                return
            }

            if (event.key === 'ArrowUp' || (event.ctrlKey && event.key === 'p')) {
                event.preventDefault()
                setActiveIndex(index => Math.max(index - 1, -topItems.length))
            }

            if (event.key === 'ArrowDown' || (event.ctrlKey && event.key === 'n')) {
                event.preventDefault()
                setActiveIndex(index => Math.min(index + 1, bottomItems.length))
            }

            if (event.key === 'Enter' && activeRef.current) {
                event.preventDefault()
                activeRef.current?.click()
                setActiveIndex(0)
            }
        }

        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [activeRef, topItems.length, bottomItems.length])

    return (
        <>
            {topItems.map((item, index) => (
                <ResultItem item={item as Result} active={index - topItems.length === activeIndex} ref={activeRef} />
            ))}
            <CommandPanel setSearchResults={handleSearchResultsUpdate} isCodyMode={isCodyMode} />
            {bottomItems.map((item, index) => (
                <ResultItem item={item as Result} active={index + 1 === activeIndex} ref={activeRef} />
            ))}
        </>
    )
}
