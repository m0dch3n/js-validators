import {check as macAddress} from '../src/macAddress'

describe('macAddress validator', () => {
  it('should validate undefined', () => {
    expect(macAddress()(undefined)).toBeFalsy()
  })

  it('should validate null', () => {
    expect(macAddress()(null)).toBeFalsy()
  })

  it('should validate empty string', () => {
    expect(macAddress()('')).toBeFalsy()
  })

  it('should validate zero mac', () => {
    expect(macAddress()('00:00:00:00:00:00')).toBeTruthy()
    expect(macAddress()('00:00:00:00:00:00:00:00')).toBeTruthy()
  })

  it('should validate correct mac', () => {
    expect(macAddress()('de:ad:be:ef:ba:ad')).toBeTruthy()
    expect(macAddress()('de:ad:be:ef:ba:ad:f0:0d')).toBeTruthy()
  })

  it('should not validate mac with too many parts', () => {
    expect(macAddress()('00:00:00:00:00:00:00')).toBeFalsy()
    expect(macAddress()('00:00:00:00:00:00:00:00:00')).toBeFalsy()
  })

  it('should not validate mac with not enough parts', () => {
    expect(macAddress()('00')).toBeFalsy()
    expect(macAddress()('00:00:00:00:00:00:00')).toBeFalsy()
  })

  it('should not validate mac with too big numbers', () => {
    expect(macAddress()('ff0:123:22:33:44:00')).toBeFalsy()
    expect(macAddress()('ff0:123:22:33:44:00:00:00')).toBeFalsy()
  })

  it('should not validate mac with single zero', () => {
    expect(macAddress()('de:ad:be:ef:0:00')).toBeFalsy()
    expect(macAddress()('de:ad:be:ef:0:00:00:00')).toBeFalsy()
  })

  it('should not validate mac with negative numbers', () => {
    expect(macAddress()('00:11:22:33:44:-5')).toBeFalsy()
    expect(macAddress()('00:11:22:33:44:-5:66:77')).toBeFalsy()
  })

  it('should not validate mac with bad hex numbers', () => {
    expect(macAddress()('he:ll:ow:or:ld:00')).toBeFalsy()
    expect(macAddress()('be:ef:ba:ad:fo:od')).toBeFalsy()
    expect(macAddress()('he:ll:ow:or:ld:00:00:00')).toBeFalsy()
    expect(macAddress()('de:ad:be:ef:ba:ad:fo:od')).toBeFalsy()
  })

  it('should not validate mac with bad separator', () => {
    expect(macAddress()('00;00;00;00;00;00')).toBeFalsy()
    expect(macAddress()('00;00;00;00;00;00;00;00')).toBeFalsy()
  })

  it('should validate mac with custom separator', () => {
    expect(macAddress(';')('00;00;00;00;00;00')).toBeTruthy()
    expect(macAddress(';')('00;00;00;00;00;00;00;00')).toBeTruthy()
  })

  it('should validate mac with empty separator', () => {
    expect(macAddress('')('000000000000')).toBeTruthy()
    expect(macAddress('')('deadbeefdead')).toBeTruthy()
    expect(macAddress('')('00ff00112233')).toBeTruthy()
    expect(macAddress('')('0000000000000000')).toBeTruthy()
    expect(macAddress('')('deadbeefdeadbeef')).toBeTruthy()
    expect(macAddress('')('00ff001122334455')).toBeTruthy()
  })

  it('should not validate bad mac with empty separator', () => {
    expect(macAddress('')('00000000z000')).toBeFalsy()
    expect(macAddress('')('00000000z0000000')).toBeFalsy()
  })

  it('should not validate too short mac with empty separator', () => {
    expect(macAddress('')('00')).toBeFalsy()
    expect(macAddress('')('000000000000000')).toBeFalsy()
  })

  it('should not validate too long mac with empty separator', () => {
    expect(macAddress('')('00000000000000000')).toBeFalsy()
  })

  it('should treat nonstring separator as empty', () => {
    expect(macAddress(false)('000000000000')).toBeTruthy()
    expect(macAddress(true)('000000000000')).toBeTruthy()
    expect(macAddress(new Date())('000000000000')).toBeTruthy()
    expect(macAddress(false)('0000000000000000')).toBeTruthy()
    expect(macAddress(true)('0000000000000000')).toBeTruthy()
    expect(macAddress(new Date())('0000000000000000')).toBeTruthy()
  })
})
