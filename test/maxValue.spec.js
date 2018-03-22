import {check as maxValue} from '../src/maxValue'

describe('maxValue validator', () => {
  it('should validate max number', () => {
    expect(maxValue(5)(5)).toBeTruthy()
  })

  it('should validate the valid number', () => {
    expect(maxValue(5)(4)).toBeTruthy()
  })

  it('should validate the invalid number', () => {
    expect(maxValue(5)(6)).toBeFalsy()
  })

  it('should validate the string value', () => {
    expect(maxValue(5)('not string here')).toBeFalsy()
  })

  it('should validate the object value', () => {
    expect(maxValue(5)({hello: 'world'})).toBeFalsy()
  })

  it('should validate the max date value', () => {
    expect(maxValue(new Date(1000000))(new Date(1000000))).toBeTruthy()
  })

  it('should validate the valid date value', () => {
    expect(maxValue(new Date(1000000))(new Date(100))).toBeTruthy()
  })

  it('should validate the invalid date value', () => {
    expect(maxValue(new Date(100))(new Date(1000000))).toBeFalsy()
  })
})
