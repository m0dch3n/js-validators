// Accepts only numerics.
import {regex} from './common'
const name = 'numeric'
const numeric = /^[0-9]*$/

export const check = (value) => {
  return regex(value, numeric)
}

export default {
  check: check,
  params: {name, numeric}
}
