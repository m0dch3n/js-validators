import {check as email} from '../src/email'

describe('email validator', () => {
  it('should validate undefined', () => {
    expect(email(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(email(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(email('')).toBeFalsy()
  })

  it('should not validate numbers', () => {
    expect(email('12345')).toBeFalsy()
  })

  it('should not validate strings', () => {
    expect(email('asdf12345')).toBeFalsy()
  })

  it('should not validate space', () => {
    expect(email(' ')).toBeFalsy()
  })

  it('should not validate incomplete addresses', () => {
    expect(email('someone@')).toBeFalsy()
    expect(email('someone@gmail')).toBeFalsy()
    expect(email('someone@gmail.')).toBeFalsy()
    expect(email('someone@gmail.c')).toBeFalsy()
    expect(email('gmail.com')).toBeFalsy()
    expect(email('@gmail.com')).toBeFalsy()
  })

  it('should not validate addresses that contain unsupported characters', () => {
    expect(email('someone@g~mail.com')).toBeFalsy()
    expect(email('someone@g=ail.com')).toBeFalsy()
    expect(email('"someone@gmail.com')).toBeFalsy()
  })

  it('should not validate addresses that contain spaces', () => {
    expect(email('someone@gmail.com ')).toBeFalsy()
    expect(email('someone@gmail.com    ')).toBeFalsy()
    expect(email(' someone@gmail.com')).toBeFalsy()
  })

  it('should validate real addresses', () => {
    expect(email('someone@gmail.com')).toBeTruthy()
    expect(email('someone@g-mail.com')).toBeTruthy()
    expect(email('some!one@gmail.com')).toBeTruthy()
    expect(email('soMe12_one@gmail.com')).toBeTruthy()
    expect(email('someone@gmail.co')).toBeTruthy()
    expect(email('someone@g.cn')).toBeTruthy()
    expect(email('someone@g.accountants')).toBeTruthy()
    expect(email('"some@one"@gmail.com')).toBeTruthy()
    expect(email('"some one"@gmail.com')).toBeTruthy()
  })
})
