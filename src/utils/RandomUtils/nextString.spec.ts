import nextString from './nextString';
describe('nextString', () => {
  it('should generate random with length 16 by default', () => {
    const actual = nextString();
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(16);
  });

  it('should generate random with length 16 by default when not informed into config', () => {
    const actual = nextString({ specialAmbiguous: false });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(16);
  });

  it('should generate random with length 30 using only upper case caracters', () => {
    const actual = nextString({
      length: 30,
      lower: false,
      numbers: false,
      specialSimple: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[A-Z]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only lower case caracters', () => {
    const actual = nextString({
      length: 30,
      upper: false,
      numbers: false,
      specialSimple: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[a-z]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only numbers', () => {
    const actual = nextString({
      length: 30,
      upper: false,
      lower: false,
      specialSimple: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[\d]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only special caracters simple', () => {
    const actual = nextString({
      length: 30,
      upper: false,
      lower: false,
      numbers: false,
      specialAmbiguous: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^[!#$%&*_+=\-^~?;:.,|]+$/.test(actual)).toBeTruthy();
  });

  it('should generate random with length 30 using only special caracters ambiguous', () => {
    const actual = nextString({
      length: 30,
      upper: false,
      lower: false,
      numbers: false,
      specialSimple: false,
    });
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
    expect(actual).toHaveLength(30);
    expect(/^["()'`´{[\]}/><]+$/.test(actual)).toBeTruthy();
  });
});
