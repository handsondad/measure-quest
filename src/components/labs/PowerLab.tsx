import { useState } from "react";

const devices = [
  { id: "lamp", emoji: "💡", name: "LED 小灯", watts: 10 },
  { id: "tv", emoji: "📺", name: "电视", watts: 100 },
  { id: "ac", emoji: "❄️", name: "空调", watts: 1000 }
] as const;

type DeviceId = (typeof devices)[number]["id"];

const hourChoices = [0, 1, 10, 100] as const;

const format = (kwh: number) => String(Number(kwh.toFixed(2)));

export function PowerLab() {
  const [hours, setHours] = useState<Record<DeviceId, number>>({ lamp: 100, tv: 0, ac: 0 });
  const used = devices.map((d) => ({ ...d, hours: hours[d.id], kwh: (d.watts * hours[d.id]) / 1000 }));
  const total = used.reduce((sum, d) => sum + d.kwh, 0);
  const on = used.filter((d) => d.hours > 0);

  return (
    <div className="lab-body">
      <div className="lab-power">
        {used.map((d) => (
          <div key={d.id} className={d.hours > 0 ? "lab-power-row is-on" : "lab-power-row"}>
            <span className="lab-power-icon" aria-hidden="true">{d.emoji}</span>
            <div className="lab-power-name">
              <strong>{d.name}</strong>
              <small>{d.watts} 瓦</small>
            </div>
            <div className="lab-controls" role="group" aria-label={`${d.name}开多久`}>
              {hourChoices.map((h) => (
                <button key={h} type="button" className="lab-btn" aria-pressed={d.hours === h}
                  aria-label={h === 0 ? `关掉${d.name}` : `${d.name}开 ${h} 小时`}
                  onClick={() => setHours((all) => ({ ...all, [d.id]: h }))}>
                  {h === 0 ? "关" : `${h} 小时`}
                </button>
              ))}
            </div>
            <span className="lab-power-sum">{d.hours > 0 ? `${d.watts} × ${d.hours} ÷ 1000 = ${format(d.kwh)} 度` : "没开"}</span>
          </div>
        ))}
      </div>

      <div className="lab-meter" role="img" aria-label={`电表：一共 ${format(total)} 度`}>
        <span aria-hidden="true">🧾 电表</span>
        <b>{format(total)}</b>
        <span>度</span>
      </div>

      <p className="lab-say" aria-live="polite">
        {on.length === 0
          ? "电器都关着，电表一动不动。"
          : `${on.map((d) => `${d.name}开 ${d.hours} 小时`).join("，")}，一共用掉 ${format(total)} 度电。`}
        {total === 1 && on.length === 1 ? " 正好 1 度！" : ""}
      </p>
    </div>
  );
}
