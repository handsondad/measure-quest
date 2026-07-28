import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { test } from 'node:test';

const root = fileURLToPath(new URL('..', import.meta.url));
test('Vite entry point mounts the React application', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');

  assert.match(html, /id="root"/);
  assert.match(html, /src="\/src\/main\.jsx"/);
});

test('React application defines discovery and learning routes', async () => {
  const app = await readFile(join(root, 'src', 'App.jsx'), 'utf8');
  const main = await readFile(join(root, 'src', 'main.jsx'), 'utf8');
  const chapters = await readFile(join(root, 'src', 'data.js'), 'utf8');

  assert.match(main, /HashRouter/);
  assert.match(app, /path="\/stories"/);
  assert.match(app, /path="\/learn"/);
  assert.match(app, /path="\/lab"/);
  assert.match(app, /path="\/resources"/);
  assert.match(app, /path="\/:slug"/);
  for (const slug of ['meter', 'ancient-measures', 'standardization', 'everyday-life', 'si-units', 'modern-measurement', 'future', 'resources']) {
    assert.match(chapters, new RegExp(`slug: '${slug}'`));
  }
});

test('body-scale laboratory is a stateful, clearly labeled model', async () => {
  const component = await readFile(join(root, 'src', 'components', 'ScaleLab.jsx'), 'utf8');

  assert.match(component, /useState\(170\)/);
  assert.match(component, /id="scale-lab"/);
  assert.match(component, /onChange=/);
  assert.match(component, /20 m ≈/);
  assert.match(component, /近似模型/);
});

test('React source and Vite configuration exist', async () => {
  for (const file of ['src/main.jsx', 'src/App.jsx', 'src/components/Home.jsx', 'src/components/Stories.jsx', 'src/components/Explore.jsx', 'src/components/LabPage.jsx', 'src/components/SIUnitAtlas.jsx', 'src/components/ChapterPage.jsx', 'src/components/Resources.jsx', 'vite.config.js']) {
    const entry = await stat(join(root, file));
    assert.equal(entry.isFile(), true, `${file} should exist`);
  }
});

test('chapter content includes learning prompts and structured sections', async () => {
  const chapters = await readFile(join(root, 'src', 'data.js'), 'utf8');
  const page = await readFile(join(root, 'src', 'components', 'ChapterPage.jsx'), 'utf8');

  assert.match(chapters, /question:/);
  assert.match(chapters, /facts:/);
  assert.match(chapters, /sections:/);
  assert.match(page, /question-card/);
  assert.match(page, /chapter-facts/);
});

test('content model includes scalable collections and traceable featured stories', async () => {
  const data = await readFile(join(root, 'src', 'data.js'), 'utf8');

  assert.match(data, /export const collections/);
  assert.match(data, /export const featuredStories/);
  assert.match(data, /NIST · SI Units/);
  assert.match(data, /BIPM · CGPM Resolution 1/);
  assert.match(data, /export const siUnitProfiles/);
  assert.match(data, /symbol: 'cd'/);
  assert.equal((data.match(/symbol: '/g) ?? []).length, 7);
});
