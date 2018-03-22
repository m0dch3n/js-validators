import {check as ipv4Address} from '../src/ipv4Address'

describe('ipv4Address validator', () => {
  it('should validate undefined', () => {
    expect(ipv4Address(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(ipv4Address(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(ipv4Address('')).toBeFalsy()
  })

  it('should validate basic loopback', () => {
    expect(ipv4Address('127.0.0.1')).toBeTruthy()
  })

  it('should validate public address 1', () => {
    expect(ipv4Address('8.8.8.8')).toBeTruthy()
  })

  it('should validate public address 2', () => {
    expect(ipv4Address('123.41.12.168')).toBeTruthy()
  })

  it('should validate private address', () => {
    expect(ipv4Address('10.0.0.1')).toBeTruthy()
  })

  it('should validate private address with multiple zeros', () => {
    expect(ipv4Address('10.0.0.0')).toBeTruthy()
  })

  it('should not validate padded loopback', () => {
    expect(ipv4Address(' 127.0.0.1 ')).toBeFalsy()
  })

  it('should not validate nonzero nibbles starting with 0', () => {
    expect(ipv4Address('127.0.00.1')).toBeFalsy()
  })

  it('should not validate not enough nibbles', () => {
    expect(ipv4Address('127.0.1')).toBeFalsy()
  })

  it('should not validate too many nibbles', () => {
    expect(ipv4Address('10.0.1.2.3')).toBeFalsy()
  })

  it('should not validate negatives', () => {
    expect(ipv4Address('1.2.3.-4')).toBeFalsy()
  })

  it('should not validate too big values', () => {
    expect(ipv4Address('1.256.3.4')).toBeFalsy()
  })

  it('should not validate masks', () => {
    expect(ipv4Address('10.0.0.1/24')).toBeFalsy()
  })
})
