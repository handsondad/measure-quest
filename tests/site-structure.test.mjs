import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { test } from 'node:test';

const root = fileURLToPath(new URL('..', import.meta.url));
const routes = [
  '/',
  '/meter/',
  '/ancient-measures/',
  '/standardization/',
  '/everyday-life/',
  '/si-units/',
  '/modern-measurement/',
  '/future/',
  '/resources/',
];

const homepageLinks = routes.slice(1).map((route) => route.slice(1));

test('homepage explains MeasureQuest and links to the guided reading path', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');

  assert.match(html, /MeasureQuest/);
  assert.match(html, /我们如何/);
  assert.match(html, /共同定义/);
  assert.match(html, /八段旅程/);
  assert.match(html, /Five turning points/);
  assert.match(html, /资料库/);

  for (const link of homepageLinks) {
    assert.ok(html.includes(`href="${link}"`), `homepage should link to ${link}`);
  }
});

test('homepage includes the interactive body-scale laboratory', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  const script = await readFile(join(root, 'app.js'), 'utf8');

  assert.match(html, /id="scale-lab"/);
  assert.match(html, /id="height"/);
  assert.match(html, /id="result-title"/);
  assert.match(html, /src="app\.js"/);
  assert.match(script, /function updateScaleLab\(\)/);
  assert.match(script, /height\?\.addEventListener\('input', updateScaleLab\)/);
});

test('all planned routes exist as static GitHub Pages entry points', async () => {
  for (const route of routes) {
    const file = route === '/' ? 'index.html' : join(route.slice(1), 'index.html');
    const entry = await stat(join(root, file));
    assert.equal(entry.isFile(), true, `${route} should have an index.html file`);
  }
});
