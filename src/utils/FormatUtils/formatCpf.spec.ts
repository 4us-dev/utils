import formatCpf from './formatCpf';

describe('formatCpf', () => {
  it('should return empty when input is undefined', () => {
    expect(formatCpf()).toBe('');
  });

  it('should return empty when input is null', () => {
    expect(formatCpf(null)).toBe('');
  });

  it('should return empty when input is empty', () => {
    expect(formatCpf('')).toBe('');
  });

  it('should return empty when input is whitespace', () => {
    expect(formatCpf('   ')).toBe('');
  });

  it('should format the cpf', () => {
    const input = '66273306010';
    expect(formatCpf(input)).toBe('662.733.060-10');
  });

  it('should remove all non-numeric caracteres and format the cpf', () => {
    const input = '66s2dD73F#306.01.,0';
    expect(formatCpf(input)).toBe('662.733.060-10');
  });

  it('should format the cpf partially with 1 caracter', () => {
    const input = '6';
    expect(formatCpf(input)).toBe('6');
  });

  it('should format the cpf partially with 2 caracters', () => {
    const input = '66';
    expect(formatCpf(input)).toBe('66');
  });

  it('should format the cpf partially with 3 caracters', () => {
    const input = '662';
    expect(formatCpf(input)).toBe('662');
  });

  it('should format the cpf partially with 4 caracters', () => {
    const input = '6627';
    expect(formatCpf(input)).toBe('662.7');
  });

  it('should format the cpf partially with 5 caracters', () => {
    const input = '66273';
    expect(formatCpf(input)).toBe('662.73');
  });

  it('should format the cpf partially with 6 caracters', () => {
    const input = '662733';
    expect(formatCpf(input)).toBe('662.733');
  });

  it('should format the cpf partially with 7 caracters', () => {
    const input = '6627330';
    expect(formatCpf(input)).toBe('662.733.0');
  });

  it('should format the cpf partially with 8 caracters', () => {
    const input = '66273306';
    expect(formatCpf(input)).toBe('662.733.06');
  });

  it('should format the cpf partially with 9 caracters', () => {
    const input = '662733060';
    expect(formatCpf(input)).toBe('662.733.060');
  });

  it('should format the cpf partially with 10 caracters', () => {
    const input = '6627330601';
    expect(formatCpf(input)).toBe('662.733.060-1');
  });

  it('should truncate the value if it is greater than 11 then format the cpf', () => {
    const input = '662733060101';
    expect(formatCpf(input)).toBe('662.733.060-10');
  });
});
