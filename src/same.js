import isEqual from 'lodash.isequal'
let name = 'same'

export const check = (value1, value2) => {
  return isEqual(value1, value2)
}

export default {
  check: check,
  params: {name}
}
