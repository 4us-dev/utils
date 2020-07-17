import MaskUtils from './MaskUtils';

let maskUtils: MaskUtils;

beforeAll(() => {
  maskUtils = new MaskUtils();
});

describe('hideEmail', () => {
  it('should return undefined if value is undefined', () => {
    expect(maskUtils.hideEmail()).toBeUndefined();
  });

  it('should return undefined if value is null', () => {
    expect(maskUtils.hideEmail(null)).toBeUndefined();
  });

  it('should return undefined if value is empty', () => {
    expect(maskUtils.hideEmail('')).toBeUndefined();
  });

  it('should return undefined if value not contains @', () => {
    expect(maskUtils.hideEmail('email.gmail.com')).toBeUndefined();
  });

  it('should hide first part of email by default', () => {
    expect(maskUtils.hideEmail('fulano@gmail.com')).toBe('f...@gmail.com');
  });

  it('should hide first part of email by default when config is empty', () => {
    expect(maskUtils.hideEmail('fulano@gmail.com', {})).toBe('f...@gmail.com');
  });

  it('should hide first and second part of email by when set to do it', () => {
    expect(maskUtils.hideEmail('fulano@gmail.com', { hideEnd: true })).toBe(
      'f...@gma...'
    );
  });

  it('should change the amount of hidden caracteres', () => {
    expect(
      maskUtils.hideEmail('fulano@gmail.com', {
        hideEnd: true,
        visibleStart: 3,
        visibleEnd: 5,
      })
    ).toBe('ful...@gmail...');
  });

  it('should show all characters when the number of visible characters is greater than the number of characters in the email', () => {
    expect(
      maskUtils.hideEmail('fulano@gmail.com', {
        hideEnd: true,
        visibleStart: 10,
        visibleEnd: 10,
      })
    ).toBe('fulano@gmail.com');
  });
});

describe('removeNonNumeric', () => {
  it('should return empty string if value is undefined', () => {
    expect(maskUtils.removeNonNumeric()).toBe('');
  });
  it('should return empty string if value is null', () => {
    expect(maskUtils.removeNonNumeric(null)).toBe('');
  });
  it('should return empty if value is empty', () => {
    expect(maskUtils.removeNonNumeric('')).toBe('');
  });
  it('should return empty if value not contains', () => {
    const input = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';
    expect(maskUtils.removeNonNumeric(input)).toBe('');
  });

  it('should return the same string when value contains only numbers', () => {
    const input = '0123456789';
    expect(maskUtils.removeNonNumeric(input)).toBe(input);
  });

  it('should remove all caracteres not numbers', () => {
    const input = 'asdfasdfASKJDKL0AS1JD2"3!@4@@5##6%*7()8_+9=-{[}^~]?/:.>,<';
    expect(maskUtils.removeNonNumeric(input)).toBe('0123456789');
  });

  it('should return string with 0(zero) when receive a string with a 0(zero)', () => {
    const input = '0';
    expect(maskUtils.removeNonNumeric(input)).toBe(input);
  });
});
