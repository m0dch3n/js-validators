import {ref} from './common'
import {check as same} from './same'
let name = 'sameAs'

export const check = (prop, object) => function (value) {
  return same(ref(prop, this, object), value)
}

export default (prop, object) => ({
  check: check(prop, object),
  params: {name, prop}
})
