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

describe('nextString', () => {
  it('should generate random with length 16 by default', () => {
    const actual = randomUtils.nextString();
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(16);
  });

  it('should generate random with length 30 using only upper case caracters', () => {
    const actual = randomUtils.nextString({
      length: 30,
      lower: false,
      numbers: false,
      specialSimple: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[A-Z]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only lower case caracters', () => {
    const actual = randomUtils.nextString({
      length: 30,
      upper: false,
      numbers: false,
      specialSimple: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[a-z]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only numbers', () => {
    const actual = randomUtils.nextString({
      length: 30,
      upper: false,
      lower: false,
      specialSimple: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[\d]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only special caracters simple', () => {
    const actual = randomUtils.nextString({
      length: 30,
      upper: false,
      lower: false,
      numbers: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[!#$%&*_+=\-^~?;:.,|]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only special caracters ambiguous', () => {
    const actual = randomUtils.nextString({
      length: 30,
      upper: false,
      lower: false,
      numbers: false,
      specialSimple: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^["()'`´{[\]}/><]+$/.test(actual)).toBeTruthy();
  });
});

describe('nextStringCustom', () => {
  it('should generate random with length 10 using custom caracteres', () => {
    const length = 10;
    const caracteresAllowed = 'A1c';
    const actual = randomUtils.nextStringCustom(length, caracteresAllowed);
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(length);

    for (const value of actual) {
      expect(caracteresAllowed.includes(value)).toBeTruthy();
    }
  });

  it('should generate a string with length 10 using only with a letter', () => {
    const length = 10;
    const caracteresAllowed = 'a';
    const actual = randomUtils.nextStringCustom(length, caracteresAllowed);
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(length);
    expect(actual).toBe('aaaaaaaaaa');
  });
});
