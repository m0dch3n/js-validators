import {check as integer} from '../src/integer'

describe('integer validator', () => {
  it('should validate undefined', () => {
    expect(integer(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(integer(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(integer('')).toBeFalsy()
  })

  it('should validate numbers', () => {
    expect(integer('01234')).toBeTruthy()
  })

  it('should not validate space', () => {
    expect(integer(' ')).toBeFalsy()
  })

  it('should not validate english letters', () => {
    expect(integer('abcdefghijklmnopqrstuvwxyz')).toBeFalsy()
  })

  it('should not validate english letters uppercase', () => {
    expect(integer('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBeFalsy()
  })

  it('should not validate alphanum', () => {
    expect(integer('abc123')).toBeFalsy()
  })

  it('should not validate padded letters', () => {
    expect(integer(' 123 ')).toBeFalsy()
  })

  it('should not validate unicode', () => {
    expect(integer('🎉')).toBeFalsy()
  })

  it('should validate negative numbers', () => {
    expect(integer('-123')).toBeTruthy()
  })

  it('should not validate decimal numbers', () => {
    expect(integer('0.1')).toBeFalsy()
    expect(integer('1.0')).toBeFalsy()
  })

  it('should not validate negative decimal numbers', () => {
    expect(integer('-123.4')).toBeFalsy()
  })
})
