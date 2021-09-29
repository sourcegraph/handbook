const exec = require('execa')

async function getMovedPagesFromHistory() {
  const result = await exec('git', ['log', '--name-status', '--pretty=', '--diff-filter=R', 'content'])

  const movedFilesFromHistory = result.stdout.split('\n').map(line => {
    const [status, source, destination] = line.split('\t')
    return {
      status,
      source: source.replace(/^content/, '').replace(/\.md$/, ''),
      destination: destination.replace(/^content/, '').replace(/\.md$/, ''),
    }
  })

  return movedFilesFromHistory
}
module.exports = getMovedPagesFromHistory
