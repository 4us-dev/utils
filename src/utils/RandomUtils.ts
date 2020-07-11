export interface MinMaxNumberConfig {
  min?: number;
  max?: number;
}

/**
 * Random value generator
 */
export default class RandomUtils {
  /**
   * Generates a random integer between the `min` and `max` inclusive
   *
   * @param {MinMaxNumberConfig} config - defaul values: `{ min: 0, max: 100 }`
   * @return {number} random integer between min and max
   *
   * @author Clairton luz <clairton.luz@gmail.com>
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
}
