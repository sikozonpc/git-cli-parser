const { getStatus } = require('../lib/bin')

describe('getStatus()', () => {
  const mockStdout = {
    name: 'test.js',
    status: 'added'
  }

  const parsedData = getStatus(` A test.js`)
  const emptyParsedData = getStatus(``)

  it('should return an array of objects with name and status properties not empty', () => {
    expect(typeof parsedData[0]).toEqual('object')
    expect(parsedData[0].name).toBeTruthy()
    expect(parsedData[0].status).toBeTruthy()
  })

  it('should return an empty array if none stdout is given', () => {
    expect(emptyParsedData).toHaveLength(0)
  })

  it('should parse correctly and the name and status properties should match the stdout', () => {
    expect(parsedData[0].name).toEqual(mockStdout.name)
    expect(parsedData[0].status).toEqual(mockStdout.status)
  })

  // TODO: Test diffrent status codes
})
