import nextStringCustom from './nextStringCustom';

describe('nextStringCustom', () => {
  it('should generate random with length 10 using custom caracteres', () => {
    const length = 10;
    const caracteresAllowed = 'A1c';
    const actual = nextStringCustom(length, caracteresAllowed);
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
    const actual = nextStringCustom(length, caracteresAllowed);
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(length);
    expect(actual).toBe('aaaaaaaaaa');
  });
});
