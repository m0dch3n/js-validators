import {check as numeric} from '../src/numeric'

describe('numeric validator', () => {
  it('should validate undefined', () => {
    expect(numeric(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(numeric(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(numeric('')).toBeFalsy()
  })

  it('should validate numbers', () => {
    expect(numeric('01234')).toBeTruthy()
  })

  it('should not validate space', () => {
    expect(numeric(' ')).toBeFalsy()
  })

  it('should not validate english letters', () => {
    expect(numeric('abcdefghijklmnopqrstuvwxyz')).toBeFalsy()
  })

  it('should not validate english letters uppercase', () => {
    expect(numeric('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBeFalsy()
  })

  it('should not validate alphanum', () => {
    expect(numeric('abc123')).toBeFalsy()
  })

  it('should not validate padded letters', () => {
    expect(numeric(' 123 ')).toBeFalsy()
  })

  it('should not validate unicode', () => {
    expect(numeric('🎉')).toBeFalsy()
  })

  it('should not validate negative numbers', () => {
    expect(numeric('-123')).toBeFalsy()
  })

  it('should not validate decimal numbers', () => {
    expect(numeric('0.1')).toBeFalsy()
    expect(numeric('1.0')).toBeFalsy()
  })

  it('should not validate negative decimal numbers', () => {
    expect(numeric('-123.4')).toBeFalsy()
  })
})
