import { type PointerEvent as ReactPointerEvent, useRef } from 'react';

import { useMotionValue, useMotionValueEvent, useSpring } from 'motion/react';

import styles from './HeroTitle.module.scss';

/**
 * Hero headline with a cursor-tracking gradient reveal.
 *
 * A second, gradient-filled copy of the text is stacked on top of the base
 * headline and masked by a soft radial spotlight. The spotlight position is
 * driven by motion springs writing CSS variables directly — so it glides with
 * the cursor (and eases back to centre on leave) without ever re-rendering.
 */
export function HeroTitle(): React.ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);

  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const springX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.5 });

  useMotionValueEvent(springX, 'change', (value) => {
    ref.current?.style.setProperty('--hero-x', `${value}%`);
  });
  useMotionValueEvent(springY, 'change', (value) => {
    ref.current?.style.setProperty('--hero-y', `${value}%`);
  });

  const handlePointerMove = (event: ReactPointerEvent<HTMLHeadingElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const handlePointerLeave = (): void => {
    x.set(50);
    y.set(50);
  };

  return (
    <h1
      ref={ref}
      className={styles.title}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className={styles.layer}>
        <span>TypeScript infrastructure</span>
        <span className={styles.line}>
          for production <span className={styles.accent}>React runtime</span>
        </span>
      </span>

      <span className={styles.reveal} aria-hidden="true">
        <span>TypeScript infrastructure</span>
        <span className={styles.line}>for production React runtime</span>
      </span>
    </h1>
  );
}
