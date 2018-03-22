import {req, len} from './common'
let name = 'maxLength'

export const check = (max) => (value) => {
  return !req(value) || len(value) <= max
}

export default (max) => ({
  check: check(max),
  params: {name, max}
})
