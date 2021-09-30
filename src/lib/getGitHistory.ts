import path from 'path'

import { gitlogPromise as gitlog } from 'gitlog'

import { CONTENT_FOLDER } from './constants'

export default async function getGitHistory(
    file: string
): Promise<(Record<'hash' | 'authorName' | 'committerDateRel' | 'status', string> & { files: string[] })[]> {
    const filepath = path.join(CONTENT_FOLDER, file)

    const log = gitlog({
        repo: '.',
        number: 100,
        file: filepath,
        fields: ['committerDateRel', 'authorName', 'hash'],
    })

    return log
}

export interface GitHistorySummary {
    creator: string | undefined
    createdTimeAgo: string | undefined
    latestCommitId: string
    lateCommitTimeAgo: string
    contributorNames: string[]
}

export async function getGitHistoryStats(file: string): Promise<GitHistorySummary> {
    const history = await getGitHistory(file)
    const creationCommit = history.find(commit => commit.status.includes('A'))
    const latestCommit = history[0]
    const contributors = history
        .map(commit => commit.authorName)
        .filter((value, index, self) => self.indexOf(value) === index)

    return {
        creator: creationCommit?.authorName,
        createdTimeAgo: creationCommit?.committerDateRel,
        latestCommitId: latestCommit?.hash,
        lateCommitTimeAgo: latestCommit?.committerDateRel,
        contributorNames: contributors,
    }
}
