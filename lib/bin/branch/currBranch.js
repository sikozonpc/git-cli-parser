/**
 * Returns the an object containing the current working branch
 * in the git workspace
 * @param {string} stdout - (command execution output)
 * @return {{ branch: string }} object
 */
function currentBranch (stdout) {
  return {
    branch: stdout.split('\n')[0]
  }
}

module.exports = currentBranch
