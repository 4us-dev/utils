import formatCEP from './formatCEP';
import formatCpf from './formatCpf';
import formatOnlyIntegers from './formatOnlyIntegers';
import formatPhone from './formatPhone';

/**
 * FormatUtils
 * @since v0.0.5
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class FormatUtils {
  /**
   * Removes all non-numeric values and apply the cpf mask.
   *
   * @since v0.0.5
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const value = new FormatUtils().formatCpf("66273306010") // "662.733.060-10"
   *
   * @description
   * This should format the cpf partially like this
   * @example
   * const value = new FormatUtils().formatCpf("6627330") // "662.733.0"
   *
   * @description
   * If the value contains non-numeric characters they will be removed in formatting
   * @example
   * const value = new FormatUtils().formatCpf("66A27B33C060D10") // "662.733.060-10"
   */
  formatCpf = formatCpf;
  /**
   * Removes all non-numeric values and apply the CEP mask 99999-999
   *
   * @since v0.0.6
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const value = new FormatUtils().formatPhone("60601023") // "60601-023"
   *
   * @description
   * This should format the cep partially like this
   * @example
   * const value = new FormatUtils().formatPhone("606010") // "60601-0"
   *
   * @description
   * If the value contains non-numeric characters they will be removed in formatting
   * @example
   * const value = new FormatUtils().formatPhone("A60b601c02D3E") // "60601-023"
   */
  formatCEP = formatCEP;
  /**
   * Removes all non-numeric values and apply the phone mask (99)9999-9999 or (99)99999-9999.
   *
   * @since v0.0.6
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const value = new FormatUtils().formatPhone("85999432345") // "(85)99943-2345"
   * const value = new FormatUtils().formatPhone("8599943234") // "(85)9994-3234"
   *
   * @description
   * This should format the phone partially like this
   * @example
   * const value = new FormatUtils().formatPhone("8599943") // "(85)9994-3"
   *
   * @description
   * If the value contains non-numeric characters they will be removed in formatting
   * @example
   * const value = new FormatUtils().formatPhone("A8B5C9D9f9g4h3i23s4w5q") // "(85)99943-2345"
   */
  formatPhone = formatPhone;
  /**
   * Removes all non-numeric caracteres from string.
   *
   * @param value - String to be processed
   * @returns `string` without any non-numeric caracteres
   *
   * @since v0.0.6
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new FormatUtils().formatOnlyIntegers('a1b2c3') // '123'
   */
  formatOnlyIntegers = formatOnlyIntegers;
}
