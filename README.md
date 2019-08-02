# node-git-cli-parser
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
> A lightweight NodeJS git-cli parser.

### The premise

The goal of this package is to call a single function and return an object containing the 
parsed stdout of the git command.

### Example

```js
// Synchronous way
const { getStatus } = require('node-git-parser')

const data = getStatus()
console.log(data) // [ { name: 'index.js', status: 'modified' } ]
```
```js
// Async way
const { getStatusAsync } = requrie('node-git-parser')
getStateusAsync()
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
`{ name: 'fileName', status: 'modified' }`

#### getLog()


#### getBranches()

#### getCurrentBranch()

### Caveats

### License

MIT - Tiago Taquelim
