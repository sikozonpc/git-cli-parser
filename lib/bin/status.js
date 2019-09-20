const { execute, executeSync } = require('../executor/exec')
const status = require('../utils/statusCodes')

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
 * @param {string} stdout - (command execution output)
 * @param {string} args - (ex: '--ignored' )
 * @return {array} array
 */
function getStatus (stdout) {
  return processLines(stdout.split('\n'))
}

/** helper function to process the stdout of the command */
const processLines = (lines) => {
  const files = []
  // removing empty strings
  lines = lines.filter(line => line !== '')

  lines.forEach(line => {
    line = line.split(' ').filter(subLine => subLine !== '')

    // @debug console.log(line)

    files.push({
      status: status[line[0]],
      name: line[1]
    })
  })

  return files
}

module.exports = {
  getStatus,
  getStatusAsync
}
