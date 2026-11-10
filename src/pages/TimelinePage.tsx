import { questionById } from "../data/questions";
import { eras, milestones, timelineSources } from "../data/timeline";
import "./Questions.css";
import "./Units.css";

type Props = {
  heard: readonly string[];
  onBack: () => void;
  onOpen: (id: string) => void;
};

export function TimelinePage({ heard, onBack, onOpen }: Props) {
  return (
    <div className="qa units-page">
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← 回到首页</button>
        <div className="page-heading">
          <span>{milestones.length} 件大事</span>
          <h1>🗓️ 测量大事年表</h1>
        </div>
      </header>

      {eras.map((era) => (
        <section key={era.id} className="timeline-era" aria-labelledby={`era-${era.id}`}>
          <h2 id={`era-${era.id}`} className="units-title">{era.title}<small>{era.hint}</small></h2>
          <ol className="timeline">
            {milestones.filter((item) => item.era === era.id).map((item) => {
              const question = item.question ? questionById(item.question) : undefined;
              return (
                <li key={item.year + item.title} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true">{item.emoji}</span>
                  <div className="timeline-card">
                    <span className="timeline-year">{item.year}</span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                    {question && (
                      <button type="button" className="qa-watch" onClick={() => onOpen(question.id)}>
                        💬 {question.title}{heard.includes(question.id) ? " ⭐" : ""}
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      <details className="parent-tip">
        <summary>👨‍👩‍👧 给大人：年表的出处</summary>
        <p>年份按国际计量局、美国公制协会年表和我国政府公开文件核对；古代的年份是大约的。</p>
        <ul className="parent-sources">
          {timelineSources.map((source) => (
            <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>
          ))}
        </ul>
      </details>
    </div>
  );
}
