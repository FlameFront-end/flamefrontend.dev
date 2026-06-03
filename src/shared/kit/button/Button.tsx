import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  variant = 'secondary',
  ...buttonProps
}: ButtonProps): React.ReactElement {
  const buttonClassName = className
    ? `${styles.button} ${styles[variant]} ${className}`
    : `${styles.button} ${styles[variant]}`;

  return (
    <button type="button" {...buttonProps} className={buttonClassName}>
      {children}
    </button>
  );
}
