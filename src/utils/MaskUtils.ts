/**
 * @since v0.0.4
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export interface ObfuscateMailConfig {
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

/**
 * @since v0.0.4
 * @author Clairton luz <clairton.c.l@gmail.com>
 */
export default class MaskUtils {
  /**
   * Obfuscate part of the email.
   *
   * You could obfuscate the start and/or the end of email.
   *
   * @param email - The email to be obfuscated
   * @param config - Setting how the email should be obfuscated
   * @returns email obfuscated
   *
   * @since v0.0.4
   * @author Clairton luz <clairton.c.l@gmail.com>
   *
   * @example
   * new MaskUtils().hideEmail(`fulano@gmail.com`) // `f...@gmail.com`
   * @example
   * new MaskUtils().hideEmail(`fulano@gmail.com`, {
   *  hideStart: true, // default true
   *  hideEnd: true, // default false
   * }) // `f...@gma...`
   * @example
   * new MaskUtils().hideEmail(`fulano.com`) // undefined
   * @example
   * new MaskUtils().hideEmail(``) // undefined
   * @example
   * new MaskUtils().hideEmail(``) // undefined
   * @example
   * new MaskUtils().hideEmail(null) // undefined
   */
  hideEmail(
    email?: string | null,
    config: ObfuscateMailConfig = {
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
   * new MaskUtils().removeNonNumeric('a1b2c3') // '123'
   */
  removeNonNumeric(value?: string | null): string {
    if (!value) return '';
    return value.replace(/\D/g, '');
  }
}
