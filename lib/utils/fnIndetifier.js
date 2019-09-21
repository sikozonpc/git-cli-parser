const methods = require('./methods')

/**
 * Returns the respective git command depending on the
 * parser function name
 */
module.exports = function (fn) {
  if (typeof fn !== 'function' || fn.name.length <= 0) return undefined

  if (methods[fn.name]) {
    return methods[fn.name]
  } else {
    return undefined
  }
}
