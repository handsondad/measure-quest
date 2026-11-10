import type { CSSProperties } from "react";
import { Avatar } from "../components/Avatar";
import { baseUnits, derivedUnits, duLiangHeng, oldUnits, prefixes, unitById, type BaseUnitId } from "../data/units";
import "./Questions.css";
import "./Units.css";

type Props = {
  onBack: () => void;
  onUnit: (id: BaseUnitId) => void;
  onTimeline: () => void;
  onSources: () => void;
  onTopic: () => void;
};

const superscript: Record<string, string> = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
const powerOfTen = (power: number) => `10${[...String(power)].map((c) => superscript[c]).join("")}`;

/** 一块小积木：基本单位的名字，带它的颜色 */
export function UnitChip({ id, onUnit }: { id: BaseUnitId; onUnit?: (id: BaseUnitId) => void }) {
  const unit = unitById(id);
  if (!unit) return null;
  const style = { "--unit": unit.color } as CSSProperties;
  if (!onUnit) return <span className="unit-chip" style={style}>{unit.emoji} {unit.name}</span>;
  return (
    <button type="button" className="unit-chip" style={style} onClick={() => onUnit(id)} aria-label={`看看${unit.name}的档案`}>
      {unit.emoji} {unit.name}
    </button>
  );
}

export function UnitsPage({ onBack, onUnit, onTimeline, onSources, onTopic }: Props) {
  return (
    <div className="qa units-page">
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← 回到首页</button>
        <div className="page-heading">
          <span>一张图看懂测量</span>
          <h1>🧩 单位大家庭</h1>
        </div>
      </header>

      <div className="units-talk">
        <p><Avatar who="nian" /><strong>小念：</strong>米、千克、升、度电、勒克斯……世界上的单位这么多，到底有几种？</p>
        <p><Avatar who="dad" /><strong>爸爸：</strong>最基本的只有 7 个，就像 7 块积木。长度、质量、时间、电流、温度、物质的量、发光强度，各有一块；其他成千上万的单位，都是拿这 7 块拼出来、再用词头放大缩小的。</p>
      </div>

      <section aria-labelledby="units-base">
        <h2 id="units-base" className="units-title">① 七块积木：国际单位制的基本单位</h2>
        <div className="units-base">
          {baseUnits.map((unit) => (
            <button key={unit.id} type="button" className="units-base-card" style={{ "--unit": unit.color } as CSSProperties} onClick={() => onUnit(unit.id)}>
              <span className="units-base-emoji" aria-hidden="true">{unit.emoji}</span>
              <span className="units-base-q">{unit.quantity}</span>
              <strong>{unit.name} <code>{unit.symbol}</code></strong>
              <small>{unit.ask}</small>
              <span className="units-more">看档案 →</span>
            </button>
          ))}
        </div>
        <p className="units-note">2019 年 5 月 20 日起，这 7 个单位全都用自然界里永远不变的数来定，再也不靠锁在柜子里的尺子和砝码。</p>
      </section>

      <section aria-labelledby="units-dlh">
        <h2 id="units-dlh" className="units-title">② 古代的「度量衡」和今天的单位</h2>
        <div className="units-dlh">
          {duLiangHeng.map((row) => (
            <div key={row.char} className="units-dlh-col">
              <span className="units-dlh-char">{row.char}</span>
              <b>{row.means}</b>
              <small>古时候：{row.then}</small>
              <span className="units-dlh-arrow" aria-hidden="true">↓</span>
              {row.unit ? <UnitChip id={row.unit} onUnit={onUnit} /> : <span className="unit-chip is-plain">🥛 {row.now}</span>}
              {row.note && <small>{row.note}</small>}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="units-derived">
        <h2 id="units-derived" className="units-title">③ 用积木拼出来的单位</h2>
        <div className="units-derived">
          {derivedUnits.map((unit) => (
            <article key={unit.symbol} className="units-derived-card">
              <header>
                <span aria-hidden="true">{unit.emoji}</span>
                <div>
                  <strong>{unit.name} <code>{unit.symbol}</code></strong>
                  <small>{unit.quantity} · {unit.example}</small>
                </div>
              </header>
              <p className="units-recipe">{unit.recipe}</p>
              <div className="units-uses">
                {unit.uses.map((id) => <UnitChip key={id} id={id} />)}
                {unit.legalOnly && <span className="units-tag">我国法定单位</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="units-prefix">
        <h2 id="units-prefix" className="units-title">④ 词头：把单位放大、缩小</h2>
        <p className="units-note">词头加在单位前面，意思到哪儿都一样：千米、千克、千瓦都是一千倍。2022 年加了 4 个新词头（标 ✨ 的）。</p>
        <div className="units-table-wrap">
          <table className="units-table units-prefixes">
            <thead><tr><th>词头</th><th>符号</th><th>多少倍</th><th>在哪儿见过</th></tr></thead>
            <tbody>
              {prefixes.map((prefix) => (
                <tr key={prefix.symbol} className={prefix.power < 0 ? "is-small" : undefined}>
                  <td><b>{prefix.name}</b>{prefix.isNew && " ✨"}</td>
                  <td><code>{prefix.symbol}</code></td>
                  <td>
                    {powerOfTen(prefix.power)}
                    <small className="units-say">{prefix.power > 0 ? `1 后面 ${prefix.power} 个 0` : `分成 1 后面 ${-prefix.power} 个 0 份`}</small>
                  </td>
                  <td>{prefix.example ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="units-old">
        <h2 id="units-old" className="units-title">⑤ 还会碰到的老单位</h2>
        <div className="units-old">
          {oldUnits.map((group) => (
            <article key={group.title} className="units-old-card">
              <h3>{group.emoji} {group.title}</h3>
              <p>{group.note}</p>
              <table className="units-table">
                <tbody>
                  {group.rows.map((row) => (
                    <tr key={row.name}><td className="units-kind">{row.kind}</td><td>{row.name}</td><td><b>{row.value}</b></td></tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>
      </section>

      <details className="parent-tip units-constants">
        <summary>👨‍👩‍👧 给大人：定住 7 个单位的 7 个常数</summary>
        <p>2018 年第 26 届国际计量大会决定，自 2019 年 5 月 20 日起，国际单位制由下面 7 个数值固定的常数来定义。</p>
        <ul>
          {baseUnits.map((unit) => <li key={unit.id}><b>{unit.name}</b>：{unit.constant}</li>)}
        </ul>
      </details>

      <nav className="units-next" aria-label="接着看">
        <button type="button" onClick={onTimeline}><span aria-hidden="true">🗓️</span><strong>测量大事年表</strong><small>从古埃及的肘尺到 2022 年的新词头</small></button>
        <button type="button" onClick={onTopic}><span aria-hidden="true">💬</span><strong>听小念和爸爸聊单位</strong><small>7 个基本单位、词头是怎么回事</small></button>
        <button type="button" onClick={onSources}><span aria-hidden="true">📚</span><strong>资料库</strong><small>计量机构、博物馆、好读的文章</small></button>
      </nav>
    </div>
  );
}
