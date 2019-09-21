/**
 * Wrapper of the built in exec function
 */
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const execSync = require('child_process').execSync
const fnIndentifier = require('../utils/fnIndetifier')

/**
 * [Async] Higher order function that wraps around the nodejs child_process.exec for Synchronous command calls
 * receives a parser function and returns its output
 * @returns {array} array
 */
function run (parser) {
  return new Promise((resolve, reject) => {
    const parserCommand = fnIndentifier(parser)

    // Not a git parser command
    if (!parserCommand) {
      exec(parser, (err, stdout) => {
        if (err) {
          reject(err)
        } else {
          resolve(stdout)
        }
      })
    } else {
      exec(parserCommand, (err, stdout) => {
        if (err) {
          reject(err)
        } else {
          resolve(parser(stdout))
        }
      })
    }
  })
}

/**
 * [Sync] Higher order function that wraps around the nodejs child_process.exec for Synchronous command calls
 * receives a parser function and returns its output
 * @returns {array} array
 */
function runSync () {
  return function (parser) {
    const parserCommand = fnIndentifier(parser)

    if (!parserCommand) {
      return execSync(parserCommand).toString()
    } else {
      return parser(execSync(parserCommand).toString())
    }
  }
}

module.exports = { run, runSync }
