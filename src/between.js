// Checks if a number or Date is in specified bounds. Min and max are both inclusive
import maxValue from './maxValue'
import minValue from './minValue'
let name = 'between'

export const check = (min, max) => (value) => {
  return minValue(min).check(value) && maxValue(max).check(value)
}

export default (min, max) => ({
  check: check(min, max),
  params: {name, min, max}
})
