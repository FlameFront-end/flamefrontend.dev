import { WorkPrincipleList } from '@/features/about/components/work-principle-list/WorkPrincipleList';

import styles from './WorkflowSection.module.scss';

export function WorkflowSection(): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="workflow-title">
      <div className={styles.copy}>
        <h2 id="workflow-title">How I work.</h2>
        <p>
          I like infrastructure that stays boring in daily use. Product code should not need five
          hooks to explain why a connection recovered.
        </p>
      </div>

      <WorkPrincipleList />
    </section>
  );
}
