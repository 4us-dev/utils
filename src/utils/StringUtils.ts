class StringUtils {
  isBlank(value?: string | null): boolean {
    return !value || value.trim().length === 0;
  }

  isNotBlank(value?: string | null): boolean {
    return !this.isBlank(value);
  }

  isEmpty(value?: string | null): boolean {
    return !value || value.length === 0;
  }

  isNotEmpty(value?: string | null): boolean {
    return !this.isEmpty(value);
  }
}

export default StringUtils;
