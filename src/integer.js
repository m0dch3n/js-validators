// Accepts only integer
import {regex} from './common'
let name = 'integer'
let integerRegex = /^-?[0-9]*$/

export const check = (value) => {
  return regex(value, integerRegex)
}

export default {
  check: check,
  params: {name, integerRegex}
}
