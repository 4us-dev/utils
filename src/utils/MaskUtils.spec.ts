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
