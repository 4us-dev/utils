export default (config: MinMaxNumberConfig = { min: 0, max: 100 }): number => {
  const min = config.min ?? 0;
  const max = config.max ?? 100;
  return Math.floor(Math.random() * (max - min)) + min;
};

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
