import get from 'lodash.get'

// "required" core
export const req = value => {
  if (Array.isArray(value)) return !!value.length
  if (value === undefined || value === null || value === false) {
    return false
  }

  if (value instanceof Date) {
    // invalid date won't pass
    return !isNaN(value.getTime())
  }

  if (typeof value === 'object') {
    for (let _ in value) return true
    return false
  }

  return !!String(value).length
}

// get length in type-agnostic way
export const len = value => {
  if (Array.isArray(value)) return value.length
  if (typeof value === 'object') {
    return Object.keys(value).length
  }
  return String(value).length
}

// regex based validator template
export const regex = (value, expr) => (req(value) && expr.test(value))

export const ref = (prop, thisArg, object) =>
  typeof prop === 'function'
    ? prop.call(thisArg, object)
    : get(object, prop)
