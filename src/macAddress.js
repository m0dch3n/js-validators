import {req} from './common'
let name = 'macAddress'

export const check = (separator = ':') => (value) => {
  if (req(value) && typeof value === 'string') {
    const parts = typeof separator === 'string' && separator !== ''
      ? value.split(separator)
      : (value.length === 12 || value.length === 16) ? value.match(/.{2}/g) : null

    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid)
  }
  return false
}

const hexValid = (hex) => hex.toLowerCase().match(/^[0-9a-f]{2}$/)

export default (separator = ':') => ({
  check: check(separator),
  params: {name, separator}
})
