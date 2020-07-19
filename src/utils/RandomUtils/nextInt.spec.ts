import nextInt from './nextInt';
describe('nextInt', () => {
  it('should return random int value between 0 and 10', () => {
    const min = 0;
    const max = 10;
    const actual = nextInt({ min, max });
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(max);
  });

  it('should return exact number when min and max is equal', () => {
    expect(nextInt({ min: 0, max: 0 })).toBe(0);
    expect(nextInt({ min: 23, max: 23 })).toBe(23);
    expect(nextInt({ min: 1111, max: 1111 })).toBe(1111);
  });

  it('should return random int value between 1000 and 1001', () => {
    const min = 1000;
    const max = 1001;
    const actual = nextInt({ min, max });
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(max);
  });

  it('should return random int value between 0 and 100 by default', () => {
    const actual = nextInt();
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(100);
  });

  it('should return random int value between default min 0 and max informed', () => {
    const max = 4;
    const actual = nextInt({ max });
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(max);
  });

  it('should return random int value between min informed and max default', () => {
    const min = 98;
    const actual = nextInt({ min });
    expect(actual).toBeGreaterThanOrEqual(min);
    expect(actual).toBeLessThanOrEqual(100);
  });
});
