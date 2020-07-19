import nextInt from './nextInt';
import nextString from './nextString';
import nextStringCustom from './nextStringCustom';

/**
 * Random value generator
 * @since v0.0.2
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class RandomUtils {
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
  nextInt = nextInt;

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
  nextString = nextString;

  /**
   * Generates a random string with `length` informed and using `caracteresAllowed` variable
   * as reference.
   * @since v0.0.3
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * const value = new RandomUtils().nextStringCustom(10, 'A1c') // returns a random string with length 10 using only `A`, `1` or `c` to generate the result
   */
  nextStringCustom = nextStringCustom;
}
