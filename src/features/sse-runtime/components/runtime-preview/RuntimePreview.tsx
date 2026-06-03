import { Check, Copy } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './RuntimePreview.module.scss';

type CodeTokenTone = 'function' | 'keyword' | 'property' | 'string' | 'type';

type CodeToken = {
  readonly text: string;
  readonly tone?: CodeTokenTone;
};

const CODE_TOKEN_CLASS_BY_TONE = {
  function: styles.codeFunction,
  keyword: styles.codeKeyword,
  property: styles.codeProperty,
  string: styles.codeString,
  type: styles.codeType,
} satisfies Record<CodeTokenTone, string>;

const quickStartLines: readonly (readonly CodeToken[])[] = [
  [
    { text: 'import', tone: 'keyword' },
    { text: ' { ' },
    { text: 'createSSEClient', tone: 'function' },
    { text: ' } from ' },
    { text: '"@flamefrontend/sse-runtime-core"', tone: 'string' },
    { text: ';' },
  ],
  [],
  [
    { text: 'type', tone: 'keyword' },
    { text: ' ChatEvents', tone: 'type' },
    { text: ' = { ' },
    { text: 'message', tone: 'property' },
    { text: ': { text: ' },
    { text: 'string', tone: 'keyword' },
    { text: ' } };' },
  ],
  [],
  [
    { text: 'const', tone: 'keyword' },
    { text: ' client = ' },
    { text: 'createSSEClient', tone: 'function' },
    { text: '<' },
    { text: 'ChatEvents', tone: 'type' },
    { text: '>({' },
  ],
  [
    { text: '  ' },
    { text: 'key', tone: 'property' },
    { text: ': [' },
    { text: '"chat"', tone: 'string' },
    { text: ', ' },
    { text: '"123"', tone: 'string' },
    { text: '],' },
  ],
  [
    { text: '  ' },
    { text: 'url', tone: 'property' },
    { text: ': ' },
    { text: '"/api/chats/123/stream"', tone: 'string' },
    { text: ',' },
  ],
  [
    { text: '  ' },
    { text: 'events', tone: 'property' },
    { text: ': { ' },
    { text: 'message', tone: 'property' },
    { text: ': (event) => console.' },
    { text: 'log', tone: 'function' },
    { text: '(event.text) },' },
  ],
  [{ text: '});' }],
  [],
  [
    { text: 'await', tone: 'keyword' },
    { text: ' client.' },
    { text: 'connect', tone: 'function' },
    { text: '();' },
  ],
] as const;

const coreHighlights = [
  {
    title: 'Typed events',
    description: 'Inferred payloads.',
  },
  {
    title: 'Auth headers',
    description: 'Authorization support.',
  },
  {
    title: 'Reconnect + resume',
    description: 'Backoff + Last-Event-ID.',
  },
  {
    title: 'Single-tab mode',
    description: 'Web Locks coordination.',
  },
  {
    title: 'Zero runtime deps',
    description: 'Framework-agnostic core.',
  },
] as const;

const runtimeGuarantees = [
  {
    label: 'Dependencies',
    value: '0 runtime',
  },
  {
    label: 'Events',
    value: 'typed payloads',
  },
  {
    label: 'Auth',
    value: 'refresh headers',
  },
  {
    label: 'Tabs',
    value: 'single stream',
  },
  {
    label: 'Diagnostics',
    value: 'DevTools ready',
  },
] as const;

const INSTALL_COMMAND = 'npm install @flamefrontend/sse-runtime-core';
const COPY_FEEDBACK_TIMEOUT_MS = 1600;

export function RuntimePreview(): React.ReactElement {
  const [hasCopiedInstallCommand, setHasCopiedInstallCommand] = useState(false);
  const copyFeedbackTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (copyFeedbackTimer.current !== undefined) {
        window.clearTimeout(copyFeedbackTimer.current);
      }
    };
  }, []);

  const copyInstallCommand = useCallback(async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setHasCopiedInstallCommand(true);

      if (copyFeedbackTimer.current !== undefined) {
        window.clearTimeout(copyFeedbackTimer.current);
      }

      copyFeedbackTimer.current = window.setTimeout(() => {
        setHasCopiedInstallCommand(false);
      }, COPY_FEEDBACK_TIMEOUT_MS);
    } catch (error: unknown) {
      console.error('Failed to copy install command.', error);
    }
  }, []);

  return (
    <div className={styles.window} aria-label="sse-runtime product preview">
      <div className={styles.windowBar}>
        <span className={styles.windowDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.windowTitle}>sse-runtime · runtime devtools</span>
      </div>

      <div className={styles.windowBody}>
        <div className={styles.codePanel}>
          <div className={styles.codePanelHeader}>
            <span>Quick Start</span>
          </div>
          <div className={styles.commandLine}>
            <span className={styles.commandPrompt}>$</span>
            <code>{INSTALL_COMMAND}</code>
            <button
              className={styles.copyButton}
              type="button"
              aria-label="Copy install command"
              title="Copy install command"
              onClick={() => {
                void copyInstallCommand();
              }}
            >
              {hasCopiedInstallCommand ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            </button>
          </div>
          <pre className={styles.codeBlock} aria-label="Core createSSEClient quick start example">
            <code>
              {quickStartLines.map((tokens, lineIndex) => (
                <span className={styles.codeLine} key={lineIndex}>
                  <span className={styles.lineNumber}>
                    {String(lineIndex + 1).padStart(2, '0')}
                  </span>
                  <span className={tokens.length === 0 ? styles.emptyCodeLine : styles.codeText}>
                    {tokens.map((token, tokenIndex) => (
                      <span
                        className={token.tone ? CODE_TOKEN_CLASS_BY_TONE[token.tone] : undefined}
                        key={`${tokenIndex}-${token.text}`}
                      >
                        {token.text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>

        <aside className={styles.advantagesPanel} aria-label="Core runtime advantages">
          <div className={styles.panelHeader}>
            <p className={styles.panelTitle}>Core advantages</p>
          </div>
          <div className={styles.advantagesList}>
            {coreHighlights.map((highlight) => (
              <div className={styles.advantageItem} key={highlight.title}>
                <strong>{highlight.title}</strong>
                <span>{highlight.description}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className={styles.windowFooter}>
        <div className={styles.footerList}>
          {runtimeGuarantees.map((guarantee) => (
            <div className={styles.footerItem} key={guarantee.label}>
              <span>{guarantee.label}</span>
              <strong>{guarantee.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
