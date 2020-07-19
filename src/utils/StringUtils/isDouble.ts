export default (value?: string | null): boolean => {
  if (!value || value.includes(' ')) return false;
  return !isNaN(+value);
};
