import isBlank from '../StringUtils/isBlank';

const CPF_SIZE = 11;
export default (cpf?: string | null): boolean => {
  if (typeof cpf !== 'string') return false;

  cpf = cpf.replace(/[\s.-]*/gim, '');

  if (isBlank(cpf)) return false;

  if (cpf.length !== CPF_SIZE) return false;

  if (
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }

  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  let firstCheckDigit = (sum * 10) % 11;
  if (firstCheckDigit >= 10) firstCheckDigit = 0;
  if (firstCheckDigit !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  let secondCheckDigit = (sum * 10) % 11;
  if (secondCheckDigit >= 10) secondCheckDigit = 0;
  if (secondCheckDigit !== parseInt(cpf.substring(10, 11))) return false;
  return true;
};
