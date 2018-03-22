import {check as decimal} from '../src/decimal'

describe('decimal validator', () => {
  it('should validate undefined', () => {
    expect(decimal(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(decimal(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(decimal('')).toBeFalsy()
  })

  it('should validate numbers', () => {
    expect(decimal('01234')).toBeTruthy()
  })

  it('should not validate space', () => {
    expect(decimal(' ')).toBeFalsy()
  })

  it('should not validate english letters', () => {
    expect(decimal('abcdefghijklmnopqrstuvwxyz')).toBeFalsy()
  })

  it('should not validate english letters uppercase', () => {
    expect(decimal('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBeFalsy()
  })

  it('should not validate alphanum', () => {
    expect(decimal('abc123')).toBeFalsy()
  })

  it('should not validate padded letters', () => {
    expect(decimal(' 123 ')).toBeFalsy()
  })

  it('should not validate unicode', () => {
    expect(decimal('🎉')).toBeFalsy()
  })

  it('should validate negative numbers', () => {
    expect(decimal('-123')).toBeTruthy()
  })

  it('should validate decimal numbers', () => {
    expect(decimal('0.1')).toBeTruthy()
    expect(decimal('1.0')).toBeTruthy()
  })

  it('should validate negative decimal numbers', () => {
    expect(decimal('-123.4')).toBeTruthy()
  })

  it('should not validate multiple decimal points', () => {
    expect(decimal('-123.4.')).toBeFalsy()
    expect(decimal('..')).toBeFalsy()
  })

  it('should validate decimal numbers without leading digits', () => {
    expect(decimal('.1')).toBeTruthy()
  })

  it('should not validate decimal numbers without trailing digits', () => {
    expect(decimal('1.')).toBeFalsy()
  })
})
