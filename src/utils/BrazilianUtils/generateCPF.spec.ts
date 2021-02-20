import generateCPF from './generateCPF';
import isCPF from './isCPF';

describe('generateCPF', () => {
  it('should return generate a CPF valid', () => {
    expect(isCPF(generateCPF())).toBeTruthy();
  });
});
