import formatCNPJ from './formatCNPJ';

describe('formatCNPJ', () => {
  it('should return empty when input is undefined', () => {
    expect(formatCNPJ()).toBe('');
  });

  it('should return empty when input is null', () => {
    expect(formatCNPJ(null)).toBe('');
  });

  it('should return empty when input is empty', () => {
    expect(formatCNPJ('')).toBe('');
  });

  it('should return empty when input is whitespace', () => {
    expect(formatCNPJ('   ')).toBe('');
  });

  it('should format the cnpj', () => {
    const input = '94338204000180';
    expect(formatCNPJ(input)).toBe('94.338.204/0001-80');
  });

  it('should remove all non-numeric caracteres and format the cnpj', () => {
    const input = '94#s3d38g2hj%&0400;/0180';
    expect(formatCNPJ(input)).toBe('94.338.204/0001-80');
  });

  it('should format the cnpj partially with 13 caracters', () => {
    const input = '9433820400018';
    expect(formatCNPJ(input)).toBe('94.338.204/0001-8');
  });

  it('should format the cnpj partially with 12 caracters', () => {
    const input = '943382040001';
    expect(formatCNPJ(input)).toBe('94.338.204/0001');
  });

  it('should format the cnpj partially with 11 caracters', () => {
    const input = '94338204000';
    expect(formatCNPJ(input)).toBe('94.338.204/000');
  });

  it('should format the cnpj partially with 10 caracters', () => {
    const input = '9433820400';
    expect(formatCNPJ(input)).toBe('94.338.204/00');
  });

  it('should format the cnpj partially with 9 caracters', () => {
    const input = '943382040';
    expect(formatCNPJ(input)).toBe('94.338.204/0');
  });

  it('should format the cnpj partially with 8 caracters', () => {
    const input = '94338204';
    expect(formatCNPJ(input)).toBe('94.338.204');
  });

  it('should format the cnpj partially with 7 caracters', () => {
    const input = '9433820';
    expect(formatCNPJ(input)).toBe('94.338.20');
  });

  it('should format the cnpj partially with 6 caracters', () => {
    const input = '943382';
    expect(formatCNPJ(input)).toBe('94.338.2');
  });

  it('should format the cnpj partially with 5 caracters', () => {
    const input = '94338';
    expect(formatCNPJ(input)).toBe('94.338');
  });

  it('should format the cnpj partially with 4 caracters', () => {
    const input = '9433';
    expect(formatCNPJ(input)).toBe('94.33');
  });

  it('should format the cnpj partially with 3 caracters', () => {
    const input = '943';
    expect(formatCNPJ(input)).toBe('94.3');
  });

  it('should format the cnpj partially with 2 caracters', () => {
    const input = '94';
    expect(formatCNPJ(input)).toBe('94');
  });

  it('should format the cnpj partially with 1 caracters', () => {
    const input = '9';
    expect(formatCNPJ(input)).toBe('9');
  });

  it('should truncate the value if it is greater than 11 then format the cnpj', () => {
    const input = '943382040001801';
    expect(formatCNPJ(input)).toBe('94.338.204/0001-80');
  });
});
