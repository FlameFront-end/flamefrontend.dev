import type { ContactAction } from '@/features/home/model/homeContent';
import { IconBox } from '@/shared/kit/icon-box/IconBox';
import { getExternalLinkAttrs } from '@/shared/lib/externalLink';

import styles from './ContactLink.module.scss';

type ContactLinkProps = {
  readonly action: ContactAction;
};

export function ContactLink({ action }: ContactLinkProps): React.ReactElement {
  const { Icon, description, href, label } = action;

  return (
    <a className={styles.link} href={href} {...getExternalLinkAttrs(href)}>
      <IconBox>
        <Icon />
      </IconBox>
      <span className={styles.content}>
        <strong>{label}</strong>
        <span>{description}</span>
      </span>
    </a>
  );
}
