import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve(process.env.OUTPUT_DIR || 'dist');
const base = (process.env.BASE_PATH || '/portfolio-website').replace(/\/$/, '');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name)))).flat();
}
const files = (await walk(root)).filter(file => file.endsWith('.html'));
const errors = [];
let count = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!raw.startsWith('/') && !raw.startsWith('#')) continue;
    const current = new URL(file.slice(root.length), 'https://local.invalid');
    const url = new URL(raw.replaceAll('&amp;', '&'), current);
    let path = url.pathname;
    if (raw.startsWith('/')) {
      if (base && path !== base && !path.startsWith(base + '/')) {
        errors.push(`${file}: URL escapes deployment base: ${raw}`); continue;
      }
      path = path.slice(base.length);
    }
    let target = raw.startsWith('#') ? file : join(root, decodeURIComponent(path));
    try {
      if ((await stat(target)).isDirectory()) target = join(target, 'index.html');
      const contents = await readFile(target, 'utf8');
      if (url.hash && !contents.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) errors.push(`${file}: missing fragment ${raw}`);
      count++;
    } catch { errors.push(`${file}: missing target ${raw}`); }
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Validated ${count} local links and assets across ${files.length} HTML pages.`);
