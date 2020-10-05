import isCNPJ from './isCNPJ';
import isCPF from './isCPF';

/**
 * ValidatorUtils
 * @since v0.0.9
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class ValidatorUtils {
  /**
   * Check if is CPF is valid
   *
   * @since v0.0.9
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const validatorUtils = new ValidatorUtils();
   * if(validatorUtils.isCPF("66273306010")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   *
   * if(validatorUtils.isCPF("662.733.060-10")){
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
   * const validatorUtils = new ValidatorUtils();
   *
   * @example
   * if(validatorUtils.isCNPJ("94338204000180")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   *
   * @example
   * if(validatorUtils.isCNPJ("94.338.204/0001-80")){
   *    console.log('CPF is valid');
   * } else {
   *    console.log('CPF is not valid');
   * }
   */
  isCNPJ = isCNPJ;
}
