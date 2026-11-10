import { useState } from "react";

const min = -40;
const max = 110;
const presets = [
  { c: -40, icon: "🥶", text: "两种一样" },
  { c: 0, icon: "🧊", text: "冰水" },
  { c: 25, icon: "👕", text: "穿短袖" },
  { c: 37, icon: "🧒", text: "体温" },
  { c: 100, icon: "♨️", text: "水烧开" }
] as const;

const toF = (c: number) => Math.round((c * 9) / 5 + 32);

function feeling(c: number) {
  if (c <= 0) return "❄️ 冰会冻住";
  if (c < 15) return "🧥 有点冷，穿外套";
  if (c < 30) return "😊 舒服";
  if (c < 40) return "🥵 好热";
  if (c < 100) return "☕ 很烫，别碰";
  return "♨️ 水开了";
}

export function ThermometerLab() {
  const [c, setC] = useState(25);
  const f = toF(c);
  const guess = Math.trunc((f - 30) / 2);
  const top = 40;
  const bottom = 400;
  const yOf = (value: number) => bottom - ((value - min) / (max - min)) * (bottom - top);

  return (
    <div className="lab-body lab-thermo">
      <svg className="lab-svg" viewBox="0 0 420 480" role="img" aria-label={`温度计：摄氏 ${c} 度，华氏 ${f} 度`}>
        <rect x={190} y={top - 20} width={40} height={bottom - top + 40} rx={20} fill="#fff" stroke="#9fb3c8" strokeWidth={4} />
        <circle cx={210} cy={bottom + 34} r={36} fill="#e5484d" stroke="#9fb3c8" strokeWidth={4} />
        <rect x={200} y={yOf(c)} width={20} height={bottom + 10 - yOf(c)} rx={10} fill="#e5484d" className="lab-mercury" />
        {Array.from({ length: (max - min) / 10 + 1 }, (_, i) => min + i * 10).map((v) => (
          <g key={v}>
            <line x1={170} y1={yOf(v)} x2={190} y2={yOf(v)} stroke="#5d4e37" strokeWidth={2} />
            <text x={164} y={yOf(v) + 6} textAnchor="end" className="lab-svg-tick">{v}</text>
          </g>
        ))}
        {[-40, 0, 32, 50, 100, 150, 212].map((v) => {
          const y = yOf(((v - 32) * 5) / 9);
          return (
            <g key={v}>
              <line x1={230} y1={y} x2={250} y2={y} stroke="#7a4fd6" strokeWidth={2} />
              <text x={256} y={y + 6} className="lab-svg-tick" fill="#7a4fd6">{v}</text>
            </g>
          );
        })}
        <text x={120} y={24} textAnchor="middle" className="lab-svg-note">摄氏 ℃</text>
        <text x={300} y={24} textAnchor="middle" className="lab-svg-note" fill="#7a4fd6">华氏 ℉</text>
      </svg>

      <div className="lab-thermo-side">
        <p className="lab-readout"><b>{c}</b> 摄氏度<span>=</span><b className="is-f">{f}</b> 华氏度</p>
        <p className="lab-feel">{feeling(c)}</p>
        <label className="lab-slider">
          <span>拖动红线</span>
          <input type="range" min={min} max={max} step={1} value={c} onChange={(e) => setC(Number(e.target.value))}
            aria-valuetext={`摄氏 ${c} 度，华氏 ${f} 度`} />
        </label>
        <div className="lab-controls">
          {presets.map((p) => (
            <button key={p.c} type="button" className="lab-btn" aria-pressed={c === p.c} onClick={() => setC(p.c)}>{p.icon} {p.text}</button>
          ))}
        </div>
        <p className="lab-say" aria-live="polite">
          心算法：华氏 {f} 减 30 再除以 2，约 {guess} 摄氏度{Math.abs(guess - c) <= 3 ? "，差不远！" : "。太冷太热的时候，这个办法就不太准啦。"}
        </p>
      </div>
    </div>
  );
}
