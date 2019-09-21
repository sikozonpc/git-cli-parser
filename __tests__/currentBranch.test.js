const { currBranch } = require('../lib/bin')

describe('currBranch()', () => {
  const mockStdout = {
    branch: 'develop'
  }

  const parsedData = currBranch('develop')
  const emptyParsedData = currBranch()

  it('should return the correct current branch', () => {
    expect(parsedData.branch).toEqual(mockStdout.branch)
  })

  it('should return the incorrect current branch', () => {
    expect(emptyParsedData.branch).toEqual(undefined)
  })
})
