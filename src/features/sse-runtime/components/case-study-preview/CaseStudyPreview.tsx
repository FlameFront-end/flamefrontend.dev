import type { CaseStudy } from '@/features/sse-runtime/model/caseStudy';
import { Card } from '@/shared/kit/card/Card';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';

import styles from './CaseStudyPreview.module.scss';

type CaseStudyPreviewProps = {
  readonly caseStudy: CaseStudy;
};

export function CaseStudyPreview({ caseStudy }: CaseStudyPreviewProps): React.ReactElement {
  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>{caseStudy.title}</h3>
      <p className={styles.subtitle}>{caseStudy.subtitle}</p>
      <LinkButton href={`/case-studies/${caseStudy.slug}`} variant="secondary">
        Read case study
      </LinkButton>
    </Card>
  );
}
