import { CollaborationTopicList } from '@/features/about/components/collaboration-topic-list/CollaborationTopicList';

import styles from './OpenSourceSection.module.scss';

export function OpenSourceSection(): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="opensource-title">
      <div className={styles.copy}>
        <h2 id="opensource-title">Open-source packages from product work.</h2>
        <p>
          sse-runtime is the first finished example: typed server events, connection lifecycle,
          React bindings and diagnostics extracted from application code. I add tools only when the
          underlying problem has shown up more than once.
        </p>
      </div>

      <CollaborationTopicList />
    </section>
  );
}
