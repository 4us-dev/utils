import isCNPJ from './isCNPJ';

describe('isCNPJ', () => {
  it('should return false when input is undefined', () => {
    expect(isCNPJ()).toBeFalsy();
  });

  it('should return false when input is null', () => {
    expect(isCNPJ(null)).toBeFalsy();
  });

  it('should return false when input is empty', () => {
    expect(isCNPJ('')).toBeFalsy();
  });

  it('should return false when input not contains all digits', () => {
    expect(isCNPJ('1234567890123')).toBeFalsy();
  });

  it('should return true with CNPJ valid with mask', () => {
    const input = '94.338.204/0001-80';
    expect(isCNPJ(input)).toBeTruthy();
  });

  it('should return true with CNPJ valid without mask', () => {
    const input = '94338204000180';
    expect(isCNPJ(input)).toBeTruthy();
  });

  it('should return false when CNPJ is invalid with mask', () => {
    const input = '94.338.204/0001-81';
    expect(isCNPJ(input)).toBeFalsy();
  });

  it('should return false when CNPJ is invalid without mask', () => {
    const input = '94338204000181';
    expect(isCNPJ(input)).toBeFalsy();
  });

  it('should return false if contains letters', () => {
    const input = '94338204000t180';
    expect(isCNPJ(input)).toBeFalsy();
  });

  it('should return false if CNPJ is 00000000000000', () => {
    expect(isCNPJ('00000000000000')).toBeFalsy();
  });

  it('should return false if CNPJ is 11111111111111', () => {
    expect(isCNPJ('11111111111111')).toBeFalsy();
  });

  it('should return false if CNPJ is 22222222222222', () => {
    expect(isCNPJ('22222222222222')).toBeFalsy();
  });

  it('should return false if CNPJ is 33333333333333', () => {
    expect(isCNPJ('33333333333333')).toBeFalsy();
  });

  it('should return false if CNPJ is 44444444444444', () => {
    expect(isCNPJ('44444444444444')).toBeFalsy();
  });

  it('should return false if CNPJ is 55555555555555', () => {
    expect(isCNPJ('55555555555555')).toBeFalsy();
  });

  it('should return false if CNPJ is 66666666666666', () => {
    expect(isCNPJ('66666666666666')).toBeFalsy();
  });

  it('should return false if CNPJ is 77777777777777', () => {
    expect(isCNPJ('77777777777777')).toBeFalsy();
  });

  it('should return false if CNPJ is 88888888888888', () => {
    expect(isCNPJ('88888888888888')).toBeFalsy();
  });

  it('should return false if CNPJ is 99999999999999', () => {
    expect(isCNPJ('99999999999999')).toBeFalsy();
  });
});
