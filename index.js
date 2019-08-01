const log = require('./lib/bin/log')
const { getStatus, getStatusSync } = require('./lib/bin/status')

// Async exec
// getStatus()
//   .then(res => {
        
//   })
// Sync exec
const data = getStatusSync()
console.log(data)