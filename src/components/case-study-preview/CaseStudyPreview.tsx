import type { CaseStudy } from '../../data/projects';
import { Card } from '../ui/Card';
import { LinkButton } from '../ui/LinkButton';
import styles from './CaseStudyPreview.module.scss';

type CaseStudyPreviewProps = {
  readonly caseStudy: CaseStudy;
};

export function CaseStudyPreview({ caseStudy }: CaseStudyPreviewProps): React.ReactElement {
  return (
    <Card className={styles.card}>
      <p className={styles.eyebrow}>Production case study</p>
      <h3 className={styles.title}>{caseStudy.title}</h3>
      <p className={styles.subtitle}>{caseStudy.subtitle}</p>
      <LinkButton href={`/case-studies/${caseStudy.slug}`} variant="secondary">
        Read case study
      </LinkButton>
    </Card>
  );
}

