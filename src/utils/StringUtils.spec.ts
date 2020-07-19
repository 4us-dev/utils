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

describe('hideEmail', () => {
  it('should return undefined if value is undefined', () => {
    expect(stringUtils.hideEmail()).toBeUndefined();
  });

  it('should return undefined if value is null', () => {
    expect(stringUtils.hideEmail(null)).toBeUndefined();
  });

  it('should return undefined if value is empty', () => {
    expect(stringUtils.hideEmail('')).toBeUndefined();
  });

  it('should return undefined if value not contains @', () => {
    expect(stringUtils.hideEmail('email.gmail.com')).toBeUndefined();
  });

  it('should hide first part of email by default', () => {
    expect(stringUtils.hideEmail('fulano@gmail.com')).toBe('f...@gmail.com');
  });

  it('should hide first part of email by default when config is empty', () => {
    expect(stringUtils.hideEmail('fulano@gmail.com', {})).toBe(
      'f...@gmail.com'
    );
  });

  it('should hide first and second part of email by when set to do it', () => {
    expect(stringUtils.hideEmail('fulano@gmail.com', { hideEnd: true })).toBe(
      'f...@gma...'
    );
  });

  it('should change the amount of hidden caracteres', () => {
    expect(
      stringUtils.hideEmail('fulano@gmail.com', {
        hideEnd: true,
        visibleStart: 3,
        visibleEnd: 5,
      })
    ).toBe('ful...@gmail...');
  });

  it('should show all characters when the number of visible characters is greater than the number of characters in the email', () => {
    expect(
      stringUtils.hideEmail('fulano@gmail.com', {
        hideEnd: true,
        visibleStart: 10,
        visibleEnd: 10,
      })
    ).toBe('fulano@gmail.com');
  });
});

describe('removeNonNumeric', () => {
  it('should return empty string if value is undefined', () => {
    expect(stringUtils.removeNonNumeric()).toBe('');
  });
  it('should return empty string if value is null', () => {
    expect(stringUtils.removeNonNumeric(null)).toBe('');
  });
  it('should return empty if value is empty', () => {
    expect(stringUtils.removeNonNumeric('')).toBe('');
  });
  it('should return empty if value not contains', () => {
    const input = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';
    expect(stringUtils.removeNonNumeric(input)).toBe('');
  });

  it('should return the same string when value contains only numbers', () => {
    const input = '0123456789';
    expect(stringUtils.removeNonNumeric(input)).toBe(input);
  });

  it('should remove all caracteres not numbers', () => {
    const input = 'asdfasdfASKJDKL0AS1JD2"3!@4@@5##6%*7()8_+9=-{[}^~]?/:.>,<';
    expect(stringUtils.removeNonNumeric(input)).toBe('0123456789');
  });

  it('should return string with 0(zero) when receive a string with a 0(zero)', () => {
    const input = '0';
    expect(stringUtils.removeNonNumeric(input)).toBe(input);
  });
});
