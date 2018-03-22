import {req} from './common'
let name = 'required'

export const check = (value) => {
  return req(value)
}

export default {
  check: check,
  params: {name}
}
