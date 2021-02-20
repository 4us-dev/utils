import nextString from '../RandomUtils/nextString';
import calculateCheckDigitModule11 from './calculateCheckDigitModule11';

const CNPJ_SIZE_WITHOUT_FILIAL_AND_CHECK_DIGIT = 8;
const CNPJ_FILIAL = '0001';

export const BASE_CHECK_DIGIT_CNPJ = [9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5];

export default (): string => {
  let cnpjWithoutCheckDigit = nextString({
    length: CNPJ_SIZE_WITHOUT_FILIAL_AND_CHECK_DIGIT,
    lower: false,
    upper: false,
    numbers: true,
    specialAmbiguous: false,
    specialSimple: false,
  });

  cnpjWithoutCheckDigit = cnpjWithoutCheckDigit + CNPJ_FILIAL;

  const firstCheckDigit = calculateCheckDigitModule11(
    cnpjWithoutCheckDigit,
    BASE_CHECK_DIGIT_CNPJ
  );
  const secondCheckDigit = calculateCheckDigitModule11(
    `${cnpjWithoutCheckDigit}${firstCheckDigit}`,
    BASE_CHECK_DIGIT_CNPJ
  );

  return `${cnpjWithoutCheckDigit}${firstCheckDigit}${secondCheckDigit}`;
};
