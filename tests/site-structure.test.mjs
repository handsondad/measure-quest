import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { test } from 'node:test';

const root = new URL('..', import.meta.url).pathname;
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

test('homepage explains MeasureQuest and links to main sections', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');

  assert.match(html, /MeasureQuest/);
  assert.match(html, /From the king’s arm to the speed of light\./);
  assert.match(html, /从古代身体尺度到现代自然常数/);
  assert.match(html, /主要章节入口/);
  assert.match(html, /度量衡发展时间线/);
  assert.match(html, /参考资料入口/);

  for (const route of routes.slice(1)) {
    assert.match(html, new RegExp(`href="${route.slice(1)}"`));
  }
});

test('all planned routes exist as static GitHub Pages entry points', async () => {
  for (const route of routes) {
    const file = route === '/' ? 'index.html' : join(route.slice(1), 'index.html');
    const entry = await stat(join(root, file));
    assert.equal(entry.isFile(), true, `${route} should have an index.html file`);
  }
});
