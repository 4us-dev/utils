/**
 * @since v0.0.1
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
class StringUtils {
  /**
   * @description
   * Checks if a string is `null`, `undefined`, `empty` or `whitespace`
   *
   * @since v0.0.1
   * @author Clairton luz <clairton.c.l@gmail.com>
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
   * @author Clairton luz <clairton.c.l@gmail.com>
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
   * @author Clairton luz <clairton.c.l@gmail.com>
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
   * @author Clairton luz <clairton.c.l@gmail.com>
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

  /**
   * Hide part of the email.
   *
   * You could hide the start and/or the end of email.
   *
   * @param email - The email to be hided
   * @param config - Setting how the email should be hided
   * @returns email hided
   *
   * @since v0.0.4
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().hideEmail(`fulano@gmail.com`) // `f...@gmail.com`
   * @example
   * new StringUtils().hideEmail(`fulano@gmail.com`, {
   *  hideStart: true, // default true
   *  hideEnd: true, // default false
   * }) // `f...@gma...`
   * @example
   * new StringUtils().hideEmail(`fulano.com`) // undefined
   * @example
   * new StringUtils().hideEmail(``) // undefined
   * @example
   * new StringUtils().hideEmail(``) // undefined
   * @example
   * new StringUtils().hideEmail(null) // undefined
   */
  hideEmail(
    email?: string | null,
    config: HideMailConfig = {
      hideStart: true,
      hideEnd: false,
      visibleStart: 1,
      visibleEnd: 3,
    }
  ): string | undefined {
    if (email && email.includes('@')) {
      const emailSplited = email.split('@');
      const hideStart = config.hideStart ?? true;
      const hideEnd = config.hideEnd ?? false;
      const visibleStart = config.visibleStart ?? 1;
      const visibleEnd = config.visibleEnd ?? 3;

      if (hideStart && emailSplited[0].length > visibleStart) {
        emailSplited[0] = emailSplited[0].substring(0, visibleStart) + '...';
      }
      if (hideEnd && emailSplited[1].length > visibleEnd) {
        emailSplited[1] = emailSplited[1].substring(0, visibleEnd) + '...';
      }

      return `${emailSplited[0]}@${emailSplited[1]}`;
    }
    return undefined;
  }

  /**
   * Removes all non-numeric caracteres from string.
   *
   * @param value - String to be processed
   * @returns `string` without any non-numeric caracteres
   *
   * @since v0.0.4
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new StringUtils().removeNonNumeric('a1b2c3') // '123'
   */
  removeNonNumeric(value?: string | null): string {
    if (!value) return '';
    return value.replace(/\D/g, '');
  }

  // formatCpf(cpf?: string | null) {
  //   if (cpf === null || cpf === undefined) return null;
  //   cpf = this.onlyNumbers(cpf);

  //   if (cpf.length > 11) cpf = cpf.substring(0, 11);

  //   if (cpf.length > 9) {
  //     cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
  //       6,
  //       9
  //     )}-${cpf.substring(9)}`;
  //   } else if (cpf.length > 6) {
  //     cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6)}`;
  //   } else if (cpf.length > 3) {
  //     cpf = `${cpf.substring(0, 3)}.${cpf.substring(3)}`;
  //   }

  //   return cpf;
  // }

  // containsOnlyDigits(value?: string | null): boolean {
  //   if (!value) return false;
  //   return /^\d+$/.test(value);
  // }
}

/**
 * @since v0.0.4
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export interface HideMailConfig {
  /**
   * hides the firt part of email
   *
   * @default true
   */
  hideStart?: boolean;

  /**
   * hides the second part of email
   *
   * @default false
   */
  hideEnd?: boolean;

  /**
   * number of characters visible at the first part of the email
   *
   * @default 1
   */
  visibleStart?: number;

  /**
   * number of characters visible at the first part of the email
   *
   * @default 3
   */
  visibleEnd?: number;
}
export default StringUtils;
