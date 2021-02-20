import nextString from '../RandomUtils/nextString';
import calculateCheckDigitModule11 from './calculateCheckDigitModule11';

const CPF_SIZE_WITHOUT_CHECK_DIGIT = 9;

export const BASE_CHECK_DIGIT_CPF = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export default (): string => {
  const cpfWithoutCheckDigit = nextString({
    length: CPF_SIZE_WITHOUT_CHECK_DIGIT,
    lower: false,
    upper: false,
    numbers: true,
    specialAmbiguous: false,
    specialSimple: false,
  });

  const firstCheckDigit = calculateCheckDigitModule11(
    cpfWithoutCheckDigit,
    BASE_CHECK_DIGIT_CPF
  );
  const secondCheckDigit = calculateCheckDigitModule11(
    `${cpfWithoutCheckDigit}${firstCheckDigit}`,
    BASE_CHECK_DIGIT_CPF
  );

  return `${cpfWithoutCheckDigit}${firstCheckDigit}${secondCheckDigit}`;
};
