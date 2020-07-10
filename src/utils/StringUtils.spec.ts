import StringUtils from './StringUtils';

let stringUtils: StringUtils;

beforeAll(() => {
  stringUtils = new StringUtils();
});

describe('isBlank', () => {
  it('should return true if value is null', () => {
    expect(stringUtils.isBlank(null)).toBeTruthy();
  });
  it('should return true if value is undefined', () => {
    expect(stringUtils.isBlank()).toBeTruthy();
  });
  it('should return true if value is empty', () => {
    expect(stringUtils.isBlank('')).toBeTruthy();
  });

  it('should return true if value contains only white spaces', () => {
    expect(stringUtils.isBlank('   ')).toBeTruthy();
  });

  it('should return false if value contains any caracters', () => {
    expect(stringUtils.isBlank('a')).toBeFalsy();
  });

  it('should return false if value contains string with 0', () => {
    expect(stringUtils.isBlank('0')).toBeFalsy();
  });
});

describe('isNotBlank', () => {
  it('should return false if value is null', () => {
    expect(stringUtils.isNotBlank(null)).toBeFalsy();
  });
  it('should return false if value is undefined', () => {
    expect(stringUtils.isNotBlank()).toBeFalsy();
  });
  it('should return false if value is empty', () => {
    expect(stringUtils.isNotBlank('')).toBeFalsy();
  });

  it('should return false if value contains only white spaces', () => {
    expect(stringUtils.isNotBlank('   ')).toBeFalsy();
  });

  it('should return true if value contains any caracters', () => {
    expect(stringUtils.isNotBlank('a')).toBeTruthy();
  });

  it('should return true if value contains string with 0', () => {
    expect(stringUtils.isNotBlank('0')).toBeTruthy();
  });
});

describe('isEmpty', () => {
  it('should return true if value is null', () => {
    expect(stringUtils.isEmpty(null)).toBeTruthy();
  });
  it('should return true if value is undefined', () => {
    expect(stringUtils.isEmpty()).toBeTruthy();
  });
  it('should return true if value is empty', () => {
    expect(stringUtils.isEmpty('')).toBeTruthy();
  });

  it('should return false if value contains only white spaces', () => {
    expect(stringUtils.isEmpty('   ')).toBeFalsy();
  });

  it('should return false if value contains any caracters', () => {
    expect(stringUtils.isEmpty('a')).toBeFalsy();
  });

  it('should return false if value contains string with 0', () => {
    expect(stringUtils.isEmpty('0')).toBeFalsy();
  });
});

describe('isNotEmpty', () => {
  it('should return false if value is null', () => {
    expect(stringUtils.isNotEmpty(null)).toBeFalsy();
  });
  it('should return false if value is undefined', () => {
    expect(stringUtils.isNotEmpty()).toBeFalsy();
  });
  it('should return false if value is empty', () => {
    expect(stringUtils.isNotEmpty('')).toBeFalsy();
  });

  it('should return true if value contains only white spaces', () => {
    expect(stringUtils.isNotEmpty('   ')).toBeTruthy();
  });

  it('should return true if value contains any caracters', () => {
    expect(stringUtils.isNotEmpty('a')).toBeTruthy();
  });

  it('should return true if value contains string with 0', () => {
    expect(stringUtils.isNotEmpty('0')).toBeTruthy();
  });
});
