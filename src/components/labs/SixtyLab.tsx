import { useState } from "react";

const totals = [60, 100] as const;
const friendChoices = [2, 3, 4, 5, 6, 10, 12] as const;

export function SixtyLab() {
  const [total, setTotal] = useState<number>(60);
  const [friends, setFriends] = useState<number>(3);
  const each = Math.floor(total / friends);
  const rest = total % friends;
  const fair = friendChoices.filter((n) => total % n === 0);

  return (
    <div className="lab-body">
      <div className="lab-controls">
        <span className="lab-label">一共有：</span>
        {totals.map((n) => (
          <button key={n} type="button" className="lab-btn" aria-pressed={total === n} onClick={() => setTotal(n)}>🍬 {n} 颗</button>
        ))}
      </div>
      <div className="lab-controls">
        <span className="lab-label">分给：</span>
        {friendChoices.map((n) => (
          <button key={n} type="button" className="lab-btn is-round" aria-pressed={friends === n} onClick={() => setFriends(n)}
            aria-label={`分给 ${n} 个人`}>{n}</button>
        ))}
        <span className="lab-label">个人</span>
      </div>

      <div className="lab-plates" role="img" aria-label={`${total} 颗糖分给 ${friends} 个人，每人 ${each} 颗，剩下 ${rest} 颗`}>
        {Array.from({ length: friends }, (_, i) => (
          <div key={`${total}-${friends}-${i}`} className="lab-plate lab-pop" style={{ animationDelay: `${i * 60}ms` }}>
            <span className="lab-plate-who" aria-hidden="true">{["🧒", "👧", "👦", "🧒🏻", "👧🏽", "👦🏼"][i % 6]}</span>
            <span className="lab-candies" aria-hidden="true">
              {Array.from({ length: each }, (_, k) => <i key={k} style={{ background: ["#ff7a8a", "#ffcf3f", "#4fb6ff", "#6fd39a"][(i + k) % 4] }} />)}
            </span>
            <b>{each}</b>
          </div>
        ))}
        {rest > 0 && (
          <div className="lab-plate is-rest lab-pop">
            <span className="lab-plate-who" aria-hidden="true">😕</span>
            <span className="lab-candies" aria-hidden="true">{Array.from({ length: rest }, (_, k) => <i key={k} />)}</span>
            <b>剩 {rest}</b>
          </div>
        )}
      </div>

      <p className="lab-say" aria-live="polite">
        {rest === 0
          ? `${total} 颗分给 ${friends} 个人，每人 ${each} 颗，一颗不剩！`
          : `${total} 颗分给 ${friends} 个人，每人 ${each} 颗，还剩 ${rest} 颗分不开。`}
        {" "}这几个人数里，{total} 颗能分得一颗不剩的有：{fair.join("、")}。
      </p>
    </div>
  );
}
