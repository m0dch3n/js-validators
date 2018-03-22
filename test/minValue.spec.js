import {check as minValue} from '../src/minValue'

describe('minValue validator', () => {
  it('should validate min number', () => {
    expect(minValue(5)(5)).toBeTruthy()
  })

  it('should validate the valid number', () => {
    expect(minValue(5)(6)).toBeTruthy()
  })

  it('should validate the invalid number', () => {
    expect(minValue(5)(4)).toBeFalsy()
  })

  it('should validate the string value', () => {
    expect(minValue(5)('not string here')).toBeFalsy()
  })

  it('should validate the object value', () => {
    expect(minValue(5)({hello: 'world'})).toBeFalsy()
  })

  it('should validate the minimum date value', () => {
    expect(minValue(new Date(100))(new Date(100))).toBeTruthy()
  })

  it('should validate the valid date value', () => {
    expect(minValue(new Date(100))(new Date(1000000))).toBeTruthy()
  })

  it('should validate the invalid date value', () => {
    expect(minValue(new Date(1000000))(new Date(100))).toBeFalsy()
  })
})
