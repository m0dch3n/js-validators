import {check as sameAs} from '../src/sameAs'

describe('sameAs validator', () => {
  const object = {
    first: 'hello',
    second: 'world',
    undef: undefined,
    nil: null,
    empty: '',
    path: {
      to: {
        value: 'value'
      }
    }
  }

  it('should not validate different values', () => {
    expect(sameAs('first', object)('world')).toBeFalsy()
    expect(sameAs('second', object)('hello')).toBeFalsy()
    expect(sameAs('first', object)(undefined)).toBeFalsy()
    expect(sameAs('first', object)(null)).toBeFalsy()
    expect(sameAs('first', object)('')).toBeFalsy()
    expect(sameAs('undef', object)(null)).toBeFalsy()
    expect(sameAs('nil', object)(undefined)).toBeFalsy()
    expect(sameAs('empty', object)('any')).toBeFalsy()
  })

  it('should validate identical values', () => {
    expect(sameAs('first', object)('hello')).toBeTruthy()
    expect(sameAs('second', object)('world')).toBeTruthy()
    expect(sameAs('undef', object)(undefined)).toBeTruthy()
    expect(sameAs('nil', object)(null)).toBeTruthy()
    expect(sameAs('empty', object)('')).toBeTruthy()
    expect(sameAs('path.to.value', object)('value')).toBeTruthy()
  })

  it('should allow function expression', () => {
    expect(sameAs(p => p.first, object)('hello')).toBeTruthy()
  })
})
