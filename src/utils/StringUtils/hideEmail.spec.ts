import hideEmail from './hideEmail';

describe('hideEmail', () => {
  it('should return undefined if value is undefined', () => {
    expect(hideEmail()).toBeUndefined();
  });

  it('should return undefined if value is null', () => {
    expect(hideEmail(null)).toBeUndefined();
  });

  it('should return undefined if value is empty', () => {
    expect(hideEmail('')).toBeUndefined();
  });

  it('should return undefined if value not contains @', () => {
    expect(hideEmail('email.gmail.com')).toBeUndefined();
  });

  it('should hide first part of email by default', () => {
    expect(hideEmail('fulano@gmail.com')).toBe('f...@gmail.com');
  });

  it('should hide first part of email by default when config is empty', () => {
    expect(hideEmail('fulano@gmail.com', {})).toBe('f...@gmail.com');
  });

  it('should hide first and second part of email by when set to do it', () => {
    expect(hideEmail('fulano@gmail.com', { hideEnd: true })).toBe(
      'f...@gma...'
    );
  });

  it('should change the amount of hidden caracteres', () => {
    expect(
      hideEmail('fulano@gmail.com', {
        hideEnd: true,
        visibleStart: 3,
        visibleEnd: 5,
      })
    ).toBe('ful...@gmail...');
  });

  it('should show all characters when the number of visible characters is greater than the number of characters in the email', () => {
    expect(
      hideEmail('fulano@gmail.com', {
        hideEnd: true,
        visibleStart: 10,
        visibleEnd: 10,
      })
    ).toBe('fulano@gmail.com');
  });
});
