import formatPhone from './formatPhone';

describe('formatPhone', () => {
  it('should return empty when input is undefined', () => {
    expect(formatPhone()).toBe('');
  });

  it('should return empty when input is null', () => {
    expect(formatPhone(null)).toBe('');
  });

  it('should return empty when input is empty', () => {
    expect(formatPhone('')).toBe('');
  });

  it('should return empty when input is whitespace', () => {
    expect(formatPhone('   ')).toBe('');
  });

  it('should format the phone with 11 digits', () => {
    const input = '85999332456';
    expect(formatPhone(input)).toBe('(85)99933-2456');
  });

  it('should format the phone with 10 digits', () => {
    const input = '8599933245';
    expect(formatPhone(input)).toBe('(85)9993-3245');
  });

  it('should format the phone with 9 digits', () => {
    const input = '859993324';
    expect(formatPhone(input)).toBe('(85)9993-324');
  });

  it('should format the phone with 8 digits', () => {
    const input = '85999332';
    expect(formatPhone(input)).toBe('(85)9993-32');
  });

  it('should format the phone with 7 digits', () => {
    const input = '8599933';
    expect(formatPhone(input)).toBe('(85)9993-3');
  });

  it('should format the phone with 6 digits', () => {
    const input = '859993';
    expect(formatPhone(input)).toBe('(85)9993');
  });

  it('should format the phone with 5 digits', () => {
    const input = '85999';
    expect(formatPhone(input)).toBe('(85)999');
  });

  it('should format the phone with 4 digits', () => {
    const input = '8599';
    expect(formatPhone(input)).toBe('(85)99');
  });

  it('should format the phone with 3 digits', () => {
    const input = '859';
    expect(formatPhone(input)).toBe('(85)9');
  });

  it('should format the phone with 2 digits', () => {
    const input = '85';
    expect(formatPhone(input)).toBe('(85');
  });

  it('should format the phone with 1 digits', () => {
    const input = '8';
    expect(formatPhone(input)).toBe('(8');
  });
});
