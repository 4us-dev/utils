import nextInt from './nextInt';

export default (length: number, caracteresAllowed: string): string => {
  let value = '';
  for (let i = 0; i < length; i++) {
    const randomInt = nextInt({
      min: 0,
      max: caracteresAllowed.length,
    });
    value += caracteresAllowed[randomInt];
  }

  return value;
};
