/**
 * Wrapper of the built in exec function
 */
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const execSync = require('child_process').execSync

module.exports.execute = async function execute (cmd) {
  const { stdout, error } = await exec(cmd)
  if (error) console.log(error)
  return stdout
}
module.exports.executeSync = (cmd) => execSync(cmd).toString()
