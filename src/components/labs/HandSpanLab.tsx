import { useState } from "react";

/** 桌子 120 厘米：小念一拃 15 厘米量 8 拃，爸爸一拃 24 厘米量 5 拃 */
const desk = 120;
const people = [
  { who: "nian", name: "小念", icon: "🧒", span: 15, color: "#ff9f43" },
  { who: "dad", name: "爸爸", icon: "👨", span: 24, color: "#4d96ff" }
] as const;

const left = 60;
const width = 780;
const scale = width / desk;

function arcs(y: number, span: number, count: number, up: boolean) {
  const w = span * scale;
  return Array.from({ length: count }, (_, i) => {
    const x0 = left + i * w;
    const lift = up ? -Math.min(46, w * 0.5) : Math.min(46, w * 0.5);
    return `M ${x0} ${y} Q ${x0 + w / 2} ${y + lift * 2} ${x0 + w} ${y}`;
  });
}

export function HandSpanLab() {
  const [counts, setCounts] = useState<Record<string, number>>({ nian: 0, dad: 0 });
  const [ruler, setRuler] = useState(false);
  const done = people.every((p) => counts[p.who] * p.span >= desk);

  const measure = (who: string, span: number) =>
    setCounts((c) => (c[who] * span >= desk ? c : { ...c, [who]: c[who] + 1 }));

  return (
    <div className="lab-body">
      <svg className="lab-svg" viewBox="0 0 900 420" role="img"
        aria-label={`书桌：小念量了 ${counts.nian} 拃，爸爸量了 ${counts.dad} 拃${ruler ? "，尺子量出 120 厘米" : ""}`}>
        <rect x={left} y={150} width={width} height={60} rx={12} fill="#d8b07a" stroke="#8a6232" strokeWidth={4} />
        <rect x={left + 30} y={210} width={22} height={120} fill="#b98a4e" />
        <rect x={left + width - 52} y={210} width={22} height={120} fill="#b98a4e" />
        {arcs(150, people[0].span, counts.nian, true).map((d, i) => (
          <path key={`n${i}`} className="lab-pop" d={d} fill="none" stroke={people[0].color} strokeWidth={6} strokeLinecap="round" />
        ))}
        {counts.nian > 0 && <text x={895} y={96} textAnchor="end" className="lab-svg-note" fill={people[0].color}>✋ {counts.nian}</text>}
        {arcs(210, people[1].span, counts.dad, false).map((d, i) => (
          <path key={`d${i}`} className="lab-pop" d={d} fill="none" stroke={people[1].color} strokeWidth={7} strokeLinecap="round" />
        ))}
        {counts.dad > 0 && <text x={895} y={300} textAnchor="end" className="lab-svg-note" fill={people[1].color}>✋ {counts.dad}</text>}
        {ruler && (
          <g className="lab-pop">
            <rect x={left} y={340} width={width} height={36} rx={4} fill="#ffe08a" stroke="#c9962c" strokeWidth={3} />
            {Array.from({ length: 13 }, (_, i) => (
              <g key={i}>
                <line x1={left + i * 10 * scale} y1={340} x2={left + i * 10 * scale} y2={358} stroke="#5d4e37" strokeWidth={3} />
                {i % 2 === 0 && <text x={left + i * 10 * scale} y={400} textAnchor="middle" className="lab-svg-tick">{i * 10}</text>}
              </g>
            ))}
            <text x={left + width / 2} y={40} textAnchor="middle" className="lab-svg-big">📏 120 厘米</text>
          </g>
        )}
      </svg>

      <div className="lab-controls">
        {people.map((p) => (
          <button key={p.who} type="button" className="lab-btn" style={{ borderColor: p.color }}
            disabled={counts[p.who] * p.span >= desk} onClick={() => measure(p.who, p.span)}>
            {p.icon} {p.name}量一拃
          </button>
        ))}
        <button type="button" className="lab-btn is-main" disabled={!done || ruler} onClick={() => setRuler(true)}>📏 拿尺子来量</button>
        <button type="button" className="lab-btn is-quiet" onClick={() => { setCounts({ nian: 0, dad: 0 }); setRuler(false); }}>↺ 重来</button>
      </div>

      <p className="lab-say" aria-live="polite">
        {ruler ? "不管谁来量，尺子都说 120 厘米。大家用同一个标准，数字就不打架了！"
          : done ? `同一张桌子：小念量了 ${counts.nian} 拃，爸爸量了 ${counts.dad} 拃。数字打架了，听谁的？`
          : "点按钮，小念和爸爸各用自己的手量一量。"}
      </p>
    </div>
  );
}
