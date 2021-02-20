import calculateCheckDigitModule11 from './calculateCheckDigitModule11';
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
