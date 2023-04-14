import classNames from 'classnames'
import React, { useState, useEffect, useRef } from 'react'
import styles from './CommandPanel.module.css'
import { KBarSearch, useKBar } from 'kbar'
import { Client, createClient, ClientInit, ChatMessage } from 'cody-shared-client'
import { HANDBOOK_PREAMBLE } from './preamble'
import { ContextFiles } from './ContextFiles'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import debounce from 'lodash.debounce'

const markdownProcessor = () => unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify)
function getMarkdownHTML(markdown: string): string {
    return markdownProcessor().processSync(markdown).toString()
}
const SCROLL_THRESHOLD = 15
const getBubbleClassName = (speaker: string): string => (speaker === 'human' ? 'human' : 'bot')

const config: ClientInit['config'] = {
    serverEndpoint: 'https://sourcegraph.sourcegraph.com',
    useContext: 'embeddings',
    codebase: 'github.com/sourcegraph/handbook',
}

interface CommandPanelProps {
    isCodyMode: boolean
    setSearchResults: (results: any[]) => void
}

async function suggest(query: string) {
    const formData = new FormData()
    formData.append('q', query)

    const response = await fetch(
        'https://search-api.swiftype.com/api/v1/public/installs/JAPrEEBxHhYT4SnMJQmX/search.json',
        {
            method: 'POST',
            body: formData,
        }
    )

    if (response.ok) {
        const result = await response.json()

        return result.records.page.map((record: any) => {
            const url = new URL(record.url)
            const { sections, body } = record.highlight
            const sectionHash = sections ? `#sts=${encodeURIComponent(sections.replace(/<\/?[^>]+(>|$)/g, ''))}` : ''

            return {
                name: record.title,
                subtitle: sections || body,
                url: url.pathname + sectionHash,
            }
        })
    }
}

const CommandPanel: React.FC<CommandPanelProps> = props => {
    const { isCodyMode, setSearchResults } = props
    const messagesContainerRef = useRef<HTMLDivElement | null>(null)
    const [messageInProgress, setMessageInProgress] = useState<ChatMessage | null>(null)
    const [transcript, setTranscript] = useState<ChatMessage[]>([])
    const [client, setClient] = useState<Client | Error>()
    const kbar = useKBar()

    useEffect(() => {
        createClient({
            config,
            accessToken: process.env.NEXT_PUBLIC_SOURCEGRAPH_ACCESS_TOKEN,
            setMessageInProgress,
            setTranscript,
            preamble: HANDBOOK_PREAMBLE,
            contextSearchOptions: {
                numCodeResults: 0,
                numTextResults: 10,
            },
            alwaysUseQueryContext: true,
        })
            .then(setClient)
            .catch(setClient)
    }, [])

    useEffect(() => {
        if (messagesContainerRef.current) {
            // Only scroll if the user didn't scroll up manually more than the scrolling threshold.
            // That is so that you can freely copy content or read up on older content while new
            // content is being produced.
            // We allow some small threshold for "what is considered not scrolled up" so that minimal
            // scroll doesn't affect it (ie. if I'm not all the way scrolled down by like a pixel or two,
            // I probably still want it to scroll).
            // Sice this container uses flex-direction: column-reverse, the scrollTop starts in the negatives
            // and ends at 0.
            if (messagesContainerRef.current.scrollTop >= -SCROLL_THRESHOLD) {
                messagesContainerRef.current.scrollTo({
                    behavior: 'smooth',
                    top: messagesContainerRef.current.scrollHeight,
                })
            }
        }
    }, [messageInProgress, transcript, messagesContainerRef])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // get input value from the form submit event
        const inputValue = e.currentTarget[0].value
        kbar.query.setSearch('')

        if (!inputValue.trim()) return

        try {
            if (client && !(client instanceof Error)) {
                client.submitMessage(inputValue)
            }
        } catch (error) {
            console.error('Error fetching data:', error)
            setMessageInProgress(null)
        }
    }

    const handleQueryChange = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setSearchResults([])
        } else {
            const suggestions = await suggest(e.target.value)
            setSearchResults(suggestions || [])
            console.log(JSON.stringify(suggestions, null, 2))
        }
    }, 500)

    return (
        <div>
            {isCodyMode && (
                <div ref={messagesContainerRef} className={styles.messages}>
                    {transcript.length > 0 && (
                        <div className={styles.bubbleContainer}>
                            {transcript.map((message, index) => (
                                <div
                                    key={message.timestamp}
                                    className={classNames(
                                        styles.bubbleRow,
                                        styles[`${getBubbleClassName(message.speaker)}BubbleRow`]
                                    )}
                                >
                                    <div className={styles.bubble}>
                                        <div
                                            className={classNames(
                                                styles.bubbleContent,
                                                styles[`${getBubbleClassName(message.speaker)}BubbleContent`]
                                            )}
                                        >
                                            {message.displayText && (
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: getMarkdownHTML(message.displayText),
                                                    }}
                                                />
                                            )}
                                            {message.contextFiles && message.contextFiles.length > 0 && (
                                                <ContextFiles contextFiles={message.contextFiles} />
                                            )}
                                        </div>
                                        <div
                                            className={classNames(
                                                styles.bubbleFooterTimestamp,
                                                styles[`${getBubbleClassName(message.speaker)}BubbleFooter`]
                                            )}
                                        >
                                            {message.timestamp}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {messageInProgress && (
                                <div className={classNames(styles.bubbleRow, styles.botBubbleRow)}>
                                    <div className={styles.bubble}>
                                        <div className={classNames(styles.bubbleContent, styles.botBubbleContent)}>
                                            {messageInProgress?.displayText ? (
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: getMarkdownHTML(messageInProgress.displayText),
                                                    }}
                                                />
                                            ) : (
                                                <div className={styles.bubbleLoader}>
                                                    <div className={classNames(styles.bubbleLoaderDot)} />
                                                    <div className={classNames(styles.bubbleLoaderDot)} />
                                                    <div className={classNames(styles.bubbleLoaderDot)} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
                <KBarSearch
                    className={styles.searchInput}
                    type="text"
                    defaultPlaceholder={isCodyMode ? 'Ask Cody...' : 'Keyword search...'}
                    aria-label="Command input"
                    onChange={e => {
                        e.persist()
                        handleQueryChange(e)
                    }}
                />
                <kbd className={styles.escShortcut}>Esc</kbd>
            </form>
        </div>
    )
}

export default CommandPanel
