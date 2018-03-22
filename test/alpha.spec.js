import {check as alpha} from '../src/alpha'

describe('alpha validator', () => {
  it('should validate undefined', () => {
    expect(alpha(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(alpha(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(alpha('')).toBeFalsy()
  })

  it('should not validate numbers', () => {
    expect(alpha('1234')).toBeFalsy()
  })

  it('should not validate space', () => {
    expect(alpha(' ')).toBeFalsy()
  })

  it('should validate english letters', () => {
    expect(alpha('abcdefghijklmnopqrstuvwxyz')).toBeTruthy()
  })

  it('should validate english letters uppercase', () => {
    expect(alpha('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBeTruthy()
  })

  it('should not validate alphanum', () => {
    expect(alpha('abc123')).toBeFalsy()
  })

  it('should not validate padded letters', () => {
    expect(alpha(' abc ')).toBeFalsy()
  })

  it('should not validate unicode', () => {
    expect(alpha('🎉')).toBeFalsy()
  })
})
