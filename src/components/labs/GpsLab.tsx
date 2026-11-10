import { useState } from "react";

type P = readonly [number, number];
/** 1、2 号卫星的连线横穿地图中间，两个交点（真的和假的）都落在画面里 */
const sats: readonly P[] = [[90, 320], [810, 300], [450, 70]];
const spots: readonly P[] = [[420, 200], [560, 420], [330, 440], [620, 190], [480, 400]];
const names = ["1 号", "2 号", "3 号"];

const dist = (a: P, b: P) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** 两个圆的交点：只用前两颗卫星时，小念可能在这两个点中的任何一个 */
function meet(a: P, ra: number, b: P, rb: number): P[] {
  const d = dist(a, b);
  const x = (ra * ra - rb * rb + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(ra * ra - x * x, 0));
  const ux = (b[0] - a[0]) / d;
  const uy = (b[1] - a[1]) / d;
  const mx = a[0] + ux * x;
  const my = a[1] + uy * x;
  return [[mx - uy * h, my + ux * h], [mx + uy * h, my - ux * h]];
}

export function GpsLab() {
  const [spot, setSpot] = useState(0);
  const [shown, setShown] = useState(0);
  const you = spots[spot];
  const radii = sats.map((s) => dist(s, you));
  const guesses = shown === 2 ? meet(sats[0], radii[0], sats[1], radii[1]) : [];

  return (
    <div className="lab-body">
      <svg className="lab-svg lab-gps" viewBox="0 0 900 640" role="img"
        aria-label={shown === 3 ? "三个圆交在一点，找到了小念" : `打开了 ${shown} 颗卫星的圆圈`}>
        <rect width={900} height={640} fill="#e8f4ec" />
        <path d="M 0 470 C 200 430 300 520 520 470 S 820 430 900 460" fill="none" stroke="#9fd0f0" strokeWidth={30} />
        {[[240, 240], [250, 560], [690, 300], [820, 560], [640, 560], [300, 140]].map(([x, y], i) => (
          <text key={i} x={x} y={y} fontSize={40} textAnchor="middle" opacity={0.75}>{["🏠", "🌳", "🏫", "🌳", "🏪", "🌳"][i]}</text>
        ))}
        {sats.map((s, i) => i < shown && (
          <circle key={`c${i}-${spot}`} className="lab-ring" cx={s[0]} cy={s[1]} r={radii[i]} fill="none"
            stroke={["#ff9f43", "#4d96ff", "#a66cff"][i]} strokeWidth={5} strokeDasharray="14 10" />
        ))}
        {guesses.map(([x, y], i) => (
          <text key={i} x={x} y={y + 14} textAnchor="middle" fontSize={40} className="lab-pop" fill="#e5484d" fontWeight={800}>?</text>
        ))}
        {sats.map((s, i) => (
          <g key={i} opacity={i < shown ? 1 : 0.45}>
            <text x={s[0]} y={s[1] + 18} fontSize={52} textAnchor="middle">🛰️</text>
            <text x={s[0]} y={s[1] + 58} textAnchor="middle" className="lab-svg-note">{names[i]}</text>
          </g>
        ))}
        {shown === 3 && (
          <g className="lab-pop">
            <circle cx={you[0]} cy={you[1]} r={30} fill="#e5484d" opacity={0.2} />
            <text x={you[0]} y={you[1] - 10} fontSize={54} textAnchor="middle">📍</text>
            <text x={you[0] + 44} y={you[1] + 18} fontSize={40} textAnchor="middle">🧒</text>
          </g>
        )}
      </svg>

      <div className="lab-controls">
        <button type="button" className="lab-btn is-main" disabled={shown >= 3} onClick={() => setShown(shown + 1)}>
          📡 收到 {names[Math.min(shown, 2)]}卫星的信号
        </button>
        <button type="button" className="lab-btn is-quiet" onClick={() => { setShown(0); setSpot((spot + 1) % spots.length); }}>🙈 小念换个地方藏</button>
      </div>

      <p className="lab-say" aria-live="polite">
        {[
          "小念藏起来了。手机一颗卫星都没收到，还不知道他在哪儿。",
          "知道离 1 号卫星多远：小念就在这个圆圈上，可圈上哪儿都有可能。",
          "再加 2 号卫星：两个圆圈只交在两个点上，小念在其中一个“？”那里。",
          "加上 3 号卫星：三个圆圈只交在一个点上，找到小念啦！"
        ][shown]}
      </p>
    </div>
  );
}
