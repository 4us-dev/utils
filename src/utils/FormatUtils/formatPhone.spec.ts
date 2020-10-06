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
    expect(formatPhone('85999332456')).toBe('(85)99933-2456');
  });

  it('should format the phone with 10 digits', () => {
    expect(formatPhone('8599933245')).toBe('(85)9993-3245');
  });

  it('should format the phone with 9 digits', () => {
    expect(formatPhone('859993324')).toBe('(85)9993-324');
  });

  it('should format the phone with 8 digits', () => {
    expect(formatPhone('85999332')).toBe('(85)9993-32');
  });

  it('should format the phone with 7 digits', () => {
    expect(formatPhone('8599933')).toBe('(85)9993-3');
  });

  it('should format the phone with 6 digits', () => {
    expect(formatPhone('859993')).toBe('(85)9993');
  });

  it('should format the phone with 5 digits', () => {
    expect(formatPhone('85999')).toBe('(85)999');
  });

  it('should format the phone with 4 digits', () => {
    expect(formatPhone('8599')).toBe('(85)99');
  });

  it('should format the phone with 3 digits', () => {
    expect(formatPhone('859')).toBe('(85)9');
  });

  it('should format the phone with 2 digits', () => {
    expect(formatPhone('85')).toBe('(85');
  });

  it('should format the phone with 1 digits', () => {
    expect(formatPhone('8')).toBe('(8');
  });

  it('should truncate fones with more than 11 digits and format it', () => {
    expect(formatPhone('859993324562')).toBe('(85)99933-2456');
  });
});
