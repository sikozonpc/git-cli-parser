const { getStatus } = require('../lib/bin')
const statusCodes = require('../lib/utils/statusCodes')

function createTest (code) {
  it(`should return ${statusCodes[code]} status code`, () => {
    const parsedData = getStatus(`${code} test.js`)

    expect(parsedData[0].status).toEqual(statusCodes[code])
  })
}

describe('getStatus()', () => {
  const mockStdout = {
    name: 'test.js',
    status: 'added'
  }

  const parsedData = getStatus(`A test.js`)
  const emptyParsedData = getStatus(``)

  it('should return an array of objects with name and status properties not empty', () => {
    expect(typeof parsedData[0]).toEqual('object')
    expect(parsedData[0].name).toEqual(mockStdout.name)
    expect(parsedData[0].status).toEqual(mockStdout.status)
  })

  it('should return an empty array if none stdout is given', () => {
    expect(emptyParsedData).toHaveLength(0)
  })

  describe('Status codes: ', () => {
    for (const code in statusCodes) {
      createTest(code)
    }
  })

  //TODO: test Async
})
