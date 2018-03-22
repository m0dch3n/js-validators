import {req, ref} from './common'
let name = 'requiredUnless'

export const check = (prop, object) => (value) => {
  return !ref(prop, this, object) ? req(value) : true
}

export default (prop, object) => ({
  check: check(prop, object),
  params: {name, prop}
})
