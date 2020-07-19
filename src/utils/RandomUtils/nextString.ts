import nextStringCustom from './nextStringCustom';

export const upperCaracteres = 'ABCDEFGHIKLMNOPQRSTVXYZ';
export const lowerCaracteres = 'abcdefghiklmnopqrstvxyz';
export const numbersCaracteres = '0123456789';
export const specialSimpleCaracteres = '!#$%&*_+=-^~?;:.,|';
export const specialAmbiguousCaracteres = '"()\'`´{[]}/><';

export default (
  config: RandomStringConfig = {
    length: 16,
    upper: true,
    lower: true,
    numbers: true,
    specialSimple: true,
    specialAmbiguous: true,
  }
): string => {
  const length = config.length ?? 16;
  const upper = config.upper ?? true;
  const lower = config.lower ?? true;
  const numbers = config.numbers ?? true;
  const specialSimple = config.specialSimple ?? true;
  const specialAmbiguous = config.specialAmbiguous ?? true;

  let caractersAllowed = '';
  if (upper) caractersAllowed += upperCaracteres;
  if (lower) caractersAllowed += lowerCaracteres;
  if (numbers) caractersAllowed += numbersCaracteres;
  if (specialSimple) caractersAllowed += specialSimpleCaracteres;
  if (specialAmbiguous) caractersAllowed += specialAmbiguousCaracteres;

  return nextStringCustom(length, caractersAllowed);
};

/**
 * @description
 * params to config a random string
 *
 * @since v0.0.2
 */
export interface RandomStringConfig {
  /**
   * length of the string to be generated
   *
   * @default 16
   */
  length?: number;
  /**
   * should include upper case caracteres?
   *
   * @example
   * ABCDEF...
   *
   * @default true
   */
  upper?: boolean;
  /**
   * should include lower case caracteres?
   *
   * @example
   * abcdef...
   *
   * @default true
   */
  lower?: boolean;
  /**
   * should include numbers?
   *
   * @example
   * 0123456789
   *
   * @default true
   */
  numbers?: boolean;
  /**
   * should include special caracteres simple?
   *
   * @example
   * !#$%&*_+=-^~?;:.,|
   *
   * @default true
   */
  specialSimple?: boolean;
  /**
   * should include special caracteres ambiguous?
   *
   * @example
   * "()'`´{[]}/><
   *
   * @default true
   */
  specialAmbiguous?: boolean;
}
