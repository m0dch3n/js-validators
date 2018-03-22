import {req} from './common'
let name = 'maxValue'

export const check = (max) => (value) => {
  return req(value) && ((!/\s/.test(value) || value instanceof Date) && +value <= +max)
}

export default (max) => ({
  check: check(max),
  params: {name, max}
})
