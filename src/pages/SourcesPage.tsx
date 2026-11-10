import { library } from "../data/library";
import "./Questions.css";
import "./Units.css";

export function SourcesPage({ onBack }: { onBack: () => void }) {
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
    </div>
  );
}
