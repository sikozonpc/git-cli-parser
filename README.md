# node-git-cli-parser
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
> A lightweight NodeJS git-cli parser.

### The premise

The goal of this package is to call a single function and return an object containing the 
parsed stdout of the git command.

The package also provides a small wrapper around Node `child_process.exec` to execute the git-cli commands.
Meaning that you can choose to only use the parser functionality and implment an executor yourself. 

### Example

```js
// Synchronous way
const { runSync } = require('node-git-parser/@executor')
const { gitStatus } = require('node-git-parser')

const parsedData = runSync()(gitStatus)
console.log(parsedData) // [ { name: 'index.js', status: 'modified' } ]
```

You probabily noticed that I imported a `runSync`, and yes the package comes with a 
custom executor, a wrapper around the node.js child_process, and all you have to pass to it 
is a node-git parser function.
This is the recommenend way to use the package but the **parser is fully decopled from the executor.**

```js
// This is without any executor
// Hardcoded string stdout or you can even read a stdout file and read its contents and pass to the parser
const { gitStatus } = require('node-git-parser')

const parsedData = gitStatus(` M stubFile.js`) // execlent for testing
```
```js
// We also provide a library with all the methods and their corresponding commands, we recommend using this way if you want to use your own executor, since it garantes it will work with our commands.
const methods = require('./utils/methods')
const { runSync } = require('child_process') // nodejs execSync

const rawData = runSync(methods.gitStatus).toString()
const parsedData = gitStatus(rawData)
```

> See all of the available methods in the docs.

```js
// This way you can provide custom arguments, however it can get a bit verbose, error prone and not all arguments you pass are expected to work
// So use it with that in mind
const rawData = execSync('git status --porcelain --ignored').toString()
const parsedData = gitStatus(rawData)
```

Since the parser is decopled from the executor, you can use this asynchronously. 
And ofcourse we have a custom async executor for you to use. 

```js
// Async way
const { gitStatus } = require('node-git-parser')
const { run } = require('node-git-parser/@executor')

async function app () {
  try {
    const response = await run(gitStatus)
    console.log(response) // [ { name: 'index.js', status: 'modified' } ]
  } catch (err) {
    console.log(err)
  }
}
app()
```

### Installation

```bash
npm install --save node-git-parser
```

or

```bash
yarn add node-git-parser
```

### Quick-docs

Go to the wiki LINK to see the full documentation.

#### gitStatus()
Returns an array of the file changes
`{ name: 'fileName.js', status: 'modified' }`

#### getLog()


#### getBranches()

#### getCurrentBranch()

### Caveats

### License

MIT - Tiago Taquelim
