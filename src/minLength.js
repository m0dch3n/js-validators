import {req, len} from './common'
let name = 'minLength'

export const check = (min) => (value) => {
  return req(value) && len(value) >= min
}

export default (min) => ({
  check: check(min),
  params: {name, min}
})
