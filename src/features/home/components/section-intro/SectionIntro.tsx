type SectionIntroProps = {
  readonly title: string;
  readonly description?: string;
  /** Heading id, used to wire `aria-labelledby` on the owning section. */
  readonly id?: string;
  /** Section-specific container chrome (background, padding, borders). */
  readonly className?: string;
};

export function SectionIntro({
  className,
  description,
  id,
  title,
}: SectionIntroProps): React.ReactElement {
  return (
    <div className={className}>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
