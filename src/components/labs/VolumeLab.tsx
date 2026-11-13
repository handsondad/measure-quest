import { useState } from "react";

const baseWater = 200;
const maxVolume = 300;

const items = [
  {
    id: "stone",
    icon: "🪨",
    name: "小鹅卵石",
    volume: 60,
    say: "水面从 200 毫升涨到 260 毫升：260 − 200 = 60 毫升，小石头占 60 立方厘米！"
  },
  {
    id: "gold",
    icon: "🟨",
    name: "500 克纯金块",
    volume: 26,
    say: "500 克纯金特别紧实，水面只涨到 226 毫升，只占 26 毫升的地方。"
  },
  {
    id: "crown",
    icon: "👑",
    name: "500 克可疑王冠",
    volume: 36,
    say: "抓到了！同样是 500 克，王冠却把水挤到了 236 毫升（占 36 毫升），里面一定掺了银子！"
  }
] as const;

type ItemId = (typeof items)[number]["id"];

export function VolumeLab() {
  const [submerged, setSubmerged] = useState<ItemId | null>(null);
  const current = items.find((item) => item.id === submerged);
  const level = baseWater + (current?.volume ?? 0);

  const top = 46;
  const bottom = 356;
  const yOf = (ml: number) => bottom - (ml / maxVolume) * (bottom - top);
  const waterY = yOf(level);
  const baseLineY = yOf(baseWater);

  return (
    <div className="lab-body lab-thermo">
      <svg
        className="lab-svg"
        viewBox="0 0 460 400"
        role="img"
        aria-label={
          current
            ? `量筒里放进了${current.name}，水面从 ${baseWater} 毫升涨到 ${level} 毫升，体积是 ${current.volume} 毫升`
            : `量筒里装着 ${baseWater} 毫升水`
        }
      >
        <rect x={140} y={top - 10} width={160} height={bottom - top + 14} rx={12} fill="#fff" stroke="#8aa4bf" strokeWidth={5} />
        <rect x={122} y={bottom} width={196} height={18} rx={9} fill="#9fb3c8" />
        <rect
          x={145}
          y={waterY}
          width={150}
          height={bottom - waterY}
          rx={6}
          fill="#7cc4ff"
          opacity={0.75}
          className="lab-mercury"
        />
        <line x1={145} y1={baseLineY} x2={295} y2={baseLineY} stroke="#225dac" strokeWidth={2.5} strokeDasharray="7 5" />
        {[0, 50, 100, 150, 200, 250, 300].map((ml) => {
          const y = yOf(ml);
          const major = ml % 100 === 0;
          return (
            <g key={ml}>
              <line x1={295 - (major ? 22 : 13)} y1={y} x2={295} y2={y} stroke="#4a3b2a" strokeWidth={major ? 3 : 2} />
              <text x={308} y={y + 6} className="lab-svg-tick">{ml}</text>
            </g>
          );
        })}
        <text x={308} y={24} className="lab-svg-note">毫升</text>
        {current && (
          <g className="lab-pop">
            <text x={220} y={bottom - 22} textAnchor="middle" fontSize={54}>{current.icon}</text>
            <line x1={118} y1={baseLineY} x2={118} y2={waterY} stroke="#e5484d" strokeWidth={4} strokeLinecap="round" />
            <text x={108} y={(baseLineY + waterY) / 2 + 7} textAnchor="end" className="lab-svg-note" fill="#e5484d">
              +{current.volume}
            </text>
          </g>
        )}
      </svg>

      <div className="lab-thermo-side">
        <p className="lab-readout">
          水面 <b>{level}</b> 毫升
          {current && (
            <>
              <span>−</span>{baseWater}<span>=</span>
              <b className="is-f">{current.volume}</b> 立方厘米
            </>
          )}
        </p>
        <p className="lab-feel">
          {current ? `${current.icon} ${current.name}：挤高了 ${current.volume} 毫升` : "🫗 先记住原来的水面：200 毫升"}
        </p>
        <div className="lab-controls" role="group" aria-label="挑一样东西放进量筒">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="lab-btn"
              aria-pressed={submerged === item.id}
              aria-label={`把${item.name}放进量筒`}
              onClick={() => setSubmerged(item.id)}
            >
              {item.icon} 放进{item.name}
            </button>
          ))}
          <button
            type="button"
            className="lab-btn is-quiet"
            disabled={submerged === null}
            aria-label="把量筒里的东西捞出来"
            onClick={() => setSubmerged(null)}
          >
            ↺ 捞出来
          </button>
        </div>
        <p className="lab-say" aria-live="polite">
          {current ? current.say : "挑一块小石头、纯金块或可疑王冠放进水里，看看水面涨高多少毫升！"}
        </p>
      </div>
    </div>
  );
}
