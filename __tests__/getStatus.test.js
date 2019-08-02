const { getStatus } = require('../lib/bin')

const mockData = {
  name: 'test.js',
  status: 'added'
}

describe('getStatus', () => {
  it('should return an array of objects with name and status properties not empty', () => {
    const data = getStatus('--porcelain')
    expect(typeof data === 'array')
    expect(data[0].name).toEqual(mockData.name)
    expect(data[0].status).toEqual(mockData.status)
  })
})
