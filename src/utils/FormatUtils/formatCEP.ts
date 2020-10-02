import isBlank from '../StringUtils/isBlank';
import formatOnlyIntegers from '../StringUtils/removeNonNumeric';

export default (cep?: string | null): string => {
  if (isBlank(cep)) return '';
  cep = formatOnlyIntegers(cep);
  if (cep.length > 8) cep = cep.substring(0, 8);
  if (cep.length > 5) {
    cep = `${cep.substring(0, 5)}-${cep.substring(5)}`;
  }
  return cep;
};
