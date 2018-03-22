import {check as minLength} from '../src/minLength'

describe('minLength validator', () => {
  it('should validate empty string', () => {
    expect(minLength(5)('')).toBeFalsy()
  })

  it('should validate null', () => {
    expect(minLength(5)(null)).toBeFalsy()
  })

  it('should not validate too short string', () => {
    expect(minLength(5)('a')).toBeFalsy()
  })

  it('should validate enough characters', () => {
    expect(minLength(5)('abcde')).toBeTruthy()
  })

  it('should validate more than necessary characters', () => {
    expect(minLength(5)('abcdefghi')).toBeTruthy()
  })

  it('should validate enough spaces', () => {
    expect(minLength(5)('     ')).toBeTruthy()
  })

  it('should validate empty arrays', () => {
    expect(minLength(5)([])).toBeFalsy()
  })

  it('should not validate too short arrays', () => {
    expect(minLength(5)([1])).toBeFalsy()
  })

  it('should validate arrays with enough elements', () => {
    expect(minLength(5)([1, 2, 3, 4, 5])).toBeTruthy()
  })

  it('should validate empty objects', () => {
    expect(minLength(5)({})).toBeFalsy()
  })

  it('should not validate too short objects', () => {
    expect(minLength(5)({a: 1})).toBeFalsy()
  })

  it('should validate objects with enough elements', () => {
    expect(minLength(5)({a: 1, b: 2, c: 3, d: 4, e: 5})).toBeTruthy()
  })
})
