import {check as requiredUnless} from '../src/requiredUnless'

const T = () => true
const F = () => false

describe('requiredUnless validator', () => {
  it('should not validate empty string when functional condition is not met', () => {
    expect(requiredUnless(F)('')).toBeFalsy()
  })

  it('should validate empty string when functional condition met', () => {
    expect(requiredUnless(T)('')).toBeTruthy()
  })

  it('should not validate empty string when prop condition is not met', () => {
    expect(requiredUnless('prop', {prop: false})('')).toBeFalsy()
  })

  it('should validate empty string when prop condition met', () => {
    expect(requiredUnless('prop', {prop: true})('')).toBeTruthy()
  })
})
