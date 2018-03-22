// Accepts only alphabet characters
import {regex} from './common'
let name = 'alpha'
let alphaRegex = /^[a-zA-Z]*$/

export const check = (value) => {
  return regex(value, alphaRegex)
}

export default {
  check: check,
  params: {name, alphaRegex}
}
