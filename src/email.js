// Accepts valid email addresses
import {regex} from './common'
let name = 'email'
let emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/

export const check = (value) => {
  return regex(value, emailRegex)
}

export default {
  check: check,
  params: {name, emailRegex}
}
