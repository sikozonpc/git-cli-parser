const { branches } = require('./bin')
const { run } = require('./executor/exec')

// Async exec way
// run(gitStatus)
//  .then(res => {
//    console.log(res)
//  })
//  .catch(err => console.log(err))

async function app () {
  try {
    const response = await run(branches)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}
app()
// Sync exec way
// with custom executor
// const parsedData = executeSync()(gitStatus)
// console.log(parsedData)

// // Without executor
// const execSync = require('child_process').execSync
// const methods = require('./utils/methods')

// // const data1 = execSync('git status --porcelain --ignored').toString()
// const data1 = execSync(methods.gitStatus).toString()
// const parsedData = gitStatus(data1)
