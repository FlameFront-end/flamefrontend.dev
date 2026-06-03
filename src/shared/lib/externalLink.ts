type ExternalLinkAttrs = {
  readonly rel?: string;
  readonly target?: string;
};

/**
 * Returns safe anchor attributes for a link. External http(s) links open in a
 * new tab with `rel="noreferrer"`; internal routes and `mailto:`/`tel:` links
 * stay in place.
 */
export function getExternalLinkAttrs(href: string): ExternalLinkAttrs {
  const isExternal = /^https?:\/\//.test(href);

  return isExternal ? { rel: 'noreferrer', target: '_blank' } : {};
}
