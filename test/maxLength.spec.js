import {check as maxLength} from '../src/maxLength'

describe('maxLength validator', () => {
  it('should validate empty string', () => {
    expect(maxLength(5)('')).toBeTruthy()
  })

  it('should validate empty string for arbitrary limits', () => {
    expect(maxLength(-1)('')).toBeTruthy()
  })

  it('should validate null', () => {
    expect(maxLength(5)(null)).toBeTruthy()
  })

  it('should not validate too long string', () => {
    expect(maxLength(5)('abcdefgh')).toBeFalsy()
  })

  it('should validate characters on length bound', () => {
    expect(maxLength(5)('abcde')).toBeTruthy()
  })

  it('should not validate too much characters', () => {
    expect(maxLength(5)('abcdefghi')).toBeFalsy()
  })

  it('should validate chain of spaces', () => {
    expect(maxLength(5)('     ')).toBeTruthy()
  })

  it('should validate empty arrays', () => {
    expect(maxLength(-2)([])).toBeTruthy()
  })

  it('should validate short arrays', () => {
    expect(maxLength(5)([1])).toBeTruthy()
  })

  it('should not validate too long arrays', () => {
    expect(maxLength(5)([1, 2, 3, 4, 5, 6])).toBeFalsy()
  })

  it('should validate arrays on length bound', () => {
    expect(maxLength(5)([1, 2, 3, 4, 5])).toBeTruthy()
  })

  it('should validate empty objects', () => {
    expect(maxLength(-2)({})).toBeTruthy()
  })

  it('should validate short objects', () => {
    expect(maxLength(5)({a: 1})).toBeTruthy()
  })

  it('should not validate too long objects', () => {
    expect(maxLength(5)({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6})).toBeFalsy()
  })

  it('should validate objects on length bound', () => {
    expect(maxLength(5)({a: 1, b: 2, c: 3, d: 4, e: 5})).toBeTruthy()
  })
})
