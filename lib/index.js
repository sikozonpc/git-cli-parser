const { getStatus } = require('./bin/status')

// Async exec way
// getStatus()
//   .then(res => {
//     console.log(res)
//   })
// Sync exec way
const data = getStatus('--ignored')
console.log(data)
