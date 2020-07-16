/**
 * @description
 * config of the random number generetor
 *
 * @since v0.0.2
 */
export interface MinMaxNumberConfig {
  /**
   * @description
   * min value
   *
   * @default 0
   */
  min?: number;
  /**
   * @description
   * max value
   *
   * @default 100
   */
  max?: number;
}

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

/**
 * Random value generator
 * @since v0.0.2
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class RandomUtils {
  private upperCaracteres = 'ABCDEFGHIKLMNOPQRSTVXYZ';
  private lowerCaracteres = 'abcdefghiklmnopqrstvxyz';
  private numbersCaracteres = '0123456789';
  private specialSimpleCaracteres = '!#$%&*_+=-^~?;:.,|';
  private specialAmbiguousCaracteres = '"()\'`´{[]}/><';
  /**
   * Generates a random integer between the `min` and `max` inclusive.
   * @since v0.0.2
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * // the return a integer between 0 and 100 inclusive
   * const value = getRandomInteger()
   *
   * @example
   * // the return can be one of this values 0, 1, 2 or 3
   * const value = getRandomInteger({min: 0, max:3})
   */
  nextInt(config: MinMaxNumberConfig = { min: 0, max: 100 }): number {
    const min = config.min ?? 0;
    const max = config.max ?? 100;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Generates a random string.
   *
   * @description
   * How the string is generated can be configured
   *
   * @since v0.0.3
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const value = new RandomUtils().nextString() // returns a random string with length 16
   * @example
   * const value = new RandomUtils().nextString({ length: 8 }) // returns a random string with length 8
   * @example
   * const value = new RandomUtils().nextString({
   *  length: 8, // default 16
   *  upper: true, // default true
   *  lower: true, // default true
   *  numbers: true, // default true
   *  specialSimple: false, // default true
   *  specialAmbiguous: false, // default true
   * }) // returns a random string with length 8 only with letters upper, letters lower and numbers
   */
  nextString(
    config: RandomStringConfig = {
      length: 16,
      upper: true,
      lower: true,
      numbers: true,
      specialSimple: true,
      specialAmbiguous: true,
    }
  ): string {
    const length = config.length ?? 16;
    const upper = config.upper ?? true;
    const lower = config.lower ?? true;
    const numbers = config.numbers ?? true;
    const specialSimple = config.specialSimple ?? true;
    const specialAmbiguous = config.specialAmbiguous ?? true;

    let caractersAllowed = '';
    if (upper) caractersAllowed += this.upperCaracteres;
    if (lower) caractersAllowed += this.lowerCaracteres;
    if (numbers) caractersAllowed += this.numbersCaracteres;
    if (specialSimple) caractersAllowed += this.specialSimpleCaracteres;
    if (specialAmbiguous) caractersAllowed += this.specialAmbiguousCaracteres;

    return this.nextStringCustom(length, caractersAllowed);
  }

  /**
   * Generates a random string with `length` informed and using `caracteresAllowed` variable
   * as reference.
   * @since v0.0.3
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const value = new RandomUtils().nextStringCustom(10, 'A1c') // returns a random string with length 10 using only `A`, `1` or `c` to generate the result
   */
  nextStringCustom(length: number, caracteresAllowed: string): string {
    let value = '';
    for (let i = 0; i < length; i++) {
      const randomInt = this.nextInt({
        min: 0,
        max: caracteresAllowed.length,
      });
      value += caracteresAllowed[randomInt];
    }

    return value;
  }
}
