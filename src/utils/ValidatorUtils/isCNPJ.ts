import isBlank from '../StringUtils/isBlank';

const CNPJ_SIZE = 14;
export default (cnpj?: string | null): boolean => {
  if (typeof cnpj !== 'string') return false;
  if (isBlank(cnpj)) return false;

  cnpj = cnpj.replace(/[/\s.-]*/gim, '');

  if (cnpj.length !== CNPJ_SIZE) return false;

  if (
    cnpj == '00000000000000' ||
    cnpj == '11111111111111' ||
    cnpj == '22222222222222' ||
    cnpj == '33333333333333' ||
    cnpj == '44444444444444' ||
    cnpj == '55555555555555' ||
    cnpj == '66666666666666' ||
    cnpj == '77777777777777' ||
    cnpj == '88888888888888' ||
    cnpj == '99999999999999'
  ) {
    return false;
  }

  let size = cnpj.length - 2;
  let digits = cnpj.substring(0, size);
  const checkerCode = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(digits.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  const firstCheckerCode = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (firstCheckerCode != parseInt(checkerCode.charAt(0))) return false;

  size = size + 1;
  digits = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(digits.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  const secondCheckerCode = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (secondCheckerCode != parseInt(checkerCode.charAt(1))) return false;

  return true;
};
