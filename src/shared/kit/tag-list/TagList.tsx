import { Badge } from '../badge/Badge';

import styles from './TagList.module.scss';

type TagListProps = {
  readonly items: readonly string[];
};

export function TagList({ items }: TagListProps): React.ReactElement {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <Badge key={item} tone="neutral">
          {item}
        </Badge>
      ))}
    </div>
  );
}
