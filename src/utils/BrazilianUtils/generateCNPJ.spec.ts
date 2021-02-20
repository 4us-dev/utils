import generateCNPJ from './generateCNPJ';
import isCNPJ from './isCNPJ';

describe('generateCNPJ', () => {
  it('should return generate a CNPJ valid', () => {
    expect(isCNPJ(generateCNPJ())).toBeTruthy();
  });
});
