import {check as requiredIf} from '../src/requiredIf'

const T = () => true
const F = () => false

describe('requiredIf validator', () => {
  it('should not validate empty string when functional condition is met', () => {
    expect(requiredIf(T)('')).toBeFalsy()
  })

  it('should validate empty string when functional condition not met', () => {
    expect(requiredIf(F)('')).toBeTruthy()
  })

  it('should not validate empty string when prop condition is met', () => {
    expect(requiredIf('prop', {prop: true})('')).toBeFalsy()
  })

  it('should validate empty string when prop condition not met', () => {
    expect(requiredIf('prop', {prop: false})('')).toBeTruthy()
  })
})
