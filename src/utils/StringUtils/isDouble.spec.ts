import isDouble from './isDouble';

describe('isDouble', () => {
  it('should return false if value is null', () => {
    expect(isDouble(null)).toBeFalsy();
  });
  it('should return false if value is undefined', () => {
    expect(isDouble()).toBeFalsy();
  });

  it('should return false if value is empty', () => {
    expect(isDouble('')).toBeFalsy();
  });

  it('should return false if value is whitespace ', () => {
    expect(isDouble('    ')).toBeFalsy();
  });

  it('should return false if value contains caracters non-numeric ', () => {
    expect(isDouble('22a33')).toBeFalsy();
  });

  it('should return false if value contains whitespace around numbers ', () => {
    expect(isDouble(' 2233 ')).toBeFalsy();
  });

  it('should return true if value contains .(dot)', () => {
    expect(isDouble('01234567.8932')).toBeTruthy();
  });

  it('should return false if value contains more than one .(dot)', () => {
    expect(isDouble('01234567.8.9')).toBeFalsy();
  });

  it('should return false if value contains ,(comman)', () => {
    expect(isDouble('01234567,89')).toBeFalsy();
  });

  it('should return true if value contains only numeric caracters', () => {
    expect(isDouble('0123456789')).toBeTruthy();
  });
});
