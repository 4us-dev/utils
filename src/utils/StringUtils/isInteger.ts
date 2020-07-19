export default (value?: string | null): boolean => {
  if (!value) return false;
  return /^\d+$/.test(value);
};
