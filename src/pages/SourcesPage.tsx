import { library } from "../data/library";
import "./Questions.css";
import "./Units.css";

type Props = {
  onBack: () => void;
  onUnits: () => void;
  onTimeline: () => void;
  onTopic: () => void;
};

export function SourcesPage({ onBack, onUnits, onTimeline, onTopic }: Props) {
  return (
    <div className="qa units-page">
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← 回到首页</button>
        <div className="page-heading">
          <span>给大人和大孩子</span>
          <h1>📚 资料库</h1>
        </div>
      </header>

      <p className="units-note">这里的问答、动画和单位档案，数字都按下面这些资料核对过。想带孩子继续往下查，可以从这里出发；博物馆那一组适合周末去看真东西。</p>

      <div className="library">
        {library.map((shelf) => (
          <section key={shelf.title} className="library-shelf" aria-labelledby={`shelf-${shelf.title}`}>
            <h2 id={`shelf-${shelf.title}`}>{shelf.emoji} {shelf.title}</h2>
            <ul>
              {shelf.items.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noreferrer">{item.label}</a>
                  <small>{item.note}</small>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <nav className="units-next" aria-label="接着看">
        <button type="button" onClick={onUnits}><span aria-hidden="true">🧩</span><strong>单位大家庭</strong><small>7 块积木、拼出来的单位、词头和老单位</small></button>
        <button type="button" onClick={onTimeline}><span aria-hidden="true">🗓️</span><strong>测量大事年表</strong><small>从古埃及的肘尺到 2022 年的新词头</small></button>
        <button type="button" onClick={onTopic}><span aria-hidden="true">💬</span><strong>听小念和爸爸聊单位</strong><small>7 个基本单位、词头是怎么回事</small></button>
      </nav>
    </div>
  );
}
