import {check as same} from '../src/same'

describe('same validator', () => {
  it('should not validate different values', () => {
    expect(same('value1', 'value2')).toBeFalsy()
    expect(same('value1', undefined)).toBeFalsy()
    expect(same('value1', null)).toBeFalsy()
    expect(same('value1', true)).toBeFalsy()
    expect(same('value1', false)).toBeFalsy()
    expect(same('value1', '')).toBeFalsy()
    expect(same('value1', {})).toBeFalsy()
    expect(same('value1', [1])).toBeFalsy()
    expect(same(undefined, 'value2')).toBeFalsy()
    expect(same(null, 'value2')).toBeFalsy()
    expect(same(true, 'value2')).toBeFalsy()
    expect(same(false, 'value2')).toBeFalsy()
    expect(same('', 'value2')).toBeFalsy()
    expect(same({}, 'value2')).toBeFalsy()
    expect(same([1], 'value2')).toBeFalsy()
    expect(same([1], [2])).toBeFalsy()
    expect(same({bla: 1}, {bla: 2})).toBeFalsy()
  })

  it('should validate identical values', () => {
    expect(same('value1', 'value1')).toBeTruthy()
    expect(same(true, true)).toBeTruthy()
    expect(same(false, false)).toBeTruthy()
    expect(same(undefined, undefined)).toBeTruthy()
    expect(same(null, null)).toBeTruthy()
    expect(same('', '')).toBeTruthy()
    expect(same([], [])).toBeTruthy()
    expect(same({}, {})).toBeTruthy()
    expect(same([1], [1])).toBeTruthy()
    expect(same({bla: 1}, {bla: 1})).toBeTruthy()
  })

})
