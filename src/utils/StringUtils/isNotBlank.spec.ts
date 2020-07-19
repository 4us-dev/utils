import isNotBlank from './isNotBlank';

describe('isNotBlank', () => {
  it('should return false if value is null', () => {
    expect(isNotBlank(null)).toBeFalsy();
  });
  it('should return false if value is undefined', () => {
    expect(isNotBlank()).toBeFalsy();
  });
  it('should return false if value is empty', () => {
    expect(isNotBlank('')).toBeFalsy();
  });

  it('should return false if value contains only white spaces', () => {
    expect(isNotBlank('   ')).toBeFalsy();
  });

  it('should return true if value contains any caracters', () => {
    expect(isNotBlank('a')).toBeTruthy();
  });

  it('should return true if value contains string with 0', () => {
    expect(isNotBlank('0')).toBeTruthy();
  });
});
