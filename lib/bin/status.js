const status = require('../utils/statusCodes')

/**
 * Returns an array of objects containing the status of every
 * changed file in the git workspace
 * @param {string} stdout - (command execution output)
 * @param {string} args - (ex: '--ignored' )
 * @return {array} array
 */
function gitStatus (stdout) {
  return processLines(stdout.split('\n'))
}

/** helper function to process the stdout of the command */
function processLines (lines) {
  const files = []
  // removing empty strings
  lines = lines.filter(line => line !== '')

  lines.forEach(line => {
    line = line.split(' ').filter(subLine => subLine !== '')

    files.push({
      status: status[line[0]],
      name: line[1]
    })
  })

  return files
}

module.exports = gitStatus
