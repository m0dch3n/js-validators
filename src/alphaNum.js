// Accepts only alphanumerics
import {regex} from './common'
let name = 'alphaNum'
let alphaNumRegex = /^[a-zA-Z0-9]*$/

export const check = (value) => {
  return regex(value, alphaNumRegex)
}

export default {
  check: check,
  params: {name, alphaNumRegex}
}
