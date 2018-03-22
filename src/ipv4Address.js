import {req} from './common'
let name = 'ipv4Address'

export const check = (value) => {
  if (req(value) && typeof value === 'string') {
    const nibbles = value.split('.')
    return nibbles.length === 4 && nibbles.every(nibbleValid)
  }
  return false
}

const nibbleValid = (nibble) => {
  if (nibble.length > 3 || nibble.length === 0) {
    return false
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false
  }

  if (!nibble.match(/^\d+$/)) {
    return false
  }

  const numeric = +nibble | 0
  return numeric >= 0 && numeric <= 255
}

export default {
  check: check,
  params: {name}
}
