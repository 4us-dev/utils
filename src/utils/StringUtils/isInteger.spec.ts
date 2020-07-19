import isInteger from './isInteger';

describe('isInteger', () => {
  it('should return false if value is null', () => {
    expect(isInteger(null)).toBeFalsy();
  });
  it('should return false if value is undefined', () => {
    expect(isInteger()).toBeFalsy();
  });

  it('should return false if value is empty', () => {
    expect(isInteger('')).toBeFalsy();
  });

  it('should return false if value is whitespace ', () => {
    expect(isInteger('    ')).toBeFalsy();
  });

  it('should return false if value contains caracters non-numeric ', () => {
    expect(isInteger('22a33')).toBeFalsy();
  });

  it('should return false if value contains whitespace around numbers ', () => {
    expect(isInteger(' 2233 ')).toBeFalsy();
  });

  it('should return false if value contains .(dot)', () => {
    expect(isInteger('01234567.89')).toBeFalsy();
  });

  it('should return false if value contains ,(comman)', () => {
    expect(isInteger('01234567,89')).toBeFalsy();
  });

  it('should return true if value contains only numeric caracters', () => {
    expect(isInteger('0123456789')).toBeTruthy();
  });

  it('should return true if value contains only numeric caracters very big', () => {
    expect(
      isInteger(
        '9999999999999999999999999999999999999999999999999999999999999999999999'
      )
    ).toBeTruthy();
  });
});
