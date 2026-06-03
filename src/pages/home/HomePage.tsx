import {
  Activity,
  Boxes,
  BriefcaseBusiness,
  Code,
  GitBranch,
  Lock,
  Mail,
  Package,
  RefreshCw,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useMotionValue, useMotionValueEvent, useSpring } from 'motion/react';
import { useRef, type PointerEvent as ReactPointerEvent } from 'react';

import { HeroTitle } from '../../components/hero-title/HeroTitle';
import { RuntimePreview } from '../../components/runtime-preview/RuntimePreview';
import { Badge } from '../../components/ui/Badge';
import { LinkButton } from '../../components/ui/LinkButton';
import { contactLinks, GITHUB_PROFILE_URL } from '../../data/links';
import { plannedTools, sseRuntime } from '../../data/tools';
import type { Metric } from '../../data/types';
import styles from './HomePage.module.scss';

const homeMetrics: readonly Metric[] = [
  {
    value: '~3.5k',
    label: 'lines removed in production',
  },
  {
    value: '229',
    label: 'unit tests',
  },
  {
    value: '3',
    label: 'npm packages',
  },
  {
    value: '0',
    label: 'runtime deps in core',
  },
];

const flagshipFeatures = [
  {
    title: 'Framework-agnostic core',
    description: 'Zero runtime dependencies. The SSE runtime works without React.',
  },
  {
    title: 'React integration',
    description: 'Hooks and a provider designed for production application code.',
  },
  {
    title: 'Built-in observability',
    description: 'DevTools and diagnostics for stream health, reconnects and events.',
  },
] as const;

const runtimeCapabilities = [
  {
    title: 'Typed event contracts',
    description: 'SSE event payloads stay inferred from client setup to React usage.',
    Icon: Code,
  },
  {
    title: 'Reconnect and resume',
    description: 'Backoff and Last-Event-ID handling live in the runtime boundary.',
    Icon: RefreshCw,
  },
  {
    title: 'Auth refresh boundary',
    description: 'Headers can refresh without leaking app auth details into stream code.',
    Icon: Lock,
  },
  {
    title: 'Single-stream tabs',
    description: 'Web Locks and BroadcastChannel coordinate duplicate browser tabs.',
    Icon: GitBranch,
  },
  {
    title: 'Zero-dependency core',
    description: 'Core primitives are framework-agnostic and ship without runtime deps.',
    Icon: Boxes,
  },
  {
    title: 'React integration',
    description: 'Hooks and a provider package wrap production React application needs.',
    Icon: Package,
  },
  {
    title: 'Diagnostics surface',
    description: 'Stream health, reconnects, stale state and events are inspectable.',
    Icon: Activity,
  },
  {
    title: 'Migration proof',
    description: 'Extracted from production after removing thousands of app lines.',
    Icon: ShieldCheck,
  },
] as const;

const commercialContexts = [
  'AI SaaS runtime layers',
  'ERP interfaces',
  'fintech & e-commerce flows',
  'real-time React UI',
] as const;

const productionConstraintMetrics = [
  {
    value: '4.5+',
    label: 'years in commercial React systems',
  },
  {
    value: 'runtime',
    label: 'boundaries for auth, streams and tabs',
  },
  {
    value: 'DX',
    label: 'tooling, diagnostics and maintainability',
  },
] as const;

const contactDescriptions = {
  GitHub: 'Open-source packages and repositories',
  Telegram: '@Artem_Kaliganov',
  LinkedIn: 'Professional profile and work context',
  Email: 'flame.kaliganov@gmail.com',
} as const;

const contactIcons = {
  GitHub: Code,
  Telegram: Send,
  LinkedIn: BriefcaseBusiness,
  Email: Mail,
} as const;

const contactLabels = ['GitHub', 'Telegram', 'LinkedIn', 'Email'] as const;

const contactActions = contactLabels.flatMap((label) => {
  const link = contactLinks.find((contactLink) => contactLink.label === label);

  return link
    ? [
        {
          ...link,
          description: contactDescriptions[label],
          Icon: contactIcons[label],
        },
      ]
    : [];
});

export function HomePage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <HeroTitle />
          <p className={styles.heroLead}>
            Open-source libraries for <strong>real-time UI</strong>,{' '}
            <strong>SSE coordination</strong>, developer diagnostics and frontend runtime
            architecture.
          </p>
          <div className={styles.heroActions}>
            <LinkButton href="/tools/sse-runtime" variant="primary">
              Explore sse-runtime
            </LinkButton>
            <LinkButton href="/tools" variant="secondary">
              Browse all tools
            </LinkButton>
            <LinkButton href={GITHUB_PROFILE_URL} variant="ghost">
              GitHub ↗
            </LinkButton>
          </div>
        </div>

        <RuntimePreview />
      </section>

      <section className={styles.metricStrip} aria-label="sse-runtime metrics">
        {homeMetrics.map((metric) => (
          <div className={styles.metric} key={`${metric.value}-${metric.label}`}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.flagshipSection} aria-labelledby="sse-runtime-overview">
        <div className={styles.flagshipCopy}>
          <h2 id="sse-runtime-overview">sse-runtime</h2>
          <p>
            A TypeScript SSE runtime extracted from production React infrastructure and
            shipped as a set of open-source packages.
          </p>
          <div className={styles.flagshipActions}>
            <LinkButton href="/tools/sse-runtime" variant="primary">
              Open tool page
            </LinkButton>
            <LinkButton href="/case-studies/sse-runtime-production-migration" variant="secondary">
              Read migration case study
            </LinkButton>
          </div>
        </div>

        <div className={styles.featureStack}>
          {flagshipFeatures.map((feature) => (
            <div className={styles.featureItem} key={feature.title}>
              <span className={styles.featureMark} aria-hidden="true" />
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featureSection} aria-labelledby="runtime-features">
        <div className={styles.boardHeader}>
          <h2 id="runtime-features">Production runtime primitives</h2>
          <p>
            Everything needed to keep SSE code typed, observable and contained inside a
            runtime boundary.
          </p>
        </div>

        <div className={styles.featureMatrix}>
          {runtimeCapabilities.map((capability) => (
            <RuntimeCapabilityCard capability={capability} key={capability.title} />
          ))}
        </div>
      </section>

      <section className={styles.packageSection} aria-labelledby="runtime-packages">
        <div className={styles.boardHeader}>
          <h2 id="runtime-packages">A small package surface for real React apps</h2>
          <p>
            The runtime is split by responsibility: core primitives, React integration and
            diagnostics.
          </p>
        </div>

        <div className={styles.packageGrid}>
          {packages.map((packageLink) => (
            <a
              className={styles.packageCell}
              href={packageLink.href}
              key={packageLink.name}
              rel="noreferrer"
              target="_blank"
            >
              <code>{packageLink.name}</code>
              <p>{packageLink.purpose}</p>
              <span>{packageLink.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.roadmapSection} aria-labelledby="production-constraints">
        <div className={styles.contextPanel}>
          <div className={styles.contextCopy}>
            <h2 id="production-constraints">Production constraints</h2>
            <p>
              Commercial React and TypeScript work across real-time interfaces, runtime
              boundaries and developer tooling.
            </p>
          </div>

          <div className={styles.constraintGrid}>
            {productionConstraintMetrics.map((metric) => (
              <ProductionConstraintItem key={metric.value} metric={metric} />
            ))}
          </div>

          <div className={styles.contextList}>
            {commercialContexts.map((context) => (
              <CommercialContextCell context={context} key={context} />
            ))}
          </div>
        </div>

        <div className={styles.roadmapPanel}>
          <div className={styles.roadmapHeader}>
            <h2>Future runtime tools</h2>
            <p>
              Planned packages are marked clearly. Future work stays separate from completed
              software.
            </p>
          </div>

          <div className={styles.plannedTools}>
            {plannedTools.map((tool) => (
              <article className={styles.plannedTool} key={tool.slug}>
                <div className={styles.plannedToolHeader}>
                  <code className={styles.plannedToolName}>{tool.name}</code>
                  <Badge tone="muted">{tool.statusLabel}</Badge>
                </div>
                <p>{tool.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection} aria-labelledby="contact-heading">
        <div className={styles.contactHeader}>
          <h2 id="contact-heading">Contact</h2>
          <p>
            Discuss frontend infrastructure, production React architecture, runtime tooling or
            open-source collaboration.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactActions.map(({ href, label, description, Icon }) => {
            const isEmailLink = href.startsWith('mailto:');

            return (
              <a
                className={styles.contactLink}
                href={href}
                key={label}
                rel={isEmailLink ? undefined : 'noreferrer'}
                target={isEmailLink ? undefined : '_blank'}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <Icon />
                </span>
                <span className={styles.contactContent}>
                  <strong>{label}</strong>
                  <span>{description}</span>
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

type RuntimeCapabilityCardProps = {
  readonly capability: (typeof runtimeCapabilities)[number];
};

type CommercialContextCellProps = {
  readonly context: (typeof commercialContexts)[number];
};

type ProductionConstraintItemProps = {
  readonly metric: (typeof productionConstraintMetrics)[number];
};

function ProductionConstraintItem({
  metric,
}: ProductionConstraintItemProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.4 });
  const springOpacity = useSpring(glowOpacity, { stiffness: 220, damping: 28, mass: 0.35 });

  useMotionValueEvent(springX, 'change', (value) => {
    ref.current?.style.setProperty('--constraint-x', `${value}px`);
  });

  useMotionValueEvent(springY, 'change', (value) => {
    ref.current?.style.setProperty('--constraint-y', `${value}px`);
  });

  useMotionValueEvent(springOpacity, 'change', (value) => {
    ref.current?.style.setProperty('--constraint-opacity', String(value));
  });

  const updatePointerPosition = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
    glowOpacity.set(1);
  };

  const hideGlow = (): void => {
    glowOpacity.set(0);
  };

  return (
    <div
      ref={ref}
      className={styles.constraintItem}
      onPointerEnter={updatePointerPosition}
      onPointerMove={updatePointerPosition}
      onPointerLeave={hideGlow}
    >
      <span className={styles.constraintGlow} aria-hidden="true" />
      <div className={styles.constraintContent}>
        <strong>{metric.value}</strong>
        <span>{metric.label}</span>
      </div>
    </div>
  );
}

function CommercialContextCell({ context }: CommercialContextCellProps): React.ReactElement {
  const ref = useRef<HTMLSpanElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.4 });
  const springOpacity = useSpring(glowOpacity, { stiffness: 220, damping: 28, mass: 0.35 });

  useMotionValueEvent(springX, 'change', (value) => {
    ref.current?.style.setProperty('--context-x', `${value}px`);
  });

  useMotionValueEvent(springY, 'change', (value) => {
    ref.current?.style.setProperty('--context-y', `${value}px`);
  });

  useMotionValueEvent(springOpacity, 'change', (value) => {
    ref.current?.style.setProperty('--context-opacity', String(value));
  });

  const updatePointerPosition = (event: ReactPointerEvent<HTMLSpanElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
    glowOpacity.set(1);
  };

  const hideGlow = (): void => {
    glowOpacity.set(0);
  };

  return (
    <span
      ref={ref}
      className={styles.contextCell}
      onPointerEnter={updatePointerPosition}
      onPointerMove={updatePointerPosition}
      onPointerLeave={hideGlow}
    >
      <span className={styles.contextGlow} aria-hidden="true" />
      <span className={styles.contextText}>{context}</span>
    </span>
  );
}

function RuntimeCapabilityCard({ capability }: RuntimeCapabilityCardProps): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.4 });
  const springOpacity = useSpring(glowOpacity, { stiffness: 220, damping: 28, mass: 0.35 });
  const FeatureIcon = capability.Icon;

  useMotionValueEvent(springX, 'change', (value) => {
    ref.current?.style.setProperty('--feature-x', `${value}px`);
  });

  useMotionValueEvent(springY, 'change', (value) => {
    ref.current?.style.setProperty('--feature-y', `${value}px`);
  });

  useMotionValueEvent(springOpacity, 'change', (value) => {
    ref.current?.style.setProperty('--feature-opacity', String(value));
  });

  const updatePointerPosition = (event: ReactPointerEvent<HTMLElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
    glowOpacity.set(1);
  };

  const hideGlow = (): void => {
    glowOpacity.set(0);
  };

  return (
    <article
      ref={ref}
      className={styles.featureCard}
      onPointerEnter={updatePointerPosition}
      onPointerMove={updatePointerPosition}
      onPointerLeave={hideGlow}
    >
      <span className={styles.featureGlow} aria-hidden="true" />
      <span className={styles.featureIcon} aria-hidden="true">
        <FeatureIcon />
      </span>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </article>
  );
}
