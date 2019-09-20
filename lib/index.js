const { getStatus } = require('./bin')
const { executeSync, execute } = require('./executor/exec')

// Async exec way
execute()(getStatus)
  .then(res => {
    console.log(res)
  })
// Sync exec way
// with custom executor
// const parsedData = executeSync()(getStatus)
// console.log(parsedData)

// // Without executor
// const execSync = require('child_process').execSync
// const methods = require('./utils/methods')

// // const data1 = execSync('git status --porcelain --ignored').toString()
// const data1 = execSync(methods.getStatus).toString()
// const parsedData = getStatus(data1)
