export default (value?: string | null): boolean => {
  return !value || value.trim().length === 0;
};
