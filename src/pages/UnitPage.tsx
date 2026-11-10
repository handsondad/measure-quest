import type { CSSProperties } from "react";
import { Avatar } from "../components/Avatar";
import { labById } from "../data/labs";
import { questionsIn, topicForUnit, type LabId } from "../data/questions";
import { baseUnits, derivedUnits, unitById, type BaseUnitId } from "../data/units";
import { UnitChip } from "./UnitsPage";
import "./Questions.css";
import "./Units.css";

type Props = {
  id: BaseUnitId;
  heard: readonly string[];
  onBack: () => void;
  onUnit: (id: BaseUnitId) => void;
  onOpen: (id: string) => void;
  onLab: (id: LabId) => void;
};

export function UnitPage({ id, heard, onBack, onUnit, onOpen, onLab }: Props) {
  const unit = unitById(id);
  if (!unit) return null;
  const topic = topicForUnit(id);
  const questions = topic ? questionsIn(topic.id) : [];
  const labIds = [...new Set(questions.flatMap((q) => q.dialogue.flatMap((turn) => (turn.show?.kind === "lab" ? [turn.show.lab] : []))))];
  const built = derivedUnits.filter((derived) => derived.uses.includes(id));

  return (
    <div className="qa units-page unit-page" style={{ "--unit": unit.color } as CSSProperties}>
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← 🧩 单位大家庭</button>
        <div className="page-heading">
          <span>7 个基本单位 · {unit.quantity}</span>
          <h1>{unit.emoji} {unit.name} <code>{unit.symbol}</code></h1>
        </div>
      </header>

      <div className="units-talk">
        <p><Avatar who="nian" /><strong>小念：</strong>{unit.ask}</p>
        <p><Avatar who="dad" /><strong>爸爸：</strong>{unit.answer}</p>
      </div>

      <div className="unit-grid">
        <section className="unit-box" aria-labelledby="unit-feel">
          <h2 id="unit-feel">👐 有多大？摸一摸</h2>
          <ul className="unit-feel">
            {unit.feel.map((item) => <li key={item.text}><span aria-hidden="true">{item.icon}</span>{item.text}</li>)}
          </ul>
        </section>

        <section className="unit-box" aria-labelledby="unit-family">
          <h2 id="unit-family">👨‍👩‍👧 一家子</h2>
          <table className="units-table">
            <tbody>
              {unit.family.map((row) => (
                <tr key={row.symbol} className={row.value === "基本单位" ? "is-base" : undefined}>
                  <td><b>{row.name}</b></td><td><code>{row.symbol}</code></td><td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="unit-box" aria-labelledby="unit-tools">
          <h2 id="unit-tools">🧰 拿什么量</h2>
          <ul className="unit-tools">
            {unit.tools.map((tool) => (
              <li key={tool.name}><span aria-hidden="true">{tool.icon}</span><b>{tool.name}</b><small>{tool.note}</small></li>
            ))}
          </ul>
        </section>

        <section className="unit-box" aria-labelledby="unit-history">
          <h2 id="unit-history">🗓️ 它是怎么定下来的</h2>
          <ol className="unit-history">
            {unit.history.map((step) => <li key={step.year + step.text}><b>{step.year}</b><span>{step.text}</span></li>)}
          </ol>
        </section>
      </div>

      {built.length > 0 && (
        <section className="unit-box" aria-labelledby="unit-built">
          <h2 id="unit-built">🧱 用它拼出来的单位</h2>
          <div className="units-uses">
            {built.map((derived) => <span key={derived.symbol} className="unit-chip is-plain">{derived.emoji} {derived.name} <code>{derived.symbol}</code></span>)}
          </div>
        </section>
      )}

      {(questions.length > 0 || labIds.length > 0) && (
        <section className="qa-related unit-box" aria-labelledby="unit-talks">
          <h2 id="unit-talks"><Avatar who="nian" /> 听小念和爸爸聊{unit.name}</h2>
          {questions.map((question) => (
            <button key={question.id} type="button" onClick={() => onOpen(question.id)}>
              {question.title}{heard.includes(question.id) ? " ⭐" : ""}
            </button>
          ))}
          {labIds.map((labId) => {
            const lab = labById(labId);
            return lab && <button key={labId} type="button" onClick={() => onLab(labId)}>🔬 动手试试：{lab.emoji} {lab.title}</button>;
          })}
        </section>
      )}

      <details className="parent-tip">
        <summary>👨‍👩‍👧 给大人：今天的正式定义</summary>
        <p>{unit.definition}</p>
        <p>定住它的常数：<b>{unit.constant}</b></p>
        {unit.namedAfter && <p>名字来历：{unit.namedAfter}</p>}
        <ul className="parent-sources">
          {unit.sources.map((source) => (
            <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>
          ))}
        </ul>
      </details>

      <nav className="qlist-other" aria-label="换一个基本单位">
        <h2>换一块积木</h2>
        <div className="units-uses">
          {baseUnits.filter((other) => other.id !== id).map((other) => <UnitChip key={other.id} id={other.id} onUnit={onUnit} />)}
        </div>
      </nav>
    </div>
  );
}
