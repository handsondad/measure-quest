import assert from "node:assert/strict";
import { test } from "node:test";
import { labs } from "../src/data/labs.ts";
import { measureQuestions, nextQuestions, questionsIn, questionWithLab, topics } from "../src/data/questions/index.ts";
import { dialogueProblems, sharedWords, topicWords } from "./dialogue-rules.mjs";

test("问题 id 不重复，每个问题都属于一个主题", () => {
  const ids = measureQuestions.map((question) => question.id);
  assert.equal(new Set(ids).size, ids.length);
  const known = new Set(topics.map((topic) => topic.id));
  for (const question of measureQuestions) assert.ok(known.has(question.topic), question.id);
});

test("每个主题至少两个问题，从简单排到难", () => {
  for (const topic of topics) {
    const list = questionsIn(topic.id);
    assert.ok(list.length >= 2, `${topic.id} 只有 ${list.length} 个`);
    assert.equal(list[0].difficulty, 1, topic.id);
    for (let i = 1; i < list.length; i += 1) assert.ok(list[i].difficulty >= list[i - 1].difficulty, topic.id);
  }
});

test("每段问答都是一路追问，最后小念自己总结", () => {
  const problems = measureQuestions.flatMap((question) => dialogueProblems(question));
  assert.deepEqual(problems, []);
});

test("追问检查看的是有意思的词，不是虚词", () => {
  const words = topicWords("天平为什么能称出一样重？");
  assert.ok(words.has("天平") && !words.has("什么"));
  assert.deepEqual(sharedWords("那为什么呢？", "这是为什么呢"), []);
  assert.deepEqual(sharedWords("那个东西呢？", "这个东西很重"), [], "人人都会说的词不算接住话头");
  assert.deepEqual(sharedWords("砝码是什么？", "砝码是知道重量的小金属块"), ["砝码"]);
});

test("相关问题在同一个主题里", () => {
  for (const question of measureQuestions) {
    const related = nextQuestions(question);
    assert.ok(related.length >= 1, question.id);
    assert.ok(related.every((item) => item.topic === question.topic && item.id !== question.id), question.id);
  }
});

test("每个小实验都挂在某个问题里，问题里用到的实验都存在", () => {
  for (const lab of labs) assert.ok(questionWithLab(lab.id), `${lab.id} 没有问题用它`);
  const known = new Set(labs.map((lab) => lab.id));
  for (const question of measureQuestions) {
    for (const turn of question.dialogue) {
      if (turn.show?.kind === "lab") assert.ok(known.has(turn.show.lab), `${question.id}：${turn.show.lab}`);
    }
  }
});

test("给大人的出处都是 https 链接", () => {
  for (const question of measureQuestions) {
    assert.ok(question.sources.length >= 1, question.id);
    for (const source of question.sources) assert.match(source.url, /^https:\/\//, `${question.id}：${source.label}`);
  }
});
