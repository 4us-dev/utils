const calculateCheckDigitModule11 = (value: string, base: number[]): number => {
  const values = value.split('').reverse();
  let sum = 0;
  let baseIndex = 0;
  for (let i = 1; i <= values.length; i++) {
    sum += base[baseIndex] * Number(values[i - 1]);
    baseIndex = baseIndex == base.length - 1 ? 0 : baseIndex + 1;
  }
  const checkDigit: number = sum % 11;

  return checkDigit == 10 ? 0 : checkDigit;
};

export default calculateCheckDigitModule11;
