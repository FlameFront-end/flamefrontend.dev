import { CheckCircle2 } from 'lucide-react';

import { workPrinciples } from '@/features/about/model/aboutContent';

import styles from './WorkPrincipleList.module.scss';

export function WorkPrincipleList(): React.ReactElement {
  return (
    <ul className={styles.list}>
      {workPrinciples.map((principle) => (
        <li key={principle}>
          <CheckCircle2 aria-hidden="true" />
          <span>{principle}</span>
        </li>
      ))}
    </ul>
  );
}
