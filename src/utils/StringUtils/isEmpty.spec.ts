import isEmpty from './isEmpty';

describe('isEmpty', () => {
  it('should return true if value is null', () => {
    expect(isEmpty(null)).toBeTruthy();
  });
  it('should return true if value is undefined', () => {
    expect(isEmpty()).toBeTruthy();
  });
  it('should return true if value is empty', () => {
    expect(isEmpty('')).toBeTruthy();
  });

  it('should return false if value contains only white spaces', () => {
    expect(isEmpty('   ')).toBeFalsy();
  });

  it('should return false if value contains any caracters', () => {
    expect(isEmpty('a')).toBeFalsy();
  });

  it('should return false if value contains string with 0', () => {
    expect(isEmpty('0')).toBeFalsy();
  });
});
