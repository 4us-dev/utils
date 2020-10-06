import isCPF from './isCPF';

describe('isCPF', () => {
  it('should return false when input is undefined', () => {
    expect(isCPF()).toBeFalsy();
  });

  it('should return false when input is null', () => {
    expect(isCPF(null)).toBeFalsy();
  });

  it('should return false when input is empty', () => {
    expect(isCPF('')).toBeFalsy();
  });

  it('should return false when input not contains all digits', () => {
    expect(isCPF('1234567891')).toBeFalsy();
  });

  it('should return true with CPF valid with mask', () => {
    expect(isCPF('620.721.310-65')).toBeTruthy();
  });

  it('should return true with CPF valid without mask', () => {
    expect(isCPF('62072131065')).toBeTruthy();
  });

  it('should return false if CPF is invalid with mask', () => {
    expect(isCPF('620.721.310-64')).toBeFalsy();
  });

  it('should return false if CPF is invalid without mask', () => {
    expect(isCPF('62072131064')).toBeFalsy();
  });

  it('should return false if contains letters', () => {
    expect(isCPF('62072131t065')).toBeFalsy();
  });

  it('should return false if CPF is 00000000000', () => {
    expect(isCPF('00000000000')).toBeFalsy();
  });

  it('should return false if CPF is 11111111111', () => {
    expect(isCPF('11111111111')).toBeFalsy();
  });

  it('should return false if CPF is 22222222222', () => {
    expect(isCPF('22222222222')).toBeFalsy();
  });

  it('should return false if CPF is 33333333333', () => {
    expect(isCPF('33333333333')).toBeFalsy();
  });

  it('should return false if CPF is 44444444444', () => {
    expect(isCPF('44444444444')).toBeFalsy();
  });

  it('should return false if CPF is 55555555555', () => {
    expect(isCPF('55555555555')).toBeFalsy();
  });

  it('should return false if CPF is 66666666666', () => {
    expect(isCPF('66666666666')).toBeFalsy();
  });

  it('should return false if CPF is 77777777777', () => {
    expect(isCPF('77777777777')).toBeFalsy();
  });

  it('should return false if CPF is 88888888888', () => {
    expect(isCPF('88888888888')).toBeFalsy();
  });

  it('should return false if CPF is 99999999999', () => {
    expect(isCPF('99999999999')).toBeFalsy();
  });

  it('should test first check digit with 0', () => {
    expect(isCPF('36342487006')).toBeTruthy();
  });

  it('should test first check digit invalid', () => {
    expect(isCPF('36342487016')).toBeFalsy();
  });

  it('should test second check digit with 0', () => {
    expect(isCPF('14538220620')).toBeTruthy();
  });
});
