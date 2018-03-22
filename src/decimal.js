// Accepts only decimals
import {regex} from './common'
let name = 'decimal'
let decimalRegex = /^[-]?\d*(\.\d+)?$/

export const check = (value) => {
  return regex(value, decimalRegex)
}

export default {
  check: check,
  params: {name, decimalRegex}
}
