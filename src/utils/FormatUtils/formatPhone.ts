import removeNonNumeric from '../StringUtils/removeNonNumeric';
import isBlank from '../StringUtils/isBlank';

export default (phone?: string | null): string => {
  phone = removeNonNumeric(phone);
  if (isBlank(phone)) return '';
  if (phone.length > 11) phone = phone.substring(0, 11);

  if (phone.length === 11) {
    return `(${phone.substring(0, 2)})${phone.substring(
      2,
      7
    )}-${phone.substring(7)}`;
  } else if (phone.length > 6) {
    return `(${phone.substring(0, 2)})${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  } else if (phone.length > 2) {
    return `(${phone.substring(0, 2)})${phone.substring(2)}`;
  }

  return `(${phone}`;
};
