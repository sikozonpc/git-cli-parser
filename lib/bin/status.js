const { execute, executeSync } = require('../executor/exec')
const status = require('../utils/fileChangeStatus')

const COMMAND = 'git status --porcelain'

/**
* [Async] Returns a promise from which it can be resolved
* reurning an array of objects containing the status of every
* changed file in the git workspace
* @return {Promise} Promise
*/
function getStatusAsync () {
  return (execute(COMMAND)
    .then(stdout => {
      return processLines(stdout.split('\n'))
    })
    .catch(error => console.log(error)))
}

/**
 * [Sync] Returns an array of objects containing the status of every
 * changed file in the git workspace
 * @return {array} array
 */
function getStatus (args) {
  let stdout
  if (args.length > 0) {
    stdout = executeSync(COMMAND + ' ' + args)
  } else {
    stdout = executeSync(COMMAND)
  }

  return processLines(stdout.split('\n'))
}

/** helper function to process the stdout of the command */
const processLines = (lines) => {
  const files = []
  // removing empty strings
  lines = lines.filter(line => line !== '')

  lines.forEach(line => {
    if (line.startsWith(status.UNTRACKED)) {
      return files.push({
        name: line.split(status.UNTRACKED)[1].trim(),
        status: 'untracked'
      })
    }
    if (line.startsWith(status.ADDED_MODIFIED)) {
      return files.push({
        name: line.split(status.ADDED_MODIFIED)[1].trim(),
        status: 'added and modified'
      })
    }
    if (line.startsWith(status.STAGED_MODIFIED)) {
      return files.push({
        name: line.split(status.MODIFIED)[1].trim(),
        status: 'staged modified'
      })
    }
    if (line.startsWith(status.STAGED_DELETED)) {
      return files.push({
        name: line.split(status.DELETED)[1].trim(),
        status: 'staged deleted'
      })
    }
    if (line.startsWith(status.DELETED)) {
      return files.push({
        name: line.split(status.DELETED)[1].trim(),
        status: 'deleted'
      })
    }
    if (line.startsWith(status.MODIFIED)) {
      return files.push({
        name: line.split(status.MODIFIED)[1].trim(),
        status: 'modified'
      })
    }
    if (line.startsWith(status.ADDED)) {
      return files.push({
        name: line.split(status.ADDED)[1].trim(),
        status: 'added'
      })
    }
    if (line.startsWith(status.IGNORED)) {
      return files.push({
        name: line.split(status.IGNORED)[1].trim(),
        status: 'ignored'
      })
    }
  })
  return files
}

module.exports = {
  getStatus,
  getStatusAsync
}
