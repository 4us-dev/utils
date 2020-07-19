import isBlank from './isBlank';

export default (value?: string | null): boolean => {
  return !isBlank(value);
};
