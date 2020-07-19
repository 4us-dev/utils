import isEmpty from './isEmpty';

export default (value?: string | null): boolean => {
  return !isEmpty(value);
};
