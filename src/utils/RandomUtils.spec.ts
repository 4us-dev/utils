import RandomUtils from './RandomUtils';

let randomUtils: RandomUtils;

beforeAll(() => {
  randomUtils = new RandomUtils();
});

describe('nextInt', () => {
  it('should return random int value between 0 and 10', () => {
    const min = 0;
    const max = 10;
    const actual = randomUtils.nextInt({ min, max });
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(max);
  });

  it('should return exact number when min and max is equal', () => {
    expect(randomUtils.nextInt({ min: 0, max: 0 })).toBe(0);
    expect(randomUtils.nextInt({ min: 23, max: 23 })).toBe(23);
    expect(randomUtils.nextInt({ min: 1111, max: 1111 })).toBe(1111);
  });

  it('should return random int value between 1000 and 1001', () => {
    const min = 1000;
    const max = 1001;
    const actual = randomUtils.nextInt({ min, max });
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(max);
  });

  it('should return random int value between 0 and 100 by default', () => {
    const actual = randomUtils.nextInt();
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(100);
  });

  it('should return random int value between default min 0 and max informed', () => {
    const max = 4;
    const actual = randomUtils.nextInt({ max });
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(max);
  });

  it('should return random int value between min informed and max default', () => {
    const min = 98;
    const actual = randomUtils.nextInt({ min });
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(100);
  });
});
