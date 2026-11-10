import { amountQuestions } from "./amount.ts";
import { chinaQuestions } from "./china.ts";
import { electricQuestions } from "./electric.ts";
import { heatQuestions } from "./heat.ts";
import { lengthQuestions } from "./length.ts";
import { lightQuestions } from "./light.ts";
import { massQuestions } from "./mass.ts";
import { modernQuestions } from "./modern.ts";
import { systemQuestions } from "./system.ts";
import { timeQuestions } from "./time.ts";
import { topics, type LabId, type MeasureQuestion, type Topic, type TopicGroup, type TopicId } from "./types.ts";
import { whyQuestions } from "./why.ts";
import { worldQuestions } from "./world.ts";

export * from "./types.ts";

/** 新问题只要加进对应主题的文件，就会出现在这里 */
export const measureQuestions: readonly MeasureQuestion[] = [
  ...whyQuestions,
  ...chinaQuestions,
  ...worldQuestions,
  ...systemQuestions,
  ...lengthQuestions,
  ...massQuestions,
  ...timeQuestions,
  ...heatQuestions,
  ...electricQuestions,
  ...lightQuestions,
  ...amountQuestions,
  ...modernQuestions
];

const byOrder = (a: MeasureQuestion, b: MeasureQuestion) => a.difficulty - b.difficulty;

export function questionsIn(topic: TopicId): MeasureQuestion[] {
  return measureQuestions.filter((question) => question.topic === topic).sort(byOrder);
}

export function questionById(id: string): MeasureQuestion | undefined {
  return measureQuestions.find((question) => question.id === id);
}

export function topicById(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}

export const topicsIn = (group: TopicGroup): Topic[] => topics.filter((topic) => topic.group === group);

export const topicForUnit = (unit: string): Topic | undefined => topics.find((topic) => topic.unit === unit);

/** 哪个问题里能玩到这个小实验 */
export function questionWithLab(lab: LabId): MeasureQuestion | undefined {
  return measureQuestions.find((question) => question.dialogue.some((turn) => turn.show?.kind === "lab" && turn.show.lab === lab));
}

/** 同一主题里排在后面的问题，用作“小念还想问” */
export function nextQuestions(question: MeasureQuestion, count = 3): MeasureQuestion[] {
  const list = questionsIn(question.topic).filter((item) => item.id !== question.id);
  const after = list.filter((item) => item.difficulty >= question.difficulty);
  return [...after, ...list.filter((item) => !after.includes(item))].slice(0, count);
}
