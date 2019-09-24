const trimArray = require('../utils/trimArray')

/**
 * Returns the an object containing the current working branch
 * in the git workspace
 * @param {string} stdout - (command execution output)
 * @return {{ branch: string }} object
 */
function currentBranch (stdout) {
  return {
    branch: stdout && stdout.split('\n')[0]
  }
}

/**
 * Returns an array of all branches names
 * @param {string} stdout - (command execution output)
 * @return {{ branch: string }} object
 */
function branches (stdout) {
  return stdout && trimArray(stdout.split('\n')).map((branch, indx) => {
    if (indx === 0) {
      return branch.slice(1).trim()
    } else {
      return branch.trim()
    }
  })
}

module.exports = { currentBranch, branches }
