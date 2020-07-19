import isNotEmpty from './isNotEmpty';

describe('isNotEmpty', () => {
  it('should return false if value is null', () => {
    expect(isNotEmpty(null)).toBeFalsy();
  });
  it('should return false if value is undefined', () => {
    expect(isNotEmpty()).toBeFalsy();
  });
  it('should return false if value is empty', () => {
    expect(isNotEmpty('')).toBeFalsy();
  });

  it('should return true if value contains only white spaces', () => {
    expect(isNotEmpty('   ')).toBeTruthy();
  });

  it('should return true if value contains any caracters', () => {
    expect(isNotEmpty('a')).toBeTruthy();
  });

  it('should return true if value contains string with 0', () => {
    expect(isNotEmpty('0')).toBeTruthy();
  });
});
