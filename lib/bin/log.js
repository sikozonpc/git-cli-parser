const { execute, executeSync } = require('../executor/exec')

// module.exports = (args) => exec('git log', (err, stdout, stdin) => {
//   const outpt = stdout
  
//   const lines = outpt.split('\n')

//   let log = { commit: '', author: '' }
//   const logs = lines.filter(line => {
//     log = { commit: '', author: '' }

//     if (line.startsWith('commit ')) {
//       log.commit = line.split('commit ')[1]
//     }
//     if (line.startsWith('Author: ')) {
//       log.author = line.split('Author: ')[1]
//     }
//     console.log(log)
//     if (log.commit || log.author) return log
//   })
//   logs.forEach(e => console.log(e))
// })

module.exports = () => executeSync('git log')