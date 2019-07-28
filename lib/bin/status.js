/**
 * GIT STATUS command
 */
const executor = require('./lib/executor/exec')

// TODO: wrap the executor here

const status = (input, args) => {
  const outpt = {}
  let lines = input.split('\n')
  lines = processLines(lines)
  console.log(lines)
}

const processLines = (lines) => {
  const files = []

  // removing empty strings
  lines = lines.filter(line => line !== '')

  // TODO: use a switch instead, and watchout for the starts with A and AM, for example
  lines.forEach(line => {
    // get the file status
    if (line.startsWith('??')) {
      return files.push({
        name: line.split('?? ')[1],
        status: 'untracked',
      })
    }
    if (line.startsWith('AM')) {
      return files.push({
        name: line.split('AM ')[1],
        status: 'added and modified',
      })
    }
    if (line.startsWith('A')) {
      return files.push({
        name: line.split('A  ')[1],
        status: 'added',
      })
    }
  })

  return files
}

module.exports = {
  CMD, status,
}
