/**
 * @class StringUtils
 */
class StringUtils {
  /**
   * @description
   * Checks if a string is `null`, `undefined`, `empty` or `whitespace`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isBlank(null) // true
   * @example
   * new StringUtils().isBlank(undefined) // true
   * @example
   * new StringUtils().isBlank('') // true
   * @example
   * new StringUtils().isBlank('   ') // true
   * @example
   * new StringUtils().isBlank('a') // false
   * @example
   * new StringUtils().isBlank('   a   ') // false
   */
  isBlank(value?: string | null): boolean {
    return !value || value.trim().length === 0;
  }

  /**
   * @description
   * Checks if a string is not `null`, `undefined`, `empty` or `whitespace`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isNotBlank(null) // false
   * @example
   * new StringUtils().isNotBlank(undefined) // false
   * @example
   * new StringUtils().isNotBlank('') // false
   * @example
   * new StringUtils().isNotBlank('   ') // false
   * @example
   * new StringUtils().isNotBlank('a') // true
   * @example
   * new StringUtils().isNotBlank('   a   ') // true
   */
  isNotBlank(value?: string | null): boolean {
    return !this.isBlank(value);
  }

  /**
   * @description
   * Checks if a string is `null`, `undefined` or `empty`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isEmpty(null) // true
   * @example
   * new StringUtils().isEmpty(undefined) // true
   * @example
   * new StringUtils().isEmpty('') // true
   * @example
   * new StringUtils().isEmpty('   ') // false
   * @example
   * new StringUtils().isEmpty('a') // false
   * @example
   * new StringUtils().isEmpty('   a   ') // false
   */
  isEmpty(value?: string | null): boolean {
    return !value || value.length === 0;
  }

  /**
   * @description
   * Checks if a string is not `null`, `undefined` or `empty`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.luz@gmail.com>
   *
   * @example
   * new StringUtils().isNotEmpty(null) // false
   * @example
   * new StringUtils().isNotEmpty(undefined) // false
   * @example
   * new StringUtils().isNotEmpty('') // false
   * @example
   * new StringUtils().isNotEmpty('   ') // true
   * @example
   * new StringUtils().isNotEmpty('a') // true
   * @example
   * new StringUtils().isNotEmpty('   a   ') // true
   */
  isNotEmpty(value?: string | null): boolean {
    return !this.isEmpty(value);
  }
}

export default StringUtils;
