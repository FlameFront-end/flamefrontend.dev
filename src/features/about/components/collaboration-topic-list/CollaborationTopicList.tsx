import { ArrowRight } from 'lucide-react';

import { collaborationTopics } from '@/features/about/model/aboutContent';

import styles from './CollaborationTopicList.module.scss';

export function CollaborationTopicList(): React.ReactElement {
  return (
    <div className={styles.list} aria-label="Good reasons to reach out">
      {collaborationTopics.map((topic) => (
        <span key={topic}>
          <ArrowRight aria-hidden="true" />
          {topic}
        </span>
      ))}
    </div>
  );
}
