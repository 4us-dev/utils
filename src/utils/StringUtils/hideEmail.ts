export default (
  email?: string | null,
  config: HideMailConfig = {
    hideStart: true,
    hideEnd: false,
    visibleStart: 1,
    visibleEnd: 3,
  }
): string | undefined => {
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
};

/**
 * @since v0.0.5
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
