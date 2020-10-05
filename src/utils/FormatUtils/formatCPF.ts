import removeNonNumeric from '../StringUtils/removeNonNumeric';
import isBlank from '../StringUtils/isBlank';

export default (cpf?: string | null): string => {
  if (isBlank(cpf)) return '';
  cpf = removeNonNumeric(cpf);
  if (cpf.length > 11) cpf = cpf.substring(0, 11);
  if (cpf.length > 9) {
    cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
      6,
      9
    )}-${cpf.substring(9)}`;
  } else if (cpf.length > 6) {
    cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6)}`;
  } else if (cpf.length > 3) {
    cpf = `${cpf.substring(0, 3)}.${cpf.substring(3)}`;
  }
  return cpf;
};
