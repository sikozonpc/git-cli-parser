const methods = require('./methods')

/**
 * Returns the respective git command depending on the
 * function name
 */
module.exports = function (fn) {
  if (fn.name.length <= 0) return undefined
  if (methods[fn.name]) return methods[fn.name]
  else return undefined
}
