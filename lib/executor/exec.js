/**
 * wrapper of the built in exec function
 */
const { exec } = require('child_process')

module.exports = (cmd, callback) => exec(cmd, (err, stdout, stdin) => {
  callback(stdout)
})