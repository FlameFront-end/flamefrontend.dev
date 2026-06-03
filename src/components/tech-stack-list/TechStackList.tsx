import { Badge } from '../ui/Badge';
import styles from './TechStackList.module.scss';

type TechStackListProps = {
  readonly items: readonly string[];
};

export function TechStackList({ items }: TechStackListProps): React.ReactElement {
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

