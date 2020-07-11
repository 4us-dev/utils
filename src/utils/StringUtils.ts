class StringUtils {
  /**
   * Checks if a string is `null`, `undefined`, `empty` or `whitespace`
   *
   * @param value
   * @return {boolean}
   *
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isBlank(null) // true
   * new StringUtils().isBlank(undefined) // true
   * new StringUtils().isBlank('') // true
   * new StringUtils().isBlank('   ') // true
   * new StringUtils().isBlank('a') // false
   * new StringUtils().isBlank('   a   ') // false
   */
  isBlank(value?: string | null): boolean {
    return !value || value.trim().length === 0;
  }

  /**
   * Checks if a string is not `null`, `undefined`, `empty` or `whitespace`
   *
   * @param value
   * @return {boolean}
   *
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isNotBlank(null) // false
   * new StringUtils().isNotBlank(undefined) // false
   * new StringUtils().isNotBlank('') // false
   * new StringUtils().isNotBlank('   ') // false
   * new StringUtils().isNotBlank('a') // true
   * new StringUtils().isNotBlank('   a   ') // true
   */
  isNotBlank(value?: string | null): boolean {
    return !this.isBlank(value);
  }

  /**
   * Checks if a string is `null`, `undefined` or `empty`
   *
   * @param value
   * @return {boolean}
   *
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isEmpty(null) // true
   * new StringUtils().isEmpty(undefined) // true
   * new StringUtils().isEmpty('') // true
   * new StringUtils().isEmpty('   ') // false
   * new StringUtils().isEmpty('a') // false
   * new StringUtils().isEmpty('   a   ') // false
   */
  isEmpty(value?: string | null): boolean {
    return !value || value.length === 0;
  }

  /**
   * Checks if a string is not `null`, `undefined` or `empty`
   *
   * @param value
   * @return {boolean}
   *
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isNotEmpty(null) // false
   * new StringUtils().isNotEmpty(undefined) // false
   * new StringUtils().isNotEmpty('') // false
   * new StringUtils().isNotEmpty('   ') // true
   * new StringUtils().isNotEmpty('a') // true
   * new StringUtils().isNotEmpty('   a   ') // true
   */
  isNotEmpty(value?: string | null): boolean {
    return !this.isEmpty(value);
  }
}

export default StringUtils;
