# node-git-cli-parser
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
> A lightweight NodeJS git-cli parser.

### The premise

The goal of this package is to call a single function and return an object containing the 
parsed stdout of the git command.

The package also provides a small wrapper around Node `child_process.exec` to execute the git-cli commands.
Meaning that you can choose to only use the parser functionality and implment an executor yourself. 

### Example

- 

```js
// Synchronous way
const executor = require('node-git-parser/@executor)
const { getStatus } = require('node-git-parser')

const data = executor( getStatus() )
console.log(data) // [ { name: 'index.js', status: 'modified' } ]
```
```js
// Async way
const { getStatusAsync } = requrie('node-git-parser')
asyncExecutor(getStateusAsync)
  .then(res => {
    console.log(res) // [ { name: 'index.js', status: 'modified' } ]
  })
  .catch(error => console.log(error))
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

#### getStatus()
Returns an array of the file changes
`{ name: 'fileName.js', status: 'modified' }`

#### getLog()


#### getBranches()

#### getCurrentBranch()

### Caveats

### License

MIT - Tiago Taquelim
