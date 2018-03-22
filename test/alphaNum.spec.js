import {check as alphaNum} from '../src/alphaNum'

describe('alphaNum validator', () => {
  it('should validate undefined', () => {
    expect(alphaNum(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(alphaNum(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(alphaNum('')).toBeFalsy()
  })

  it('should validate numbers', () => {
    expect(alphaNum('1234567890')).toBeTruthy()
  })

  it('should not validate space', () => {
    expect(alphaNum(' ')).toBeFalsy()
  })

  it('should validate english letters', () => {
    expect(alphaNum('abcxyzABCXYZ')).toBeTruthy()
  })

  it('should validate alphaNum', () => {
    expect(alphaNum('abc123')).toBeTruthy()
  })

  it('should not validate padded letters', () => {
    expect(alphaNum(' abc ')).toBeFalsy()
  })

  it('should not validate unicode', () => {
    expect(alphaNum('🎉')).toBeFalsy()
  })
})
