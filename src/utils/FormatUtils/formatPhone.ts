import removeNonNumeric from '../StringUtils/removeNonNumeric';
import isBlank from '../StringUtils/isBlank';

export default (phone?: string | null): string => {
  if (isBlank(phone)) return '';
  phone = removeNonNumeric(phone);
  if (phone.length > 11) phone = phone.substring(0, 11);
  if (phone.length === 11) {
    phone = `(${phone.substring(0, 2)})${phone.substring(
      2,
      7
    )}-${phone.substring(7)}`;
  } else if (phone.length > 6) {
    phone = `(${phone.substring(0, 2)})${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  } else if (phone.length > 1) {
    phone = `(${phone.substring(0, 2)})${phone.substring(2)}`;
  } else if (phone.length > 0) {
    phone = `(${phone}`;
  }
  return phone;
};
