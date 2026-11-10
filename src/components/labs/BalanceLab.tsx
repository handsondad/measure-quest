import { useState } from "react";

const fruits = [
  { icon: "🍎", name: "苹果", grams: 156 },
  { icon: "🍐", name: "梨", grams: 213 },
  { icon: "🍓", name: "草莓", grams: 23 }
] as const;
const weights = [100, 10, 1] as const;

export function BalanceLab() {
  const [fruit, setFruit] = useState(0);
  const [pile, setPile] = useState<number[]>([]);
  const target = fruits[fruit].grams;
  const total = pile.reduce((sum, w) => sum + w, 0);
  const diff = total - target;
  const tilt = Math.max(-14, Math.min(14, (diff / Math.max(target, 30)) * 30));
  const level = diff === 0;

  const beam = 300;
  const rad = (tilt * Math.PI) / 180;
  const pivot = [450, 110] as const;
  const end = (side: -1 | 1) => [pivot[0] + side * beam * Math.cos(rad), pivot[1] + side * beam * Math.sin(rad)] as const;
  const [lx, ly] = end(-1);
  const [rx, ry] = end(1);
  const panDrop = 120;

  const choose = (index: number) => { setFruit(index); setPile([]); };
  const count = (w: number) => pile.filter((p) => p === w).length;

  return (
    <div className="lab-body">
      <svg className="lab-svg" viewBox="0 0 900 400" role="img"
        aria-label={`天平左边是${fruits[fruit].name}，右边砝码一共 ${total} 克，${level ? "天平平了" : diff > 0 ? "右边重" : "左边重"}`}>
        <rect x={pivot[0] - 12} y={pivot[1]} width={24} height={250} rx={8} fill="#c99a5b" stroke="#8a6232" strokeWidth={4} />
        <rect x={pivot[0] - 110} y={350} width={220} height={26} rx={10} fill="#b98a4e" />
        <g className="lab-tilt" style={{ transform: `rotate(${tilt}deg)`, transformOrigin: `${pivot[0]}px ${pivot[1]}px` }}>
          <line x1={pivot[0] - beam} y1={pivot[1]} x2={pivot[0] + beam} y2={pivot[1]} stroke="#8a6232" strokeWidth={14} strokeLinecap="round" />
          <polygon points={`${pivot[0]},${pivot[1] + 4} ${pivot[0] - 8},${pivot[1] + 70} ${pivot[0] + 8},${pivot[1] + 70}`} fill={level ? "#2f9e44" : "#e5484d"} />
        </g>
        {([[-1, lx, ly], [1, rx, ry]] as const).map(([side, x, y]) => {
          const baseX = pivot[0] + side * beam;
          return (
            <g key={side} className="lab-tilt" style={{ transform: `translate(${x - baseX}px, ${y - pivot[1]}px)` }}>
              <line x1={baseX} y1={pivot[1]} x2={baseX - 70} y2={pivot[1] + panDrop} stroke="#8a6232" strokeWidth={3} />
              <line x1={baseX} y1={pivot[1]} x2={baseX + 70} y2={pivot[1] + panDrop} stroke="#8a6232" strokeWidth={3} />
              <path d={`M ${baseX - 95} ${pivot[1] + panDrop} Q ${baseX} ${pivot[1] + panDrop + 50} ${baseX + 95} ${pivot[1] + panDrop} Z`} fill="#ffe08a" stroke="#c9962c" strokeWidth={4} />
              {side < 0 ? (
                <text x={baseX} y={pivot[1] + panDrop - 6} textAnchor="middle" fontSize={fruit === 2 ? 46 : 70}>{fruits[fruit].icon}</text>
              ) : pile.map((w, i) => {
                const size = w === 100 ? 34 : w === 10 ? 24 : 16;
                return (
                  <rect key={i} className="lab-pop" x={baseX - 78 + (i % 6) * 27} y={pivot[1] + panDrop - size - Math.floor(i / 6) * 36}
                    width={size * 0.8} height={size} rx={4} fill={w === 100 ? "#9aa5b1" : w === 10 ? "#b8c2cc" : "#d5dce3"} stroke="#5f6b78" strokeWidth={2} />
                );
              })}
            </g>
          );
        })}
        <text x={pivot[0]} y={46} textAnchor="middle" className="lab-svg-big">{level ? `平了！${fruits[fruit].name} ${total} 克` : `砝码 ${total} 克`}</text>
      </svg>

      <div className="lab-controls">
        <span className="lab-label">放什么：</span>
        {fruits.map((f, i) => (
          <button key={f.name} type="button" className="lab-btn" aria-pressed={fruit === i} onClick={() => choose(i)}>{f.icon} {f.name}</button>
        ))}
      </div>
      <div className="lab-controls">
        <span className="lab-label">加砝码：</span>
        {weights.map((w) => (
          <span key={w} className="lab-weight">
            <button type="button" className="lab-btn" disabled={pile.length >= 24} onClick={() => setPile([...pile, w])} aria-label={`加一个 ${w} 克砝码`}>＋ {w} 克</button>
            <button type="button" className="lab-btn is-quiet" disabled={count(w) === 0} aria-label={`拿掉一个 ${w} 克砝码`}
              onClick={() => { const at = pile.lastIndexOf(w); setPile(pile.filter((_, i) => i !== at)); }}>－</button>
            <small>×{count(w)}</small>
          </span>
        ))}
      </div>

      <p className="lab-say" aria-live="polite">
        {level ? `把砝码上的数加起来：${weights.filter((w) => count(w)).map((w) => `${count(w)} 个 ${w} 克`).join(" + ")} = ${total} 克。`
          : total === 0 ? "左边放好了水果，往右边一块一块加砝码吧。"
          : diff > 0 ? "右边沉下去了，砝码太重，拿掉一块小的试试。"
          : "左边还重，再加砝码。先放大的，再放小的，会快很多。"}
      </p>
    </div>
  );
}
