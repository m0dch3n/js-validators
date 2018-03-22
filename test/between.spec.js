import {check as between} from '../src/between'

describe('between validator', () => {
  it('should validate empty string', () => {
    expect(between(2, 3)('')).toBeFalsy()
  })

  it('should validate numeric zero in range', () => {
    expect(between(-1, 1)(0)).toBeTruthy()
  })

  it('should not validate numeric zero outside of range', () => {
    expect(between(2, 3)(0)).toBeFalsy()
  })

  it('should not validate input outside of range', () => {
    expect(between(5, 10)('15')).toBeFalsy()
    expect(between(5, 10)('3')).toBeFalsy()
  })

  it('should have inclusive lower bound', () => {
    expect(between(5, 10)('5')).toBeTruthy()
  })

  it('should have inclusive upper bound', () => {
    expect(between(3, 4)('4')).toBeTruthy()
  })

  it('should validate exact number in point range', () => {
    expect(between(3, 3)('3')).toBeTruthy()
  })

  it('should not validate number just outside of range', () => {
    expect(between(3, 3)('3')).toBeTruthy()
  })

  it('should not validate space', () => {
    expect(between(3, 3)(' ')).toBeFalsy()
  })

  it('should not validate text', () => {
    expect(between(3, 3)('hello')).toBeFalsy()
  })

  it('should not validate number-like text', () => {
    expect(between(3, 3)('15a')).toBeFalsy()
  })

  it('should not validate padded numbers', () => {
    expect(between(5, 20)(' 15')).toBeFalsy()
    expect(between(5, 20)('15 ')).toBeFalsy()
  })

  it('should validate fractions', () => {
    expect(between(3, 16)('15.5')).toBeTruthy()
  })

  it('should validate negative fractions on bound', () => {
    expect(between(-15.512, 4.56)('-15.512')).toBeTruthy()
  })

  it('should validate real numbers', () => {
    expect(between(3, 16)(15.5)).toBeTruthy()
  })

  it('should not validate real numbers outside of range', () => {
    expect(between(3, 16)(25.5)).toBeFalsy()
  })

  it('should not validate NaN', () => {
    expect(between(3, 16)(NaN)).toBeFalsy()
  })

  it('should validate the upper bound date value', () => {
    expect(between(new Date(100), new Date(10000))(new Date(10000))).toBeTruthy()
  })

  it('should validate the lower bound date value', () => {
    expect(between(new Date(100), new Date(10000))(new Date(100))).toBeTruthy()
  })

  it('should validate the valid date value', () => {
    expect(between(new Date(100), new Date(10000))(new Date(1000))).toBeTruthy()
  })

  it('should validate the invalid date value', () => {
    expect(between(new Date(100), new Date(10000))(new Date(100000))).toBeFalsy()
  })
})
