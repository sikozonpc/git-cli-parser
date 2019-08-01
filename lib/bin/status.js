const { execute, executeSync } = require('../executor/exec')

const COMMAND = 'git status --porcelain'

/**
* async git status
*/
function getStatus () {
  return (execute(COMMAND)
    .then(stdout => {
      return processLines(stdout.split('\n'))
    })
    .catch(error => console.log(error)))
}

function getStatusSync () {
  const stdout = executeSync(COMMAND)
  return processLines(stdout.split('\n'))
}

/** helper function to process the stdout of the command */
const processLines = (lines) => {
  const files = []

  // removing empty strings
  lines = lines.filter(line => line !== '')

  lines.forEach(line => {
    // get the file status
    if (line.startsWith('??')) {
      return files.push({
        name: line.split('?? ')[1],
        status: 'untracked',
      })
    }
    if (line.startsWith('AM')) {
      return files.push({
        name: line.split('AM ')[1],
        status: 'added and modified',
      })
    }
    if (line.startsWith(' M')) {
      files.push({
        name: line.split(' M ')[1],
        status: 'modified',
      })
    }
    if (line.startsWith('A')) {
      return files.push({
        name: line.split('A  ')[1],
        status: 'added',
      })
    }
  })
  return files
}

module.exports = {
  getStatus, getStatusSync
}
