/**
 * Path for static files in `public/` when Next.js `basePath` is set
 * (e.g. GitHub Pages: assets live under /nawa_project/...).
 */
export function publicPath(filePath: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const p = filePath.startsWith("/") ? filePath : `/${filePath}`;
  return base ? `${base}${p}` : p;
}
