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
    const input = '61607045';
    expect(formatCEP(input)).toBe('61607-045');
  });

  it('should format the CEP with 5 caracteres', () => {
    const input = '61607';
    expect(formatCEP(input)).toBe('61607');
  });

  it('should format the CEP with 6 caracteres', () => {
    const input = '616070';
    expect(formatCEP(input)).toBe('61607-0');
  });

  it('should format the CEP with 7 caracteres', () => {
    const input = '6160704';
    expect(formatCEP(input)).toBe('61607-04');
  });

  it('should format the CEP with 8 caracteres', () => {
    const input = '61607045';
    expect(formatCEP(input)).toBe('61607-045');
  });
});
