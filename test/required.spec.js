import {check as required} from '../src/required'

describe('required validator', () => {
  it('should not validate empty string', () => {
    expect(required('')).toBeFalsy()
  })

  it('should not validate empty arrays', () => {
    expect(required([])).toBeFalsy()
  })

  it('should validate nonempty arrays', () => {
    expect(required([1])).toBeTruthy()
  })

  it('should not validate empty objects', () => {
    expect(required({})).toBeFalsy()
  })

  it('should validate nonempty objects', () => {
    expect(required({a: 1})).toBeTruthy()
  })

  it('should not validate undefined', () => {
    expect(required(undefined)).toBeFalsy()
  })

  it('should not validate null', () => {
    expect(required(null)).toBeFalsy()
  })

  it('should not validate false', () => {
    expect(required(false)).toBeFalsy()
  })

  it('should validate true', () => {
    expect(required(true)).toBeTruthy()
  })

  it('should validate string only with spaces', () => {
    expect(required('  ')).toBeTruthy()
  })

  it('should validate english words', () => {
    expect(required('hello')).toBeTruthy()
  })

  it('should validate padded words', () => {
    expect(required(' hello ')).toBeTruthy()
  })

  it('should validate unicode', () => {
    expect(required('🎉')).toBeTruthy()
  })

  it('should validate correct date', () => {
    expect(required(new Date(1234123412341))).toBeTruthy()
  })

  it('should not validate invalid date', () => {
    expect(required(new Date('a'))).toBeFalsy()
  })
})
