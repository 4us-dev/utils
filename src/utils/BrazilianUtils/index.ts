import generateCPF from './generateCPF';
import isCNPJ from './isCNPJ';
import isCPF from './isCPF';

/**
 * BrazilianUtils
 * @since v0.0.9
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class BrazilianUtils {
  /**
   * Check if is CPF is valid
   *
   * @since v0.0.9
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const brazilianUtils = new BrazilianUtils();
   * if(brazilianUtils.isCPF("66273306010")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   *
   * if(brazilianUtils.isCPF("662.733.060-10")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   */
  isCPF = isCPF;
  /**
   * Check if is CNPJ is valid
   *
   * @since v0.0.9
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const brazilianUtils = new BrazilianUtils();
   *
   * @example
   * if(brazilianUtils.isCNPJ("94338204000180")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   *
   * @example
   * if(brazilianUtils.isCNPJ("94.338.204/0001-80")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   */
  isCNPJ = isCNPJ;
  /**
   * Check if is CPF is valid
   *
   * @since v0.0.11
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const brazilianUtils = new BrazilianUtils();
   * const cpf = brazilianUtils.generateCPF();
   */
  generateCPF = generateCPF;
}
