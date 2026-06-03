import { useMotionValue, useMotionValueEvent, useSpring } from 'motion/react';
import { useRef, type PointerEvent as ReactPointerEvent } from 'react';

import type { RuntimeCapability } from '@/features/home/model/homeContent';

import styles from './RuntimeCapabilityCard.module.scss';

type RuntimeCapabilityCardProps = {
  readonly capability: RuntimeCapability;
};

export function RuntimeCapabilityCard({
  capability,
}: RuntimeCapabilityCardProps): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.4 });
  const springOpacity = useSpring(glowOpacity, { stiffness: 220, damping: 28, mass: 0.35 });
  const FeatureIcon = capability.Icon;

  useMotionValueEvent(springX, 'change', (value) => {
    ref.current?.style.setProperty('--capability-x', `${value}px`);
  });

  useMotionValueEvent(springY, 'change', (value) => {
    ref.current?.style.setProperty('--capability-y', `${value}px`);
  });

  useMotionValueEvent(springOpacity, 'change', (value) => {
    ref.current?.style.setProperty('--capability-opacity', String(value));
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
      className={styles.card}
      onPointerEnter={updatePointerPosition}
      onPointerMove={updatePointerPosition}
      onPointerLeave={hideGlow}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.icon} aria-hidden="true">
        <FeatureIcon />
      </span>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </article>
  );
}
