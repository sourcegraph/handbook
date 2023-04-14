declare module 'cody-shared-client' {
    export interface ContextSearchOptions {
        numCodeResults: number
        numTextResults: number
    }
    export type ConfigurationUseContext = 'embeddings' | 'keyword' | 'none' | 'blended'
    export interface Configuration {
        enabled: boolean
        serverEndpoint: string
        codebase?: string
        debug: boolean
        useContext: ConfigurationUseContext
        experimentalSuggest: boolean
        anthropicKey: string | null
    }
    export interface Message {
        speaker: 'human' | 'assistant'
        text: string
    }
    export interface ChatMessage extends Message {
        displayText: string
        timestamp: string
        contextFiles?: string[]
    }
    export interface ClientInit {
        config: Pick<Configuration, 'serverEndpoint' | 'codebase' | 'useContext'>
        accessToken: string | null
        setMessageInProgress: (messageInProgress: ChatMessage | null) => void
        setTranscript: (transcript: ChatMessage[]) => void
        preamble?: Message[]
        contextSearchOptions?: ContextSearchOptions
        alwaysUseQueryContext?: boolean
    }
    export interface Client {
        submitMessage: (text: string) => void
    }
    export declare function createClient({
        config,
        accessToken,
        setMessageInProgress,
        setTranscript,
        preamble,
        contextSearchOptions,
    }: ClientInit): Promise<Client>
}
