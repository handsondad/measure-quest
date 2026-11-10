// 每段小念 × 爸爸问答都要守的规矩。写内容时可以只查一个文件：
//   node tests/dialogue-rules.mjs src/data/questions/length.ts
import { pathToFileURL } from "node:url";

/** 七岁孩子听不懂、爸爸要换成大白话的词 */
export const jargon = /超精细|能级|跃迁|热力学|不确定度|溯源|量值|频率|波长|赫兹|焦耳|电磁感应|相对论|三角测量|子午线弧|基准器|计量学/;

// 只由这些字组成的两字词说明不了话题
const filler = new Set("的了吗呢吧呀啊哦嘛是我你他她它们这那就也都还又在有和么什怎为个一不没会要说想看能可以得很太好真再");
/** 每段都会说到的词，接住了也不算真的接着话头追问 */
const generic = new Set(["爸爸", "小念", "时候", "现在", "样子", "意思", "知道", "东西", "一样", "大家"]);

/** 话里有意思的两字词，比如 尺子、天平、原子 */
export function topicWords(line) {
  const words = new Set();
  const chars = [...line];
  for (let i = 0; i < chars.length - 1; i += 1) {
    const a = chars[i];
    const b = chars[i + 1];
    if (!/\p{Script=Han}/u.test(a) || !/\p{Script=Han}/u.test(b)) continue;
    if (filler.has(a) || filler.has(b) || generic.has(a + b)) continue;
    words.add(a + b);
  }
  return words;
}

export function sharedWords(question, answer) {
  return [...topicWords(question)].filter((word) => answer.includes(word));
}

export function dialogueProblems(question) {
  const problems = [];
  const say = (message) => problems.push(`${question.id}: ${message}`);
  if (!/？/.test(question.title)) say("标题要是一个问句，带「？」");
  const turns = question.dialogue ?? [];
  if (turns.length < 5 || turns.length > 8) say(`要 5～8 轮问答，现在 ${turns.length} 轮`);

  const units = question.units ?? [];
  if (units.length < 1 || units.length > 6) say(`units 要 1～6 个，现在 ${units.length} 个`);
  if (new Set(units).size !== units.length) say("units 里有重复");
  const spoken = [question.title, ...turns.flatMap((turn) => [turn.nian, turn.dad])].join("");
  for (const unit of units) if (!spoken.includes(unit)) say(`units 里的「${unit}」在问答里没出现`);

  const sources = question.sources ?? [];
  if (sources.length < 1) say("至少要写一个给大人看的出处");
  for (const source of sources) if (!/^https:\/\//.test(source.url) || !source.label) say(`出处「${source.label}」要有名字和 https 链接`);

  turns.forEach((turn, index) => {
    const last = index === turns.length - 1;
    if (!turn.nian || !turn.dad) say(`第 ${index + 1} 轮要有小念和爸爸两句`);
    if (!last && !/？/.test(turn.nian)) say(`第 ${index + 1} 轮：小念要问一个问题，带「？」`);
    if (last && !/^我(懂了|明白了)/.test(turn.nian)) say("最后一轮：小念用自己的话总结，以「我懂了」或「我明白了」开头");
    if (index > 0) {
      const shared = sharedWords(turn.nian, turns[index - 1].dad);
      if (shared.length === 0) say(`第 ${index + 1} 轮：小念要接住爸爸上一句里的一个词再追问`);
    }
    if (turn.dad.length < 20 || turn.dad.length > 170) say(`第 ${index + 1} 轮：爸爸说了 ${turn.dad.length} 个字（要 20～170）`);
    if (turn.nian.length > 90) say(`第 ${index + 1} 轮：小念说了 ${turn.nian.length} 个字，孩子的话要短一点（≤90）`);
    for (const line of [turn.nian, turn.dad]) if (jargon.test(line)) say(`第 ${index + 1} 轮：「${line.match(jargon)[0]}」太专业了，换成大白话`);
    if (turn.show?.kind === "steps" && turn.show.frames.length < 2) say(`第 ${index + 1} 轮：图解至少 2 步`);
  });
  return problems;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const files = process.argv.slice(2);
  let total = 0;
  for (const file of files) {
    const module = await import(pathToFileURL(file).href);
    for (const list of Object.values(module)) {
      if (!Array.isArray(list)) continue;
      for (const question of list) {
        const problems = dialogueProblems(question);
        total += problems.length;
        for (const problem of problems) console.log(problem);
      }
    }
  }
  console.log(total ? `${total} 个问题` : "all dialogues pass");
  process.exitCode = total ? 1 : 0;
}
