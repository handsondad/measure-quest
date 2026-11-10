import type { CSSProperties } from "react";
import { Avatar } from "../components/Avatar";
import { filmFor } from "../data/films";
import { difficultyLabel, questionsIn, topicById, topicGroups, topics, type Difficulty, type MeasureQuestion, type TopicId } from "../data/questions";
import { unitById, type BaseUnitId } from "../data/units";
import "./Questions.css";

type Props = {
  topic: TopicId;
  heard: readonly string[];
  onBack: () => void;
  onOpen: (id: string) => void;
  onTopic: (id: TopicId) => void;
  onUnit: (id: BaseUnitId) => void;
};

const difficulties: readonly Difficulty[] = [1, 2, 3];
const difficultyHint: Record<Difficulty, string> = {
  1: "一听就懂的小问题",
  2: "要多想一步：这个标准是怎么定出来的？",
  3: "藏得更深的问题，大人也常常答不全"
};

function QuestionCard({ question, heard, onOpen }: { question: MeasureQuestion; heard: boolean; onOpen: () => void }) {
  const topic = topicById(question.topic);
  const hasLab = question.dialogue.some((turn) => turn.show?.kind === "lab");
  return (
    <button type="button" className={`qlist-card ${heard ? "is-heard" : ""}`} onClick={onOpen}
      style={{ "--bubble": topic?.color ?? "#ff9f43" } as CSSProperties}>
      <strong>{question.title}</strong>
      <small className="qlist-trigger">{question.trigger}</small>
      <span className="qlist-badges">
        <em>💬 {question.dialogue.length} 问 {question.dialogue.length} 答</em>
        {filmFor(question.id) && <em>🎬 有动画</em>}
        {hasLab && <em>🔬 能动手</em>}
        {heard && <em className="is-star">⭐ 看过</em>}
        <em className="is-units">{question.units.slice(0, 4).join(" · ")}</em>
      </span>
    </button>
  );
}

export function QuestionListPage({ topic: topicId, heard, onBack, onOpen, onTopic, onUnit }: Props) {
  const topic = topicById(topicId);
  const questions = questionsIn(topicId);
  const heardCount = questions.filter((question) => heard.includes(question.id)).length;
  if (!topic) return null;
  const unit = topic.unit ? unitById(topic.unit) : undefined;
  const group = topicGroups.find((item) => item.id === topic.group);

  return (
    <div className="qlist">
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← 回到首页</button>
        <div className="page-heading">
          <span>{group?.title} · {questions.length} 个问题 · 看过 {heardCount} 个</span>
          <h1>{topic.emoji} {topic.title}</h1>
        </div>
      </header>

      <div className="qlist-intro" style={{ "--bubble": topic.color } as CSSProperties}>
        <p><Avatar who="nian" /><strong>小念：</strong>{topic.kidHook}</p>
        <p><Avatar who="dad" /><strong>爸爸：</strong>这一类其实都在讲{topic.dadLens}。挑一个问题，我们从头聊到底。</p>
        {unit && (
          <button type="button" className="qlist-unit" style={{ "--unit": unit.color } as CSSProperties} onClick={() => onUnit(unit.id)}>
            <span aria-hidden="true">{unit.emoji}</span>
            <span><b>{unit.name}（{unit.symbol}）的档案卡</b><small>有多大、一家子、拿什么量、怎么定下来的</small></span>
            <em aria-hidden="true">→</em>
          </button>
        )}
      </div>

      {difficulties.map((level) => {
        const group = questions.filter((question) => question.difficulty === level);
        if (group.length === 0) return null;
        return (
          <section key={level} className="qlist-group" aria-label={difficultyLabel[level]}>
            <h2>{"⭐".repeat(level)} {difficultyLabel[level]}<small>{difficultyHint[level]}</small></h2>
            <div className="qlist-grid">
              {group.map((question) => (
                <QuestionCard key={question.id} question={question} heard={heard.includes(question.id)} onOpen={() => onOpen(question.id)} />
              ))}
            </div>
          </section>
        );
      })}

      <nav className="qlist-other" aria-label="换一个主题">
        <h2>换一个主题</h2>
        <div className="qlist-chips">
          {topics.map((item) => (
            <button key={item.id} type="button" aria-current={item.id === topicId ? "true" : undefined}
              onClick={() => onTopic(item.id)}>{item.emoji} {item.title}</button>
          ))}
        </div>
      </nav>
    </div>
  );
}
