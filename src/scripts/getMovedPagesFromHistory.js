const exec = require('execa')

async function getMovedPagesFromHistory() {
  const result = await exec('git', ['log', '--name-status', '--pretty=', '--diff-filter=R', 'content'])

  const movedFilesFromHistory = result.stdout
    .split('\n')
    .map(line => {
      const [source, destination] = line
        .split('\t')
        .slice(1)
        .map(path =>
          path
            .replace(/^content/, '')
            .replace(/\.md$/, '')
            .replace(/\/index/, '')
        )
      return { source, destination }
    })
    .filter(({ source, destination }) => destination !== source)

  return movedFilesFromHistory
}
module.exports = getMovedPagesFromHistory
