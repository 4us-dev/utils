import formatCpf from './formatCpf';

/**
 * FormatUtils
 * @since v0.0.4
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class FormatUtils {
  /**
   * Removes all non-numeric values and apply the cpf mask.
   *
   * @since v0.0.4
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
}
