/**
 * Package internal methods function to command inditifer
 */
module.exports = {
  gitStatus: 'git status --porcelain --ignored',
  currentBranch: 'git branch | grep \\* | cut -d " " -f2',
  branches: 'git branch'
}
