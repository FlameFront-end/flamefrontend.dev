import styles from './CodeBlock.module.scss';

type CodeBlockProps = {
  readonly code: string;
  readonly language?: string;
};

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps): React.ReactElement {
  return (
    <pre className={styles.block}>
      <code className={styles.code} data-language={language}>
        {code}
      </code>
    </pre>
  );
}

