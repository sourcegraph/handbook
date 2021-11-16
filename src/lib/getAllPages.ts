import globby from 'globby'

function markdownFilePathToSlugPath(markdownFilePath: string): string {
    if (markdownFilePath === 'index.md') {
        // Special case: the root index
        markdownFilePath = ''
    }

    if (markdownFilePath.endsWith('/index.md')) {
        return markdownFilePath.replace(/\/index.md$/, '')
    }

    return markdownFilePath.replace(/\.md$/, '')
}

export default async function getAllPages(
    baseDirectory: string
): Promise<{ markdownFilePath: string; slugPath: string }[]> {
    const files = await globby('**/*.md', { cwd: baseDirectory })
    return files.map(file => ({
        markdownFilePath: file,
        slugPath: markdownFilePathToSlugPath(file),
    }))
}
