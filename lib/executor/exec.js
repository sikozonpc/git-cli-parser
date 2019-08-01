/**
 * wrapper of the built in exec function
 */
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const execSync = require('child_process').execSync

async function execute (cmd, callback) {
  const { stdout, stdin, error } = await exec(cmd)
  // console.log(error)
  return stdout
}

// module.exports.execute = (cmd, callback) => util.promisify(exec(cmd, (err, stdout, stdin) => {
//   if (error) {
//     console.error(`exec error: ${error}`)
//     return
//   }
//   callback(stdout)
// }))

module.exports.execute = execute
module.exports.executeSync = (cmd) => execSync(cmd).toString()