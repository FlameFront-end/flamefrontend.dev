import { AboutHero } from '@/features/about/components/about-hero/AboutHero';
import { ExperienceSection } from '@/features/about/components/experience-section/ExperienceSection';
import { FocusSection } from '@/features/about/components/focus-section/FocusSection';
import { OpenSourceSection } from '@/features/about/components/open-source-section/OpenSourceSection';
import { WorkflowSection } from '@/features/about/components/workflow-section/WorkflowSection';
import { Page } from '@/shared/kit/page-layout/PageLayout';

import styles from './AboutPage.module.scss';

export function AboutPage(): React.ReactElement {
  return (
    <Page className={styles.page}>
      <AboutHero />
      <FocusSection />
      <ExperienceSection />
      <WorkflowSection />
      <OpenSourceSection />
    </Page>
  );
}
