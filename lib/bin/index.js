/**
 * import bundle
 */
const gitStatus = require('./status')
const { branches, currentBranch } = require('./branch')

module.exports = {
  gitStatus,
  branches,
  currentBranch
}
