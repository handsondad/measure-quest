import { LabView } from "../components/labs/LabView";
import { labById, labs } from "../data/labs";
import { questionWithLab, type LabId } from "../data/questions";
import "./Questions.css";

type Props = {
  id: LabId;
  onBack: () => void;
  onOpen: (id: string) => void;
  onLab: (id: LabId) => void;
};

export function LabPage({ id, onBack, onOpen, onLab }: Props) {
  const lab = labById(id);
  const question = questionWithLab(id);
  if (!lab) return null;

  return (
    <div className="qa lab-page">
      <header className="page-top">
        <button type="button" className="page-back" onClick={onBack}>← 回到首页</button>
        <div className="page-heading">
          <span>🔬 动手实验室</span>
          <h1>{lab.emoji} {lab.title}</h1>
        </div>
      </header>

      <main className="qa-main">
        <LabView id={id} />
        <section className="qa-wrap" aria-label="玩完以后">
          {question && (
            <div className="qa-related">
              <h3>🎬 听小念和爸爸讲这个道理</h3>
              <button type="button" onClick={() => onOpen(question.id)}>{question.title}</button>
            </div>
          )}
          <nav className="qlist-other" aria-label="换一个实验">
            <h2>换一个实验</h2>
            <div className="qlist-chips">
              {labs.map((item) => (
                <button key={item.id} type="button" aria-current={item.id === id ? "true" : undefined}
                  onClick={() => onLab(item.id)}>{item.emoji} {item.title}</button>
              ))}
            </div>
          </nav>
        </section>
      </main>
    </div>
  );
}
