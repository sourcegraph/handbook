import globby from 'globby'

function markdownFilePathToPagePath(markdownFilePath: string): string {
    if (markdownFilePath.endsWith('/index.md')) {
        return markdownFilePath.replace(/\/index.md$/, '')
    }

    return markdownFilePath.replace(/\.md$/, '')
}

export default async function getAllPages(
    baseDirectory: string
): Promise<{ markdownFilePath: string; pagePath: string }[]> {
    const files = await globby('**/*.md', { cwd: baseDirectory })
    return files.map(file => ({
        markdownFilePath: file,
        pagePath: markdownFilePathToPagePath(file),
    }))
}
