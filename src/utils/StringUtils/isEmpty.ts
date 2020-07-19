export default (value?: string | null): boolean => {
  return !value || value.length === 0;
};
