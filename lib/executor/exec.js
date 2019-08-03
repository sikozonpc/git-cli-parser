const fnIndentifier = require('../utils/fnIndetifier')

/**
 * Wrapper of the built in exec function
 */
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const execSync = require('child_process').execSync

/**
 * TODO
 */
module.exports.execute = function execute () {
  return async function (callback) {
    const cmd = fnIndentifier(callback)
    if (cmd) {
      const { stdout, error } = await exec(cmd)
      if (error) console.log(error)
      return callback(stdout)
    } else return undefined
  }
}

/**
 * Higher order function that wraps around the nodejs child_process.exec for Synchronous command calls
 * receives a parse function and returns its output
 * @returns {array} array
 */
module.exports.executeSync = function () {
  return function (callback) {
    const cmd = fnIndentifier(callback)
    if (cmd) return callback(execSync(cmd).toString())
    else return undefined
  }
}
