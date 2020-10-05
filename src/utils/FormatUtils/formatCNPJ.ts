import removeNonNumeric from '../StringUtils/removeNonNumeric';
import isBlank from '../StringUtils/isBlank';

export default (cnpj?: string | null): string => {
  if (isBlank(cnpj)) return '';
  cnpj = removeNonNumeric(cnpj);
  if (cnpj.length > 14) cnpj = cnpj.substring(0, 14);
  if (cnpj.length > 12) {
    cnpj = `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(
      5,
      8
    )}/${cnpj.substring(8, 12)}-${cnpj.substring(12)}`;
  } else if (cnpj.length > 8) {
    cnpj = `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(
      5,
      8
    )}/${cnpj.substring(8)}`;
  } else if (cnpj.length > 5) {
    cnpj = `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(
      5
    )}`;
  } else if (cnpj.length > 2) {
    cnpj = `${cnpj.substring(0, 2)}.${cnpj.substring(2)}`;
  }
  return cnpj;
};
