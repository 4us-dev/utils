import formatOnlyIntegers from './formatOnlyIntegers';

describe('formatOnlyIntegers', () => {
  it('should return empty string if value is undefined', () => {
    expect(formatOnlyIntegers()).toBe('');
  });
  it('should return empty string if value is null', () => {
    expect(formatOnlyIntegers(null)).toBe('');
  });
  it('should return empty if value is empty', () => {
    expect(formatOnlyIntegers('')).toBe('');
  });
  it('should return empty if value not contains', () => {
    const input = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';
    expect(formatOnlyIntegers(input)).toBe('');
  });

  it('should return the same string when value contains only numbers', () => {
    const input = '0123456789';
    expect(formatOnlyIntegers(input)).toBe(input);
  });

  it('should remove all caracteres not numbers', () => {
    const input = 'asdfasdfASKJDKL0AS1JD2"3!@4@@5##6%*7()8_+9=-{[}^~]?/:.>,<';
    expect(formatOnlyIntegers(input)).toBe('0123456789');
  });

  it('should return string with 0(zero) when receive a string with a 0(zero)', () => {
    const input = '0';
    expect(formatOnlyIntegers(input)).toBe(input);
  });
});
