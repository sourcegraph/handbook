import path from 'path'

import { gitlogPromise as gitlog } from 'gitlog'

import { CONTENT_FOLDER } from './constants'

export default async function getGitHistory(
    file: string
): Promise<(Record<'hash' | 'authorName' | 'committerDateRel' | 'status', string> & { files: string[] })[]> {
    const filepath = path.join(CONTENT_FOLDER, file)

    const log = await gitlog({
        repo: '.',
        number: 100,
        file: filepath,
        fields: ['committerDateRel', 'authorName', 'hash'],
    })

    return log
}

interface CommitSummary {
    hash: string
    authorName: string
    time: string
}

export interface GitHistorySummary {
    creationCommit?: CommitSummary
    latestCommit?: CommitSummary
    contributorNames: string[]
}

function findCreationCommit(
    log: Record<'hash' | 'authorName' | 'committerDateRel' | 'status', string>[]
): CommitSummary | undefined {
    const commit = log.find(({ status }) => status.includes('A'))
    if (!commit) {
        return
    }

    return {
        hash: commit.hash,
        authorName: commit.authorName,
        time: commit.committerDateRel,
    }
}

function findLatestCommit(
    log: Record<'hash' | 'authorName' | 'committerDateRel' | 'status', string>[]
): CommitSummary | undefined {
    const commit = log.find(({ status }) => status.includes('M'))
    if (!commit) {
        return
    }

    return {
        hash: commit.hash,
        authorName: commit.authorName,
        time: commit.committerDateRel,
    }
}

export async function getGitHistoryStats(file: string): Promise<GitHistorySummary> {
    const history = await getGitHistory(file)
    const contributorsNames = history
        .map(commit => commit.authorName)
        .filter((value, index, self) => self.indexOf(value) === index)

    return {
        creationCommit: findCreationCommit(history),
        latestCommit: findLatestCommit(history),
        contributorNames: contributorsNames,
    }
}
