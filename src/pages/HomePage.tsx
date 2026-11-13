import { lazy, Suspense, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { LensState, RunLabCue } from "../components/RunLab3D";
import { WebGLBoundary } from "../components/WebGLBoundary";
import { labs } from "../data/labs";
import { questionsIn, topicGroups, topicsIn, type LabId, type TopicId } from "../data/questions";
import { milestones } from "../data/timeline";
import { baseUnits, derivedUnits, type BaseUnitId } from "../data/units";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { canUseWebGL, createBodyState } from "../lib/run-lab";
import "../components/RunLab.css";
import "./Questions.css";

const RunLab3D = lazy(() => import("../components/RunLab3D"));
const posterUrl = `${import.meta.env.BASE_URL}images/home-duo-poster.webp`;

const chats: readonly (readonly [string, string])[] = [
  ["爸爸，我量桌子是 8 拃，你量才 5 拃，听谁的？", "好问题！这就是人类为什么要发明尺子。我们从头讲起。"],
  ["世界上的单位那么多，到底有几种？", "最基本的只有 7 个，像 7 块积木，别的单位都是它们拼出来的。"],
  ["一分钟为什么是 60 秒，不是 100 秒？", "这要从四千年前的古巴比伦说起。挑一个主题，我们慢慢聊。"],
  ["我能自己动手试试吗？", "能！下面的「动手实验室」里有天平、量筒、温度计、电表，还有卫星找人。"]
];

/** 奇遇记系列的兄弟站点 */
const siblings: readonly (readonly [string, string])[] = [
  ["📜 汉字奇遇记", "https://handsondad.github.io/hanverse/"],
  ["🚀 身体奇遇记", "https://handsondad.github.io/bodyverse/"],
  ["🧪 化学奇遇记", "https://handsondad.github.io/chemverse/"]
];

type Props = {
  heard: readonly string[];
  onTopic: (id: TopicId) => void;
  onLab: (id: LabId) => void;
  onUnit: (id: BaseUnitId) => void;
  onUnits: () => void;
  onTimeline: () => void;
  onSources: () => void;
};

export function HomePage({ heard, onTopic, onLab, onUnit, onUnits, onTimeline, onSources }: Props) {
  const [webgl] = useState(canUseWebGL);
  const [saveData] = useState(() => Boolean((navigator as { connection?: { saveData?: boolean } }).connection?.saveData));
  const [load3d, setLoad3d] = useState(false);
  const [ready3d, setReady3d] = useState(false);
  const reducedMotion = useReducedMotion();
  const [stageRef, inView] = useInView<HTMLDivElement>();
  const [chat, setChat] = useState(0);
  const bodyRef = useRef(createBodyState());
  const lensRef = useRef<LensState>({ on: false, follow: true, x: 0, y: 0, r: 80 });
  const cueRef = useRef<RunLabCue>({ id: 0, clip: "Jump" });

  useEffect(() => {
    if (!webgl || saveData || !inView || load3d) return;
    let idle = 0;
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const timer = window.setTimeout(() => {
      if (win.requestIdleCallback) idle = win.requestIdleCallback(() => setLoad3d(true), { timeout: 1000 });
      else setLoad3d(true);
    }, 220);
    return () => {
      window.clearTimeout(timer);
      if (idle && win.cancelIdleCallback) win.cancelIdleCallback(idle);
    };
  }, [webgl, saveData, inView, load3d]);

  const handleReady = useCallback(() => {
    requestAnimationFrame(() => setReady3d(true));
  }, []);

  function talk() {
    cueRef.current = { id: cueRef.current.id + 1, clip: cueRef.current.id % 2 ? "Victory" : "Jump" };
    setChat((chat + 1) % chats.length);
  }

  const [nianLine, dadLine] = chats[chat];

  return (
    <div className="home">
      <header className="home-title">
        <h1><span aria-hidden="true">📏</span> 度量衡奇遇记</h1>
        <p>小念一问，爸爸一答，弄懂尺子、天平和钟表背后的故事</p>
      </header>

      <section aria-labelledby="home-duo-title">
        <h2 id="home-duo-title" className="home-section-title">小念和爸爸探索测量的奥秘</h2>
        <div
          ref={stageRef}
          className={`home-planet ${ready3d ? "is-3d" : ""}`}
          onPointerEnter={() => webgl && !saveData && setLoad3d(true)}
          onClick={(event) => {
            if (!ready3d && event.target === event.currentTarget) {
              if (webgl && !saveData) setLoad3d(true);
              talk();
            }
          }}
        >
          <img className="home-duo-poster" src={posterUrl} width={1140} height={380} fetchPriority="high" decoding="async" alt="" aria-hidden="true" />
          {webgl && !saveData && load3d && (
            <WebGLBoundary name="home-planet" fallback={null}>
              <Suspense fallback={null}>
                <RunLab3D character="nian" partner="dad" bodyRef={bodyRef} lensRef={lensRef} cueRef={cueRef}
                  reducedMotion={reducedMotion} active={inView} label="爸爸和小念站在小星球上，点他们会接着聊"
                  onCharacterTap={talk} onReady={handleReady} />
              </Suspense>
            </WebGLBoundary>
          )}
          <button type="button" className="home-bubble is-nian" onClick={talk}><b>小念</b>{nianLine}</button>
          <button type="button" className="home-bubble is-dad" onClick={talk}><b>爸爸</b>{dadLine}</button>
        </div>
      </section>

      <section aria-labelledby="home-map-title">
        <h2 id="home-map-title" className="home-section-title">🗺️ 一张图看懂测量</h2>
        <div className="home-map">
          <div className="home-bricks">
            <p><b>国际单位制只有 7 块积木</b>，点一块看它的档案：</p>
            <div className="home-bricks-row">
              {baseUnits.map((unit) => (
                <button key={unit.id} type="button" className="home-brick" style={{ "--bubble": unit.color } as CSSProperties}
                  onClick={() => onUnit(unit.id)} aria-label={`${unit.quantity}的单位：${unit.name}`}>
                  <span aria-hidden="true">{unit.emoji}</span>
                  <strong>{unit.name}</strong>
                  <small>{unit.quantity}</small>
                </button>
              ))}
            </div>
          </div>
          <div className="home-map-links">
            <button type="button" onClick={onUnits}><span aria-hidden="true">🧩</span><strong>单位大家庭</strong><small>7 块积木、{derivedUnits.length} 个拼出来的单位、词头和老单位</small></button>
            <button type="button" onClick={onTimeline}><span aria-hidden="true">🗓️</span><strong>测量大事年表</strong><small>{milestones.length} 件大事，从古埃及到今天</small></button>
            <button type="button" onClick={onSources}><span aria-hidden="true">📚</span><strong>资料库</strong><small>计量机构、博物馆、好读的文章</small></button>
          </div>
        </div>
      </section>

      {topicGroups.map((group) => (
        <section key={group.id} aria-labelledby={`home-topics-${group.id}`}>
          <h2 id={`home-topics-${group.id}`} className="home-section-title">{group.title}<small>{group.hint}</small></h2>
          <div className="home-systems">
            {topicsIn(group.id).map((topic) => {
              const list = questionsIn(topic.id);
              const done = list.filter((question) => heard.includes(question.id)).length;
              return (
                <button key={topic.id} type="button" className="system-card" style={{ "--bubble": topic.color } as CSSProperties}
                  onClick={() => onTopic(topic.id)}>
                  <span className="system-emoji" aria-hidden="true">{topic.emoji}</span>
                  <strong>{topic.title}</strong>
                  <small>{topic.kidHook}</small>
                  <span className="system-count">{list.length} 个问题{done > 0 && ` · ⭐ 看过 ${done}`} →</span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <section aria-labelledby="home-labs-title">
        <h2 id="home-labs-title" className="home-section-title">🔬 动手实验室</h2>
        <div className="home-labs">
          {labs.map((lab) => (
            <button key={lab.id} type="button" className="home-lab" style={{ "--bubble": lab.color } as CSSProperties} onClick={() => onLab(lab.id)}>
              <span aria-hidden="true">{lab.emoji}</span>
              <strong>{lab.title}</strong>
              <small>{lab.hook}</small>
            </button>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <span>奇遇记系列：</span>
        {siblings.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </footer>
    </div>
  );
}
