import assert from "node:assert/strict";
import test from "node:test";
import { films } from "../src/data/films/index.ts";
import { measureQuestions } from "../src/data/questions/index.ts";
import { cameraAt, clockHands, envelope, pointAlong, sceneAt, totalDuration, turnAt } from "../src/lib/film.ts";
import { filmProblems } from "./film-rules.mjs";

const byId = new Map(measureQuestions.map((question) => [question.id, question]));

test("每部动画都通过规则检查", () => {
  for (const film of films) assert.deepEqual(filmProblems(film, byId.get(film.question)), [], film.question);
});

test("每个问题都有讲解动画", () => {
  const have = new Set(films.map((film) => film.question));
  assert.deepEqual(measureQuestions.filter((question) => !have.has(question.id)).map((question) => question.id), []);
});

test("一个问题只有一部动画", () => {
  const ids = films.map((film) => film.question);
  assert.equal(new Set(ids).size, ids.length);
});

test("时间线是时间的纯函数：同一时刻同一帧", () => {
  const film = films[0];
  const total = totalDuration(film);
  assert.deepEqual(sceneAt(film, 0), { index: 0, local: 0 });
  assert.equal(sceneAt(film, total + 5).index, film.scenes.length - 1);
  const second = film.scenes[0].duration + 0.5;
  assert.deepEqual(sceneAt(film, second), { index: 1, local: 0.5 });
  assert.equal(envelope(0.9, 1), 0);
  assert.ok(envelope(3, 1) > 0.99);
  assert.ok(envelope(10, 1, 4) < 0.01);
  assert.deepEqual(pointAlong([[0, 0], [100, 0], [100, 100]], 0.75), [100, 50]);
  const camera = cameraAt([{ t: 0, at: [600, 450], zoom: 2 }], 1);
  assert.deepEqual([camera.width, camera.height, camera.x, camera.y], [600, 450, 300, 225]);
  const edge = cameraAt([{ t: 0, at: [0, 0], zoom: 2 }], 0);
  assert.deepEqual([edge.x, edge.y], [0, 0]);
});

test("钟面指针跟着时间走，转身从 rotate 转到 turnTo", () => {
  assert.deepEqual(clockHands(0), { hour: 0, minute: 0, second: 0 });
  assert.deepEqual(clockHands(3 * 3600), { hour: 90, minute: 0, second: 0 });
  const quarter = clockHands(15 * 60 + 30);
  assert.ok(Math.abs(quarter.minute - 93) < 1e-9 && quarter.second === 180 && Math.abs(quarter.hour - 7.75) < 1e-9);
  assert.deepEqual(clockHands(12 * 3600), clockHands(0), "十二小时转一圈");
  assert.equal(turnAt(0, -90, 0, 2), -90);
  assert.equal(turnAt(5, -90, 0, 2), 0);
  assert.equal(turnAt(5, 30), 30);
});
