import formatCEP from './formatCEP';

describe('formatCEP', () => {
  it('should return empty when input is undefined', () => {
    expect(formatCEP()).toBe('');
  });

  it('should return empty when input is null', () => {
    expect(formatCEP(null)).toBe('');
  });

  it('should return empty when input is empty', () => {
    expect(formatCEP('')).toBe('');
  });

  it('should return empty when input is whitespace', () => {
    expect(formatCEP('   ')).toBe('');
  });

  it('should format the CEP', () => {
    expect(formatCEP('61607045')).toBe('61607-045');
  });

  it('should format the CEP with 5 caracteres', () => {
    expect(formatCEP('61607')).toBe('61607');
  });

  it('should format the CEP with 6 caracteres', () => {
    expect(formatCEP('616070')).toBe('61607-0');
  });

  it('should format the CEP with 7 caracteres', () => {
    expect(formatCEP('6160704')).toBe('61607-04');
  });

  it('should format the CEP with 8 caracteres', () => {
    expect(formatCEP('61607045')).toBe('61607-045');
  });

  it('should truncate CEP if it have size grater than 8 and format', () => {
    expect(formatCEP('616070454')).toBe('61607-045');
  });
});
