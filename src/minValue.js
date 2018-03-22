import {req} from './common'
let name = 'minValue'

export const check = (min) => (value) => {
  return req(value) && ((!/\s/.test(value) || value instanceof Date) && +value >= +min)
}

export default (min) => ({
  check: check(min),
  params: {name, min}
})
