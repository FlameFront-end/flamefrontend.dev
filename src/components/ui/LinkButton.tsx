import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

type LinkButtonVariant = 'primary' | 'secondary' | 'ghost';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly children: ReactNode;
  readonly href: string;
  readonly variant?: LinkButtonVariant;
};

export function LinkButton({
  children,
  className,
  href,
  variant = 'secondary',
  ...anchorProps
}: LinkButtonProps): React.ReactElement {
  const linkClassName = className
    ? `${styles.linkButton} ${styles[variant]} ${className}`
    : `${styles.linkButton} ${styles[variant]}`;

  if (isExternalHref(href)) {
    return (
      <a className={linkClassName} href={href} rel="noreferrer" target="_blank" {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClassName} to={href}>
      {children}
    </Link>
  );
}

function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
}

