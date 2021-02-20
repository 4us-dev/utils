import calculateCheckDigitModule11 from './calculateCheckDigitModule11';
import { BASE_CHECK_DIGIT_CNPJ } from './generateCNPJ';
import { BASE_CHECK_DIGIT_CPF } from './generateCPF';
describe('calculateCheckDigitModule11 using base CPF with 9 digits', () => {
  it('should return calculate check digit 0', () => {
    expect(calculateCheckDigitModule11('986569890', BASE_CHECK_DIGIT_CPF)).toBe(
      0
    );
  });
  it('should return calculate check digit 1', () => {
    expect(calculateCheckDigitModule11('845337420', BASE_CHECK_DIGIT_CPF)).toBe(
      1
    );
  });
  it('should return calculate check digit 2', () => {
    expect(calculateCheckDigitModule11('824532430', BASE_CHECK_DIGIT_CPF)).toBe(
      2
    );
  });
  it('should return calculate check digit 3', () => {
    expect(calculateCheckDigitModule11('760203500', BASE_CHECK_DIGIT_CPF)).toBe(
      3
    );
  });
  it('should return calculate check digit 4', () => {
    expect(calculateCheckDigitModule11('139704560', BASE_CHECK_DIGIT_CPF)).toBe(
      4
    );
  });
  it('should return calculate check digit 5', () => {
    expect(calculateCheckDigitModule11('754676450', BASE_CHECK_DIGIT_CPF)).toBe(
      5
    );
  });
  it('should return calculate check digit 6', () => {
    expect(calculateCheckDigitModule11('475014460', BASE_CHECK_DIGIT_CPF)).toBe(
      6
    );
  });
  it('should return calculate check digit 7', () => {
    expect(calculateCheckDigitModule11('013624270', BASE_CHECK_DIGIT_CPF)).toBe(
      7
    );
  });
  it('should return calculate check digit 8', () => {
    expect(calculateCheckDigitModule11('870467640', BASE_CHECK_DIGIT_CPF)).toBe(
      8
    );
  });
  it('should return calculate check digit 9', () => {
    expect(calculateCheckDigitModule11('191946650', BASE_CHECK_DIGIT_CPF)).toBe(
      9
    );
  });
  it('should return calculate check digit 10', () => {
    expect(calculateCheckDigitModule11('502926664', BASE_CHECK_DIGIT_CPF)).toBe(
      0
    );
  });
});

describe('calculateCheckDigitModule11 using base CPF with 10 digits', () => {
  it('should return calculate check digit 0', () => {
    expect(
      calculateCheckDigitModule11('0657184101', BASE_CHECK_DIGIT_CPF)
    ).toBe(0);
  });
  it('should return calculate check digit 1', () => {
    expect(
      calculateCheckDigitModule11('0136242707', BASE_CHECK_DIGIT_CPF)
    ).toBe(1);
  });
  it('should return calculate check digit 2', () => {
    expect(
      calculateCheckDigitModule11('3133523902', BASE_CHECK_DIGIT_CPF)
    ).toBe(2);
  });
  it('should return calculate check digit 3', () => {
    expect(
      calculateCheckDigitModule11('0333923502', BASE_CHECK_DIGIT_CPF)
    ).toBe(3);
  });
  it('should return calculate check digit 4', () => {
    expect(
      calculateCheckDigitModule11('9855208102', BASE_CHECK_DIGIT_CPF)
    ).toBe(4);
  });
  it('should return calculate check digit 5', () => {
    expect(
      calculateCheckDigitModule11('8704676408', BASE_CHECK_DIGIT_CPF)
    ).toBe(5);
  });
  it('should return calculate check digit 6', () => {
    expect(
      calculateCheckDigitModule11('9865698900', BASE_CHECK_DIGIT_CPF)
    ).toBe(6);
  });
  it('should return calculate check digit 7', () => {
    expect(
      calculateCheckDigitModule11('1935723502', BASE_CHECK_DIGIT_CPF)
    ).toBe(7);
  });
  it('should return calculate check digit 8', () => {
    expect(
      calculateCheckDigitModule11('2800123893', BASE_CHECK_DIGIT_CPF)
    ).toBe(8);
  });
  it('should return calculate check digit 9', () => {
    expect(
      calculateCheckDigitModule11('0680577904', BASE_CHECK_DIGIT_CPF)
    ).toBe(9);
  });
  it('should return calculate check digit 10', () => {
    expect(
      calculateCheckDigitModule11('5029266690', BASE_CHECK_DIGIT_CPF)
    ).toBe(0);
  });
});

describe('calculateCheckDigitModule11 using base CNPJ with 12 digits', () => {
  it('should return calculate check digit 0', () => {
    expect(
      calculateCheckDigitModule11('626374970001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(0);
  });
  it('should return calculate check digit 1', () => {
    expect(
      calculateCheckDigitModule11('795510430001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(1);
  });
  it('should return calculate check digit 2', () => {
    expect(
      calculateCheckDigitModule11('697657950001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(2);
  });
  it('should return calculate check digit 3', () => {
    expect(
      calculateCheckDigitModule11('068864090001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(3);
  });
  it('should return calculate check digit 4', () => {
    expect(
      calculateCheckDigitModule11('703802330001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(4);
  });
  it('should return calculate check digit 5', () => {
    expect(
      calculateCheckDigitModule11('544234210001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(5);
  });
  it('should return calculate check digit 6', () => {
    expect(
      calculateCheckDigitModule11('899760370001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(6);
  });
  it('should return calculate check digit 7', () => {
    expect(
      calculateCheckDigitModule11('502582630001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(7);
  });
  it('should return calculate check digit 8', () => {
    expect(
      calculateCheckDigitModule11('356580850001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(8);
  });
  it('should return calculate check digit 9', () => {
    expect(
      calculateCheckDigitModule11('617092820001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(9);
  });
  it('should return calculate check digit 10', () => {
    expect(
      calculateCheckDigitModule11('343898330001', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(0);
  });
});

describe('calculateCheckDigitModule11 using base CNPJ with 13 digits', () => {
  it('should return calculate check digit 0', () => {
    expect(
      calculateCheckDigitModule11('6263749700010', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(0);
  });
  it('should return calculate check digit 1', () => {
    expect(
      calculateCheckDigitModule11('3429548100012', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(1);
  });
  it('should return calculate check digit 2', () => {
    expect(
      calculateCheckDigitModule11('7038023300014', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(2);
  });
  it('should return calculate check digit 3', () => {
    expect(
      calculateCheckDigitModule11('0688640900013', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(3);
  });
  it('should return calculate check digit 4', () => {
    expect(
      calculateCheckDigitModule11('5442342100015', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(4);
  });
  it('should return calculate check digit 5', () => {
    expect(
      calculateCheckDigitModule11('7955104300011', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(5);
  });
  it('should return calculate check digit 6', () => {
    expect(
      calculateCheckDigitModule11('7499762500010', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(6);
  });
  it('should return calculate check digit 7', () => {
    expect(
      calculateCheckDigitModule11('5268570800012', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(7);
  });
  it('should return calculate check digit 8', () => {
    expect(
      calculateCheckDigitModule11('3438983300010', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(8);
  });
  it('should return calculate check digit 9', () => {
    expect(
      calculateCheckDigitModule11('3744216000010', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(9);
  });
  it('should return calculate check digit 10', () => {
    expect(
      calculateCheckDigitModule11('9645220800011', BASE_CHECK_DIGIT_CNPJ)
    ).toBe(0);
  });
});
