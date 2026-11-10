import { useState } from "react";

/** 从大到小排，tell 只用爸爸在问答里说过的说法 */
const ladder = [
  { unit: "千米", tell: "1000 米" },
  { unit: "米", tell: "就是 1 米" },
  { unit: "厘米", tell: "米的百分之一" },
  { unit: "毫米", tell: "米的千分之一" },
  { unit: "微米", tell: "米的百万分之一" },
  { unit: "纳米", tell: "米的十亿分之一" }
] as const;

type Unit = (typeof ladder)[number]["unit"];

const things: readonly { emoji: string; name: string; unit: Unit; why: string }[] = [
  { emoji: "🏙️", name: "两个城市之间的路", unit: "千米", why: "路太长，用米数字长得读不过来，用千米就短多了。" },
  { emoji: "🚪", name: "教室的门有多高", unit: "米", why: "门比你高一点，用米说正合适。" },
  { emoji: "✏️", name: "一支铅笔有多长", unit: "厘米", why: "铅笔比 1 米短得多，用厘米数字刚好。" },
  { emoji: "✒️", name: "铅笔芯有多粗", unit: "毫米", why: "铅笔芯细细的，用毫米刚刚好。" },
  { emoji: "🦠", name: "一个细菌有多大", unit: "微米", why: "细菌要用显微镜才看得见，毫米都太大了，要用微米。" },
  { emoji: "💻", name: "芯片里最细的线条", unit: "纳米", why: "芯片里的线条比细菌还小得多，要用纳米来量。" }
];

const rank = (unit: Unit) => ladder.findIndex((step) => step.unit === unit);

export function PrefixLab() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Unit | null>(null);
  const [solved, setSolved] = useState<ReadonlySet<number>>(new Set());
  const thing = things[index];
  const right = picked === thing.unit;

  const pick = (unit: Unit) => {
    setPicked(unit);
    if (unit === thing.unit) setSolved((done) => new Set(done).add(index));
  };
  const next = () => {
    setIndex((i) => (i + 1) % things.length);
    setPicked(null);
  };

  const say = picked === null
    ? `${thing.name}，用哪把尺子来量最合适？`
    : right
      ? `答对了！${thing.why}`
      : rank(picked) < rank(thing.unit)
        ? `${picked}太大了，量${thing.name}，数字会变成零点零零几。再往小一点的找找。`
        : `${picked}太小了，量${thing.name}，数字会长得读不过来。再往大一点的找找。`;

  return (
    <div className="lab-body lab-prefix">
      <div className="lab-prefix-card">
        <span className="lab-prefix-emoji lab-pop" key={index} aria-hidden="true">{thing.emoji}</span>
        <strong>{thing.name}</strong>
        <small>第 {index + 1} 样，一共 {things.length} 样 · 已经答对 {solved.size} 样</small>
      </div>

      <ol className="lab-ladder" aria-label="从大到小的六把尺子">
        {ladder.map((step) => {
          const state = picked === step.unit ? (right ? "is-right" : "is-wrong") : "";
          return (
            <li key={step.unit}>
              <button type="button" className={`lab-ladder-btn ${state}`} aria-pressed={picked === step.unit}
                aria-label={`用${step.unit}量（${step.tell}）`} onClick={() => pick(step.unit)}>
                <b>{step.unit}</b>
                <small>{step.tell}</small>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="lab-controls">
        <button type="button" className={right ? "lab-btn is-main" : "lab-btn"} onClick={next} aria-label="换下一样东西">
          下一样 ➡️
        </button>
        {solved.size === things.length && <span className="lab-label">🎉 六样全答对了！</span>}
      </div>

      <p className="lab-say" aria-live="polite">{say}</p>
    </div>
  );
}
