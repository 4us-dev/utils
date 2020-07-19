import isBlank from './isBlank';

describe('isBlank', () => {
  it('should return true if value is null', () => {
    expect(isBlank(null)).toBeTruthy();
  });
  it('should return true if value is undefined', () => {
    expect(isBlank()).toBeTruthy();
  });
  it('should return true if value is empty', () => {
    expect(isBlank('')).toBeTruthy();
  });

  it('should return true if value contains only white spaces', () => {
    expect(isBlank('   ')).toBeTruthy();
  });

  it('should return false if value contains any caracters', () => {
    expect(isBlank('a')).toBeFalsy();
  });

  it('should return false if value contains string with 0', () => {
    expect(isBlank('0')).toBeFalsy();
  });
});
