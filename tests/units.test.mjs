import assert from "node:assert/strict";
import test from "node:test";
import { library } from "../src/data/library.ts";
import { measureQuestions, topics } from "../src/data/questions/index.ts";
import { milestones, timelineSources } from "../src/data/timeline.ts";
import { baseUnits, derivedUnits, duLiangHeng, prefixes, unitById } from "../src/data/units.ts";

const questionIds = new Set(measureQuestions.map((question) => question.id));

test("国际单位制正好 7 个基本单位，每个都有一个主题讲它", () => {
  assert.equal(baseUnits.length, 7);
  assert.equal(new Set(baseUnits.map((unit) => unit.symbol)).size, 7);
  for (const unit of baseUnits) {
    assert.ok(topics.some((topic) => topic.unit === unit.id), `${unit.name} 没有对应的主题`);
    assert.ok(unit.feel.length > 0 && unit.family.length > 0 && unit.tools.length > 0 && unit.history.length > 0, unit.name);
  }
});

test("导出单位和度量衡只用到存在的基本单位", () => {
  for (const unit of derivedUnits) {
    assert.ok(unit.uses.length > 0, unit.name);
    for (const id of unit.uses) assert.ok(unitById(id), `${unit.name} 用到了不存在的 ${id}`);
  }
  for (const row of duLiangHeng) if (row.unit) assert.ok(unitById(row.unit), row.char);
});

test("词头从大到小排，2022 年的四个新词头都在", () => {
  for (let i = 1; i < prefixes.length; i++) assert.ok(prefixes[i - 1].power > prefixes[i].power, prefixes[i].name);
  assert.deepEqual(prefixes.filter((prefix) => prefix.isNew).map((prefix) => prefix.name), ["昆", "容", "柔", "亏"]);
});

test("年表挂的问题都存在", () => {
  for (const item of milestones) if (item.question) assert.ok(questionIds.has(item.question), `${item.year} ${item.title} → ${item.question}`);
});

test("单位档案和年表的出处都是 https 链接", () => {
  const urls = [...baseUnits.flatMap((unit) => unit.sources), ...timelineSources].map((source) => source.url);
  for (const url of urls) assert.match(url, /^https:\/\//, url);
  for (const shelf of library) for (const item of shelf.items) assert.match(item.url, /^https?:\/\//, item.label);
});
