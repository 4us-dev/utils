export default (value?: string | null): string => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};
