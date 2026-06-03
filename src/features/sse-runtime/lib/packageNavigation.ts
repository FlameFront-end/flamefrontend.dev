export function getPackageAnchorId(packageName: string): string {
  const shortName = packageName.replace('@flamefrontend/sse-runtime-', '');

  return `package-${shortName}`;
}

export function getPackageNavigationTitle(packageName: string): string {
  return packageName.replace('@flamefrontend/sse-runtime-', '');
}
