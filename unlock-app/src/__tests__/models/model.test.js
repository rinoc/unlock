import Model from '../../models/model.js'

describe('Model', () => {

  class Thing extends Model {
  }
  Thing.attributeTypes = {
    hello: 'string',
  }

  const o = new Thing({
    hello: 'world',
  })

  it('should have the right getters', () => {
    expect(o.hello).toEqual('world')
  })

  it('should have the right setters', () => {
    o.hello = 'monde'
    expect(o.hello).toEqual('monde')
  })

  it('should prevent extensions', () => {
    expect(() => {
      o.thank = 'you'
    }).toThrow()
  })

  it('should be able to clone objects', () => {
    const p = o.clone()
    expect(p.constructor.name).toEqual(o.constructor.name)
    expect(p.hello).toEqual(o.hello)
  })

  it('should work for empty objects (missing attributeTypes)', () => {
    class Empty extends Model {}
    const empty = new Empty()
    expect(() => {
      empty.thank = 'you'
    }).toThrow()
  })

})