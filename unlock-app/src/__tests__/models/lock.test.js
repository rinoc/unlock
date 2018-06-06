import Lock from '../../models/lock.js'

describe('Lock', () => {

  const lock = new Lock({
    address: '0xdeadbeef',
  })

  it('should have the right address', () => {
    expect(lock.address).toEqual('0xdeadbeef')
  })

  it('should have the right balance', () => {
    lock.balance = 100
    expect(lock.balance).toEqual(100)
  })

})